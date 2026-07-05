# Minuteboo Works + Self-Hosted Assets + Node 22 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Merge the 11 minuteboo case studies into the portfolio's projects data, self-host every image asset (eliminating dead/fragile hotlinks), and pin Node 22.

**Architecture:** Data-and-assets-only change (Approach A from the approved design at `docs/plans/2026-07-04-minuteboo-works-assets-node-design.md`). Components already consume `image` as a plain URL string, so switching JSON data to local `/images/...` paths under `static/` requires zero component changes. A one-off migration script downloads remaining remote images and rewrites the JSON files.

**Tech Stack:** Gatsby 5 (static site), bun, plain JSON data files, bash/node for the one-off asset migration.

**Note on commits:** The repo owner commits only when asked. Skip the commit steps unless the user has said to commit; run everything else.

**Note on tests:** This repo has no test runner (`bun run test` is a placeholder), and the change is data + static assets. Each task ends with a concrete verification command instead of a unit test.

---

### Task 1: Pin Node 22

**Files:**
- Create: `.nvmrc`
- Modify: `package.json` (add `engines` after `"license"`)

**Step 1: Create `.nvmrc`**

File content (single line):

```
22
```

**Step 2: Add engines to `package.json`**

After the `"license": "MIT",` line, add:

```json
  "engines": {
    "node": ">=22"
  },
```

**Step 3: Verify**

Run: `node -e "const p=require('./package.json'); console.log(p.engines.node)" && cat .nvmrc`
Expected: `>=22` then `22`

**Step 4: Commit (only if user asked)**

```bash
git add .nvmrc package.json
git commit -m "chore: pin Node 22 via .nvmrc and engines field"
```

---

### Task 2: Copy minuteboo hero images into static/

**Files:**
- Create: `static/images/projects/` (11 hero images copied from `/Users/trujamal/Developer/minuteboo/public/work/`)

**Step 1: Copy the heroes**

```bash
mkdir -p static/images/projects static/images/brands static/images/designs static/images/photos
for f in kontrakk-hero.png avyo-hero.jpg rmrHalal-hero.svg derouinDelights-hero.jpg \
         anola-hero.png tokins-hero.png smallBytes-hero.png veveUSA-hero.png \
         clickTogether-hero.png crookedPine-hero.png brixBrine-hero.png; do
  cp "/Users/trujamal/Developer/minuteboo/public/work/$f" static/images/projects/
done
```

**Step 2: Verify**

Run: `ls static/images/projects | wc -l && file static/images/projects/* | grep -cE "image|SVG"`
Expected: `11` and `11` (every file is a valid image)

**Step 3: Commit (only if user asked)**

```bash
git add static/images/projects
git commit -m "feat: add self-hosted hero images for minuteboo case studies"
```

---

### Task 3: Rewrite projectsdata.json with the merged list

**Files:**
- Modify: `json_data/projectsdata.json` (full replacement)

**Step 1: Replace the file with exactly this content**

Minuteboo works first (newest→oldest), then the kept legacy projects. Legacy `image` URLs stay remote for now — Task 4 migrates them. Dropped: old `Clicktogether` entry (superseded by the Click Together case study) and `Angel Hack` (image 404s).

```json
{
    "cells": [
        {
            "project": "Kontrakk",
            "year": "2026",
            "link": "https://kontrakk.com",
            "image": "/images/projects/kontrakk-hero.png"
        },
        {
            "project": "Avyo",
            "year": "2026",
            "link": "https://avyo.io",
            "image": "/images/projects/avyo-hero.jpg"
        },
        {
            "project": "RMR Halal",
            "year": "2025",
            "link": "https://rmrhalal.com",
            "image": "/images/projects/rmrHalal-hero.svg"
        },
        {
            "project": "Derouin Delights",
            "year": "2025",
            "link": "https://derouindelights.com",
            "image": "/images/projects/derouinDelights-hero.jpg"
        },
        {
            "project": "Anola",
            "year": "2023",
            "link": "https://minuteboo.com/work/anola",
            "image": "/images/projects/anola-hero.png"
        },
        {
            "project": "Tokins",
            "year": "2022",
            "link": "https://minuteboo.com/work/tokins",
            "image": "/images/projects/tokins-hero.png"
        },
        {
            "project": "SmallBytes",
            "year": "2020",
            "link": "https://smallbytes.co",
            "image": "/images/projects/smallBytes-hero.png"
        },
        {
            "project": "Veve",
            "year": "2019",
            "link": "https://minuteboo.com/work/veveUSA",
            "image": "/images/projects/veveUSA-hero.png"
        },
        {
            "project": "Crooked Pine",
            "year": "2019",
            "link": "https://www.crookedpineogt.com",
            "image": "/images/projects/crookedPine-hero.png"
        },
        {
            "project": "Brix+Brine",
            "year": "2019",
            "link": "https://www.brixbrine.com",
            "image": "/images/projects/brixBrine-hero.png"
        },
        {
            "project": "Click Together",
            "year": "2018",
            "link": "https://minuteboo.com/work/clickTogether",
            "image": "/images/projects/clickTogether-hero.png"
        },
        {
            "project": "Minuteboo",
            "year": "2015-2019",
            "link": "//minuteboo.com",
            "image": "//cdn.dribbble.com/users/1769954/screenshots/6065346/toucan.png"
        },
        {
            "project": "Ailze",
            "year": "2019",
            "link": "//minuteboo.com",
            "image": "//cdn.dribbble.com/users/1401165/screenshots/4776034/attachments/1074736/background.png"
        },
        {
            "project": "Hack UTD",
            "year": "2019",
            "link": "//github.com/hack-utd",
            "image": "//cdn.dribbble.com/users/1055247/screenshots/4914713/appartment_rental.png"
        },
        {
            "project": "Hackrice 8",
            "year": "2018",
            "link": "//github.com/Helios-AR",
            "image": "//cdn.dribbble.com/users/642793/screenshots/7038768/media/ea7383f346a76e9e76624317a14af51f.png"
        },
        {
            "project": "Smart-Food Hackathon",
            "year": "2018",
            "link": "//github.com/trujamal/Smart-Food-Hackathon",
            "image": "//cdn.dribbble.com/users/1230681/screenshots/5679637/dustbowl_dribbble.jpg"
        },
        {
            "project": "Greg Lakomski",
            "year": "2018",
            "link": "//userweb.cs.txstate.edu/~gl1082/",
            "image": "//cl.ly/5c60282b3dc4/Image%202019-03-08%20at%203.24.13%20AM.png"
        },
        {
            "project": "YC",
            "year": "2016",
            "link": "//itunes.apple.com/ca/app/yc/id1135347962",
            "image": "//is2-ssl.mzstatic.com/image/thumb/Purple62/v4/62/14/b2/6214b25c-3f2a-136b-4d24-9737a10a9f21/pr_source.jpg/1200x630wa.jpg"
        },
        {
            "project": "Brainstorm",
            "year": "2015",
            "link": "//itunes.apple.com/ca/app/brainstorm-by-veve/id1105199000",
            "image": "//is4-ssl.mzstatic.com/image/thumb/Purple60/v4/dc/f0/ce/dcf0ce86-36d6-fecc-0e08-9aeffbd86eb3/mzl.dvgzkaql.jpg/1200x630wa.png"
        },
        {
            "project": "Feed",
            "year": "2016",
            "link": "//minuteboo.com",
            "image": "//cdn.dribbble.com/users/1123328/screenshots/5191264/photo-feed-mark-maynard_2x.jpg"
        }
    ]
}
```

**Step 2: Verify JSON validity and count**

Run: `node -e "const d=require('./json_data/projectsdata.json'); console.log(d.cells.length)"`
Expected: `20`

**Step 3: Commit (only if user asked)**

```bash
git add json_data/projectsdata.json
git commit -m "feat: merge minuteboo case studies into projects data"
```

---

### Task 4: Migrate all remaining remote images to static/ and rewrite JSON

**Files:**
- Create: `scripts/migrate-assets.mjs` (one-off migration script, kept in repo for provenance)
- Modify: `json_data/projectsdata.json`, `json_data/brandsdata.json`, `json_data/designdata.json`, `json_data/photosdata.json`, `json_data/portraitsdata.json`, `json_data/traveldata.json`
- Create: downloaded images under `static/images/{projects,brands,designs,photos}/`

**Step 1: Write the migration script**

Create `scripts/migrate-assets.mjs` with exactly:

```js
// One-off migration: download every remote "image" URL referenced in
// json_data/*.json into static/images/<bucket>/ and rewrite the JSON
// to local paths. Skips entries already pointing at /images/.
// A failed download leaves that entry untouched (no dead references).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const FILES = {
  "projectsdata.json": "projects",
  "brandsdata.json": "brands",
  "designdata.json": "designs",
  "photosdata.json": "photos",
  "portraitsdata.json": "photos",
  "traveldata.json": "photos",
};

const extFromType = (ct) =>
  ct.includes("svg") ? "svg"
  : ct.includes("png") ? "png"
  : ct.includes("gif") ? "gif"
  : ct.includes("webp") ? "webp"
  : "jpg";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

let failures = 0;
for (const [file, bucket] of Object.entries(FILES)) {
  const path = `json_data/${file}`;
  const data = JSON.parse(readFileSync(path, "utf8"));
  const stem = file.replace("data.json", "");
  mkdirSync(`static/images/${bucket}`, { recursive: true });

  data.cells.forEach((cell, i) => {
    const src = cell.image;
    if (!src || src.startsWith("/images/")) return;
    const url = src.startsWith("//") ? `https:${src}` : src;
    const base = slug(cell.project || cell.title || `${stem}-${i + 1}`) || `${stem}-${i + 1}`;
    try {
      const ct = execFileSync("curl", [
        "-sfL", "--max-time", "30", "-o", "/tmp/asset.bin",
        "-w", "%{content_type}", url,
      ]).toString();
      if (!ct.startsWith("image/")) throw new Error(`not an image: ${ct}`);
      const dest = `static/images/${bucket}/${base}.${extFromType(ct)}`;
      execFileSync("cp", ["/tmp/asset.bin", dest]);
      cell.image = dest.replace("static", "");
      console.log(`ok   ${dest}  <-  ${url}`);
    } catch (e) {
      failures++;
      console.error(`FAIL ${url}  (${e.message.split("\n")[0]}) — entry left unchanged`);
    }
  });
  writeFileSync(path, JSON.stringify(data, null, 4) + "\n");
}
console.log(failures ? `${failures} download(s) failed` : "all images migrated");
process.exit(failures ? 1 : 0);
```

**Step 2: Run it**

Run: `node scripts/migrate-assets.mjs`
Expected: `ok` line per image ending with `all images migrated`, exit 0. If any `FAIL` lines appear, retry once (transient network), then decide per-entry: drop the cell if the source is truly gone.

**Step 3: Verify no remote image URLs remain**

Run: `grep -nE '"image": *"(//|http)' json_data/*.json | grep -v jsonTemplate`
Expected: no output (exit 1).

Run: `file static/images/*/* | grep -vcE "image|SVG"`
Expected: `0`

**Step 4: Commit (only if user asked)**

```bash
git add scripts/migrate-assets.mjs json_data static/images
git commit -m "feat: self-host all portfolio image assets"
```

---

### Task 5: Full build verification

**Step 1: Production build**

Run: `set -a; source .env; set +a; bun run build`
Expected: exit 0, ends with the Gatsby page-generation summary.

**Step 2: Confirm images shipped and are referenced**

Run: `ls public/images/projects | wc -l && grep -c "/images/projects/" public/index.html`
Expected: image count ≥ 20; grep count ≥ 1 (projects section references local images).

**Step 3: Serve and spot-check**

Run: `bun run serve &` then `curl -s -o /dev/null -w "%{http_code}" http://localhost:9000/images/projects/kontrakk-hero.png`
Expected: `200`. Kill the serve process afterward.

**Step 4: Commit (only if user asked)**

```bash
git add -A
git commit -m "chore: verified build with self-hosted assets"
```
