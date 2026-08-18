import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";

const htmlPath = path.join("cv-source", "Enzo-Pelizzari-CV.html");
const pdfPath = path.join("public", "cv", "Enzo-Pelizzari-CV.pdf");

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`file://${path.resolve(htmlPath)}`, { waitUntil: "networkidle0" });
await page.emulateMediaType("print");

fs.mkdirSync(path.dirname(pdfPath), { recursive: true });
await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log("generated", pdfPath, fs.statSync(pdfPath).size, "bytes");
