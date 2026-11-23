export function initPropertySnippets() {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const connection = navigator.connection
  document.querySelectorAll('[data-property-snippet]').forEach(card => {
    const video = card.querySelector('video')
    const button = card.querySelector('[data-snippet-control]')
    const status = card.querySelector('[data-snippet-status]')
    if (!video || !button || !status) return
    let visible = false
    let failed = false
    let explicit = false
    let wanted = !motion.matches && !connection?.saveData
    let request = 0
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    const blocked = () => !explicit && (motion.matches || connection?.saveData)

    function pause() {
      request += 1
      video.pause()
      button.textContent = 'Play clip'
      button.setAttribute('aria-pressed', 'false')
    }
    async function play() {
      if (!visible || document.hidden || !wanted || blocked() || failed) return
      if (!video.getAttribute('src')) video.src = video.dataset.src
      const id = ++request
      button.textContent = 'Pause clip'
      button.setAttribute('aria-pressed', 'true')
      try {
        await video.play()
        if (id !== request) return
        if (!visible || document.hidden || !wanted || blocked()) { pause(); return }
        card.classList.add('is-snippet-ready')
      } catch {
        if (id !== request) return
        wanted = false
        pause()
      }
    }
    function reconcile() {
      if (visible && !document.hidden && wanted && !blocked()) play()
      else pause()
    }
    video.addEventListener('playing', () => {
      if (!visible || document.hidden || !wanted || blocked()) { pause(); return }
      card.classList.add('is-snippet-ready')
    })
    video.addEventListener('error', () => {
      failed = true
      wanted = false
      pause()
      card.classList.remove('is-snippet-ready')
      button.hidden = true
      status.hidden = false
      status.textContent = 'Video unavailable—enjoy the still view.'
    })
    button.addEventListener('click', () => {
      if (failed) return
      explicit = true
      wanted = button.getAttribute('aria-pressed') !== 'true'
      reconcile()
    })
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= .25
      reconcile()
    }, { threshold: [0,.25] })
    observer.observe(card.querySelector('.club-snippet__scene'))
    document.addEventListener('visibilitychange', reconcile)
    function preferenceChanged() {
      if (blocked()) {
        wanted = false
        pause()
        card.classList.remove('is-snippet-ready')
      }
    }
    motion.addEventListener('change', preferenceChanged)
    connection?.addEventListener?.('change', preferenceChanged)
    window.addEventListener('pagehide', () => {
      pause()
      observer.disconnect()
      document.removeEventListener('visibilitychange', reconcile)
      motion.removeEventListener('change', preferenceChanged)
      connection?.removeEventListener?.('change', preferenceChanged)
    }, { once: true })
  })
}
