import { ImageResponse } from "next/og";
import { profile, site } from "@/lib/content";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export default function OpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#2dd4bf",
              color: "#04211d",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {initials}
          </div>
          <div style={{ fontSize: "28px", color: "#93a4bd" }}>
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "38px", fontWeight: 600, color: "#2dd4bf" }}>
            {profile.role}
          </div>
          <div style={{ fontSize: "88px", fontWeight: 800, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: "34px", color: "#93a4bd", maxWidth: "900px" }}>
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            color: "#93a4bd",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#2dd4bf",
            }}
          />
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
