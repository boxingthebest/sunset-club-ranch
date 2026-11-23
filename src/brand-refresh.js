const experiences = {
  pool: {
    number: '01', label: 'Pool days', image: '/media/airbnb-gallery/pool-coral-parasols.jpeg',
    alt: 'The Sunset Club Ranch pool with coral parasols', caption: 'Pool & spa · part of your stay',
    kicker: 'Out-of-office energy', title: 'Pool days.<br /><em>No agenda.</em>',
    copy: 'Coral parasols, cabana shade, a heated pool and spa, and a 158-inch outdoor screen. Stay out a little longer.',
    link: '/stay.html#current-upgrades', linkText: 'Explore the pool & amenities',
  },
  play: {
    number: '02', label: 'Play time', image: '/media/airbnb-gallery/recreation-courts.jpg',
    alt: 'Pickleball and sand volleyball courts at Sunset Club Ranch', caption: 'Pickleball & sand volleyball · available now',
    kicker: 'A little friendly competition', title: 'Game on.<br /><em>Phones down.</em>',
    copy: 'Pickleball, sand volleyball, a basketball hoop, mini golf, and poolside ping pong. Pick your teams—or just cheer from the shade.',
    link: '/stay.html#current-upgrades', linkText: 'Find your favorite way to play',
  },
  slow: {
    number: '03', label: 'Slow down', image: '/media/current-upgrades/sauna-installed.webp',
    alt: 'The installed six-person sauna at Sunset Club Ranch', caption: 'Six-person sauna · available now',
    kicker: 'Spa Sanctuary / Available now', title: 'Less rush.<br /><em>More reset.</em>',
    copy: 'Step into the six-person sauna, then find a quiet corner of your five-acre escape. Cold plunge and Bali-style shower additions are planned—not currently included amenities.',
    link: '/vision-2027.html', linkText: 'See what’s now & what’s next',
  },
  night: {
    number: '04', label: 'Ranch nights', image: '/media/airbnb-gallery/media-wall-night.jpeg',
    alt: 'The outdoor screen and pool deck at Sunset Club Ranch after sunset', caption: 'The real ranch · after sunset',
    kicker: 'One more chapter', title: 'Golden hour.<br /><em>Then some.</em>',
    copy: 'Pizza-oven dinners, the outdoor screen by the pool, and fire-lit conversations. A whole evening without leaving your home base.',
    link: '/after-dark.html', linkText: 'Explore the afterglow',
  },
}

export function initBrandRefresh() {
  initHeroFilm()
  const tabs = [...document.querySelectorAll('[data-mood]')]
  const panel = document.querySelector('#mood-panel')
  let transitionTimer
  let currentImageRequest = 0
  if (panel && tabs.length) {
    const image = panel.querySelector('[data-mood-image]')
    const caption = panel.querySelector('[data-mood-caption]')
    const status = document.createElement('span')
    status.className = 'sr-only'
    status.setAttribute('role', 'status')
    status.setAttribute('aria-live', 'polite')
    panel.after(status)
    function selectMood(tab, focus = false) {
      const mood = experiences[tab.dataset.mood]
      if (!mood) return
      tabs.forEach(item => {
        const active = item === tab
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-selected', String(active))
        item.tabIndex = active ? 0 : -1
      })
      panel.setAttribute('aria-labelledby', tab.id)
      panel.querySelector('[data-mood-number]').textContent = mood.number
      panel.querySelector('[data-mood-kicker]').textContent = mood.kicker
      panel.querySelector('[data-mood-title]').innerHTML = mood.title
      panel.querySelector('[data-mood-copy]').textContent = mood.copy
      panel.querySelector('[data-mood-link]').href = mood.link
      panel.querySelector('[data-mood-link-text]').textContent = mood.linkText
      const request = ++currentImageRequest
      image.hidden = true
      caption.textContent = 'Loading the ranch view…'
      const nextImage = new Image()
      nextImage.onload = () => {
        if (request !== currentImageRequest) return
        image.src = mood.image
        image.alt = mood.alt
        image.hidden = false
        caption.textContent = mood.caption
      }
      nextImage.onerror = () => {
        if (request === currentImageRequest) caption.textContent = 'Ranch view unavailable. Explore the details alongside.'
      }
      nextImage.src = mood.image
      panel.classList.remove('is-changing')
      // A short, user-triggered transition; never cycle tabs automatically.
      void panel.offsetWidth
      panel.classList.add('is-changing')
      window.clearTimeout(transitionTimer)
      transitionTimer = window.setTimeout(() => panel.classList.remove('is-changing'), 320)
      status.textContent = `${mood.label} selected.`
      if (focus) tab.focus()
    }
    tabs.forEach(tab => {
      tab.addEventListener('click', () => selectMood(tab))
      tab.addEventListener('keydown', event => {
        const index = tabs.indexOf(tab)
        let next
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
        if (event.key === 'Home') next = 0
        if (event.key === 'End') next = tabs.length - 1
        if (next !== undefined) { event.preventDefault(); selectMood(tabs[next], true) }
      })
    })
  }

  const navGroup = document.querySelector('.nav-group')
  if (navGroup) {
    document.addEventListener('click', event => {
      if (!navGroup.contains(event.target)) navGroup.open = false
    })
    navGroup.addEventListener('keydown', event => {
      if (event.key === 'Escape') { navGroup.open = false; navGroup.querySelector('summary').focus() }
    })
  }

  const menu = document.querySelector('#mobile-nav')
  document.addEventListener('keydown', event => {
    const lightbox = document.querySelector('#lightbox')
    const dialog = lightbox?.classList.contains('is-open') ? lightbox : menu?.classList.contains('is-open') ? menu : null
    if (event.key !== 'Tab' || !dialog) return
    const focusable = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')].filter(el => el.getClientRects().length && !el.disabled)
    const first = focusable[0], last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  })
}

function initHeroFilm() {
  const video = document.querySelector('[data-club-hero-film]')
  const control = document.querySelector('[data-hero-film-control]')
  const scene = video?.closest('.club-hero__visual')
  if (!video || !control || !scene) return
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const connection = navigator.connection
  let inView = false
  let wantsPlayback = !motion.matches && !connection?.saveData
  let explicitPlayback = false
  let failed = false
  let request = 0
  video.muted = true
  video.defaultMuted = true

  function pause() {
    request += 1
    video.pause()
    control.textContent = 'Play ranch film'
    control.setAttribute('aria-pressed', 'false')
  }
  async function play() {
    if (!inView || document.hidden || !wantsPlayback || failed) return
    if (!explicitPlayback && (motion.matches || connection?.saveData)) return
    if (!video.getAttribute('src')) video.src = video.dataset.src
    const current = ++request
    try {
      await video.play()
      if (current !== request || !inView || document.hidden || !wantsPlayback) return
      scene.classList.add('is-film-ready')
      control.textContent = 'Pause ranch film'
      control.setAttribute('aria-pressed', 'true')
    } catch {
      if (current !== request) return
      wantsPlayback = false
      control.textContent = 'Play ranch film'
      control.setAttribute('aria-pressed', 'false')
    }
  }
  function reconcile() {
    if (inView && !document.hidden && wantsPlayback) play()
    else pause()
  }
  control.addEventListener('click', () => {
    if (!video.paused) { wantsPlayback = false; pause() }
    else { explicitPlayback = true; wantsPlayback = true; play() }
  })
  video.addEventListener('error', () => {
    failed = true
    wantsPlayback = false
    pause()
    scene.classList.remove('is-film-ready')
    control.hidden = true
  })
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting && entry.intersectionRatio >= .2
    reconcile()
  }, { threshold: [0,.2] })
  observer.observe(scene)
  document.addEventListener('visibilitychange', reconcile)
  motion.addEventListener('change', () => {
    if (motion.matches && !explicitPlayback) { wantsPlayback = false; pause(); scene.classList.remove('is-film-ready') }
  })
  window.addEventListener('pagehide', () => { pause(); observer.disconnect(); document.removeEventListener('visibilitychange', reconcile) }, { once: true })
}
