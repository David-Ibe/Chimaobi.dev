/**
 * Generates public/resume.pdf from scripts/resume-content.json.
 * Run from project root: npm run generate-resume
 * (Keep resume-content.json in sync with lib/content.ts when resume content changes.)
 */
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const root = path.resolve(__dirname, "..");
const content = require("./resume-content.json");

const {
  contact,
  heroSummary,
  technicalSkills,
  experienceItems,
  education,
  certifications,
  availability,
  additionalInfo,
} = content;

const margin = 50;
const pageWidth = 595;
const pageHeight = 842;
const contentWidth = pageWidth - margin * 2;
const bottomMargin = 50;

function buildResume(doc) {
  let y = margin;

  function checkPage() {
    if (y > pageHeight - bottomMargin) {
      doc.addPage();
      y = margin;
    }
  }

  function drawText(text, opts = {}) {
    checkPage();
    doc.text(text, margin, y, { width: opts.width || contentWidth, lineBreak: true, ...opts });
    y = doc.y + (opts.spaceAfter ?? 12);
  }

  // Header: name, then one line
  doc.fontSize(20).font("Helvetica-Bold").text(contact.name, margin, y);
  y = doc.y + 12;
  doc.fontSize(10).font("Helvetica").text(
    `${contact.location} | ${contact.email} | ${contact.formattedPhone} | LinkedIn: @${contact.linkedIn}`,
    margin,
    y,
    { width: contentWidth, lineBreak: true }
  );
  y = doc.y + 14;

  // Professional Summary
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Professional Summary", margin, y);
  y = doc.y + 14;
  drawText(heroSummary, { spaceAfter: 12 });

  // Technical Skills
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Technical Skills", margin, y);
  y = doc.y + 14;
  for (const group of technicalSkills) {
    checkPage();
    doc.fontSize(10).font("Helvetica-Bold").text(group.category, margin, y);
    y = doc.y + 8;
    for (const item of group.items) {
      checkPage();
      doc.font("Helvetica").text("• " + item, margin + 8, y, { width: contentWidth - 8, lineBreak: true });
      y = doc.y + 2;
    }
    y += 4;
  }
  y += 4;

  // Professional Experience
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Professional Experience", margin, y);
  y = doc.y + 14;
  for (const item of experienceItems) {
    checkPage();
    doc.fontSize(10).font("Helvetica-Bold").text(item.title, margin, y, { width: contentWidth, lineBreak: true });
    y = doc.y + 8;
    for (const bullet of item.bullets) {
      checkPage();
      const line = "• " + bullet;
      doc.font("Helvetica").text(line, margin + 8, y, { width: contentWidth - 8, lineBreak: true });
      y = doc.y + 3;
    }
    y += 6;
  }

  // Education & Certifications
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Education & Certifications", margin, y);
  y = doc.y + 14;
  doc.fontSize(10).font("Helvetica-Bold").text("Education", margin, y);
  y = doc.y + 10;
  doc.font("Helvetica").text(education, margin, y, { width: contentWidth });
  y = doc.y + 10;
  checkPage();
  doc.fontSize(10).font("Helvetica-Bold").text("Certifications", margin, y);
  y = doc.y + 10;
  for (const cert of certifications) {
    checkPage();
    doc.font("Helvetica").text("• " + cert, margin, y, { width: contentWidth, lineBreak: true });
    y = doc.y + 4;
  }
  y += 8;

  // Availability
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Availability", margin, y);
  y = doc.y + 14;
  doc.fontSize(10).font("Helvetica").text(availability, margin, y, { width: contentWidth, lineBreak: true });
  y = doc.y + 12;

  // Additional Information
  checkPage();
  doc.fontSize(12).font("Helvetica-Bold").text("Additional Information", margin, y);
  y = doc.y + 14;
  for (const item of additionalInfo) {
    checkPage();
    doc.fontSize(10).font("Helvetica").text("• " + item, margin, y, { width: contentWidth, lineBreak: true });
    y = doc.y + 4;
  }
}

const outPath = path.join(root, "public", "resume.pdf");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const doc = new PDFDocument({ margin: 0, size: "A4" });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);
buildResume(doc);
doc.end();
stream.on("finish", () => {
  console.log("Generated", outPath);
});
stream.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
