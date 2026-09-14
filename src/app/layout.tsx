import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatBot } from "@/components/chatbot/ChatBot";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CONTACT, SITE } from "@/lib/site-data";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "GM Corporativo Industrial | Soluciones en sistemas de bombeo",
    template: "%s | GM Corporativo Industrial",
  },
  description: SITE.description,
  keywords: [
    "bombas industriales",
    "fabricante de equipos de bombeo",
    "sistemas de bombeo",
    "bombeo industrial México",
    "pruebas hidráulicas de bombas",
    "bombas centrífugas",
    "rehabilitación de bombas",
    "mantenimiento de bombas"
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GM Corporativo Industrial | Soluciones en sistemas de bombeo",
    description: `Más de ${SITE.yearsOfExperience} años de experiencia en fabricación, rehabilitación y soporte para sistemas de bombeo y proceso.`,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/opengraph-image", alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GM Corporativo Industrial | Soluciones en sistemas de bombeo",
    description: SITE.description,
    images: ["/opengraph-image"],
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
  "name": SITE.legalName,
  "url": SITE.url,
  "logo": `${SITE.url}/images/logo-horizontal.png`,
  "description": SITE.description,
  "telephone": CONTACT.phones[0].href,
  "email": CONTACT.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carretera Lago de Guadalupe, San Mateo Tecoloapan",
    "addressLocality": "Atizapán de Zaragoza",
    "addressRegion": "Estado de México",
    "postalCode": "52920",
    "addressCountry": "MX"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="es-MX"
        className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
      >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-brass)] selection:text-white">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded bg-white px-4 py-3 font-sans font-semibold text-[var(--color-ink)] shadow-xl transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </MotionProvider>
      </body>
    </html>
  );
}
