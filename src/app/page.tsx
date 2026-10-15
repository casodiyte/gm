import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { QuickRequestForm } from "@/components/home/QuickRequestForm";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WordReveal } from "@/components/ui/WordReveal";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Isotipo } from "@/components/ui/Isotipo";
import { BRANDS, CONTACT, SITE } from "@/lib/site-data";
import { SERVICES } from "@/lib/services-data";

const products = [
  {
    name: "Bombas verticales",
    detail: "Turbina vertical, flujo mixto y flujo axial",
    image: "/images/catalogo/gm-turbina-vertical.webp",
    categoryId: "verticales",
  },
  {
    name: "Centrífugas horizontales",
    detail: "Proceso ANSI, inatascable y Vortex",
    image: "/images/catalogo/gm-ansi.webp",
    categoryId: "horizontales",
  },
  {
    name: "Caja partida y sellado",
    detail: "Configuraciones de caja partida y soluciones de sellado",
    image: "/images/catalogo/gm-caja-partida.webp",
    categoryId: "centrifugas",
  },
  {
    name: "Servicio severo",
    detail: "Heavy Flow, papel y acoplamiento directo",
    image: "/images/catalogo/gm-heavy-flow.webp",
    categoryId: "especiales",
  },
  {
    name: "Desplazamiento positivo",
    detail: "Charnela, aspas deslizantes y vacío",
    image: "/images/catalogo/gm-aspas-deslizantes.webp",
    categoryId: "desplazamiento-positivo",
  },
  {
    name: "Cavidades progresivas",
    detail: "Líneas NOV Mono y Moyno",
    image: "/images/catalogo/nov-serie-2000.webp",
    categoryId: "cavidades-progresivas",
  },
  {
    name: "Agitación y mezcla",
    detail: "Chemineer, Prochem, Greerco y Kenics",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Hero />

      <section className="relative overflow-hidden bg-[var(--color-mist)] py-16 lg:py-20" aria-labelledby="productos-title">
        <div
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,46,95,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,46,95,.045)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                <Isotipo className="h-5 w-5" />
                Catálogo
              </p>
              <WordReveal id="productos-title" as="h2" text="Nuestros productos" className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.02em] text-[var(--color-ink)] sm:text-5xl" />
              <div className="mt-5 max-w-4xl space-y-4 text-base leading-relaxed text-[var(--color-ink)]/70">
                <p>Ponemos a su alcance un portafolio especializado de equipos de bombeo, sistemas periféricos, componentes auxiliares y soluciones integrales para aplicaciones de bombeo. Complementamos nuestra oferta mediante representaciones y alianzas estratégicas con fabricantes especializados, integrando tecnología y experiencia para ofrecer soluciones a la medida de cada proyecto.</p>
                <p>Desde la selección del equipo hasta la integración del sistema, brindamos el respaldo técnico necesario para desarrollar soluciones confiables, eficientes y orientadas a las necesidades de nuestros clientes.</p>
              </div>
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
                    className={`group relative flex h-full overflow-hidden border border-[var(--color-steel)]/15 bg-white transition-[border-color,box-shadow] duration-300 hover:border-[var(--color-brass)]/60 hover:shadow-[0_20px_50px_rgba(0,46,95,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)] ${featured ? "min-h-[22rem] flex-col lg:min-h-full" : wide ? "min-h-[11rem] flex-col sm:flex-row" : "min-h-[16rem] flex-col"}`}
                  >
                    <div className={`relative flex-1 ${featured ? "min-h-56" : wide ? "min-h-32 sm:min-h-0 sm:max-w-[40%]" : "min-h-32"}`}>
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes={featured ? "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1280px) 290px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                        className={`object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.05] ${featured ? "p-8" : "p-5"}`}
                      />
                    </div>
                    <div className={`flex items-end justify-between gap-3 border-[var(--color-steel)]/10 ${featured ? "border-t p-5 sm:p-6" : wide ? "border-t p-4 sm:flex-1 sm:border-l sm:border-t-0 sm:p-5" : "border-t p-4"}`}>
                      <div>
                        <h3 className={`font-heading font-semibold uppercase leading-tight tracking-wide text-[var(--color-ink)] ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--color-ink)]/65">{product.detail}</p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--color-steel)]/20 text-[var(--color-ink)] transition-colors group-hover:border-[var(--color-brass)] group-hover:bg-[var(--color-brass)] group-hover:text-white" aria-hidden="true"><ArrowRight className="h-5 w-5" /></span>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--color-brass)] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--color-steel)]/10 bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <SectionHeader
                eyebrow="Ingeniería verificable"
                title="Pruebas hidráulicas para tomar mejores decisiones"
                className="mb-5"
              />
              <Reveal delay={0.08}>
                <div className="max-w-2xl space-y-4 border-l-[3px] border-[var(--color-brass)] pl-5 text-base leading-relaxed text-[var(--color-ink)]/75">
                  <p>En el Laboratorio GM contamos con la capacidad tecnológica para realizar pruebas y evaluar el desempeño de equipos de bombeo bajo condiciones controladas. Mediante el monitoreo y análisis de variables hidráulicas y eléctricas, obtenemos información precisa sobre el comportamiento y rendimiento de cada equipo.</p>
                  <p>Los resultados permiten validar las condiciones de operación, verificar el cumplimiento de los parámetros de diseño y atender los requerimientos específicos de cada cliente, brindando mayor confiabilidad y respaldo técnico en la evaluación de nuestros equipos de bombeo.</p>
                </div>
              </Reveal>
              <Reveal className="mt-6 flex flex-wrap gap-3" delay={0.16}>
                <Button asChild><Link href="/catalogo?categoria=laboratorio">Conocer el laboratorio <ArrowRight /></Link></Button>
                <Button variant="outline" asChild><a href="/downloads/catalogo-general-gm.pdf" target="_blank" rel="noopener noreferrer">Consultar catálogo</a></Button>
              </Reveal>
            </div>
            <ImageReveal className="corner-brackets mx-auto aspect-[4/3] w-full max-w-[520px] bg-[var(--color-ink)] p-1.5" delay={0.08}>
              <div className="relative h-full w-full overflow-hidden bg-[var(--color-ink)]">
                <Image
                  src="/images/planta/laboratorio-pruebas-v2.webp"
                  alt="Consola de instrumentación del laboratorio de pruebas hidráulicas GM"
                  fill
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, (min-width: 640px) 520px, 100vw"
                  className="object-contain"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-ink-2)] text-white" aria-labelledby="nosotros-title">
        <div className="grid lg:grid-cols-2">
          <div className="relative flex min-h-[16rem] items-center justify-center overflow-hidden bg-white px-8 py-12 lg:min-h-[34rem]">
            <div
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(0,46,95,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,46,95,.05)_1px,transparent_1px)] [background-size:48px_48px]"
              aria-hidden="true"
            />
            <Reveal direction="scale" className="relative aspect-[960/421] w-full max-w-xs xl:max-w-sm">
              <Image
                src="/images/logo-horizontal.png"
                alt="GM Corporativo"
                fill
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 320px, 80vw"
                className="object-contain"
              />
            </Reveal>
            <span className="brand-band absolute inset-x-0 bottom-0 h-2 lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:h-auto lg:w-2" aria-hidden="true" />
          </div>

          <div className="relative flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-16 xl:px-16">
            <p className="relative flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-sky)]">
              <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
              Nosotros
            </p>
            <div className="relative mt-6 flex items-end gap-5">
              <span className="font-display text-[clamp(5rem,12vw,9.5rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white">
                {SITE.yearsOfExperience}
              </span>
              <span className="pb-2 font-display text-2xl font-semibold uppercase leading-none text-[var(--color-sky)] sm:text-3xl">
                años de<br />experiencia
              </span>
            </div>
            <WordReveal
              id="nosotros-title"
              as="h2"
              text="Conocimiento técnico convertido en soluciones"
              className="relative mt-8 max-w-xl font-display text-3xl font-bold uppercase leading-none tracking-[-0.015em] sm:text-4xl"
            />
            <Reveal delay={0.1}>
              <p className="relative mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Somos especialistas en brindar soluciones en sistemas de bombeo para impulsar la productividad de nuestros clientes. Respaldados por nuestra experiencia y una sólida red de aliados estratégicos en diferentes especialidades, transformamos el conocimiento técnico en soluciones eficientes de alto valor.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link href="/nosotros" className="group relative mt-7 inline-flex items-center gap-3 font-heading text-lg font-semibold uppercase tracking-wide text-white">
                Conoce nuestra historia
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brass)] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-mist)] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Servicios" title="Soluciones alrededor de tu proceso" description="Equipos, rehabilitación, sellado, control y soporte técnico para la operación de tu planta." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal as="article" direction="scale" delay={index * 0.055} key={service.num} className="group overflow-hidden border border-[var(--color-steel)]/15 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-ink)]">
                    <Image src={service.imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="scale-110 object-cover opacity-30 blur-lg" aria-hidden="true" />
                    <Image src={service.imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 bg-[var(--color-ink)] px-2 py-1 font-mono text-xs font-semibold text-white">{service.num}</span>
                  </div>
                  <div className="p-5">
                    <Icon className="h-7 w-7 text-[var(--color-brass)]" aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-xl font-semibold text-[var(--color-ink)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{service.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center"><Button asChild><Link href="/servicios">Ver todos los servicios <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-ink)] py-16 text-white lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px]" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">Marcas representadas</p>
              <WordReveal as="h2" text="Aliados estratégicos para resolver el proceso completo" className="mt-4 text-balance font-display text-3xl font-bold uppercase leading-tight tracking-[-0.015em] text-white sm:text-4xl lg:text-5xl" />
              <Reveal delay={0.1}><p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">Integramos fabricantes especializados para cubrir bombeo, sellado, dosificación, vapor, motores, automatización y manejo de fluidos con respaldo técnico de principio a fin.</p></Reveal>
            </div>
            <Reveal delay={0.16}><Button asChild className="bg-[var(--color-brass)] text-[var(--color-ink)] hover:bg-white"><Link href="/marcas">Conocer todas las marcas <ArrowRight /></Link></Button></Reveal>
          </div>
          <ul className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBrands.map((brand, index) => (
              <Reveal as="li" direction="scale" delay={index * 0.05} key={brand.slug} className="group flex min-h-56 flex-col border border-white/15 bg-white p-5 text-[var(--color-ink)] shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-20 w-full border-b border-[var(--color-steel)]/15"><Image src={brand.logo} alt={brand.name} fill sizes="(min-width: 1280px) 240px, (min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw" className="object-contain object-left pb-3" /></div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-brass)]">{brand.area}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{brand.capabilities}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--color-steel)]/10 bg-[var(--color-paper)] py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">Industrias atendidas</p>
          <WordReveal as="h2" text="Ingeniería que se adapta al fluido y al proceso" className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl font-bold uppercase tracking-[-0.015em] text-[var(--color-ink)] sm:text-4xl" />
          <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
            {sectors.map((sector, index) => <Reveal as="li" direction="scale" delay={index * 0.035} key={sector} className="rounded-full border border-[var(--color-steel)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)]">{sector}</Reveal>)}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--color-steel)]/10 bg-white py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[22rem] font-bold leading-none text-[var(--color-ink)]/[0.035] lg:text-[38rem]" aria-hidden="true">&ldquo;</div>
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 h-1 w-16 bg-[var(--color-brass)]" />
          <WordReveal
            as="blockquote"
            text="La innovación tecnológica y la eficiencia energética son los pilares indispensables para construir una industria más competitiva, fuerte y sustentable."
            className="mx-auto max-w-4xl text-balance font-display text-2xl font-semibold leading-[1.2] text-[var(--color-ink)] sm:text-3xl lg:text-4xl"
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

      <section className="relative overflow-hidden bg-[var(--color-ink)] py-16 text-white lg:py-20">
        <div className="absolute inset-0 opacity-15"><Image src="/images/sectores/aguas.webp" alt="" fill sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/95 to-[var(--color-ink)]/70" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">Atención de ingeniería</p>
              <WordReveal as="h2" text="Cuéntanos tu necesidad de equipo de bombeo." className="mt-4 text-balance font-display text-3xl font-bold uppercase leading-tight tracking-[-0.015em] sm:text-4xl" />
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-white">Compártenos tus condiciones de operación.</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">Nuestro equipo técnico está listo para orientarte y ayudarte a encontrar la solución adecuada para tu proyecto.</p>
              </Reveal>
              <Reveal className="mt-8" delay={0.16}>
                <Button asChild className="bg-[var(--color-brass)] hover:bg-white hover:text-[var(--color-ink)]"><a href={`https://wa.me/${CONTACT.whatsappInternational}`} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp <ArrowRight /></a></Button>
              </Reveal>
            </div>
            <Reveal as="aside" direction="right" className="border border-white/15 bg-white/[0.055] p-5 backdrop-blur-sm sm:p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-sky)]">Condiciones de operación</p>
              <h3 className="mt-3 font-heading text-xl font-semibold">Datos útiles para orientar la solución</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Líquido a bombear", "Caudal o gasto requerido", "Carga o presión", "Temperatura", "Velocidad", "Ubicación del proyecto"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-white/80">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-sky)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">Si aún no cuentas con todos los datos, comparte lo disponible y te ayudaremos a ordenar el requerimiento.</p>
            </Reveal>
          </div>
          <Reveal className="mt-9" delay={0.18}>
            <QuickRequestForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
