import Link from "next/link";
import { contact } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Chimaobi David Ibe — email, phone, LinkedIn, or send a message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="mt-2 text-gray-600">
        Reach out via email, phone, LinkedIn, or the form below.
      </p>

      <section className="mt-8" aria-labelledby="contact-details-heading">
        <h2 id="contact-details-heading" className="text-xl font-semibold text-gray-900">
          Contact details
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:${contact.phone}`}
              className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
            >
              {contact.phone}
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <Link
              href={contact.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
            >
              @{contact.linkedIn}
            </Link>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <Link
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
            >
              @{contact.github}
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="text-xl font-semibold text-gray-900">
          Send a message
        </h2>
        <div className="mt-4 max-w-xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
