# Design: Glass redesign (Portfolio.dc.html + Contact.dc.html)

Date: 2026-07-05
Status: Approved decisions from user; source mocks in Claude Design project
"Trujamal portfolio redesign" (df80d6b3-16e4-4499-8f3f-c6befae27b21).

## Decisions (user-approved)

1. **Play → /Photos**: nav "Play" links to the existing Photos page; the /About
   page is retired (its content lives in the homepage About section).
2. **Netlify Forms** for the contact form — real submissions, real success state.
3. **CSS glass only** — backdrop-filter blur/saturate; no liquidGL/html2canvas
   CDN scripts (mock loaded them from an unpinned GitHub CDN).
4. **Selected Work renders all 20 projects** from projectsdata.json, extended
   with a `tag` field (mock's tags for its 8; category-derived for the rest).

## Fidelity adjustments (production honesty)

- Email: `me@trujamal.com` (proven mailbox from the old site) instead of the
  mock's unverified `hello@trujamal.com`.
- Socials: real profiles from the old header — github.com/trujamal,
  soundcloud.com/trujamal, instagram.com/trujamal (mock had bare domains).
- Craft-card `+` buttons (decorative in the mock) toggle a per-card blurb:
  mock's inline copy for iOS/Photography, designdata.json `sub_text` for the
  other four. No dead buttons.
- Mock is desktop-only (1440): add breakpoints — craft grid 3→2→1, about
  2→1, contact 2→1, nav collapses to logo + Say hello on small screens.
- `prefers-reduced-motion` respected; visible focus states on all interactive
  elements.

## Architecture

- `src/components/GlassLayout.js` — shared shell used by every page:
  global styles, Lilac gradient wash, fixed glass nav, fixed glass pill.
  Replaces layout.js/header.js/Footer.js (old shell removed with the /About
  page and the now-unused homepage section components).
- `src/pages/index.js` — hero, craft grid (6 cards, inline SVG line art),
  Selected Work list (projectsdata.json), About section, black CTA footer card.
- `src/pages/contact.js` — new page: detail cards + Netlify form (name, email,
  topic chips, message) with success state.
- `src/pages/Photos.js`, `src/pages/404.js` — reskinned onto GlassLayout,
  content unchanged.
- `json_data/projectsdata.json` — add `tag` per entry; verify-data.mjs
  requires it.
- Contentful: gatsby-config source stays (env vars still required); the
  allContentfulLink query dies with layout.js — no remaining consumer.

## Out of scope

- liquidGL WebGL refraction, palette switcher UI (design-editor prop only).
- Converting design GIFs to video (GIFs no longer ship on the homepage at all).
