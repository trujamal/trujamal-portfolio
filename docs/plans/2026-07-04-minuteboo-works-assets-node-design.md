# Design: Minuteboo works integration, self-hosted assets, Node pinning

Date: 2026-07-04
Status: Approved (Approach A — data + assets only, no component changes)

## Goal

1. Bring the recent tech works from the minuteboo repo (`~/Developer/minuteboo/src/data/caseStudies.ts`) into the portfolio's projects section.
2. Eliminate broken/fragile image assets by self-hosting everything.
3. Pin Node 22 across local and CI/deploy.

## Context (audit findings)

- Portfolio projects data (`json_data/projectsdata.json`) is stale (2015–2019) with one dead image (Angel Hack, pbs.twimg.com → 404).
- 30+ images hotlink `cl.ly` (CloudApp, defunct — still redirecting to a legacy CDN) and `cdn.dribbble.com`. Working today, fragile.
- Minuteboo repo has 11 case studies with self-hosted images in `minuteboo/public/work/` (36 files). minuteboo.com is live with `/work/:id` routes.
- Netlify builds on Node 22; local machine runs 22.22.0; nothing pins the version.
- Components consume `image` as a plain URL string (`content: url(...)` / `<img src>`), so local `/images/...` paths need no component changes.

## Design

### 1. Projects data — merged list, newest first

Map each minuteboo case study to the existing `{project, year, link, image}` cell shape.

- `link` = client website when it exists (kontrakk.com, avyo.io, smallbytes.co, rmrhalal.com, derouindelights.com, crookedpineogt.com, brixbrine.com), otherwise `https://minuteboo.com/work/<id>` (anola, tokins, veveUSA, clickTogether).
- `image` = the case study's hero image, copied locally.
- Keep old entries: Minuteboo, Brainstorm, YC, Feed, Smart-Food Hackathon, Hackrice 8, Greg Lakomski, Hack UTD, Ailze.
- Drop: old Clicktogether entry (superseded by the Click Together case study) and Angel Hack (dead image, no replacement).

### 2. Assets — self-host everything

- Copy 11 hero images from `minuteboo/public/work/` → `static/images/projects/`.
- Download all currently-working remote images referenced by `json_data/*.json` into `static/images/{projects,brands,designs,photos}/`.
- Rewrite all data files (`projectsdata`, `brandsdata`, `designdata`, `photosdata`, `portraitsdata`, `traveldata`) to local `/images/...` paths. Zero remote image references remain.
- If a download fails, the entry keeps a working fallback or is dropped — no dead references ship.

### 3. Node pinning

- `.nvmrc` → `22`
- `package.json` → `"engines": { "node": ">=22" }`
- `netlify.toml` stays `NODE_VERSION = "22"`.

## Verification

- `bun run build` exits 0 (Contentful vars sourced from `.env`).
- `grep` confirms no `cl.ly`, `dribbble`, `mzstatic`, `twimg`, or `unsplash` URLs remain in `json_data/`.
- Downloaded files are valid images (non-zero size, correct type).
- Built `public/` contains the images and pages reference them.

## Out of scope

- Per-project case-study detail pages (minuteboo.com serves those).
- Component/layout redesign, Contentful changes, gatsby-plugin-manifest cleanup.
