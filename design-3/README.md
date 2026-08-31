# design-3 — Charlie Cloud

React + Vite + TypeScript + [Motion](https://motion.dev) landing page. Brand,
colour, type and motion tokens are documented in [`DESIGN.md`](DESIGN.md).

## Develop

```bash
npm install
npm run dev         # http://localhost:5173
npm run optimize    # regenerate assets/hero.webp, assets/brand-panel.webp,
                     # public/og.jpg, public/favicon-32.png, public/apple-touch-icon.png
                     # from the source images in assets/ (needs sharp)
npm run build        # tsc --noEmit && vite build -> dist/
npm run preview       # serve the production build locally
```

## CI

[`../.github/workflows/design-3-ci.yml`](../.github/workflows/design-3-ci.yml)
runs on every push/PR that touches `design-3/**`:

1. `npm ci`
2. `npm run build` — type-checks (`tsc --noEmit`) and produces the production
   bundle. Any TypeScript error or build failure fails the check.
3. Guards against stray `tsc`/`vite` artifacts being generated outside `dist/`.
4. Uploads `dist/` as a workflow artifact for 7 days (debugging only — this is
   **not** how the site gets deployed).

This is a pure quality gate — it does not deploy anything.

## CD

Deployment is handled by **Vercel's native GitHub integration**, not GitHub
Actions:

- Vercel project: `charliemagnes-projects/design-3`
  (`.vercel/project.json` — gitignored, regenerate with `vercel link --yes --project design-3`).
- **Root Directory** is set to `design-3`, so Vercel only rebuilds when files
  under this folder change, using the auto-detected Vite preset
  (`vite build`, output `dist`).
- **Production:** every push to `main` that touches `design-3/**` deploys to
  production automatically.
- **Preview:** every pull request gets its own preview deployment with a URL
  posted as a PR comment.
- No `VERCEL_TOKEN` / secrets are stored in this repo — auth is via the
  Vercel GitHub App installed on `charliemalicay-v2/web-animation-design--v1`.

To redeploy manually or inspect status locally (requires `vercel login` once):

```bash
npx vercel ls --scope charliemagnes-projects        # recent deployments
npx vercel inspect <deployment-url> --logs           # build logs
npx vercel deploy --prod --scope charliemagnes-projects   # force a manual deploy
```

See the repo root [`README.md`](../README.md) for how `design-3` relates to
`design-1` / `design-2`.
