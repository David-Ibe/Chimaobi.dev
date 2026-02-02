import Link from "next/link";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const { name, shortDescription, details, techTags, repoUrl, liveUrl, isPrivate } =
    project;

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {isPrivate && (
          <span className="shrink-0 rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            Private
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-600">{shortDescription}</p>
      {details.length > 0 && (
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
          {details.slice(0, featured ? 2 : 3).map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[#0f62fe]/10 px-2 py-0.5 text-xs font-medium text-[#0f62fe]"
          >
            {tag}
          </span>
        ))}
      </div>
      {(liveUrl || repoUrl) && (
        <span className="mt-3 inline-block text-sm font-medium text-[#0f62fe]">
          {liveUrl ? "View site →" : repoUrl?.includes("github.com") ? "View repo →" : "View site →"}
        </span>
      )}
    </>
  );

  const linkUrl = liveUrl || repoUrl;
  
  if (linkUrl && !isPrivate) {
    return (
      <Link
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {cardContent}
    </div>
  );
}
