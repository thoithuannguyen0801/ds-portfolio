import type { RadarAxis } from "@/lib/content";
import { cn } from "@/lib/utils";

interface Props {
  data: RadarAxis[];
  size?: number;
  rings?: number;
  className?: string;
}

/** Pure-SVG radar/spider chart (no chart library). */
export function RadarChart({ data, size = 360, rings = 4, className }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 64; // leave room for axis labels
  const n = data.length;

  const angleFor = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number): [number, number] => {
    const a = angleFor(i);
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };
  const toPath = (pts: [number, number][]) =>
    pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ") +
    " Z";

  const dataPts = data.map((d, i) => point(i, (radius * d.value) / 100));

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("h-auto w-full overflow-visible", className)}
      role="img"
      aria-label="Radar chart of core skill areas"
    >
      {/* concentric rings */}
      {Array.from({ length: rings }).map((_, r) => {
        const rr = (radius * (r + 1)) / rings;
        return (
          <path
            key={r}
            d={toPath(data.map((_, i) => point(i, rr)))}
            fill="none"
            className="text-border"
            stroke="currentColor"
            strokeWidth={1}
          />
        );
      })}

      {/* spokes + labels */}
      {data.map((d, i) => {
        const [x, y] = point(i, radius);
        const [lx, ly] = point(i, radius + 18);
        const dx = lx - cx;
        const dy = ly - cy;
        const anchor =
          Math.abs(dx) < 1 ? "middle" : dx > 0 ? "start" : "end";
        const baseline =
          dy > 6 ? "0.7em" : dy < -6 ? "-0.1em" : "0.32em";
        return (
          <g key={d.axis}>
            <line
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              className="text-border"
              stroke="currentColor"
              strokeWidth={1}
            />
            <text
              x={lx}
              y={ly}
              dy={baseline}
              textAnchor={anchor}
              className="fill-muted-foreground text-[11px] font-medium"
            >
              {d.axis}
            </text>
          </g>
        );
      })}

      {/* data polygon */}
      <path
        d={toPath(dataPts)}
        className="fill-primary/20 stroke-primary"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {dataPts.map((p, i) => (
        <circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r={3.5}
          className="fill-primary stroke-background"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}
