import Link from "next/link";
import { contact, heroSummary, coreSkills, getFeaturedProjects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Home",
  description:
    "Chimaobi David Ibe — Software Engineer and Full‑stack Developer. Scalable APIs, Python (FastAPI/Flask), Node.js, Docker, Kubernetes. Lagos, Nigeria.",
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-16" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {contact.name}
        </h1>
        <p className="mt-2 text-xl font-medium text-[#0f62fe]">{contact.title}</p>
        <p className="mt-2 text-gray-600">{contact.location}</p>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">{heroSummary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center rounded-lg bg-[#0f62fe] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0043ce] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2"
          >
            View resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="mb-4 text-2xl font-bold text-gray-900">
          Core skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="projects-heading">
        <div className="flex items-center justify-between">
          <h2 id="projects-heading" className="text-2xl font-bold text-gray-900">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#0f62fe] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 rounded"
          >
            View all →
          </Link>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2" role="list">
          {featuredProjects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} featured />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
