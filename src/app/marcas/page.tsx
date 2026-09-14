import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { BRANDS } from "@/lib/site-data";

export default function MarcasPage() {
  const [featuredBrand, ...otherBrands] = BRANDS;

  return (
    <div className="min-h-screen bg-[var(--color-paper)] pb-24 pt-32">
      <div>
        <section className="relative overflow-hidden border-b border-[var(--color-steel)]/15 pb-20 pt-10">
          <div
            className="pointer-events-none absolute -right-6 top-0 select-none font-display text-[clamp(6rem,18vw,15rem)] font-bold uppercase leading-none text-[var(--color-steel)]/[0.035]"
            aria-hidden="true"
          >
            Marcas
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              <Reveal direction="left" className="mb-5 flex items-center gap-4">
                <span className="h-px w-8 bg-[var(--color-brass)]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                  Representaciones
                </span>
              </Reveal>
              <WordReveal as="h1" text="Trabajamos con fabricantes líderes" className="text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl" />
              <Reveal delay={0.12}>
                <p className="mt-8 max-w-3xl border-l-4 border-[var(--color-brass)] pl-7 font-sans text-lg leading-relaxed text-[var(--color-ink)]/75 sm:text-xl">
                  Colaboramos con fabricantes especializados para ampliar la
                  solución disponible en bombeo, mezcla, dosificación, sellado,
                  vapor, automatización y mantenimiento electromecánico.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal as="article" direction="scale" className="relative overflow-hidden border border-[var(--color-brass)]/25 bg-[var(--color-ink)] p-8 text-white shadow-[0_30px_90px_rgba(0,46,95,0.18)] sm:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-brass)]/15 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
                <div className="flex min-h-44 items-center justify-center bg-white p-8">
                  <div className="relative h-24 w-full">
                    <Image src={featuredBrand.logo} alt={`Logo de ${featuredBrand.name}`} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain" />
                  </div>
                </div>
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 border border-[var(--color-sky)]/35 bg-[var(--color-brass)]/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-sky)]">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    Distribuidor autorizado en México
                  </div>
                  <WordReveal as="h2" text={featuredBrand.name} className="text-balance font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] sm:text-5xl" />
                  <p className="mt-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    {featuredBrand.area} · {featuredBrand.country}
                  </p>
                  <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/80">
                    {featuredBrand.capabilities}
                  </p>
                  <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-white/65">
                    Distribución autorizada en México para promoción y venta en
                    tratamiento de agua, ingenios azucareros, papel, minería y
                    aceites, conforme a la carta de representación disponible.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">
                Aliados estratégicos
              </p>
              <WordReveal as="h2" text="Soluciones especializadas por aplicación" className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] text-[var(--color-ink)] sm:text-5xl" />
              <Reveal delay={0.1}>
                <p className="mt-5 font-sans text-base leading-relaxed text-[var(--color-ink)]/70 sm:text-lg">
                  La disponibilidad, alcance comercial y configuración de cada
                  equipo se confirman con nuestro equipo antes de cotizar.
                </p>
              </Reveal>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {otherBrands.map((brand, index) => (
                <Reveal
                  as="li"
                  direction="scale"
                  delay={(index % 3) * 0.065}
                  key={brand.slug}
                  className="corner-brackets group flex min-h-[320px] flex-col border border-[var(--color-steel)]/15 bg-white p-7 shadow-[0_12px_40px_rgba(0,46,95,0.055)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--color-brass)]/45 hover:shadow-[0_22px_55px_rgba(0,46,95,0.1)] sm:p-8"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={brand.logo}
                      alt={`Logo de ${brand.name}`}
                      fill
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 45vw, 90vw"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="mt-7 h-px w-full bg-[var(--color-steel)]/15" />
                  <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.13em]">
                    <span className="text-[var(--color-ink)]">{brand.area}</span>
                    <span className="shrink-0 text-[var(--color-steel)]">{brand.country}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-[var(--color-ink)]">
                    {brand.name}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--color-ink)]/70">
                    {brand.capabilities}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[var(--color-ink)] py-20 text-center text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">
                Selección por ingeniería
              </span>
              <WordReveal as="h2" text="Encontremos la tecnología adecuada para tu proceso" className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] sm:text-5xl" />
              <Reveal delay={0.1}><p className="mt-6 font-sans text-lg leading-relaxed text-white/75">
                  Comparte las condiciones de operación y revisaremos la familia
                  de equipos y el respaldo técnico disponibles para tu proyecto.
                </p></Reveal>
              <Reveal delay={0.16}>
                <Link
                  href="/contacto"
                  className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-brass)] px-7 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-ink)]"
                >
                  Solicitar orientación
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
