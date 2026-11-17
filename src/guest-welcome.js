import './guest-welcome.css'

const CONFIG_URL = '/guest-welcome.json'
const CONFIG_TIMEOUT_MS = 2500
const BURST_MS = 4200
const PARTICLES_PER_SIDE = 40
const pendingMounts = new WeakMap()

const DEFAULTS = Object.freeze({
  birthday: { headline: 'Happy birthday!', message: 'Another year, a little more desert magic.' },
  wedding: { headline: 'To your happily ever after!', message: 'Love looks lovely in the desert.' },
  anniversary: { headline: 'Happy anniversary!', message: 'Here’s to your next beautiful chapter.' },
  retreat: { headline: 'Room to reconnect.', message: 'Slow down. Settle in. Find your desert rhythm.' },
  stay: { headline: 'Welcome to Sunset Club Ranch', message: 'We’re excited to host you. Settle in—your desert escape starts here.' },
  festival: { headline: 'Your festival weekend starts here.', message: 'Welcome to your desert home base.' },
  corporate: { headline: 'Welcome to your ranch retreat.', message: 'Great people. A fresh perspective. Room to connect.' },
})

const MASCOTS = Object.freeze({
  birthday: ['guest-guide/celebrations/lulu-birthday.webp', 'guest-guide/celebrations/scout-birthday.webp'],
  wedding: ['mascots/lulu-3d.webp', 'mascots/scout-tuxedo-3d.webp'],
  anniversary: ['mascots/lulu-3d.webp', 'mascots/scout-tuxedo-3d.webp'],
  retreat: ['mascots/lulu-spa-recovery-3d.webp', 'mascots/scout-spa-recovery-3d.webp'],
  festival: ['mascots/lulu-festival-3d.webp', 'mascots/scout-festival-3d.webp'],
  corporate: ['mascots/lulu-business-suit-3d.webp', 'mascots/scout-3d.webp'],
  stay: ['mascots/lulu-3d.webp', 'mascots/scout-3d.webp'],
})

const THEME_MASCOTS = Object.freeze({
  cabana: ['guest-guide/celebrations/lulu-cabana.webp', 'guest-guide/celebrations/scout-cabana.webp'],
})

function compactText(value, limit) {
  return typeof value === 'string'
    ? Array.from(value.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim()).slice(0, limit).join('')
    : ''
}

/** Treat the name field as a first name only, never a full name or a date. */
export function firstNameOnly(value) {
  const first = compactText(value, 80).split(' ')[0]
  return /^[\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*$/u.test(first)
    ? Array.from(first).slice(0, 28).join('')
    : ''
}

/** Disabled / invalid config produces no banner. Names stay first-name-only; display copy is plain text. */
export function normalizeGuestWelcome(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config) || config.enabled !== true) return null
  const requestedOccasion = compactText(config.occasion, 24).toLowerCase()
  const aliases = { birthdays: 'birthday', weddings: 'wedding', anniversaries: 'anniversary', retreats: 'retreat' }
  const occasion = aliases[requestedOccasion] || requestedOccasion
  const kind = Object.hasOwn(DEFAULTS, occasion) ? occasion : 'stay'
  const requestedTheme = compactText(config.theme, 24).toLowerCase()
  const theme = Object.hasOwn(THEME_MASCOTS, requestedTheme) ? requestedTheme : 'default'
  const names = Array.isArray(config.names) ? config.names.slice(0, 4).map(firstNameOnly).filter(Boolean) : []
  const name = names.length ? names.join(' & ') : firstNameOnly(config.name)
  const rawMilestone = compactText(config.milestone, 12).toLowerCase()
  const milestone = /^\d{1,3}(st|nd|rd|th)$/.test(rawMilestone) ? rawMilestone : ''
  let headline = DEFAULTS[kind].headline
  if (kind === 'birthday') headline = `Happy ${milestone ? `${milestone} Birthday` : 'Birthday'}${name ? `, ${name}` : ''}!`
  if (kind === 'wedding' && name) headline = `Cheers to ${name}!`
  if (kind === 'anniversary') headline = `Happy ${milestone ? `${milestone} ` : ''}anniversary${name ? `, ${name}` : ''}!`
  if (kind === 'stay' && name) headline = `Welcome, ${name}!`
  const group = compactText(config.group, 40)
  const welcome = name ? `Welcome, ${name}${group ? `, ${group}` : ''}, to Sunset Club Ranch.` : DEFAULTS[kind].message
  return {
    name,
    occasion: kind,
    theme,
    milestone,
    headline: compactText(config.headline, 80) || headline,
    message: compactText(config.message, 140) || welcome,
    signoff: compactText(config.signoff, 80) || 'A welcome from Lulu & Scout',
  }
}

async function loadConfig() {
  const controller = new AbortController()
  let timeout
  // Racing also bounds environments where a mocked fetch ignores AbortSignal.
  const deadline = new Promise((_, reject) => {
    timeout = setTimeout(() => {
      controller.abort()
      reject(new Error('Welcome config timed out'))
    }, CONFIG_TIMEOUT_MS)
  })
  try {
    const request = (async () => {
      const response = await fetch(CONFIG_URL, { cache: 'no-store', signal: controller.signal })
      if (!response.ok) return null
      return normalizeGuestWelcome(await response.json())
    })()
    return await Promise.race([request, deadline])
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

function element(tag, className, text) {
  const node = document.createElement(tag)
  node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

/** The complete cabana scene owns its motion; never animate its enclosing still. */
function createCabanaScene(region, replay, motionNote, motion, celebrate, clearBurst) {
  const scene = element('div', 'rk-guest-welcome__scene')
  scene.hidden = true
  scene.setAttribute('role', 'img')
  scene.setAttribute('aria-label', 'A watercolor ranch cabana: a horse bartender in the center mixes a cocktail, with Lulu on the left and Scout on the right.')
  const poster = element('img', 'rk-guest-welcome__scene-poster')
  poster.alt = ''
  poster.width = 1600
  poster.height = 900
  poster.decoding = 'async'
  poster.draggable = false
  const video = element('video', 'rk-guest-welcome__video')
  video.id = 'rk-guest-welcome-cabana-video'
  video.width = 1600
  video.height = 900
  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  video.preload = 'metadata'
  video.loop = false
  video.setAttribute('muted', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('aria-hidden', 'true')
  video.tabIndex = -1
  video.poster = '/media/guest-guide/celebrations/cabana-bartender-poster.webp'
  scene.append(poster, video)
  region.prepend(scene)

  const controls = element('div', 'rk-guest-welcome__controls')
  const pause = element('button', 'rk-guest-welcome__pause', 'Pause animation')
  pause.type = 'button'
  pause.hidden = true
  pause.setAttribute('aria-controls', video.id)
  replay.setAttribute('aria-controls', video.id)
  replay.before(controls)
  controls.append(replay, pause)

  const connection = typeof navigator !== 'undefined' ? navigator.connection : null
  const listeners = []
  let observer
  let started = false
  let disposed = false
  let posterReady = false
  let posterSettled = false
  let videoReady = false
  let videoFailed = false
  let sourceSet = false
  let available = false
  let inView = false
  let fallbackLoaded = false
  let autoplayConsumed = Boolean(motion?.matches || connection?.saveData)
  let wantsPlayback = false
  let manuallyPaused = false
  let hasStarted = false
  let playRejected = false
  let pendingBurst = false
  let playPending = false
  let requestId = 0

  const blocked = () => Boolean(motion?.matches || connection?.saveData)
  const canRun = () => !disposed && region.isConnected && !blocked() && inView && !document.hidden

  function listen(target, type, callback, options) {
    if (!target?.addEventListener) return
    target.addEventListener(type, callback, options)
    listeners.push(() => target.removeEventListener(type, callback, options))
  }

  function updateControls() {
    replay.disabled = blocked() || !posterSettled || (!sourceSet && !videoFailed) || (videoFailed && available)
    motionNote.textContent = motion?.matches
      ? 'Welcome animation is off while reduced motion is enabled.'
      : connection?.saveData
        ? 'Welcome animation is off to respect your data-saving setting.'
        : videoFailed && available
          ? 'The welcome illustration is available; its animation could not load.'
          : 'The welcome animation is loading.'
    if (replay.disabled) replay.setAttribute('aria-describedby', motionNote.id)
    else replay.removeAttribute('aria-describedby')
    pause.hidden = blocked() || videoFailed || (!hasStarted && !playRejected) || video.ended
    pause.textContent = playRejected ? 'Play animation' : wantsPlayback && !manuallyPaused ? 'Pause animation' : 'Resume animation'
  }

  function updateScene() {
    available = posterReady || (videoReady && !videoFailed && !blocked())
    scene.hidden = !available
    poster.hidden = !posterReady
    region.classList.toggle('has-cabana-scene', available)
    // A decoded video frame is also a safe fallback if the poster is unavailable.
    scene.classList.toggle('has-video-frame', !videoFailed && !blocked() && videoReady && (!posterReady || hasStarted))
    updateControls()
  }

  function measureVisibility() {
    const target = available ? scene : region
    const box = target.getBoundingClientRect()
    const height = window.innerHeight || document.documentElement.clientHeight
    const width = window.innerWidth || document.documentElement.clientWidth
    const visibleHeight = Math.max(0, Math.min(box.bottom, height) - Math.max(box.top, 0))
    inView = box.width > 0 && box.height > 0 && box.right > 0 && box.left < width && visibleHeight >= Math.min(box.height * .15, 48)
  }

  function pauseVideo() {
    requestId += 1
    playPending = false
    video.pause()
    clearBurst()
    updateControls()
  }

  function playVideo(restart = false, burst = false) {
    if (!canRun() || !sourceSet || videoFailed) return false
    if (restart) {
      pauseVideo()
      try { video.currentTime = 0 } catch { /* Metadata may still be loading. */ }
    }
    wantsPlayback = true
    manuallyPaused = false
    hasStarted = true
    playRejected = false
    pendingBurst = pendingBurst || burst
    updateControls()
    if (playPending || (!video.paused && !restart)) return true
    playPending = true
    const currentRequest = ++requestId
    const failed = () => {
      if (disposed || currentRequest !== requestId) return
      playPending = false
      if (!canRun() || manuallyPaused || !wantsPlayback) return
      // Autoplay denial is not a broken asset: retain an explicit Play control.
      wantsPlayback = false
      pendingBurst = false
      playRejected = true
      updateControls()
    }
    try {
      const result = video.play()
      if (result?.then) {
        result.then(() => {
          if (disposed || currentRequest !== requestId) return
          playPending = false
          if (!canRun() || manuallyPaused || !wantsPlayback) pauseVideo()
        }).catch(failed)
      } else {
        playPending = false
      }
    } catch {
      failed()
    }
    return true
  }

  function reconcile() {
    if (!started || disposed) return
    updateScene()
    measureVisibility()
    if (!canRun()) {
      pauseVideo()
      return
    }
    // Visibility resumes only an active performance, never a manual pause or an ended clip.
    if (wantsPlayback && !manuallyPaused && !video.ended) {
      if (video.paused) playVideo()
      return
    }
    if (autoplayConsumed || !posterSettled) return
    if (videoFailed) {
      if (!available && fallbackLoaded) {
        autoplayConsumed = true
        celebrate()
      }
    } else if (sourceSet) {
      autoplayConsumed = true
      playVideo(false, true)
    }
  }

  function syncPreferences() {
    if (blocked()) {
      autoplayConsumed = true
      wantsPlayback = false
      manuallyPaused = true
      hasStarted = false
      playRejected = false
      pendingBurst = false
      pauseVideo()
      // Do not fetch the MP4 for reduced-motion or save-data guests.
      if (sourceSet) {
        sourceSet = false
        videoReady = false
        video.removeAttribute('src')
        video.load()
      }
    } else if (started && !sourceSet && !videoFailed) {
      sourceSet = true
      video.src = '/media/guest-guide/celebrations/cabana-bartender.mp4'
      video.load()
    }
    reconcile()
  }

  listen(poster, 'load', () => {
    posterReady = true
    posterSettled = true
    reconcile()
  })
  listen(poster, 'error', () => {
    posterReady = false
    posterSettled = true
    poster.hidden = true
    reconcile()
  })
  const ready = () => {
    if (!sourceSet || videoFailed) return
    videoReady = true
    reconcile()
  }
  listen(video, 'loadeddata', ready)
  listen(video, 'canplay', ready)
  listen(video, 'playing', () => {
    playPending = false
    if (!canRun() || manuallyPaused || !wantsPlayback) {
      pauseVideo()
      return
    }
    videoReady = true
    updateScene()
    if (pendingBurst) {
      pendingBurst = false
      celebrate()
    }
  })
  listen(video, 'ended', () => {
    wantsPlayback = false
    pendingBurst = false
    manuallyPaused = false
    updateControls()
  })
  listen(video, 'error', () => {
    if (!sourceSet) return
    videoFailed = true
    videoReady = false
    wantsPlayback = false
    pendingBurst = false
    pauseVideo()
    reconcile()
  })
  listen(pause, 'click', () => {
    autoplayConsumed = true
    if (wantsPlayback && !manuallyPaused) {
      manuallyPaused = true
      wantsPlayback = false
      pendingBurst = false
      pauseVideo()
    } else {
      measureVisibility()
      playVideo()
    }
  })
  listen(document, 'visibilitychange', reconcile)
  listen(window, 'scroll', reconcile, { passive: true })
  listen(window, 'resize', reconcile, { passive: true })
  listen(connection, 'change', syncPreferences)

  return {
    scene,
    get available() { return available },
    fallbackLoaded: () => { fallbackLoaded = true; reconcile() },
    syncPreferences,
    replay: () => {
      if (replay.disabled) return
      autoplayConsumed = true
      measureVisibility()
      if (videoFailed && !available) celebrate()
      else playVideo(true, true)
    },
    start: () => {
      started = true
      if (typeof window.IntersectionObserver === 'function') {
        observer = new window.IntersectionObserver(reconcile, { threshold: [0, .15] })
        observer.observe(region)
        observer.observe(scene)
      }
      poster.src = '/media/guest-guide/celebrations/cabana-bartender-poster.webp'
      syncPreferences()
    },
    dispose: () => {
      disposed = true
      wantsPlayback = false
      pauseVideo()
      observer?.disconnect()
      listeners.forEach(remove => remove())
      video.removeAttribute('src')
      video.load()
    },
  }
}

function createBanner(config) {
  const region = element('section', 'rk-guest-welcome')
  region.dataset.guestWelcome = ''
  region.dataset.occasion = config.occasion
  region.dataset.theme = config.theme
  region.setAttribute('role', 'region')
  region.setAttribute('aria-labelledby', 'rk-guest-welcome-heading')

  if (config.theme === 'cabana') {
    const artwork = element('img', 'rk-guest-welcome__artwork')
    artwork.alt = ''
    artwork.setAttribute('aria-hidden', 'true')
    artwork.width = 210
    artwork.height = 140
    artwork.decoding = 'async'
    artwork.draggable = false
    artwork.addEventListener('error', () => { artwork.hidden = true }, { once: true })
    artwork.src = '/media/guest-guide/celebrations/cabana-watercolor-scene.webp'
    region.append(artwork)
  }

  const copy = element('div', 'rk-guest-welcome__copy')
  const heading = element('h2', 'rk-guest-welcome__heading', config.headline)
  heading.id = 'rk-guest-welcome-heading'
  copy.append(
    heading,
    element('p', 'rk-guest-welcome__message', config.message),
    element('p', 'rk-guest-welcome__signoff', config.signoff),
  )

  const replay = element('button', 'rk-guest-welcome__replay', config.theme === 'cabana' ? 'Mix another welcome' : config.occasion === 'stay' ? 'Replay welcome' : 'Celebrate again')
  replay.type = 'button'
  const motionNote = element('span', 'rk-guest-welcome__sr-only', 'Celebration animation is off while reduced motion is enabled.')
  motionNote.id = 'rk-guest-welcome-motion-note'

  const motion = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null
  let autoplayConsumed = Boolean(motion?.matches)
  let cleanupTimer
  let movementTimer
  let stopObserving = () => {}
  let cabana
  const lanes = []
  const images = []
  const particleColors = config.theme === 'cabana'
    ? ['#b18c48', '#2f5946', '#fff5db']
    : ['#e4b85d', '#f29b8d', '#fffaf2']

  function clearBurst() {
    clearTimeout(cleanupTimer)
    clearTimeout(movementTimer)
    cleanupTimer = undefined
    region.classList.remove('is-celebrating')
    lanes.forEach(lane => lane.replaceChildren())
  }

  function celebrate() {
    if (motion?.matches || !region.isConnected) return false
    clearBurst()
    // Restart the same short mascot performance when the guest taps replay.
    void region.offsetWidth
    region.classList.add('is-celebrating')
    for (const [side, lane] of lanes.entries()) {
      const fragment = document.createDocumentFragment()
      const bannerBox = region.getBoundingClientRect()
      const mascotBox = images[side].image.getBoundingClientRect()
      const sceneBox = cabana?.available ? cabana.scene.getBoundingClientRect() : null
      const originBox = sceneBox || mascotBox
      const originX = sceneBox ? (side === 0 ? .22 : .78) : (side === 0 ? .75 : .25)
      lane.style.setProperty('--gw-origin-x', `${originBox.left - bannerBox.left + originBox.width * originX}px`)
      lane.style.setProperty('--gw-origin-y', `${originBox.top - bannerBox.top + originBox.height * (sceneBox ? .58 : .34)}px`)
      const ring = element('span', 'rk-guest-welcome__burst-ring')
      fragment.append(ring)
      for (let index = 0; index < PARTICLES_PER_SIDE; index += 1) {
        const particle = element('i', 'rk-guest-welcome__particle')
        const angle = Math.PI * 2 * index / PARTICLES_PER_SIDE + Math.random() * .25
        const radius = 65 + Math.random() * 120
        const dx = Math.cos(angle) * radius + (side === 0 ? 35 : -35)
        const dy = Math.sin(angle) * radius - 55
        particle.style.setProperty('--gw-dx', `${dx.toFixed(1)}px`)
        particle.style.setProperty('--gw-dy', `${dy.toFixed(1)}px`)
        particle.style.setProperty('--gw-fall', `${(dy + 110 + Math.random() * 70).toFixed(1)}px`)
        particle.style.setProperty('--gw-turn', `${(Math.random() * 1080 - 540).toFixed(1)}deg`)
        particle.style.setProperty('--gw-size', `${(4 + Math.random() * 6).toFixed(1)}px`)
        particle.style.setProperty('--gw-delay', `${(index % 2 ? 160 : 0) + Math.floor(Math.random() * 65)}ms`)
        particle.style.setProperty('--gw-color', particleColors[index % particleColors.length])
        fragment.append(particle)
      }
      lane.append(fragment)
    }
    // Two close launch waves bloom immediately, then fall away before cleanup.
    cleanupTimer = setTimeout(() => lanes.forEach(lane => lane.replaceChildren()), BURST_MS)
    movementTimer = setTimeout(() => region.classList.remove('is-celebrating'), config.theme === 'cabana' ? BURST_MS : 5600)
    return true
  }

  function loaded() {
    if (cabana) { cabana.fallbackLoaded(); return }
    if (autoplayConsumed) return
    autoplayConsumed = true
    celebrate()
  }

  function mascot(side, name, preferred, fallback) {
    const wrapper = element('div', `rk-guest-welcome__mascot rk-guest-welcome__mascot--${side}`)
    const image = element('img', 'rk-guest-welcome__image')
    image.alt = name
    image.width = 144
    image.height = 156
    image.decoding = 'async'
    image.draggable = false
    const lane = element('div', 'rk-guest-welcome__confetti')
    lane.setAttribute('aria-hidden', 'true')
    let usedFallback = false
    image.addEventListener('load', loaded, { once: true })
    image.addEventListener('error', () => {
      if (!usedFallback) {
        usedFallback = true
        image.src = fallback
      } else {
        image.hidden = true // Keep the reserved layout; never leave a broken image icon.
      }
    })
    wrapper.append(image)
    region.append(lane)
    lanes.push(lane)
    images.push({ image, preferred })
    return wrapper
  }

  const [luluAsset, scoutAsset] = THEME_MASCOTS[config.theme] || MASCOTS[config.occasion]
  region.append(
    mascot('left', 'Lulu the Roadrunner', `/media/${luluAsset}`, '/media/mascots/lulu-3d.webp'),
    copy,
    mascot('right', 'Scout the Owl', `/media/${scoutAsset}`, '/media/mascots/scout-3d.webp'),
    replay,
    motionNote,
  )

  if (config.theme === 'cabana') {
    cabana = createCabanaScene(region, replay, motionNote, motion, celebrate, clearBurst)
  }

  function syncMotionPreference() {
    if (cabana) { cabana.syncPreferences(); return }
    const reduced = Boolean(motion?.matches)
    replay.disabled = reduced
    if (reduced) {
      autoplayConsumed = true
      clearBurst()
      replay.setAttribute('aria-describedby', motionNote.id)
    } else {
      replay.removeAttribute('aria-describedby')
    }
  }
  replay.addEventListener('click', () => {
    if (cabana) { cabana.replay(); return }
    autoplayConsumed = true // A replay before image loading also counts as the initial burst.
    celebrate()
  })
  syncMotionPreference()
  if (motion?.addEventListener) {
    motion.addEventListener('change', syncMotionPreference)
    stopObserving = () => motion.removeEventListener('change', syncMotionPreference)
  } else if (motion?.addListener) {
    motion.addListener(syncMotionPreference)
    stopObserving = () => motion.removeListener(syncMotionPreference)
  }

  return {
    region,
    startImages: () => {
      images.forEach(({ image, preferred }) => { image.src = preferred })
      cabana?.start()
    },
    dispose: () => { clearBurst(); stopObserving(); cabana?.dispose() },
  }
}

/**
 * Import after the existing guide module, then await mountGuestWelcome().
 * Resolves to the inserted section (or null when absent, disabled, or failed).
 * Image loading and the bounded burst do not delay mounting; repeated / concurrent calls are idempotent.
 */
export async function mountGuestWelcome() {
  if (typeof document === 'undefined') return null
  const host = document.querySelector('.rk-arrival-hero__content')
  if (!host) return null
  const existing = host.querySelector('[data-guest-welcome]')
  if (existing) return existing
  if (pendingMounts.has(host)) return pendingMounts.get(host)

  const mount = (async () => {
    const config = await loadConfig()
    if (!config || !host.isConnected) return null
    const banner = createBanner(config)
    try {
      host.prepend(banner.region)
      banner.startImages()
      return banner.region
    } catch {
      banner.dispose()
      banner.region.remove()
      return null
    }
  })()
  pendingMounts.set(host, mount)
  try {
    return await mount
  } finally {
    pendingMounts.delete(host)
  }
}
