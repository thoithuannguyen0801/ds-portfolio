import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-label inline-flex items-center gap-1.5 border border-border bg-card px-2.5 py-1 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
