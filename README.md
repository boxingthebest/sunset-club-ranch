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
- `art/` contains owner-supplied images of artwork in current interiors.
- `current-upgrades/` contains owner-supplied visualizations of completed work awaiting fresh photography.
- `event-concepts/` contains AI-assisted styling studies grounded in authentic property photographs and disclosed as concepts in the interface.
- `vision-2027/` contains future concept renderings.
- `video/lawn-current.mp4` is authentic current-property footage; `video/wellness-concept-2027.mp4` is a separately labeled future concept.
- `video/` contains web-optimized future concept video.

Original high-resolution supplied files are intentionally kept outside version control in `incoming-media/`. Run `scripts/process-media.sh` on the persistent development computer to rebuild web derivatives from those sources. The script also recovers authenticated historical property photographs directly from the known repository commit.

## Content integrity

Current-property photography, visualizations of completed work, event-styling concepts, and future concepts must remain visibly distinct. Completed-work visualizations must say that the feature exists today and that fresh photography is pending. Event concepts must state that they are inspirational and do not promise included decor, furniture, staffing, or services. Any planned feature, visualization, or timeline must be labeled as conceptual, under development, and not currently available until the property team confirms completion. Do not introduce stock photographs or images from another property.

## Inquiry handling

The current inquiry form prepares a pre-addressed email to `dapenza444@gmail.com` in the visitor's mail application. Before production launch, replace this fallback with the approved lead-capture integration while retaining a direct phone and email path.
