"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/site-data";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Servicios", href: "/servicios" },
  { name: "Marcas", href: "/marcas" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isFloating = isHomePage && !isScrolled;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const fallbackMenuButton = menuButtonRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => {
        if (previouslyFocused?.isConnected) previouslyFocused.focus();
        else fallbackMenuButton?.focus();
      });
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed z-50 border transition-all duration-300",
          isFloating
            ? "left-3 right-3 top-3 rounded-2xl border-white/15 bg-[var(--color-ink-2)]/75 shadow-[0_18px_60px_rgba(0,20,45,.3)] backdrop-blur-xl lg:left-6 lg:right-6 lg:top-5"
            : "left-0 right-0 top-0 rounded-none border-x-0 border-t-0 border-[var(--color-steel)]/20 bg-white/95 shadow-sm backdrop-blur-md",
        )}
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className={cn("flex items-center justify-between transition-[height] duration-300", isFloating ? "h-16 lg:h-20" : "h-20 lg:h-24")}>
            {/* Logo */}
            <Link href="/" className="group relative flex h-14 w-40 flex-shrink-0 lg:h-16 lg:w-52" aria-label="Ir al inicio">
              <Image
                src={isFloating ? "/images/logo-horizontal-dark.png" : "/images/logo-horizontal.png"}
                alt="GM Corporativo Industrial"
                fill
                sizes="(min-width: 1024px) 208px, 160px"
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-90"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center lg:flex" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "relative px-2.5 py-3 font-sans text-[13px] font-semibold transition-colors xl:px-3",
                    isFloating ? "text-white/85 hover:text-white" : "text-[var(--color-ink)] hover:text-[var(--color-brass)]",
                    pathname === link.href && (isFloating ? "text-white" : "text-[var(--color-brass)]"),
                    "after:absolute after:bottom-1.5 after:left-2.5 after:right-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--color-brass)] after:transition-transform aria-[current=page]:after:scale-x-100",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center space-x-5 xl:flex">
              <a href={`tel:+${CONTACT.whatsappInternational}`} className={cn("flex items-center font-mono text-xs font-semibold transition-colors hover:text-[var(--color-brass)]", isFloating ? "text-white/85" : "text-[var(--color-ink)]")}>
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                {CONTACT.whatsappDisplay}
              </a>
              <Button asChild className={cn("rounded-full px-6", isFloating && "bg-[var(--color-brass)] hover:bg-white hover:text-[var(--color-ink)]")}>
                <Link href="/contacto">Cotizar</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                ref={menuButtonRef}
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-full transition-colors hover:text-[var(--color-brass)]",
                  isFloating ? "bg-white/10 text-white" : "text-[var(--color-ink)]",
                )}
                aria-label="Abrir menú"
                aria-expanded={isMobileMenuOpen}
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
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--color-ink)] z-50 border-l border-[var(--color-ink-2)] lg:hidden flex flex-col shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--color-ink-2)]">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative w-36 h-12">
                  <Image src="/images/logo-horizontal-dark.png" alt="GM Corporativo Industrial" fill sizes="144px" className="object-contain object-left" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid h-11 w-11 place-items-center text-[var(--color-paper)] transition-colors hover:text-[var(--color-sky)]"
                  aria-label="Cerrar menú"
                  autoFocus
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
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="border-b border-[var(--color-ink-2)] py-4 font-sans text-lg font-medium text-[var(--color-paper)] transition-colors hover:text-[var(--color-sky)] aria-[current=page]:text-[var(--color-sky)]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-[var(--color-ink-2)] flex flex-col gap-4">
                <a href={`tel:+${CONTACT.whatsappInternational}`} className="flex items-center justify-center text-sm font-mono text-[var(--color-paper)] hover:text-[var(--color-sky)] py-2 transition-colors">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  {CONTACT.whatsappDisplay}
                </a>
                <Button asChild className="w-full bg-[var(--color-brass)] hover:bg-white hover:text-[var(--color-ink)]">
                  <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Cotizar</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
