import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/blog`;
const description =
  "Artículos técnicos sobre equipos de bombeo industrial, mantenimiento, operación y prácticas para el cuidado de los sistemas.";

export const metadata: Metadata = {
  title: "Blog técnico de bombeo industrial",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Blog técnico de bombeo industrial | GM Corporativo Industrial",
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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
