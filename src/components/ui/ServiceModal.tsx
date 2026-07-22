"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type ServiceDetails = {
  num: string;
  title: string;
  desc: string;
  fullDesc: string;
  icon: LucideIcon;
  imageSrc: string;
};

interface ServiceModalProps {
  service: ServiceDetails | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[var(--color-ink)]/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[var(--color-paper)] rounded-sm overflow-hidden flex flex-col md:flex-row relative shadow-2xl corner-brackets border border-[var(--color-steel)]/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-[var(--color-brass)] backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-[var(--color-ink)] transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Top Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-[var(--color-ink)]">
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#151a24] to-transparent z-10" />
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="w-16 h-16 bg-[#1a212d]/80 backdrop-blur-md border border-[var(--color-steel)]/20 flex items-center justify-center rounded-lg shadow-lg mb-4">
                  <service.icon strokeWidth={1.5} className="w-8 h-8 text-[var(--color-brass)]" />
                </div>
                <div className="font-mono text-lg text-[var(--color-brass)] font-semibold tracking-wider">
                  /{service.num}
                </div>
              </div>
            </div>

            {/* Right/Bottom Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col relative bg-[#151a24]">
              {/* Subtle Dot Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-steel)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] z-0 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2 uppercase leading-tight">
                  {service.title}
                </h3>
                
                <div className="w-12 h-1 bg-[var(--color-brass)] my-6" />
                
                <p className="font-sans text-lg md:text-xl text-[var(--color-paper)]/90 leading-relaxed font-light text-balance">
                  {service.fullDesc}
                </p>

                <div className="mt-12">
                  <button onClick={onClose} className="group flex items-center gap-3 px-6 py-3 border border-[var(--color-steel)]/20 hover:border-[var(--color-brass)] bg-white/5 hover:bg-[var(--color-brass)]/10 transition-all duration-300 rounded-sm w-fit">
                    <span className="font-sans font-bold text-sm tracking-widest text-white group-hover:text-[var(--color-brass)] uppercase transition-colors">
                      Entendido
                    </span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[var(--color-brass)] transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
