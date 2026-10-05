# Sunset Club Ranch Website

A custom multi-page Vite site for Sunset Club Ranch, a private five-acre estate in Indio, California.

## Routes

| Route | Purpose |
|---|---|
| `/` | Editorial homepage and primary inquiry path |
| `/stay.html` | Homes, current amenities, gallery, and recent additions |
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
- `video/lawn-current.mp4` is authentic current-property footage; `video/wellness-concept-2027.mp4` is a separately labeled future concept.
- `video/` contains web-optimized future concept video.

Original high-resolution supplied files are intentionally kept outside version control in `incoming-media/`. Run `scripts/process-media.sh` on the persistent development computer to rebuild web derivatives from those sources. Historical property photographs are intentionally excluded; active pages use only newly supplied current-property media or clearly labeled concepts.

Run `scripts/process-october-photos.sh` after adding the supplied originals to ignored `incoming-media/october-2026/`. Four patio, outdoor-kitchen, and pizza-oven views in the original delivery still show a superseded stone finish; the script deliberately **does not publish them**. The authentic `living-room-hardwood-original.png` remains private because its couch is outdated; the website instead shows a visibly labeled sofa-and-throws styling visualization that retains the real floor, rug, table, and art. Its two warm checked throws and third gray checked throw follow the owner's other fireplace-view styling reference, rather than an invented textile set. The six-person sauna is a current estate amenity; the illustrative sauna image remains a design study for the future cold-plunge, shower, and courtyard context and must not be shown as documentary photography of the installed sauna.

Run `scripts/process-event-concepts-2026.sh` after adding or replacing a reviewed concept source in ignored `incoming-media/event-concepts-2026/`. The current reviewed set covers wedding dinners, poolside cocktails, adult birthday weekends, anniversary dinners, and multigenerational recreation. Do not publish a concept unless the page preserves a clear event-styling disclosure and the asset remains grounded in an authentic Sunset Club Ranch setting.

## Content integrity

Current-property photography, visualizations of completed work, event-styling concepts, and future concepts must remain visibly distinct. Completed-work visualizations must say that the feature exists today and that fresh photography is pending. Event concepts must state that they are inspirational and do not promise included decor, furniture, staffing, or services. Any planned feature, visualization, or timeline must be labeled as conceptual, under development, and not currently available until the property team confirms completion. Do not introduce stock photographs or images from another property.

The definitive interior material reference is the current linear-fireplace photograph with soft light-wood flooring. Any published interior image with a visible floor must match that renovation; otherwise crop the floor out or retire the image. Each primary landing page uses a distinct hero image and layout rather than reusing one generic treatment.

## Inquiry handling

The owner-confirmed inquiry recipient is `dapenza444@gmail.com`. The production form submits to FormSubmit's AJAX endpoint and shows a success message **only if that service confirms acceptance**. On a network error, rejection, or timeout, it preserves entered details and opens an email draft; the visitor must press Send in their email application. Direct phone and email links remain visible. FormSubmit was activated and a synthetic inquiry from the live site reached the recipient on October 5, 2026; this is a point-in-time delivery check, not an uptime guarantee. Guest details pass through FormSubmit; its privacy policy is linked at submission.

The form carries a first-touch source (UTM source / medium / campaign, referring domain, or direct) across same-tab page visits using session storage. Its message includes the source and landing-page path so campaigns can be compared without a tracking pixel. For example, share `/weddings.html?utm_source=instagram&utm_medium=social&utm_campaign=fall-weddings` or `/stay.html?utm_source=anetta&utm_medium=referral&utm_campaign=direct-stays`. Do not record guest details in campaign parameters.

`public/sitemap.xml` lists the canonical pages and `public/robots.txt` advertises it. Submit the sitemap to Google Search Console once the property owner has verified ownership. A plain HTTP client may encounter a Vercel Security Checkpoint; check the verified Googlebot experience in Search Console before changing firewall rules or claiming Google cannot crawl the site.
