"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cog, Zap, ShieldCheck, Wrench, Droplets, Wind, Fan, Gauge, Replace, Activity, Settings2, Hammer } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceModal, ServiceDetails } from "@/components/ui/ServiceModal";

const SERVICES: ServiceDetails[] = [
  { num: "01", title: "Equipos de bombeo", desc: "Fabricación y comercialización de bombas para todo proceso industrial.", fullDesc: "Fabricamos y comercializamos bombas industriales para todo tipo de proceso, con más de 15 líneas de producto respaldadas por nuestro laboratorio acreditado EMA.", icon: Cog, imageSrc: "/images/sectores/service_bombeo_1784677820847.jpg" },
  { num: "02", title: "Motores eléctricos", desc: "Suministro, rebobinado y diagnóstico de motores para servicio pesado.", fullDesc: "Suministro, rebobinado y diagnóstico de motores para servicio pesado, con acompañamiento técnico para garantizar continuidad operativa.", icon: Zap, imageSrc: "/images/sectores/service_motores_1784677831770.jpg" },
  { num: "03", title: "Soluciones electromecánicas", desc: "Integración de sistemas mecánicos y eléctricos a la medida.", fullDesc: "Integramos sistemas mecánicos y eléctricos a la medida del proceso, desde la ingeniería de diseño hasta la puesta en marcha.", icon: Settings2, imageSrc: "/images/sectores/service_electromec_1784677840904.jpg" },
  { num: "04", title: "Sellos mecánicos", desc: "Sellado de alto desempeño para condiciones críticas.", fullDesc: "Sellado de alto desempeño para condiciones críticas de presión, temperatura y compatibilidad química, seleccionado bajo criterio de ingeniería.", icon: ShieldCheck, imageSrc: "/images/sectores/manufactura.jpg" },
  { num: "05", title: "Turbinas de vapor", desc: "Suministro y mantenimiento de turbinas para generación y proceso.", fullDesc: "Suministro y mantenimiento de turbinas para generación y proceso, con soporte especializado para la industria azucarera, papelera y de cogeneración.", icon: Fan, imageSrc: "/images/sectores/minero.jpg" },
  { num: "06", title: "Válvulas de control", desc: "Instrumentación de control de flujo, presión y temperatura.", fullDesc: "Instrumentación para el control preciso de flujo, presión y temperatura, integrada al esquema de operación de tu planta.", icon: Gauge, imageSrc: "/images/sectores/papelero.jpg" },
  { num: "07", title: "Equipos agroindustriales", desc: "Soluciones específicas para el ingenio azucarero y agroindustria.", fullDesc: "Soluciones específicas para ingenios azucareros y agroindustria, diseñadas a partir de nuestra experiencia directa en el sector desde hace 38 años.", icon: Wrench, imageSrc: "/images/sectores/azucarero.jpg" },
  { num: "08", title: "Tratamiento de agua", desc: "Sistemas de tratamiento y bombeo para agua de proceso y residual.", fullDesc: "Sistemas de tratamiento y bombeo para agua de proceso, residual y de servicios, con enfoque en eficiencia energética y cumplimiento normativo.", icon: Droplets, imageSrc: "/images/sectores/aguas.jpg" },
  { num: "09", title: "Rehabilitación de equipos", desc: "Recuperación integral de bombas existentes con garantía.", fullDesc: "Recuperación integral de bombas existentes con garantía. Diagnóstico, remaquinado y pruebas de aceptación en nuestro laboratorio acreditado.", icon: Replace, imageSrc: "/images/sectores/alimentos.jpg" },
  { num: "10", title: "Accesorios y servicio técnico", desc: "Refacciones OEM, asesoría y soporte de campo.", fullDesc: "Refacciones OEM, asesoría de ingeniería y soporte de campo. Somos la extensión técnica de tu equipo de mantenimiento.", icon: Hammer, imageSrc: "/images/sectores/manufactura.jpg" },
  { num: "11", title: "Ventilación industrial", desc: "Sistemas de manejo de aire para procesos críticos.", fullDesc: "Sistemas de manejo de aire para procesos críticos, extracción de humos, control ambiental y confort en piso de planta.", icon: Wind, imageSrc: "/images/sectores/papelero.jpg" },
  { num: "12", title: "Extracción e inyección", desc: "Sistemas de captación y descarga en ambientes complejos.", fullDesc: "Sistemas de captación y descarga en ambientes complejos, para procesos que demandan operación continua y confiabilidad probada.", icon: Activity, imageSrc: "/images/sectores/minero.jpg" },
];

export default function ServiciosPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  return (
    <div className="pt-28 pb-24 bg-[var(--color-paper)] min-h-screen relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative max-w-4xl mb-24 z-10 pt-8">
          <div className="absolute top-0 -left-4 text-[4rem] md:text-[8rem] font-display font-bold text-[var(--color-steel)]/5 pointer-events-none select-none uppercase tracking-tighter leading-none whitespace-nowrap">
            Soluciones
          </div>
          <SectionHeader 
            eyebrow="SERVICIOS / 12 LÍNEAS" 
            title="Ingeniería aplicada, de extremo a extremo" 
            align="left"
            className="mb-8 relative z-10"
            as="h1"
          />
          <p className="font-sans text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed relative z-10 border-l-4 border-[var(--color-brass)] pl-6 max-w-3xl">
            Más allá de vender equipos, integramos soluciones. Cada línea de servicio nace de un problema operativo real que hemos resuelto en piso durante 45 años.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32 relative z-10">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="h-full"
            >
              <ServiceCard 
                number={srv.num}
                title={srv.title}
                description={srv.desc}
                Icon={srv.icon}
                imageSrc={srv.imageSrc}
                onClick={() => setSelectedService(srv)}
              />
            </motion.div>
          ))}
        </div>

        {/* Por qué GM */}
        <div className="relative rounded-sm overflow-hidden corner-brackets border border-[var(--color-steel)]/20 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sectores/aguas.jpg" 
              alt="Planta de Tratamiento" 
              fill
              sizes="100vw"
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/95 to-[var(--color-ink)]/70" />
            <div className="absolute inset-0 bg-[var(--color-ink)]/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 p-10 md:p-20 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
            
            <div className="lg:w-1/3">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase leading-tight">
                ¿Por qué <br/><span className="text-[var(--color-brass)]">GM Industrial?</span>
              </h2>
              <div className="w-16 h-1 bg-[var(--color-brass)]" />
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {[
                { title: "Rentabilidad", desc: "Optimización de procesos para maximizar rentabilidad operativa." },
                { title: "Confiabilidad", desc: "Incremento drástico en la confiabilidad de los equipos de bombeo." },
                { title: "Eficiencia", desc: "Reducción significativa del consumo energético y huella de carbono." },
                { title: "Respaldo", desc: "Acompañamiento integral de extremo a extremo, 24/7." }
              ].map((pilar, idx) => (
                <div key={idx} className="flex flex-col group cursor-default">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 text-[var(--color-brass)] flex items-center justify-center shrink-0 font-mono text-sm group-hover:bg-[var(--color-brass)] group-hover:text-[var(--color-ink)] group-hover:scale-110 transition-all duration-300">
                      0{idx + 1}
                    </div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl text-white group-hover:text-[var(--color-brass)] transition-colors">
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed pl-16 group-hover:text-white/80 transition-colors">
                    {pilar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* Modal de Servicio */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}
