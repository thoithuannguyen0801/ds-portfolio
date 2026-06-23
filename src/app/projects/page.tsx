import type { Metadata } from "next";
import { profile } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: `Data science projects by ${profile.name} — machine learning, NLP, analytics and data visualization.`,
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 glow opacity-50" />
      <Container className="py-16 lg:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects"
            description="End-to-end data science work — from exploratory analysis to deployed models. Filter by area below."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12">
            <ProjectGrid />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
