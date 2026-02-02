import Link from "next/link";
import { contact } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          © {year} {contact.name}. All rights reserved.
        </p>
        <p className="mt-1 text-center text-sm text-gray-600">
          <Link
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
          >
            GitHub
          </Link>
          <span className="mx-2 text-gray-300" aria-hidden="true">
            ·
          </span>
          <Link
            href={contact.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
          >
            LinkedIn
          </Link>
        </p>
      </div>
    </footer>
  );
}
