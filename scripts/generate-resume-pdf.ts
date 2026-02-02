/**
 * Generates public/resume.pdf from lib/content.
 * Run from project root: npm run generate-resume
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const PDFDocument = require("pdfkit");
import {
  contact,
  heroSummary,
  coreSkills,
  toolsAndPractices,
  experienceItems,
  certifications,
  availability,
} from "../lib/content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PDFKitDocument = any;

function buildResume(doc: PDFKitDocument) {
  const margin = 50;
  const pageWidth = 595; // A4
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const moveY = (dy: number) => {
    y += dy;
  };

  doc.fontSize(20).font("Helvetica-Bold").text(contact.name, margin, y);
  moveY(22);
  doc.fontSize(11).font("Helvetica").fillColor("#0f62fe").text(contact.title, margin, y);
  moveY(16);
  doc.fillColor("black").fontSize(10).text(
    `${contact.location}  |  ${contact.email}  |  ${contact.phone}  |  LinkedIn: @${contact.linkedIn}`,
    margin,
    y,
    { width: contentWidth, lineBreak: true }
  );
  moveY(doc.heightOfString(contact.location, { width: contentWidth }) + 16);

  doc.fontSize(12).font("Helvetica-Bold").text("Professional summary", margin, y);
  moveY(16);
  doc.fontSize(10).font("Helvetica").text(heroSummary, margin, y, { width: contentWidth, lineBreak: true });
  moveY(doc.heightOfString(heroSummary, { width: contentWidth }) + 12);

  doc.fontSize(12).font("Helvetica-Bold").text("Core skills", margin, y);
  moveY(14);
  doc.fontSize(10).text(coreSkills.join(", "), margin, y, { width: contentWidth, lineBreak: true });
  moveY(doc.heightOfString(coreSkills.join(", "), { width: contentWidth }) + 10);

  doc.fontSize(12).font("Helvetica-Bold").text("Tools & practices", margin, y);
  moveY(14);
  doc.fontSize(10).text(toolsAndPractices.join(", "), margin, y, { width: contentWidth, lineBreak: true });
  moveY(doc.heightOfString(toolsAndPractices.join(", "), { width: contentWidth }) + 12);

  doc.fontSize(12).font("Helvetica-Bold").text("Selected experience", margin, y);
  moveY(14);
  for (const item of experienceItems) {
    doc.fontSize(10).font("Helvetica-Bold").text(item.title, margin, y);
    moveY(14);
    for (const bullet of item.bullets) {
      const line = `• ${bullet}`;
      doc.font("Helvetica").text(line, margin + 8, y, { width: contentWidth - 8, lineBreak: true });
      moveY(doc.heightOfString(line, { width: contentWidth - 8 }) + 4);
    }
    moveY(4);
  }

  doc.fontSize(12).font("Helvetica-Bold").text("Certifications", margin, y);
  moveY(14);
  for (const cert of certifications) {
    doc.fontSize(10).font("Helvetica").text(`• ${cert}`, margin, y, { width: contentWidth, lineBreak: true });
    moveY(14);
  }
  moveY(6);

  doc.fontSize(12).font("Helvetica-Bold").text("Availability", margin, y);
  moveY(14);
  doc.fontSize(10).font("Helvetica").text(availability, margin, y, { width: contentWidth });
}

async function main() {
  const doc = new PDFDocument({ margin: 0, size: "A4" });
  const outPath = path.join(root, "public", "resume.pdf");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);
  buildResume(doc);
  doc.end();
  await new Promise<void>((resolve, reject) => {
    stream.on("finish", () => resolve());
    stream.on("error", reject);
  });
  console.log("Generated", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
