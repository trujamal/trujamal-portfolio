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
