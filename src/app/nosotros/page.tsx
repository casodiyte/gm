import Image from "next/image";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { WordReveal } from "@/components/ui/WordReveal";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Isotipo } from "@/components/ui/Isotipo";
import { SITE } from "@/lib/site-data";

const VALUES = [
  "Respeto",
  "Trabajo en equipo",
  "Responsabilidad",
  "Compromiso",
  "Sentido de pertenencia",
  "Vocación de servicio",
  "Excelencia",
  "Innovación",
  "Solidaridad y generosidad",
];

// La frase clave de cada texto se resalta; el texto completo es el aprobado por GM.
const PURPOSE = [
  {
    title: "Misión",
    before: "Optimizamos y mantenemos los procesos industriales para ",
    highlight: "impulsar la productividad de nuestros clientes",
    after: ". Respaldados por nuestra experiencia y una sólida red de aliados estratégicos, transformamos el conocimiento técnico en soluciones eficientes de alto valor.",
    dark: true,
  },
  {
    title: "Visión",
    before: "Ser una empresa líder que, a través de ingeniería avanzada, tecnología y un equipo dinámico, brinde ",
    highlight: "soluciones de alto impacto",
    after: " que impulsen la productividad y aseguren la continuidad del sector industrial.",
    dark: false,
  },
];

const FOCUS_AREAS = [
  {
    title: "Rentabilidad operativa",
    description: "Optimización de procesos para maximizar la rentabilidad operativa.",
    icon: TrendingUp,
  },
  {
    title: "Confiabilidad",
    description: "Fortalecimiento en la confiabilidad de los equipos de bombeo.",
    icon: ShieldCheck,
  },
  {
    title: "Eficiencia",
    description: "Reducción del consumo energético, promoviendo un uso eficiente de los recursos.",
    icon: Zap,
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Historia */}
      <section className="relative overflow-hidden pb-20 pt-36 lg:pb-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
              <Isotipo className="h-5 w-5" />
              Nuestra historia
            </p>
            <WordReveal
              as="h1"
              text={`Más de ${SITE.yearsOfExperience} años de flujo, presión y confiabilidad`}
              className="mt-6 text-balance font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[var(--color-ink)] sm:text-7xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-[var(--color-ink)]/75">
                Somos especialistas en brindar soluciones en sistemas de bombeo
                para impulsar la productividad de nuestros clientes. Respaldados
                por nuestra experiencia y una sólida red de aliados estratégicos
                en diferentes especialidades, transformamos el conocimiento
                técnico en soluciones eficientes de alto valor.
              </p>
            </Reveal>
          </div>

          <ImageReveal className="aspect-[4/3] w-full bg-[var(--color-ink)]" delay={0.08}>
            <Image
              src="/images/planta/equipo-gm.webp"
              alt="Equipo de GM Corporativo Industrial"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[var(--color-ink-2)]/90 to-transparent p-6 pt-20 text-white">
              <span className="font-heading text-2xl font-semibold uppercase tracking-wide">El equipo GM</span>
              <span className="text-sm text-white/75">Atizapán de Zaragoza, Edo. Méx.</span>
            </div>
          </ImageReveal>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="relative bg-[var(--color-mist)] py-24 lg:py-32" aria-labelledby="proposito-title">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
                Dirección y propósito
              </p>
              <WordReveal id="proposito-title" as="h2" text="Lo que nos mueve" className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[var(--color-ink)] sm:text-7xl" />
            </div>
            <p className="max-w-md text-lg leading-relaxed text-[var(--color-ink)]/70">
              La misión guía el trabajo de cada día; la visión marca hacia dónde lleva GM a sus clientes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {PURPOSE.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                direction={index === 0 ? "left" : "right"}
                delay={index * 0.08}
                className={`relative flex min-h-[26rem] flex-col overflow-hidden p-8 shadow-[0_30px_80px_rgba(0,46,95,0.12)] sm:p-12 ${
                  item.dark ? "bg-[var(--color-ink)] text-white" : "border-t-[6px] border-[var(--color-brass)] bg-white text-[var(--color-ink)]"
                }`}
              >
                <Isotipo
                  variant={item.dark ? "dark" : "light"}
                  className={`pointer-events-none absolute -bottom-10 -right-10 w-64 ${item.dark ? "opacity-[0.12]" : "opacity-[0.07]"}`}
                />
                <div className="relative flex items-center gap-4">
                  <Isotipo variant={item.dark ? "dark" : "light"} className="w-10" />
                  <h3 className={`font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl ${item.dark ? "text-white" : "text-[var(--color-ink)]"}`}>
                    {item.title}
                  </h3>
                </div>
                <span className={`relative mt-8 block h-1 w-16 ${item.dark ? "bg-[var(--color-brass)]" : "bg-[var(--color-ink)]"}`} aria-hidden="true" />
                <p className={`relative mt-8 text-xl leading-relaxed sm:text-2xl sm:leading-relaxed ${item.dark ? "text-white/85" : "text-[var(--color-ink)]/80"}`}>
                  {item.before}
                  <strong className={`font-semibold ${item.dark ? "text-[var(--color-sky)]" : "text-[var(--color-brass)]"}`}>{item.highlight}</strong>
                  {item.after}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-white lg:py-28" aria-labelledby="valores-title">
        <Isotipo variant="dark" className="pointer-events-none absolute -bottom-16 -right-12 w-[28rem] opacity-[0.08]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
            <h2 id="valores-title" className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-sky)]">Nuestros valores</h2>
          </div>
          <ul className="mt-10 flex max-w-6xl flex-wrap items-baseline gap-x-5 gap-y-2 font-display text-4xl font-bold uppercase leading-[1.05] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
            {VALUES.map((value, index) => (
              <Reveal as="li" key={value} delay={index * 0.04} direction="up" className="flex items-baseline gap-5">
                <span className={index % 2 === 0 ? "text-white" : "text-white/55"}>{value}</span>
                {index < VALUES.length - 1 && <span className="text-[var(--color-brass)]" aria-hidden="true">/</span>}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Dirección general */}
      <section className="py-24 lg:py-32" aria-labelledby="direccion-title">
        <div className="container mx-auto grid gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20 lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-32">
            <div className="absolute -bottom-5 -right-5 h-full w-full bg-[var(--color-ink)]" aria-hidden="true" />
            <div className="absolute -bottom-5 left-8 h-1.5 w-24 bg-[var(--color-brass)]" aria-hidden="true" />
            <ImageReveal className="relative aspect-[4/5] w-full bg-[var(--color-mist)]">
              <Image
                src="/images/team/02Angelica.webp"
                alt="Angélica Guerra Gutiérrez, Directora General de GM Corporativo Industrial"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-top"
              />
            </ImageReveal>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">Dirección general</p>
            <h2 id="direccion-title" className="mt-5 font-display text-6xl font-bold uppercase leading-[0.85] tracking-[-0.02em] text-[var(--color-ink)] sm:text-8xl">
              Angélica
              <span className="block text-[var(--color-brass)]">Guerra Gutiérrez</span>
            </h2>
            <p className="mt-6 font-heading text-2xl font-medium uppercase tracking-[0.08em] text-[var(--color-steel)]">Directora General</p>

            <Reveal delay={0.08}>
              <p className="mt-10 max-w-2xl border-l-2 border-[var(--color-brass)] pl-6 text-xl leading-relaxed text-[var(--color-ink)]/80">
                Angélica Guerra es una destacada líder empresarial con una
                trayectoria en la ingeniería de procesos aplicados a sistemas de
                bombeo. Su visión estratégica ha sido clave para impulsar el
                crecimiento y la consolidación de GM, posicionando a la compañía
                como un referente en el desarrollo de soluciones de alta
                ingeniería para la industria.
              </p>
            </Reveal>

            <div className="mt-14 border-t border-[var(--color-steel)]/20 pt-10">
              <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.01em] text-[var(--color-ink)]">Enfoque estratégico y valor agregado</h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">
                Con una trayectoria de más de {SITE.yearsOfExperience} años en la
                industria, Angélica ha trabajado estrechamente con ingenios
                azucareros y diversos sectores industriales. Su amplia experiencia
                le permite comprender a fondo los retos operativos de los clientes,
                especializándose en el diseño e implementación de soluciones
                orientadas a:
              </p>

              <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[var(--color-steel)]/20">
                {FOCUS_AREAS.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Reveal as="li" key={area.title} delay={index * 0.07} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-brass)]/40 text-[var(--color-brass)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h4 className="mt-5 font-heading text-xl font-semibold uppercase tracking-wide text-[var(--color-ink)]">{area.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{area.description}</p>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-20 text-white lg:py-24">
        <Isotipo variant="dark" className="pointer-events-none absolute -left-10 top-1/2 w-72 -translate-y-1/2 opacity-[0.08]" />
        <figure className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="block font-display text-8xl leading-none text-[var(--color-brass)]" aria-hidden="true">&ldquo;</span>
          <WordReveal
            as="blockquote"
            text="La innovación tecnológica y la eficiencia energética son pilares para construir una industria más competitiva, fuerte y sustentable."
            className="-mt-6 text-balance font-display text-4xl font-semibold uppercase leading-[1.05] sm:text-5xl"
          />
          <figcaption className="mt-8 flex items-center gap-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-sky)]">
            <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
            Angélica Guerra, Directora General
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
