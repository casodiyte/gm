import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/servicios`;
const description =
  "Conoce los servicios de equipos de bombeo, motores eléctricos, soluciones electromecánicas, rehabilitación y soporte técnico de GM.";

export const metadata: Metadata = {
  title: "Servicios de ingeniería industrial",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Servicios de ingeniería industrial | GM Corporativo Industrial",
    description,
    url: canonical,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: `${SITE.url}/opengraph-image`,
        alt: SITE.name,
      },
    ],
  },
};

export default function ServiciosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
