import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo Oficial de Bombas Industriales",
  description: "Explora nuestro catálogo completo de soluciones de bombeo de alto rendimiento. Bombas centrífugas, verticales, de desplazamiento positivo, vacío y especiales.",
  openGraph: {
    title: "Catálogo de Bombas Industriales | Grupo Industrial GM",
    description: "Soluciones de bombeo de alto rendimiento. Consulta nuestro catálogo oficial de equipos para aplicaciones industriales y procesos críticos.",
    url: "https://gmcorporativo.com.mx/catalogo",
    images: ["/images/products/BombaHeavyFlow.png"],
  }
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
