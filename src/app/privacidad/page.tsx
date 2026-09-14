import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${SITE.legalName} para el tratamiento de datos de contacto y solicitudes comerciales.`,
  alternates: {
    canonical: "/privacidad",
  },
};

const DATA_COLLECTED = [
  "Nombre completo",
  "Correo electrónico",
  "Número telefónico",
  "Empresa",
  "Servicio o solución de interés",
  "Mensaje y datos técnicos que decidas compartir",
];

const PURPOSES = [
  "Atender solicitudes de información, cotización y contacto comercial.",
  "Analizar los requerimientos generales de un proyecto o equipo.",
  "Dar seguimiento a solicitudes de soporte técnico y servicio.",
  "Comunicarnos contigo por correo electrónico, teléfono o WhatsApp cuando elijas ese medio.",
];

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl border-b border-[var(--color-steel)]/20 pb-12 pt-8">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-8 bg-[var(--color-brass)]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
              Información legal
            </span>
          </div>
          <h1 className="text-balance font-display text-5xl font-bold uppercase leading-none text-[var(--color-ink)] sm:text-6xl">
            Aviso de privacidad
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-steel)]">
            Vigente desde el 18 de agosto de 2026
          </p>
        </header>

        <div className="grid gap-12 py-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-[var(--color-steel)]/15 bg-white p-7 shadow-[0_16px_45px_rgba(0,46,95,0.06)]">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brass)]">
                Responsable
              </p>
              <p className="mt-4 font-heading text-xl font-semibold text-[var(--color-ink)]">
                {SITE.legalName}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--color-ink)]/65">
                {CONTACT.address}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-5 block break-all font-mono text-xs text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
              >
                {CONTACT.email}
              </a>
            </div>
          </aside>

          <article className="space-y-12 font-sans text-base leading-relaxed text-[var(--color-ink)]/72 sm:text-lg">
            <section aria-labelledby="responsable-title">
              <h2
                id="responsable-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                Responsable y alcance
              </h2>
              <p className="mt-5">
                {SITE.legalName}, con domicilio en {CONTACT.address}, es
                responsable del tratamiento de los datos personales que
                proporciones a través de {SITE.url}, sus medios de contacto y
                las comunicaciones relacionadas con una solicitud.
              </p>
            </section>

            <section aria-labelledby="datos-title">
              <h2
                id="datos-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                Datos que podemos recabar
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {DATA_COLLECTED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start border border-[var(--color-steel)]/12 bg-white px-4 py-3"
                  >
                    <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brass)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-l-4 border-[var(--color-brass)] bg-white px-5 py-4 text-[var(--color-ink)]/70">
                No solicitamos datos personales sensibles. Evita incluir
                información sensible, confidencial o innecesaria en el mensaje
                o en los documentos que compartas.
              </div>
            </section>

            <section aria-labelledby="finalidades-title">
              <h2
                id="finalidades-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                Finalidades del tratamiento
              </h2>
              <ul className="mt-5 space-y-3">
                {PURPOSES.map((purpose) => (
                  <li key={purpose} className="flex items-start">
                    <span className="mr-4 font-mono text-sm text-[var(--color-brass)]">
                      —
                    </span>
                    {purpose}
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Utilizaremos los datos únicamente en la medida necesaria para
                estas finalidades y para cumplir obligaciones aplicables. No
                vendemos datos personales.
              </p>
            </section>

            <section aria-labelledby="whatsapp-title">
              <h2
                id="whatsapp-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                WhatsApp y servicios externos
              </h2>
              <p className="mt-5">
                Si eliges contactar por WhatsApp, abrirás un servicio externo a
                este sitio. El contenido que envíes será tratado también por
                WhatsApp y sus proveedores conforme a sus propios términos y
                políticas de privacidad. Antes de enviar información técnica,
                verifica que no contenga datos sensibles o confidenciales que no
                sean indispensables.
              </p>
            </section>

            <section aria-labelledby="derechos-title">
              <h2
                id="derechos-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                Derechos ARCO y limitación de uso
              </h2>
              <p className="mt-5">
                Puedes solicitar acceso, rectificación, cancelación u oposición
                al tratamiento de tus datos personales, así como limitar su uso
                o revocar tu consentimiento cuando resulte aplicable. Envía tu
                solicitud a{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all font-medium text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
              <p className="mt-4">
                Incluye tu nombre, el derecho que deseas ejercer, una descripción
                clara de los datos involucrados, el medio para recibir respuesta
                y, cuando sea necesario, información que permita verificar tu
                identidad o representación. Atenderemos la solicitud conforme a
                la legislación aplicable.
              </p>
            </section>

            <section aria-labelledby="cambios-title">
              <h2
                id="cambios-title"
                className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
              >
                Cambios al aviso
              </h2>
              <p className="mt-5">
                Este aviso puede actualizarse para reflejar cambios operativos o
                legales. La versión vigente estará disponible en esta misma URL,
                con la fecha de actualización correspondiente.
              </p>
            </section>

            <div className="border-t border-[var(--color-steel)]/20 pt-8">
              <Link
                href="/contacto"
                className="font-sans text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
              >
                Ir a contacto
              </Link>
              <span className="mx-3 text-[var(--color-steel)]/40">·</span>
              <Link
                href="/terminos"
                className="font-sans text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
              >
                Consultar términos de uso
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
