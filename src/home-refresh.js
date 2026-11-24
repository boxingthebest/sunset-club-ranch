const gallery = '/media/airbnb-gallery'
const arrow = '<span aria-hidden="true">↗</span>'

export function creatorHome({ picture, estateOverview, stirrupWelcome }) {
  return `
  <main id="main" class="creator-home creator-home--focused">
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
          <div class="club-hero__actions"><a class="button button--sunset" href="/book-direct.html#availability">Check availability ${arrow}</a><a class="club-inline-link" href="#story">Explore the estate ${arrow}</a></div>
          <a class="club-scroll" href="#story"><span aria-hidden="true">↓</span> See your home for the weekend</a>
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

    <section class="club-homes club-container" id="story" aria-labelledby="homes-heading">
      <div class="club-homes__heading reveal"><div class="club-section-heading"><p class="eyebrow">Come inside. Make yourself at home.</p><h2 id="homes-heading">One estate.<br /><em>Three places to land.</em></h2></div><a class="button button--sunset" href="/stay.html#photos">View photos ${arrow}</a></div>
      <dl class="club-estate-facts" aria-label="Private estate at a glance"><div><dt>Homes</dt><dd>3</dd></div><div><dt>Bedrooms</dt><dd>9</dd></div><div><dt>Bathrooms</dt><dd>6</dd></div><div><dt>Private acres</dt><dd>5</dd></div></dl>
      <div class="club-homes__collage reveal">
        <figure class="club-homes__main"><button type="button" data-lightbox="${gallery}/fireplace-wall.jpg" data-alt="The Main House living room at Sunset Club Ranch" aria-label="Enlarge the Main House living room photograph">${picture(`${gallery}/fireplace-wall.jpg`, 'The Main House living room with the linear fireplace, current wood flooring, and television')}</button><figcaption>The social heart</figcaption></figure>
        <figure class="club-homes__bedroom"><button type="button" data-lightbox="${gallery}/bedroom-queen.jpeg" data-alt="A guest bedroom at Sunset Club Ranch" aria-label="Enlarge the guest bedroom photograph">${picture(`${gallery}/bedroom-queen.jpeg`, 'A guest bedroom at Sunset Club Ranch')}</button><figcaption>Your quiet corner</figcaption></figure>
        <div class="club-homes__rooms" aria-label="The three homes"><div><h3>Main House</h3><p>4 bedrooms · 3 bathrooms</p></div><div><h3>Guest House 1</h3><p>2 bedrooms · 2 bathrooms</p></div><div><h3>Guest House 2</h3><p>3 bedrooms · 1 bathroom</p></div><a class="club-inline-link" href="/stay.html#explore-estate">See the full layout ${arrow}</a></div>
      </div>
      <p class="club-homes__summary">Shared moments outside. Your own corner when the day winds down. All three homes are part of one private estate stay.</p>
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
        <div class="club-film club-moments">
          <div class="club-moments__intro"><p class="eyebrow">Little moments. Real ranch.</p><h3>Room to roam.<br /><em>Space to reset.</em></h3><p>A few quiet moments from the actual grounds and inside the sauna. Both clips are silent.</p><a class="club-inline-link" href="/vision-2027.html">Spa Sanctuary: now & next ${arrow}</a><p class="club-moments__note">Sauna available now. Cold plunge, Bali-style shower, and expanded wellness courtyard are planned, not included amenities.</p></div>
          <div class="club-film__frame club-film__moments">
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
        </div>
      </div>
    </section>

    <div class="club-overview">${estateOverview({ compact: true })}</div>

    <section class="club-arrival club-arrival--compact club-container" id="choose" aria-labelledby="choose-heading">
      <div class="club-section-heading reveal"><p class="eyebrow">Make it your weekend</p><h2 id="choose-heading">Your people.<br /><em>Your occasion.</em></h2></div>
      <div class="club-arrival__paths">
        <a class="club-arrival-card reveal" href="/book-direct.html#availability"><span class="club-index">01 / Stay</span><h3>The whole estate.</h3><p>A family escape or a friends’ weekend. All three homes, entirely yours.</p><span class="club-card-link">Check stay dates ${arrow}</span></a>
        <a class="club-arrival-card reveal" href="/weddings.html#inquire"><span class="club-index">02 / Celebrate</span><h3>A reason to gather.</h3><p>Weddings, birthdays, anniversaries, and your biggest moments.</p><span class="club-card-link">Plan your event ${arrow}</span></a>
        <a class="club-arrival-card reveal" href="/festival-weekends.html"><span class="club-index">03 / Festival</span><h3>Festival on. Ranch reset.</h3><p>Your private home base for Coachella or Stagecoach weekends.</p><span class="club-card-link">Explore festival stays ${arrow}</span></a>
      </div>
      <p class="club-booking-note">The calendar shows lodging availability. Events require separate approval and pricing.</p>
    </section>

    <section class="club-last-call"><p class="eyebrow eyebrow--light">Your people. Your private ranch.</p><h2>Make it a<br /><em>Sunset weekend.</em></h2><a class="button" href="/book-direct.html#availability">Check availability ${arrow}</a><div class="club-questions" id="inquire"><p>Questions or planning something special?</p><a class="club-inline-link" href="/stay.html#inquire">Ask a stay question ${arrow}</a><a class="club-inline-link" href="/weddings.html#inquire">Plan a celebration ${arrow}</a></div></section>
  </main>`
}
