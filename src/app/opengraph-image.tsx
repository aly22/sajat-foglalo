import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IdőpontFoglalóm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            IF
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            IdőpontFoglalóm
          </span>
        </div>
        <p
          style={{
            fontSize: "28px",
            color: "#6b7280",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          A saját online időpontfoglaló rendszered.
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#9ca3af",
            marginTop: "16px",
          }}
        >
          Egyszeri beüzemelés. Fix havi díj. Teljes kontroll.
        </p>
      </div>
    ),
    { ...size }
  );
}
