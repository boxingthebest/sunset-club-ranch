import './stirrup-welcome.css'

const VIDEO_URL = '/media/guest-guide/celebrations/cabana-bartender.mp4'
const POSTER_URL = '/media/guest-guide/celebrations/cabana-bartender-poster.webp'
const initializedSections = new WeakMap()
const VISIBLE_RATIO = 0.2
const LOAD_TIMEOUT_MS = 12000
const CONFETTI_MS = 3800

/** Static public-homepage copy only. Insert immediately after the existing home hero. */
export function stirrupWelcome() {
  return `
    <section id="meet-stirrup" class="stw-welcome" data-stirrup-welcome aria-labelledby="stw-heading">
      <div class="stw-layout">
        <figure class="stw-artwork">
          <div class="stw-scene" data-stw-scene role="img" aria-label="Stirrup the horse bartender mixes and serves a cocktail, with Lulu on the left and Scout on the right, in an illustrated ranch cabana.">
            <div class="stw-art-fallback" aria-hidden="true"><span>Stirrup &amp; the ranch crew</span></div>
            <img class="stw-poster" data-stw-poster src="${POSTER_URL}" alt="" aria-hidden="true" width="1280" height="720" loading="lazy" decoding="async" draggable="false" />
            <video id="stw-video" class="stw-video" data-stw-video poster="${POSTER_URL}" width="1280" height="720" preload="none" muted playsinline aria-hidden="true" tabindex="-1"></video>
            <div class="stw-confetti" data-stw-confetti aria-hidden="true"></div>
          </div>
          <figcaption class="stw-caption"><span class="stw-caption-rule" aria-hidden="true"></span>Stirrup · Cocktail cowboy<span class="stw-caption-rule" aria-hidden="true"></span></figcaption>
        </figure>
        <div class="stw-speech-card">
          <p class="stw-eyebrow">Meet the ranch crew</p>
          <h2 id="stw-heading" class="stw-heading">Howdy, I’m Stirrup.</h2>
          <p class="stw-tagline">Your resident cocktail cowboy.</p>
          <p class="stw-message">Welcome to Sunset Club Ranch. Lulu, Scout and I are here to shake things up.</p>
          <div class="stw-controls" aria-label="Stirrup animation controls">
            <button class="stw-replay" type="button" data-stw-replay aria-controls="stw-video" aria-describedby="stw-status">Shake things up<span aria-hidden="true"> ↻</span></button>
            <button class="stw-pause" type="button" data-stw-pause aria-controls="stw-video" aria-describedby="stw-status" hidden>Pause animation</button>
          </div>
          <p id="stw-status" class="stw-status" data-stw-status role="status" aria-live="polite" aria-atomic="true">A silent, eight-second hello. Plays once when in view.</p>
          <p class="stw-disclosure">An animated welcome from Stirrup, Lulu &amp; Scout.</p>
        </div>
      </div>
    </section>`
}

/** Call after inserting the markup. Idempotent; returns an optional teardown function. */
export function initStirrupWelcome() {
  if (typeof document === 'undefined') return () => {}
  const section = document.querySelector('[data-stirrup-welcome]')
  if (!section) return () => {}
  if (initializedSections.has(section)) return initializedSections.get(section)

  const scene = section.querySelector('[data-stw-scene]')
  const video = section.querySelector('[data-stw-video]')
  const poster = section.querySelector('[data-stw-poster]')
  const replay = section.querySelector('[data-stw-replay]')
  const pause = section.querySelector('[data-stw-pause]')
  const status = section.querySelector('[data-stw-status]')
  const confetti = section.querySelector('[data-stw-confetti]')
  if (!scene || !video || !poster || !replay || !pause || !status || !confetti) return () => {}

  const motion = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)') : null
  const connection = typeof navigator !== 'undefined' ? navigator.connection : null
  const listeners = []
  let observer
  let welcomeObserver
  let disposed = false
  let inView = false
  let sourceAttached = false
  let failed = false
  let hasStarted = false
  let completed = false
  let wantsPlayback = false
  let manuallyPaused = false
  let playing = false
  let loading = false
  let playDenied = false
  let pendingBurst = false
  let requestId = 0
  let loadTimer
  let confettiTimer
  let autoplayConsumed = Boolean(motion?.matches || connection?.saveData)

  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  video.loop = false

  const blocked = () => Boolean(motion?.matches || connection?.saveData)
  const canRun = () => !disposed && section.isConnected && !blocked() && inView && !document.hidden

  function listen(target, event, callback, options) {
    if (!target?.addEventListener) return
    target.addEventListener(event, callback, options)
    listeners.push(() => target.removeEventListener(event, callback, options))
  }

  function clearConfetti() {
    clearTimeout(confettiTimer)
    confetti.replaceChildren()
  }

  function celebrate() {
    clearConfetti()
    if (!canRun() || !playing) return
    const fragment = document.createDocumentFragment()
    // Twenty-four small pieces per edge; all motion is clipped to the artwork.
    for (let index = 0; index < 48; index += 1) {
      const piece = document.createElement('i')
      const left = index < 24
      piece.className = 'stw-confetti-piece'
      piece.style.left = left ? '4%' : '96%'
      piece.style.top = `${56 + Math.random() * 28}%`
      piece.style.setProperty('--stw-dx', `${(left ? 1 : -1) * (12 + Math.random() * 72)}px`)
      piece.style.setProperty('--stw-rise', `${-45 - Math.random() * 110}px`)
      piece.style.setProperty('--stw-fall', `${70 + Math.random() * 100}px`)
      piece.style.setProperty('--stw-turn', `${Math.random() * 540 - 270}deg`)
      piece.style.setProperty('--stw-duration', `${2400 + Math.random() * 800}ms`)
      piece.style.setProperty('--stw-delay', `${Math.random() * 250}ms`)
      piece.style.setProperty('--stw-color', index % 2 ? '#c79754' : '#2f5946')
      fragment.append(piece)
    }
    confetti.append(fragment)
    confettiTimer = setTimeout(clearConfetti, CONFETTI_MS)
  }

  function updateControls() {
    const preferenceReason = motion?.matches
      ? 'Animation is off because reduced motion is enabled.'
      : connection?.saveData ? 'Animation is off to respect your data-saving setting.' : ''
    replay.disabled = Boolean(preferenceReason) || failed || !inView
    pause.disabled = Boolean(preferenceReason) || failed || !inView
    pause.hidden = Boolean(preferenceReason) || failed || completed || (!hasStarted && !loading && !playDenied)
    pause.textContent = playing || loading ? 'Pause animation' : playDenied ? 'Play animation' : 'Resume animation'
    section.classList.toggle('stw-is-playing', playing && !blocked())
    section.dataset.stwState = preferenceReason ? 'poster-only' : failed ? 'failed' : playing ? 'playing' : loading ? 'loading' : completed ? 'completed' : playDenied ? 'play-required' : manuallyPaused ? 'paused' : 'ready'
    const message = preferenceReason || (failed
      ? 'The animation could not load. Enjoy the still illustration instead.'
      : playDenied ? 'Select “Play animation” or “Shake things up” to start.'
      : loading ? 'Getting Stirrup’s eight-second hello ready…'
      : playing ? 'Stirrup’s silent hello is playing. You can pause at any time.'
      : completed ? 'That’s Stirrup! Select “Shake things up” to replay.'
      : manuallyPaused ? 'Animation paused. Resume or start another hello.'
      : wantsPlayback && (!inView || document.hidden) ? 'Animation paused while the artwork is out of view.'
      : !inView ? 'A silent, eight-second hello. Bring the artwork into view to play.'
      : autoplayConsumed ? 'Ready when you are. Select “Shake things up” to play.'
      : 'A silent, eight-second hello. Plays once when in view.')
    if (status.textContent !== message) status.textContent = message
  }

  function pausePlayback() {
    requestId += 1 // Ignore a late resolution/rejection from an interrupted play request.
    loading = false
    playing = false
    clearTimeout(loadTimer)
    clearConfetti()
    try { video.pause() } catch { /* Keep the static illustration available. */ }
    updateControls()
  }

  function detachSource() {
    sourceAttached = false
    video.removeAttribute('src')
    video.preload = 'none'
    try { video.load() } catch { /* Some restricted environments cannot reload media. */ }
  }

  function failVideo() {
    if (disposed || !sourceAttached) return
    failed = true
    wantsPlayback = false
    pendingBurst = false
    playDenied = false
    pausePlayback()
    detachSource()
    updateControls()
  }

  function armLoadTimeout() {
    clearTimeout(loadTimer)
    loadTimer = setTimeout(() => {
      if (loading && canRun()) failVideo()
    }, LOAD_TIMEOUT_MS)
  }

  function requestPlayback(restart = false, burst = false) {
    if (!canRun() || failed) return
    if (restart) {
      pausePlayback()
      completed = false
    }
    // There is deliberately no MP4 src/source in the static HTML, and this is
    // the only place it is attached: normal preferences, >=20% visible, foreground.
    if (!sourceAttached) {
      sourceAttached = true
      video.preload = 'auto'
      video.src = VIDEO_URL
    }
    if (restart) {
      try { video.currentTime = 0 } catch { /* A new source already starts at zero. */ }
    }
    manuallyPaused = false
    wantsPlayback = true
    playDenied = false
    pendingBurst = pendingBurst || burst
    loading = true
    const currentRequest = ++requestId
    updateControls()
    armLoadTimeout()
    const rejected = error => {
      if (disposed || currentRequest !== requestId) return
      if (error?.name === 'NotSupportedError' || video.error) {
        failVideo()
        return
      }
      clearTimeout(loadTimer)
      loading = false
      playing = false
      wantsPlayback = false
      pendingBurst = false
      playDenied = true // Autoplay denial is recoverable by an explicit user gesture.
      updateControls()
    }
    try {
      const result = video.play()
      if (result?.then) {
        result.then(() => {
          if (disposed || currentRequest !== requestId) return
          if (!canRun() || manuallyPaused || !wantsPlayback || completed) pausePlayback()
        }).catch(rejected)
      }
    } catch (error) {
      rejected(error)
    }
  }

  function measureVisibility() {
    const box = scene.getBoundingClientRect()
    const width = window.innerWidth || document.documentElement.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight
    const visibleWidth = Math.max(0, Math.min(box.right, width) - Math.max(box.left, 0))
    const visibleHeight = Math.max(0, Math.min(box.bottom, height) - Math.max(box.top, 0))
    inView = box.width > 0 && box.height > 0 && (visibleWidth * visibleHeight) / (box.width * box.height) >= VISIBLE_RATIO
  }

  function reconcile() {
    if (disposed) return
    if (!section.isConnected) { dispose(); return }
    if (!canRun()) {
      if (playing || loading || !video.paused) pausePlayback()
      else updateControls()
      return
    }
    // Resume only an interrupted, active performance—not manual pauses or completion.
    if (wantsPlayback && !manuallyPaused && !completed) {
      if (!playing && !loading && video.paused) requestPlayback()
    } else if (!autoplayConsumed && !failed) {
      autoplayConsumed = true
      requestPlayback()
    }
    updateControls()
  }

  function syncPreferences() {
    if (blocked()) {
      autoplayConsumed = true
      wantsPlayback = false
      manuallyPaused = true
      hasStarted = false
      completed = false
      pendingBurst = false
      playDenied = false
      pausePlayback()
      if (sourceAttached) detachSource()
    }
    // Turning motion back on never restarts the scene without a visitor gesture.
    reconcile()
  }

  listen(poster, 'error', () => { poster.hidden = true })
  if (poster.complete && poster.naturalWidth === 0) poster.hidden = true
  listen(video, 'playing', () => {
    if (!canRun() || manuallyPaused || !wantsPlayback || completed || failed) { pausePlayback(); return }
    clearTimeout(loadTimer)
    loading = false
    playing = true
    hasStarted = true
    playDenied = false
    updateControls()
    if (pendingBurst) { pendingBurst = false; celebrate() }
  })
  listen(video, 'pause', () => {
    playing = false
    clearConfetti()
    if (!loading) clearTimeout(loadTimer)
    updateControls()
  })
  listen(video, 'waiting', () => {
    if (!wantsPlayback || !canRun() || failed) return
    playing = false
    loading = true
    clearConfetti()
    armLoadTimeout()
    updateControls()
  })
  listen(video, 'ended', () => {
    completed = true
    wantsPlayback = false
    manuallyPaused = false
    pendingBurst = false
    pausePlayback()
  })
  listen(video, 'error', failVideo)
  listen(replay, 'click', () => {
    measureVisibility()
    if (!canRun() || failed) { updateControls(); return }
    autoplayConsumed = true
    pendingBurst = false
    requestPlayback(true, true)
  })
  listen(pause, 'click', () => {
    measureVisibility()
    if (!canRun() || failed || completed) { updateControls(); return }
    autoplayConsumed = true
    if (playing || loading) {
      manuallyPaused = true
      wantsPlayback = false
      pendingBurst = false
      pausePlayback()
    } else requestPlayback()
  })
  listen(document, 'visibilitychange', reconcile)
  listen(connection, 'change', syncPreferences)
  if (motion?.addEventListener) listen(motion, 'change', syncPreferences)
  else if (motion?.addListener) {
    motion.addListener(syncPreferences)
    listeners.push(() => motion.removeListener(syncPreferences))
  }

  function dispose() {
    if (disposed) return
    disposed = true
    wantsPlayback = false
    pendingBurst = false
    pausePlayback()
    observer?.disconnect()
    welcomeObserver?.disconnect()
    document.body.classList.remove('stw-welcome-in-view')
    listeners.forEach(remove => remove())
    if (sourceAttached) detachSource()
    initializedSections.delete(section)
  }
  initializedSections.set(section, dispose)

  // The original hero welcome stays intact, but cannot cover the new crew or controls.
  const syncLegacyWelcome = () => {
    const box = section.getBoundingClientRect()
    document.body.classList.toggle('stw-welcome-in-view', box.bottom > 0 && box.top < window.innerHeight)
  }
  syncLegacyWelcome()
  if (typeof window.IntersectionObserver === 'function') {
    welcomeObserver = new window.IntersectionObserver(syncLegacyWelcome, { threshold: [0, .01] })
    welcomeObserver.observe(section)
  } else {
    listen(window, 'scroll', syncLegacyWelcome, { passive: true })
    listen(window, 'resize', syncLegacyWelcome, { passive: true })
  }

  if (typeof window.IntersectionObserver === 'function') {
    observer = new window.IntersectionObserver(entries => {
      const entry = entries.find(item => item.target === scene)
      if (!entry) return
      inView = entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO
      reconcile()
    }, { threshold: [0, VISIBLE_RATIO, 1] })
    observer.observe(scene)
  } else {
    const remeasure = () => { measureVisibility(); reconcile() }
    listen(window, 'scroll', remeasure, { passive: true })
    listen(window, 'resize', remeasure, { passive: true })
  }
  measureVisibility()
  syncPreferences()
  return dispose
}
