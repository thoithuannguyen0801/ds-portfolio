import type { MonthlyActivity } from "@/lib/content";
import { cn } from "@/lib/utils";

interface Props {
  data: MonthlyActivity[];
  className?: string;
  unit?: string;
}

/** Lightweight CSS bar chart with hover tooltips. */
export function BarChart({ data, className, unit = "" }: Props) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={cn("flex h-full w-full items-end gap-1.5 sm:gap-2.5", className)}>
      {data.map((d) => (
        <div key={d.month} className="group flex h-full flex-1 flex-col items-center gap-2">
          <div className="relative flex w-full flex-1 items-end">
            {/* tooltip */}
            <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              {d.value}
              {unit}
            </span>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-primary/30 to-primary transition-all duration-300 group-hover:from-primary/50 group-hover:to-accent-2"
              style={{ height: `${(d.value / max) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
            {d.month}
          </span>
        </div>
      ))}
    </div>
  );
}
