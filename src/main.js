import './style.css'

const CONTACT_EMAIL = 'dapenza444@gmail.com'
const PHONE_DISPLAY = '203-233-1300'
const PHONE_HREF = '+12032331300'

const navItems = [
  ['Stay', '/stay.html'],
  ['Weddings & Events', '/weddings.html'],
  ['Corporate Retreats', '/corporate.html'],
  ['After Dark 2027', '/after-dark.html'],
  ['Vision 2027', '/vision-2027.html'],
]

const currentStucco = '/media/estate/poolside-white-stucco.webp'
const currentLawn = '/media/estate/lawn-current.webp'
const eveningPoolSpa = '/media/estate/evening-pool-spa.webp'
const octoberMedia = '/media/october-2026'
const newAerial = `${octoberMedia}/cover-aerial.webp`
const newDining = `${octoberMedia}/dining-game-room.webp`
const newCourts = `${octoberMedia}/recreation-courts.webp`
const newEntry = `${octoberMedia}/front-entry-dusk.webp`
const newGarden = `${octoberMedia}/yard-bar-dusk.webp`
const newLounge = `${octoberMedia}/fireplace-lounge-dusk.webp`
const sofaStylingStudy = `${octoberMedia}/living-room-sofa-study.webp`
const weddingHeroConcept = '/media/event-concepts/wedding-hero-blue-hour.webp'

function logo(mark = false) {
  return `<span class="brand ${mark ? 'brand--hero' : ''}"><span>Sunset Club</span><small>Ranch</small></span>`
}

function header() {
  const pageCta = {
    weddings: 'Plan your event',
    corporate: 'Plan your retreat',
    'after-dark': 'Ask about 2027',
    vision: 'Ask about the vision',
  }
  const ctaLabel = pageCta[document.body.dataset.page] || 'Request dates'
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="site-header">
      <a class="site-logo" href="/" aria-label="Sunset Club Ranch home">${logo()}</a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
      <a class="button button--small desktop-cta" href="#inquire">${ctaLabel}</a>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span>
      </button>
    </header>
    <div class="mobile-nav" id="mobile-nav" aria-hidden="true">
      <button class="menu-close" id="menu-close" type="button" aria-label="Close navigation">Close</button>
      <nav aria-label="Mobile navigation">
        <a href="/">Home</a>
        ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        <a href="#inquire">${ctaLabel}</a>
      </nav>
      <div class="mobile-nav__contact">
        <a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a>
        <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      </div>
    </div>`
}

function footer() {
  const pageCta = {
    weddings: 'Plan your event',
    corporate: 'Plan your retreat',
    'after-dark': 'Ask about 2027',
    vision: 'Ask about the vision',
  }
  const ctaLabel = pageCta[document.body.dataset.page] || 'Request dates'
  return `
    <footer class="site-footer">
      <div class="footer-brand">${logo()}</div>
      <div class="footer-grid">
        <div>
          <p class="eyebrow">Private desert estate</p>
          <p class="footer-copy">Five private acres in Indio, California, created for stays that bring people together without giving up space.</p>
        </div>
        <div>
          <p class="footer-title">Explore</p>
          ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </div>
        <div>
          <p class="footer-title">Contact</p>
          <a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a>
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          <a href="https://instagram.com/sunsetclubranch" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div class="footer-base"><span>© 2026 Sunset Club Ranch</span><span>Indio · Coachella Valley · California</span></div>
    </footer>
    <a class="mobile-booking" href="#inquire"><span>Private estate in Indio</span><strong>${ctaLabel}</strong></a>`
}

function picture(src, alt, className = '', loading = 'lazy') {
  const responsive = src === newAerial ? ` srcset="${octoberMedia}/cover-aerial-mobile.webp 1200w, ${src} 3200w" sizes="100vw"` : ''
  return `<img class="${className}" src="${src}"${responsive} alt="${alt}" loading="${loading}" decoding="async"${loading === 'eager' ? ' fetchpriority="high"' : ''} />`
}
function pageHero({ image, alt = '', eyebrow, title, copy, cta = 'Start planning', secondary = 'Explore', secondaryHref = '#story', badge = '', variant = 'classic' }) {
  return `
    <section class="page-hero page-hero--${variant}">
      ${picture(image, alt, 'page-hero__image', 'eager')}
      <div class="page-hero__veil"></div>
      <div class="page-hero__content reveal is-visible">
        ${badge ? `<p class="concept-badge concept-badge--hero">${badge}</p>` : ''}
        <p class="eyebrow eyebrow--light">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="page-hero__copy">${copy}</p>
        <div class="hero-actions">
          <a class="button" href="#inquire">${cta}</a>
          <a class="text-link text-link--light" href="${secondaryHref}">${secondary}<span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <div class="hero-facts" aria-label="Estate highlights">
        <span>5 private acres</span><span>3 homes</span><span>9 bedrooms</span><span>Indio, California</span>
      </div>
    </section>`
}

function editorialHeader(kicker, title, copy = '') {
  return `<div class="editorial-header reveal"><p class="eyebrow">${kicker}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`
}

function planningAnswers(kicker, title, answers) {
  return `<section class="planning-answers section-pad" aria-label="Planning information">
    ${editorialHeader(kicker, title)}
    <div class="planning-answers__grid">
      ${answers.map(([question, answer]) => `<article class="planning-answer reveal"><h3>${question}</h3><p>${answer}</p></article>`).join('')}
    </div>
    <a class="text-link" href="#inquire">Tell us what you’re planning <span aria-hidden="true">→</span></a>
  </section>`
}

function inquirySection(intent = 'Private stay') {
  const isEvent = ['Wedding or celebration', 'Birthday', 'Corporate retreat'].includes(intent)
  const isFuture = ['After Dark 2027', 'Vision 2027 updates'].includes(intent)
  const inquiryLabel = isFuture ? 'Future interest' : isEvent ? 'Event inquiry' : 'Stay inquiry'
  const inquiryTitle = isFuture ? 'Stay close to<br />what comes next.' : isEvent ? 'Tell us about<br />your gathering.' : 'Tell us when<br />you want to stay.'
  const inquiryCopy = isFuture
    ? 'Tell us what interests you. We’ll respond with the most current plans; this is an inquiry, not a confirmed reservation or automatic mailing-list signup.'
    : isEvent
    ? 'Share the date, guest count, occasion, and planner or vendor team if you have one. We’ll review the fit and reply with the clearest next step.'
    : 'Share your dates, group size, and priorities. We’ll help you plan the right kind of stay.'
  const startLabel = isFuture ? 'Preferred start date (optional)' : isEvent ? 'Event / arrival date' : 'Arrival'
  const endLabel = isFuture ? 'Preferred end date (optional)' : isEvent ? 'End / departure date' : 'Departure'
  const guestsLabel = isEvent ? 'Expected guests' : 'Guests'
  const messagePlaceholder = isFuture
    ? 'Which planned space or program would you like to hear about?'
    : isEvent
    ? 'Occasion, setup ideas, overnight needs, and anything else we should know.'
    : 'Dates, priorities, questions, or anything that would make the stay exceptional.'
  const occasionOptions = [
    intent,
    ...['Private stay', 'Wedding or celebration', 'Birthday', 'Corporate retreat', 'After Dark 2027', 'Other'].filter(option => option !== intent),
  ]
  return `
    <section class="inquiry" id="inquire">
      <div class="inquiry__intro reveal">
        <p class="eyebrow eyebrow--light">${inquiryLabel}</p>
        <h2>${inquiryTitle}</h2>
        <p>${inquiryCopy}</p>
        <div class="contact-lines"><a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div>
      </div>
      <form class="inquiry-form reveal" data-inquiry-form>
        <input class="hp" type="text" name="company_website" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <input type="hidden" name="interest" value="${intent}" />
        <input type="hidden" name="source" value="" />
        <input type="hidden" name="page" value="" />
        <div class="field field--wide"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required /></div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required /></div>
        <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" /></div>
        <div class="field"><label for="arrival">${startLabel}</label><input id="arrival" name="arrival" type="date" /></div>
        <div class="field"><label for="departure">${endLabel}</label><input id="departure" name="departure" type="date" /></div>
        <div class="field"><label for="guests">${guestsLabel}</label><input id="guests" name="guests" type="number" min="1" inputmode="numeric" /></div>
        <div class="field"><label for="occasion">Occasion</label><select id="occasion" name="occasion">${occasionOptions.map(option => `<option>${option}</option>`).join('')}</select></div>
        <div class="field field--wide"><label for="message">What should we know?</label><textarea id="message" name="message" rows="4" placeholder="${messagePlaceholder}"></textarea></div>
        <div class="field field--wide form-submit"><button class="button" type="submit">Send inquiry</button><p>Your details are emailed to us through FormSubmit. If delivery cannot be confirmed, an email draft opens for you to send instead. <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">Privacy information</a>.</p></div>
        <p class="form-status field--wide" role="status" aria-live="polite" data-inquiry-status></p>
      </form>
    </section>`
}

function homePage() {
  return `
    <main id="main">
      <section class="home-hero">
        ${picture(newAerial, 'Aerial view of Sunset Club Ranch with palms, pool, white stucco, and outdoor gathering spaces', 'home-hero__image', 'eager')}
        <div class="home-hero__veil"></div>
        <div class="home-hero__content reveal is-visible">
          ${logo(true)}
          <p class="home-hero__kicker">A private five-acre estate with a Tulum-meets-ranch spirit</p>
          <h1>Come together.<br /><em>Keep the whole place.</em></h1>
          <p class="home-hero__copy">Three homes, nine bedrooms, a resort-style pool, and room for the group to settle into its own desert rhythm.</p>
          <div class="hero-actions"><a class="button" href="/stay.html#inquire">Request stay dates</a><a class="button button--ghost" href="/weddings.html#inquire">Plan an event</a></div>
        </div>
        <div class="hero-facts" aria-label="Estate highlights"><span>5 private acres</span><span>3 homes</span><span>9 bedrooms</span><span>Near Empire Polo Club</span></div>
      </section>

      <section class="booking-chooser" id="choose">
        <div class="booking-chooser__intro reveal"><p class="eyebrow">Start here</p><h2>What brings you<br />to the ranch?</h2><p>Choose one path. We’ll ask only for the information needed to help.</p></div>
        <div class="booking-chooser__paths">
          <a class="booking-choice reveal" href="/stay.html#inquire"><span>01</span><div><p>Overnight stay</p><h3>Request dates</h3><small>Dates · Guests · Stay priorities</small></div><b aria-hidden="true">→</b></a>
          <a class="booking-choice reveal" href="/weddings.html#inquire"><span>02</span><div><p>Wedding, birthday, or gathering</p><h3>Plan an event</h3><small>Date · Occasion · Group size</small></div><b aria-hidden="true">→</b></a>
        </div>
      </section>

      <section class="intro split" id="story">
        <div class="intro__copy reveal">
          <p class="eyebrow">The estate</p>
          <h2>Space to disappear.<br />Designed to reconnect.</h2>
          <p class="lead">Tulum ease meets ranch scale: white stucco, palms, water, warm wood, honeyed stone, and open desert sky. Days move between the pool, lawns, shaded patios, and three distinct homes; nights gather around long tables and low light.</p>
          <a class="text-link" href="/stay.html">Explore the stay <span aria-hidden="true">→</span></a>
        </div>
        <figure class="editorial-image editorial-image--portrait reveal">
          ${picture(currentLawn, 'Current lawn, palms, and mountain view at Sunset Club Ranch in Indio')}
          <figcaption>Five private acres · Indio, California</figcaption>
        </figure>
      </section>

      <section class="fact-band" aria-label="Property details">
        <div><strong>05</strong><span>Private acres</span></div><div><strong>03</strong><span>Distinct homes</span></div><div><strong>09</strong><span>Bedrooms</span></div><div><strong>01</strong><span>Estate, entirely yours</span></div>
      </section>

      <section class="story-grid section-pad">
        ${editorialHeader('The rhythm of a stay', 'A place with more than one mood.', 'Swim. Cook. Play. Retreat. The estate lets everyone move together—or choose a corner of their own.')}
        <div class="mosaic mosaic--estate reveal">
          <figure class="mosaic__wide">${picture(currentStucco, 'White-stucco poolside patio at Sunset Club Ranch')}<figcaption>White-stucco poolside</figcaption></figure>
          <figure>${picture(newDining, 'Dining and game room with new light-wood floors and framed art')}<figcaption>A place at the table</figcaption></figure>
          <figure>${picture(newCourts, 'Sand volleyball and pickleball courts beside the Sunset Club Ranch lawns')}<figcaption>Room to play</figcaption></figure>
          <figure class="mosaic__tall">${picture(newGarden, 'Illuminated garden, ping-pong table, and outdoor bar at dusk')}<figcaption>After the sun goes down</figcaption></figure>
        </div>
      </section>

      <section class="art-story">
        <div class="art-story__copy reveal">
          <p class="eyebrow eyebrow--light">Art lives here</p>
          <h2>Unexpected work.<br />Unforgettable rooms.</h2>
          <p>The collection brings a playful, gallery-minded edge to the estate—surreal gestures, cinematic portraits, and pieces that reward a second look.</p>
          <p class="fine-print fine-print--light">Owner-supplied visualizations of installed artwork in current Sunset Club Ranch interiors.</p>
        </div>
        <div class="art-strip reveal">
          <figure>${picture('/media/art/glowing-beauty.webp', 'Statement portrait artwork installed in a Sunset Club Ranch hallway')}<figcaption>Hallway portrait</figcaption></figure>
          <figure>${picture('/media/art/stairwell-trio.webp', 'Three framed artworks installed beside a stair at Sunset Club Ranch')}<figcaption>A trio in conversation</figcaption></figure>
          <figure>${picture('/media/art/jaws-bedroom.webp', 'Statement artwork installed in a Sunset Club Ranch bedroom')}<figcaption>A little cinematic tension</figcaption></figure>
        </div>
      </section>

      <section class="pathways section-pad">
        ${editorialHeader('Choose your reason to gather', 'One estate. Several ways in.')}
        <div class="pathway-grid">
          ${[
            ['Stay together', 'A private compound for group escapes, family time, and long weekends.', '/stay.html', newLounge],
            ['Celebrate here', 'Weddings, birthdays, and milestone gatherings begin with a private conversation.', '/weddings.html', newAerial],
            ['Step into 2027', 'Preview the planned barn, wellness courtyard, and the next chapter of the estate.', '/vision-2027.html', '/media/vision-2027/wellness-courtyard.webp'],
          ].map(([title, copy, href, image], i) => `<a class="pathway-card reveal" href="${href}" style="--delay:${i * 80}ms">${picture(image, '')}<span class="pathway-card__veil"></span><span class="pathway-card__content"><small>${String(i + 1).padStart(2, '0')}</small><strong>${title}</strong><em>${copy}</em><b>Explore →</b></span></a>`).join('')}
        </div>
      </section>

      <section class="quote-section">
        <p class="eyebrow">Guest perspective</p>
        <blockquote>“The property is something out of the movies.”</blockquote>
        <p>Grant · Group stay</p>
      </section>
      ${inquirySection('Private stay')}
    </main>`
}

function stayPage() {
  return `
    <main id="main">
      ${pageHero({image: '/media/estate/hardwood-fireplace.webp', alt:'Living room with linear fireplace and new soft-wood floors', eyebrow:'The private estate', title:'Come inside.<br /><em>Stay a while.</em>', copy:'Three private homes, newly finished interiors, and five acres that give the whole group room to settle into its own rhythm.', cta:'Request dates', secondary:'See the homes', variant:'interior'})}
      <section class="section-pad" id="story">
        ${editorialHeader('The homes', 'Together, without being on top of one another.', 'Three distinct homes share one relaxed design language: warm wood, clean white walls, collected art, shaded thresholds, and an easy connection to the grounds.')}
        <div class="home-cards">
          ${[
            ['01', 'The social heart', 'Open living, a new fireplace, new floors, shared meals, and an easy connection to the outdoors.', sofaStylingStudy, 'Sofa + throws visualization'],
            ['02', 'Around the table', 'A bright dining and game room with new floors makes it easy to bring everyone together.', newDining],
            ['03', 'A place to retreat', 'Private rooms across three homes give the group space to settle in at the end of the day.', '/media/art/jaws-bedroom.webp'],
          ].map(([n, title, copy, image, label]) => `<article class="home-card reveal"><figure>${picture(image, label ? 'Living room with proposed sofa styling; current floors, rug, table, and artwork' : title)}${label ? `<figcaption>${label}</figcaption>` : ''}</figure><div><span>${n}</span><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}
        </div>
        <p class="home-cards__note reveal">The living-room sofa and throws are an illustrative styling edit; its floors, rug, table, and art are from the current room. The bedroom artwork scene is also a visualization. The dining-room image is current photography.</p>
      </section>
      <section class="amenity-editorial">
        <figure class="amenity-editorial__image reveal">${picture(currentStucco, 'Current white-stucco pool and outdoor gathering space at Sunset Club Ranch')}</figure>
        <div class="amenity-editorial__copy reveal"><p class="eyebrow eyebrow--light">Outside, all day</p><h2>Pool water.<br />Warm shade.<br />No agenda.</h2><p>Move from the heated pool and spa with waterfall features to the outdoor kitchen, long-table dining, games, lawns, sauna time, and fire-lit evenings.</p><ul><li>Heated pool, spa, and waterfall features</li><li>Six-person sauna</li><li>One outdoor kitchen and pizza oven</li><li>Pickleball, volleyball, basketball, and fire pits</li></ul></div>
      </section>
      <section class="lawn-film" id="the-lawn">
        <video autoplay muted loop playsinline preload="metadata" poster="/media/estate/lawn-current.webp" aria-label="The expansive lawn and mountain view at Sunset Club Ranch">
          <source src="/media/video/lawn-current.mp4" type="video/mp4" />
        </video>
        <div class="lawn-film__veil"></div>
        <div class="lawn-film__copy reveal"><p class="status-badge">Current property footage</p><p class="eyebrow eyebrow--light">Five open acres</p><h2>Room to exhale.<br />Space to play.</h2><p>The lawn gives the estate its sense of scale—palms, mountain views, and room for the group to find its own pace.</p></div>
      </section>
      <section class="new-estate section-pad">
        ${editorialHeader('New on the estate', 'More ways to spend the day.', 'Recent additions bring fresh energy outside and a quieter kind of comfort indoors. These amenities are now part of the Sunset Club Ranch stay.')}
        <div class="upgrade-list reveal">
          <div><span>01</span><strong>Pickleball court</strong></div>
          <div><span>02</span><strong>Sand volleyball</strong></div>
          <div><span>03</span><strong>Basketball hoop</strong></div>
          <div><span>04</span><strong>158-inch state-of-the-art TV</strong></div>
          <div><span>05</span><strong>Pool waterfall features</strong></div>
          <div><span>06</span><strong>Fire pits</strong></div>
          <div><span>07</span><strong>One outdoor kitchen + pizza oven</strong></div>
          <div><span>08</span><strong>Two indoor kitchens</strong></div>
          <div><span>09</span><strong>Six-person sauna</strong></div>
          <div><span>10</span><strong>Koolfog misting</strong></div>
          <div><span>11</span><strong>New fireplace + floors</strong></div>
          <div><span>12</span><strong>Property-wide Wi-Fi</strong></div>
          <div><span>13</span><strong>Updated HVAC & plumbing</strong></div>
        </div>
        <p class="new-estate__note reveal">All listed additions are complete and available today. Current photography is shown where available; every illustrative view is transparently labeled.</p>
      </section>
      <section class="current-upgrades-showcase" id="current-upgrades">
        <div class="current-upgrades-showcase__copy reveal"><p class="status-badge">Completed · available today</p><p class="eyebrow eyebrow--light">The estate, newly finished</p><h2>More glow.<br />More ways to gather.</h2><p>The 158-inch outdoor media wall, pool waterfall features, fire pits, illuminated ficus arrival, white poolside stucco, and honey-gold travertine are already part of the property.</p><p class="fine-print fine-print--light">Current photography is shown where available. The remaining images are owner-supplied visualizations of completed work and will be replaced as the fresh photo library arrives.</p></div>
        <div class="current-upgrades-showcase__media reveal">
          <figure>${picture('/media/current-upgrades/outdoor-screen.webp','Owner-supplied visualization of the existing outdoor media wall at Sunset Club Ranch')}<figcaption>158-inch outdoor screen · current visualization</figcaption></figure>
          <figure>${picture(`${octoberMedia}/arrival-night-study.webp`,'Owner-supplied visualization of the illuminated ficus and palm-lined driveway')}<figcaption>Ficus arrival · owner-supplied visualization</figcaption></figure>
          <figure>${picture(currentStucco,'Current white-stucco poolside patio at Sunset Club Ranch')}<figcaption>White-stucco poolside patio · current photograph</figcaption></figure>
          <figure>${picture('/media/current-upgrades/travertine-walkway.webp','Owner-supplied visualization of the completed honey-gold travertine walkway at Sunset Club Ranch')}<figcaption>Honey-gold travertine · current visualization</figcaption></figure>
          <figure>${picture(newCourts,'Sand volleyball and pickleball courts beside the property lawn')}<figcaption>Volleyball and pickleball · current image</figcaption></figure>
          <figure>${picture(`${octoberMedia}/arrival-day-study.webp`,'Owner-supplied daytime visualization of the landscaped driveway')}<figcaption>Daytime arrival · owner-supplied visualization</figcaption></figure>
        </div>
      </section>
      <section class="section-pad">
        ${editorialHeader('A closer look', 'Details make the stay.')}
        <div class="gallery-grid">
          ${[
            [newAerial, 'Aerial overview of the pool and grounds'],
            [newCourts, 'Pickleball and sand volleyball courts'],
            [newDining, 'Dining and game room with new floors'],
            [newEntry, 'Front entry at dusk'],
            [newLounge, 'Outdoor fireplace lounge at dusk'],
            [currentStucco, 'Current white-stucco poolside patio'],
            [eveningPoolSpa, 'Pool and spa at dusk'],
            ['/media/estate/hardwood-fireplace.webp', 'Living room and linear fireplace'],
          ].map(([src, alt]) => `<button class="gallery-item reveal" type="button" data-lightbox="${src}" data-alt="${alt}" aria-label="Open ${alt.toLowerCase()}">${picture(src, alt)}</button>`).join('')}
        </div>
      </section>
      ${planningAnswers('Plan your stay', 'A private estate stay in Indio, made simple.', [
        ['Can our group stay together?', 'The estate brings together three homes and nine bedrooms on five private acres. Tell us your group size and dates so we can confirm the best fit.'],
        ['What can we enjoy on property now?', 'The pool and spa with waterfall features, a six-person sauna, a 158-inch outdoor TV, pickleball and volleyball courts, a basketball hoop, fire pits, one outdoor kitchen, two indoor kitchens, and refreshed interiors are part of the current estate. The planned barn, cold plunge, outdoor shower, and wellness courtyard are not yet guest amenities.'],
        ['How do we request dates?', 'Send your dates and group size through the inquiry below. We’ll review availability and the details with you directly; the website does not provide an instant booking or a confirmed reservation.'],
      ])}
      ${inquirySection('Private stay')}
    </main>`
}

function weddingsPage() {
  return `
    <main id="main">
      ${pageHero({image: weddingHeroConcept, alt:'Event styling concept of an intimate wedding dinner beside the pool at Sunset Club Ranch at blue hour', eyebrow:'Weddings & celebrations', title:'Gather beautifully.<br /><em>Stay completely.</em>', copy:'A private desert estate for weddings, birthdays, and milestone weekends—designed for a gathering that feels entirely your own.', cta:'Inquire about your date', secondary:'Imagine the weekend', badge:'Event styling concept · shown for inspiration', variant:'event-concept'})}
      <section class="intro split" id="story"><div class="intro__copy reveal"><p class="eyebrow">The occasion</p><h2>Not a ballroom.<br />A place that feels like yours.</h2><p class="lead">Celebrate under open sky, gather around the table, and let the weekend unfold without separating everyone at the end of the night.</p><p>For a thoughtful private celebration of up to 200 guests, begin with a date-specific conversation with our team and your planner.</p><p class="fine-print">All event use is reviewed individually and remains subject to applicable permits, insurance, parking, noise, and property requirements.</p></div><figure class="editorial-image editorial-image--portrait reveal">${picture(currentLawn, 'Current lawn and mountain view at Sunset Club Ranch')}<figcaption>Five acres for a more personal kind of gathering</figcaption></figure></section>
      <section class="chapter-section section-pad"><div class="chapter-grid">
        ${[
          ['01','Arrive','Settle into three private homes and give the gathering room to begin naturally.'],
          ['02','Celebrate','Shape a ceremony, birthday, dinner, or milestone around the estate’s open-air spaces.'],
          ['03','Stay','Keep the people who matter close, with private rooms and shared spaces across the property.'],
        ].map(([n,t,c])=>`<article class="chapter reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
      </div></section>
      <section class="event-concepts" id="event-ideas">
        <div class="event-concepts__intro reveal"><p class="concept-badge">Estate views & event styling concepts</p><p class="eyebrow">Picture your people here</p><h2>Designed around<br />the way you gather.</h2><p>An authentic view of the estate alongside AI-assisted styling studies shows how real Sunset Club Ranch settings can hold different kinds of gatherings. Styling images are inspiration—not documentation of a past event or a promise of included decor, furniture, staffing, or services.</p></div>
        <div class="event-concepts__grid">
          <figure class="reveal">${picture(currentLawn,'Current lawn and mountain view at Sunset Club Ranch')}<figcaption>Five-acre lawn · current photograph</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/poolside-cocktails-2026.webp','Event styling concept showing a cocktail gathering beside the Sunset Club Ranch pool')}<figcaption>Poolside cocktails · styling concept</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/evening-pool.webp','Event styling concept showing friends gathering around the real Sunset Club Ranch pool at blue hour')}<figcaption>Birthday weekend · styling concept</figcaption></figure>
        </div>
      </section>
      <section class="celebration-stories" id="celebrations">
        <div class="celebration-stories__intro reveal"><p class="concept-badge concept-badge--light">Celebration styling concepts</p><p class="eyebrow eyebrow--light">Beyond the wedding day</p><h2>Every reason to<br /><em>bring your people together.</em></h2><p>From a big birthday toast to an anniversary dinner to the kind of family weekend that becomes tradition, the estate gives every generation room to make the occasion its own.</p></div>
        <div class="celebration-stories__grid">
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/birthday-garden-2026.webp','Celebration styling concept of an adult birthday toast at the Sunset Club Ranch outdoor bar')}<figcaption>Birthday weekend · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Birthday weekends</p><h3>The guest list, but easier.</h3><p>Begin with an easy toast at dusk, then let the gathering find its own pace across the pool, lawn, and outdoor lounge.</p></div></article>
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/anniversary-lounge-2026.webp','Celebration styling concept of an anniversary dinner at the Sunset Club Ranch fireplace lounge')}<figcaption>Anniversary dinner · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Anniversaries</p><h3>A table for the story so far.</h3><p>Trade a reservation for a sunset dinner by the fire—just the two of you or the people who have been there from the start.</p></div></article>
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/family-reunion-courts-2026.webp','Celebration styling concept of a multigenerational family weekend at Sunset Club Ranch recreation courts')}<figcaption>Family milestone · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Family milestones</p><h3>Something for every generation.</h3><p>Pool time, pickleball, volleyball, long lunches, and enough room for everyone to be together without being on top of one another.</p></div></article>
        </div>
        <p class="celebration-stories__note">These images are inspirational styling concepts, not records of past events or a promise of included decor, furniture, staffing, or services. Every celebration begins with a date-specific inquiry and individual review.</p>
      </section>
      <section class="full-bleed-statement">${picture(newLounge, 'Outdoor fireplace lounge glowing at dusk')}<div><p class="eyebrow eyebrow--light">By private inquiry</p><h2>Your date.<br />Your people.<br />Your version.</h2></div></section>
      ${planningAnswers('Planning a gathering', 'Weddings and celebrations in the Coachella Valley.', [
        ['Can guests stay at the estate?', 'The three-home, nine-bedroom estate can be part of a gathering weekend. Share your proposed group size and dates so we can discuss the lodging arrangement.'],
        ['Can we plan for up to 200 guests?', 'For a thoughtful private celebration of up to 200 guests, share your date, expected attendance, and planner or vendor team. We will review the fit, availability, and required approvals for your specific event.'],
        ['Are packages and pricing listed?', 'We do not advertise a one-size-fits-all event package or promise a date online. Send an inquiry and we’ll discuss what is feasible, available, and appropriate for your plans.'],
      ])}
      ${inquirySection('Wedding or celebration')}
    </main>`
}

function corporatePage() {
  return `
    <main id="main">
      ${pageHero({image: newGarden, alt:'Dusk gathering area with outdoor bar, ping-pong, and illuminated palms', eyebrow:'Corporate retreats', title:'Better ideas need<br /><em>better room.</em>', copy:'Trade the ballroom for five private acres, three homes, open-air conversations, and a setting built for teams to reconnect.', cta:'Plan a retreat', secondary:'See the format', variant:'retreat'})}
      <section class="section-pad" id="story">${editorialHeader('A different off-site', 'Think clearly. Gather naturally.', 'Build a focused retreat around privacy, indoor-outdoor work sessions, shared meals, and time that does not feel scheduled down to the minute.')}
        <div class="feature-grid">
          ${[
            ['01','Private by design','Reserve the estate around your team rather than sharing the experience with another group.'],
            ['02','Room to reset','Move between focused sessions, open lawns, pool time, and relaxed conversation.'],
            ['03','Built around the team','Use one inquiry to shape lodging, gathering priorities, and the pace of the stay.'],
          ].map(([n,t,c])=>`<article class="feature-card reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
        </div>
      </section>
      <section class="work-play split split--dark"><figure class="editorial-image reveal">${picture(newDining, 'Dining and game room for group meals and conversation')}</figure><div class="intro__copy reveal"><p class="eyebrow eyebrow--light">Beyond the agenda</p><h2>Work that leaves room for the people doing it.</h2><p class="lead">Morning conversation. A long table. Time outside. A retreat should create momentum without recreating the office.</p></div></section>
      ${planningAnswers('Corporate retreat planning', 'A private Indio estate for the team.', [
        ['Is overnight lodging available?', 'The estate has three homes and nine bedrooms. Share your dates and team size so we can review accommodations and the right use of the property.'],
        ['Can we plan outdoor sessions?', 'The property includes open lawns, shaded gathering areas, and indoor dining and living spaces. Tell us what your group needs and we’ll discuss the setup.'],
        ['How do we get a proposal?', 'Use the retreat inquiry below with your preferred dates, approximate guest count, and goals. We’ll follow up with availability and next steps rather than promising an instant reservation.'],
      ])}
      ${inquirySection('Corporate retreat')}
    </main>`
}

function afterDarkPage() {
  return `
    <main id="main" class="night-page">
      ${pageHero({image: newEntry, alt:'Illuminated front entry at blue hour', eyebrow:'A private Coachella week concept', title:'After Dark<br /><em>Coachella 2027.</em>', copy:'Days at the compound. Nights under the Coachella stars. A limited, inquiry-only hospitality concept now in development.', cta:'Join the private inquiry list', secondary:'Discover the concept', badge:'2027 program concept · details in development', variant:'night'})}
      <section class="section-pad night-intro" id="story">${editorialHeader('The idea', 'When the festival comes home.', 'After Dark is envisioned as a private, highly serviced way to experience Coachella week—anchored by the estate and shaped around the people in it.')}
        <div class="pillars">
          ${[
            ['01','The estate','A private five-acre compound with three distinct homes and room to reset between festival days.'],
            ['02','The access','A location near the Empire Polo Club with transportation and access details to be confirmed.'],
            ['03','The service','A hospitality program being developed around privacy, ease, and responsive on-property support.'],
            ['04','The recovery','Poolside mornings, shared meals, and enough quiet to do it all again.'],
          ].map(([n,t,c])=>`<article class="pillar reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
        </div>
        <div class="disclosure disclosure--dark reveal"><strong>In development for 2027.</strong><p>Program details, access, partners, inclusions, pricing, and availability are not yet final. Joining the inquiry list does not guarantee a reservation or any specific service.</p></div>
      </section>
      <section class="full-bleed-statement full-bleed-statement--night">${picture(newGarden, 'Garden and outdoor bar at dusk')}<div><p class="eyebrow eyebrow--light">Week one · 2027</p><h2>A very different<br />festival basecamp.</h2></div></section>
      ${inquirySection('After Dark 2027')}
    </main>`
}

function visionPage() {
  const concepts = [
    ['/media/vision-2027/exterior.webp','Proposed barn exterior concept'],
    ['/media/vision-2027/great-room.webp','Proposed barn great room concept'],
    ['/media/vision-2027/fitness-arcade.webp','Proposed barn fitness and arcade concept'],
    ['/media/vision-2027/bedroom.webp','Proposed barn bedroom concept'],
  ]
  return `
    <main id="main">
      ${pageHero({image:`${octoberMedia}/sauna-design-study.webp`, alt:'Illustrative design study for a future wellness courtyard around the current six-person sauna', eyebrow:'The next chapter', title:'The estate,<br /><em>still becoming.</em>', copy:'A transparent preview of the spaces now being planned for 2027—from a reimagined barn to a desert wellness courtyard.', cta:'Follow the vision', secondary:'See what is planned', badge:'Wellness courtyard design study · current sauna shown illustratively', variant:'future'})}
      <section class="vision-principles section-pad" id="story">
        ${editorialHeader('Vision 2027', 'Show the future. Label it honestly.', 'These early visualizations express design intent, not current amenities. Timelines, scope, finishes, and availability may change as planning and construction progress.')}
        <div class="vision-timeline"><article class="reveal"><span>Now</span><h3>The estate today</h3><p>Five private acres, three homes, nine bedrooms, a resort-style pool and spa, a six-person sauna, outdoor living, lawns, games, and a growing art collection.</p></article><article class="reveal"><span>Planned 2027</span><h3>The Barn</h3><p>A reimagining of the existing approximately 2,500-square-foot structure, with an early plan that may include added bedrooms, bathrooms, flexible gathering space, fitness, and play.</p></article><article class="reveal"><span>Wellness plans</span><h3>Courtyard expansion</h3><p>The sauna is currently on the estate. The cold plunge, outdoor shower, planted courtyard, and related wellness infrastructure remain concepts under development.</p></article></div>
      </section>
      <section class="concept-film">
        <div class="concept-film__copy reveal"><p class="concept-badge">Concept rendering · target October 2027</p><p class="eyebrow eyebrow--light">The wellness courtyard</p><h2>Heat. Cold.<br />Stillness.</h2><p>A planted outdoor retreat is being explored as the estate’s new wellness counterpoint.</p></div>
        <div class="concept-film__media reveal"><video controls playsinline preload="metadata" poster="/media/vision-2027/wellness-courtyard.webp"><source src="/media/video/wellness-concept-2027.mp4" type="video/mp4" /></video><p>Conceptual visualization only. The wellness amenities shown are planned for a target completion of October 2027 and are not currently available.</p></div>
      </section>
      <section class="section-pad">
        ${editorialHeader('The Barn', 'A flagship gathering space in the making.', 'The existing barn is the starting point. The design is under development, with a planned expansion focused on flexible gathering, overnight comfort, fitness, and play.')}
        <div class="concept-grid">${concepts.map(([src,alt],i)=>`<figure class="concept-card reveal"><div class="concept-badge">Concept rendering</div>${picture(src,alt)}<figcaption>${['Exterior arrival study','Flexible gathering room','Fitness and games study','Additional bedroom study'][i]}</figcaption></figure>`).join('')}</div>
      </section>
      <section class="concept-disclosure"><div><p class="eyebrow">Planning note</p><h2>Nothing here is pretending to be finished.</h2></div><p>The sauna design study and all other images and video on this page are visualizations, not photographs of the current amenity. The six-person sauna is on the estate today; the future cold plunge, outdoor shower, courtyard, barn scope, timelines, and availability may change.</p></section>
      ${inquirySection('Vision 2027 updates')}
    </main>`
}

const renderers = {
  home: homePage,
  stay: stayPage,
  weddings: weddingsPage,
  corporate: corporatePage,
  'after-dark': afterDarkPage,
  vision: visionPage,
}

const page = document.body.dataset.page || 'home'
const app = document.querySelector('#app')
app.innerHTML = `${header()}${(renderers[page] || homePage)()}${footer()}<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Estate photograph" aria-hidden="true"><button type="button" aria-label="Close image">Close</button><img src="" alt="" /></div>`

if (window.location.hash) {
  requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView())
}

const siteHeader = document.querySelector('#site-header')
const menuToggle = document.querySelector('#menu-toggle')
const menuClose = document.querySelector('#menu-close')
const mobileNav = document.querySelector('#mobile-nav')

function setMenu(open) {
  mobileNav.classList.toggle('is-open', open)
  mobileNav.setAttribute('aria-hidden', String(!open))
  menuToggle.setAttribute('aria-expanded', String(open))
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
  document.body.classList.toggle('menu-open', open)
  if (open) menuClose.focus()
}
menuToggle.addEventListener('click', () => setMenu(true))
menuClose.addEventListener('click', () => setMenu(false))
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)))

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) setMenu(false)
})

window.addEventListener('scroll', () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 30), { passive: true })

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (reduceMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el))
}

function firstTouchSource() {
  try {
    const previous = sessionStorage.getItem('scr_first_touch')
    if (previous) return previous
  } catch { /* Private browsing may disable session storage. */ }
  const params = new URLSearchParams(window.location.search)
  const campaign = ['utm_source', 'utm_medium', 'utm_campaign']
    .map(key => params.get(key)?.trim().slice(0, 100))
    .filter(Boolean).join(' / ')
  let source = campaign ? `Campaign: ${campaign}` : 'Direct / untagged'
  if (!campaign && document.referrer) {
    try {
      const referringHost = new URL(document.referrer).hostname
      if (referringHost && referringHost !== window.location.hostname) source = `Referral: ${referringHost}`
    } catch { /* Ignore malformed or unavailable referrers. */ }
  }
  try { sessionStorage.setItem('scr_first_touch', source) } catch { /* Optional attribution only. */ }
  return source
}

const leadSource = firstTouchSource()
document.querySelectorAll('[data-inquiry-form]').forEach(form => {
  form.elements.source.value = leadSource
  form.elements.page.value = window.location.pathname
  form.addEventListener('submit', async event => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form))
    if (data.company_website) return
    const button = form.querySelector('[type=submit]')
    const status = form.querySelector('[data-inquiry-status]')
    if (button.disabled) return
    button.disabled = true
    status.textContent = 'Sending your inquiry…'
    const destination = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`
    const subject = encodeURIComponent(`Sunset Club Ranch inquiry — ${data.occasion || data.interest}`)
    const body = encodeURIComponent([
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || 'Not provided'}`,
      `Interest: ${data.interest}`,
      `Occasion: ${data.occasion || 'Not specified'}`,
      `Arrival: ${data.arrival || 'Flexible'}`,
      `Departure: ${data.departure || 'Flexible'}`,
      `Guests: ${data.guests || 'Not specified'}`,
      `Source: ${data.source}`,
      `Landing page: ${data.page}`,
      '',
      data.message || 'No additional message.',
    ].join('\n'))
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 12000)
      let response
      try {
        response = await fetch(destination, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: data.name, email: data.email, phone: data.phone,
            interest: data.interest, occasion: data.occasion,
            arrival: data.arrival, departure: data.departure,
            guests: data.guests, message: data.message,
            source: data.source, page: data.page,
            _url: window.location.origin + window.location.pathname,
            _subject: `Sunset Club Ranch inquiry — ${data.occasion || data.interest}`,
            _honey: '',
          }),
          signal: controller.signal,
        })
      } finally { clearTimeout(timeout) }
      const result = await response.json()
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Delivery unconfirmed')
      status.textContent = 'Thank you. Your inquiry was accepted; we will follow up by email.'
      form.reset()
      form.elements.source.value = leadSource
      form.elements.page.value = window.location.pathname
    } catch {
      status.textContent = 'We could not confirm delivery. An email draft is opening; please press Send in your email app. You can also call or email us using the links beside this form.'
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    } finally {
      button.disabled = false
    }
  })
})

const lightbox = document.querySelector('#lightbox')
const lightboxImage = lightbox.querySelector('img')
const lightboxClose = lightbox.querySelector('button')
let previousFocus = null
function closeLightbox() {
  lightbox.classList.remove('is-open')
  lightbox.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('lightbox-open')
  previousFocus?.focus()
}
document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
  previousFocus = button
  lightboxImage.src = button.dataset.lightbox
  lightboxImage.alt = button.querySelector('img')?.alt || 'Sunset Club Ranch photograph'
  lightbox.classList.add('is-open')
  lightbox.setAttribute('aria-hidden', 'false')
  document.body.classList.add('lightbox-open')
  lightboxClose.focus()
}))
lightboxClose.addEventListener('click', closeLightbox)
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox() })
document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox() })
