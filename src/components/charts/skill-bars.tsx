"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/lib/content";

/** Animated proficiency bars that fill when scrolled into view. */
export function SkillBars({ skills }: { skills: Skill[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {skills.map((s, i) => (
        <div key={s.name}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium">{s.name}</span>
            <span className="text-muted-foreground">{s.level}%</span>
          </div>
          <div className="h-2 overflow-hidden bg-muted">
            <div
              className="h-full bg-primary transition-[width] duration-1000 ease-out"
              style={{
                width: show ? `${s.level}%` : "0%",
                transitionDelay: `${i * 60}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
