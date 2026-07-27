import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmcorporativo.com.mx"),
  title: {
    default: "Grupo Industrial GM | Ingeniería y Fabricación de Equipo de Bombeo",
    template: "%s | Grupo Industrial GM",
  },
  description: "Líderes en fabricación, diseño e ingeniería de procesos de bombeo industrial en México. Contamos con laboratorio de pruebas acreditado por EMA e ISO 9001.",
  keywords: [
    "bombas industriales",
    "fabricante de equipos de bombeo",
    "ingeniería de fluidos",
    "bombeo industrial México",
    "laboratorio EMA pruebas de bombeo",
    "bombas centrífugas",
    "sistemas de bombeo",
    "mantenimiento de bombas"
  ],
  authors: [{ name: "Grupo Industrial GM" }],
  creator: "Grupo Industrial GM",
  publisher: "Grupo Industrial GM",
  openGraph: {
    title: "Grupo Industrial GM | Expertos en Bombeo Industrial",
    description: "Soluciones integrales en sistemas de bombeo, fabricación, diseño y mantenimiento. Más de 45 años de excelencia.",
    url: "https://gmcorporativo.com.mx",
    siteName: "Grupo Industrial GM",
    images: [
      {
        url: "/images/sectores/aguas.jpg", 
        width: 1200,
        height: 630,
        alt: "Instalaciones y Equipos de Bombeo Industrial - GM",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Industrial GM | Bombeo Industrial",
    description: "Ingeniería de procesos de bombeo, fabricación y laboratorio acreditado EMA.",
    images: ["/images/sectores/aguas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Grupo Industrial GM, S.A. de C.V.",
  "url": "https://gmcorporativo.com.mx",
  "logo": "https://gmcorporativo.com.mx/logo.png",
  "description": "Fabricante especializado en equipo de bombeo industrial e ingeniería de fluidos, con laboratorio de pruebas acreditado por EMA.",
  "foundingDate": "1987",
  "telephone": "+525553052003",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Estado de México",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.linkedin.com/company/grupo-industrial-gm"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="es-MX"
        className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-brass)] selection:text-[var(--color-ink)]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
