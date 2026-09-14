"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ProductDetails } from "@/lib/catalog-data";

interface ProductModalProps {
  product: ProductDetails | null;
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

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;

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
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink-2)]/80 p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="corner-brackets relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto border border-white/10 bg-[var(--color-ink)] shadow-2xl md:grid-cols-2"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-[var(--color-ink)]/10 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-brass)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] md:bg-white/10 md:text-white"
              aria-label="Cerrar ficha técnica"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex min-h-[300px] items-center justify-center border-b border-white/10 bg-white p-8 md:min-h-full md:border-b-0 md:border-r md:p-12">
              <Image
                src={product.img}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-8"
              />
            </div>

            <div className="p-8 text-white md:p-12">
              <div className="mb-8">
                <span className="mb-4 inline-block rounded bg-white/10 px-2 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-sky)]">
                  {product.code}
                </span>
                <h2 id="product-modal-title" className="font-display text-3xl font-bold uppercase leading-tight tracking-[-0.01em] text-white">
                  {product.name}
                </h2>
              </div>

              <dl className="grid grid-cols-1 gap-4 font-sans text-sm md:text-base">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="border-b border-white/10 pb-3">
                    <dt className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white/55">{spec.label}</dt>
                    <dd className="whitespace-pre-line font-medium text-white/90">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              {product.note && (
                <p className="mt-6 text-sm leading-relaxed text-white/60">{product.note}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
