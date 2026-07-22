"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type ProductDetails = {
  code: string;
  name: string;
  img: string;
  enName?: string;
  norms?: string;
  sizes?: string;
  capacity?: string;
  head?: string;
  impeller?: string;
  metallurgy?: string;
  applications?: string;
  temp?: string;
  discharge?: string;
  config?: string;
  solids?: string;
  differentiator?: string;
  accreditation?: string;
  methods?: string;
  scope?: string;
};

interface ProductModalProps {
  product: ProductDetails | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--color-ink)]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151a24] border border-[var(--color-steel)]/20 shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto corner-brackets relative grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/5 hover:bg-[var(--color-brass)]/20 text-white/50 hover:text-[var(--color-brass)] rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Image */}
              <div className="relative bg-white min-h-[300px] md:min-h-full flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-steel)]/20">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-8 mix-blend-multiply"
                />
              </div>

              {/* Right: Details */}
              <div className="p-8 md:p-12 text-white">
                <div className="mb-8">
                  <span className="font-mono text-xs tracking-widest text-[var(--color-brass)] px-2 py-1 bg-[var(--color-brass)]/10 rounded uppercase inline-block mb-4">
                    {product.code}
                  </span>
                  <h2 className="font-display text-3xl font-bold uppercase text-white mb-2 leading-tight">
                    {product.name}
                  </h2>
                  {product.enName && (
                    <p className="font-sans text-sm text-[var(--color-steel)] italic">
                      {product.enName}
                    </p>
                  )}
                </div>

                <div className="space-y-4 font-sans text-sm md:text-base text-white/80">
                  {/* Technical Specs Table */}
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
                    {product.norms && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Normas</dt>
                        <dd className="font-medium text-white/90">{product.norms}</dd>
                      </div>
                    )}
                    {product.accreditation && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Acreditación</dt>
                        <dd className="font-medium text-[var(--color-brass)]">{product.accreditation}</dd>
                      </div>
                    )}
                    {product.methods && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Métodos acreditados</dt>
                        <dd className="font-medium text-white/90 whitespace-pre-line">{product.methods}</dd>
                      </div>
                    )}
                    {product.scope && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Alcance actual</dt>
                        <dd className="font-medium text-white/90">{product.scope}</dd>
                      </div>
                    )}
                    {product.config && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Configuración</dt>
                        <dd className="font-medium text-white/90">{product.config}</dd>
                      </div>
                    )}
                    {product.sizes && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Tamaños</dt>
                        <dd className="font-medium text-white/90">{product.sizes}</dd>
                      </div>
                    )}
                    {product.capacity && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Capacidad (Gasto)</dt>
                        <dd className="font-medium text-white/90">{product.capacity}</dd>
                      </div>
                    )}
                    {product.head && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Carga Dinámica</dt>
                        <dd className="font-medium text-white/90">{product.head}</dd>
                      </div>
                    )}
                    {product.impeller && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Impulsor</dt>
                        <dd className="font-medium text-white/90">{product.impeller}</dd>
                      </div>
                    )}
                    {product.solids && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Manejo de sólidos</dt>
                        <dd className="font-medium text-white/90">{product.solids}</dd>
                      </div>
                    )}
                    {product.temp && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Temperatura Máx.</dt>
                        <dd className="font-medium text-white/90">{product.temp}</dd>
                      </div>
                    )}
                    {product.discharge && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Descarga</dt>
                        <dd className="font-medium text-white/90">{product.discharge}</dd>
                      </div>
                    )}
                    {product.metallurgy && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Metalurgias</dt>
                        <dd className="font-medium text-[var(--color-brass)]">{product.metallurgy}</dd>
                      </div>
                    )}
                    {product.applications && (
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Aplicaciones</dt>
                        <dd className="font-medium text-white/90">{product.applications}</dd>
                      </div>
                    )}
                    {product.differentiator && (
                      <div className="border-b border-transparent pb-3">
                        <dt className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">Diferenciador</dt>
                        <dd className="font-medium text-white/90">{product.differentiator}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
