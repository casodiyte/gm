import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";

export const alt = "Grupo Industrial GM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read the local logo image
  const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
  const logoBuffer = readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #002e5f, #001B3A)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative elements to make it look premium */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(16, 139, 204, 0.15) 0%, transparent 70%)",
          }}
        />
        
        {/* The GM Logo, made much larger */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} alt="" style={{ width: 800, objectFit: "contain" }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
