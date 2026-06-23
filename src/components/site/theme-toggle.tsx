"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Toggles the `.dark` class on <html> and persists the choice.
 * Icon visibility is driven purely by the `.dark` class (no React state),
 * which avoids any hydration mismatch with the no-flash theme script.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle theme"
      className={cn(
        "inline-grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40",
        className,
      )}
    >
      <Sun className="hidden h-[1.15rem] w-[1.15rem] dark:block" />
      <Moon className="h-[1.15rem] w-[1.15rem] dark:hidden" />
    </button>
  );
}
