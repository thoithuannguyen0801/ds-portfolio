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
          background:
            "linear-gradient(135deg, #060a13 0%, #0c1322 55%, #04211d 100%)",
          color: "#e7eefb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: "999px",
              border: "2px solid #2dd4bf",
              color: "#2dd4bf",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 800,
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
          <div style={{ display: "flex", fontSize: "30px", color: "#93a4bd" }}>
            {profile.name} — {profile.role}
          </div>
          {metric ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ fontSize: "52px", fontWeight: 800, color: "#2dd4bf" }}
              >
                {metric.value}
              </div>
              <div style={{ fontSize: "24px", color: "#93a4bd" }}>
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
