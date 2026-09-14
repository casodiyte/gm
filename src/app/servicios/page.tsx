"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { SITE } from "@/lib/site-data";
import { SERVICES, type ServiceDetails } from "@/lib/services-data";

const PILLARS = [
  { title: "Diagnóstico", desc: "Partimos del fluido, las condiciones de operación y el objetivo del sistema." },
  { title: "Ingeniería", desc: "Relacionamos equipo, materiales, hidráulica y control como una sola solución." },
  { title: "Ejecución", desc: "Fabricación, integración o rehabilitación con alcance técnico definido." },
  { title: "Acompañamiento", desc: "Información técnica y soporte para selección, operación y mantenimiento." },
];

export default function ServiciosPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const closeModal = useCallback(() => setSelectedService(null), []);

  return (
    <div className="relative min-h-screen bg-[var(--color-paper)] pb-24 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative z-10 mb-24 max-w-4xl pt-8">
          <div className="pointer-events-none absolute -left-4 top-0 select-none whitespace-nowrap font-display text-[4rem] font-bold uppercase leading-none tracking-tighter text-[var(--color-steel)]/5 md:text-[8rem]" aria-hidden="true">
            Soluciones
          </div>
          <SectionHeader
            eyebrow={`Servicios / ${SERVICES.length} líneas`}
            title="Soluciones integrales para la industria"
            align="left"
            className="relative z-10 mb-8"
            as="h1"
          />
          <Reveal delay={0.12}>
            <p className="relative z-10 max-w-3xl border-l-4 border-[var(--color-brass)] pl-6 font-sans text-lg leading-relaxed text-[var(--color-ink)]/75 md:text-xl">
              Más allá de vender equipos, integramos soluciones. Cada línea de servicio nace de un problema operativo real que hemos resuelto en piso durante {SITE.yearsOfExperience} años.
            </p>
          </Reveal>
        </div>

        <div className="relative z-10 mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((srv, idx) => (
            <Reveal
              key={srv.num}
              direction="scale"
              delay={(idx % 4) * 0.07}
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
            </Reveal>
          ))}
        </div>

        <div className="corner-brackets relative overflow-hidden rounded-sm border border-[var(--color-steel)]/20 shadow-2xl">
          <ImageReveal className="absolute inset-0 z-0">
            <Image
              src="/images/sectores/aguas.webp"
              alt=""
              fill
              sizes="100vw"
              className="scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/95 to-[var(--color-ink)]/75" />
          </ImageReveal>

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 p-10 md:p-20 lg:flex-row lg:items-center">

            <div className="lg:w-1/3">
              <WordReveal as="h2" text="¿Qué hace diferente a GM Corporativo?" className="mb-6 font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] text-white md:text-5xl" />
              <div className="h-1 w-16 bg-[var(--color-brass)]" />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:w-2/3">
              {PILLARS.map((pilar, idx) => (
                <Reveal key={pilar.title} direction="scale" delay={idx * 0.065} className="flex flex-col">
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/5 font-mono text-sm font-semibold text-[var(--color-sky)]">
                      0{idx + 1}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="pl-16 font-sans text-sm leading-relaxed text-white/75 md:text-base">
                    {pilar.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>

      <ServiceModal
        service={selectedService}
        onClose={closeModal}
      />
    </div>
  );
}
