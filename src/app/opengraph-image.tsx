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
          background: "#F3F0EA",
          color: "#131210",
          fontFamily: "Georgia, serif",
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
              border: "2px solid #D8D4CC",
              background: "#FFFFFF",
              fontSize: "24px",
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            {initials}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#716E68",
              fontFamily: "monospace",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#716E68",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {profile.role}
          </div>
          <div style={{ fontSize: "80px", fontWeight: 500, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#716E68",
              maxWidth: "900px",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.5,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "22px",
            color: "#716E68",
            fontFamily: "monospace",
            letterSpacing: "0.06em",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              background: "#E6552F",
            }}
          />
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
