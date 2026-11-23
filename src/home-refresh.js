const gallery = '/media/airbnb-gallery'
const arrow = '<span aria-hidden="true">↗</span>'

export function creatorHome({ picture, estateOverview, stirrupWelcome, inquirySection }) {
  return `
  <main id="main" class="creator-home">
    <section class="club-hero" aria-labelledby="club-title">
      <div class="club-hero__visual">
        ${picture(`${gallery}/pool-media-wall.jpg`, 'The real Sunset Club Ranch pool, coral parasols, cabanas, and outdoor media wall', 'club-hero__photo', 'eager')}
        <video class="club-hero__film" data-club-hero-film data-src="https://files.manuscdn.com/user_upload_by_module/session_file/106775517/RsBtbTlFCAWjcavE.mp4" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video>
        <div class="club-hero__photo-shade"></div>
      </div>
      <div class="club-hero__opening club-container">
        <div class="club-hero__copy">
          <p class="club-location"><span aria-hidden="true">✳</span> Indio, California · Your private five acres</p>
          <h1 id="club-title">Your people.<em>Your private<br /> resort.</em></h1>
          <p class="club-hero__intro">Ranch soul. Resort energy. Three homes, nine bedrooms, and five private acres. Pool days, court time, and ranch nights—entirely yours.</p>
          <div class="club-hero__actions"><a class="button button--sunset" href="/book-direct.html#availability">Check availability ${arrow}</a><a class="club-inline-link" href="/weddings.html#inquire">Plan a celebration ${arrow}</a></div>
          <a class="club-scroll" href="#experiences"><span aria-hidden="true">↓</span> Find your kind of weekend</a>
        </div>
        <div class="club-hero__crew" id="ranch-crew">${stirrupWelcome().replace('Howdy, I’m Stirrup.', 'Stirrup, Lulu &amp; Scout.').replace('Meet the ranch crew', 'Your welcome committee')}</div>
      </div>
      <div class="club-hero__foot club-container">
        <button class="club-film-control" data-hero-film-control type="button" aria-pressed="false">Play ranch film</button>
        <span class="club-photo-credit">Day-to-night edit · actual ranch photographs</span>
      </div>
    </section>

    <section class="club-ticker" aria-label="Estate highlights">
      <div class="club-ticker__track"><span>Pool days</span><b aria-hidden="true">✳</b><span>Ranch nights</span><b aria-hidden="true">✳</b><span>Five private acres</span><b aria-hidden="true">✳</b><span>Your people</span><b aria-hidden="true">✳</b><span>Zero shared spaces</span><b aria-hidden="true">✳</b></div>
    </section>

    <section class="club-arrival club-container" id="choose">
      <div class="club-section-heading reveal"><p class="eyebrow">Make it your weekend</p><h2>Big plans.<br /><em>Your kind of place.</em></h2></div>
      <div class="club-arrival__paths">
        <a class="club-arrival-card reveal" href="/book-direct.html#availability"><span class="club-index">01 / The getaway</span><h3>Just us.<br />All of this.</h3><p>Choose your dates. Bring your people. Keep the whole estate.</p><span class="club-card-link">Check stay dates ${arrow}</span></a>
        <a class="club-arrival-card reveal" href="/weddings.html#inquire"><span class="club-index">02 / The occasion</span><h3>A reason<br />to gather.</h3><p>Wedding weekends, birthdays, anniversaries, and the big moments.</p><span class="club-card-link">Plan your event ${arrow}</span></a>
        <a class="club-arrival-card reveal" href="/festival-weekends.html"><span class="club-index">03 / The desert season</span><h3>Festival on.<br />Ranch reset.</h3><p>A private home base for your Coachella or Stagecoach weekend.</p><span class="club-card-link">Explore festival stays ${arrow}</span></a>
      </div>
      <p class="club-booking-note">The availability calendar is for lodging. Events require separate approval and pricing.</p>
    </section>

    <section class="club-moods" id="experiences" aria-labelledby="mood-heading">
      <div class="club-container">
        <div class="club-moods__heading reveal"><div class="club-section-heading"><p class="eyebrow">One ranch. So many moods.</p><h2 id="mood-heading">Pick your <em>pace.</em></h2></div><p>Some came to play. Some came to do absolutely nothing. There’s room for both.</p></div>
        <div class="club-mood-tabs" role="tablist" aria-label="Explore ranch experiences">
          <button id="mood-tab-pool" class="is-active" type="button" role="tab" aria-selected="true" aria-controls="mood-panel" tabindex="0" data-mood="pool"><span aria-hidden="true">01</span> Pool days</button>
          <button id="mood-tab-play" type="button" role="tab" aria-selected="false" aria-controls="mood-panel" tabindex="-1" data-mood="play"><span aria-hidden="true">02</span> Play time</button>
          <button id="mood-tab-slow" type="button" role="tab" aria-selected="false" aria-controls="mood-panel" tabindex="-1" data-mood="slow"><span aria-hidden="true">03</span> Slow down</button>
          <button id="mood-tab-night" type="button" role="tab" aria-selected="false" aria-controls="mood-panel" tabindex="-1" data-mood="night"><span aria-hidden="true">04</span> Ranch nights</button>
        </div>
        <div class="club-mood-panel" id="mood-panel" role="tabpanel" aria-labelledby="mood-tab-pool" tabindex="0">
          <figure class="club-mood-photo"><img data-mood-image src="${gallery}/pool-coral-parasols.jpeg" alt="The Sunset Club Ranch pool with coral parasols" loading="lazy" decoding="async" /><figcaption data-mood-caption>Pool & spa · part of your stay</figcaption></figure>
          <div class="club-mood-story"><span class="club-mood-number" aria-hidden="true" data-mood-number>01</span><p class="eyebrow" data-mood-kicker>Out-of-office energy</p><h3 data-mood-title>Pool days.<br /><em>No agenda.</em></h3><p data-mood-copy>Coral parasols, cabana shade, a heated pool and spa, and a 158-inch outdoor screen. Stay out a little longer.</p><a class="club-inline-link" data-mood-link href="/stay.html#current-upgrades"><span data-mood-link-text>Explore the pool & amenities</span> ${arrow}</a></div>
        </div>
        <p class="club-moods__hint">Tap a mood. Picture your weekend.</p>
      </div>
    </section>

    <section class="club-film club-container">
      <div class="club-section-heading reveal"><p class="eyebrow">Little moments. Real ranch.</p><h2>Room to roam.<br /><em>Space to reset.</em></h2><p>A few quiet moments from the actual grounds and inside the sauna. Palms overhead. Warm wood. Your own kind of pause.</p><a class="club-inline-link" href="/stay.html">Get to know the estate ${arrow}</a></div>
      <div class="club-film__frame club-film__moments reveal">
        <figure class="club-snippet" data-property-snippet>
          <div class="club-snippet__scene"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/106775517/YraATjVDujGlgSyc.webp" alt="The real ranch lawn, palms, blue sky and mountain backdrop" width="540" height="960" loading="lazy" decoding="async" /><video id="grounds-snippet" data-src="https://files.manuscdn.com/user_upload_by_module/session_file/106775517/zVaduTFbiZAadCau.mp4" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video></div>
          <figcaption><strong>A little room to roam.</strong><small>Actual grounds · silent 5-second edit</small></figcaption>
          <button type="button" data-snippet-control aria-controls="grounds-snippet" aria-label="Play or pause the ranch grounds clip" aria-pressed="false">Play clip</button><p data-snippet-status role="status" hidden></p>
        </figure>
        <figure class="club-snippet" data-property-snippet>
          <div class="club-snippet__scene"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/106775517/hYamglTZvkieaiaE.webp" alt="Wood walls and temperature gauges inside the ranch’s installed sauna" width="540" height="960" loading="lazy" decoding="async" /><video id="sauna-snippet" data-src="https://files.manuscdn.com/user_upload_by_module/session_file/106775517/lCVGDSYgPRvmsYPN.mp4" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video></div>
          <figcaption><strong>A slower kind of good.</strong><small>Inside the sauna · available now</small></figcaption>
          <button type="button" data-snippet-control aria-controls="sauna-snippet" aria-label="Play or pause the sauna detail clip" aria-pressed="false">Play clip</button><p data-snippet-status role="status" hidden></p>
        </figure>
      </div>
    </section>

    <section class="club-homes club-container" id="story">
      <div class="club-section-heading reveal"><p class="eyebrow">Together, with room to yourself</p><h2>One estate.<br /><em>Three places to land.</em></h2><p>Nine bedrooms across the Main House, Guest House 1, and Guest House 2. Shared moments outside. Your own corner when the day winds down.</p></div>
      <div class="club-homes__collage reveal">
        <figure class="club-homes__main">${picture(`${gallery}/fireplace-wall.jpg`, 'The Main House living room with the linear fireplace, current wood flooring, and television')}<figcaption>The social heart</figcaption></figure>
        <figure class="club-homes__bedroom">${picture(`${gallery}/bedroom-queen.jpeg`, 'A guest bedroom at Sunset Club Ranch')}<figcaption>Your quiet corner</figcaption></figure>
        <div class="club-homes__fact"><strong>3<span>homes</span></strong><p>One private<br />home base.</p></div>
      </div>
      <a class="club-inline-link" href="/stay.html">See the spaces ${arrow}</a>
    </section>

    <section class="club-night">
      ${picture(`${gallery}/media-wall-night.jpeg`, 'The real Sunset Club Ranch pool and outdoor screen after sunset', 'club-night__image')}
      <div class="club-night__shade"></div>
      <div class="club-night__copy club-container reveal"><p class="eyebrow eyebrow--light">Same ranch. New mood.</p><h2>Stay for<br /><em>the afterglow.</em></h2><p>Long dinners. One more round. The screen by the pool. When the desert cools down, the best part of the weekend might be just beginning.</p><a class="button button--sunset" href="/after-dark.html">Explore After Dark ${arrow}</a><small>Festival-week programming and any services are arranged by inquiry, subject to approval.</small></div>
    </section>

    <section class="club-next club-container">
      <div class="club-next__now reveal"><p class="eyebrow">Spa Sanctuary / Available now</p><h2>A slower<br /><em>kind of good.</em></h2><p>The six-person sauna is ready for your stay. The next Spa Sanctuary chapter is taking shape—with a cold plunge, Bali-style shower, and more spaces to unwind in the plans.</p><a class="club-inline-link" href="/vision-2027.html">See what’s now & what’s next ${arrow}</a><p class="club-next__note">Planned additions are not currently included amenities.</p></div>
      <figure class="club-next__photo reveal">${picture('/media/current-upgrades/sauna-installed.webp', 'The installed six-person sauna at Sunset Club Ranch')}<figcaption>Six-person sauna · available now</figcaption></figure>
    </section>

    <div class="club-overview">${estateOverview()}</div>

    <section class="club-social club-container">
      <div class="club-social__intro reveal"><p class="eyebrow">The ranch never stands still</p><h2>Follow the<br /><em>next chapter.</em></h2><p>New corners. Fresh moments. A little ranch personality. Find us at @sunsetclubranch.</p><a class="button button--sunset" href="https://www.instagram.com/sunsetclubranch/" target="_blank" rel="noopener noreferrer">Meet us on Instagram ${arrow}</a></div>
      <div class="club-social__photos reveal">
        <button type="button" data-lightbox="${gallery}/pool-coral-parasols.jpeg" aria-label="Open the ranch pool photograph">${picture(`${gallery}/pool-coral-parasols.jpeg`, 'Coral parasols and blue pool water at the real ranch')}<span>Pool days</span></button>
        <button type="button" data-lightbox="${gallery}/mini-golf-at-dusk.jpg" aria-label="Open the mini-golf lawn photograph">${picture(`${gallery}/mini-golf-at-dusk.jpg`, 'The mini-golf lawn and palms at sunset')}<span>Desert glow</span></button>
        <button type="button" data-lightbox="${gallery}/outdoor-kitchen-pizza-oven.jpeg" aria-label="Open the outdoor kitchen photograph">${picture(`${gallery}/outdoor-kitchen-pizza-oven.jpeg`, 'The ranch outdoor kitchen and pizza oven')}<span>One more slice</span></button>
      </div>
    </section>

    <section class="club-last-call"><p class="eyebrow eyebrow--light">Your people. Your private ranch.</p><h2>Make it a<br /><em>Sunset weekend.</em></h2><a class="button" href="/book-direct.html#availability">Find your dates ${arrow}</a><a class="club-inline-link" href="/weddings.html#inquire">Planning something bigger? ${arrow}</a></section>
    ${inquirySection('Private stay')}
  </main>`
}
