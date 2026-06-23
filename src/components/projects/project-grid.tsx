"use client";

import { useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/content";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const count =
            cat === "All"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {cat}
              <span
                className={cn(
                  "text-xs",
                  isActive ? "opacity-80" : "opacity-50",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} className="h-full" />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
