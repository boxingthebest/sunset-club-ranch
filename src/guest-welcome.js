import './guest-welcome.css'

const CONFIG_URL = '/guest-welcome.json'
const CONFIG_TIMEOUT_MS = 2500
const BURST_MS = 3000
const PARTICLES_PER_SIDE = 22
const pendingMounts = new WeakMap()

const DEFAULTS = Object.freeze({
  birthday: { headline: 'Happy birthday!', message: 'Another year, a little more desert magic.' },
  wedding: { headline: 'To your happily ever after!', message: 'Love looks lovely in the desert.' },
  anniversary: { headline: 'Happy anniversary!', message: 'Here’s to your next beautiful chapter.' },
  retreat: { headline: 'Room to reconnect.', message: 'Slow down. Settle in. Find your desert rhythm.' },
  stay: { headline: 'Your desert welcome.', message: 'Make yourself at home at Sunset Club Ranch.' },
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
  stay: ['mascots/lulu-stay-lounge-3d.webp', 'mascots/scout-3d.webp'],
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

/** Disabled / invalid config intentionally produces no banner. Free-form copy should stay first-name-only and date-free. */
export function normalizeGuestWelcome(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config) || config.enabled !== true) return null
  const requestedOccasion = compactText(config.occasion, 24).toLowerCase()
  const aliases = { birthdays: 'birthday', weddings: 'wedding', anniversaries: 'anniversary', retreats: 'retreat' }
  const occasion = aliases[requestedOccasion] || requestedOccasion
  const kind = Object.hasOwn(DEFAULTS, occasion) ? occasion : 'stay'
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

function createBanner(config) {
  const region = element('section', 'rk-guest-welcome')
  region.dataset.guestWelcome = ''
  region.dataset.occasion = config.occasion
  region.setAttribute('role', 'region')
  region.setAttribute('aria-labelledby', 'rk-guest-welcome-heading')

  const copy = element('div', 'rk-guest-welcome__copy')
  const heading = element('h2', 'rk-guest-welcome__heading', config.headline)
  heading.id = 'rk-guest-welcome-heading'
  copy.append(
    heading,
    element('p', 'rk-guest-welcome__message', config.message),
    element('p', 'rk-guest-welcome__signoff', config.signoff),
  )

  const replay = element('button', 'rk-guest-welcome__replay', 'Celebrate again')
  replay.type = 'button'
  const motionNote = element('span', 'rk-guest-welcome__sr-only', 'Celebration animation is off while reduced motion is enabled.')
  motionNote.id = 'rk-guest-welcome-motion-note'

  const motion = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null
  let autoplayConsumed = Boolean(motion?.matches)
  let cleanupTimer
  let stopObserving = () => {}
  const lanes = []
  const images = []

  function clearBurst() {
    clearTimeout(cleanupTimer)
    cleanupTimer = undefined
    lanes.forEach(lane => lane.replaceChildren())
  }

  function celebrate() {
    if (motion?.matches || !region.isConnected) return false
    clearBurst()
    for (const [side, lane] of lanes.entries()) {
      const fragment = document.createDocumentFragment()
      for (let index = 0; index < PARTICLES_PER_SIDE; index += 1) {
        const particle = element('i', 'rk-guest-welcome__particle')
        const drift = (Math.random() - 0.5) * 58
        particle.style.setProperty('--gw-start', side === 0 ? '32%' : '68%')
        particle.style.setProperty('--gw-drift', `${drift.toFixed(1)}px`)
        particle.style.setProperty('--gw-apex', `${(-35 - Math.random() * 52).toFixed(1)}px`)
        particle.style.setProperty('--gw-fall', `${(25 + Math.random() * 30).toFixed(1)}px`)
        particle.style.setProperty('--gw-turn', `${(Math.random() * 300 - 150).toFixed(1)}deg`)
        particle.style.setProperty('--gw-delay', `${Math.floor(Math.random() * 180)}ms`)
        particle.style.setProperty('--gw-color', ['#e4b85d', '#f29b8d', '#fffaf2'][index % 3])
        fragment.append(particle)
      }
      lane.append(fragment)
    }
    // 2780ms + <180ms delay is always below this three-second cleanup bound.
    cleanupTimer = setTimeout(clearBurst, BURST_MS)
    return true
  }

  function loaded() {
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
    wrapper.append(image, lane)
    lanes.push(lane)
    images.push({ image, preferred })
    return wrapper
  }

  const [luluAsset, scoutAsset] = MASCOTS[config.occasion]
  region.append(
    mascot('left', 'Lulu the Roadrunner', `/media/${luluAsset}`, '/media/mascots/lulu-3d.webp'),
    copy,
    mascot('right', 'Scout the Owl', `/media/${scoutAsset}`, '/media/mascots/scout-3d.webp'),
    replay,
    motionNote,
  )

  function syncMotionPreference() {
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
    startImages: () => images.forEach(({ image, preferred }) => { image.src = preferred }),
    dispose: () => { clearBurst(); stopObserving() },
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
