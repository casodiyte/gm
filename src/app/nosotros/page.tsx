"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Target, Eye, Gem } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function NosotrosPage() {
  return (
    <div className="pt-28 pb-24 bg-[var(--color-paper)] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Historia */}
        <div className="relative pt-16 mb-32 z-10">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[10rem] md:text-[22rem] font-display font-bold text-[var(--color-steel)]/[0.03] pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap z-0">
            1987
          </div>
          
          <SectionHeader 
            eyebrow="NUESTRA HISTORIA / SOBRE GM" 
            title="Más de 38 años de flujo, presión y confiabilidad" 
            align="center"
            className="mb-12 relative z-10 max-w-5xl mx-auto"
            as="h1"
          />

          <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-center mt-16 mb-16 px-4">
            {/* Logo a la izquierda */}
            <div className="flex justify-center md:justify-end">
              <div className="relative flex items-center justify-center">
                {/* Anillos animados simulando ingeniería / rotores */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-dashed border-[var(--color-brass)]/40"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border border-[var(--color-steel)]/20 border-t-[var(--color-brass)] border-r-[var(--color-brass)]"
                />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(202,166,112,0.25)] p-6 relative z-10"
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo GM" 
                    width={130} 
                    height={130} 
                    className="object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>
            </div>

            {/* Texto a la derecha */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <p className="font-sans text-xl md:text-2xl text-[var(--color-ink)] leading-relaxed font-medium mb-6">
                GM Corporativo Industrial nació con una obsesión: que las plantas industriales mexicanas tuvieran acceso a ingeniería de bombeo de clase mundial, sin depender de importaciones. 
              </p>
              <p className="font-sans text-lg text-[var(--color-steel)] leading-relaxed max-w-2xl mx-auto md:mx-0">
                Hoy diseñamos e integramos soluciones críticas para ingenios azucareros, minas, papeleras, plantas de tratamiento y manufactura pesada en todo el país.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Sección 2 — Misión / Visión / Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40 relative z-10">
          {[
            {
              title: "Misión",
              desc: "Somos una empresa dedicada a servir, entregando las mejores soluciones de bombeo, control y cuidado de fluidos para que nuestros clientes logren una productividad superior en sus procesos.",
              icon: Target,
              img: "/images/sectores/service_bombeo_1784677820847.jpg"
            },
            {
              title: "Visión",
              desc: "Ser una empresa líder a nivel internacional al integrar tecnologías sustentables que impacten en los estándares de productividad y eficiencia de nuestros clientes.",
              icon: Eye,
              img: "/images/sectores/service_electromec_1784677840904.jpg"
            },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-[#151a24] p-10 md:p-12 flex flex-col corner-brackets overflow-hidden border border-[var(--color-steel)]/10 hover:border-[var(--color-brass)]/30 transition-all duration-500 shadow-2xl hover:-translate-y-2 cursor-default"
            >
               {/* background image */}
               <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
               </div>
               <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#151a24] via-[#151a24]/90 to-transparent" />
               
               {/* background glow */}
               <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-brass)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-brass)]/20 transition-colors duration-700 z-0" />
               
               <div className="relative z-10">
                 <item.icon className="w-12 h-12 text-[var(--color-steel)] mb-8 opacity-80 group-hover:text-[var(--color-brass)] group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                 <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-wider group-hover:text-[var(--color-brass)] transition-colors duration-500">{item.title}</h3>
                 <p className="font-sans text-[var(--color-paper)]/70 leading-relaxed text-[15px] group-hover:text-[var(--color-paper)]/90 transition-colors duration-500">{item.desc}</p>
               </div>
               
               <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--color-brass)] to-transparent group-hover:w-full transition-all duration-700 ease-out z-10" />
            </motion.div>
          ))}

          {/* Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative bg-gradient-to-br from-[var(--color-ink)] to-[#151a24] p-10 md:p-12 flex flex-col corner-brackets overflow-hidden border border-[var(--color-steel)]/10 hover:border-[var(--color-brass)]/30 transition-all duration-500 shadow-2xl hover:-translate-y-2 cursor-default lg:col-span-1 md:col-span-2 sm:col-span-1"
          >
            {/* background image */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity">
              <Image src="/images/sectores/service_motores_1784677831770.jpg" alt="Valores" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#151a24] via-[#151a24]/90 to-transparent" />
            
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--color-brass)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-brass)]/20 transition-colors duration-700 z-0" />
            
            <div className="relative z-10 flex flex-col h-full">
               <Gem className="w-12 h-12 text-[var(--color-steel)] mb-8 opacity-80 group-hover:text-[var(--color-brass)] group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
               <h3 className="font-display text-3xl text-white mb-8 uppercase tracking-wider group-hover:text-[var(--color-brass)] transition-colors duration-500">Valores</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-6 mt-auto">
                 {["Pasión y temple", "Diversificación responsable", "Confiabilidad e integridad", "Trabajo en equipo", "Cuidado", "Excelencia"].map((val, i) => (
                   <div key={i} className="flex items-center text-[15px] font-sans text-white/70 group-hover:text-white transition-colors">
                     <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] mr-4 opacity-50 group-hover:opacity-100 group-hover:animate-pulse shadow-[0_0_8px_rgba(202,166,112,0)] group-hover:shadow-[0_0_8px_rgba(202,166,112,0.8)] transition-all duration-300" />
                     {val}
                   </div>
                 ))}
               </div>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--color-brass)] to-transparent group-hover:w-full transition-all duration-700 ease-out z-10" />
          </motion.div>
        </div>

        {/* Sección 3 — LIDERAZGO (BIO DE ANGÉLICA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Izquierda: Foto (40%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden bg-[var(--color-ink)] corner-brackets p-2 border border-[var(--color-steel)]/20">
                <div className="relative w-full h-full rounded-tr-[92px] rounded-bl-[92px] overflow-hidden bg-[var(--color-ink-2)] group flex items-center justify-center">
                  <Image
                    src="/images/team/02Angelica.png"
                    alt="Ing. Angélica Guerra"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Fallback si no hay imagen */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center -z-10">
                    <span className="font-display text-8xl text-[var(--color-steel)]/20">AG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derecha: Contenido Tipográfico (60%) */}
          <div className="lg:col-span-7 flex flex-col pt-8">
            <span className="font-mono text-sm tracking-widest text-[var(--color-brass)] mb-4 uppercase">
              Dirección General
            </span>
            <motion.h2 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-bold text-[var(--color-ink)] uppercase mb-2 flex flex-wrap"
            >
              {"Angélica Guerra".split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-[0.3em] overflow-hidden pb-2">
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
            </motion.h2>
            <p className="font-sans text-xl text-[var(--color-steel)] font-medium mb-10 pb-8 border-b border-[var(--color-steel)]/20">
              Líder Industrial y Especialista en Ingeniería de Procesos
            </p>

            <div className="prose prose-lg prose-slate max-w-none text-[var(--color-ink)]/80 font-sans">
              <p className="lead text-xl text-[var(--color-ink)] font-medium mb-8">
                Angélica Guerra es una destacada líder empresarial con una trayectoria impecable en la ingeniería de procesos aplicados a sistemas de bombeo. Su visión estratégica ha sido clave para impulsar el crecimiento y consolidación de GM, posicionando a la compañía como un referente indiscutible en el desarrollo de soluciones de alta ingeniería para la industria.
              </p>

              <h3 className="font-heading text-2xl text-[var(--color-ink)] mt-12 mb-6">Enfoque Estratégico y Valor Agregado</h3>
              <p>
                Con una trayectoria de más de 45 años en el sector productivo, Angélica ha trabajado estrechamente con ingenios azucareros y diversos sectores industriales. Esta experiencia directa en el terreno le permite comprender a fondo los retos operativos de sus clientes, especializándose en el diseño e implementación de soluciones orientadas a:
              </p>
              
              <ul className="list-none pl-0 my-8 space-y-6">
                <li className="flex items-start">
                  <div className="bg-[var(--color-brass)]/10 p-3 rounded-lg mr-4 shrink-0">
                    <TrendingUp className="w-6 h-6 text-[var(--color-brass)]" />
                  </div>
                  <span className="pt-1">Optimización de procesos para maximizar la rentabilidad operativa</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--color-brass)]/10 p-3 rounded-lg mr-4 shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-brass)]" />
                  </div>
                  <span className="pt-1">Incremento en la confiabilidad de los equipos de bombeo</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--color-brass)]/10 p-3 rounded-lg mr-4 shrink-0">
                    <Zap className="w-6 h-6 text-[var(--color-brass)]" />
                  </div>
                  <span className="pt-1">Reducción del consumo energético, promoviendo un uso eficiente de los recursos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Texto que abarca el ancho completo para balancear el diseño */}
        <div className="max-w-5xl mx-auto mt-16 prose prose-lg prose-slate text-[var(--color-ink)]/80 font-sans">
          <h3 className="font-heading text-2xl text-[var(--color-ink)] mb-6">Un Modelo de Negocio Basado en la Excelencia</h3>
              <p>
                Bajo su dirección, GM ha evolucionado más allá de la fabricación de bombas industriales, consolidando un modelo de negocio de alto impacto fundamentado en la tecnología, la ingeniería aplicada y la mejora continua. Su liderazgo promueve un acompañamiento integral de extremo a extremo, asegurando que cada sistema de bombeo alcance su máximo rendimiento y contribuya directamente al crecimiento sostenible de cada cliente.
              </p>

              <h3 className="font-heading text-2xl text-[var(--color-ink)] mt-12 mb-6">Liderazgo de Opinión y Compromiso Sustentable</h3>
              <p>
                Su visión de futuro y compromiso con la evolución del sector la han llevado a destacar como conferencista en importantes foros nacionales e internacionales. En estos espacios, comparte su experiencia en sectores clave como el azucarero, minero y papelero, posicionando dos ejes fundamentales para el desarrollo de la industria moderna: innovación tecnológica y eficiencia energética.
              </p>
            </div>

            {/* Cita Destacada Final */}
            <div className="mt-20 max-w-4xl mx-auto text-center relative py-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] text-[var(--color-brass)]/10 font-serif leading-none -mt-10 select-none z-0">"</div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--color-ink)] leading-tight uppercase relative z-10 flex flex-wrap justify-center text-balance"
              >
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
              </motion.div>
            </div>
            </div>

      </div>
  );
}
