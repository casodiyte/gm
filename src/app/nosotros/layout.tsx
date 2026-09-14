import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

const canonical = `${SITE.url}/nosotros`;
const description = `Conoce la historia, misión, visión y valores de GM Corporativo Industrial: más de ${SITE.yearsOfExperience} años de experiencia en soluciones para sistemas de bombeo.`;

export const metadata: Metadata = {
  title: "Nosotros",
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Nosotros | ${SITE.name}`,
    description,
    url: canonical,
    images: ["/opengraph-image"],
  }
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
