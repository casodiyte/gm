"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Factory, Mountain, FileStack, Droplets, UtensilsCrossed, Cog, ArrowRight, Zap, Wrench, ShieldCheck, Fan, Gauge } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-[var(--color-paper)]">
        {/* Right side Image (Desktop) / Background Image (Mobile) */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 opacity-20 lg:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-paper)] via-transparent to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)] via-[var(--color-paper)]/80 to-transparent z-10 block lg:hidden" />
          <Image
            src="https://lirp.cdn-website.com/701a9e2d/dms3rep/multi/opt/bg_412880776_01-1920w.jpg"
            alt="Fondo Hero Industrial"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:-mt-16"
          >
            <motion.p variants={fadeInUp} className="font-mono text-sm tracking-widest text-[var(--color-brass)] mb-2 uppercase">
              GM Corporativo Industrial / Est. 1987
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-[11px] tracking-[0.3em] text-[var(--color-steel)] mb-6 uppercase font-medium">
              Excellence Through Experience in Optimum Technology
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.15] text-[var(--color-ink)] mb-6 uppercase text-balance pr-4">
              Ingeniería de bombeo que no falla cuando la planta no puede parar.
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-sans text-lg sm:text-xl text-[var(--color-ink)]/80 max-w-xl mb-8 text-balance leading-relaxed">
              Más de 38 años diseñando, fabricando y rehabilitando sistemas de bombeo, control y flujo de fluidos para la industria mexicana.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">Solicitar cotización <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-[var(--color-ink)] border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white" asChild>
                <Link href="/catalogo">Ver catálogo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Dark Glassmorphism) */}
      <section className="relative z-30 -mt-16 lg:-mt-24 mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="bg-[var(--color-ink)]/85 backdrop-blur-md border border-white/10 p-8 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 corner-brackets">
            {[
              { value: 38, suffix: "+", label: "Años de ingeniería aplicada" },
              { value: 12, suffix: "", label: "Líneas de solución" },
              { value: 13, suffix: "", label: "Equipos en catálogo" },
              { value: 11, suffix: "+", label: "Marcas representadas" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col items-center text-center px-4 md:px-6 ${index !== 3 ? 'md:border-r border-white/10' : ''}`}
              >
                <span className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-brass)] mb-1.5 drop-shadow-md">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-[var(--color-paper)]/80 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorio EMA */}
      <section className="py-24 bg-[var(--color-ink)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[var(--color-brass)]/5 blur-3xl pointer-events-none rounded-bl-full" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-white/5 border border-[var(--color-brass)]/30 text-[var(--color-brass)] text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(202,166,112,0.15)]">
                <ShieldCheck className="w-4 h-4" />
                Laboratorio Acreditado EMA
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                Primer laboratorio de pruebas en México con <span className="text-[var(--color-brass)]">Acreditación EMA</span>
              </h2>
              <p className="font-sans text-lg text-white/70 leading-relaxed mb-8 border-l-4 border-[var(--color-brass)] pl-6">
                Contamos con acreditación ISO/IEC 17025 (NMX-EC-17025-IMNC-2018) para pruebas hidráulicas a equipos de bombeo. Un diferenciador único que garantiza el rendimiento y la eficiencia energética avalados por las NOM-001-ENER-2014 y NOM-010-ENER-2004.
              </p>
              <Button asChild className="bg-transparent border border-[var(--color-brass)] text-[var(--color-brass)] hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)]">
                <Link href="/catalogo">Conocer alcance de pruebas</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden corner-brackets p-2 border border-white/10"
            >
               <div className="relative w-full h-full bg-[#151a24]">
                  <Image 
                    src="/images/sectores/service_electromec_1784677840904.jpg" 
                    alt="Laboratorio de Pruebas GM"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500"
                  />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectores que atendemos */}
      <section className="py-24 bg-[var(--color-paper)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Sectores" 
            title="Industrias que servimos" 
            align="center"
            className="mb-16"
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-12">
            {[
              "Agua y tratamiento",
              "Minera",
              "Azucarera",
              "Petroquímica",
              "Agrícola",
              "Aceitera",
              "Cementera",
              "Papelera",
              "Química",
              "Industria en general"
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="px-6 py-3 border border-[var(--color-steel)]/20 bg-white text-[var(--color-ink)] font-sans text-sm md:text-base font-medium rounded-full cursor-pointer hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] hover:border-[var(--color-ink)] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  {sector}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Catálogo */}
      <section className="py-24 bg-white border-t border-[var(--color-steel)]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader 
              eyebrow="Catálogo destacado" 
              title="Un catálogo pensado por ingenieros, para ingenieros"
              className="mb-0"
            />
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/catalogo">Ver catálogo completo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "GM-CENT-ANSI", name: "Centrífuga ANSI", img: "/images/products/BombaCentriANSI.png" },
              { code: "GM-CENT-001", name: "Centrífuga Estándar", img: "/images/products/BombaCentri.png" },
              { code: "GM-AXI-001", name: "Bomba de Flujo Axial", img: "/images/products/BombaFlujoAxi.png" },
              { code: "GM-DP-ASP", name: "Aspas Deslizantes", img: "/images/products/BombaDezlPosAspasDez.png" },
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <ProductCard 
                  code={product.code}
                  name={product.name}
                  imageSrc={product.img}
                  onClick={() => router.push("/catalogo")}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Servicios */}
      <section className="py-24 bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Nuestras Capacidades" 
            title="Servicios Especializados" 
            theme="dark"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { num: "01", title: "Equipos de bombeo", desc: "Fabricación y comercialización de bombas para todo proceso industrial.", icon: Droplets, imageSrc: "/images/sectores/service_bombeo_1784677820847.jpg" },
              { num: "02", title: "Motores eléctricos", desc: "Suministro, rebobinado y diagnóstico de motores para servicio pesado.", icon: Zap, imageSrc: "/images/sectores/service_motores_1784677831770.jpg" },
              { num: "03", title: "Soluciones electromecánicas", desc: "Integración de sistemas mecánicos y eléctricos a la medida.", icon: Wrench, imageSrc: "/images/sectores/service_electromec_1784677840904.jpg" },
              { num: "04", title: "Sellos mecánicos", desc: "Sellado de alto desempeño para condiciones críticas.", icon: ShieldCheck, imageSrc: "/images/sectores/manufactura.jpg" },
              { num: "05", title: "Turbinas de vapor", desc: "Suministro y mantenimiento de turbinas para generación y proceso.", icon: Fan, imageSrc: "/images/sectores/minero.jpg" },
              { num: "06", title: "Válvulas de control", desc: "Instrumentación de control de flujo, presión y temperatura.", icon: Gauge, imageSrc: "/images/sectores/papelero.jpg" },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ServiceCard 
                  number={srv.num}
                  title={srv.title}
                  description={srv.desc}
                  Icon={srv.icon}
                  imageSrc={srv.imageSrc}
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/servicios">Ver todos los servicios <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-[var(--color-paper)] relative overflow-hidden border-b border-[var(--color-steel)]/20">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[var(--color-brass)]/20 -translate-x-4 -translate-y-4" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[var(--color-brass)]/20 translate-x-4 translate-y-4" />
        
        {/* Giant Quote Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] lg:text-[40rem] font-display font-bold text-[var(--color-steel)]/5 select-none pointer-events-none z-0 leading-none mt-10">
          "
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1 bg-[var(--color-brass)] mx-auto mb-12" 
            />
            
            <motion.blockquote 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-display font-medium text-3xl md:text-5xl text-[var(--color-ink)] leading-[1.2] mb-12 relative"
            >
              <span className="text-[var(--color-brass)] mr-2">"</span>
              {"La innovación tecnológica y la eficiencia energética son los pilares indispensables para construir una industria más competitiva, fuerte y sustentable.".split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-[0.25em] overflow-hidden pb-1">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 15, stiffness: 100 } }
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <span className="text-[var(--color-brass)] ml-1">"</span>
            </motion.blockquote>
            
            <motion.cite 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-mono text-sm tracking-[0.2em] text-[var(--color-steel)] uppercase not-italic flex items-center justify-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-steel)]/50" />
              Angélica Guerra, Directora General
              <span className="w-8 h-px bg-[var(--color-steel)]/50" />
            </motion.cite>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 bg-[var(--color-ink)] overflow-hidden">
        {/* Background Texture/Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/sectores/manufactura.jpg" 
            alt="Ingeniería Industrial" 
            fill 
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/90 to-[var(--color-ink)]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-transparent to-[var(--color-ink)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-white/5 border border-white/10 text-[var(--color-brass)] text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brass)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brass)]"></span>
              </span>
              Soporte de ingeniería inmediato
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
              ¿Cotizar un equipo o auditar tu sistema actual?
            </h2>
            
            <p className="font-sans text-lg md:text-xl text-white/70 mb-12 max-w-2xl text-balance leading-relaxed">
              Nuestros especialistas están listos para analizar tus requerimientos y diseñar la solución de bombeo más robusta y rentable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
              <Button size="lg" className="bg-[var(--color-brass)] text-[var(--color-ink)] hover:bg-white hover:text-[var(--color-ink)] transition-colors h-14 px-8 text-base font-semibold tracking-wide group rounded-sm shadow-[0_0_20px_rgba(202,166,112,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]" asChild>
                <a href="https://wa.me/525546020434" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[var(--color-ink)] h-14 px-8 text-base font-semibold tracking-wide group backdrop-blur-sm bg-white/5 rounded-sm" asChild>
                <Link href="/contacto">
                  Ir al formulario
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
