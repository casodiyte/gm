"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import type { ServiceDetails } from "@/lib/services-data";
import { BRANDS, CONTACT } from "@/lib/site-data";
import { Isotipo } from "@/components/ui/Isotipo";

interface ServiceModalProps {
  service: ServiceDetails | null;
  onClose: () => void;
}

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
      ).filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => {
        if (previouslyFocused?.isConnected) previouslyFocused.focus();
      });
    };
  }, [service, onClose]);

  const brands = service
    ? service.brands.map((slug) => BRANDS.find((brand) => brand.slug === slug)).filter((brand) => brand !== undefined)
    : [];
  const whatsappUrl = service
    ? `https://wa.me/${CONTACT.whatsappInternational}?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title.toLowerCase()}.`)}`
    : "";

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink-2)]/85 p-4 backdrop-blur-md sm:p-6"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-description"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={(event) => event.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-white shadow-[0_40px_120px_rgba(0,20,45,0.5)] md:grid-cols-[0.9fr_1.1fr]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[var(--color-ink)] shadow-md transition-colors hover:bg-[var(--color-ink)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)]"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-64 overflow-hidden bg-[var(--color-ink)] md:min-h-[34rem]">
              <Image
                src={service.imageSrc}
                alt=""
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="scale-110 object-cover opacity-25 blur-xl"
                aria-hidden="true"
              />
              <Image
                src={service.imageSrc}
                alt=""
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-2)] via-[var(--color-ink)]/40 to-[var(--color-ink)]/10" />
              <Isotipo variant="dark" className="absolute left-6 top-6 w-12 opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <service.icon className="h-9 w-9 text-[var(--color-sky)]" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-4 max-w-sm font-display text-2xl font-semibold uppercase leading-tight">{service.desc}</p>
              </div>
            </div>

            <div className="relative flex flex-col p-8 sm:p-10 lg:p-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">Servicio</p>
              <h2 id="service-modal-title" className="mt-3 pr-10 font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.015em] text-[var(--color-ink)] sm:text-5xl">
                {service.title}
              </h2>
              <span className="mt-6 block h-1 w-14 bg-[var(--color-brass)]" aria-hidden="true" />
              <p id="service-modal-description" className="mt-6 text-lg leading-relaxed text-[var(--color-ink)]/80">
                {service.fullDesc}
              </p>

              <div className="mt-8 border-t border-[var(--color-steel)]/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-steel)]">
                  {brands.length > 0 ? "Marcas que integramos" : "Respaldo"}
                </p>
                {brands.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {brands.map((brand) => (
                      <li key={brand.slug} className="relative h-14 w-28 border border-[var(--color-steel)]/15 bg-white">
                        <Image src={brand.logo} alt={brand.name} fill sizes="112px" className="object-contain p-2" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-base text-[var(--color-ink)]/75">Ingeniería, taller y personal técnico de GM.</p>
                )}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
                <Link
                  href={`/contacto?servicio=${encodeURIComponent(service.title)}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-[var(--color-ink)] px-6 font-sans text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brass)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] focus-visible:ring-offset-2"
                >
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--color-ink)]/20 px-6 font-sans text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
