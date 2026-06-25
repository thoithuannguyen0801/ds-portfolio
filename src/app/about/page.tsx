import type { Metadata } from "next";
import {
  Briefcase,
  Check,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  aboutParagraphs,
  activity,
  education,
  experience,
  profile,
  skillRadar,
  skills,
  socials,
  type TimelineItem,
} from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { RadarChart } from "@/components/charts/radar-chart";
import { BarChart } from "@/components/charts/bar-chart";
import { SkillBars } from "@/components/charts/skill-bars";
import { SocialIcon } from "@/components/site/social-icons";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.summary}`,
};

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

const skillGroups = [
  "Languages",
  "ML / AI",
  "Data & Viz",
  "Tools & Productivity",
] as const;

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative">
          <span className="absolute -left-[2.35rem] top-1 grid h-5 w-5 place-items-center border border-border bg-card">
            <span className="h-2 w-2 bg-foreground" />
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <span className="text-sm text-muted-foreground">@ {item.org}</span>
          </div>
          <div className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
            <span>{item.period}</span>
            {item.location && <span>· {item.location}</span>}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="About me"
                  title="Curious about data, obsessed with clarity"
                />
              </Reveal>
              <div className="mt-6 space-y-4">
                {aboutParagraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <Reveal delay={150}>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <span className="font-label grid h-14 w-14 place-items-center border border-border bg-muted">
                    {initials}
                  </span>
                  <div>
                    <p className="font-display">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {profile.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {education[0]?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {profile.availability}
                    </span>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      <SocialIcon name={s.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Skills & tooling"
              title="The stack I reach for"
              description="A snapshot of where I'm strongest and the tools I use day to day."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg">Core strengths</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Self-assessed across the data science lifecycle.
                </p>
                <div className="mt-4 flex flex-1 items-center justify-center px-4">
                  <RadarChart data={skillRadar} className="max-w-sm" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg">Monthly activity</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Illustrative sample — not real tracked data.
                </p>
                <div className="mt-6 flex-1">
                  <div className="h-56">
                    <BarChart data={activity} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group} delay={i * 80}>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-label mb-5 text-muted-foreground">
                    {group}
                  </h3>
                  <SkillBars
                    skills={skills.filter((s) => s.category === group)}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display mb-8 flex items-center gap-3 text-2xl tracking-tight">
                <GraduationCap className="h-6 w-6 text-muted-foreground" />
                Education
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Timeline items={education} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h2 className="font-display mb-8 flex items-center gap-3 text-2xl tracking-tight">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
                Experience
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Timeline items={experience} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
