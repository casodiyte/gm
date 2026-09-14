import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/contacto`;
const description =
  "Contacta al equipo de GM Corporativo Industrial para solicitar una cotización o compartir los requerimientos de tu proceso industrial.";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Contacto y cotizaciones | GM Corporativo Industrial",
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

export default function ContactoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
