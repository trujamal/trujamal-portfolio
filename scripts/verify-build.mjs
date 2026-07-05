// Built-output checks for the glass redesign — run AFTER `bun run build`
// (`bun run test:build`). Fails if the redesign regresses: pages missing,
// hero/nav/form markers gone, or retired remote assets reappearing.
import { readFileSync, existsSync } from "node:fs";

const errors = [];

const page = path => {
  if (!existsSync(path)) {
    errors.push(`missing built page: ${path}`);
    return "";
  }
  return readFileSync(path, "utf8");
};

const expect = (html, path, marker, description) => {
  if (html && !html.includes(marker)) {
    errors.push(`${path}: missing ${description} (looked for "${marker}")`);
  }
};

const reject = (html, path, marker, description) => {
  if (html && html.includes(marker)) {
    errors.push(`${path}: contains ${description} ("${marker}")`);
  }
};

const index = page("public/index.html");
expect(index, "index", "Design", "hero headline");
expect(index, "index", "Selected Work", "work section");
expect(index, "index", "Kontrakk", "case-study row");
expect(index, "index", "Say hello", "contact CTA");
expect(index, "index", "/contact", "contact page link");

const contact = page("public/contact/index.html");
expect(contact, "contact", 'data-netlify="true"', "Netlify form registration");
expect(contact, "contact", 'name="contact"', "form name");
expect(contact, "contact", "me@trujamal.com", "real mailbox");

const photos = page("public/Photos/index.html");
expect(photos, "photos", "Photography", "photos headline");

const notFound = page("public/404.html");
expect(notFound, "404", "No es", "404 headline");
expect(notFound, "404", "silly gif", "original 404 copy");
expect(notFound, "404", "/images/404-error.gif", "self-hosted 404 gif");

// Selected Work must render newest-first (mirrors the page's comparator).
if (index) {
  const projects = JSON.parse(readFileSync("json_data/projectsdata.json", "utf8")).cells;
  const latest = c => Math.max(...(String(c.year).match(/\d{4}/g) || ["0"]).map(Number));
  const expected = [...projects].sort((a, b) => latest(b) - latest(a)).map(c => c.project);
  let last = -1;
  for (const name of expected) {
    const pos = index.indexOf(`>${name}<`);
    if (pos === -1) {
      errors.push(`index: work row missing: "${name}"`);
    } else if (pos < last) {
      errors.push(`index: work row out of order (newest-first): "${name}"`);
    } else {
      last = pos;
    }
  }
}

for (const [path, html] of [
  ["index", index],
  ["contact", contact],
  ["photos", photos],
  ["404", notFound],
]) {
  reject(html, path, "cdn.dribbble.com", "a remote Dribbble asset");
  reject(html, path, "cl.ly", "a defunct CloudApp asset");
}

if (errors.length) {
  console.error(`FAIL: ${errors.length} build problem(s)\n` + errors.map(e => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log("ok: built output contains redesign markers and no retired remote assets");
