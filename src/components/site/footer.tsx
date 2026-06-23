import Link from "next/link";
import { nav, profile, socials } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "./social-icons";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                {initials}
              </span>
              {profile.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-foreground">Next.js</span> &{" "}
            <span className="text-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
