# Plan & Implementation — design-3

Source article analysis: **"The AI Design Pipeline Nobody Told You About: Motion Studio MCP + Google Stitch + Claude Code"**
Karthik Mulugu · Medium · ~5 min read · published May 10, 2026
URL: https://medium.com/@karthikmulugu/the-ai-design-pipeline-nobody-told-you-about-motion-studio-mcp-google-stitch-claude-code-9ce15aef45b2

---

## 1. Core thesis

A three-tool pipeline takes you from idea → deployed website with a consistent
design system and correct animations, eliminating design-handoff meetings:

1. **Google Stitch** — design the UI, produce a `DESIGN.md`
2. **Motion Studio MCP** — give Claude Code live Motion (formerly Framer Motion) docs + 330+ examples
3. **Claude Code** — build the production site using both

> Design in Stitch. Animate with Motion. Build with Claude. Ship everything.

---

## 2. The two problems it solves

| Problem | Symptom | Fix |
|---|---|---|
| AI writes bad animation code | Imports `framer-motion` instead of `motion/react`, guesses easing curves, hallucinates props, unaware of last 6 months of API changes | Motion Studio MCP feeds current docs + real examples |
| AI UI is inconsistent across sessions | Every screen looks designed by a different person; colors/spacing drift | `DESIGN.md` persists tokens, type scale, spacing as an agent-readable file |

---

## 3. Part 1 — Google Stitch (skill-driven)

- Free AI design tool from Google Labs (`stitch.withgoogle.com`), no waitlist.
- Differentiator: alongside the visual mockup it produces a **`DESIGN.md`** — a
  structured Markdown file capturing color tokens, typography scale, spacing
  rules, and component patterns. (The article calls it `design.md`; the Stitch
  skills emit `DESIGN.md` / `.stitch/DESIGN.md`. Pick one casing and keep it
  consistent in the repo.)
- **Do not drive Stitch by hand.** Use the installed Stitch skills so prompt
  crafting, token setup, generation, and `DESIGN.md` extraction are repeatable
  and version-controlled.

### 3.1 Skills used in Part 1

| Step | Skill | Purpose |
|---|---|---|
| 1 | **`enhance-prompt`** | Turn a rough one-line product idea into a polished, Stitch-optimized prompt (platform, page type, UI/UX keywords, layout, structure). Consults the official Stitch Effective Prompting Guide. |
| 2 | **`stitch::manage-design-system`** | Create the project's design system (colors, fonts, roundness) in Stitch *before* generating screens, so tokens are applied at project level. Once it exists, omit color/font wording from later prompts. |
| 3 | **`stitch::generate-design`** | Generate the screens from the enhanced prompt via Stitch MCP. Has its own built-in prompt-enhancement pipeline (project lookup, design-system check, variants). |
| 4 | **`design-md`** (or **`stitch::extract-design-md`**) | Synthesize the semantic design system into `DESIGN.md`. Use `design-md` to work from generated Stitch screens / rendered HTML; use `stitch::extract-design-md` to reverse-engineer it from existing frontend source code instead. |
| — | **`stitch::upload-to-stitch`** | Only if MCP calls truncate on base64 limits — uploads local assets / HTML / markdown to the Stitch project via script. |
| — | **`stitch-loop`** | Optional: autonomous baton-passing loop to build the whole site page-by-page from `.stitch/DESIGN.md` + `.stitch/SITE.md`. |

### 3.2 Workflow

1. **Craft the prompt with `enhance-prompt`.**
   Rough input, e.g. *"A dark-themed SaaS analytics dashboard. Slate/zinc
   palette. Electric blue accent. Sharp editorial typography. Think Linear
   meets Vercel."* → skill returns a structured, keyword-rich Stitch prompt.
2. **Set up tokens with `stitch::manage-design-system`.**
   Create / confirm the design system for the project (via `list_projects` /
   `list_design_systems`). This is the source of truth for colors, fonts,
   roundness.
3. **Generate screens with `stitch::generate-design`.**
   Feed the enhanced prompt; let the skill resolve `projectId`, apply the
   design system, and produce the screens (plus variants if useful).
4. **Produce `DESIGN.md` with the `design-md` skill.**
   Point it at the generated Stitch project / screens; it synthesizes tokens,
   typography, spacing, and component patterns into `DESIGN.md`.
5. **Commit `DESIGN.md` to the design-3 root** (or `.stitch/DESIGN.md` if using
   `stitch-loop`). It is now version-controlled, agent-readable, and persistent
   across every Claude Code session — the input to Part 3.

---

## 4. Part 2 — Motion Studio MCP

- Rationale: LLMs can't *see* timing/easing, so they guess. The MCP gives Claude
  the full up-to-date Motion documentation + 330+ working examples.
- **Update (verified 2026-08-31):** the article's paid-`TOKEN` install is
  **retired**. Motion Studio MCP now ships as the **Motion AI Kit** with a
  **free tier — no token, no account, no config**. See
  `research-motion-mcp-alternatives.md` for the full breakdown.

### Install (current)

```bash
npx motion-ai          # prompts: project vs global; which agents
                       # (Claude Code, Cursor, Amp, OpenCode, Gemini CLI, Copilot)
npx motion-ai@latest   # re-run at same scope to upgrade
```

Then activate the `motion` MCP server in the agent's MCP settings.

### Legacy install from the article (retired — do not use)

```json
{
  "mcpServers": {
    "motion": {
      "command": "npx",
      "args": ["-y", "https://api.motion.dev/registry.tgz?package=motion-studio-mcp&version=latest"],
      "env": { "TOKEN": "YOUR_MOTION_PLUS_TOKEN" }
    }
  }
}
```

### Free vs Motion+ (one-time payment)

| Capability | Free | Motion+ |
|---|---|---|
| Latest Motion docs search (React / JS / Vue) | ✅ | ✅ |
| Example search + animation best practices | ✅ | ✅ |
| CSS spring / `linear()` easing generation (`/motion` skill) | ✅ | ✅ |
| Transition editor (visual easing/spring editing in chat/IDE) | ✅ | ✅ |
| **MotionScore for Agents** — grades Motion/CSS/**GSAP**/other animations by render cost + gives fixes | ❌ | ✅ |
| Source of 430+ premium examples + Motion UI components in-editor | ❌ | ✅ |

The `/motion-audit` capability in the article == **MotionScore for Agents**,
which is the main thing still behind Motion+. It also grades **GSAP**.

---

## 5. Part 3 — Wiring it together in Claude Code

Kickoff prompt (adapted from the article — note `DESIGN.md`):

```
Read DESIGN.md first. That is the design system for this entire project.
Every component you create must use those exact color tokens, typography
scale, and spacing values.

Build a full SaaS landing page:
- Hero with staggered word entrance (Motion whileInView + staggerChildren)
- Feature bento grid with hover lift and glow (use spring physics, not linear)
- Pricing cards with AnimatePresence toggle between annual/monthly
- Sticky nav with scroll-linked background opacity (useScroll + useTransform)
- Footer with staggered link entrance

For every animation: check the Motion MCP for the correct API.
Do not guess import paths or prop names. Use motion/react, not framer-motion.
Run the MotionScore / animation audit when done and fix any F-tier animations.
```

### Reference output — scroll-linked navbar

```tsx
import { motion, useScroll, useTransform } from "motion/react"

export function Navbar() {
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(9,9,11,0)", "rgba(9,9,11,0.9)"]
  )
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.nav
      style={{ backgroundColor: background }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      {/* nav content */}
    </motion.nav>
  )
}
```

Correct import, correct API, physically sensible values, no deprecated props.

---

## 6. The complete stack

| Tool | Role | Cost |
|---|---|---|
| Google Stitch (+ `stitch::*` / `design-md` / `enhance-prompt` skills) | Generate UI + produce `DESIGN.md` | Free |
| Motion AI Kit (Motion Studio MCP) | Live animation docs + examples + CSS springs | Free (base) · Motion+ one-time for MotionScore audits |
| Claude Code | Build everything | Claude Pro/Max |

**What one session produces (SaaS landing page):**

- Navbar that fades in on scroll with a spring-eased border
- Hero headline that staggers word-by-word on viewport entry
- Feature grid where cards lift and glow on hover with physics-based spring
- Pricing section with monthly/annual toggle via `AnimatePresence` + `layout` prop
- Every color token exactly matching the Stitch `DESIGN.md`
- Animation audit score: S-tier animations, 0 F-tier

---

## 7. Assessment

### Strengths

- Identifies two real, well-known failure modes (stale `framer-motion`
  knowledge; cross-session UI drift).
- The "design system as a small, plain-Markdown, context-window-sized file"
  insight is genuinely useful and tool-agnostic.
- Grading animations by compositor vs. layout cost is sound engineering.

### Caveats

- Advocacy/tutorial piece, lightly promotional for three products. Independent
  benchmarks, failure cases, and comparisons to alternatives (Storybook +
  design tokens, v0, Figma Dev Mode + MCP, Tailwind config as token source) are
  absent.
- The article's Motion+ paywall claim is **out of date** — base MCP is now free.
- `DESIGN.md` is not a real standard — consistency still depends on the agent
  honoring it every session.
- The "0 F-tier / 4 S-tier" and "no hallucinated imports" claims are anecdotal
  (one author-run session).

---

## 8. Applicability to design-3

The transferable pattern for this repo's animation prototyping:

1. **Commit a design-token file** (`DESIGN.md`) at the design-3 root, generated
   via the Stitch skills, and instruct every build session to read it first.
2. **Attach a docs-backed MCP** for the animation library in use so the agent
   works against current APIs rather than training data. (design-3 currently
   uses GSAP/ScrollTrigger patterns carried over from design-2; the Motion AI
   Kit's MotionScore also grades GSAP.)
3. **Add an automated animation audit** that flags layout-thrashing (F-tier)
   animations and favors compositor-only transforms — the same class of issue
   hardened in design-2 (transform conflicts, `prefers-reduced-motion`,
   compositor-friendly tweens, print-media resets).

### Proposed next steps for design-3

- [ ] Run `enhance-prompt` to craft the design-3 Stitch prompt.
- [ ] Run `stitch::manage-design-system` to create the token set in Stitch.
- [ ] Run `stitch::generate-design` to generate the screens.
- [ ] Run `design-md` to produce `design-3/DESIGN.md`; commit it.
- [ ] Install the Motion AI Kit (`npx motion-ai`) or pick a free alternative
      from `research-motion-mcp-alternatives.md`.
- [ ] Decide animation library for design-3 (GSAP carry-over vs. Motion).
- [ ] Draft the Part 3 kickoff build prompt referencing `DESIGN.md` + MCP.
- [ ] Define an audit checklist (S–F tier) and run it before each commit.
