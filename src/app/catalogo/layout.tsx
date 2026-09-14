import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/catalogo`;
const description =
  "Catálogo de bombas GM centrífugas, verticales, de desplazamiento positivo y de vacío, y líneas NOV Mono y Moyno para cavidades progresivas, trituración y mezcla.";

export const metadata: Metadata = {
  title: "Catálogo de bombas industriales",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Catálogo de bombas industriales | ${SITE.name}`,
    description,
    url: canonical,
    images: ["/images/catalogo/gm-heavy-flow.webp"],
  }
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
