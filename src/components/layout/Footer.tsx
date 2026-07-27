import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] border-t border-[var(--color-ink-2)] text-[var(--color-paper)] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col">
            <Link href="/" className="flex flex-shrink-0 relative w-40 h-20 group mb-4">
              <Image 
                src="/images/logo.png" 
                alt="GM Corporativo Industrial" 
                fill 
                className="object-contain object-left group-hover:opacity-90 transition-opacity brightness-0 invert"
              />
            </Link>
            <p className="text-[var(--color-paper)]/70 font-sans text-sm mb-6 max-w-xs text-balance">
              Ingeniería de bombeo desde 1987. Soluciones para que la planta no pare.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-[var(--color-paper)]/60 hover:text-[var(--color-brass)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[var(--color-paper)]/60 hover:text-[var(--color-brass)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-[var(--color-paper)]">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios" },
                { name: "Nosotros", href: "/nosotros" },
                { name: "Marcas", href: "/marcas" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-sans text-[var(--color-paper)]/70 hover:text-[var(--color-brass)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-[var(--color-paper)]">Catálogo</h3>
            <ul className="space-y-3">
              {[
                "Centrífugas",
                "Flujo Axial / Turbinas",
                "Desplazamiento Positivo",
                "Especiales",
                "Laboratorio de Pruebas"
              ].map((cat) => (
                <li key={cat}>
                  <Link href="/catalogo" className="text-sm font-sans text-[var(--color-paper)]/70 hover:text-[var(--color-brass)] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-[var(--color-paper)]">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--color-steel)] shrink-0 mr-3 mt-0.5" />
                <span className="text-sm font-sans text-[var(--color-paper)]/70 leading-relaxed">
                  Lago de Guadalupe s/n<br />
                  San Mateo Tecoloapan<br />
                  Atizapán de Zaragoza, Edomex<br />
                  CP 52920
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[var(--color-steel)] shrink-0 mr-3" />
                <div className="flex flex-col text-sm font-mono text-[var(--color-paper)]/70">
                  <a href="tel:5546020434" className="hover:text-[var(--color-brass)] transition-colors">55-4602-0434</a>
                  <a href="tel:5553051026" className="hover:text-[var(--color-brass)] transition-colors">55-5305-1026</a>
                  <a href="tel:5553052003" className="hover:text-[var(--color-brass)] transition-colors">55-5305-2003</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[var(--color-steel)] shrink-0 mr-3" />
                <a href="mailto:contacto@gmcorporativoindustrial.com" className="text-sm font-mono text-[var(--color-paper)]/70 hover:text-[var(--color-brass)] transition-colors break-all">
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@gmcorporativoindustrial.com'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-steel)]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-[var(--color-paper)]/50 text-center md:text-left">
            &copy; {currentYear} Grupo Industrial GM, S.A. de C.V. Todos los derechos reservados. <br className="md:hidden" />
            Sitio desarrollado por <a href="https://casolutecdigital.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brass)] hover:underline">CA Soluciones Digitales y Tecnológicas</a>
          </p>
          <div className="flex space-x-6">
            <Link href="/privacidad" className="text-xs font-sans text-[var(--color-paper)]/50 hover:text-[var(--color-brass)] transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="text-xs font-sans text-[var(--color-paper)]/50 hover:text-[var(--color-brass)] transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
