import { ImageResponse } from "next/og";
import { contact } from "@/lib/content";

export const alt = "Chimaobi David Ibe — Software Engineer • Full‑stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700, color: "#171717", marginBottom: 16 }}>
          {contact.name}
        </div>
        <div style={{ fontSize: 28, color: "#0f62fe", marginBottom: 24 }}>
          {contact.title}
        </div>
        <div style={{ fontSize: 20, color: "#6b7280" }}>{contact.domain}</div>
      </div>
    ),
    { ...size }
  );
}
