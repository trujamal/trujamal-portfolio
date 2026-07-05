// Data-integrity checks for json_data/*.json — run via `bun run test`.
// Fails if portfolio data regresses to remote image hotlinks, references
// missing image files, or reintroduces known-dead link hosts.
import { readFileSync, existsSync } from "node:fs";

const DATA_FILES = [
  "projectsdata.json",
  "brandsdata.json",
  "designdata.json",
  "photosdata.json",
  "portraitsdata.json",
  "traveldata.json",
];

// Hosts that are defunct or previously served this repo's dead links.
const DEAD_LINK_HOSTS = ["cl.ly", "itunes.apple.com", "pbs.twimg.com", "userweb.cs.txstate.edu"];

// Case studies imported from the minuteboo repo — must all be present.
const REQUIRED_PROJECTS = [
  "Kontrakk", "Avyo", "RMR Halal", "Derouin Delights", "Anola", "Tokins",
  "SmallBytes", "Veve", "Crooked Pine", "Brix+Brine", "Click Together",
];

const errors = [];

for (const file of DATA_FILES) {
  let data;
  try {
    data = JSON.parse(readFileSync(`json_data/${file}`, "utf8"));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  if (!Array.isArray(data.cells) || data.cells.length === 0) {
    errors.push(`${file}: missing or empty cells array`);
    continue;
  }
  data.cells.forEach((cell, i) => {
    const where = `${file} cells[${i}]`;
    if (!cell.image || !cell.image.startsWith("/images/")) {
      errors.push(`${where}: image must be a local /images/ path, got "${cell.image}"`);
    } else if (!existsSync(`static${cell.image}`)) {
      errors.push(`${where}: image file missing on disk: static${cell.image}`);
    }
    // Wayback Machine snapshots of dead hosts are allowed.
    if (cell.link && !cell.link.includes("web.archive.org") && DEAD_LINK_HOSTS.some((h) => cell.link.includes(h))) {
      errors.push(`${where}: link points at a dead host: ${cell.link}`);
    }
  });
}

// Pin the minuteboo works merge: all 11 case studies present with full fields.
try {
  const projects = JSON.parse(readFileSync("json_data/projectsdata.json", "utf8")).cells;
  for (const name of REQUIRED_PROJECTS) {
    if (!projects.some((c) => c.project === name)) {
      errors.push(`projectsdata.json: required case study missing: "${name}"`);
    }
  }
  projects.forEach((cell, i) => {
    for (const field of ["project", "year", "link"]) {
      if (!cell[field]) errors.push(`projectsdata.json cells[${i}]: missing ${field}`);
    }
  });
} catch {
  // parse failure already reported above
}

if (errors.length) {
  console.error(`FAIL: ${errors.length} data problem(s)\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`ok: ${DATA_FILES.length} data files valid, all images local and present, no dead-host links`);
