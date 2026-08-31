# web-animation-design--v1

A collection of self-contained web animation / interaction design studies. Each
lives in its own `design-N/` folder as a single `index.html` with no build step,
no framework, and no bundler — just HTML, CSS, and vanilla JS pulling libraries
from CDN.

## Designs

### `design-1/` — Diet Soda ("Soda")

Full-viewport, no-scroll hero landing page for a fictional "Diet Soda" beverage.

- Dark radial-gradient background that morphs between a teal **Classic** theme and
  a blue **Zero Lime** theme.
- A large 3D soda can (Google `<model-viewer>`) centered on screen that **tilts
  toward the cursor** in real time and gently bobs.
- Dozens of floating 3D cherry / leaf models with parallax that are **repelled by
  the pointer** like a force field.
- Endlessly rising translucent PNG bubbles.
- Glassmorphism header, cursive display headlines (Galada), CTA, award badge, and
  a two-card flavor carousel.
- Clicking a flavor card runs a choreographed transition: background color morph,
  can spins 720° with motion blur and swaps its base-color texture at the peak,
  and every berry implodes to center, swaps model (cherry ↔ blueberry), then
  explodes back out to new random positions.

**Libraries (CDN):** GSAP 3.12.2, `@google/model-viewer`.
**Fonts:** Inter (body), Galada (headings), Manrope (nav).
**Assets:** hosted GLB / PNG / JPG under
`https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/`.

### `design-2/`

Reserved for the next study.

## Running

Open the design's `index.html` directly in a modern browser, or serve the folder:

```bash
npx serve design-1
```

An internet connection is required for the CDN libraries, Google Fonts, and the
remotely hosted 3D/image assets.
