import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/marcas`;
const description =
  "Consulta las marcas, capacidades y documentación técnica reunidas por GM para proyectos de bombeo y procesos industriales.";

export const metadata: Metadata = {
  title: "Marcas y representaciones industriales",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Marcas y representaciones industriales | GM Corporativo Industrial",
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

export default function MarcasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
