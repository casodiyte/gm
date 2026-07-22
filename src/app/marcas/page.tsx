"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BRANDS = [
  { name: "Vogelsang", domain: "vogelsang.info" },
  { name: "Forbes Marshall", domain: "forbesmarshall.com" },
  { name: "SJE", domain: "sjerhombus.com" },
  { name: "Eletrosert", domain: "eletrosert.com.br" },
  { name: "Babcock & Wilcox", domain: "babcock.com" },
  { name: "Soler & Palau", domain: "solerpalau.com" },
  { name: "Temisa", domain: "temisa.com" },
  { name: "Tsurumi", domain: "tsurumipump.com" },
  { name: "Fertron", domain: "fertron.com.br" },
  { name: "Biocondensados", domain: "biocondensados.com" },
];

export default function MarcasPage() {
  return (
    <div className="pt-28 pb-24 bg-[var(--color-paper)] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative max-w-4xl mb-24 z-10 pt-8">
          <div className="absolute top-0 -left-4 text-[4rem] md:text-[8rem] font-display font-bold text-[var(--color-steel)]/5 pointer-events-none select-none uppercase tracking-tighter leading-none whitespace-nowrap">
            Partners
          </div>
          <SectionHeader 
            eyebrow="REPRESENTACIONES OFICIALES" 
            title="Trabajamos con los fabricantes líderes del mundo" 
            align="left"
            className="mb-8 relative z-10"
          />
          <p className="font-sans text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed relative z-10 border-l-4 border-[var(--color-brass)] pl-6 max-w-3xl">
            Somos distribuidores autorizados y socios estratégicos de las marcas más reconocidas globalmente en bombeo industrial, control de procesos y soluciones electromecánicas.
          </p>
        </div>

        {/* Grid de Marcas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="group flex flex-col items-center justify-center p-8 bg-white border border-[var(--color-steel)]/20 hover:border-[var(--color-brass)]/50 transition-all duration-500 h-48 relative corner-brackets hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brass)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-full h-20 mb-4 flex items-center justify-center z-10">
                <img
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={`Logo de ${brand.name}`}
                  className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text */}
                <div className="absolute inset-0 flex items-center justify-center hidden">
                   <span className="font-display text-2xl font-bold text-[var(--color-ink)]/40 uppercase text-center tracking-widest group-hover:text-[var(--color-ink)]/80 transition-colors">
                     {brand.name}
                   </span>
                </div>
              </div>
              
              <span className="font-heading font-medium text-[var(--color-ink)] text-sm tracking-wide z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-[var(--color-steel)]/20"
        >
          <p className="font-sans text-[var(--color-ink)]/60 text-base md:text-lg max-w-2xl mx-auto">
            Y otras representaciones estratégicas. <br className="hidden md:block"/> 
            Consulta disponibilidad con nuestro equipo comercial para proyectos especiales.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
