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

### `design-2/` — Charlie Cloud Services

Premium single-page marketing site for *Charlie Cloud Services*, a fictional
senior-only cloud platform consultancy. Built as a conversion-focused long-form
landing page.

- **Positioning:** flat-fee fractional platform team for Series A–C SaaS companies —
  cloud migrations, FinOps, 24/7 managed operations, and security / audit readiness.
- **Primary CTA:** book a *Cloud Architecture Review*.
- **Sections:** fixed blur nav + scroll-progress bar, dark aurora hero, animated
  logo marquee, problem, services (hairline grid), 3-step process, results with
  count-up metrics, testimonials, three-tier pricing, about / founder, FAQ
  accordion, final CTA, footer.
- **Motion:** drifting blurred-blob aurora with scroll parallax, GSAP ScrollTrigger
  fade-up reveals, animated metric counters, magnetic buttons, film-grain overlay.
- **Responsive:** nav collapses to a slide-in drawer at 860px; grids reflow at
  1000 / 640px; honours `prefers-reduced-motion`.

**Libraries (CDN):** GSAP 3.12.2 + ScrollTrigger.
**Fonts:** Inter (UI), Fraunces (editorial display).
**Assets:** none — no images; pure CSS/SVG.

## Running

Open the design's `index.html` directly in a modern browser, or serve the folder:

```bash
npx serve design-1
npx serve design-2
```

An internet connection is required for the CDN libraries and Google Fonts.
`design-1` additionally depends on the remotely hosted 3D / image assets.
