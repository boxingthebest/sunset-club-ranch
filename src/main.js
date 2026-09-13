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

const estateImages = Array.from({ length: 20 }, (_, index) => `/media/estate/estate-${String(index + 1).padStart(2, '0')}.webp`)
const currentStucco = '/media/estate/poolside-white-stucco.webp'
const currentLawn = '/media/estate/lawn-current.webp'
const currentPoolOverview = '/media/estate/resort-pool-overview.webp'
const eveningPoolSpa = '/media/estate/evening-pool-spa.webp'
const eveningPoolClose = '/media/estate/evening-pool-close.webp'
const eveningPoolLawn = '/media/estate/evening-pool-lawn.webp'

function logo(mark = false) {
  return `<span class="brand ${mark ? 'brand--hero' : ''}"><span>Sunset Club</span><small>Ranch</small></span>`
}

function header() {
  const pageCta = {
    weddings: 'Plan your event',
    corporate: 'Plan your retreat',
    'after-dark': 'Join the 2027 list',
    vision: 'Follow the vision',
  }
  const ctaLabel = pageCta[document.body.dataset.page] || 'Check dates'
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
    'after-dark': 'Join the 2027 list',
    vision: 'Follow the vision',
  }
  const ctaLabel = pageCta[document.body.dataset.page] || 'Check dates'
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
  return `<img class="${className}" src="${src}" alt="${alt}" loading="${loading}" decoding="async" />`
}

function pageHero({ image, eyebrow, title, copy, cta = 'Start planning', secondary = 'Explore', secondaryHref = '#story', badge = '' }) {
  return `
    <section class="page-hero">
      ${picture(image, '', 'page-hero__image', 'eager')}
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
        <span>5 private acres</span><span>3 homes</span><span>7 bedrooms</span><span>Indio, California</span>
      </div>
    </section>`
}

function editorialHeader(kicker, title, copy = '') {
  return `<div class="editorial-header reveal"><p class="eyebrow">${kicker}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`
}

function inquirySection(intent = 'Private stay') {
  const isEvent = ['Wedding or celebration', 'Birthday', 'Corporate retreat'].includes(intent)
  const inquiryLabel = isEvent ? 'Event inquiry' : 'Stay inquiry'
  const inquiryTitle = isEvent ? 'Tell us about<br />your gathering.' : 'Tell us when<br />you want to stay.'
  const inquiryCopy = isEvent
    ? 'Share the date, group size, and occasion. We’ll review the fit and reply with the clearest next step.'
    : 'Share your dates, group size, and priorities. We’ll help you plan the right kind of stay.'
  const startLabel = isEvent ? 'Event / arrival date' : 'Arrival'
  const endLabel = isEvent ? 'End / departure date' : 'Departure'
  const guestsLabel = isEvent ? 'Expected guests' : 'Guests'
  const messagePlaceholder = isEvent
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
        <div class="field field--wide"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required /></div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required /></div>
        <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" /></div>
        <div class="field"><label for="arrival">${startLabel}</label><input id="arrival" name="arrival" type="date" /></div>
        <div class="field"><label for="departure">${endLabel}</label><input id="departure" name="departure" type="date" /></div>
        <div class="field"><label for="guests">${guestsLabel}</label><input id="guests" name="guests" type="number" min="1" inputmode="numeric" /></div>
        <div class="field"><label for="occasion">Occasion</label><select id="occasion" name="occasion">${occasionOptions.map(option => `<option>${option}</option>`).join('')}</select></div>
        <div class="field field--wide"><label for="message">What should we know?</label><textarea id="message" name="message" rows="4" placeholder="${messagePlaceholder}"></textarea></div>
        <div class="field field--wide form-submit"><button class="button" type="submit">Review & email</button><p>Opens a pre-addressed email with your details so you can review before sending.</p></div>
      </form>
    </section>`
}

function homePage() {
  return `
    <main id="main">
      <section class="home-hero">
        ${picture(currentPoolOverview, 'Sunset Club Ranch resort-style pool, lawns, palms, and mountain views in Indio, California', 'home-hero__image', 'eager')}
        <div class="home-hero__veil"></div>
        <div class="home-hero__content reveal is-visible">
          ${logo(true)}
          <p class="home-hero__kicker">A private five-acre estate with a Tulum-meets-ranch spirit</p>
          <h1>Come together.<br /><em>Keep the whole place.</em></h1>
          <p class="home-hero__copy">Three homes, seven bedrooms, a resort-style pool, and room for the group to settle into its own desert rhythm.</p>
          <div class="hero-actions"><a class="button" href="/stay.html#inquire">Book a stay</a><a class="button button--ghost" href="/weddings.html#inquire">Plan an event</a></div>
        </div>
        <div class="hero-facts" aria-label="Estate highlights"><span>5 private acres</span><span>3 homes</span><span>7 bedrooms</span><span>Near Empire Polo Club</span></div>
      </section>

      <section class="booking-chooser" id="choose">
        <div class="booking-chooser__intro reveal"><p class="eyebrow">Start here</p><h2>What brings you<br />to the ranch?</h2><p>Choose one path. We’ll ask only for the information needed to help.</p></div>
        <div class="booking-chooser__paths">
          <a class="booking-choice reveal" href="/stay.html#inquire"><span>01</span><div><p>Overnight stay</p><h3>Book the ranch</h3><small>Dates · Guests · Stay priorities</small></div><b aria-hidden="true">→</b></a>
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
          ${picture(estateImages[1], 'A view across Sunset Club Ranch in Indio')}
          <figcaption>Five private acres · Indio, California</figcaption>
        </figure>
      </section>

      <section class="fact-band" aria-label="Property details">
        <div><strong>05</strong><span>Private acres</span></div><div><strong>03</strong><span>Distinct homes</span></div><div><strong>07</strong><span>Bedrooms</span></div><div><strong>01</strong><span>Estate, entirely yours</span></div>
      </section>

      <section class="story-grid section-pad">
        ${editorialHeader('The rhythm of a stay', 'A place with more than one mood.', 'Swim. Cook. Play. Retreat. The estate lets everyone move together—or choose a corner of their own.')}
        <div class="mosaic mosaic--estate reveal">
          <figure class="mosaic__wide">${picture(currentStucco, 'Current white-stucco poolside patio at Sunset Club Ranch')}<figcaption>New white-stucco poolside patio</figcaption></figure>
          <figure>${picture(eveningPoolClose, 'Sunset Club Ranch pool glowing at blue hour')}<figcaption>Poolside afterglow</figcaption></figure>
          <figure>${picture('/media/estate/hardwood-kitchen.webp', 'Renovated Sunset Club Ranch kitchen with new floors')}</figure>
          <figure class="mosaic__tall">${picture(eveningPoolLawn, 'Sunset Club Ranch pool, lawns, palms, and lights at blue hour')}<figcaption>Desert afterglow</figcaption></figure>
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
            ['Stay together', 'A private compound for group escapes, family time, and long weekends.', '/stay.html', currentStucco],
            ['Celebrate here', 'Weddings, birthdays, and milestone gatherings begin with a private conversation.', '/weddings.html', currentLawn],
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
      ${pageHero({image: estateImages[3], eyebrow:'The private estate', title:'Three homes.<br /><em>One shared escape.</em>', copy:'A five-acre setting that gives the group a place to gather—and everyone enough space to find their own pace.', cta:'Check dates', secondary:'See the homes'})}
      <section class="section-pad" id="story">
        ${editorialHeader('The homes', 'Together, without being on top of one another.', 'Three distinct homes share one relaxed design language: warm wood, clean white walls, collected art, shaded thresholds, and an easy connection to the grounds.')}
        <div class="home-cards">
          ${[
            ['01', 'The social heart', 'Open living, a new fireplace, new floors, shared meals, and an easy connection to the outdoors.', '/media/estate/hardwood-fireplace.webp'],
            ['02', 'Character in every room', 'A growing art collection gives the interiors their own point of view without sacrificing comfort.', '/media/art/sofa-gallery.webp'],
            ['03', 'A place to retreat', 'Private rooms across three homes give the group space to settle in at the end of the day.', '/media/art/jaws-bedroom.webp'],
          ].map(([n, title, copy, image]) => `<article class="home-card reveal"><figure>${picture(image, title)}</figure><div><span>${n}</span><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}
        </div>
        <p class="home-cards__note reveal">Selected artwork scenes are owner-supplied visualizations of current rooms.</p>
      </section>
      <section class="amenity-editorial">
        <figure class="amenity-editorial__image reveal">${picture(estateImages[1], 'Pool and outdoor gathering space at Sunset Club Ranch')}</figure>
        <div class="amenity-editorial__copy reveal"><p class="eyebrow eyebrow--light">Outside, all day</p><h2>Pool water.<br />Warm shade.<br />No agenda.</h2><p>Move from the heated pool and spa to the outdoor kitchen, long-table dining, games, lawns, and fire-lit evenings.</p><ul><li>Heated pool and spa</li><li>Outdoor kitchen and pizza oven</li><li>Games and generous lawns</li><li>Multiple shaded gathering areas</li></ul></div>
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
          <div><span>03</span><strong>Basketball</strong></div>
          <div><span>04</span><strong>158-inch outdoor screen</strong></div>
          <div><span>05</span><strong>Koolfog misting</strong></div>
          <div><span>06</span><strong>New fireplace</strong></div>
          <div><span>07</span><strong>New floors</strong></div>
          <div><span>08</span><strong>Property-wide Wi-Fi</strong></div>
          <div><span>09</span><strong>Updated HVAC & plumbing</strong></div>
        </div>
        <p class="new-estate__note reveal">All listed additions are complete and available today. Current photography is shown where available; every illustrative view is transparently labeled.</p>
      </section>
      <section class="current-upgrades-showcase" id="current-upgrades">
        <div class="current-upgrades-showcase__copy reveal"><p class="status-badge">Completed · available today</p><p class="eyebrow eyebrow--light">The estate, newly finished</p><h2>More glow.<br />More ways to gather.</h2><p>The 158-inch outdoor media wall, illuminated ficus arrival, white poolside stucco, and honey-gold travertine are already part of the property.</p><p class="fine-print fine-print--light">Current photography is shown where available. The remaining images are owner-supplied visualizations of completed work and will be replaced as the fresh photo library arrives.</p></div>
        <div class="current-upgrades-showcase__media reveal">
          <figure>${picture('/media/current-upgrades/outdoor-screen.webp','Owner-supplied visualization of the existing outdoor media wall at Sunset Club Ranch')}<figcaption>158-inch outdoor screen · current visualization</figcaption></figure>
          <figure>${picture('/media/current-upgrades/illuminated-arrival.webp','Owner-supplied visualization of the existing illuminated ficus driveway at Sunset Club Ranch')}<figcaption>Illuminated ficus arrival · current visualization</figcaption></figure>
          <figure>${picture(currentStucco,'Current white-stucco poolside patio at Sunset Club Ranch')}<figcaption>White-stucco poolside patio · current photograph</figcaption></figure>
          <figure>${picture('/media/current-upgrades/travertine-walkway.webp','Owner-supplied visualization of the completed honey-gold travertine walkway at Sunset Club Ranch')}<figcaption>Honey-gold travertine · current visualization</figcaption></figure>
        </div>
      </section>
      <section class="section-pad">
        ${editorialHeader('A closer look', 'Details make the stay.')}
        <div class="gallery-grid">
          ${[currentPoolOverview, currentStucco, eveningPoolLawn, '/media/estate/hardwood-kitchen.webp', '/media/estate/hardwood-fireplace.webp', eveningPoolSpa].map((src, i) => `<button class="gallery-item reveal" type="button" data-lightbox="${src}" aria-label="Open estate photograph ${i + 1}">${picture(src, `Sunset Club Ranch detail ${i + 1}`)}</button>`).join('')}
        </div>
      </section>
      ${inquirySection('Private stay')}
    </main>`
}

function weddingsPage() {
  return `
    <main id="main">
      ${pageHero({image: currentStucco, eyebrow:'Weddings & celebrations', title:'Gather beautifully.<br /><em>Stay completely.</em>', copy:'An intimate desert setting for weddings, birthdays, and milestone weekends—with the estate reserved around your people.', cta:'Inquire about your date', secondary:'Imagine the weekend'})}
      <section class="intro split" id="story"><div class="intro__copy reveal"><p class="eyebrow">The occasion</p><h2>Not a ballroom.<br />A place that feels like yours.</h2><p class="lead">Celebrate under open sky, gather around the table, and let the weekend unfold without separating everyone at the end of the night.</p><p class="fine-print">All event use is reviewed individually and remains subject to applicable permits, insurance, parking, noise, and property requirements.</p></div><figure class="editorial-image editorial-image--portrait reveal">${picture(currentLawn, 'Current lawn and mountain view at Sunset Club Ranch')}<figcaption>Five acres for a more personal kind of gathering</figcaption></figure></section>
      <section class="chapter-section section-pad"><div class="chapter-grid">
        ${[
          ['01','Arrive','Settle into three private homes and give the gathering room to begin naturally.'],
          ['02','Celebrate','Shape a ceremony, birthday, dinner, or milestone around the estate’s open-air spaces.'],
          ['03','Stay','Keep the people who matter close, with private rooms and shared spaces across the property.'],
        ].map(([n,t,c])=>`<article class="chapter reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
      </div></section>
      <section class="event-concepts" id="event-ideas">
        <div class="event-concepts__intro reveal"><p class="concept-badge">Event styling concepts</p><p class="eyebrow">Picture your people here</p><h2>Designed around<br />the way you gather.</h2><p>Three AI-assisted styling studies place real human energy into authentic Sunset Club Ranch settings. They are inspiration—not documentation of a past event or a promise of included decor, furniture, staffing, or services.</p></div>
        <div class="event-concepts__grid">
          <figure class="reveal">${picture('/media/event-concepts/lawn-wedding.webp','Event styling concept showing an intimate dinner on the real Sunset Club Ranch lawn')}<figcaption>Wedding dinner · styling concept</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/stucco-cocktails.webp','Event styling concept showing a cocktail gathering on the real white-stucco poolside patio')}<figcaption>Poolside cocktails · styling concept</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/evening-pool.webp','Event styling concept showing friends gathering around the real Sunset Club Ranch pool at blue hour')}<figcaption>Birthday weekend · styling concept</figcaption></figure>
        </div>
      </section>
      <section class="full-bleed-statement">${picture(estateImages[17], 'Sunset Club Ranch landscape at golden hour')}<div><p class="eyebrow eyebrow--light">By private inquiry</p><h2>Your date.<br />Your people.<br />Your version.</h2></div></section>
      ${inquirySection('Wedding or celebration')}
    </main>`
}

function corporatePage() {
  return `
    <main id="main">
      ${pageHero({image: currentStucco, eyebrow:'Corporate retreats', title:'Better ideas need<br /><em>better room.</em>', copy:'Trade the ballroom for five private acres, three homes, open-air conversations, and a setting built for teams to reconnect.', cta:'Plan a retreat', secondary:'See the format'})}
      <section class="section-pad" id="story">${editorialHeader('A different off-site', 'Think clearly. Gather naturally.', 'Build a focused retreat around privacy, indoor-outdoor work sessions, shared meals, and time that does not feel scheduled down to the minute.')}
        <div class="feature-grid">
          ${[
            ['01','Private by design','Reserve the estate around your team rather than sharing the experience with another group.'],
            ['02','Room to reset','Move between focused sessions, open lawns, pool time, and relaxed conversation.'],
            ['03','Built around the team','Use one inquiry to shape lodging, gathering priorities, and the pace of the stay.'],
          ].map(([n,t,c])=>`<article class="feature-card reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
        </div>
      </section>
      <section class="work-play split split--dark"><figure class="editorial-image reveal">${picture(currentLawn, 'Expansive lawn and mountain view at Sunset Club Ranch')}</figure><div class="intro__copy reveal"><p class="eyebrow eyebrow--light">Beyond the agenda</p><h2>Work that leaves room for the people doing it.</h2><p class="lead">Morning conversation. A long table. Time outside. A retreat should create momentum without recreating the office.</p></div></section>
      ${inquirySection('Corporate retreat')}
    </main>`
}

function afterDarkPage() {
  return `
    <main id="main" class="night-page">
      ${pageHero({image: eveningPoolSpa, eyebrow:'A private Coachella week concept', title:'After Dark<br /><em>Coachella 2027.</em>', copy:'Days at the compound. Nights under the Coachella stars. A limited, inquiry-only hospitality concept now in development.', cta:'Join the private inquiry list', secondary:'Discover the concept', badge:'2027 concept · details in development'})}
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
      <section class="full-bleed-statement full-bleed-statement--night">${picture(eveningPoolLawn, 'Current Sunset Club Ranch pool and lawns at blue hour')}<div><p class="eyebrow eyebrow--light">Week one · 2027</p><h2>A very different<br />festival basecamp.</h2></div></section>
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
      ${pageHero({image:'/media/vision-2027/wellness-courtyard.webp', eyebrow:'The next chapter', title:'The estate,<br /><em>still becoming.</em>', copy:'A transparent preview of the spaces now being planned for 2027—from a reimagined barn to a desert wellness courtyard.', cta:'Follow the vision', secondary:'See what is planned', badge:'Concept rendering · not currently available'})}
      <section class="vision-principles section-pad" id="story">
        ${editorialHeader('Vision 2027', 'Show the future. Label it honestly.', 'These early visualizations express design intent, not current amenities. Timelines, scope, finishes, and availability may change as planning and construction progress.')}
        <div class="vision-timeline"><article class="reveal"><span>Now</span><h3>The estate today</h3><p>Five private acres, three homes, a resort-style pool and spa, outdoor living, lawns, games, and a growing art collection.</p></article><article class="reveal"><span>Planned 2027</span><h3>The Barn</h3><p>A reimagining of the existing approximately 2,500-square-foot structure, with an early plan that may include added bedrooms, bathrooms, flexible gathering space, fitness, and play.</p></article><article class="reveal"><span>Target October 2027</span><h3>Wellness courtyard</h3><p>An outdoor sauna, soaking or cold-plunge element, shower, and quiet recovery space within a desert garden setting.</p></article></div>
      </section>
      <section class="concept-film">
        <div class="concept-film__copy reveal"><p class="concept-badge">Concept rendering · target October 2027</p><p class="eyebrow eyebrow--light">The wellness courtyard</p><h2>Heat. Cold.<br />Stillness.</h2><p>A planted outdoor retreat is being explored as the estate’s new wellness counterpoint.</p></div>
        <div class="concept-film__media reveal"><video controls playsinline preload="metadata" poster="/media/vision-2027/wellness-courtyard.webp"><source src="/media/video/wellness-concept-2027.mp4" type="video/mp4" /></video><p>Conceptual visualization only. The wellness amenities shown are planned for a target completion of October 2027 and are not currently available.</p></div>
      </section>
      <section class="section-pad">
        ${editorialHeader('The Barn', 'A flagship gathering space in the making.', 'The existing barn is the starting point. The design is under development, with a planned expansion focused on flexible gathering, overnight comfort, fitness, and play.')}
        <div class="concept-grid">${concepts.map(([src,alt],i)=>`<figure class="concept-card reveal"><div class="concept-badge">Concept rendering</div>${picture(src,alt)}<figcaption>${['Exterior arrival study','Flexible gathering room','Fitness and games study','Additional bedroom study'][i]}</figcaption></figure>`).join('')}</div>
      </section>
      <section class="concept-disclosure"><div><p class="eyebrow">Planning note</p><h2>Nothing here is pretending to be finished.</h2></div><p>All images and video in the Vision 2027 sections are conceptual. They illustrate possibilities under active development. Final design, amenities, dimensions, dates, and availability may change and will be updated as work is approved and completed.</p></section>
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

document.querySelectorAll('[data-inquiry-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form))
    if (data.company_website) return
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
      '',
      data.message || 'No additional message.',
    ].join('\n'))
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
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
