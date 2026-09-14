"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/site-data";
import { SERVICES } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre completo"),
  company: z.string().trim().min(2, "Escribe el nombre de tu empresa"),
  position: z.string().trim().optional(),
  email: z.string().trim().email("Escribe un correo válido"),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, "").length >= 10, "Escribe un teléfono de al menos 10 dígitos"),
  service: z.string().min(1, "Selecciona una opción"),
  message: z.string().trim().min(20, "Incluye al menos 20 caracteres"),
  consent: z.boolean().refine(Boolean, "Acepta el aviso de privacidad para continuar"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fieldClass =
  "mt-2 min-h-12 w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-sky)] focus:ring-2 focus:ring-[var(--color-sky)]/25";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} role="alert" className="mt-2 text-sm text-[#ffb4a8]">{message}</p>;
}

export default function ContactoPage() {
  const [openedWhatsApp, setOpenedWhatsApp] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false },
  });

  // Preselecciona el servicio cuando se llega desde una ficha: /contacto?servicio=Motores%20eléctricos
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("servicio");
    if (requested && SERVICES.some((service) => service.title === requested)) {
      setValue("service", requested);
    }
  }, [setValue]);

  const onSubmit = (data: ContactFormValues) => {
    const message = [
      "Hola, quiero solicitar orientación técnica a GM Corporativo Industrial.",
      `Nombre: ${data.name}`,
      `Empresa: ${data.company}`,
      data.position ? `Puesto: ${data.position}` : null,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Servicio: ${data.service}`,
      `Requerimiento: ${data.message}`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${CONTACT.whatsappInternational}?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    setOpenedWhatsApp(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-paper)] pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <SectionHeader
            eyebrow="Contacto técnico"
            title="Hablemos de tu proceso"
            description="Comparte las condiciones de operación y abriremos una conversación en WhatsApp con la información lista para revisar."
            as="h1"
          />
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative overflow-hidden rounded-sm bg-[var(--color-ink)] p-6 shadow-2xl sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-brass)] via-[var(--color-sky)] to-transparent" />
            <h2 className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">Preparar solicitud</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">Los campos marcados con * son obligatorios.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white">Nombre completo *</label>
                <input {...register("name")} id="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={cn(fieldClass, errors.name && "border-[#ff8a78]")} />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium text-white">Empresa *</label>
                <input {...register("company")} id="company" autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} className={cn(fieldClass, errors.company && "border-[#ff8a78]")} />
                <FieldError id="company-error" message={errors.company?.message} />
              </div>
              <div>
                <label htmlFor="position" className="text-sm font-medium text-white">Puesto <span className="text-white/50">(opcional)</span></label>
                <input {...register("position")} id="position" autoComplete="organization-title" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-white">Teléfono *</label>
                <input {...register("phone")} id="phone" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className={cn(fieldClass, errors.phone && "border-[#ff8a78]")} />
                <FieldError id="phone-error" message={errors.phone?.message} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="text-sm font-medium text-white">Correo corporativo *</label>
              <input {...register("email")} id="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={cn(fieldClass, errors.email && "border-[#ff8a78]")} />
              <FieldError id="email-error" message={errors.email?.message} />
            </div>

            <div className="mt-6">
              <label htmlFor="service" className="text-sm font-medium text-white">¿En qué podemos ayudarte? *</label>
              <select {...register("service")} id="service" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} className={cn(fieldClass, "[&>option]:bg-[var(--color-ink)]", errors.service && "border-[#ff8a78]")}>
                <option value="">Selecciona una opción</option>
                {SERVICES.map((service) => <option key={service.num} value={service.title}>{service.title}</option>)}
                <option value="Pruebas hidráulicas">Pruebas hidráulicas</option>
                <option value="Otro requerimiento">Otro requerimiento</option>
              </select>
              <FieldError id="service-error" message={errors.service?.message} />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-white">Requerimiento *</label>
              <textarea {...register("message")} id="message" rows={5} placeholder="Fluido, caudal, carga o presión, temperatura y condiciones de operación." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} className={cn(fieldClass, "resize-y", errors.message && "border-[#ff8a78]")} />
              <p id="message-help" className="mt-2 text-xs leading-relaxed text-white/50">No incluyas datos sensibles ni información confidencial innecesaria.</p>
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            <div className="mt-7">
              <div className="flex items-start gap-3">
                <input {...register("consent")} id="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-brass)]" />
                <label htmlFor="consent" className="text-sm leading-relaxed text-white/70">
                  He leído el <Link href="/privacidad" className="font-medium text-[var(--color-sky)] underline underline-offset-4">aviso de privacidad</Link> y entiendo que al continuar se abrirá WhatsApp para enviar la información.
                </label>
              </div>
              <FieldError id="consent-error" message={errors.consent?.message} />
            </div>

            <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
              Enviar por WhatsApp <ArrowRight />
            </Button>

            {openedWhatsApp && (
              <div role="status" className="mt-6 flex items-start gap-3 border border-[var(--color-sky)]/35 bg-[var(--color-sky)]/10 p-4 text-sm text-white">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-sky)]" />
                Abrimos WhatsApp con tu solicitud preparada. Revísala y presiona enviar para compartirla con GM.
              </div>
            )}
          </form>

          <aside className="space-y-6">
            <section className="rounded-sm border border-[var(--color-steel)]/15 bg-white p-7 shadow-lg sm:p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-[var(--color-ink)]">Contacto directo</h2>
              <div className="mt-6 space-y-4 text-[var(--color-ink)]/75">
                <a href={`https://wa.me/${CONTACT.whatsappInternational}`} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 hover:text-[var(--color-brass)]"><Phone className="h-5 w-5 text-[var(--color-brass)]" />WhatsApp {CONTACT.whatsappDisplay}</a>
                {CONTACT.phones.map((phone) => <a key={phone.href} href={`tel:${phone.href}`} className="flex min-h-11 items-center gap-3 hover:text-[var(--color-brass)]"><Phone className="h-5 w-5 text-[var(--color-brass)]" />{phone.display}</a>)}
                <a href={`mailto:${CONTACT.email}`} className="flex min-h-11 items-center gap-3 break-all hover:text-[var(--color-brass)]"><Mail className="h-5 w-5 shrink-0 text-[var(--color-brass)]" />{CONTACT.email}</a>
                <p className="flex items-start gap-3 leading-relaxed"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brass)]" />{CONTACT.address}</p>
              </div>
            </section>

            <section className="rounded-sm border border-[var(--color-steel)]/15 bg-white p-7 shadow-lg sm:p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-[var(--color-ink)]">Datos útiles para cotizar</h2>
              <ul className="mt-5 space-y-3 text-[var(--color-ink)]/70">
                {["Fluido y concentración de sólidos", "Caudal requerido", "Carga o presión de descarga", "Temperatura de operación", "Materiales y conexión disponibles", "Industria y ubicación del proyecto"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brass)]" />{item}</li>)}
              </ul>
            </section>

            <div className="h-72 overflow-hidden rounded-sm border border-[var(--color-steel)]/15 bg-[var(--color-ink)] shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.058324654199!2d-99.22971732418507!3d19.582001785891464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21dafc6eb1d53%3A0xee48b74d1a3ecc2b!2sGM%20Corporativo%20Industrial!5e0!3m2!1sen!2smx!4v1785184461939!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de GM Corporativo Industrial" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
