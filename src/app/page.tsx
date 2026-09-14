import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  FileSearch,
  Handshake,
  Settings,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WordReveal } from "@/components/ui/WordReveal";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Isotipo } from "@/components/ui/Isotipo";
import { BRANDS, CONTACT, SITE } from "@/lib/site-data";
import { SERVICES } from "@/lib/services-data";
import { CATALOG_ITEM_COUNT, GM_FAMILY_COUNT } from "@/lib/catalog-data";

const products = [
  {
    name: "Bombas verticales",
    detail: "Turbina vertical, flujo mixto y flujo axial",
    figure: "42,000",
    unit: "gpm de caudal máximo",
    image: "/images/catalogo/gm-turbina-vertical.webp",
    categoryId: "verticales",
  },
  {
    name: "Centrífugas horizontales",
    detail: "Proceso ANSI, inatascable y Vortex",
    figure: "4,000",
    unit: "gpm",
    image: "/images/catalogo/gm-ansi.webp",
    categoryId: "horizontales",
  },
  {
    name: "Caja partida y sellado",
    detail: "Hasta 1,500 ft de carga total",
    figure: "18,000",
    unit: "gpm",
    image: "/images/catalogo/gm-caja-partida.webp",
    categoryId: "centrifugas",
  },
  {
    name: "Servicio severo",
    detail: "Heavy Flow, papel y acoplamiento directo",
    figure: "30,000",
    unit: "gpm",
    image: "/images/catalogo/gm-heavy-flow.webp",
    categoryId: "especiales",
  },
  {
    name: "Desplazamiento positivo",
    detail: "Charnela, aspas deslizantes y vacío",
    figure: "90",
    unit: "m³/h",
    image: "/images/catalogo/gm-aspas-deslizantes.webp",
    categoryId: "desplazamiento-positivo",
  },
  {
    name: "Cavidades progresivas",
    detail: "Líneas NOV Mono y Moyno",
    figure: "6",
    unit: "líneas",
    image: "/images/catalogo/nov-serie-2000.webp",
    categoryId: "cavidades-progresivas",
  },
  {
    name: "Agitación y mezcla",
    detail: "Chemineer, Prochem, Greerco y Kenics",
    figure: "4",
    unit: "marcas",
    image: "/images/catalogo/nov-prochem-agitador-entrada-lateral.webp",
    categoryId: "mezcla",
  },
] as const;

const featuredServiceTitles = [
  "Equipos de bombeo",
  "Motores eléctricos",
  "Soluciones electromecánicas",
  "Sellos mecánicos",
  "Tratamiento de agua",
  "Rehabilitación de equipos",
];
const featuredServices = SERVICES.filter((service) => featuredServiceTitles.includes(service.title));

const featuredBrandSlugs = ["nov", "vogelsang", "tsurumi", "latty", "exatta", "forbes-marshall", "temisa", "sje-rhombus"];
const featuredBrands = featuredBrandSlugs
  .map((slug) => BRANDS.find((brand) => brand.slug === slug))
  .filter((brand) => brand !== undefined);

const sectors = [
  "Agua y tratamiento",
  "Azúcar",
  "Minería",
  "Papel",
  "Alimentos y bebidas",
  "Aceites",
  "Química",
  "Manufactura",
] as const;

const processSteps = [
  {
    number: "01",
    title: "Entender la operación",
    description: "Revisamos fluido, caudal, carga, temperatura, sólidos y condiciones de instalación.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Definir la solución",
    description: "Relacionamos hidráulica, materiales, equipo, sellado, control y alcance de servicio.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Fabricar o integrar",
    description: "Ejecutamos fabricación GM, rehabilitación o integración de tecnología especializada.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Acompañar la decisión",
    description: "Entregamos información técnica para selección, puesta en servicio y mantenimiento.",
    icon: Handshake,
  },
] as const;

const stats = [
  { value: `+${SITE.yearsOfExperience}`, label: "Años de experiencia" },
  { value: String(GM_FAMILY_COUNT), label: "Familias de bombas GM" },
  { value: String(BRANDS.length), label: "Marcas representadas" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Hero />

      <section className="relative overflow-hidden bg-[var(--color-mist)] py-24 lg:py-32" aria-labelledby="productos-title">
        <div
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,46,95,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,46,95,.045)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                <Isotipo className="h-5 w-5" />
                Catálogo
              </p>
              <WordReveal id="productos-title" as="h2" text="Nuestros productos" className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[var(--color-ink)] sm:text-7xl" />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/70">
                {GM_FAMILY_COUNT} familias de bombas fabricadas por GM y {CATALOG_ITEM_COUNT - GM_FAMILY_COUNT} equipos más de las líneas que integramos.
              </p>
            </div>
            <Button asChild size="lg" className="w-fit"><Link href="/catalogo">Explorar el catálogo <ArrowRight /></Link></Button>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => {
              const featured = index === 0;
              const wide = index >= 5;
              return (
                <Reveal
                  as="li"
                  direction="scale"
                  delay={index * 0.05}
                  key={product.name}
                  className={featured ? "sm:col-span-2 lg:row-span-2" : wide ? "sm:col-span-2" : undefined}
                >
                  <Link
                    href={`/catalogo?categoria=${product.categoryId}`}
                    className={`group relative flex h-full overflow-hidden border border-[var(--color-steel)]/15 bg-white transition-[border-color,box-shadow] duration-300 hover:border-[var(--color-brass)]/60 hover:shadow-[0_30px_70px_rgba(0,46,95,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] ${featured ? "min-h-[26rem] flex-col lg:min-h-full" : wide ? "min-h-[13rem] flex-col sm:flex-row" : "min-h-[19rem] flex-col"}`}
                  >
                    <div className={`relative flex-1 ${featured ? "min-h-64" : wide ? "min-h-40 sm:min-h-0 sm:max-w-[45%]" : "min-h-40"}`}>
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                        className={`object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.05] ${featured ? "p-10" : "p-6"}`}
                      />
                    </div>
                    <div className={`flex items-end justify-between gap-4 border-[var(--color-steel)]/10 ${featured ? "border-t p-7 sm:p-9" : wide ? "border-t p-5 sm:flex-1 sm:border-l sm:border-t-0 sm:p-7" : "border-t p-5"}`}>
                      <div>
                        <h3 className={`font-heading font-semibold uppercase leading-none tracking-wide text-[var(--color-ink)] ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--color-ink)]/65">{product.detail}</p>
                      </div>
                      <p className="shrink-0 text-right">
                        <span className={`block font-display font-bold leading-none text-[var(--color-brass)] ${featured ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{product.figure}</span>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-steel)]">{product.unit}</span>
                      </p>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--color-brass)] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--color-steel)]/10 bg-white py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Ingeniería verificable"
                title="Pruebas hidráulicas para tomar mejores decisiones"
                className="mb-7"
              />
              <Reveal delay={0.08}>
                <p className="max-w-2xl border-l-4 border-[var(--color-brass)] pl-6 text-lg leading-relaxed text-[var(--color-ink)]/75">
                  El laboratorio GM permite caracterizar el comportamiento hidráulico de equipos horizontales y verticales mediante variables de caudal, carga y desempeño. La información obtenida ayuda a validar, rehabilitar o seleccionar un sistema de bombeo.
                </p>
              </Reveal>
              <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.16}>
                <Button asChild><Link href="/catalogo?categoria=laboratorio">Ver capacidad de pruebas <ArrowRight /></Link></Button>
                <Button variant="outline" asChild><a href="/downloads/catalogo-general-gm.pdf" target="_blank" rel="noopener noreferrer">Consultar catálogo</a></Button>
              </Reveal>
            </div>
            <ImageReveal className="corner-brackets aspect-[4/3] bg-[var(--color-ink)] p-2" delay={0.08}>
              <div className="relative h-full w-full overflow-hidden bg-[var(--color-ink)]">
                <Image
                  src="/images/planta/laboratorio-pruebas-v2.webp"
                  alt="Consola de instrumentación del laboratorio de pruebas hidráulicas GM"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-contain"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-ink-2)] text-white" aria-labelledby="nosotros-title">
        <div className="grid lg:grid-cols-2">
          <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden bg-white px-10 py-16 lg:min-h-[44rem]">
            <div
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(0,46,95,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,46,95,.05)_1px,transparent_1px)] [background-size:48px_48px]"
              aria-hidden="true"
            />
            <Reveal direction="scale" className="relative aspect-[960/421] w-full max-w-md xl:max-w-lg">
              <Image
                src="/images/logo-horizontal.png"
                alt="GM Corporativo"
                fill
                sizes="(min-width: 1280px) 512px, (min-width: 1024px) 448px, 80vw"
                className="object-contain"
              />
            </Reveal>
            <span className="brand-band absolute inset-x-0 bottom-0 h-2 lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:h-auto lg:w-2" aria-hidden="true" />
          </div>

          <div className="relative flex flex-col justify-center px-6 py-16 sm:px-12 lg:py-24 xl:px-20">
            <p className="relative flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-sky)]">
              <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
              Nosotros
            </p>
            <div className="relative mt-6 flex items-end gap-5">
              <span className="font-display text-[clamp(7rem,16vw,13rem)] font-bold leading-[0.78] tracking-[-0.04em] text-white">
                {SITE.yearsOfExperience}
              </span>
              <span className="pb-3 font-display text-3xl font-semibold uppercase leading-[0.95] text-[var(--color-sky)] sm:text-4xl">
                años de<br />experiencia
              </span>
            </div>
            <WordReveal
              id="nosotros-title"
              as="h2"
              text="Conocimiento técnico convertido en soluciones"
              className="relative mt-10 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.015em] sm:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="relative mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Somos especialistas en brindar soluciones en sistemas de bombeo para impulsar la productividad de nuestros clientes. Respaldados por nuestra experiencia y una sólida red de aliados estratégicos en diferentes especialidades, transformamos el conocimiento técnico en soluciones eficientes de alto valor.
              </p>
            </Reveal>
            <dl className="relative mt-10 grid max-w-xl grid-cols-2 border-y border-white/15">
              {stats.slice(1).map((stat, index) => (
                <div key={stat.label} className={`py-6 ${index === 0 ? "border-r border-white/15 pr-6" : "pl-6"}`}>
                  <dd className="font-display text-5xl font-bold leading-none">{stat.value}</dd>
                  <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <Reveal delay={0.16}>
              <Link href="/nosotros" className="group relative mt-10 inline-flex items-center gap-3 font-heading text-xl font-semibold uppercase tracking-wide text-white">
                Conoce nuestra historia
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brass)] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-mist)] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Servicios" title="Soluciones alrededor de tu proceso" description="Equipos, rehabilitación, sellado, control y soporte técnico para la operación de tu planta." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal as="article" direction="scale" delay={index * 0.055} key={service.num} className="group overflow-hidden border border-[var(--color-steel)]/15 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-ink)]">
                    <Image src={service.imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="scale-110 object-cover opacity-30 blur-lg" aria-hidden="true" />
                    <Image src={service.imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 bg-[var(--color-ink)] px-2 py-1 font-mono text-xs font-semibold text-white">{service.num}</span>
                  </div>
                  <div className="p-6">
                    <Icon className="h-8 w-8 text-[var(--color-brass)]" aria-hidden="true" />
                    <h3 className="mt-5 font-heading text-2xl font-semibold text-[var(--color-ink)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{service.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Button asChild><Link href="/servicios">Ver todos los servicios <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="border-b border-[var(--color-steel)]/10 bg-[var(--color-paper)] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Método de trabajo"
                title="Del problema de planta a una solución ejecutable"
                description="No se trata sólo de vender un equipo: cada proyecto comienza con las variables reales de la operación."
              />
              <Button variant="outline" asChild>
                <Link href="/contacto">Preparar requerimiento <ArrowRight /></Link>
              </Button>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Reveal as="li" direction={Number(step.number) % 2 === 0 ? "right" : "left"} delay={(Number(step.number) - 1) * 0.06} key={step.number} className="relative min-h-64 overflow-hidden border border-[var(--color-steel)]/15 bg-white p-7 shadow-[0_16px_45px_rgba(0,46,95,0.055)]">
                    <span className="absolute right-5 top-3 font-display text-7xl font-bold text-[var(--color-ink)]/[0.05]" aria-hidden="true">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-brass)]/10 text-[var(--color-brass)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-7 font-heading text-2xl font-semibold text-[var(--color-ink)]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{step.description}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-mist)] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">Marcas representadas</p>
              <WordReveal as="h2" text="Aliados estratégicos para resolver el proceso completo" className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] text-[var(--color-ink)] sm:text-5xl" />
              <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/70">Además de las bombas GM, integramos tecnologías de fabricantes especializados en cavidades progresivas, mezcla, dosificación, sellado, vapor, automatización y manejo de fluidos.</p></Reveal>
              <Reveal delay={0.16}><Button variant="outline" asChild className="mt-7"><Link href="/marcas">Conocer todas las marcas <ArrowRight /></Link></Button></Reveal>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {featuredBrands.map((brand, index) => (
                <Reveal as="li" direction="scale" delay={index * 0.05} key={brand.slug} className="flex min-h-28 items-center justify-center border border-[var(--color-steel)]/15 bg-white p-4 shadow-sm">
                  <div className="relative h-14 w-full"><Image src={brand.logo} alt={brand.name} fill sizes="(min-width: 1280px) 12vw, 25vw" className="object-contain" /></div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-steel)]/10 bg-[var(--color-paper)] py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">Industrias atendidas</p>
          <WordReveal as="h2" text="Ingeniería que se adapta al fluido y al proceso" className="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-bold uppercase tracking-[-0.015em] text-[var(--color-ink)] sm:text-5xl" />
          <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {sectors.map((sector, index) => <Reveal as="li" direction="scale" delay={index * 0.035} key={sector} className="rounded-full border border-[var(--color-steel)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)]">{sector}</Reveal>)}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--color-steel)]/10 bg-white py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[22rem] font-bold leading-none text-[var(--color-ink)]/[0.035] lg:text-[38rem]" aria-hidden="true">&ldquo;</div>
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 h-1 w-16 bg-[var(--color-brass)]" />
          <WordReveal
            as="blockquote"
            text="La innovación tecnológica y la eficiencia energética son los pilares indispensables para construir una industria más competitiva, fuerte y sustentable."
            className="mx-auto max-w-5xl text-balance font-display text-3xl font-semibold leading-[1.15] text-[var(--color-ink)] sm:text-4xl lg:text-5xl"
          />
          <Reveal delay={0.2}>
            <cite className="mt-10 flex items-center justify-center gap-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)] not-italic sm:text-sm">
              <span className="h-px w-8 bg-[var(--color-steel)]/40" />
              Angélica Guerra, Directora General
              <span className="h-px w-8 bg-[var(--color-steel)]/40" />
            </cite>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-white">
        <div className="absolute inset-0 opacity-15"><Image src="/images/sectores/aguas.webp" alt="" fill sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/95 to-[var(--color-ink)]/70" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">Atención de ingeniería</p>
            <WordReveal as="h2" text="Cuéntanos qué fluido mueves y qué necesita tu proceso." className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-[-0.015em] sm:text-5xl" />
            <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">Comparte caudal, carga, temperatura y condiciones de operación. Nuestro equipo podrá orientarte hacia una solución o una revisión técnica.</p></Reveal>
            <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.16}>
              <Button asChild className="bg-[var(--color-brass)] hover:bg-white hover:text-[var(--color-ink)]"><a href={`https://wa.me/${CONTACT.whatsappInternational}`} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp <ArrowRight /></a></Button>
              <Button variant="outline" asChild className="border-white/40 text-white hover:border-white hover:bg-white hover:text-[var(--color-ink)]"><Link href="/contacto">Preparar solicitud</Link></Button>
            </Reveal>
            </div>
            <Reveal as="aside" direction="right" className="border border-white/15 bg-white/[0.055] p-7 backdrop-blur-sm sm:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-sky)]">Para comenzar</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold">Ten a la mano estos datos</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Fluido y sólidos", "Caudal requerido", "Carga o presión", "Temperatura", "Materiales disponibles", "Ubicación del proyecto"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-sky)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">Si aún no cuentas con todos los datos, comparte lo disponible y te ayudaremos a ordenar el requerimiento.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
