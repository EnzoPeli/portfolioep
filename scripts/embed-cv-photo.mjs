import fs from "node:fs";
import path from "node:path";

const htmlPath = path.join("cv-source", "Enzo-Pelizzari-CV.html");
const photoPath = path.join("public", "a.png");
const html = fs.readFileSync(htmlPath, "utf8");
const dataUri = `src="data:image/png;base64,${fs.readFileSync(photoPath).toString("base64")}"`;

const next = html.replace(
  /src="(?:\.\.\/a\.png|data:image\/png;base64,[^"]+)"/,
  dataUri,
);

if (next === html) {
  console.error("Portrait src not found");
  process.exit(1);
}

fs.writeFileSync(htmlPath, next);
console.log("embedded portrait,", fs.statSync(htmlPath).size, "bytes");
