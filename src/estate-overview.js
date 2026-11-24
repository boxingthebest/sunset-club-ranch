import './estate-overview.css';

const PREVIEW_IMAGE = '/media/estate-overview/sunset-club-ranch-aerial-overview-guest-houses.webp';
const FULL_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/106775517/XGSKPHRbsbYiloVy.jpg';
const CAPTION = 'Illustrative estate overview—includes planned wellness and soccer upgrades.';
const DISCLOSURE = 'Photo-based visualization, not a current drone photograph or a surveyed map. Confirm current amenity availability with the host.';
const initialized = new WeakSet();
const scrollLocks = new WeakMap();
let instance = 0;

/** Render once per page; call initEstateOverview after inserting the markup. */
export function estateOverview({ guest = false, compact = false } = {}) {
  const id = `eo-${++instance}`;
  const title = guest ? 'Find your ranch moment' : 'Five acres. One private world.';
  const copy = guest
    ? 'A little orientation for your stay. Find room to play, unwind and gather.'
    : compact
      ? 'Main House, two guest houses and room to gather. Explore the illustrated ranch overview.'
      : 'A main residence, two guest houses and open-air gathering spaces. Get a feel for the ranch before you arrive.';

  return `
    <section id="explore-estate" class="eo-section${guest ? ' eo-section--guest' : ''}${compact ? ' eo-section--compact' : ''}" aria-labelledby="${id}-title" data-eo-section>
      <div class="eo-inner">
        <header class="eo-header">
          <div class="eo-heading">
            <p class="eo-eyebrow">${guest ? 'Explore the estate' : 'Explore the Estate'}</p>
            <h2 class="eo-title" id="${id}-title">${title}</h2>
            <p class="eo-intro">${copy}</p>
          </div>
          ${!compact || guest ? `<a class="eo-link eo-context-link" href="${guest ? '#help' : '/stay.html'}">${guest ? 'Ask your host' : 'Discover your stay'}<span aria-hidden="true">↗</span></a>` : ''}
        </header>

        <div class="eo-layout">
          <figure class="eo-map">
            <button class="eo-map-trigger" type="button" data-eo-open aria-haspopup="dialog" aria-controls="${id}-dialog" aria-label="Enlarge the illustrated estate overview" aria-describedby="${id}-caption ${id}-tip">
              <picture class="eo-picture">
                <img class="eo-preview" src="${PREVIEW_IMAGE}" width="1536" height="1024" loading="lazy" decoding="async" alt="Photo-based illustrated overview of Sunset Club Ranch, showing guest houses, recreation areas and planned amenities. See the availability notes below." />
              </picture>
              <span class="eo-enlarge" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6" /></svg>Enlarge overview</span>
            </button>
            <figcaption class="eo-map-caption">
              <p class="eo-tip" id="${id}-tip">Tap to enlarge • Zoom to read the labels</p>
              <p class="eo-caption" id="${id}-caption">${CAPTION}</p>
              <p class="eo-disclosure">${DISCLOSURE}</p>
              <a class="eo-link eo-original-link" href="${FULL_IMAGE}" target="_blank" rel="noopener noreferrer">Open full image in a new tab<span aria-hidden="true">↗</span></a>
            </figcaption>
          </figure>

          ${compact ? `<p class="eo-layout-details"><a class="eo-link" href="/stay.html#explore-estate">Full estate layout &amp; house details<span aria-hidden="true">↗</span></a></p>` : `<aside class="eo-houses" aria-labelledby="${id}-houses">
            <p class="eo-eyebrow eo-houses-label" id="${id}-houses">Your places to stay</p>
            <div class="eo-house-list">
              <article class="eo-house">
                <span class="eo-house-number" aria-hidden="true">MAIN</span>
                <div><h3 class="eo-house-title">Main House</h3><p class="eo-house-count">4 bedrooms · 3 bathrooms</p><p class="eo-house-kind">Main residence</p></div>
              </article>
              <article class="eo-house">
                <span class="eo-house-number" aria-hidden="true">01</span>
                <div><h3 class="eo-house-title">Guest House #1</h3><p class="eo-house-count">2 bedrooms · 2 bathrooms</p><p class="eo-house-kind">Right of Main House, along the walkway toward pickleball &amp; basketball</p></div>
              </article>
              <article class="eo-house">
                <span class="eo-house-number" aria-hidden="true">02</span>
                <div><h3 class="eo-house-title">Guest House #2</h3><p class="eo-house-count">3 bedrooms · 1 bathroom</p><p class="eo-house-kind">Farther from Main House, beside the Open Barn</p></div>
              </article>
            </div>
            <p class="eo-house-note">The Open Barn is separate from Guest House #2 and is not lodging.</p>
          </aside>`}
        </div>

        <div class="eo-availability" aria-label="Current and planned amenities">
          <p class="eo-status"><strong>Available now:</strong> pool &amp; spa, sauna, outdoor kitchen, pickleball, sand volleyball, basketball, putting green and existing fire pits.</p>
          <p class="eo-status eo-status--planned"><strong>In development:</strong> expanded wellness courtyard with cold plunge, hammocks, Bali shower and courtyard fire pit; nighttime soccer field.</p>
        </div>
      </div>

      <dialog class="eo-dialog" id="${id}-dialog" data-eo-dialog aria-labelledby="${id}-dialog-title" aria-describedby="${id}-dialog-caption">
        <header class="eo-dialog-header">
          <div><p class="eo-eyebrow">Sunset Club Ranch</p><h2 class="eo-dialog-title" id="${id}-dialog-title">Explore the estate</h2></div>
          <button class="eo-close" type="button" data-eo-close autofocus aria-label="Close estate overview"><span aria-hidden="true">×</span> Close</button>
        </header>
        <div class="eo-toolbar" role="group" aria-label="Image zoom controls">
          <button class="eo-control" type="button" data-eo-zoom-out aria-label="Zoom out" disabled>−</button>
          <output class="eo-zoom-level" data-eo-zoom-level aria-live="polite" aria-atomic="true" aria-label="Image zoom">Fit</output>
          <button class="eo-control" type="button" data-eo-zoom-in aria-label="Zoom in">+</button>
          <button class="eo-control eo-fit" type="button" data-eo-fit>Fit image</button>
          <p class="eo-viewer-tip">Zoom to read the labels. Scroll to explore.</p>
        </div>
        <div class="eo-viewport" data-eo-viewport tabindex="0" role="region" aria-label="Scrollable estate overview image. Use the zoom controls to enlarge, then scroll to explore.">
          <div class="eo-image-stage" data-eo-stage>
            <img class="eo-full-image" data-eo-full-image data-src="${FULL_IMAGE}" width="2304" height="1536" decoding="async" alt="Full-size illustrative estate overview of Sunset Club Ranch, including planned wellness and soccer upgrades." />
          </div>
        </div>
        <footer class="eo-dialog-footer">
          <div><p class="eo-caption" id="${id}-dialog-caption">${CAPTION}</p><p class="eo-disclosure">${DISCLOSURE}</p></div>
          <a class="eo-link eo-full-link" href="${FULL_IMAGE}" target="_blank" rel="noopener noreferrer">Open full image in a new tab<span aria-hidden="true">↗</span></a>
        </footer>
      </dialog>
    </section>`;
}

function lockPage(document) {
  const body = document.body;
  let lock = scrollLocks.get(document);
  if (!lock) {
    lock = {
      count: 0,
      value: body.style.getPropertyValue('overflow'),
      priority: body.style.getPropertyPriority('overflow'),
    };
    scrollLocks.set(document, lock);
    body.style.setProperty('overflow', 'hidden', 'important');
  }
  lock.count += 1;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    lock.count -= 1;
    if (lock.count) return;
    // Do not overwrite an overflow change made by another component while open.
    if (body.style.getPropertyValue('overflow') === 'hidden'
      && body.style.getPropertyPriority('overflow') === 'important') {
      if (lock.value) body.style.setProperty('overflow', lock.value, lock.priority);
      else body.style.removeProperty('overflow');
    }
    scrollLocks.delete(document);
  };
}

/** Safe to call repeatedly on a Document, an ancestor, or the section itself. */
export function initEstateOverview(root = document) {
  const sections = [...root.querySelectorAll('[data-eo-section]')];
  if (root.matches?.('[data-eo-section]')) sections.unshift(root);

  sections.forEach((section) => {
    if (initialized.has(section)) return;
    const trigger = section.querySelector('[data-eo-open]');
    const dialog = section.querySelector('[data-eo-dialog]');
    const closeButton = section.querySelector('[data-eo-close]');
    const viewport = section.querySelector('[data-eo-viewport]');
    const stage = section.querySelector('[data-eo-stage]');
    const image = section.querySelector('[data-eo-full-image]');
    const zoomIn = section.querySelector('[data-eo-zoom-in]');
    const zoomOut = section.querySelector('[data-eo-zoom-out]');
    const fit = section.querySelector('[data-eo-fit]');
    const zoomLevel = section.querySelector('[data-eo-zoom-level]');
    if (!trigger || !dialog || !closeButton || !viewport || !stage || !image
      || !zoomIn || !zoomOut || !fit || !zoomLevel) return;
    initialized.add(section);

    const document = section.ownerDocument;
    const window = document.defaultView;
    const steps = [1, 1.5, 2, 3, 4, 6];
    let step = 0;
    let imageWidth = 0;
    let imageHeight = 0;
    let lastFocus = null;
    let releaseScroll = null;
    let frame = 0;
    let backdropPress = false;

    const updateImage = (preserveCenter = false) => {
      if (!dialog.open || !viewport.clientWidth || !viewport.clientHeight) return;
      const centerX = imageWidth ? (viewport.scrollLeft + viewport.clientWidth / 2
        - Math.max(0, (viewport.clientWidth - imageWidth) / 2)) / imageWidth : 0.5;
      const centerY = imageHeight ? (viewport.scrollTop + viewport.clientHeight / 2
        - Math.max(0, (viewport.clientHeight - imageHeight) / 2)) / imageHeight : 0.5;
      const fitWidth = Math.min(viewport.clientWidth, viewport.clientHeight * 1.5);
      imageWidth = Math.round(fitWidth * steps[step]);
      imageHeight = Math.round(imageWidth / 1.5);
      image.style.width = `${imageWidth}px`;
      image.style.height = `${imageHeight}px`;
      stage.style.width = `${Math.max(viewport.clientWidth, imageWidth)}px`;
      stage.style.height = `${Math.max(viewport.clientHeight, imageHeight)}px`;
      zoomLevel.textContent = step === 0 ? 'Fit' : `${Math.round(steps[step] * 100)}%`;
      zoomOut.disabled = step === 0;
      zoomIn.disabled = step === steps.length - 1;
      viewport.scrollLeft = preserveCenter
        ? Math.max(0, centerX * imageWidth - viewport.clientWidth / 2) : 0;
      viewport.scrollTop = preserveCenter
        ? Math.max(0, centerY * imageHeight - viewport.clientHeight / 2) : 0;
    };

    const cleanup = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      releaseScroll?.();
      releaseScroll = null;
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
      const focusTarget = lastFocus;
      lastFocus = null;
      if (focusTarget?.isConnected) focusTarget.focus({ preventScroll: true });
    };
    const close = () => {
      if (!dialog.open) return;
      dialog.close();
      cleanup();
    };
    const onResize = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateImage(step !== 0);
      });
    };
    const observer = typeof window.ResizeObserver === 'function'
      ? new window.ResizeObserver(onResize) : null;

    trigger.addEventListener('click', () => {
      if (dialog.open) return;
      // Older browsers retain access to the source image and native image zoom.
      if (typeof dialog.showModal !== 'function') {
        window.open(FULL_IMAGE, '_blank', 'noopener,noreferrer');
        return;
      }
      lastFocus = trigger;
      step = 0;
      imageWidth = 0;
      imageHeight = 0;
      if (!image.hasAttribute('src')) image.src = image.dataset.src;
      dialog.showModal(); // Native top layer makes the rest of the page inert.
      releaseScroll = lockPage(document);
      updateImage();
      closeButton.focus({ preventScroll: true });
      window.addEventListener('resize', onResize);
      observer?.observe(viewport);
    });
    closeButton.addEventListener('click', close);
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      close();
    });
    dialog.addEventListener('close', () => {
      // Ignore a stale close event if the viewer has already been reopened.
      if (!dialog.open) cleanup();
    });

    const outsideDialog = (event) => {
      const rect = dialog.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right
        || event.clientY < rect.top || event.clientY > rect.bottom;
    };
    dialog.addEventListener('pointerdown', (event) => {
      backdropPress = event.target === dialog && outsideDialog(event);
    });
    dialog.addEventListener('pointercancel', () => { backdropPress = false; });
    dialog.addEventListener('click', (event) => {
      if (backdropPress && event.target === dialog && outsideDialog(event)) close();
      backdropPress = false;
    });
    zoomIn.addEventListener('click', () => {
      step = Math.min(steps.length - 1, step + 1);
      updateImage(true);
    });
    zoomOut.addEventListener('click', () => {
      step = Math.max(0, step - 1);
      updateImage(true);
    });
    fit.addEventListener('click', () => {
      step = 0;
      updateImage();
    });
    image.addEventListener('load', onResize);
  });
}
