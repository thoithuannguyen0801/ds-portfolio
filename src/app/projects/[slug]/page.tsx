import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SocialIcon } from "@/components/site/social-icons";

// Only the known project slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const paragraphs =
    project.details && project.details.length > 0
      ? project.details
      : [project.description];

  const hasLinks = Boolean(
    project.links?.demo || project.links?.repo || project.links?.report,
  );

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 glow opacity-50" />
      <Container className="py-12 lg:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge className="border-primary/30 bg-primary/10 text-primary">
            {project.category}
          </Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {hasLinks && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "md" })}
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                <SocialIcon name="github" className="h-4 w-4" />
                View code
              </a>
            )}
            {project.links?.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "md" })}
              >
                <FileText className="h-4 w-4" />
                Read report
              </a>
            )}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-card p-5 text-center"
              >
                <div className="text-2xl font-bold text-gradient">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-lg font-semibold">Overview</h2>
            <div className="mt-4 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <>
                <h2 className="mt-10 text-lg font-semibold">What I did</h2>
                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:pt-1">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Tech &amp; tools
              </h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
