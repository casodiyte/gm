"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Marcas", href: "/marcas" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-steel)]/20 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-shrink-0 relative w-40 h-16 group">
              <Image 
                src="/images/logo.png" 
                alt="GM Corporativo Industrial" 
                fill 
                className="object-contain group-hover:opacity-90 transition-opacity"
                priority 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 lg:space-x-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-sm font-medium px-3 py-2 transition-colors ${
                    isScrolled || !isHomePage 
                      ? "text-[var(--color-ink)] hover:text-[var(--color-brass)]" 
                      : "text-[var(--color-paper)] hover:text-[var(--color-brass)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:5546020434" className={`flex items-center text-sm font-mono transition-colors ${
                isScrolled || !isHomePage ? "text-[var(--color-ink)] hover:text-[var(--color-brass)]" : "text-[var(--color-paper)] hover:text-[var(--color-brass)]"
              }`}>
                <Phone className="w-4 h-4 mr-2" />
                55-4602-0434
              </a>
              <Button asChild>
                <Link href="/contacto">Cotizar</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 transition-colors ${
                  isScrolled || !isHomePage ? "text-[var(--color-ink)] hover:text-[var(--color-brass)]" : "text-[var(--color-paper)] hover:text-[var(--color-brass)]"
                }`}
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--color-ink)] z-50 border-l border-[var(--color-ink-2)] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--color-ink-2)]">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative w-32 h-12">
                  <Image src="/images/logo.png" alt="GM Corporativo Industrial" fill className="object-contain" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[var(--color-paper)] hover:text-[var(--color-brass)] transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col py-6 px-4 overflow-y-auto flex-grow">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-lg font-medium text-[var(--color-paper)] hover:text-[var(--color-brass)] py-4 border-b border-[var(--color-ink-2)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-[var(--color-ink-2)] flex flex-col gap-4">
                <a href="tel:5546020434" className="flex items-center justify-center text-sm font-mono text-[var(--color-paper)] hover:text-[var(--color-brass)] py-2 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  55-4602-0434
                </a>
                <Button asChild className="w-full">
                  <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Cotizar Sistema</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
