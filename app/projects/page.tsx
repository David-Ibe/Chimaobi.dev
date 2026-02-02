import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects by Chimaobi David Ibe: movie discovery (ask-obi), corporate sites, fintech MVPs, ML emotion analytics, enterprise dashboards.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="mt-2 text-gray-600">
        Selected full‑stack and backend projects. Public repos linked where
        available.
      </p>
      <ul
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        role="list"
      >
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
