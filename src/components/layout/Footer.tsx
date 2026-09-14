import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/site-data";
import { CATALOG } from "@/lib/catalog-data";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Servicios", href: "/servicios" },
  { name: "Marcas", href: "/marcas" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const catalogLinks = CATALOG.flatMap((group) => group.categories.slice(0, group.id === "gm" ? 6 : 3));

  return (
    <footer className="border-t border-[var(--color-ink-2)] bg-[var(--color-ink)] pb-8 pt-16 text-[var(--color-paper)]">
      <div className="brand-band -mt-16 mb-16 h-1.5" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          <div className="flex flex-col">
            <Link href="/" className="group relative mb-4 flex h-20 w-48 flex-shrink-0" aria-label="Ir al inicio">
              <Image
                src="/images/logo-horizontal-dark.png"
                alt="GM Corporativo Industrial"
                fill
                sizes="192px"
                className="object-contain object-left transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="mb-6 max-w-xs text-balance font-sans text-sm text-[var(--color-paper)]/75">
              {SITE.tagline}. Más de {SITE.yearsOfExperience} años de soluciones para que la planta no pare.
            </p>
            <Link
              href="/contacto"
              className="w-fit text-sm font-semibold text-[var(--color-sky)] underline-offset-4 hover:underline"
            >
              Hablar con ingeniería
            </Link>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--color-paper)]">Navegación</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-sm text-[var(--color-paper)]/75 transition-colors hover:text-[var(--color-sky)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--color-paper)]">Catálogo</h3>
            <ul className="space-y-3">
              {catalogLinks.map((category) => (
                <li key={category.id}>
                  <Link href={`/catalogo?categoria=${category.id}`} className="font-sans text-sm text-[var(--color-paper)]/75 transition-colors hover:text-[var(--color-sky)]">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--color-paper)]">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brass)]" aria-hidden="true" />
                <span className="font-sans text-sm leading-relaxed text-[var(--color-paper)]/75">{CONTACT.address}</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brass)]" aria-hidden="true" />
                <div className="flex flex-col gap-1 font-mono text-sm text-[var(--color-paper)]/75">
                  <a href={`https://wa.me/${CONTACT.whatsappInternational}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--color-sky)]">WhatsApp {CONTACT.whatsappDisplay}</a>
                  {CONTACT.phones.map((phone) => (
                    <a key={phone.href} href={`tel:${phone.href}`} className="transition-colors hover:text-[var(--color-sky)]">Tel. {phone.display}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-[var(--color-brass)]" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="break-all font-mono text-sm text-[var(--color-paper)]/75 transition-colors hover:text-[var(--color-sky)]">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="text-center font-sans text-xs text-[var(--color-paper)]/60 md:text-left">
            &copy; {currentYear} {SITE.legalName}. Todos los derechos reservados. <br className="md:hidden" />
            Sitio desarrollado por <a href="https://casolutecdigital.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sky)] hover:underline">CA Soluciones Digitales y Tecnológicas</a>
          </p>
          <div className="flex space-x-6">
            <Link href="/privacidad" className="font-sans text-xs text-[var(--color-paper)]/60 transition-colors hover:text-[var(--color-sky)]">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="font-sans text-xs text-[var(--color-paper)]/60 transition-colors hover:text-[var(--color-sky)]">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
