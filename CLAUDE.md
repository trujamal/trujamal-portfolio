# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site (trujamal.com) built with Gatsby 5 + React 18, deployed to Netlify. Package management and builds use **bun** (see `bun.lock` and `netlify.toml`), even though `package.json` scripts reference npm-style commands.

## Commands

```sh
bun install          # install dependencies
bun run develop      # dev server at http://localhost:8000 (GraphiQL at /___graphql)
bun run build        # production build → public/ (run this to verify changes)
bun run serve        # serve the production build locally
```

There are no tests and no linter configured (`bun run test` is a placeholder).

### Environment variables

`gatsby-config.js` requires `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` for the `gatsby-source-contentful` plugin — builds fail without them. A `.env` file exists at the repo root, but nothing loads it explicitly (Gatsby only auto-loads `.env.development` / `.env.production`), so export them before building (verified working: `set -a; source .env; set +a; bun run build`). Never hardcode these credentials in `gatsby-config.js` (they were removed from git history once already).

## Architecture

### Two content sources

1. **Local JSON** in `json_data/` (`designdata.json`, `projectsdata.json`, `brandsdata.json`, `photosdata.json`, `portraitsdata.json`, `traveldata.json`) — imported directly into components with `import data from '../../json_data/...'`, then mapped to render cards/cells. `jsonTemplate.json` is the shape reference for new entries. Adding portfolio content means editing these files, not the components.
2. **Contentful CMS** — sourced at build time; `allContentfulLink` entries are queried via `StaticQuery` in `src/components/layout.js` (used for header/footer links).

### Structure

- `src/pages/` — Gatsby file-based routing. Filenames are capitalized, so routes are `/About` and `/Photos` (case-sensitive). Every page wraps content in `<Layout>` and includes `<SEO>`.
- `src/components/` — one file per component. Styling is **styled-components**, defined inline at the top of each component file (no separate CSS modules except global `layout.css` / `Header.css`). SSR for styled-components is handled by `gatsby-plugin-styled-components` — keep that plugin enabled or builds get class-name mismatches.
- `gatsby-node.js` is empty — no programmatic page creation.
- `functions/stripe-charge.js` — Netlify serverless function; currently a stub (logs only). `react-stripe-checkout` is a dependency but checkout is not wired up.
- SVGs under `src/images/` are imported as React components via `gatsby-plugin-react-svg`.

### Deployment

Netlify runs `bun run build` (Node 22, latest bun) and publishes `public/`; serverless functions deploy from `functions/` (`netlify.toml`).

## Gotchas

- `gatsby-plugin-offline` is intentionally commented out in `gatsby-config.js`. If re-enabled, it must be the **last** plugin in the array, and it can cause aggressive stale-cache behavior during development.
- The Photos page (`src/pages/Photos.js`) imports `react-dom` and manipulates sections for its category filter — test all three photo categories (Urban/Portraits/Travel) if you touch it.
