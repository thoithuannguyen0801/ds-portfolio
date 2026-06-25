import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Cpu,
  Database,
  Download,
  MapPin,
} from "lucide-react";
import {
  activity,
  highlights,
  profile,
  projects,
  socials,
  stats,
} from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BarChart } from "@/components/charts/bar-chart";
import { ProjectCard } from "@/components/projects/project-card";
import { SocialIcon } from "@/components/site/social-icons";

const highlightIcons = {
  brain: Cpu,
  chart: BarChart3,
  database: Database,
} as const;

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <Badge>{profile.availability}</Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display mt-5 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Hi, I&apos;m {profile.firstName}.
                <span className="mt-2 block">{profile.role}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/projects" className={buttonVariants({ size: "lg" })}>
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Get in touch
                </Link>
                <a
                  href={profile.resumeUrl}
                  download
                  className={buttonVariants({ variant: "ghost", size: "lg" })}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  {profile.location}
                </span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-grid h-9 w-9 place-items-center rounded-md border border-border bg-card transition-colors hover:border-foreground hover:text-foreground"
                    >
                      <SocialIcon name={s.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="font-label text-muted-foreground">
                    churn_model.py
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                  <code>
                    <span className="text-accent">import</span>{" "}
                    <span className="text-foreground">pandas</span>{" "}
                    <span className="text-accent">as</span>{" "}
                    <span className="text-foreground">pd</span>
                    {"\n"}
                    <span className="text-accent">from</span>{" "}
                    <span className="text-foreground">xgboost</span>{" "}
                    <span className="text-accent">import</span>{" "}
                    <span className="text-foreground">XGBClassifier</span>
                    {"\n\n"}
                    <span className="text-muted-foreground">
                      # train a model that flags churn early
                    </span>
                    {"\n"}
                    <span className="text-foreground">model</span> ={" "}
                    <span className="text-foreground">XGBClassifier</span>(
                    {"\n"}
                    {"    "}n_estimators=
                    <span className="text-foreground">400</span>,
                    {"\n"}
                    {"    "}max_depth=<span className="text-foreground">5</span>,
                    {"\n"}
                    )
                    {"\n"}
                    <span className="text-foreground">model</span>.
                    <span className="text-accent">fit</span>(X_train, y_train)
                    {"\n"}
                    <span className="text-foreground">auc</span> ={" "}
                    <span className="text-foreground">0.91</span>{" "}
                    <span className="text-muted-foreground"># ship it</span>
                  </code>
                </pre>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium">Monthly activity</p>
                  <span className="text-xs text-muted-foreground">
                    illustrative
                  </span>
                </div>
                <div className="h-24">
                  <BarChart data={activity} />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="border-y border-border bg-muted/30">
        <Container className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-8 text-center">
              <div className="font-display text-3xl sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* ---------------- Highlights ---------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What I do"
              title="Turning data into decisions"
              description="I work across the full data lifecycle — from messy raw data to models and visuals that drive real choices."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[h.icon as keyof typeof highlightIcons];
              return (
                <Reveal key={h.title} delay={i * 100}>
                  <div className="group h-full rounded-lg border border-border bg-card p-7 transition-colors hover:border-foreground/30">
                    <div className="inline-grid h-12 w-12 place-items-center border border-border bg-muted text-foreground">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display mt-5 text-xl">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {h.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- Featured projects ---------------- */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Selected work"
                title="Featured projects"
                description="A few projects I'm proud of. See the full list for more."
              />
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
              >
                All projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="pb-24">
        <Container>
          <div className="rounded-lg border border-border bg-card px-6 py-16 text-center">
            <h2 className="font-display mx-auto max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Looking for a data science intern or new grad?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I&apos;d love to hear about your team and the problems you&apos;re
              solving with data.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Contact me
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                More about me
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
