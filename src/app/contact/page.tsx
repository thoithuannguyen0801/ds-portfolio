import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Send } from "lucide-react";
import { contact, profile, socials } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { SocialIcon } from "@/components/site/social-icons";
import { CopyEmail } from "@/components/contact/copy-email";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 glow opacity-50" />
      <Container className="py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={contact.heading}
            description={contact.blurb}
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Email card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Send me an email</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The fastest way to reach me. I usually reply within a day.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-5 break-all font-mono text-sm text-primary hover:underline"
              >
                {profile.email}
              </a>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={`mailto:${profile.email}`}
                  className={buttonVariants({ size: "md" })}
                >
                  <Send className="h-4 w-4" />
                  Compose email
                </a>
                <CopyEmail email={profile.email} className="h-11" />
              </div>
            </div>
          </Reveal>

          {/* Socials */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">
                      {s.label}
                    </span>
                    {s.handle && (
                      <span className="block truncate text-sm text-muted-foreground">
                        {s.handle}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p
            className={cn(
              "mx-auto mt-10 flex max-w-4xl items-center justify-center gap-2 text-sm text-muted-foreground",
            )}
          >
            <MapPin className="h-4 w-4 text-primary" />
            Based in {profile.location}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
