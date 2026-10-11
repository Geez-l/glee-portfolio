// Copies the LaTeX CV into public/ so the "Download CV" buttons always serve the latest version.
// Runs before `npm run dev` and `npm run build`. The .tex is compiled with latexmk first,
// which skips the work when the PDF is already up to date. When the CV folder isn't present
// (e.g. on a CI/host build), the PDF already committed in public/ is kept as is.

import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cvDir = path.resolve(root, process.env.CV_DIR ?? "../curriculum-vitae");
const cvName = process.env.CV_NAME ?? "CV_gov";
const tex = path.join(cvDir, `${cvName}.tex`);
const pdf = path.join(cvDir, `${cvName}.pdf`);
const target = path.join(root, "public/assets/Pajarilla_resume.pdf");

if (!existsSync(tex) && !existsSync(pdf)) {
  console.warn(`[sync-cv] ${cvName} not found in ${cvDir}; keeping the existing CV PDF.`);
  process.exit(0);
}

if (existsSync(tex)) {
  try {
    execFileSync("latexmk", ["-pdf", "-interaction=nonstopmode", "-halt-on-error", `${cvName}.tex`], {
      cwd: cvDir,
      stdio: "ignore",
    });
  } catch {
    console.warn(`[sync-cv] Could not compile ${cvName}.tex (see ${cvName}.log); using the last PDF.`);
  }
}

if (!existsSync(pdf)) {
  console.warn(`[sync-cv] ${cvName}.pdf not found; keeping the existing CV PDF.`);
  process.exit(0);
}

copyFileSync(pdf, target);
console.log(`[sync-cv] Copied ${cvName}.pdf to public/assets/Pajarilla_resume.pdf`);
