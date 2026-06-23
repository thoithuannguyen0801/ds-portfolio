/**
 * Generates a minimal, VALID one-page placeholder PDF at public/resume.pdf.
 * Replace public/resume.pdf with your real CV — or re-run: `npm run resume:placeholder`.
 *
 * Keep all text ASCII so UTF-8 byte offsets match the written file (xref must be exact).
 */
import { mkdirSync, writeFileSync } from "node:fs";

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const content = `BT
/F1 22 Tf
72 720 Td
26 TL
(${esc("Thuan Nguyen")}) Tj
/F1 13 Tf
T* (${esc("Data Science Student")}) Tj
T* ( ) Tj
T* (${esc("This is a placeholder resume.")}) Tj
T* (${esc("Replace public/resume.pdf with your real CV.")}) Tj
ET`;

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((obj, i) => {
  offsets[i] = Buffer.byteLength(pdf);
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf);
const size = objects.length + 1;
pdf += `xref\n0 ${size}\n0000000000 65535 f \n`;
for (const off of offsets) {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${size} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

mkdirSync("public", { recursive: true });
writeFileSync("public/resume.pdf", pdf, "latin1");
console.log("Wrote public/resume.pdf (%d bytes)", Buffer.byteLength(pdf, "latin1"));
