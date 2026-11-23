# Sunset Club Ranch Website

A custom multi-page Vite site for Sunset Club Ranch, a private five-acre estate in Indio, California.

## Routes

| Route | Purpose |
|---|---|
| `/` | Editorial homepage and primary inquiry path |
| `/stay.html` | Homes, current amenities, gallery, and recent additions |
| `/book-direct.html#availability` | Hostaway lodging calendar and Anneta Group checkout |
| `/weddings.html` | Weddings, birthdays, and celebration inquiries |
| `/corporate.html` | Corporate retreat inquiries |
| `/after-dark.html` | Clearly disclosed After Dark 2027 program concept |
| `/vision-2027.html` | Clearly disclosed barn, wellness, and landscape concepts |

## Local development

```bash
nvm use
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Media

Published, optimized website media lives in `public/media/`:

- `estate/` contains current Sunset Club Ranch photography.
- `october-2026/` contains web-optimized owner-supplied aerial, renovated dining room, recreation courts, front entry, garden, and outdoor lounge images, plus **separately labeled** illustrative arrival, sauna, and sofa-styling studies. The aerial has a smaller responsive mobile export.
- `incoming-media/4k-masters/` contains preservation-focused restored masters used to export the active current-property photographs.
- `art/` contains owner-supplied images of artwork in current interiors.
- `current-upgrades/` contains owner-supplied visualizations of completed work awaiting fresh photography.
- `event-concepts/` contains AI-assisted styling studies grounded in authentic property photographs and disclosed as concepts in the interface. The Wedding & Events hero (`wedding-hero-blue-hour.webp`) is an event-styling concept built from an authentic Sunset Club Ranch blue-hour pool photograph; it is never presented as a documentary record of a past event.
- `vision-2027/` contains future concept renderings.
- `video/lawn-current.mp4` is authentic current-property footage. `video/wellness-sauna-to-courtyard-2027.mp4` begins with the installed sauna, then transitions to the separately labeled future Med Spa courtyard direction.
- `video/` contains web-optimized current-property and clearly labeled future-direction video.

Original high-resolution supplied files are intentionally kept outside version control in `incoming-media/`. Run `scripts/process-media.sh` on the persistent development computer to rebuild web derivatives from those sources. Historical property photographs are intentionally excluded; active pages use only newly supplied current-property media or clearly labeled concepts.

Run `scripts/process-october-photos.sh` after adding the supplied originals to ignored `incoming-media/october-2026/`. Four patio, outdoor-kitchen, and pizza-oven views in the original delivery still show a superseded stone finish; the script deliberately **does not publish them**. The authentic `living-room-hardwood-original.png` remains private because its couch is outdated; the website instead shows a visibly labeled sofa-and-throws styling visualization that retains the real floor, rug, table, and art. Its two warm checked throws and third gray checked throw follow the owner's other fireplace-view styling reference, rather than an invented textile set. The six-person sauna is a current estate amenity; the illustrative sauna image remains a design study for the future cold-plunge, shower, and courtyard context and must not be shown as documentary photography of the installed sauna.

Run `scripts/process-event-concepts-2026.sh` after adding or replacing a reviewed concept source in ignored `incoming-media/event-concepts-2026/`. The current reviewed set covers wedding dinners, poolside cocktails, adult birthday weekends, anniversary dinners, and multigenerational recreation. The recreation concept is grounded in the owner-confirmed pickleball and sand-volleyball area, with the adjacent basketball hoop; no pool or water feature may be introduced in that scene. Do not publish a concept unless the page preserves a clear event-styling disclosure and the asset remains grounded in an authentic Sunset Club Ranch setting.

## Content integrity

Current-property photography, visualizations of completed work, event-styling concepts, and future concepts must remain visibly distinct. Completed-work visualizations must say that the feature exists today and that fresh photography is pending. Event concepts must state that they are inspirational and do not promise included decor, furniture, staffing, or services. Any planned feature, visualization, or timeline must be labeled as conceptual, under development, and not currently available until the property team confirms completion. Do not introduce stock photographs or images from another property.

The definitive interior material reference is the current linear-fireplace photograph with soft light-wood flooring. Any published interior image with a visible floor must match that renovation; otherwise crop the floor out or retire the image. Each primary landing page uses a distinct hero image and layout rather than reusing one generic treatment.

## Inquiry handling

The owner-confirmed inquiry recipient is `dapenza444@gmail.com`. The production form submits to FormSubmit's AJAX endpoint and shows a success message **only if that service confirms acceptance**. On a network error, rejection, or timeout, it preserves entered details and opens an email draft; the visitor must press Send in their email application. Direct phone and email links remain visible. FormSubmit was activated and a synthetic inquiry from the live site reached the recipient on October 5, 2026; this is a point-in-time delivery check, not an uptime guarantee. Guest details pass through FormSubmit; its privacy policy is linked at submission.

The form carries a first-touch source (UTM source / medium / campaign, referring domain, or direct) across same-tab page visits using session storage. Its message includes the source and landing-page path so campaigns can be compared without a tracking pixel. For example, share `/weddings.html?utm_source=instagram&utm_medium=social&utm_campaign=fall-weddings` or `/stay.html?utm_source=anetta&utm_medium=referral&utm_campaign=direct-stays`. Do not record guest details in campaign parameters.

`public/sitemap.xml` lists the canonical pages and `public/robots.txt` advertises it. Submit the sitemap to Google Search Console once the property owner has verified ownership. A plain HTTP client may encounter a Vercel Security Checkpoint; check the verified Googlebot experience in Search Console before changing firewall rules or claiming Google cannot crawl the site.

## Hostaway direct-booking availability

The primary **Check availability** action in the header, mobile navigation, mobile sticky control, and stay/event/festival opening content routes to `/book-direct.html#availability`. Weddings, birthdays, anniversaries, and retreats retain a separate planning inquiry. The calendar shows **lodging availability only**; an open lodging date does not approve an event, its attendance, or its pricing. On phones the calendar appears first in the availability section, and the floating availability control hides while the calendar is visible so it cannot cover date or checkout controls.

`src/booking.js` loads the official Hostaway widget script from `https://d2q3n06xhbi0am.cloudfront.net/calendar.js`, using `baseUrl: https://booking.annetagroup.com/` and Sunset Club Ranch `listingId: 603473`. The widget uses two months on desktop and one on mobile, and transfers selected dates to Anneta Group's checkout in the same tab. No dates are maintained separately in this repository. The direct-listing fallback `https://booking.annetagroup.com/listings/603473` remains visible if the widget or its network requests fail. Script errors/timeouts show a helpful fallback message; Hostaway controls its own calendar-data error UI.

Booking questions and guest services use Anneta Group's phone **+1 (442) 307-4264** and email **annetagroup@gmail.com**. Event/custom inquiry forms still submit to the owner's already-activated `dapenza444@gmail.com` FormSubmit endpoint, preserving existing delivery and campaign attribution. Do not switch that endpoint without confirmation and activation.

The manager must verify Hostaway's channel synchronization, blocked dates, rates, minimum stays, checkout/payment settings, and cancellation rules. Website integration cannot independently validate Airbnb/Booking.com channel synchronization. During the November 21, 2026 read-only preview test, Hostaway returned listing/calendar data successfully; a blocked date was ignored, available dates selected and cleared, and the checkout received the correct listing and dates. No reservation, inquiry, guest information, or payment was submitted.

## November 2026 creator-led brand refresh

`src/home-refresh.js` composes the new photo-led editorial homepage. `src/brand-refresh.css` carries the terracotta signature, cream/charcoal foundation, bold DM Sans and italic Playfair typography, pill-shaped actions, responsive layouts, and reduced-motion support across the existing public pages. `src/brand-refresh.js` adds keyboard-accessible Pool days / Play time / Slow down / Ranch nights tabs, dropdown dismissal, and dialog focus handling.

The homepage includes authentic property footage, current-estate photography, the existing interactive estate overview, and the approved eight-second Stirrup/Lulu/Scout welcome prominently within the opening hero on desktop, tablet and mobile. The old fixed home greeting is no longer rendered because it obstructed the mobile headline and experience controls. QR guest-guide behavior and personalized welcome data are unchanged.

Primary navigation groups Corporate Retreats, Festival Weekends, After Dark, Spa Sanctuary / Vision 2027, and the crew under Experiences; existing routes remain accessible. Event-page opening actions lead with the event inquiry and retain lodging-date checks. Hostaway listing 603473, calendar logic, Anneta Group checkout, contact ownership, FormSubmit, campaign attribution, and current-versus-planned disclosures are preserved. Instagram links are website pathways, not an embedded live feed; no Instagram profile or posts were changed.

Release checks: production build and JavaScript syntax; 1440px desktop, 890px tablet, and 390px mobile; experience switching and arrow-key controls; mobile menu and photo lightbox; all public main-page routes; homepage media loading; crew replay/pause; and calendar rendering with visible checkout and fallback links. No booking, payment, or inquiry was submitted.

## Private-resort cinematic opening — November 23, 2026

The full-bleed homepage pairs “Your people. Your private resort.” editorial typography with genuine ranch photography. A compact cream welcome card puts Stirrup, Lulu and Scout in the first screen, with the existing eight-second silent animation, replay, pause and contained confetti. No duplicate character-video IDs or fixed overlays were added. QR guest-guide assets and personalized greetings are unchanged.

The hero’s silent day-to-night photo film uses four actual ranch photographs with gentle zooms and fades—not new drone footage or generated scenery. Its portable CDN URL is `https://files.manuscdn.com/user_upload_by_module/session_file/106775517/RsBtbTlFCAWjcavE.mp4` (1280×720, H.264, 24fps, approximately 12.7 seconds, 1.36MB, no audio). The original still remains the fallback. Film loading is deferred until in view; playback pauses offscreen or when the document is hidden. Reduced-motion/data-saving settings suppress autoplay. Visitors can deliberately start or pause the hero film.

The “Check availability” and celebration inquiry remain separate first-screen actions. Existing Hostaway calendar and checkout source, FormSubmit, contacts, attribution, original media URLs and current/planned amenity disclosures are preserved. Resort reference sites informed image scale and editorial/booking hierarchy only; no reference-property images or service claims are used.
