import './style.css'

const IMG = 'https://a0.muscache.com/im/pictures/miso/Hosting-699544865688282514/original/'
const VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/106775517/YGj9Eg9WVVEhpJed4ijK2D/sunset-ranch-drone_5a2dd348.mp4'

// Real property photos
const heroImages = {
  poolNight: 'https://d2xsxph8kpxj0f.cloudfront.net/106775517/YGj9Eg9WVVEhpJed4ijK2D/pool-aerial-clean_f4f923b2.png',
  desertSunset: `${IMG}17e7afd7-b9b7-44c5-bc61-389cb62c940b.jpeg?im_w=1200`,
  interiorLiving: `${IMG}1d1674f5-0083-4a79-956f-e929bc9c2033.jpeg?im_w=1200`,
  outdoorDining: `${IMG}07695109-c773-4743-b458-b6397b49920f.jpeg?im_w=1200`,
  aerialEstate: `${IMG}04b2e43b-d83e-4716-815c-31428524c6a3.jpeg?im_w=1200`,
}

const images = {
  hero: `${IMG}2a843755-f5b6-4081-8748-722fa22a85a5.jpeg?im_w=1200`,
  aerial: `${IMG}04b2e43b-d83e-4716-815c-31428524c6a3.jpeg?im_w=1200`,
  pool: `${IMG}2a843755-f5b6-4081-8748-722fa22a85a5.jpeg?im_w=1200`,
  outdoor: `${IMG}07695109-c773-4743-b458-b6397b49920f.jpeg?im_w=1200`,
  bar: `${IMG}0ba8fccf-f878-4b20-97fe-1733ced3bfcb.jpeg?im_w=1200`,
  games: `${IMG}04966bf5-eea6-418b-9df9-4a315cff132a.jpeg?im_w=1200`,
  dining: `${IMG}01c2fdbb-0a8f-4573-90d1-6b6221f44713.jpeg?im_w=1200`,
  bedroom1: `${IMG}0431cbc7-194b-4610-b283-d0c63749b9fb.jpeg?im_w=1200`,
  bedroom2: `${IMG}09ca66ba-c6dc-48db-a14b-e1bf84ab3dd1.jpeg?im_w=1200`,
  kitchen: `${IMG}0a521cf8-484b-442f-aab5-e4d271a03ff4.jpeg?im_w=1200`,
  fireplace: `${IMG}0c1cdc17-e8c2-40ae-a2f1-aee0164c5dc6.jpeg?im_w=1200`,
  bunkroom: `${IMG}11afecf7-fb42-48e6-abbd-6b01585a79a8.jpeg?im_w=1200`,
  spa: `${IMG}1308c845-c085-4819-8749-c7d4a8b1718a.jpeg?im_w=1200`,
  field: `${IMG}16b2cefa-47ac-4bd7-8fff-0b494476b724.jpeg?im_w=1200`,
  sunset: `${IMG}17e7afd7-b9b7-44c5-bc61-389cb62c940b.jpeg?im_w=1200`,
  entrance: `${IMG}183bd421-b276-4e83-bf0c-67d87ec3dc8e.jpeg?im_w=1200`,
  lounge: `${IMG}1d1674f5-0083-4a79-956f-e929bc9c2033.jpeg?im_w=1200`,
  poolDay: `${IMG}2055362e-91a4-415e-b7af-3845dd1bb2a5.jpeg?im_w=1200`,
  overview: `${IMG}226ded9d-3457-43e9-a84f-7334897e169e.jpeg?im_w=1200`,
  patio: `${IMG}2a5d59f3-3ea0-47a8-be03-cf64f525dc53.jpeg?im_w=1200`,
  nightBar: `${IMG}2c54d87e-b546-4468-b6aa-850943d318f6.jpeg?im_w=1200`,
  greenField: `${IMG}2dedd6f3-975e-49f6-a873-3ac6bb792767.jpeg?im_w=1200`,
  twilight: `${IMG}2ee8d8c2-028b-4046-a2e1-f273fa80ddea.jpeg?im_w=1200`,
}

const galleryImages = [
  images.overview, images.pool, images.outdoor, images.nightBar,
  images.games, images.dining, images.bedroom1, images.bedroom2,
  images.kitchen, images.fireplace, images.bunkroom, images.spa,
  images.field, images.lounge, images.poolDay, images.patio,
  images.greenField, images.twilight, images.entrance, images.bar,
  images.aerial, images.sunset
]

const reviews = [
  {
    text: "This house was amazing! Matthew is the man! Super amazing host and the property is something out of the movies. Recommend to everyone!",
    name: "Grant",
    event: "Group Trip",
    stars: 5
  },
  {
    text: "Loved our stay at Sunset Club Ranch! Tons of outdoor space with three separate spaces for our families and a fantastic pool, all tucked behind private gates. The pool area was a highlight. If you're looking for a group-friendly spot, this is it.",
    name: "Benjamin",
    event: "Stayed with Kids · Minnesota",
    stars: 5
  },
  {
    text: "The property was stunning and comfortable for a larger group. Matthew was incredibly responsive and helpful during our stay!",
    name: "Madeline",
    event: "Group Trip · Los Angeles",
    stars: 5
  },
  {
    text: "Great stay. Highly recommend for a large group. In our case, a golf trip. Property in great shape and as described. Matthew was very responsive and helpful. Would stay at this property again.",
    name: "Sam",
    event: "Group Trip · Los Angeles",
    stars: 5
  },
  {
    text: "Fantastic place! Highly recommend for a large group.",
    name: "Chris",
    event: "Group Trip · Utah",
    stars: 5
  }
]

// Logo HTML component — reusable
const logoHTML = (size = 'nav') => `
  <div class="logo-container ${size === 'hero' ? 'hero-logo' : 'nav-logo'}">
    <div class="logo-main">Sunset Club</div>
    <div class="logo-ranch-row">
      <div class="logo-line logo-line-left"></div>
      <div class="logo-ranch">Ranch</div>
      <div class="logo-line logo-line-right"></div>
    </div>
    ${size === 'hero' ? '<div class="logo-tagline">Private Desert Estate · Coachella Valley</div>' : ''}
  </div>
`

document.querySelector('#app').innerHTML = `
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="#">${logoHTML('nav')}</a>
    <div class="hidden md:flex items-center gap-8">
      <a href="#estate" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">The Estate</a>
      <a href="#homes" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Homes</a>
      <a href="#amenities" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Amenities</a>
      <a href="#gallery" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Gallery</a>
      <a href="#events" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Events</a>
      <a href="#reviews" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Reviews</a>
      <a href="#contact" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">Contact</a>
      <a href="tel:+17608000416" class="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors font-[family-name:var(--font-accent)] font-light">760-800-0416</a>
      <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="bg-[#c9943e] text-[#110e0a] px-6 py-2.5 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow rounded-sm font-[family-name:var(--font-accent)]">Book Now</a>
    </div>
    <button id="mobile-toggle" class="md:hidden text-white"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>
  </div>
</nav>

<div id="mobile-menu" class="mobile-menu fixed inset-0 z-50 bg-[#110e0a]/98 flex flex-col items-center justify-center gap-8">
  <button id="mobile-close" class="absolute top-6 right-6 text-white"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
  ${logoHTML('nav')}
  <a href="#estate" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">The Estate</a>
  <a href="#homes" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Homes</a>
  <a href="#amenities" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Amenities</a>
  <a href="#gallery" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Gallery</a>
  <a href="#events" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Events</a>
  <a href="#reviews" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Reviews</a>
  <a href="#contact" class="mobile-link text-white text-xl font-[family-name:var(--font-accent)] font-light tracking-[0.2em] uppercase">Contact</a>
  <a href="tel:+17608000416" class="text-[#c9943e] text-lg font-[family-name:var(--font-accent)] font-light tracking-[0.15em] mt-2">760-800-0416</a>
  <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="bg-[#c9943e] text-[#110e0a] px-8 py-3 text-lg font-semibold tracking-wider uppercase mt-4 font-[family-name:var(--font-accent)]">Book Now</a>
</div>

<!-- ========== HERO ========== -->
<section class="relative h-screen min-h-[700px] flex items-center justify-center">
  <div class="absolute inset-0">
    <img src="${heroImages.poolNight}" alt="Sunset Club Ranch pool aerial view with cabanas and palm trees" class="w-full h-full object-cover" />
    <div class="hero-overlay absolute inset-0"></div>
  </div>
  <div class="relative z-10 text-center px-6 fade-in">
    ${logoHTML('hero')}
    <p class="text-[#f0e6d3]/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mt-10 mb-8 font-[family-name:var(--font-body)] font-light">A private 5-acre desert estate with 3 homes, heated pool & spa, and room for 20+ guests. Steps from Coachella & Stagecoach.</p>
    <p class="text-[#c9943e] text-sm tracking-wider uppercase mb-6 font-[family-name:var(--font-accent)] font-light">Book Direct &mdash; Best Rates Guaranteed &middot; No Platform Fees</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="bg-[#c9943e] text-[#110e0a] px-8 py-3.5 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Book Your Stay</a>
      <a href="#estate" class="border border-white/30 text-white px-8 py-3.5 text-sm font-light tracking-wider uppercase hover:bg-white/10 transition-all font-[family-name:var(--font-accent)]">Explore</a>
    </div>
  </div>
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" opacity="0.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
  </div>
</section>

<!-- ========== MARQUEE ========== -->
<section class="bg-[#110e0a] py-5 overflow-hidden">
  <div class="marquee-track">
    <div class="flex items-center gap-12 px-6 text-[#c9943e]/80 text-sm tracking-[0.25em] uppercase font-[family-name:var(--font-accent)] font-light whitespace-nowrap">
      <span>5 Acres</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>3 Private Homes</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>7 Bedrooms</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>6 Bathrooms</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Sleeps 20+</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Heated Pool & Spa</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Outdoor Kitchen</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Pizza Oven</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Near Coachella</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>5 Acres</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>3 Private Homes</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>7 Bedrooms</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>6 Bathrooms</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Sleeps 20+</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Heated Pool & Spa</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Outdoor Kitchen</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Pizza Oven</span><span class="text-[#c9943e]/30">&#9670;</span>
      <span>Near Coachella</span><span class="text-[#c9943e]/30">&#9670;</span>
    </div>
  </div>
</section>

<!-- ========== THE ESTATE ========== -->
<section id="estate" class="py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div class="fade-in">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">The Estate</p>
        <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight mb-6 italic">Where the Desert<br/>Meets Luxury</h2>
        <div class="gold-divider !justify-start mt-4"></div>
        <p class="text-desert-night/70 text-lg leading-relaxed mb-6 mt-8">Tucked behind the private gates of Trilogy at Polo, Sunset Club Ranch is a sprawling 5-acre compound designed for unforgettable gatherings. Three distinct homes surround a resort-style pool and entertainment area, offering the perfect blend of togetherness and privacy.</p>
        <p class="text-desert-night/70 text-lg leading-relaxed mb-8">Whether you're planning a Coachella weekend, a desert wedding, a corporate retreat, or a multi-family vacation, this is the estate that turns every moment into a memory.</p>
        <div class="grid grid-cols-2 gap-6">
          <div class="border-l-2 border-[#c9943e] pl-4"><p class="text-3xl font-bold text-desert-night font-[family-name:var(--font-display)]">5</p><p class="text-desert-night/60 text-sm uppercase tracking-wider font-[family-name:var(--font-accent)] font-light">Acres</p></div>
          <div class="border-l-2 border-[#c9943e] pl-4"><p class="text-3xl font-bold text-desert-night font-[family-name:var(--font-display)]">3</p><p class="text-desert-night/60 text-sm uppercase tracking-wider font-[family-name:var(--font-accent)] font-light">Private Homes</p></div>
          <div class="border-l-2 border-[#c9943e] pl-4"><p class="text-3xl font-bold text-desert-night font-[family-name:var(--font-display)]">7</p><p class="text-desert-night/60 text-sm uppercase tracking-wider font-[family-name:var(--font-accent)] font-light">Bedrooms</p></div>
          <div class="border-l-2 border-[#c9943e] pl-4"><p class="text-3xl font-bold text-desert-night font-[family-name:var(--font-display)]">20+</p><p class="text-desert-night/60 text-sm uppercase tracking-wider font-[family-name:var(--font-accent)] font-light">Guests</p></div>
        </div>
      </div>
      <div class="relative slide-right">
        <div class="img-zoom rounded-sm overflow-hidden"><img src="${heroImages.aerialEstate}" alt="Sunset Club Ranch aerial view" class="w-full h-[500px] object-cover" /></div>
        <div class="absolute -bottom-6 -left-6 bg-[#110e0a] text-white p-6 max-w-[240px] hidden md:block">
          <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-xs tracking-[0.2em] uppercase mb-1 font-light">Location</p>
          <p class="text-sm leading-relaxed text-[#f0e6d3]/80">Steps from Coachella & Stagecoach Music Festivals</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== DRONE VIDEO SECTION ========== -->
<section class="video-section py-24 md:py-32 bg-[#110e0a] grain-overlay relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="fade-in order-2 md:order-1">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Aerial Tour</p>
        <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-5xl font-medium leading-tight mb-6 italic">See It From Above</h2>
        <div class="gold-divider !justify-start mt-4"></div>
        <p class="text-[#f0e6d3]/60 text-lg leading-relaxed mt-8 mb-4">Five acres of manicured grounds, three private homes, a resort-style pool, and mountain views in every direction. This is what your desert getaway looks like.</p>
        <p class="text-[#c9943e]/80 text-sm tracking-wider mb-8 font-[family-name:var(--font-accent)] font-light">&#9670; 0.8 miles from Empire Polo Club &mdash; 3 minute drive to Coachella & Stagecoach</p>
        <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="inline-block bg-[#c9943e] text-[#110e0a] px-10 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Check Availability</a>
      </div>
      <div class="order-1 md:order-2 scale-up">
        <div class="video-container">
          <video id="drone-video" playsinline preload="auto" autoplay muted loop>
            <source src="${VIDEO_URL}" type="video/mp4" />
          </video>
          <div id="video-play-btn" class="video-play-btn" style="display:none">
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="white" stroke-width="2" opacity="0.8"/>
              <polygon points="32,24 58,40 32,56" fill="white" opacity="0.9"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== POOL PARALLAX ========== -->
<section class="parallax-bg h-[50vh] min-h-[400px] relative" style="background-image: url('${heroImages.poolNight}')">
  <div class="absolute inset-0 bg-[#110e0a]/50 flex items-center justify-center">
    <div class="text-center fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Resort-Style Living</p>
      <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl font-medium italic">Pool. Spa. Paradise.</h2>
    </div>
  </div>
</section>

<!-- ========== HOMES ========== -->
<section id="homes" class="py-24 md:py-32 bg-sand-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Three Distinct Homes</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight italic">Your Private Compound</h2>
      <div class="gold-divider mt-6"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20 fade-in">
      <div class="img-zoom rounded-sm overflow-hidden"><img src="${images.dining}" alt="Main House dining" class="w-full h-[400px] object-cover" /></div>
      <div>
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-xs tracking-[0.3em] uppercase mb-2 font-light">01</p>
        <h3 class="font-[family-name:var(--font-display)] text-3xl text-desert-night mb-4 italic">The Main House</h3>
        <p class="text-desert-night/70 leading-relaxed mb-6">The heart of the estate. Featuring a chef's kitchen, open living area, and direct pool access. Three bedrooms with king beds provide the ultimate comfort.</p>
        <ul class="space-y-2 text-desert-night/60 text-sm">
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Primary Suite — King bed, ensuite, pool access</li>
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 2 — King bed, shared bath</li>
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 3 — King + Queen bed, shared bath</li>
        </ul>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20 fade-in">
      <div class="md:order-2 img-zoom rounded-sm overflow-hidden"><img src="${images.bunkroom}" alt="Bunk House" class="w-full h-[400px] object-cover" /></div>
      <div class="md:order-1">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-xs tracking-[0.3em] uppercase mb-2 font-light">02</p>
        <h3 class="font-[family-name:var(--font-display)] text-3xl text-desert-night mb-4 italic">The Bunk House</h3>
        <p class="text-desert-night/70 leading-relaxed mb-6">Perfect for the crew. Custom-built bunk beds, private patios, and direct pool access make this the ultimate hangout spot for friends and families.</p>
        <ul class="space-y-2 text-desert-night/60 text-sm">
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 4 — 4 bunks + futon, ensuite, patio</li>
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 5 — 4 bunks, ensuite, pool access</li>
        </ul>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-12 items-center fade-in">
      <div class="img-zoom rounded-sm overflow-hidden"><img src="${images.bedroom1}" alt="Barn House bedroom" class="w-full h-[400px] object-cover" /></div>
      <div>
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-xs tracking-[0.3em] uppercase mb-2 font-light">03</p>
        <h3 class="font-[family-name:var(--font-display)] text-3xl text-desert-night mb-4 italic">The Barn House</h3>
        <p class="text-desert-night/70 leading-relaxed mb-6">Rustic charm meets modern comfort. Two spacious bedrooms with a mix of king and queen beds, perfect for families or couples seeking a quieter retreat.</p>
        <ul class="space-y-2 text-desert-night/60 text-sm">
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 6 — King bed, shared bath</li>
          <li class="flex items-center gap-2"><span class="text-[#c9943e]">&#9670;</span> Bedroom 7 — 2 Queens + Single, shared bath</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ========== AMENITIES ========== -->
<section id="amenities" class="py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Entertainment & Relaxation</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight italic">Everything You Need</h2>
      <div class="gold-divider mt-6"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-8 stagger-children">
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.poolDay}" alt="Heated pool and spa" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">Pool & Spa</h3><p class="text-desert-night/60 text-sm leading-relaxed">Custom heated pool with oversized tanning shelf, plus a separate hot tub. Your private oasis under the desert sun.</p></div>
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.nightBar}" alt="Outdoor kitchen and bar" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">Outdoor Kitchen & Bar</h3><p class="text-desert-night/60 text-sm leading-relaxed">Two built-in gas BBQs, pizza oven, outdoor bar, and dining for 20+. The ultimate chef's playground under the stars.</p></div>
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.games}" alt="Games and recreation" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">Games & Recreation</h3><p class="text-desert-night/60 text-sm leading-relaxed">Bocce ball, putting green, shuffleboard, volleyball, ping pong, cornhole, horseshoes, and arcade games.</p></div>
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.fireplace}" alt="Outdoor fireplace" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">Fire & Ambiance</h3><p class="text-desert-night/60 text-sm leading-relaxed">Oversized wood-burning fireplace, fire pit, and string lights throughout. Every evening feels like a celebration.</p></div>
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.greenField}" alt="5 acres of grounds" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">5 Acres of Grounds</h3><p class="text-desert-night/60 text-sm leading-relaxed">Over 3 acres of lush, golf-course quality grass. Room for events, games, or simply soaking in the mountain views.</p></div>
      <div class="group fade-in"><div class="img-zoom rounded-sm overflow-hidden mb-4"><img src="${images.lounge}" alt="Luxury lounge areas" class="w-full h-[280px] object-cover" /></div><h3 class="font-[family-name:var(--font-display)] text-xl text-desert-night mb-2 italic">Luxury Lounging</h3><p class="text-desert-night/60 text-sm leading-relaxed">Multiple outdoor seating areas, pergolas, and shaded retreats. Every corner is designed for comfort and conversation.</p></div>
    </div>
    <div class="text-center mt-16 fade-in">
      <div class="inline-block border border-[#c9943e]/30 px-8 py-4 rounded-sm">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e]/80 text-sm tracking-[0.2em] uppercase font-light">Coming 2026: Pickleball Court · Sand Volleyball · 98&quot; Outdoor Cinema · Koolfog Misting · Resort Cabanas</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== DESERT SUNSET PARALLAX ========== -->
<section class="parallax-bg h-[50vh] min-h-[400px] relative" style="background-image: url('${heroImages.desertSunset}')">
  <div class="absolute inset-0 bg-[#110e0a]/40 flex items-center justify-center">
    <div class="text-center fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Coachella Valley</p>
      <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl font-medium italic">Where the Desert Comes Alive</h2>
    </div>
  </div>
</section>

<!-- ========== GUEST REVIEWS ========== -->
<section id="reviews" class="py-24 md:py-32 bg-sand-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Guest Experiences</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight italic">What People Are Saying</h2>
      <div class="gold-divider mt-6"></div>
    </div>

    <div class="grid md:grid-cols-3 gap-8 stagger-children">
      ${reviews.slice(0, 3).map(r => `
        <div class="review-card fade-in">
          <div class="review-stars mb-4">${'&#9733;'.repeat(r.stars)}</div>
          <p class="text-desert-night/80 leading-relaxed mb-6 text-[15px] relative z-10">${r.text}</p>
          <div class="border-t border-sand-200 pt-4">
            <p class="font-[family-name:var(--font-display)] text-desert-night font-semibold italic">${r.name}</p>
            <p class="text-desert-night/50 text-sm font-[family-name:var(--font-accent)] font-light">${r.event}</p>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto stagger-children">
      ${reviews.slice(3).map(r => `
        <div class="review-card fade-in">
          <div class="review-stars mb-4">${'&#9733;'.repeat(r.stars)}</div>
          <p class="text-desert-night/80 leading-relaxed mb-6 text-[15px] relative z-10">${r.text}</p>
          <div class="border-t border-sand-200 pt-4">
            <p class="font-[family-name:var(--font-display)] text-desert-night font-semibold italic">${r.name}</p>
            <p class="text-desert-night/50 text-sm font-[family-name:var(--font-accent)] font-light">${r.event}</p>
          </div>
        </div>
      `).join('')}
    </div>

  </div>
</section>

<!-- ========== COACHELLA BASECAMP ========== -->
<section class="relative py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0"><img src="${images.sunset}" alt="Desert sunset" class="w-full h-full object-cover" /><div class="absolute inset-0 bg-gradient-to-r from-[#110e0a]/80 to-[#110e0a]/40"></div></div>
  <div class="relative z-10 max-w-7xl mx-auto px-6">
    <div class="max-w-2xl fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Festival Season</p>
      <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-5xl font-medium leading-tight mb-6 italic">Your Coachella<br/>Basecamp</h2>
      <div class="gold-divider !justify-start mt-4"></div>
      <p class="text-[#f0e6d3]/80 text-lg leading-relaxed mb-8 mt-8">Just blocks from the Empire Polo Club — home to Coachella and Stagecoach. Skip the shuttle lines. Walk to the festival. Come home to your private resort.</p>
      <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="inline-block bg-[#c9943e] text-[#110e0a] px-10 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Check Availability</a>
    </div>
  </div>
</section>

<!-- ========== GALLERY ========== -->
<section id="gallery" class="py-24 md:py-32 bg-[#110e0a]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Visual Tour</p>
      <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-5xl font-medium italic">The Experience</h2>
      <div class="gold-divider mt-6"></div>
    </div>
    <div class="gallery-grid fade-in" id="gallery-grid">
      ${galleryImages.slice(0, 12).map((img, i) => `
        <div class="img-zoom cursor-pointer gallery-item ${i === 0 ? 'col-span-2 span-2' : i === 5 ? 'span-2' : ''}" data-index="${i}">
          <img src="${img}" alt="Sunset Club Ranch gallery ${i + 1}" class="w-full h-full object-cover" loading="lazy" />
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ========== EVENTS ========== -->
<section id="events" class="py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div class="fade-in">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Celebrations</p>
        <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight mb-6 italic">Weddings &<br/>Special Events</h2>
        <div class="gold-divider !justify-start mt-4"></div>
        <p class="text-desert-night/70 text-lg leading-relaxed mb-6 mt-8">Imagine exchanging vows under the desert sky on 5 acres of manicured grounds, with mountain views as your backdrop. Sunset Club Ranch is the ultimate venue for intimate weddings, milestone celebrations, and corporate retreats.</p>
        <div class="space-y-4 mb-8">
          <div class="flex items-start gap-3"><span class="text-[#c9943e] mt-1">&#9670;</span><p class="text-desert-night/70"><strong class="text-desert-night">Ceremony & Reception</strong> — Sprawling lawns, string lights, and sunset views</p></div>
          <div class="flex items-start gap-3"><span class="text-[#c9943e] mt-1">&#9670;</span><p class="text-desert-night/70"><strong class="text-desert-night">On-Site Lodging</strong> — Your entire wedding party stays together</p></div>
          <div class="flex items-start gap-3"><span class="text-[#c9943e] mt-1">&#9670;</span><p class="text-desert-night/70"><strong class="text-desert-night">Catering Ready</strong> — Outdoor kitchen, bar, and pizza oven</p></div>
          <div class="flex items-start gap-3"><span class="text-[#c9943e] mt-1">&#9670;</span><p class="text-desert-night/70"><strong class="text-desert-night">Private Chef</strong> — Available upon request</p></div>
        </div>
        <a href="#contact" class="inline-block bg-terracotta text-white px-8 py-3.5 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all font-[family-name:var(--font-accent)]">Inquire About Events</a>
      </div>
      <div class="relative slide-right"><div class="img-zoom rounded-sm overflow-hidden"><img src="${heroImages.outdoorDining}" alt="Outdoor dining event" class="w-full h-[550px] object-cover" /></div></div>
    </div>
  </div>
</section>

<!-- ========== INTERIOR PARALLAX ========== -->
<section class="parallax-bg h-[50vh] min-h-[400px] relative" style="background-image: url('${heroImages.interiorLiving}')">
  <div class="absolute inset-0 bg-[#110e0a]/30 flex items-center justify-center">
    <div class="text-center fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Desert Modern</p>
      <h2 class="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl font-medium italic">Luxury Inside & Out</h2>
    </div>
  </div>
</section>

<!-- ========== CONCIERGE ========== -->
<section class="py-20 bg-sand-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-12 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Concierge</p>
      <h2 class="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-desert-night italic">Premium Add-On Services</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 stagger-children">
      ${[['Private Chef','&#127860;'],['Catering','&#127867;'],['Grocery Pickup','&#128722;'],['Shuttle Service','&#128663;'],['Mobile Massage','&#128134;'],['Pool Heating','&#127754;']].map(([name, icon]) => `<div class="text-center p-6 bg-white rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"><p class="text-3xl mb-3">${icon}</p><p class="text-desert-night text-sm font-medium font-[family-name:var(--font-accent)]">${name}</p></div>`).join('')}
    </div>
  </div>
</section>

<!-- ========== PRICING ========== -->
<section id="pricing" class="py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Rates & Seasons</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight italic">Investment in an<br/>Unforgettable Experience</h2>
      <div class="gold-divider mt-6"></div>
      <p class="text-desert-night/60 text-base max-w-2xl mx-auto mt-6">Pricing varies by season, group size, and event type. Below are starting nightly rates for the full estate &mdash; all 3 homes, pool, spa, and 5 acres included.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
      <div class="fade-in bg-white border border-sand-200 p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-sm">
        <p class="font-[family-name:var(--font-accent)] text-desert-night/50 text-xs tracking-[0.2em] uppercase mb-3 font-light">Off-Season</p>
        <p class="font-[family-name:var(--font-display)] text-3xl text-desert-night italic">From $1,500</p>
        <p class="text-desert-night/50 text-sm mt-1 mb-4">per night</p>
        <div class="gold-divider-simple mb-4"></div>
        <p class="text-desert-night/60 text-sm">June &ndash; September</p>
        <p class="text-desert-night/40 text-xs mt-2">2-night minimum</p>
      </div>
      <div class="fade-in bg-white border border-sand-200 p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-sm">
        <p class="font-[family-name:var(--font-accent)] text-desert-night/50 text-xs tracking-[0.2em] uppercase mb-3 font-light">Peak Season</p>
        <p class="font-[family-name:var(--font-display)] text-3xl text-desert-night italic">From $2,500</p>
        <p class="text-desert-night/50 text-sm mt-1 mb-4">per night</p>
        <div class="gold-divider-simple mb-4"></div>
        <p class="text-desert-night/60 text-sm">October &ndash; May</p>
        <p class="text-desert-night/40 text-xs mt-2">2-night minimum</p>
      </div>
      <div class="fade-in bg-[#110e0a] border border-[#c9943e]/30 p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-[#c9943e] text-[#110e0a] text-[10px] font-bold tracking-wider uppercase px-3 py-1 font-[family-name:var(--font-accent)]">Premium</div>
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e]/70 text-xs tracking-[0.2em] uppercase mb-3 font-light">Festival Weekends</p>
        <p class="font-[family-name:var(--font-display)] text-3xl text-[#f0e6d3] italic">From $15,000</p>
        <p class="text-[#f0e6d3]/50 text-sm mt-1 mb-4">per night</p>
        <div class="w-[35px] h-[0.5px] bg-[#c9943e] mx-auto mb-4"></div>
        <p class="text-[#f0e6d3]/60 text-sm">Coachella &middot; Stagecoach</p>
        <p class="text-[#f0e6d3]/40 text-xs mt-2">3-night minimum</p>
      </div>
      <div class="fade-in bg-white border border-sand-200 p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-sm">
        <p class="font-[family-name:var(--font-accent)] text-desert-night/50 text-xs tracking-[0.2em] uppercase mb-3 font-light">Events & Weddings</p>
        <p class="font-[family-name:var(--font-display)] text-3xl text-desert-night italic">Custom</p>
        <p class="text-desert-night/50 text-sm mt-1 mb-4">quote</p>
        <div class="gold-divider-simple mb-4"></div>
        <p class="text-desert-night/60 text-sm">Weddings &middot; Corporate</p>
        <p class="text-desert-night/40 text-xs mt-2">Contact for details</p>
      </div>
    </div>
    <div class="text-center mt-10 fade-in">
      <p class="text-desert-night/50 text-sm mb-6">Book direct and save up to 15% vs. third-party platforms. All rates include full estate access for up to 20 guests.</p>
      <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="inline-block bg-[#c9943e] text-[#110e0a] px-10 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Check Availability & Book</a>
    </div>
  </div>
</section>

<!-- ========== FAQ ========== -->
<section id="faq" class="py-24 md:py-32 bg-sand-50">
  <div class="max-w-4xl mx-auto px-6">
    <div class="text-center mb-16 fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Common Questions</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight italic">Before You Book</h2>
      <div class="gold-divider mt-6"></div>
    </div>
    <div class="space-y-4 stagger-children" id="faq-list">
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">What is the cancellation policy?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">When you book direct, we offer the most flexible cancellation terms available &mdash; something third-party platforms can&rsquo;t match. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Book direct</a> or call <a href="tel:+17608000416" class="text-[#c9943e] underline hover:brightness-110">760-800-0416</a> to lock in the best terms for your dates.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">Are pets allowed?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Pets are considered on a case-by-case basis. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Book direct</a> and let us know your situation &mdash; we&rsquo;re happy to work with you.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">What are check-in and check-out times?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Check-in is at 4:00 PM and check-out is at 10:00 AM. Need flexibility? Direct bookers get priority for early check-in and late check-out. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Book direct</a> to request.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">How far is the property from Coachella / Empire Polo Club?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Just 0.8 miles &mdash; a 3-minute drive from the Empire Polo Club. No shuttles, no surge pricing, no stress. Festival dates sell out fast. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Secure your dates now</a>.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">Is there parking on-site?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Yes &mdash; private gated parking for 10+ vehicles. No fighting for street spots. The whole estate is yours. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Check availability</a>.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">Can I host a wedding or private event?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Absolutely &mdash; 5 acres of manicured grounds, mountain views, on-site lodging for your entire group, and a full outdoor kitchen. Weddings, corporate retreats, milestone celebrations. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Inquire direct</a> or call <a href="tel:+17608000416" class="text-[#c9943e] underline hover:brightness-110">760-800-0416</a> for a custom quote.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">Is the pool heated year-round?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Year-round. Heated pool and spa maintained at 82&ndash;86&deg;F. It&rsquo;s your private resort. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110">Book your stay</a>.</p>
        </div>
      </div>
      <div class="faq-item fade-in bg-white border border-sand-200 rounded-sm overflow-hidden">
        <button class="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between gap-4">
          <span class="font-[family-name:var(--font-display)] text-lg text-desert-night italic">Why should I book direct instead of Airbnb?</span>
          <span class="faq-icon text-[#c9943e] text-2xl transition-transform duration-300">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 hidden">
          <p class="text-desert-night/70 text-sm leading-relaxed">Save up to 15% &mdash; no platform fees, no middleman. You get the best rate, the most flexible cancellation, direct communication with our team, and priority access to premium dates. Same estate, better price, better experience. <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-[#c9943e] underline hover:brightness-110 font-semibold">Book direct now</a>.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== URGENCY BANNER ========== -->
<section class="py-12 bg-[#110e0a] grain-overlay relative overflow-hidden">
  <div class="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in">
    <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-xs tracking-[0.3em] uppercase mb-3 font-light">Limited Availability</p>
    <h3 class="font-[family-name:var(--font-display)] text-[#f0e6d3] text-2xl md:text-3xl italic mb-4">Premium Dates Book 6&ndash;12 Months in Advance</h3>
    <p class="text-[#f0e6d3]/60 text-sm mb-6 max-w-xl mx-auto">Coachella 2027 &middot; Stagecoach 2027 &middot; New Year's Eve &middot; Holiday Weekends &mdash; don't wait until it's too late.</p>
    <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="inline-block bg-[#c9943e] text-[#110e0a] px-10 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Secure Your Dates Now</a>
  </div>
</section>

<!-- ========== BOOK NOW (Direct Booking CTA) ========== -->
<section id="book" class="py-24 md:py-32 bg-[#110e0a]">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <div class="fade-in">
      <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Direct Booking</p>
      <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#f0e6d3] leading-tight mb-6 italic">Book Your Stay</h2>
      <div class="gold-divider mt-4 mb-8"></div>
      <p class="text-[#f0e6d3]/70 text-lg leading-relaxed mb-4">Check availability and book directly — best rates guaranteed, no platform fees.</p>
      <p class="text-[#f0e6d3]/50 text-sm leading-relaxed mb-10">Save up to 15% compared to third-party platforms. Flexible cancellation on most dates.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="bg-[#c9943e] text-[#110e0a] px-12 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Check Availability & Book</a>
        <a href="tel:+17608000416" class="border border-[#f0e6d3]/30 text-[#f0e6d3] px-10 py-4 text-sm font-light tracking-wider uppercase hover:bg-white/10 transition-all font-[family-name:var(--font-accent)]">Call 760-800-0416</a>
      </div>
    </div>
  </div>
</section>

<!-- ========== CONTACT ========== -->
<section id="contact" class="py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-16">
      <div class="fade-in">
        <p class="font-[family-name:var(--font-accent)] text-[#c9943e] text-sm tracking-[0.3em] uppercase mb-4 font-light">Get In Touch</p>
        <h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-desert-night leading-tight mb-6 italic">Start Planning<br/>Your Stay</h2>
        <div class="gold-divider !justify-start mt-4"></div>
        <p class="text-desert-night/70 text-lg leading-relaxed mb-8 mt-8">Whether it's a festival weekend, a wedding, or a family reunion — we'd love to host you. Reach out for availability, pricing, or custom event planning.</p>
        <div class="space-y-4 mb-8">
          <div class="flex items-center gap-3"><span class="text-[#c9943e]">&#9670;</span><a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="text-desert-night hover:text-[#c9943e] transition-colors font-medium">Book Here</a></div>
          <div class="flex items-center gap-3"><span class="text-[#c9943e]">&#9670;</span><a href="https://instagram.com/sunsetclubranch" target="_blank" class="text-desert-night hover:text-[#c9943e] transition-colors font-medium">@sunsetclubranch</a></div>
          <div class="flex items-center gap-3"><span class="text-[#c9943e]">&#9670;</span><a href="tel:+17608000416" class="text-desert-night hover:text-[#c9943e] transition-colors font-medium">760-800-0416</a></div>
          <div class="flex items-center gap-3"><span class="text-[#c9943e]">&#9670;</span><a href="mailto:team@apekrentals.com" class="text-desert-night hover:text-[#c9943e] transition-colors font-medium">team@apekrentals.com</a></div>
          <div class="flex items-center gap-3"><span class="text-[#c9943e]">&#9670;</span><p class="text-desert-night/70">Indio, California 92201</p></div>
        </div>
        <div class="img-zoom rounded-sm overflow-hidden"><img src="${images.twilight}" alt="Sunset Club Ranch at twilight" class="w-full h-[300px] object-cover" /></div>
      </div>
      <div class="fade-in">
        <form id="inquiry-form" class="bg-sand-50 p-8 md:p-10 rounded-sm">
          <h3 class="font-[family-name:var(--font-display)] text-2xl text-desert-night mb-6 italic">Booking Inquiry</h3>
          <div class="space-y-5">
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Full Name *</label><input type="text" name="name" required class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Email *</label><input type="email" name="email" required class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Phone</label><input type="tel" name="phone" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
            <div class="grid grid-cols-2 gap-4">
              <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Check-in</label><input type="date" name="checkin" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
              <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Check-out</label><input type="date" name="checkout" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
            </div>
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Event Type</label><select name="event_type" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300"><option value="">Select...</option><option value="vacation">Vacation / Group Getaway</option><option value="coachella">Coachella / Stagecoach</option><option value="wedding">Wedding / Engagement</option><option value="corporate">Corporate Retreat</option><option value="family">Family Reunion</option><option value="other">Other</option></select></div>
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Number of Guests</label><input type="number" name="guests" min="1" max="30" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm transition-all duration-300" /></div>
            <div><label class="block text-desert-night/70 text-sm mb-1.5 font-[family-name:var(--font-accent)] font-light">Message</label><textarea name="message" rows="4" class="w-full px-4 py-3 border border-sand-200 bg-white text-desert-night rounded-sm resize-none transition-all duration-300"></textarea></div>
            <button type="submit" class="w-full bg-[#c9943e] text-[#110e0a] py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all pulse-glow font-[family-name:var(--font-accent)]">Send Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="bg-[#110e0a] py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col items-center mb-12">
      ${logoHTML('nav')}
      <div class="gold-divider mt-6 mb-8"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-12 mb-12">
      <div><p class="text-[#f0e6d3]/50 text-sm leading-relaxed">A private 5-acre luxury desert estate in Indio, California. Steps from Coachella & Stagecoach.</p></div>
      <div><h4 class="text-[#c9943e] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-accent)] font-light">Quick Links</h4><div class="space-y-2"><a href="#estate" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">The Estate</a><a href="#homes" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Homes</a><a href="#amenities" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Amenities</a><a href="#gallery" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Gallery</a><a href="#events" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Events</a><a href="#reviews" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Reviews</a><a href="#contact" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Contact</a></div></div>
      <div><h4 class="text-[#c9943e] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-accent)] font-light">Connect</h4><div class="space-y-2"><a href="https://www.apekrentals.com/rentals/sunset-club-ranch-3-homes-pool-near-festivals/" target="_blank" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Book Here</a><a href="tel:+17608000416" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">760-800-0416</a><a href="https://instagram.com/sunsetclubranch" target="_blank" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">Instagram</a><a href="mailto:team@apekrentals.com" class="block text-[#f0e6d3]/50 hover:text-white text-sm transition-colors">team@apekrentals.com</a></div></div>
    </div>
    <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-[#f0e6d3]/30 text-xs">&copy; 2026 Sunset Club Ranch. All rights reserved.</p>
      <p class="text-[#f0e6d3]/30 text-xs">Indio, California 92201</p>
    </div>
  </div>
</footer>

<!-- ========== LIGHTBOX ========== -->
<div id="lightbox" class="lightbox">
  <img id="lightbox-img" src="" alt="Gallery full view" />
  <button id="lightbox-close" class="absolute top-6 right-6 text-white/80 hover:text-white"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
  <button id="lightbox-prev" class="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
  <button id="lightbox-next" class="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>
</div>
`

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-up').forEach(el => observer.observe(el))

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar')
let lastScroll = 0
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  if (currentScroll > 100) {
    navbar.style.backgroundColor = 'rgba(17,14,10,0.9)'
    navbar.classList.add('nav-blur', 'shadow-lg')
  } else {
    navbar.style.backgroundColor = 'transparent'
    navbar.classList.remove('nav-blur', 'shadow-lg')
  }
  lastScroll = currentScroll
})

// ============================================
// MOBILE MENU
// ============================================
const mobileToggle = document.getElementById('mobile-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const mobileClose = document.getElementById('mobile-close')
mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'))
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'))
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'))
})

// ============================================
// VIDEO PLAYER
// ============================================
const video = document.getElementById('drone-video')
const playBtn = document.getElementById('video-play-btn')

// Video autoplays muted, click to unmute/mute
video.addEventListener('click', () => {
  video.muted = !video.muted
})

// ============================================
// LIGHTBOX
// ============================================
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightbox-img')
let currentLightboxIndex = 0

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    currentLightboxIndex = parseInt(item.dataset.index)
    lightboxImg.src = galleryImages[currentLightboxIndex]
    lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
  })
})

document.getElementById('lightbox-close').addEventListener('click', (e) => {
  e.stopPropagation()
  lightbox.classList.remove('active')
  document.body.style.overflow = ''
})

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active')
  document.body.style.overflow = ''
})

document.getElementById('lightbox-prev').addEventListener('click', (e) => {
  e.stopPropagation()
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length
  lightboxImg.src = galleryImages[currentLightboxIndex]
})

document.getElementById('lightbox-next').addEventListener('click', (e) => {
  e.stopPropagation()
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length
  lightboxImg.src = galleryImages[currentLightboxIndex]
})

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return
  if (e.key === 'Escape') { lightbox.classList.remove('active'); document.body.style.overflow = '' }
  if (e.key === 'ArrowLeft') { currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length; lightboxImg.src = galleryImages[currentLightboxIndex] }
  if (e.key === 'ArrowRight') { currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length; lightboxImg.src = galleryImages[currentLightboxIndex] }
})

// ============================================
// FORM SUBMISSION
// ============================================
document.getElementById('inquiry-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  const subject = encodeURIComponent(`Booking Inquiry - ${data.event_type || 'General'} - ${data.name}`)
  const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCheck-in: ${data.checkin || 'Flexible'}\nCheck-out: ${data.checkout || 'Flexible'}\nEvent Type: ${data.event_type || 'N/A'}\nGuests: ${data.guests || 'N/A'}\nMessage: ${data.message || 'N/A'}`)
  window.location.href = `mailto:team@apekrentals.com?subject=${subject}&body=${body}`
  const btn = e.target.querySelector('button[type="submit"]')
  btn.textContent = 'Inquiry Sent!'
  btn.style.backgroundColor = '#45735a'
  btn.style.color = '#fff'
  setTimeout(() => {
    btn.textContent = 'Send Inquiry'
    btn.style.backgroundColor = '#c9943e'
    btn.style.color = '#110e0a'
    e.target.reset()
  }, 3000)
})

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item')
    const answer = item.querySelector('.faq-answer')
    const icon = item.querySelector('.faq-icon')
    const isOpen = !answer.classList.contains('hidden')
    // Close all others
    document.querySelectorAll('.faq-item').forEach(other => {
      other.querySelector('.faq-answer').classList.add('hidden')
      other.querySelector('.faq-icon').textContent = '+'
      other.querySelector('.faq-icon').style.transform = 'rotate(0deg)'
    })
    if (!isOpen) {
      answer.classList.remove('hidden')
      icon.textContent = '\u2212'
      icon.style.transform = 'rotate(180deg)'
    }
  })
})

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
