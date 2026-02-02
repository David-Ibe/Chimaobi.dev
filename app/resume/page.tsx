import Link from "next/link";
import {
  contact,
  heroSummary,
  technicalSkills,
  experienceItems,
  education,
  certifications,
  availability,
  additionalInfo,
} from "@/lib/content";

export const metadata = {
  title: "Resume",
  description:
    "Chimaobi David Ibe — Software Engineer and Full‑stack Developer. Resume and experience summary.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
        <Link
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-lg bg-[#0f62fe] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0043ce] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2"
        >
          Download resume (PDF)
        </Link>
      </div>

      <article className="prose prose-gray max-w-none">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{contact.name}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {contact.location} | {contact.email} | {contact.formattedPhone} |
            LinkedIn: @{contact.linkedIn}
          </p>
        </header>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-gray-700">{heroSummary}</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Technical Skills
          </h3>
          <div className="mt-3 space-y-4">
            {technicalSkills.map((group, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold text-gray-800">
                  {group.category}
                </h4>
                <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-gray-700">
                  {group.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Experience
          </h3>
          <ul className="mt-3 list-none space-y-4">
            {experienceItems.map((item, i) => (
              <li key={i}>
                <h4 className="font-medium text-gray-900">{item.title}</h4>
                <ul className="mt-1 list-inside list-disc space-y-1 text-gray-700">
                  {item.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Education & Certifications
          </h3>
          <div className="mt-3 space-y-2">
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Education</h4>
              <p className="text-gray-700">{education}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Certifications
              </h4>
              <ul className="mt-1 list-inside list-disc space-y-0.5 text-gray-700">
                {certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Availability</h3>
          <p className="text-gray-700">{availability}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900">
            Additional Information
          </h3>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-gray-700">
            {additionalInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <div className="mt-10">
        <Link
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-lg bg-[#0f62fe] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0043ce] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2"
        >
          Download resume (PDF)
        </Link>
      </div>
    </div>
  );
}
