import { ImageResponse } from "next/og";
import { profile, projects } from "@/lib/content";

export const alt = "Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project?.title ?? "Project";
  const category = project?.category ?? "Data Science";
  const metric = project?.metrics?.[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#F3F0EA",
          color: "#131210",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: "22px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#716E68",
          }}
        >
          {category}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "68px",
            fontWeight: 500,
            lineHeight: 1.1,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#716E68",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {profile.name}
          </div>
          {metric ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "48px", fontWeight: 500, color: "#E6552F" }}>
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#716E68",
                  fontFamily: "monospace",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {metric.label}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...size },
  );
}
