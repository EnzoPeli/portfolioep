import { ImageResponse } from "next/og";
import { site } from "@/content/shared";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070a09",
          color: "#f4f7f5",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#6ee7c5",
            }}
          />
          <div
            style={{
              fontSize: 18,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#6ee7c5",
              fontWeight: 600,
            }}
          >
            EP
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              color: "#7d8a84",
              fontWeight: 500,
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 68,
              fontWeight: 650,
              lineHeight: 0.95,
              letterSpacing: "-2px",
            }}
          >
            Enzo Pelizzari
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "#b7c2bc",
              maxWidth: 820,
            }}
          >
            {site.seo.description.es}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 16,
            color: "#6ee7c5",
            fontWeight: 600,
          }}
        >
          <span>7+ years</span>
          <span>uCRM ownership</span>
          <span>Cloud + Integrations</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
