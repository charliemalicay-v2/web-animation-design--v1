# Research — Motion Studio MCP & Free Motion MCP Alternatives

Research date: 2026-08-31
Context: follow-up to `plan-implementation.md` (analysis of Karthik Mulugu's "AI Design Pipeline" article).
Question: the article says Motion Studio MCP needs a paid **Motion+ token** — what are the free alternatives?

---

## TL;DR

1. **The article is already out of date.** The official Motion MCP (now shipped as
   the **Motion AI Kit**) has a **free tier that needs no token, no account, no
   config**. The `npx ... registry.tgz?package=motion-studio-mcp ... TOKEN=...`
   flow from the article is **officially retired**. So the best "free alternative"
   to Motion Studio MCP is *the current version of Motion Studio MCP itself*.
2. If you still want a fully third-party / offline option, the strongest is
   **`Abhishekrajpurohit/motion-dev-mcp`** (offline docs + codegen, run from
   source), with **`@orkait-ai/motion-dev-react-mcp`** (npm, MIT, React-only) as a
   lighter alternative.
3. For a different approach — *validating/compiling* animations rather than
   feeding docs — **MotionSpec** is a keyless open-core MCP that emits
   reduced-motion-safe, perf-budgeted GSAP/WAAPI code.
4. Generic docs MCPs (**Context7**, Ref, GitMCP) can serve motion.dev docs for
   free but give you plain doc retrieval, not Motion-specific tooling.

---

## 1. Official Motion AI Kit (formerly "Motion Studio MCP") — now free

Source: <https://motion.dev/docs/ai-kit> and <https://motion.dev/docs/ai-kit-install>

> "**Free · No token, no account, no configuration.** Animation best practices,
> documentation and example search, and CSS spring generation. Motion+ members
> *additionally* get MotionScore performance audits, plus example and Motion UI
> source in the editor."

From the install guide (verbatim):

> "Earlier versions of the kit configured a local MCP server with a Motion+ API
> key. **That flow is retired**: if your agent still lists a motion server that
> runs an npx command with a `TOKEN`, remove it. The kit now uses Motion's hosted
> MCP servers, and Motion+ access comes from signing in via your agent instead.
> Your API key is no longer needed."

### Install (current)

```bash
npx motion-ai            # prompts: project vs global; which agents (Claude Code,
                         # Cursor, Amp, OpenCode, Gemini CLI, Copilot, custom)
npx motion-ai@latest     # re-run at same scope to upgrade
```

Then activate the `motion` MCP server in your agent's MCP settings. A VS Code /
Open VSX "Motion" extension adds the real-time transition editor.

### Free vs Motion+ (one-time payment)

| Feature | Free | Motion+ |
|---|---|---|
| Latest Motion docs search (React / JS / Vue) | ✅ | ✅ |
| Example search + animation best practices | ✅ | ✅ |
| CSS spring / `linear()` easing generation (`/motion` skill) | ✅ | ✅ |
| Transition editor (visual easing/spring editing in chat/IDE) | ✅ | ✅ |
| **MotionScore for Agents** — grades Motion/CSS/**GSAP**/other animations by render cost, gives fixes | ❌ | ✅ |
| Source code of 430+ premium examples + Motion UI components in-editor | ❌ | ✅ |

Note: the `/motion-audit` capability described in the article == **MotionScore for
Agents**, which is the main thing still behind Motion+. It does grade **GSAP**
too, which is relevant to this repo.

### Registry note

`https://api.motion.dev/registry.tgz?package=motion-studio-mcp&version=latest`
still resolves (currently `motion-studio-mcp-6.2.0.tgz`) but is superseded by the
hosted MCP + `npx motion-ai` installer.

---

## 2. Third-party free Motion MCP servers

### 2a. `Abhishekrajpurohit/motion-dev-mcp` — best full-featured free/offline option

- Repo: <https://github.com/Abhishekrajpurohit/motion-dev-mcp> · TypeScript ·
  ~15★ · last push Aug 2025 · no explicit license file.
- **Offline** SQLite doc DB: 351 code examples (React 119 / JS 124 / Vue 108),
  26 doc pages, 63 component definitions, FTS5 full-text search (<50 ms).
- Tools: `get_motion_docs`, `search_motion_docs`, `get_component_api`,
  `get_examples_by_category`, `get_framework_guide`, `generate_motion_component`,
  `create_animation_sequence`, `convert_between_frameworks` (React↔JS↔Vue),
  `validate_motion_syntax`, `optimize_motion_code`.
- `validate_motion_syntax` / `optimize_motion_code` flag layout-triggering
  animations and missing `prefers-reduced-motion` — a lightweight, free stand-in
  for MotionScore.
- Install: clone → `npm install` → `npm run build` → `npm run rebuild` (build doc
  DB) → register `node ./dist/index.js` as an MCP server. No npm package; runs
  from source.
- Trade-offs: docs are a point-in-time snapshot (only as current as last
  `rebuild`); low maintenance activity; unclear license.

### 2b. `@orkait-ai/motion-dev-react-mcp` — lightweight, npm, MIT

- Repo: <https://github.com/orkait/motion-dev-react-mcp> · npm
  `@orkait-ai/motion-dev-react-mcp` v1.1.2 · MIT · created Mar 2026 · ~0★ ·
  ~100 downloads/month (very new / low adoption).
- **React only.** 33 APIs verified against `motiondivision/motion` v12 source.
  14 example categories incl. performance.
- Tools: `get_api`, `search_docs`, `get_examples`, `generate_animation`,
  `get_transitions`, `list_apis`.
- Install:
  ```bash
  claude mcp add motion-dev-react-mcp -- npx -y @orkait-ai/motion-dev-react-mcp
  ```
- Trade-offs: no perf-audit tool; single-maintainer, unproven; React-scoped.

### 2c. `PicardRaphael/mcp-server-documentation` — generic docs search (incl. Framer Motion)

- Repo: <https://github.com/PicardRaphael/mcp-server-documentation> · Python /
  FastMCP · ~13★ · last push Mar 2025.
- One `get_docs(query, library)` tool; DuckDuckGo + site-scoped fetch over
  motion.dev/docs (plus Next.js, Tailwind, LangChain, etc.). Handles
  `motion` / `framer` / `framer-motion` name variants.
- Trade-offs: depends on live search quality; no codegen, no validation, no
  examples DB; not Motion-specific.

---

## 3. Different approach — validate/compile instead of feed docs

### MotionSpec — `MasterPlayspots/motionspec`

- Repo: <https://github.com/MasterPlayspots/motionspec> · site
  <https://motionspec.dev> · npm `motionspec` · MIT (open-core) ·
  ~1,166 downloads/month · MCP Registry + Smithery listed.
- **Keyless MCP server**: `npx motionspec` /
  `claude mcp add motionspec -- npx motionspec`. Also a CLI compiler
  (`motion compile spec.json`).
- Model: LLM authors a **schema-validated JSON spec**; a **deterministic
  compiler** (no model) emits vanilla **GSAP** JS + CSS, *or* a dependency-free
  **WAAPI/CSS** lowering. Enforces `prefers-reduced-motion` fallback + a
  performance budget by construction; reports WCAG 2.2.2 / 2.3.3 pause-path
  candidates. Injection-proof, catalog-validated.
- Why it's interesting here: directly targets the failure modes this repo has
  been hardening in design-2 (reduced-motion regressions, layout-thrash,
  transform conflicts) and it outputs **GSAP**, matching design-3's likely stack.
- Trade-offs: not a docs/knowledge MCP — it constrains what the agent can
  produce to an approved catalog; smaller expressive range than free-form Motion.

---

## 4. Generic / adjacent options

| Option | Free? | Notes |
|---|---|---|
| **Context7** MCP (`@upstash/context7-mcp`) | Free tier | Indexes many libraries incl. `motion.dev`; good for "give me current API docs" but no examples DB, codegen, or perf audit. Not available in this session to verify the exact library ID. |
| **Ref** / **GitMCP** (`gitmcp.io/motiondivision/motion`) | Free | Turns a GitHub repo / doc site into an MCP; serves Motion source + docs. Generic retrieval only. |
| `PythonicVarun/motion-dev-mcp-poc` | Free | Benchmark harness comparing agents on Motion tasks — useful for evaluating any of the above, not a server to run. |
| GSAP MCPs (`bruzethegreat/gsap-master-mcp-server` ~121★, `bl00dclot/gsap-mcp`) | Free | If design-3 goes GSAP instead of Motion, these are the analogue — GSAP docs/patterns for the agent. |

---

## 5. Recommendation for design-3

- **Primary:** install the official **Motion AI Kit** via `npx motion-ai` and use
  the **free** tier (docs search, examples, best practices, CSS springs). It's
  first-party, hosted, always-current, and the article's paywall concern no
  longer applies.
- **Perf auditing (the `/motion-audit` equivalent):** MotionScore for Agents is
  the one genuinely paid piece (Motion+, one-time). Free substitutes:
  - `Abhishekrajpurohit/motion-dev-mcp` → `optimize_motion_code` /
    `validate_motion_syntax`, or
  - **MotionSpec** for deterministic, budget-enforced GSAP/WAAPI output, or
  - keep the existing in-repo headless-Chrome verification harness (already used
    for design-2 hardening) as the audit gate.
- **If design-3 stays on GSAP:** the Motion AI Kit still helps (MotionScore
  grades GSAP), but also evaluate `bruzethegreat/gsap-master-mcp-server` and
  MotionSpec's GSAP compiler path.
- **Offline / no-network constraint:** use `Abhishekrajpurohit/motion-dev-mcp`
  (self-contained SQLite doc DB).

---

## Sources

- Article: <https://medium.com/@karthikmulugu/the-ai-design-pipeline-nobody-told-you-about-motion-studio-mcp-google-stitch-claude-code-9ce15aef45b2>
- Motion AI Kit overview: <https://motion.dev/docs/ai-kit>
- Motion AI Kit install (token flow retired): <https://motion.dev/docs/ai-kit-install>
- <https://github.com/Abhishekrajpurohit/motion-dev-mcp>
- <https://github.com/orkait/motion-dev-react-mcp> · npm `@orkait-ai/motion-dev-react-mcp`
- <https://github.com/PicardRaphael/mcp-server-documentation>
- <https://github.com/MasterPlayspots/motionspec> · <https://motionspec.dev>
- GitHub search: `motion mcp`, `framer-motion mcp`, `motion.dev mcp`, `gsap mcp` (Aug 2026)

> Tooling note: `firecrawl_*`, `WebSearch`, `context7`, and `Skill` tools were not
> available in this session. Research was done via direct `curl` against
> motion.dev, the GitHub Search API, and the npm registry.
