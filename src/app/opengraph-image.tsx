import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * Dynamically generated Open Graph / social share image (1200×630). Avoids
 * needing a static design asset — renders a clean, on-brand card using the
 * design-system navy/cyan colors. Used for og:image and twitter:image.
 */
export const alt = "zaramTech AB — Embedded systems, edge AI & automotive test engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          backgroundColor: "#1F3A5F",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              backgroundColor: "#00C2CB",
            }}
          />
          <div style={{ fontSize: "34px", fontWeight: 700, color: "#ffffff" }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Embedded systems, edge AI & automotive test engineering.
          </div>
          <div style={{ fontSize: "30px", color: "#33D4DC" }}>
            From bare-metal firmware to on-device ML — silicon to cloud.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
