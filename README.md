# web-animation-design--v1

A collection of self-contained web animation / interaction design studies.

`design-1/` and `design-2/` each live as a single `index.html` with no build step,
no framework, and no bundler — just HTML, CSS, and vanilla JS pulling libraries
from CDN. `design-3/` is a small React + Vite build (see its note below).

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

### `design-3/` — Charlie Cloud

A visual reimagining of the Charlie Cloud brand as a **React + Vite + Motion**
build, driven by an AI-generated logo + hero mockup in `design-3/assets/`. The
design system (colours, type, motifs) is derived from those images and documented
in [`design-3/DESIGN.md`](design-3/DESIGN.md). CI/CD is documented in
[`design-3/README.md`](design-3/README.md).

- **Framing:** "data security cloud intelligence" — a fractional platform +
  security team; web deployment, automation, 24/7 operations, audit-ready security.
- **Theme:** dark navy HUD hero + light body (the design-2 pattern).
- **Sections:** sticky scroll-linked nav + progress bar, dark hero with masked
  staggered-word headline, live plexus canvas and a mono "deploy" ticker, logo
  marquee, four capability pillars, problem grid, chamfered feature bento with
  spring hover-lift + cyan glow, 3-step process, dark metrics band with count-up,
  testimonials, three-tier pricing with an `AnimatePresence` monthly/annual
  toggle, about + brand panel, FAQ accordion, final CTA, staggered footer.
- **Motion:** [Motion](https://motion.dev) (`motion/react`) throughout, wrapped in
  `<MotionConfig reducedMotion="user">` so every animation collapses to a static,
  fully-visible state under `prefers-reduced-motion`. Transform/opacity only.
- **Branding:** wordmark rebuilt in CSS (steel "Charlie" + mint "Cloud"), mark as
  inline SVG; source images optimised to WebP via `npm run optimize` (sharp).

**Libraries:** react, react-dom, motion. **Build:** vite, typescript.
**Fonts:** Chakra Petch (display), Inter (body), JetBrains Mono (ticker) — Google Fonts.
**Assets:** `design-3/assets/` (4 source images + generated `hero.webp` /
`brand-panel.webp`); `design-3/public/` (favicons + `og.jpg`).

## Running

`design-1` / `design-2` — open the design's `index.html` directly in a modern
browser, or serve the folder:

```bash
npx serve design-1
npx serve design-2
```

`design-3` — has a build step:

```bash
cd design-3
npm install
npm run dev        # local dev server
npm run optimize   # regenerate WebP assets / favicons from assets/*  (needs sharp)
npm run build      # type-check + production build to design-3/dist
npm run preview    # serve the production build
```

An internet connection is required for the CDN libraries and Google Fonts.
`design-1` additionally depends on the remotely hosted 3D / image assets.

## CI/CD (`design-3` only)

`design-1` and `design-2` are static, dependency-free HTML and need neither.
`design-3` has both:

- **CI** — [`.github/workflows/design-3-ci.yml`](.github/workflows/design-3-ci.yml)
  runs on every push/PR touching `design-3/**`: installs, type-checks
  (`tsc --noEmit`), and runs the production build (`vite build`). Pure quality
  gate — it does not deploy.
- **CD** — Vercel's native GitHub integration. The `design-3` Vercel project
  (`charliemagnes-projects/design-3`) has its **Root Directory** set to
  `design-3` and is connected to this repo: every push to `main` that touches
  `design-3/**` deploys to production automatically, and every pull request gets
  its own preview deployment. No deploy secrets live in this repository.

Full details: [`design-3/README.md`](design-3/README.md).
