import './style.css'

const CONTACT_EMAIL = 'dapenza444@gmail.com'
const PHONE_DISPLAY = '203-233-1300'
const PHONE_HREF = '+12032331300'

const navItems = [
  ['Stay', '/stay.html'],
  ['Weddings & Events', '/weddings.html'],
  ['Corporate Retreats', '/corporate.html'],
  ['Festival Weekends', '/festival-weekends.html'],
  ['After Dark', '/after-dark.html'],
  ['Vision 2027', '/vision-2027.html'],
]

const airbnbGallery = '/media/airbnb-gallery'
const airbnbPoolHero = `${airbnbGallery}/pool-media-wall.jpg`
const airbnbPoolDay = `${airbnbGallery}/pool-coral-parasols.jpeg`
const airbnbMediaWallNight = `${airbnbGallery}/media-wall-night.jpeg`
const airbnbArrivalAerial = `${airbnbGallery}/arrival-aerial-night.jpg`
const airbnbMiniGolfDusk = `${airbnbGallery}/mini-golf-at-dusk.jpg`
const airbnbCourts = `${airbnbGallery}/recreation-courts.jpg`
const airbnbCourtsNight = `${airbnbGallery}/recreation-courts-night.png`
const airbnbFireplaceWall = `${airbnbGallery}/fireplace-wall.jpg`
const airbnbDiningRoom = `${airbnbGallery}/dining-room.jpeg`
const airbnbBedroom = `${airbnbGallery}/bedroom-queen.jpeg`
const weddingHeroConcept = '/media/event-concepts/wedding-hero-blue-hour.webp'
const currentUpgradesMedia = '/media/current-upgrades'
const currentKitchen = `${currentUpgradesMedia}/kitchen-new-chairs.webp`
const installedSauna = `${currentUpgradesMedia}/sauna-installed.webp`
const saunaExitView = `${currentUpgradesMedia}/sauna-exit-view.webp`

function logo(mark = false) {
  return `<span class="brand ${mark ? 'brand--hero' : ''}"><span>Sunset Club</span><small>Ranch</small></span>`
}

function header() {
  const pageCta = {
    weddings: 'Plan your event',
    corporate: 'Plan your retreat',
    festival: 'Ask about festivals',
    'after-dark': 'Ask about After Dark',
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
    festival: 'Ask about festivals',
    'after-dark': 'Ask about After Dark',
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
  return `<img class="${className}" src="${src}" alt="${alt}" loading="${loading}" decoding="async"${loading === 'eager' ? ' fetchpriority="high"' : ''} />`
}
function pageHero({ image, alt = '', eyebrow, title, copy, cta = 'Start planning', secondary = 'Explore', secondaryHref = '#story', badge = '', variant = 'classic', effect = '' }) {
  return `
    <section class="page-hero page-hero--${variant}">
      ${picture(image, alt, 'page-hero__image', 'eager')}
      <div class="page-hero__veil"></div>
      ${effect}
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
  const isFestival = intent === 'Festival Weekends 2027'
  const isAfterDark = intent === 'After Dark 2027'
  const isFuture = intent === 'Vision 2027 updates'
  const inquiryLabel = isFuture ? 'Future interest' : isAfterDark ? 'After Dark inquiry' : isFestival ? 'Festival-weekend inquiry' : isEvent ? 'Event inquiry' : 'Stay inquiry'
  const inquiryTitle = isFuture ? 'Stay close to<br />what comes next.' : isAfterDark ? 'Tell us about<br />your weekend.' : isFestival ? 'Tell us your<br />festival weekend.' : isEvent ? 'Tell us about<br />your gathering.' : 'Tell us when<br />you want to stay.'
  const inquiryCopy = isFuture
    ? 'Tell us what interests you. We’ll respond with the most current plans; this is an inquiry, not a confirmed reservation or automatic mailing-list signup.'
    : isAfterDark
    ? 'Share your preferred festival weekend, group size, and the experience you are looking for. We’ll respond with current availability and the clearest next step.'
    : isFestival
    ? 'Share your weekend, group size, and the kind of stay you are planning. We’ll respond with current availability and the clearest next step.'
    : isEvent
    ? 'Share the date, guest count, occasion, and planner or vendor team if you have one. We’ll review the fit and reply with the clearest next step.'
    : 'Share your dates, group size, and priorities. We’ll help you plan the right kind of stay.'
  const startLabel = isFuture ? 'Preferred start date (optional)' : isEvent ? 'Event / arrival date' : 'Arrival'
  const endLabel = isFuture ? 'Preferred end date (optional)' : isEvent ? 'End / departure date' : 'Departure'
  const guestsLabel = isEvent ? 'Expected guests' : 'Guests'
  const messagePlaceholder = isFuture
    ? 'Which planned space or program would you like to hear about?'
    : isAfterDark
    ? 'Festival weekend, group priorities, and what would make After Dark feel exceptional for your group.'
    : isFestival
    ? 'Festival weekend, group priorities, and anything that would make the stay exceptional.'
    : isEvent
    ? 'Occasion, setup ideas, overnight needs, and anything else we should know.'
    : 'Dates, priorities, questions, or anything that would make the stay exceptional.'
  const occasionOptions = [
    intent,
    ...['Private stay', 'Wedding or celebration', 'Birthday', 'Corporate retreat', 'Festival Weekends 2027', 'After Dark 2027', 'Other'].filter(option => option !== intent),
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
        ${picture(airbnbPoolHero, 'Sunset Club Ranch resort pool deck with cabanas, coral parasols, and 158-inch outdoor media wall', 'home-hero__image', 'eager')}
        <div class="home-hero__veil"></div>
        <canvas class="home-water-motion" data-home-water-motion aria-hidden="true"></canvas>
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
          <a class="booking-choice reveal" href="/festival-weekends.html#inquire"><span>03</span><div><p>Coachella or Stagecoach</p><h3>Festival weekends</h3><small>Weekend · Group · Priorities</small></div><b aria-hidden="true">→</b></a>
        </div>
      </section>

      <section class="after-dark-teaser" aria-label="After Dark festival-week program">
        ${picture(airbnbMediaWallNight, 'Outdoor media wall and pool deck at dusk at Sunset Club Ranch', 'after-dark-teaser__image')}
        <div class="after-dark-teaser__veil"></div>
        <div class="after-dark-teaser__content reveal">
          <p class="after-dark-teaser__status">Now accepting 2027 festival-week inquiries</p>
          <p class="eyebrow eyebrow--light">Coachella · Stagecoach · After Dark</p>
          <h2>Your private<br /><em>desert weekend.</em></h2>
          <p>Bring the whole group home to five private acres, pool days, a 158-inch outdoor screen, sauna time, and a weekend shaped around your dates—not a one-size-fits-all package.</p>
          <div class="hero-actions"><a class="button" href="/after-dark.html#inquire">Build your weekend</a><a class="button button--ghost" href="/festival-weekends.html">Explore festival stays</a></div>
          <small>Availability, programming, and any services are tailored and confirmed individually.</small>
        </div>
      </section>

      <section class="intro split" id="story">
        <div class="intro__copy reveal">
          <p class="eyebrow">The estate</p>
          <h2>Space to disappear.<br />Designed to reconnect.</h2>
          <p class="lead">Tulum ease meets ranch scale: palms, water, warm wood, honeyed stone, and open desert sky. Days move between the pool, lawns, shaded patios, and three distinct homes; nights gather around long tables and low light.</p>
          <a class="text-link" href="/stay.html">Explore the stay <span aria-hidden="true">→</span></a>
        </div>
        <figure class="editorial-image editorial-image--portrait reveal">
          ${picture(airbnbArrivalAerial, 'Sunset Club Ranch arrival and five-acre grounds at dusk')}
          <figcaption>Five private acres · Indio, California</figcaption>
        </figure>
      </section>

      <section class="fact-band" aria-label="Property details">
        <div><strong>05</strong><span>Private acres</span></div><div><strong>03</strong><span>Distinct homes</span></div><div><strong>09</strong><span>Bedrooms</span></div><div><strong>01</strong><span>Estate, entirely yours</span></div>
      </section>

      <section class="story-grid section-pad">
        ${editorialHeader('The rhythm of a stay', 'A place with more than one mood.', 'Swim. Cook. Play. Retreat. The estate lets everyone move together—or choose a corner of their own.')}
        <div class="mosaic mosaic--estate reveal">
          <figure class="mosaic__wide">${picture(airbnbPoolDay, 'Resort pool with coral parasols at Sunset Club Ranch')}<figcaption>Pool days, done properly</figcaption></figure>
          <figure>${picture(currentKitchen, 'Sunset Club Ranch kitchen and gathering table with new caramel leather chairs')}<figcaption>A place at the table</figcaption></figure>
          <figure>${picture(airbnbCourts, 'Sand volleyball and pickleball courts at Sunset Club Ranch')}<figcaption>Room to play</figcaption></figure>
          <figure class="mosaic__tall">${picture(airbnbMiniGolfDusk, 'Palm-lined mini-golf lawn at sunset at Sunset Club Ranch')}<figcaption>After the sun goes down</figcaption></figure>
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
            ['Stay together', 'A private compound for group escapes, family time, and long weekends.', '/stay.html', airbnbFireplaceWall],
            ['Celebrate here', 'Weddings, family milestones, and gatherings that last beyond one night.', '/weddings.html', airbnbArrivalAerial],
            ['Festival weekends', 'Coachella, Stagecoach, and a more considered way to do the desert.', '/festival-weekends.html', airbnbMediaWallNight],
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
      ${pageHero({image: airbnbFireplaceWall, alt:'Sunset Club Ranch fireplace and 90-inch TV in the main living room', eyebrow:'The private estate', title:'Come inside.<br /><em>Stay a while.</em>', copy:'A fireplace-lit social room with a 90-inch TV, three private homes, and five acres that give the whole group room to settle into its own rhythm.', cta:'Request dates', secondary:'See the homes', variant:'interior', effect:'<div class="stay-hearth-glow page-impact" aria-hidden="true"><span></span><i></i></div>'})}
      <section class="section-pad" id="story">
        ${editorialHeader('The homes', 'Together, without being on top of one another.', 'Three distinct homes share one relaxed design language: warm wood, clean white walls, collected art, shaded thresholds, and an easy connection to the grounds.')}
        <div class="home-cards">
          ${[
            ['01', 'The social heart', 'A fireplace-lit room with a 90-inch TV for movie nights, shared meals, and an easy connection to the outdoors.', airbnbFireplaceWall],
            ['02', 'Around the table', 'A bright kitchen and dining space with new caramel leather chairs makes it easy to bring everyone together.', currentKitchen],
            ['03', 'A place to retreat', 'Private rooms across three homes give the group space to settle in at the end of the day.', airbnbBedroom],
          ].map(([n, title, copy, image, label]) => `<article class="home-card reveal"><figure>${picture(image, label ? 'Living room with proposed sofa styling; current floors, rug, table, and artwork' : title)}${label ? `<figcaption>${label}</figcaption>` : ''}</figure><div><span>${n}</span><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}
        </div>
        <p class="home-cards__note reveal">Current Airbnb-gallery photography is shown for the living room and bedroom. The kitchen and dining image reflects the completed new chairs currently at the estate.</p>
      </section>
      <section class="amenity-editorial">
        <figure class="amenity-editorial__image reveal">${picture(airbnbPoolHero, 'Sunset Club Ranch resort pool deck with cabanas, coral parasols, and 158-inch outdoor media wall')}</figure>
        <div class="amenity-editorial__copy reveal"><p class="eyebrow eyebrow--light">Outside, all day</p><h2>Pool water.<br />Warm shade.<br />No agenda.</h2><p>Move from the heated pool and spa with waterfall features to the 158-inch outdoor media wall, cabana loungers, long-table dining, sauna time, and fire-lit evenings.</p><ul><li>Heated pool, spa, and waterfall features</li><li>158-inch outdoor media wall</li><li>Six-person sauna</li><li>One outdoor kitchen and pizza oven</li></ul></div>
      </section>
      <section class="lawn-film" id="the-lawn">
        <video autoplay muted loop playsinline preload="metadata" poster="${airbnbArrivalAerial}" aria-label="The expansive lawn and mountain view at Sunset Club Ranch">
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
          <div><span>04</span><strong>158-inch outdoor media wall</strong></div>
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
          <div class="current-upgrades-showcase__copy reveal"><p class="status-badge">Completed · available today</p><p class="eyebrow eyebrow--light">The estate, newly finished</p><h2>More glow.<br />More ways to gather.</h2><p>The 158-inch outdoor media wall sets the tone for a true resort day: pool, cabanas, coral parasols, waterfall features, sauna time, and all the space your group needs to stay out a little longer.</p><p class="fine-print fine-print--light">The six-person sauna, new kitchen seating, media wall, pool upgrades, fire pits, and outdoor recreation amenities are already part of the property.</p></div>
          <div class="current-upgrades-showcase__media reveal">
          <figure>${picture(airbnbPoolHero,'Sunset Club Ranch pool deck with cabanas, coral parasols, and 158-inch outdoor media wall')}<figcaption>158-inch outdoor media wall · current Airbnb-gallery photograph</figcaption></figure>
          <figure>${picture(installedSauna,'Installed six-person sauna at Sunset Club Ranch')}<figcaption>Six-person sauna · available now</figcaption></figure>
          <figure>${picture(currentKitchen,'Sunset Club Ranch kitchen with new caramel leather dining chairs')}<figcaption>Kitchen gathering table · current photograph</figcaption></figure>
          <figure>${picture(airbnbArrivalAerial,'Sunset Club Ranch entry and five-acre grounds at dusk')}<figcaption>Arrival and grounds · current Airbnb-gallery photograph</figcaption></figure>
          <figure>${picture(airbnbPoolDay,'Sunset Club Ranch pool with coral parasols')}<figcaption>Pool day · current Airbnb-gallery photograph</figcaption></figure>
          <figure>${picture(airbnbCourtsNight,'Illuminated recreation courts at Sunset Club Ranch')}<figcaption>Recreation after dark · current Airbnb-gallery photograph</figcaption></figure>
        </div>
      </section>
      <section class="section-pad">
        ${editorialHeader('A closer look', 'Details make the stay.')}
        <div class="gallery-grid">
          ${[
            [airbnbPoolHero, 'Resort pool deck with the 158-inch outdoor media wall'],
            [airbnbPoolDay, 'Resort pool with coral parasols'],
            [airbnbCourts, 'Pickleball and sand volleyball courts'],
            [currentKitchen, 'Kitchen and dining space with new caramel leather chairs'],
            [installedSauna, 'Installed six-person sauna'],
            [saunaExitView, 'View across the Sunset Club Ranch grounds from the sauna exit'],
            [airbnbArrivalAerial, 'Front entry and grounds at dusk'],
            [airbnbMediaWallNight, 'Outdoor media wall at dusk'],
            [airbnbFireplaceWall, 'Fireplace and media wall'],
            [airbnbBedroom, 'Bedroom'],
          ].map(([src, alt]) => `<button class="gallery-item reveal" type="button" data-lightbox="${src}" data-alt="${alt}" aria-label="Open ${alt.toLowerCase()}">${picture(src, alt)}</button>`).join('')}
        </div>
      </section>
      ${planningAnswers('Plan your stay', 'A private estate stay in Indio, made simple.', [
        ['Can our group stay together?', 'The estate brings together three homes and nine bedrooms on five private acres. Tell us your group size and dates so we can confirm the best fit.'],
        ['What can we enjoy on property now?', 'The pool and spa with waterfall features, a six-person sauna, the 158-inch outdoor media wall, pickleball and volleyball courts, a basketball hoop, fire pits, one outdoor kitchen, two indoor kitchens, and refreshed interiors are part of the current estate. The planned barn, cold plunge, hammocks, swings, outdoor shower, and expanded wellness courtyard are not yet guest amenities.'],
        ['How do we request dates?', 'Send your dates and group size through the inquiry below. We’ll review availability and the details with you directly; the website does not provide an instant booking or a confirmed reservation.'],
      ])}
      ${inquirySection('Private stay')}
    </main>`
}

function weddingsPage() {
  return `
    <main id="main">
      ${pageHero({image: weddingHeroConcept, alt:'Event styling concept of an intimate wedding dinner beside the pool at Sunset Club Ranch at blue hour', eyebrow:'Weddings & celebrations', title:'Gather beautifully.<br /><em>Stay completely.</em>', copy:'A private desert estate for wedding weekends, milestone birthdays, anniversaries, and the gatherings that deserve more than one night.', cta:'Inquire about your date', secondary:'Imagine the weekend', badge:'Event styling concept · shown for inspiration', variant:'event-concept', effect:'<div class="wedding-petal-lights page-impact" aria-hidden="true"><span></span><i></i><b></b></div>'})}
      <section class="intro split" id="story"><div class="intro__copy reveal"><p class="eyebrow">The occasion</p><h2>Not a ballroom.<br />A place that feels like yours.</h2><p class="lead">Celebrate under open sky, gather around the table, and let the weekend unfold without separating everyone at the end of the night.</p><p>From South Asian and Indian wedding weekends and bar or bat mitzvahs to birthdays, anniversaries, reunions, and family milestones, every thoughtful private celebration begins with a date-specific conversation with our team and your planner.</p><p class="fine-print">Under the current Indio STR ordinance, this parcel may host a gathering of up to 40 persons without a special-event permit. A gathering of 41 or more requires a special-event permit and City approval, alongside applicable insurance, parking, noise, availability, and property requirements.</p></div><figure class="editorial-image editorial-image--portrait reveal">${picture(airbnbArrivalAerial, 'Sunset Club Ranch arrival and five-acre grounds at dusk')}<figcaption>Five acres for a more personal kind of gathering</figcaption></figure></section>
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
          <figure class="reveal">${picture(airbnbArrivalAerial,'Sunset Club Ranch arrival and five-acre grounds at dusk')}<figcaption>Five-acre grounds · current Airbnb-gallery photograph</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/poolside-cocktails-2026.webp','Event styling concept showing a cocktail gathering beside the Sunset Club Ranch pool')}<figcaption>Poolside cocktails · styling concept</figcaption></figure>
          <figure class="reveal">${picture('/media/event-concepts/evening-pool.webp','Event styling concept showing friends gathering around the real Sunset Club Ranch pool at blue hour')}<figcaption>Birthday weekend · styling concept</figcaption></figure>
        </div>
      </section>
      <section class="celebration-stories" id="celebrations">
        <div class="celebration-stories__intro reveal"><p class="concept-badge concept-badge--light">Celebration styling concepts</p><p class="eyebrow eyebrow--light">Beyond the wedding day</p><h2>Every reason to<br /><em>bring your people together.</em></h2><p>From a wedding weekend to a milestone birthday, anniversary, bar or bat mitzvah, or the kind of family gathering that becomes tradition, the estate gives every generation room to make the occasion its own.</p></div>
        <div class="celebration-stories__grid">
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/south-asian-wedding-weekend-concept.webp','South Asian and Indian wedding-weekend styling concept on the Sunset Club Ranch lawn at sunset')}<figcaption>South Asian & Indian wedding weekend · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">South Asian & Indian weddings</p><h3>A whole weekend to celebrate.</h3><p>Welcome dinners, time by the pool, long-table gatherings, and room for the family to stay close across the celebration.</p></div></article>
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/bar-bat-mitzvah-weekend-concept.webp','Multigenerational family celebration styling concept on the Sunset Club Ranch lawn at sunset')}<figcaption>Family celebration weekend · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Bar & bat mitzvahs</p><h3>One home base for the whole family.</h3><p>Bring generations together for a meaningful weekend with space to gather, reset, and make the celebration your own.</p></div></article>
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/milestone-weekend-concept.webp','Milestone birthday or anniversary weekend styling concept at the Sunset Club Ranch pool')}<figcaption>Milestone weekend · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Birthdays & anniversaries</p><h3>The celebration, extended.</h3><p>Make the toast by the water, linger over dinner, and keep the people you love close for the whole weekend.</p></div></article>
          <article class="celebration-story reveal"><figure>${picture('/media/event-concepts/family-reunion-courts-2026.webp','Celebration styling concept of a multigenerational family weekend at Sunset Club Ranch recreation courts')}<figcaption>Family milestone · styling concept</figcaption></figure><div><p class="eyebrow eyebrow--light">Family milestones</p><h3>Something for every generation.</h3><p>Pool time, pickleball, volleyball, long lunches, and enough room for everyone to be together without being on top of one another.</p></div></article>
        </div>
        <p class="celebration-stories__note">These images are inspirational styling concepts, not records of past events or a promise of included decor, furniture, staffing, cultural services, or other vendor services. Every celebration begins with a date-specific inquiry and individual review.</p>
      </section>
      <section class="full-bleed-statement">${picture(airbnbMediaWallNight, 'Outdoor media wall glowing at dusk at Sunset Club Ranch')}<div><p class="eyebrow eyebrow--light">By private inquiry</p><h2>Your date.<br />Your people.<br />Your version.</h2></div></section>
      ${planningAnswers('Planning a gathering', 'Weddings and celebrations in the Coachella Valley.', [
        ['Can guests stay at the estate?', 'The three-home, nine-bedroom estate can be part of a gathering weekend. Share your proposed group size and dates so we can discuss the lodging arrangement.'],
        ['How is event attendance determined?', 'This five-acre parcel may host a gathering of up to 40 persons under the current STR ordinance without a special-event permit. For a gathering of 41 or more, share your date, expected attendance, and planner or vendor team so we can discuss the special-event permit process and City-approved capacity for your specific event.'],
        ['Are packages and pricing listed?', 'We do not advertise a one-size-fits-all event package or promise a date online. Send an inquiry and we’ll discuss what is feasible, available, and appropriate for your plans.'],
      ])}
      ${inquirySection('Wedding or celebration')}
    </main>`
}

function corporatePage() {
  return `
    <main id="main">
      ${pageHero({image: airbnbMediaWallNight, alt:'Outdoor media wall glowing at dusk at Sunset Club Ranch', eyebrow:'Corporate retreats', title:'Better ideas need<br /><em>better room.</em>', copy:'Trade the ballroom for five private acres, three homes, open-air conversations, and a setting built for teams to reconnect.', cta:'Plan a retreat', secondary:'See the format', variant:'retreat', effect:'<div class="corporate-horizon-lines page-impact" aria-hidden="true"><span></span><i></i></div>'})}
      <section class="section-pad" id="story">${editorialHeader('A different off-site', 'Think clearly. Gather naturally.', 'Build a focused retreat around privacy, indoor-outdoor work sessions, shared meals, and time that does not feel scheduled down to the minute.')}
        <div class="feature-grid">
          ${[
            ['01','Private by design','Reserve the estate around your team rather than sharing the experience with another group.'],
            ['02','Room to reset','Move between focused sessions, open lawns, pool time, and relaxed conversation.'],
            ['03','Built around the team','Use one inquiry to shape lodging, gathering priorities, and the pace of the stay.'],
          ].map(([n,t,c])=>`<article class="feature-card reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
        </div>
      </section>
      <section class="corporate-program">
        <div class="corporate-program__grid">
          <figure class="corporate-program__image reveal">${picture('/media/event-concepts/tech-leadership-retreat-concept.webp', 'Technology leadership retreat styling concept in the Sunset Club Ranch dining room')}<figcaption>Leadership retreat · styling concept</figcaption></figure>
          <div class="corporate-program__copy reveal"><p class="concept-badge">Retreat styling concept</p><p class="eyebrow">Bring the right people together</p><h2>Beyond the<br /><em>boardroom.</em></h2><p>Use the Ranch as a private, elevated setting for the work that benefits from clear heads, unhurried meals, and a little more space between conversations.</p><div class="corporate-program__types"><article><span>01</span><h3>Technology & leadership off-sites</h3><p>Strategy sessions, executive alignment, and team retreats with a more human rhythm.</p></article><article><span>02</span><h3>Creative & brand retreats</h3><p>Campaign conversations, creator weekends, and teams building their next idea together.</p></article><article><span>03</span><h3>Founder & client gatherings</h3><p>Private dinners, investor conversations, intimate launches, and relationship-led weekends.</p></article></div><p class="fine-print">The image above is a styling concept that uses the current kitchen and dining room; furniture, guests, and work setup are shown for inspiration only.</p></div>
        </div>
      </section>
      <section class="work-play split split--dark"><figure class="editorial-image reveal">${picture(airbnbDiningRoom, 'Dining room for group meals and conversation at Sunset Club Ranch')}</figure><div class="intro__copy reveal"><p class="eyebrow eyebrow--light">Beyond the agenda</p><h2>Work that leaves room for the people doing it.</h2><p class="lead">Morning conversation. A long table. Time outside. A retreat should create momentum without recreating the office.</p></div></section>
      ${planningAnswers('Corporate retreat planning', 'A private Indio estate for the team.', [
        ['Is overnight lodging available?', 'The estate has three homes and nine bedrooms. Share your dates and team size so we can review accommodations and the right use of the property.'],
        ['Can we plan outdoor sessions?', 'The property includes open lawns, shaded gathering areas, and indoor dining and living spaces. Tell us what your group needs and we’ll discuss the setup.'],
        ['How do we get a proposal?', 'Use the retreat inquiry below with your preferred dates, approximate guest count, and goals. We’ll follow up with availability and next steps rather than promising an instant reservation.'],
      ])}
      ${inquirySection('Corporate retreat')}
    </main>`
}

function festivalPage() {
  return `
    <main id="main" class="festival-page">
      ${pageHero({image: airbnbPoolHero, alt:'Sunset Club Ranch resort pool deck with cabanas, coral parasols, and 158-inch outdoor media wall', eyebrow:'Festival weekends · 2027', title:'The desert is calling.<br /><em>Keep the whole place.</em>', copy:'Reserve the private five-acre estate as your festival-weekend stay—room for the group, poolside recovery, and a calmer place to come home to after the desert energy.', cta:'Ask about a weekend', secondary:'Choose your weekend', secondaryHref:'#weekends', badge:'Coachella Weekend One · Weekend Two · Stagecoach', variant:'festival', effect:'<div class="festival-sunburst" aria-hidden="true"><span></span><i></i></div>'})}
      <section class="festival-weekends section-pad" id="weekends">
        ${editorialHeader('Choose your weekend', 'Three weekends. One private basecamp.', 'Whether your people are headed to Coachella Weekend One, Coachella Weekend Two, or Stagecoach, begin with your dates and group priorities. We will reply with current availability and the right next step.')}
        <div class="festival-weekends__grid">
          ${[
            ['01', 'Coachella<br />Weekend One', 'A private home base for the first weekend of the desert season.'],
            ['02', 'Coachella<br />Weekend Two', 'The second-weekend reset: pool days, easy meals, and room for the full group.'],
            ['03', 'Stagecoach', 'A private ranch-inspired stay with space to recharge between the music and the dust.'],
          ].map(([number, title, copy]) => `<a class="festival-weekend reveal" href="#inquire"><span>${number}</span><h3>${title}</h3><p>${copy}</p><b>Ask about dates <i aria-hidden="true">→</i></b></a>`).join('')}
        </div>
      </section>
      <section class="festival-stay-choice"><div class="festival-stay-choice__inner reveal"><p class="eyebrow eyebrow--light">Your stay, your call</p><h2>A festival stay<br /><em>without a program.</em></h2><div><p>Festival Weekends are regular private stays at Sunset Club Ranch during Coachella and Stagecoach. Reserve the estate, enjoy the pool, sauna, media wall, and five private acres, then make the weekend entirely your own.</p><p>If you want more, <a href="/after-dark.html">After Dark</a> is an optional, custom-designed festival experience. It is never required for a festival-weekend stay.</p></div></div></section>
      <section class="split split--dark festival-rhythm"><figure class="editorial-image reveal">${picture(installedSauna, 'Installed six-person sauna at Sunset Club Ranch')}</figure><div class="intro__copy reveal"><p class="status-badge">Available now</p><p class="eyebrow eyebrow--light">Recovery, your way</p><h2>Festival energy.<br />A real reset.</h2><p class="lead">Start slowly. Come home to water, a hot sauna, long tables, open sky, and space that belongs only to your group.</p><p class="fine-print fine-print--light">The sauna is available now. Cold plunge, hammocks, swings, and the expanded wellness courtyard are planned additions and are not yet guest amenities.</p></div></section>
      ${planningAnswers('Festival-weekend planning', 'The details begin with your dates.', [
        ['How do festival weekends work?', 'Festival Weekends are private stays at the Ranch during Coachella and Stagecoach. Share your preferred weekend and group size, and we will respond with current availability and the right lodging information.'],
        ['Are tickets, transportation, or a package included?', 'No. Festival tickets, transportation, venue access, partners, special services, and After Dark programming are not included with a regular festival-weekend stay. Any optional arrangements are discussed individually and confirmed in writing.'],
        ['Can we add After Dark?', 'Yes. After Dark is an optional, custom-designed festival experience for guests who want us to build a more end-to-end program around their weekend. Tell us which weekend interests you and what would make the stay exceptional.'],
      ])}
      ${inquirySection('Festival Weekends 2027')}
    </main>`
}

function afterDarkPage() {
  return `
    <main id="main" class="night-page">
      <div class="after-dark-fireworks" data-after-dark-fireworks aria-hidden="true"><video muted playsinline preload="auto" data-after-dark-fireworks-video><source src="/media/video/after-dark-fireworks-display.mp4" type="video/mp4" /></video></div>
      ${pageHero({image: airbnbMediaWallNight, alt:'Outdoor media wall glowing at dusk at Sunset Club Ranch', eyebrow:'A custom festival-week experience', title:'After Dark<br /><em>made for your group.</em>', copy:'A private desert weekend shaped around your group: pool days, the 158-inch outdoor screen, recovery time, and the kind of return from the grounds that feels like part of the plan.', cta:'Build your weekend', secondary:'See the experience', badge:'Coachella weekends · Stagecoach · tailored by inquiry', variant:'night'})}
      <section class="festival-calendar" aria-label="Suggested 2027 Coachella and Stagecoach stay windows" data-firework-scene="festival-calendar">
        <div class="festival-calendar__inner">
          <div class="festival-calendar__heading reveal"><p class="eyebrow eyebrow--light">The 2027 spring run</p><h2>Three long stays.<br /><em>One exceptional reset.</em></h2><p>Don’t rush home after the final set. Build in the pool day, the long brunch, and the extra night that turns a festival weekend into a real desert escape.</p></div>
          <div class="festival-calendar__grid">
            <article class="festival-calendar__weekend reveal"><p>Suggested stay · April 9–12</p><h3>Coachella<br />Weekend One</h3><span>Art-forward desert energy</span><small>Stay through Monday for a private poolside reset, room for every friend, and an easy return under the palms.</small></article>
            <article class="festival-calendar__weekend reveal"><p>Suggested stay · April 16–20</p><h3>Coachella<br />Weekend Two</h3><span>Sound, style, and starlight</span><small>Keep the estate a little longer: slow mornings, the outdoor screen, and a full reset before everyone heads home.</small></article>
            <article class="festival-calendar__weekend reveal"><p>Suggested stay · April 23–27</p><h3>Stagecoach</h3><span>Country afterglow</span><small>Extend the ranch return with boots-off sunset, long-table meals, quiet mornings, and plenty of desert sky.</small></article>
          </div>
          <p class="festival-calendar__note reveal">These are recommended Sunset Club Ranch stay windows, not festival dates. Sunset Club Ranch is an independent private property; tickets, transportation, venue access, programming, and special services are not included or guaranteed. Every stay is discussed and confirmed individually.</p>
        </div>
      </section>
      <section class="section-pad night-intro" id="story" data-firework-scene="arrival">${editorialHeader('The idea', 'When the festival comes home.', 'After Dark is a tailored way to do the desert: a private estate, an unhurried return after the grounds, and a team ready to discuss what would make the weekend exceptional for your group.')}
        <div class="pillars">
          ${[
            ['01','The estate','A private five-acre compound with three distinct homes and room to reset between festival days.'],
            ['02','The custom rhythm','Coachella Weekend One, Weekend Two, and Stagecoach stays begin with your dates, group, and what matters most to the weekend.'],
            ['03','The plan','Pool time, recovery, private meals, and any date-specific requests are discussed individually—never assumed or promised online.'],
            ['04','The recovery','Poolside mornings, shared meals, and enough quiet to do it all again.'],
          ].map(([n,t,c])=>`<article class="pillar reveal"><span>${n}</span><h3>${t}</h3><p>${c}</p></article>`).join('')}
        </div>
        <div class="disclosure disclosure--dark reveal"><strong>Every weekend is date-specific.</strong><p>Program details, access, partners, inclusions, pricing, and availability are confirmed only through an individual inquiry. Joining the inquiry list does not guarantee a reservation or any specific service.</p></div>
      </section>
      <section class="full-bleed-statement full-bleed-statement--night" data-firework-scene="basecamp">${picture(airbnbMiniGolfDusk, 'Palm-lined mini-golf lawn at sunset at Sunset Club Ranch')}<div><p class="eyebrow eyebrow--light">Coachella · Stagecoach · 2027</p><h2>A very different<br />festival basecamp.</h2></div></section>
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
      ${pageHero({image:installedSauna, alt:'Installed six-person sauna at Sunset Club Ranch', eyebrow:'Wellness, now', title:'A reset has<br /><em>already arrived.</em>', copy:'The six-person sauna is installed and available today. The wider wellness courtyard evolves next—with every future element clearly labeled as it takes shape.', cta:'Ask about a stay', secondary:'See what is planned', badge:'Six-person sauna · available now', variant:'future', effect:'<div class="vision-sauna-steam page-impact" aria-hidden="true"><span></span><i></i><b></b></div>'})}
      <section class="vision-principles section-pad" id="story">
        ${editorialHeader('Vision 2027', 'Show the future. Label it honestly.', 'The current sauna is real and ready to use. The visualizations below express future design intent—not current amenities. Timelines, scope, finishes, and availability may change as planning and construction progress.')}
        <div class="vision-timeline"><article class="reveal"><span>Available now</span><h3>Six-person sauna</h3><p>The sauna is installed on the estate today, alongside the pool, spa, outdoor living, lawns, games, and a growing art collection.</p></article><article class="reveal"><span>Wellness plans</span><h3>Courtyard expansion</h3><p>A cold plunge, outdoor shower, hammocks, swings, planted courtyard, and related wellness infrastructure are still under development and are not yet guest amenities.</p></article><article class="reveal"><span>Planned 2027</span><h3>The Barn</h3><p>A reimagining of the existing approximately 2,500-square-foot structure, with an early plan that may include added bedrooms, bathrooms, flexible gathering space, fitness, and play.</p></article></div>
      </section>
      <section class="underway-section" id="sauna-now"><div class="underway-section__copy reveal"><p class="concept-badge">Available now</p><p class="eyebrow eyebrow--light">The wellness reset</p><h2>Heat. Stillness.<br />Desert air.</h2><p>The real sauna brings a quieter counterpoint to pool days, outdoor games, and long evenings with the group. Step out, sit back, and look across the palms and grounds.</p><p class="fine-print fine-print--light">Current photography of the installed six-person sauna and its immediate outdoor view at Sunset Club Ranch.</p></div><div class="underway-section__media reveal"><figure>${picture(installedSauna, 'Installed six-person sauna at Sunset Club Ranch')}<figcaption>Six-person sauna · current photograph</figcaption></figure><figure>${picture(saunaExitView, 'View across the Sunset Club Ranch grounds from the sauna exit')}<figcaption>Sauna exit view · current photograph</figcaption></figure></div></section>
      <section class="concept-film">
        <div class="concept-film__copy reveal"><p class="concept-badge">Future design study · target 2027</p><p class="eyebrow eyebrow--light">The wellness courtyard</p><h2>What comes<br />next.</h2><p>A planted outdoor retreat, including the proposed cold plunge and related outdoor wellness features, is being explored as the estate’s next counterpoint.</p></div>
        <div class="concept-film__media reveal"><video controls playsinline preload="metadata" poster="/media/vision-2027/wellness-courtyard.webp"><source src="/media/video/wellness-concept-2027.mp4" type="video/mp4" /></video><p>Conceptual visualization only. The cold plunge, outdoor shower, hammocks, swings, courtyard, and related infrastructure shown are future plans—not current guest amenities.</p></div>
      </section>
      <section class="section-pad">
        ${editorialHeader('The Barn', 'A flagship gathering space in the making.', 'The existing barn is the starting point. The design is under development, with a planned expansion focused on flexible gathering, overnight comfort, fitness, and play.')}
        <div class="concept-grid">${concepts.map(([src,alt],i)=>`<figure class="concept-card reveal"><div class="concept-badge">Concept rendering</div>${picture(src,alt)}<figcaption>${['Exterior arrival study','Flexible gathering room','Fitness and games study','Additional bedroom study'][i]}</figcaption></figure>`).join('')}</div>
      </section>
      <section class="concept-disclosure"><div><p class="eyebrow">Planning note</p><h2>Nothing here is pretending to be finished.</h2></div><p>The six-person sauna is installed and available now. The cold plunge, hammocks, swings, outdoor shower, courtyard, barn scope, timelines, and availability remain future plans and may change. Visualizations on this page are not photographs of future completed amenities.</p></section>
      ${inquirySection('Vision 2027 updates')}
    </main>`
}

function homeMascotWelcome() {
  return `<aside class="home-welcome" data-home-welcome aria-hidden="true">
    <div class="home-welcome__mascot home-welcome__mascot--lulu">
      <span class="home-welcome__glow home-welcome__glow--lulu"></span>
      <img src="/media/mascots/lulu-3d.webp" alt="" decoding="async" />
      <span class="home-welcome__hi home-welcome__hi--lulu">Hi</span>
      <span class="home-welcome__intro home-welcome__intro--lulu"><small>Meet your host</small><strong>Hi, I’m Lulu.</strong><em>Your golden-hour host</em></span>
    </div>
    <div class="home-welcome__mascot home-welcome__mascot--scout">
      <span class="home-welcome__glow home-welcome__glow--scout"></span>
      <img src="/media/mascots/scout-3d.webp" alt="" decoding="async" />
      <span class="home-welcome__hi home-welcome__hi--scout">Hi</span>
      <span class="home-welcome__intro home-welcome__intro--scout"><small>Meet your host</small><strong>And I’m Scout.</strong><em>Your starlight host</em></span>
    </div>
  </aside>`
}

function mascotLayer(pageName) {
  if (pageName === 'home') return homeMascotWelcome()
  const hostsByPage = {
    stay: [['lulu', 'Lulu', 'Stay host', 'For fireside movies on the 90-inch TV, long-table meals, and the comfortable final chapter of the day.', 'lulu-stay-lounge']],
    weddings: [['scout', 'Scout', 'Black-tie host', 'For the toast, the glow, and the part of the night nobody wants to end.', 'scout-tuxedo']],
    corporate: [['lulu', 'Lulu', 'Retreat host', 'For clear thinking, bright ideas, and the best kind of team reset.', 'lulu-business-suit']],
    festival: [['lulu', 'Lulu', 'Festival host', 'For the glow before the gates and every poolside reset.', 'lulu-festival'], ['scout', 'Scout', 'Festival host', 'For the after-hours chapter of festival weekend.', 'scout-festival']],
    'after-dark': [['lulu', 'Lulu', 'Festival host', 'For the glow before the gates and the best return after dark.', 'lulu-festival']],
    vision: [['lulu', 'Lulu', 'Recovery host', 'For the slower exhale, the sauna glow, and a truly unhurried reset.', 'lulu-spa-recovery']],
  }
  const hosts = hostsByPage[pageName] || hostsByPage.home
  return `<aside class="mascot-layer" aria-label="Sunset Club Ranch hosts">
    ${hosts.map(([key, name, role, copy, asset = key]) => `
      <button class="mascot-dock mascot-dock--${key}" type="button" data-mascot-dock aria-expanded="false" aria-controls="mascot-note-${key}-${pageName}" aria-label="Meet ${name}, your ${role}">
        <span class="mascot-dock__glow" aria-hidden="true"></span>
        <img class="mascot-dock__image" src="/media/mascots/${asset}-3d.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
        <span class="mascot-dock__note" id="mascot-note-${key}-${pageName}" role="tooltip"><small>Meet your host</small><strong>${name}</strong><em>${role}</em><span>${copy}</span></span>
      </button>`).join('')}
  </aside>`
}

const renderers = {
  home: homePage,
  stay: stayPage,
  weddings: weddingsPage,
  corporate: corporatePage,
  festival: festivalPage,
  'after-dark': afterDarkPage,
  vision: visionPage,
}

const page = document.body.dataset.page || 'home'
const app = document.querySelector('#app')
app.innerHTML = `${header()}${(renderers[page] || homePage)()}${footer()}${mascotLayer(page)}<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Estate photograph" aria-hidden="true"><button type="button" aria-label="Close image">Close</button><img src="" alt="" /></div>`

if (window.location.hash) {
  requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView())
}

const siteHeader = document.querySelector('#site-header')
const menuToggle = document.querySelector('#menu-toggle')
const menuClose = document.querySelector('#menu-close')
const mobileNav = document.querySelector('#mobile-nav')
const mascotDocks = [...document.querySelectorAll('[data-mascot-dock]')]
const homeWelcome = document.querySelector('[data-home-welcome]')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function initHomeWaterMotion() {
  const canvas = document.querySelector('[data-home-water-motion]')
  const hero = document.querySelector('.home-hero')
  const image = hero?.querySelector('.home-hero__image')
  if (!canvas || !hero || !image || reduceMotion) return

  const ctx = canvas.getContext('2d', { alpha: true })
  const waterRegions = [
    [[1265, 744], [1510, 720], [1795, 724], [1985, 772], [2115, 828], [2000, 896], [1725, 903], [1450, 873], [1260, 808]],
    [[1605, 847], [2020, 829], [2247, 883], [2195, 1045], [2060, 1145], [1850, 1116], [1630, 1005], [1538, 935]],
    [[2035, 777], [2295, 802], [2325, 878], [2208, 930], [2070, 881], [1985, 824]],
  ]
  let viewport = { width: 0, height: 0, dpr: 0 }
  let waterMask = null
  let active = true
  let raf = 0
  let lastFrame = 0

  const sourceReady = () => image.complete && image.naturalWidth > 0
  const mapPath = (points, scale, xOffset, yOffset) => {
    const path = new Path2D()
    points.forEach(([x, y], index) => {
      const px = xOffset + x * scale
      const py = yOffset + y * scale
      if (index === 0) path.moveTo(px, py)
      else path.lineTo(px, py)
    })
    path.closePath()
    return path
  }

  function resize() {
    const { width, height } = hero.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    if (width === viewport.width && height === viewport.height && dpr === viewport.dpr) return
    viewport = { width, height, dpr }
    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    waterMask = null
  }

  function buildWaterMask(scale, xOffset, yOffset) {
    const mask = document.createElement('canvas')
    mask.width = canvas.width
    mask.height = canvas.height
    const maskCtx = mask.getContext('2d', { willReadFrequently: true })
    maskCtx.setTransform(viewport.dpr, 0, 0, viewport.dpr, 0, 0)
    waterRegions.forEach(region => {
      maskCtx.save()
      maskCtx.clip(mapPath(region, scale, xOffset, yOffset))
      maskCtx.drawImage(image, xOffset, yOffset, image.naturalWidth * scale, image.naturalHeight * scale)
      maskCtx.restore()
    })
    try {
      const pixels = maskCtx.getImageData(0, 0, mask.width, mask.height)
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index]
        const green = pixels.data[index + 1]
        const blue = pixels.data[index + 2]
        const alpha = pixels.data[index + 3]
        const blueWater = alpha > 0 && blue > 104 && green > 92 && blue > red * 1.07 && green > red * 1.03
        pixels.data[index + 3] = blueWater ? 255 : 0
      }
      maskCtx.putImageData(pixels, 0, 0)
    } catch {
      // If a browser blocks canvas pixel reads, retain the geometry-only mask rather than suppressing the real-water motion.
    }
    waterMask = mask
  }

  function draw(time) {
    if (!active || !sourceReady()) return
    resize()
    const { width, height, dpr } = viewport
    const sourceWidth = image.naturalWidth
    const sourceHeight = image.naturalHeight
    const scale = Math.max(width / sourceWidth, height / sourceHeight)
    const drawWidth = sourceWidth * scale
    const drawHeight = sourceHeight * scale
    const xOffset = (width - drawWidth) / 2
    const yOffset = (height - drawHeight) / 2
    const waveTime = time * .001

    if (!waterMask || waterMask.width !== canvas.width || waterMask.height !== canvas.height) buildWaterMask(scale, xOffset, yOffset)

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)
    waterRegions.forEach((region, regionIndex) => {
      ctx.save()
      ctx.clip(mapPath(region, scale, xOffset, yOffset))
      ctx.globalAlpha = .78
      const firstY = Math.max(0, Math.floor((Math.min(...region.map(point => point[1])) - 25) / 8) * 8)
      const lastY = Math.min(sourceHeight, Math.ceil((Math.max(...region.map(point => point[1])) + 25) / 8) * 8)
      for (let sourceY = firstY; sourceY < lastY; sourceY += 8) {
        const primaryWave = Math.sin(sourceY * .045 + waveTime * 2.8 + regionIndex) * 3.85
        const fineWave = Math.sin(sourceY * .105 - waveTime * 4.4 + regionIndex * 2) * 1.65
        const offsetX = (primaryWave + fineWave) * scale
        const offsetY = Math.sin(sourceY * .025 + waveTime * 3.2) * 1.15 * scale
        ctx.drawImage(image, 0, sourceY, sourceWidth, 9, xOffset + offsetX, yOffset + sourceY * scale + offsetY, drawWidth, 9 * scale + 1)
      }
      ctx.restore()
    })
    ctx.save()
    ctx.globalCompositeOperation = 'destination-in'
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(waterMask, 0, 0)
    ctx.restore()
  }

  function tick(time) {
    if (active && time - lastFrame > 32) {
      lastFrame = time
      draw(time)
    }
    raf = window.requestAnimationFrame(tick)
  }

  const visibility = new IntersectionObserver(entries => {
    active = entries.some(entry => entry.isIntersecting)
  }, { threshold: .02 })
  visibility.observe(hero)
  window.addEventListener('resize', resize, { passive: true })
  image.addEventListener('load', resize, { once: true })
  resize()
  raf = window.requestAnimationFrame(tick)
  window.addEventListener('pagehide', () => {
    visibility.disconnect()
    window.cancelAnimationFrame(raf)
  }, { once: true })
}

initHomeWaterMotion()

if (homeWelcome) {
  const images = [...homeWelcome.querySelectorAll('img')]
  const imageReady = image => image.complete
    ? Promise.resolve()
    : new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true })
      image.addEventListener('error', resolve, { once: true })
    })
  Promise.all(images.map(imageReady)).then(() => {
    if (reduceMotion) homeWelcome.classList.add('is-ready')
    else window.setTimeout(() => homeWelcome.classList.add('is-ready'), 350)
  })
}

function closeMascotDocks(except = null) {
  mascotDocks.forEach(dock => {
    if (dock === except) return
    dock.classList.remove('is-open')
    dock.setAttribute('aria-expanded', 'false')
  })
}

mascotDocks.forEach(dock => dock.addEventListener('click', event => {
  const open = !dock.classList.contains('is-open')
  closeMascotDocks(open ? dock : null)
  dock.classList.toggle('is-open', open)
  dock.setAttribute('aria-expanded', String(open))
  event.stopPropagation()
}))
document.addEventListener('click', () => closeMascotDocks())

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
  if (event.key === 'Escape') closeMascotDocks()
})

window.addEventListener('scroll', () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 30), { passive: true })

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

function initAfterDarkFireworks() {
  const layer = document.querySelector('[data-after-dark-fireworks]')
  const video = document.querySelector('[data-after-dark-fireworks-video]')
  if (!layer || !video || reduceMotion) return

  let isPlaying = false
  function playDisplay() {
    if (isPlaying) return
    isPlaying = true
    layer.classList.add('is-playing')
    video.currentTime = 0
    const playback = video.play()
    if (playback) playback.catch(() => {
      isPlaying = false
      layer.classList.remove('is-playing')
    })
  }

  video.addEventListener('ended', () => {
    isPlaying = false
    layer.classList.remove('is-playing')
  })
  video.addEventListener('error', () => {
    isPlaying = false
    layer.classList.remove('is-playing')
  })
  if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    window.setTimeout(playDisplay, 380)
  } else {
    video.addEventListener('canplay', () => window.setTimeout(playDisplay, 380), { once: true })
  }

  const sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.fireworkPlayed) return
      entry.target.dataset.fireworkPlayed = 'true'
      playDisplay()
    })
  }, { threshold: .38 })
  document.querySelectorAll('[data-firework-scene]').forEach(scene => sceneObserver.observe(scene))
}

initAfterDarkFireworks()

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
