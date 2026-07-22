import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Historia y Experiencia",
  description: "Conoce a Grupo Industrial GM, líderes con más de 38 años de experiencia en bombeo industrial, ingeniería de procesos y laboratorio acreditado EMA.",
  openGraph: {
    title: "Nosotros | Grupo Industrial GM",
    description: "Más de 38 años de experiencia en flujo, presión y confiabilidad. Conoce nuestra historia, misión, valores y el laboratorio de pruebas certificado.",
    url: "https://gmcorporativo.com.mx/nosotros",
    images: ["/images/team/angelica-guerra.jpg"],
  }
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
