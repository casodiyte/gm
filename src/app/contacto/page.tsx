"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().min(2, "La empresa es obligatoria"),
  position: z.string().optional(),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  service: z.string().min(1, "Selecciona una opción"),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  consent: z.boolean().refine((val) => val === true, "Debes aceptar el aviso de privacidad"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-32 bg-[var(--color-paper)] min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative max-w-4xl mb-20 z-10 pt-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 -left-4 text-[4rem] md:text-[9rem] font-display font-bold text-[var(--color-steel)]/5 pointer-events-none select-none uppercase tracking-tighter leading-none whitespace-nowrap"
          >
            Conecta
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeader 
              eyebrow="CONTACTO / RESPUESTA EN <24H" 
              title="Hablemos de tu proceso" 
              align="left"
              className="mb-8 relative z-10"
            />
            <p className="font-sans text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed relative z-10 border-l-4 border-[var(--color-brass)] pl-6 max-w-3xl">
              Nuestros especialistas están listos para analizar tus requerimientos y diseñar la solución de bombeo más robusta y rentable.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-12 xl:gap-20"
        >
          
          {/* Izquierda: Formulario (55%) */}
          <motion.div variants={fadeInUp} className="lg:w-[55%]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 bg-gradient-to-br from-[#151a24] to-[var(--color-ink)] p-10 md:p-12 shadow-2xl relative overflow-hidden rounded-sm group">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brass)]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Nombre */}
                  <div className="space-y-1 relative">
                    <label htmlFor="name" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Nombre completo <span className="text-[var(--color-brass)]">*</span></label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={cn(
                        "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors",
                        errors.name && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                      )}
                    />
                    {errors.name && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.name.message}</p>}
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1 relative">
                    <label htmlFor="company" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Empresa <span className="text-[var(--color-brass)]">*</span></label>
                    <input
                      {...register("company")}
                      type="text"
                      id="company"
                      className={cn(
                        "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors",
                        errors.company && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                      )}
                    />
                    {errors.company && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.company.message}</p>}
                  </div>

                  {/* Puesto */}
                  <div className="space-y-1 relative">
                    <label htmlFor="position" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Puesto <span className="opacity-50">(Opcional)</span></label>
                    <input
                      {...register("position")}
                      type="text"
                      id="position"
                      className="w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1 relative">
                    <label htmlFor="phone" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Teléfono <span className="text-[var(--color-brass)]">*</span></label>
                    <input
                      {...register("phone")}
                      type="tel"
                      id="phone"
                      className={cn(
                        "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors",
                        errors.phone && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                      )}
                    />
                    {errors.phone && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1 relative mt-10">
                  <label htmlFor="email" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Email corporativo <span className="text-[var(--color-brass)]">*</span></label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={cn(
                      "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors",
                      errors.email && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                    )}
                  />
                  {errors.email && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.email.message}</p>}
                </div>

                {/* Servicio */}
                <div className="space-y-1 relative mt-10">
                  <label htmlFor="service" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">¿En qué te ayudamos? <span className="text-[var(--color-brass)]">*</span></label>
                  <select
                    {...register("service")}
                    id="service"
                    className={cn(
                      "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors appearance-none [&>option]:bg-[#151a24] [&>option]:text-white",
                      errors.service && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                    )}
                  >
                    <option value="">Selecciona una opción...</option>
                    <option value="Cotización de equipo">Cotización de equipo</option>
                    <option value="Servicio de mantenimiento">Servicio de mantenimiento</option>
                    <option value="Rehabilitación">Rehabilitación</option>
                    <option value="Consultoría técnica">Consultoría técnica</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.service && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.service.message}</p>}
                </div>

                {/* Mensaje */}
                <div className="space-y-1 relative mt-10">
                  <label htmlFor="message" className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Mensaje <span className="text-[var(--color-brass)]">*</span></label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={3}
                    className={cn(
                      "w-full bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-sans text-white text-lg focus:outline-none focus:border-[var(--color-brass)] transition-colors resize-none",
                      errors.message && "border-[var(--color-rust)] focus:border-[var(--color-rust)]"
                    )}
                  />
                  {errors.message && <p className="absolute -bottom-5 left-0 text-xs text-[var(--color-rust)] font-sans">{errors.message.message}</p>}
                </div>

                {/* Consentimiento */}
                <div className="flex items-start gap-4 mt-12">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      {...register("consent")}
                      id="consent"
                      type="checkbox"
                      className="w-4 h-4 rounded-sm border-white/30 bg-transparent text-[var(--color-brass)] focus:ring-[var(--color-brass)] focus:ring-offset-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="consent" className="text-[13px] font-sans text-white/60 leading-relaxed cursor-pointer hover:text-white/80 transition-colors">
                      Acepto los términos y el aviso de privacidad conforme a la LFPDPPP. Sus datos están protegidos y no serán compartidos con terceros.
                    </label>
                    {errors.consent && <p className="text-xs text-[var(--color-rust)] font-sans mt-1">{errors.consent.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto mt-10 h-14 px-10 bg-[var(--color-brass)] text-[var(--color-ink)] hover:bg-white text-base font-semibold tracking-wider uppercase group rounded-sm shadow-[0_0_20px_rgba(202,166,112,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
                >
                  {isSubmitting ? "Enviando solicitud..." : (
                    <>
                      Enviar solicitud <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-8 p-4 bg-[var(--color-brass)]/10 border border-[var(--color-brass)]/30 text-[var(--color-brass)] flex items-start gap-3 rounded-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="font-sans text-sm">Gracias por contactarnos. Un ingeniero especializado revisará tu solicitud y se comunicará contigo a la brevedad.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-8 p-4 bg-[var(--color-rust)]/10 border border-[var(--color-rust)]/50 text-[var(--color-rust)] flex items-start gap-3 rounded-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="font-sans text-sm font-medium">Ocurrió un error al enviar el formulario. Por favor, intenta de nuevo o contáctanos directamente por teléfono.</p>
                  </div>
                )}
              </div>
              
              {/* Top glowing line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[var(--color-brass)] to-transparent opacity-50" />
            </form>
          </motion.div>

          {/* Derecha: Información y Mapa (45%) */}
          <div className="lg:w-[45%] flex flex-col gap-8 pt-2">
            
            {/* Centro de Operaciones & Mapa Fusionado */}
            <motion.div variants={fadeInUp} className="group bg-white border border-[var(--color-steel)]/10 shadow-xl hover:shadow-2xl hover:border-[var(--color-brass)]/40 transition-all duration-500 hover:-translate-y-1 rounded-sm relative overflow-hidden flex flex-col">
              <div className="p-8 md:p-10 relative z-10">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <MapPin className="w-24 h-24" />
                </div>
                <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-brass)] uppercase mb-6 flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Centro de Operaciones
                </h3>
                <p className="font-sans text-xl text-[var(--color-ink)] leading-relaxed font-medium relative z-10">
                  Lago de Guadalupe s/n<br />
                  San Mateo Tecoloapan<br />
                  Atizapán de Zaragoza<br />
                  <span className="text-[var(--color-steel)] text-lg">Edomex, CP 52920</span>
                </p>
              </div>
              
              {/* Mapa Interactivo */}
              <div className="w-full h-64 sm:h-80 bg-[var(--color-ink)] relative mt-auto border-t border-[var(--color-steel)]/10 overflow-hidden">
                <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[var(--color-brass)]/50 transition-colors duration-500 z-10 pointer-events-none" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.058324654199!2d-99.22971732418507!3d19.582001785891464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21dafc6eb1d53%3A0xee48b74d1a3ecc2b!2sGM%20Corporativo%20Industrial!5e0!3m2!1sen!2smx!4v1785184461939!5m2!1sen!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  title="Mapa de ubicación GM Corporativo Industrial"
                ></iframe>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-white p-8 md:p-10 border border-[var(--color-steel)]/10 shadow-xl hover:shadow-2xl hover:border-[var(--color-brass)]/40 transition-all duration-500 hover:-translate-y-1 rounded-sm">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-brass)] uppercase mb-6 flex items-center gap-3">
                <Phone className="w-4 h-4" /> Contacto Directo
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col font-display text-2xl md:text-3xl font-semibold tracking-wide">
                  <a href="tel:5546020434" className="text-[var(--color-ink)] hover:text-[var(--color-brass)] transition-colors py-1">55-4602-0434</a>
                  <a href="tel:5553051026" className="text-[var(--color-ink)] hover:text-[var(--color-brass)] transition-colors py-1">55-5305-1026</a>
                  <a href="tel:5553052003" className="text-[var(--color-ink)] hover:text-[var(--color-brass)] transition-colors py-1">55-5305-2003</a>
                </div>
                <div className="pt-6 border-t border-[var(--color-steel)]/10">
                  <a href="mailto:contacto@gmcorporativo.com" className="inline-flex items-center gap-3 font-sans text-[15px] text-[var(--color-steel)] hover:text-[var(--color-brass)] transition-colors group/mail">
                    <Mail className="w-4 h-4 group-hover/mail:-translate-y-0.5 transition-transform" />
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@gmcorporativo.com'}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-white p-8 md:p-10 border border-[var(--color-steel)]/10 shadow-xl hover:shadow-2xl hover:border-[var(--color-brass)]/40 transition-all duration-500 hover:-translate-y-1 rounded-sm">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-brass)] uppercase mb-6 flex items-center gap-3">
                <Clock className="w-4 h-4" /> Horario de Atención
              </h3>
              <div className="space-y-4 font-sans text-base text-[var(--color-ink)]">
                <div className="flex justify-between border-b border-[var(--color-steel)]/10 pb-4">
                  <span className="font-medium">Lunes – Viernes</span>
                  <span className="font-mono text-[var(--color-steel)]">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-medium">Sábado – Domingo</span>
                  <span className="font-mono text-[var(--color-brass)] font-semibold">Guardia técnica</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
