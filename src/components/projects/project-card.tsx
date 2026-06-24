import Link from "next/link";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { SocialIcon } from "@/components/site/social-icons";
import { cn } from "@/lib/utils";

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge className="border-primary/30 bg-primary/10 text-primary">
          {project.category}
        </Badge>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors after:absolute after:inset-0 hover:text-primary"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-4 flex gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex-1 rounded-lg border border-border bg-muted/40 px-2 py-2 text-center"
            >
              <div className="text-sm font-semibold text-foreground">
                {m.value}
              </div>
              <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className={cn(linkClass, "font-semibold text-foreground")}
        >
          View details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <SocialIcon name="github" className="h-4 w-4" />
            Code
          </a>
        )}
        {project.links?.report && (
          <a
            href={project.links.report}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <FileText className="h-4 w-4" />
            Report
          </a>
        )}
      </div>
    </article>
  );
}
