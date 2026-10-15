"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

const inputClass =
  "mt-2 min-h-11 w-full border border-white/20 bg-white/[0.06] px-3 py-2.5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-sky)] focus:ring-2 focus:ring-[var(--color-sky)]/25";

export function QuickRequestForm() {
  const [openedWhatsApp, setOpenedWhatsApp] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    const message = [
      "Hola, quiero solicitar orientación técnica a GM Corporativo Industrial.",
      `Nombre: ${value("name")}`,
      `Empresa: ${value("company")}`,
      `Teléfono: ${value("phone")}`,
      value("email") ? `Correo: ${value("email")}` : null,
      "",
      `Líquido a bombear: ${value("liquid")}`,
      value("flow") ? `Caudal o gasto requerido: ${value("flow")}` : null,
      value("head") ? `Carga o presión: ${value("head")}` : null,
      value("temperature") ? `Temperatura: ${value("temperature")}` : null,
      value("speed") ? `Velocidad: ${value("speed")}` : null,
      `Ubicación del proyecto: ${value("location")}`,
    ].filter((line) => line !== null).join("\n");

    window.open(
      `https://wa.me/${CONTACT.whatsappInternational}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setOpenedWhatsApp(true);
  };

  return (
    <form onSubmit={handleSubmit} className="border border-white/15 bg-[var(--color-ink-2)]/90 p-5 shadow-2xl sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">Solicitud técnica</p>
          <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">Prepara los datos de tu proyecto</h3>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            El equipo técnico-comercial de GM recibirá la solicitud por WhatsApp, revisará las condiciones de operación y dará seguimiento al requerimiento.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/50">Los campos marcados con * son obligatorios. Si todavía no tienes un dato, puedes dejarlo pendiente.</p>
        </div>

        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-white">Nombre completo *<input name="name" autoComplete="name" minLength={2} required className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Empresa *<input name="company" autoComplete="organization" minLength={2} required className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Teléfono *<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[+0-9() .-]{10,}" title="Escribe un teléfono de al menos 10 dígitos." required className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Correo<input name="email" type="email" autoComplete="email" className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Líquido a bombear *<input name="liquid" required className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Caudal o gasto requerido<input name="flow" className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Carga o presión<input name="head" className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Temperatura<input name="temperature" className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Velocidad<input name="speed" className={inputClass} /></label>
          <label className="text-sm font-medium text-white">Ubicación del proyecto *<input name="location" autoComplete="address-level2" required className={inputClass} /></label>

          <div className="sm:col-span-2 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex max-w-xl items-start gap-3 text-sm leading-relaxed text-white/65">
              <input id="quick-request-consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-brass)]" />
              <label htmlFor="quick-request-consent">He leído el <Link href="/privacidad" className="font-medium text-[var(--color-sky)] underline underline-offset-4">aviso de privacidad</Link> y autorizo el uso de estos datos para atender mi solicitud. Entiendo que se abrirá WhatsApp para enviarla.</label>
            </div>
            <button type="submit" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[var(--color-brass)] px-6 font-sans text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]">
              Enviar solicitud <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {openedWhatsApp && (
            <p role="status" className="sm:col-span-2 flex items-start gap-3 border border-[var(--color-sky)]/30 bg-[var(--color-sky)]/10 p-4 text-sm text-white">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-sky)]" aria-hidden="true" />
              Abrimos WhatsApp con la solicitud preparada. Revísala y presiona enviar para compartirla con el equipo técnico-comercial de GM.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
