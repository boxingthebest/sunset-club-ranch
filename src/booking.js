export const GUEST_CONTACT = {
  email: 'annetagroup@gmail.com',
  phoneDisplay: '+1 (442) 307-4264',
  phoneHref: '+14423074264',
}

export const BOOKING_URL = 'https://booking.annetagroup.com/listings/603473'
const CALENDAR_SCRIPT = 'https://d2q3n06xhbi0am.cloudfront.net/calendar.js'

export function bookingSection() {
  return `<section class="direct-calendar" id="availability" aria-labelledby="availability-title">
    <div class="direct-calendar__intro">
      <p class="eyebrow">Book direct · Anneta Group</p>
      <h2 id="availability-title">Your dates.<br /><em>Your desert escape.</em></h2>
      <p>Choose your arrival and departure dates, then continue to Anneta Group’s booking checkout to review the stay details and price.</p>
      <p class="direct-calendar__note">Selecting dates is not a confirmed reservation. The booking checkout provides the final price, policies, and confirmation.</p>
      <p class="direct-calendar__note">Planning a wedding, birthday, anniversary, or retreat? Check lodging dates here, then share your plans before booking. Event approval and pricing are confirmed separately.</p>
      <div class="direct-calendar__contacts"><span>Booking questions & guest services</span><a href="tel:${GUEST_CONTACT.phoneHref}">${GUEST_CONTACT.phoneDisplay}</a><a href="mailto:${GUEST_CONTACT.email}">${GUEST_CONTACT.email}</a></div>
      <a class="text-link" href="/weddings.html#inquire">Plan your event <span aria-hidden="true">→</span></a><br />
      <a class="text-link" href="#inquire">Have a special request? <span aria-hidden="true">↓</span></a>
    </div>
    <div class="direct-calendar__panel">
      <p class="direct-calendar__mobile-label">Check lodging availability</p>
      <p class="direct-calendar__status" data-booking-status role="status" aria-live="polite">Loading the booking calendar…</p>
      <div id="hostaway-calendar-widget" aria-label="Sunset Club Ranch booking calendar" aria-busy="true"></div>
      <p class="direct-calendar__legend">Crossed-out dates are unavailable. Stay rules and pricing are confirmed at checkout.</p>
      <p class="direct-calendar__fallback">Prefer the full booking page? <a href="${BOOKING_URL}">Open Sunset Club Ranch on Anneta Group <span aria-hidden="true">→</span></a></p>
      <noscript><p>JavaScript is needed for the calendar. Use the direct booking link above or call Anneta Group for help.</p></noscript>
    </div>
  </section>`
}

export function initBookingCalendar() {
  const container = document.getElementById('hostaway-calendar-widget')
  if (!container || container.dataset.initialized) return
  container.dataset.initialized = 'true'
  const status = document.querySelector('[data-booking-status]')
  const mobileBooking = document.querySelector('.mobile-booking')
  if (mobileBooking && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      mobileBooking.classList.toggle('is-at-calendar', entry.isIntersecting)
    }, { threshold: 0.1 })
    observer.observe(container)
  }
  let finished = false
  let timeout
  const showFallback = () => {
    if (finished) return
    finished = true
    window.clearTimeout(timeout)
    container.setAttribute('aria-busy', 'false')
    container.dataset.state = 'unavailable'
    status.textContent = 'The calendar could not load. Please use the direct booking link below or contact Anneta Group.'
  }
  const mount = () => {
    if (finished) return
    if (typeof window.hostawayCalendarWidget !== 'function') return showFallback()
    try {
      window.hostawayCalendarWidget({
        baseUrl: 'https://booking.annetagroup.com/',
        listingId: 603473,
        numberOfMonths: window.matchMedia('(max-width: 760px)').matches ? 1 : 2,
        openInNewTab: false,
        font: 'DM Sans',
        rounded: true,
        button: { action: 'checkout', text: 'Book now' },
        clearButtonText: 'Clear dates',
        color: { mainColor: '#C68018', frameColor: '#000000', textColor: '#555555' },
      })
      finished = true
      window.clearTimeout(timeout)
      container.setAttribute('aria-busy', 'false')
      container.dataset.state = 'initialized'
      status.hidden = true
    } catch {
      showFallback()
    }
  }
  timeout = window.setTimeout(showFallback, 15000)
  if (typeof window.hostawayCalendarWidget === 'function') return mount()
  const script = document.createElement('script')
  script.src = CALENDAR_SCRIPT
  script.async = true
  script.onload = mount
  script.onerror = showFallback
  document.head.appendChild(script)
}
