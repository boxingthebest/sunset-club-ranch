import './guest-guide.css'
import { mountGuestWelcome } from './guest-welcome.js'

const WIFI_NETWORK = 'Los Palos Ranch'
const WIFI_PASSWORD = 'Funinsun1!'
const MICHELE_PHONE_DISPLAY = '(760) 567-7051'
const MICHELE_PHONE_HREF = '+17605677051'
const ANNA_PHONE_DISPLAY = '(760) 902-2587'
const ANNA_PHONE_HREF = '+17609022587'

const app = document.querySelector('#guest-guide-app')

const copyButton = (label, value, id) => `
  <button class="rk-copy" type="button" data-copy-value="${value}" data-copy-button="${id}">
    <span>${label}</span><b aria-hidden="true">Copy</b>
  </button>`

const shareButton = (title, text, url) => `
  <button class="rk-share" type="button" data-share-title="${title}" data-share-text="${text}" data-share-url="${url}">
    Share plan <span aria-hidden="true">↗</span>
  </button>`

const localCard = ({ mood, title, copy, note, official, map, shareText, image, status = 'Plan it' }) => `
  <article class="rk-local-card">
    ${image ? `<img src="${image}" alt="Sunset Club Ranch guest experience inspiration" />` : ''}
    <div class="rk-local-card__body">
      <p class="rk-card-kicker">${mood}</p>
      <h3>${title}</h3>
      <p>${copy}</p>
      <small>${note}</small>
      <div class="rk-local-card__actions"><a href="${official}" target="_blank" rel="noopener noreferrer">${status} <span aria-hidden="true">↗</span></a><a class="rk-map" href="${map}" target="_blank" rel="noopener noreferrer">Map</a>${shareButton(title, shareText, official)}</div>
    </div>
  </article>`

app.innerHTML = `
  <a class="rk-skip" href="#ranch-key-main">Skip to guide</a>
  <header class="rk-header">
    <a href="#top" class="rk-brand" aria-label="Sunset Club Ranch Ranch Key guest guide"><img src="/media/brand/sunset-club-ranch-script-logo.png" alt="Sunset Club Ranch" /><span>Ranch Key</span></a>
    <div class="rk-header-actions"><a class="rk-safety-link" href="#safety">Safety</a><a class="rk-help-link" href="#help">Need help?</a></div>
  </header>

  <main id="ranch-key-main" tabindex="-1">
    <section class="rk-arrival-hero" id="top">
      <img class="rk-arrival-hero__image" src="/media/guest-guide/current-listing/01-pool-media-wall-hero.jpg" alt="Sunset Club Ranch pool deck with coral parasols" />
      <div class="rk-arrival-hero__veil"></div>
      <div class="rk-arrival-hero__content"><p class="rk-eyebrow rk-eyebrow--light">Welcome to Sunset Club Ranch</p><h1>Get settled.<br /><em>We’ve got you.</em></h1><p class="rk-arrival-hero__lede">First things first: get connected and know exactly who to reach if you need anything.</p><div class="rk-arrival-essential"><article id="wifi"><span class="rk-arrival-essential__label">Guest Wi‑Fi</span><div><small>Network</small><strong>${WIFI_NETWORK}</strong>${copyButton('Copy network', WIFI_NETWORK, 'network')}</div><div><small>Password</small><strong>${WIFI_PASSWORD}</strong>${copyButton('Copy password', WIFI_PASSWORD, 'password')}</div><img src="/media/guest-guide/sunset-club-ranch-wifi-direct-join-qr.png" alt="QR code to join the Los Palos Ranch Wi-Fi network" /></article><div class="rk-arrival-contact"><a href="tel:${MICHELE_PHONE_HREF}"><small>Questions, amenities or gate help</small><strong>Michele · ${MICHELE_PHONE_DISPLAY}</strong></a><a href="tel:${ANNA_PHONE_HREF}"><small>Questions, amenities or gate help</small><strong>Anna · ${ANNA_PHONE_DISPLAY}</strong></a></div><a class="rk-arrival-emergency" href="tel:911"><span>Fire, medical emergency or immediate danger</span><strong>Call 911 first</strong><b aria-hidden="true">→</b></a></div><p class="rk-arrival-access">Need help getting on or off the property? Call or text Michele or Anna before trying any gate or access control.</p><a class="rk-arrival-explore" href="#plan"><span>Once you’re settled</span>Plan the good stuff <b aria-hidden="true">↓</b></a></div>
      <img class="rk-arrival-hero__lulu" src="/media/mascots/lulu-3d.webp" alt="Lulu the Roadrunner" />
    </section>

    <section class="rk-now" aria-label="Right now at the ranch">
      <div class="rk-now__title"><p class="rk-eyebrow rk-eyebrow--gold">Choose your moment</p><h2>What do you<br />need <em>right now?</em></h2></div>
      <div class="rk-now__grid"><a href="#plan"><span>01</span><strong>Plan today</strong><small>Desert days, dinner, culture &amp; what’s on tonight.</small><b>→</b></a><a href="#house"><span>02</span><strong>Pool &amp; house</strong><small>Simple, safe answers for the features you’ll use.</small><b>→</b></a><a href="#help"><span>03</span><strong>Need help</strong><small>Host help, rides, or anything that needs a human.</small><b>→</b></a><a href="#safety"><span>04</span><strong>Safety</strong><small>911 first, then quick support when you are safe.</small><b>→</b></a></div>
    </section>

    <section class="rk-section rk-section--paper rk-wifi-private" id="arrival">
      <div class="rk-section-heading"><p class="rk-eyebrow">Arrival &amp; access</p><h2>Need in-or-out<br /><em>of the property?</em></h2><p class="rk-lede">For gate, entry, parking or check-out questions, call or text Michele or Anna directly. They can confirm the right next step faster than a long list of instructions.</p></div>
      <div class="rk-private-key"><div><p class="rk-card-kicker">Get the right answer</p><h3>Ask before you force a gate or control.</h3><p>If an access point does not behave as expected, do not troubleshoot it. Call the host team and we’ll help you get moving.</p></div><a href="#help">Contact host help <span aria-hidden="true">→</span></a></div>
    </section>

    <section class="rk-section rk-section--sand" id="plan">
      <div class="rk-section-heading"><p class="rk-eyebrow">01 · Plan today</p><h2>Pick your <em>perfect plan.</em></h2><p class="rk-lede">Choose by mood, then use the map, official booking link, or share button to get the group moving.</p></div>
      <div class="rk-plan-chips" aria-label="Plan collections"><a href="#desert-days">Desert days</a><a href="#reset-culture">Reset &amp; culture</a><a href="#tonight">Tonight</a><a href="#seasonal">Seasonal water fun</a></div>

      <div class="rk-collection" id="desert-days"><div class="rk-collection__head"><p class="rk-card-kicker">Desert days</p><h3>Get out there—without overthinking it.</h3><p>For canyon palms, high-country air, guided fault-line landscapes, or a deliberately planned Joshua Tree day.</p></div><div class="rk-local-grid">
        ${localCard({mood:'Private desert tour',title:'San Andreas Fault Jeep Tour',copy:'A private, guided geology-and-desert-landscape experience without navigating remote terrain on your own.',note:'Ages 3+ · private three-hour experience · reserve ahead for groups.',official:'https://www.red-jeep.com/san-andreas-fault/private-san-andreas-fault-jeep-tour/',map:'https://www.google.com/maps/search/?api=1&query=Red+Jeep+Tours+Palm+Desert',shareText:'Let’s book a private San Andreas Fault Jeep Tour from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/02-night-arrival-aerial.jpg',status:'Check availability'})}
        ${localCard({mood:'Palm oasis walk',title:'Indian Canyons',copy:'Trade the open desert for palms and running water. Andreas Canyon is the easy loop; Palm Canyon offers a longer option.',note:'Bring water · stay on marked trails · check current hours and closures first.',official:'https://www.indian-canyons.com/indian_canyons',map:'https://www.google.com/maps/search/?api=1&query=Indian+Canyons+Palm+Springs',shareText:'Let’s do Indian Canyons from Sunset Club Ranch—palms, water and a desert walk.',image:'/media/guest-guide/current-listing/04-putting-green-twilight.jpg',status:'Official trail info'})}
        ${localCard({mood:'Cooler altitude reset',title:'Palm Springs Aerial Tramway',copy:'Rise above the desert floor for big views, mountain air and the easy Long Valley Discovery Trail.',note:'Buy/check tickets · bring water and layers · check mountain weather before leaving.',official:'https://pstramway.com/hiking/',map:'https://www.google.com/maps/search/?api=1&query=Palm+Springs+Aerial+Tramway',shareText:'Let’s take the Palm Springs Aerial Tramway from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/05-recreation-courts.jpg',status:'Tickets & trail info'})}
        ${localCard({mood:'Dedicated desert day',title:'Joshua Tree National Park',copy:'A deliberately planned day of desert landscapes, a short hike, and—if the conditions are right—a designated stargazing stop.',note:'Make it a real outing · download offline maps · bring ample water · check NPS conditions day-of.',official:'https://www.nps.gov/jotr/planyourvisit/first-time-visitors.htm',map:'https://www.google.com/maps/search/?api=1&query=Joshua+Tree+National+Park+South+Entrance',shareText:'Let’s plan a Joshua Tree National Park day from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/04-putting-green-twilight.jpg',status:'Park conditions'})}
      </div></div>

      <div class="rk-collection" id="reset-culture"><div class="rk-collection__head"><p class="rk-card-kicker">Reset &amp; culture</p><h3>A different pace for the day.</h3><p>Make it a real spa block, a museum stop before dinner, or an early wildlife-and-gardens outing.</p></div><div class="rk-local-grid">
        ${localCard({mood:'Purposeful recovery',title:'The Spa at Séc-he',copy:'Book a proper recovery block with private mineral baths, massage, float suites, treatments, cabanas, or a private spa suite.',note:'Great after a festival day · reserve ahead, especially for a group.',official:'https://thespaatseche.com/spa-services/plan-your-day/',map:'https://www.google.com/maps/search/?api=1&query=The+Spa+at+Sec-he+Palm+Springs',shareText:'Let’s reserve a Spa at Séc-he recovery day from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/14-hot-tub-twilight.jpg',status:'Book spa time'})}
        ${localCard({mood:'Culture & design',title:'Agua Caliente Cultural Museum',copy:'A thoughtful one-to-two-hour culture stop before dinner or a relaxed downtown evening.',note:'Timed tickets required · check the official calendar and current ticket availability.',official:'https://www.accmuseum.org/visit_us',map:'https://www.google.com/maps/search/?api=1&query=Agua+Caliente+Cultural+Museum+Palm+Springs',shareText:'Let’s visit the Agua Caliente Cultural Museum from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/03-long-table-dinner.jpg',status:'Reserve tickets'})}
        ${localCard({mood:'Early start',title:'The Living Desert',copy:'An early zoo-and-gardens day with desert wildlife, a splash pad, an indoor Discovery Center and optional animal encounters.',note:'Advance tickets required · in warmer months, choose an early time.',official:'https://www.livingdesert.org/plan-your-visit/',map:'https://www.google.com/maps/search/?api=1&query=The+Living+Desert+Zoo+and+Gardens',shareText:'Let’s plan a Living Desert day from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/13-pool-twilight.jpg',status:'Plan your visit'})}
      </div></div>

      <div class="rk-collection" id="tonight"><div class="rk-collection__head"><p class="rk-card-kicker">Tonight</p><h3>Dinner is covered. The night is yours.</h3><p>One excellent place, a real map, and a return-ride plan—that’s better than a dozen generic tourist links.</p></div><div class="rk-local-grid">
        ${localCard({mood:'Easy luxury dinner',title:'The Pink Cabana',copy:'Mediterranean food with Moroccan influence, cocktails, and a polished Indian Wells setting with group dining for parties of 8–20.',note:'Reserve ahead for peak and festival dates.',official:'https://sandshotelandspa.com/dining-bar/',map:'https://www.google.com/maps/search/?api=1&query=The+Pink+Cabana+Indian+Wells',shareText:'Let’s reserve The Pink Cabana for dinner from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/03-long-table-dinner.jpg',status:'Reserve dinner'})}
        ${localCard({mood:'Dinner, then cocktails',title:'Workshop Kitchen + Truss & Twine',copy:'A planned Palm Springs night: seasonal wood-fired dinner, then focused cocktails next door—no need for a bar crawl.',note:'Book both when possible · arrange a sober driver or rideshare before drinking.',official:'https://www.workshopkitchenbar.com/',map:'https://www.google.com/maps/search/?api=1&query=Workshop+Kitchen+and+Bar+Palm+Springs',shareText:'Let’s do Workshop Kitchen + Truss & Twine from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/11-patio-media-wall-night.jpg',status:'Reserve dinner'})}
        ${localCard({mood:'A real show',title:'McCallum Theatre',copy:'A polished answer to “what are we doing tonight?”—choose a date-specific comedy, dance, Broadway, cabaret, or classical performance.',note:'Programming, start time and age guidance are show-specific. Use the official calendar.',official:'https://www.mccallumtheatre.com/all-shows/',map:'https://www.google.com/maps/search/?api=1&query=McCallum+Theatre+Palm+Desert',shareText:'Let’s check tonight’s show at McCallum Theatre from Sunset Club Ranch.',image:'/media/guest-guide/current-listing/10-dining-lounge.jpg',status:'See the lineup'})}
      </div></div>

      <div class="rk-seasonal" id="seasonal"><div><p class="rk-card-kicker">Seasonal water fun</p><h3>When the water-park calendar is live.</h3><p>Palm Springs Surf Club and Palm Desert Aquatic Center are useful seasonal options, but opening days, waivers, hours and weather closures change. Check the operator before building the day around either one.</p></div><div><a href="https://palmspringssurfclub.com/general-admission/" target="_blank" rel="noopener noreferrer">Palm Springs Surf Club <span>↗</span></a><a href="https://pdpool.com/attractions/" target="_blank" rel="noopener noreferrer">Palm Desert Aquatic Center <span>↗</span></a></div></div>
      <p class="rk-verified">Local guide researched from official operator sources on November 1, 2026. Hours, ticketing, weather, water-park seasons and event programming change—always use the linked official page before you go.</p>
    </section>

    <section class="rk-section rk-section--ink" id="house">
      <div class="rk-section-heading rk-section-heading--light"><p class="rk-eyebrow rk-eyebrow--gold">02 · Pool &amp; house</p><h2>Use it well.<br /><em>Keep it easy.</em></h2><p class="rk-lede">Simple how-tos for the things that make the estate fun. One task, one short answer, and a human fallback when something feels off.</p></div>
      <div class="rk-kitchen-grid" id="cook"><article class="rk-video-card"><div class="rk-video-card__media"><video controls playsinline preload="metadata" poster="/media/guest-guide/start-the-grill-poster.jpg" aria-label="How to start the Alfresco grill"><source src="/media/guest-guide/start-the-grill-quick-guide.mp4" type="video/mp4" /></video></div><div class="rk-video-card__copy"><p class="rk-card-kicker">Watch · 18 seconds</p><h3>Start the grill</h3><p>Use the correct method every time: <b>push the knob in, turn gently toward light, then press and hold the igniter.</b> Never force a knob.</p><details><summary>Quick safety reminder <span>+</span></summary><p>Stay with the grill while it is on. If you smell gas or it does not light normally, turn controls off, step away, and contact the host.</p></details></div></article><article class="rk-appliance-card"><span class="rk-appliance-card__num">02</span><p class="rk-card-kicker">Outdoor kitchen</p><h3>Pizza oven</h3><p>The oven has separate hearth and upper-burner controls. A clearer guest-safe video is coming; for now, request help before use.</p><a href="#help">Ask for help <span aria-hidden="true">→</span></a></article><article class="rk-appliance-card"><span class="rk-appliance-card__num">03</span><p class="rk-card-kicker">Indoor kitchen</p><h3>Griddle &amp; range</h3><p>The commercial griddle and range are not first-time-use appliances. Please contact the host before operating or cleaning either unit.</p><a href="#help">Ask for help <span aria-hidden="true">→</span></a></article></div>
      <p class="rk-note rk-note--light"><b>Good rule:</b> if a control feels stuck, does not ignite normally, or is unclear, do not troubleshoot it. We would rather help quickly than have a guest force a valve or switch.</p>
    </section>

    <section class="rk-section rk-section--paper" id="reset"><div class="rk-section-heading"><p class="rk-eyebrow">Pool, spa &amp; reset</p><h2>Daylight to <em>after dark.</em></h2><p class="rk-lede">A few simple notes for the pool, spa and installed six-person outdoor sauna.</p></div><div class="rk-reset-grid"><article class="rk-pool-card"><img src="/media/guest-guide/current-listing/11-patio-media-wall-night.jpg" alt="Pool and outdoor media wall at Sunset Club Ranch at night" /><div><p class="rk-card-kicker">Pool &amp; spa</p><h3>Swim. Float. Stay awhile.</h3><p>Please keep glass away from the pool deck, supervise children at all times, and do not adjust controls that are not specifically marked for guests.</p><a href="#help">Pool help <span aria-hidden="true">→</span></a></div></article><article class="rk-sauna-card"><div class="rk-sauna-card__wash" aria-hidden="true"></div><div><p class="rk-card-kicker">Wellness</p><h3>Sauna reset</h3><ol><li><b>Turn on</b> Use the posted sauna control—not the light remote.</li><li><b>Warm up</b> Close the door and allow time for it to heat.</li><li><b>Ease in</b> Bring water and a towel; begin slowly.</li><li><b>Cool down</b> Rehydrate and turn the control off when finished.</li></ol></div><img class="rk-scout" src="/media/mascots/scout-spa-recovery-3d.webp" alt="Scout the Owl" /></article></div><p class="rk-note"><b>Lulu’s wellness note:</b> Please do not add water to the heater or stones, and do not touch the sauna’s electrical or heating components. The light remote controls lights only.</p></section>

    <section class="rk-section rk-section--sand" id="play"><div class="rk-section-heading"><p class="rk-eyebrow">The extra good stuff</p><h2>Make a <em>ranch weekend</em> of it.</h2><p class="rk-lede">Courts, movies, easy afternoons, fire-lit conversations and enough space for everyone to choose their own pace.</p></div><div class="rk-play-grid"><article><img src="/media/guest-guide/current-listing/05-recreation-courts.jpg" alt="Pickleball and sand volleyball courts at Sunset Club Ranch" /><div><span>01</span><h3>Pickleball, volleyball &amp; basketball</h3><p>Please return shared equipment after use and keep the courts clear after dark unless lighting has been arranged.</p></div></article><article><img src="/media/guest-guide/current-listing/10-dining-lounge.jpg" alt="Indoor fireplace and media wall at Sunset Club Ranch" /><div><span>02</span><h3>Movie night</h3><p>Use the remotes kept with the media setup. If a screen is not responding, do not cycle inputs repeatedly—tap host help.</p></div></article><article><img src="/media/guest-guide/current-listing/13-pool-twilight.jpg" alt="Poolside ping-pong at Sunset Club Ranch" /><div><span>03</span><h3>Easy afternoons</h3><p>Ping-pong, cabanas, outdoor lounging and fire-pit conversations. Take care of the pieces and leave the setting ready for the next moment.</p></div></article></div></section>

    <section class="rk-help" id="help"><div class="rk-help__image"><img src="/media/guest-guide/current-listing/02-night-arrival-aerial.jpg" alt="Sunset Club Ranch at dusk" /></div><div class="rk-help__veil"></div><div class="rk-help__content"><p class="rk-eyebrow rk-eyebrow--gold">03 · Need help?</p><h2>We’ve got you.</h2><p>Something unclear, not lighting, not connecting, or just not feeling right? Please reach out. A quick call is always better than forcing an appliance or control.</p><div class="rk-contact-actions"><a href="tel:${MICHELE_PHONE_HREF}"><small>Host contact · Michele</small><strong>${MICHELE_PHONE_DISPLAY}</strong></a><a href="tel:${ANNA_PHONE_HREF}"><small>Host contact · Anna</small><strong>${ANNA_PHONE_DISPLAY}</strong></a></div></div><img class="rk-help__lulu" src="/media/mascots/lulu-stay-lounge-3d.webp" alt="Lulu the Roadrunner" /></section>

    <section class="rk-safety" id="safety"><div class="rk-safety__content"><p class="rk-eyebrow rk-eyebrow--gold">04 · Safety first</p><h2>In an emergency,<br /><em>call 911 first.</em></h2><p>For fire, medical emergency, or immediate danger, call 911. Once everyone is safe, contact Michele or Anna so the ranch team can support you.</p><a class="rk-call-911" href="tel:911"><span>Emergency</span><strong>Call 911</strong><b aria-hidden="true">→</b></a><div class="rk-safety__support"><a href="tel:${MICHELE_PHONE_HREF}">Call Michele</a><a href="tel:${ANNA_PHONE_HREF}">Call Anna</a><a href="https://www.google.com/maps/dir/?api=1&destination=JFK+Memorial+Hospital%2C+47111+Monroe+St%2C+Indio%2C+CA+92201" target="_blank" rel="noopener noreferrer">Directions to JFK Memorial Hospital ↗</a></div><p class="rk-safety__small">When calling 911, use the verified property address supplied in your reservation confirmation or secure Ranch Key arrival message. We will add that address here only once the secure guest layer is live.</p></div></section>

    <section class="rk-tag" aria-label="Share your stay on Instagram"><div class="rk-tag__content"><p class="rk-eyebrow">The best part is seeing it through your eyes</p><h2>Tag your stay.<br /><em>We’ll be watching for the glow.</em></h2><p>Pool days, golden hour, movie night, pickleball victories, fire-pit conversations—if you share a favorite Sunset Club Ranch moment, tag us in your story.</p><a class="rk-instagram" href="https://instagram.com/sunsetclubranch" target="_blank" rel="noopener noreferrer"><span>Tag your story</span><strong>@sunsetclubranch</strong><b aria-hidden="true">↗</b></a><small>Sharing is always optional—just enjoy the stay.</small></div><figure class="rk-tag__image"><img src="/media/guest-guide/current-listing/13-pool-twilight.jpg" alt="Coral parasols by the pool at Sunset Club Ranch" /><figcaption>Pool days, done properly.</figcaption></figure><img class="rk-tag__scout" src="/media/mascots/scout-3d.webp" alt="Scout the Owl" /></section>
  </main>
  <footer class="rk-footer"><img src="/media/brand/sunset-club-ranch-script-logo.png" alt="Sunset Club Ranch" /><p>Pool days · long-table nights · open desert sky</p><a href="#top">Back to top ↑</a></footer>
  <div class="rk-toast" role="status" aria-live="polite" aria-atomic="true"></div>
`

const toast = document.querySelector('.rk-toast')
let toastTimer
function showToast(message) { toast.textContent = message; toast.classList.add('is-visible'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400) }

document.querySelectorAll('[data-copy-value]').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copyValue
    try {
      await navigator.clipboard.writeText(value)
      button.querySelector('b').textContent = 'Copied'
      showToast('Copied to your clipboard')
    } catch {
      showToast(`Copy manually: ${value}`)
    }
    window.setTimeout(() => { button.querySelector('b').textContent = 'Copy' }, 1800)
  })
})

document.querySelectorAll('[data-share-url]').forEach(button => {
  button.addEventListener('click', async () => {
    const shareData = { title: button.dataset.shareTitle, text: button.dataset.shareText, url: button.dataset.shareUrl }
    try {
      if (navigator.share) { await navigator.share(shareData); return }
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
      showToast('Plan link copied—send it to the group.')
    } catch (error) { if (error?.name !== 'AbortError') showToast('Share this plan from the official link.') }
  })
})

mountGuestWelcome().catch(() => { /* Keep essential guest help usable if the welcome cannot load. */ })

const deepLinkTarget = /^#[a-z][a-z0-9-]*$/i.test(window.location.hash) && document.getElementById(window.location.hash.slice(1))
if (deepLinkTarget) {
  window.requestAnimationFrame(() => deepLinkTarget.scrollIntoView({ block: 'start' }))
}
