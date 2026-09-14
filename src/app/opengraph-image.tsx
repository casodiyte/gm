import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";

export const alt = "GM Corporativo Industrial";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Versión del logotipo para fondos oscuros (Línea Gráfica GM, p. 12)
  const logoPath = path.join(process.cwd(), "public", "images", "logo-horizontal-dark.png");
  const logoBase64 = `data:image/png;base64,${readFileSync(logoPath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#002e5f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} alt="" style={{ width: 760, objectFit: "contain" }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 18,
            display: "flex",
          }}
        >
          <div style={{ width: "62%", background: "#108bcc" }} />
          <div style={{ width: "38%", background: "#002247" }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
