# Charlie Cloud — Design System (`DESIGN.md`)

The source of truth for the `design-3` build. Every token here is derived from the
four brand images in `design-3/assets/` (an AI-generated logo lockup + hero
mockup). Hand this file to any agent building UI for Charlie Cloud.

- **Product framing:** "data security cloud intelligence" — a fractional platform
  and security team (web deployment · automation · security · easy plugin).
- **Theme:** dark navy HUD hero + light body (the `design-2` pattern).
- **Implementation:** tokens live as CSS custom properties in
  [`src/index.css`](src/index.css); motion presets in [`src/lib/motion.ts`](src/lib/motion.ts).

---

## 1. Source assets & how they are used

| File | Description | Role in the build |
|---|---|---|
| `assets/header_logo_no_background.jpg` | Logo lockup on **white** (misnamed — has a white bg, not transparent). Metallic shield with a circuit-board fingerprint inside a hexagonal node network; beveled chrome "CHARLIE CLOUD" wordmark; chip row "WEB DEPLOYMENT · AUTOMATION · SECURITY · EASY PLUGIN". | Colour + letterform reference only. |
| `assets/header_logo_title_balanced.png` | Larger version of the same lockup (RGB, **no alpha**). | Colour reference only. |
| `assets/header_logo_background.jpg` | Logo on a navy brushed-metal card. | → `brand-panel.webp` (About section) and `public/og.jpg` (social card). |
| `assets/hero_image_v1.jpg` | Navy scene: blue/green plexus particle network, glowing wireframe cube + shield, HUD panels. Had a baked "New main page layout :" caption bar (cropped out). | → `hero.webp` — dimmed hero backdrop + framed "product" image. |

**No transparent logo asset exists.** Therefore:

- **Wordmark** is rebuilt in CSS — see [`src/components/Wordmark.tsx`](src/components/Wordmark.tsx).
- **Mark / emblem** is an inline SVG approximation — see [`src/components/Emblem.tsx`](src/components/Emblem.tsx) and `public/favicon.svg`.
- Raster derivatives are produced by `npm run optimize` ([`scripts/optimize-assets.mjs`](scripts/optimize-assets.mjs), uses `sharp`). Source images stay committed and untouched.

---

## 2. Brand personality

Cyber / data-security / "cloud intelligence". Metallic, HUD, precise, confident —
**not** playful. Glowing plexus networks over deep navy. Chamfered, technical
edges. The emotional promise: *your infrastructure becomes boring*.

---

## 3. Colour tokens

Sampled from the plexus, the wordmark gradients and the navy field.

### Dark surfaces (hero, metrics band, final CTA, footer)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0A1826` | Primary dark background (from hero navy) |
| `--ink-2` | `#0D2137` | Raised dark panel |
| `--ink-3` | `#16304A` | Dark hairline / third level |

### Light surfaces (all mid-page content)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F7F9FB` | Body background (cool near-white) |
| `--paper-2` | `#ECF1F5` | Subtle fill |
| `--paper-3` | `#DEE7EE` | Inactive toggle track, dividers |

### Brand & accent

| Token | Hex | Use |
|---|---|---|
| `--brand` | `#2E9BE6` | Primary — CTAs, links, focus ring, plexus lines |
| `--brand-deep` | `#1C6FB0` | Hover / pressed brand |
| `--accent` | `#7FC98A` | Mint — the "CLOUD" wordmark, success, metric underline, feature dot |
| `--accent-lime` | `#9BE067` | Node-glow highlight, "MOST CHOSEN" badge — **use sparingly** |
| `--steel` | `#7C99B6` | The "CHARLIE" wordmark, muted technical tint |
| `--chrome` | `#C5D2DF` | Metallic hairlines/dividers on dark, metric number gradient |

### Text & lines

| Token | Value |
|---|---|
| `--text` | `#0A1826` |
| `--muted` | `#566579` (on light) / `rgba(255,255,255,.64)` on `.on-ink` |
| `--line` | `rgba(10,24,38,.12)` on light / `rgba(255,255,255,.14)` on dark |

### Wordmark gradients

- "CHARLIE": `linear-gradient(180deg, var(--chrome), var(--steel))` clipped to text.
- "CLOUD": `linear-gradient(180deg, var(--accent-lime), var(--accent))` clipped to text.

### Contrast

Body text `--text` on `--paper` ≈ 15:1. `--muted` on `--paper` ≈ 5.6:1 (AA).
On `.on-ink`, body is `#fff` and muted is `rgba(255,255,255,.64)` ≈ 6:1.
CTA: white on `--brand` ≈ 3.3:1 — acceptable for large 600-weight button text; do
not use `--brand` for small body copy on white.

---

## 4. Typography

| Token | Stack | Role |
|---|---|---|
| `--display` | `'Chakra Petch', 'Rajdhani', system-ui, sans-serif` | All headings, eyebrows, buttons, wordmark, nav, stat numbers. Wide & chamfered — echoes the beveled metal wordmark. Weights 500/600/700. |
| `--sans` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Body copy, captions. Same as design-1/2. Weights 400/500/600. |
| `--mono` | `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace` | HUD "deploy" ticker, step numbers. Weights 400/500. |

Loaded once via Google Fonts in `index.html`
(`Chakra Petch:500,600,700` + `Inter:400,500,600` + `JetBrains Mono:400,500`).

### Scale (fluid — same clamps as design-2)

| Class | `font-size` |
|---|---|
| `.h-display` | `clamp(2.6rem, 6.4vw, 5rem)` |
| `.h-section` | `clamp(2rem, 4.4vw, 3.4rem)` |
| `.h-card` | `1.3rem` |
| `.lead` | `clamp(1.05rem, 1.6vw, 1.25rem)` |
| body | `17px` / line-height `1.6` |
| `.eyebrow` | `0.72rem`, `letter-spacing: 0.2em`, uppercase |

Headings: weight 600, `letter-spacing: -0.01em`, `line-height: 1.08`.

---

## 5. Layout, shape & elevation

| Token | Value | Note |
|---|---|---|
| `--wrap` | `1200px` | Max content width |
| `--pad` | `clamp(1.25rem, 5vw, 4rem)` | Inline padding for `.wrap` |
| `--radius` | `14px` | Cards, panels, frames |
| `--radius-sm` | `8px` | Small elements |
| `--chamfer` | `12px` | Corner cut on `.bento-card` via `clip-path` — the signature technical shape |
| `--shadow-card` | `0 30px 60px -30px rgba(10,24,38,.25)` | Popular pricing tier, panels |
| `--glow-cyan` | `0 0 0 1px rgba(46,155,230,.4), 0 18px 50px -12px rgba(46,155,230,.4)` | Feature-card hover, primary button hover |

Section rhythm: `.pad-y` = `padding-block: clamp(4.5rem, 11vw, 9rem)`.
`.section-head` max-width `760px`.

### Responsive breakpoints

| Width | Change |
|---|---|
| `≤1000px` | Hero → 1 col; pillars/problem/metrics → 2 col; bento/process/pricing → 2 col; quotes/about → 1 col |
| `≤860px` | Desktop nav hidden, hamburger + slide-in drawer (`min(80vw, 340px)`) |
| `≤640px` | All grids → 1 col; footer → 2 col; hero actions full-width |

---

## 6. Motion

Library: **Motion** (`motion/react`). App is wrapped in
`<MotionConfig reducedMotion="user">` — under `prefers-reduced-motion: reduce`
every transform animation is dropped, opacity/colour kept, so **content is always
visible**. CSS also hard-stops transitions and hides the plexus canvas / hero bg.

| Preset (`src/lib/motion.ts`) | Value |
|---|---|
| `EASE` | `cubic-bezier(0.22, 1, 0.36, 1)` — house curve (matches design-1/2) |
| `SPRING` | `{ type: 'spring', stiffness: 220, damping: 26 }` — hover-lift, pricing `layout` |
| `VIEWPORT` | `{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }` |
| `revealUp` | `opacity 0→1`, `y 26→0`, `0.7s` |
| `wordRise` | masked word `y 110%→0%`, `0.8s` — hero headline |
| `stagger(step)` | container `staggerChildren` |

Patterns in use: scroll-linked nav background/border (`useScroll` + `useTransform`),
scroll progress bar (`useSpring(scrollYProgress)`), hero masked word stagger,
canvas plexus (2D, DPR-capped, `IntersectionObserver`-paused), infinite marquee &
ticker (`x` loop), count-up metrics (`useInView` + `animate`), bento hover-lift
(spring), pricing `AnimatePresence` + `layout` price swap, FAQ height accordion,
staggered footer.

**Performance rule:** animate `transform` and `opacity` only. Glow is a
`box-shadow` token, not an animated `filter`. No layout-thrashing properties.

---

## 7. Iconography

Line icons, 1.6px stroke, `round` caps/joins, 24×24 viewbox, `currentColor`.
Redrawn from the logo's chip row — see [`src/components/icons.tsx`](src/components/icons.tsx):
deploy (upload-to-tray), automation (gear-sun), shield-check, plug.

---

## 8. Imagery treatment

- Base is `--ink` navy. Any photographic asset gets a
  `linear-gradient(180deg, rgba(10,24,38,.55), rgba(10,24,38,.92))` overlay and
  drops to ~0.3 opacity behind content.
- Live `PlexusCanvas` (cyan lines `rgba(46,155,230,α)`, mint/lime nodes) renders
  above the hero image and in the final CTA.
- Framed "product" imagery: 1px `rgba(255,255,255,.14)` border, `--radius`, deep
  drop shadow, `object-position: top`.
- Never show the baked-caption or white-background source images directly.

---

## 9. Component patterns

| Component | Notes |
|---|---|
| **Button** `.btn` | Pill, `--display` 600, `letter-spacing .02em`. `.primary` = `--brand` bg + cyan shadow → `--brand-deep` + `--glow-cyan` on hover. `.ghost` = 1px `--line` border. |
| **Nav** | Fixed; transparent over hero → `rgba(247,249,251,.9)` + 12px blur + hairline once scrolled. Wordmark links home. Drawer below 860px. |
| **Bento card** | White, 1px `--line`, `clip-path` chamfer top-left / bottom-right, mint square dot. Hover: `translateY(-6px)` spring + `--glow-cyan` + brand border. `.wide` spans 2 cols. |
| **Metric** | On `.on-ink`; number is `--display` 700 with `#fff→--chrome` gradient text and a 34px `--accent` underline; counts up once in view. |
| **Pricing tier** | White card; `.pop` gets `--ink` border + `--shadow-card` + "MOST CHOSEN" `--accent` badge. Price swaps via `AnimatePresence` on the monthly/annual toggle; card uses `layout`. |
| **FAQ item** | Hairline rows; `+`/`−` drawn with pseudo-elements in `--brand`; body height-animated; one open at a time. |
| **Eyebrow** | `--display` uppercase, `0.2em` tracking, `--brand-deep` on light / `#8FD0FF` on dark, with a 26px leading rule. |

---

## 10. Accessibility

- `prefers-reduced-motion`: honoured via `MotionConfig reducedMotion="user"` +
  CSS fallback; verified — all reveal targets reach opacity 1, counters jump to
  final values, canvas removed.
- `:focus-visible` → 2px `--brand` outline, 3px offset.
- Hamburger has `aria-expanded` / `aria-label`; pricing toggle is
  `role="switch"` + `aria-checked`; FAQ triggers are `<button aria-expanded>`;
  decorative canvas / ticker are `aria-hidden`.
- Target minimum contrast AA for body and UI text (see §3).

---

## 11. Verification (run before shipping)

```bash
cd design-3
npm install
npm run optimize      # (re)generate hero.webp / brand-panel.webp / og.jpg / favicons
npm run build         # tsc -b && vite build — must be 0 errors
npm run preview
```

Checked with headless Chrome (default + `prefers-reduced-motion: reduce`):

- 0 console exceptions in both modes.
- All 41 reveal elements reach `opacity ≥ 0.95` after a scripted full-page scroll.
- Metric counters end at `41%` / `99.98%` / `3×` / `1 day`.
- `documentElement.scrollWidth === clientWidth` (no horizontal overflow).
- Optimised assets: `hero.webp` ≈ 75 kB, `brand-panel.webp` ≈ 41 kB, `og.jpg` ≈ 60 kB.
