import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: `Términos de uso del sitio informativo de ${SITE.legalName}.`,
  alternates: {
    canonical: "/terminos",
  },
};

const TERMS = [
  {
    number: "01",
    title: "Naturaleza informativa del sitio",
    content: (
      <>
        El contenido de {SITE.url} presenta de forma general las capacidades,
        productos, marcas, documentos y medios de contacto relacionados con{" "}
        {SITE.legalName}. La información no sustituye una evaluación técnica ni
        constituye por sí misma asesoría, garantía de desempeño, oferta o
        compromiso contractual.
      </>
    ),
  },
  {
    number: "02",
    title: "Cotizaciones y contratación",
    content: (
      <>
        Una solicitud enviada desde el sitio y cualquier estimación preliminar
        son únicamente informativas. Una cotización no será vinculante hasta que
        exista una oferta formal emitida por un representante autorizado, con
        alcance, especificaciones, precio, vigencia, tiempos y condiciones, y
        sea aceptada por las partes conforme al procedimiento indicado en ella.
      </>
    ),
  },
  {
    number: "03",
    title: "Marcas y propiedad intelectual",
    content: (
      <>
        Los textos, diseño, imágenes y materiales propios del sitio están
        protegidos por la legislación aplicable. Los nombres, logotipos, marcas,
        catálogos y documentos de terceros pertenecen a sus respectivos
        titulares y se muestran con fines informativos o comerciales dentro del
        alcance disponible para {SITE.legalName}. Su aparición no amplía ni
        modifica los derechos de representación documentados.
      </>
    ),
  },
  {
    number: "04",
    title: "Documentos y descargas",
    content: (
      <>
        Los catálogos, fichas y cartas descargables se facilitan exclusivamente
        para evaluar productos, aplicaciones o una posible relación comercial.
        No deben redistribuirse, alterarse, presentarse como documentación propia
        ni utilizarse para atribuir especificaciones o compromisos distintos a
        los expresamente contenidos en cada documento. Verifica siempre edición,
        vigencia y configuración antes de tomar una decisión técnica.
      </>
    ),
  },
  {
    number: "05",
    title: "Información técnica",
    content: (
      <>
        Las capacidades, materiales, dimensiones y aplicaciones pueden variar
        según modelo y condiciones de operación. La selección definitiva debe
        considerar, entre otros datos, fluido, caudal, presión o carga,
        temperatura, sólidos, materiales, instalación y normas aplicables. La
        información del sitio puede actualizarse sin previo aviso.
      </>
    ),
  },
  {
    number: "06",
    title: "Servicios y enlaces externos",
    content: (
      <>
        El sitio puede enlazar o incorporar servicios operados por terceros,
        como WhatsApp, mapas, reproducción de video, alojamiento de formularios
        o sitios de fabricantes. Esos servicios tienen sus propios términos,
        políticas y disponibilidad. {SITE.legalName} no controla su operación ni
        el tratamiento que realicen fuera de este sitio.
      </>
    ),
  },
  {
    number: "07",
    title: "Uso responsable",
    content: (
      <>
        No utilices el sitio para enviar contenido ilícito, dañino, engañoso o
        que vulnere derechos de terceros. Tampoco intentes afectar su seguridad,
        disponibilidad o funcionamiento. Podemos restringir el acceso cuando sea
        necesario para proteger el sitio y a sus usuarios.
      </>
    ),
  },
];

export default function TerminosPage() {
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
            Términos de uso
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[var(--color-ink)]/68">
            Estos términos regulan el acceso y uso del sitio informativo de{" "}
            {SITE.legalName}.
          </p>
        </header>

        <div className="grid gap-12 py-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-[var(--color-steel)]/15 bg-[var(--color-ink)] p-7 text-white shadow-[0_16px_45px_rgba(0,46,95,0.12)]">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-sky)]">
                Titular del sitio
              </p>
              <p className="mt-4 font-heading text-xl font-semibold">
                {SITE.legalName}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/62">
                {CONTACT.address}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-5 block break-all font-mono text-xs text-[var(--color-sky)] hover:underline"
              >
                {CONTACT.email}
              </a>
            </div>
          </aside>

          <article className="space-y-6">
            {TERMS.map((term) => (
              <section
                key={term.number}
                className="grid gap-5 border-b border-[var(--color-steel)]/15 pb-9 sm:grid-cols-[3.5rem_1fr]"
                aria-labelledby={`term-${term.number}`}
              >
                <span className="font-mono text-sm font-semibold text-[var(--color-brass)]">
                  {term.number}
                </span>
                <div>
                  <h2
                    id={`term-${term.number}`}
                    className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]"
                  >
                    {term.title}
                  </h2>
                  <div className="mt-5 font-sans text-base leading-relaxed text-[var(--color-ink)]/72 sm:text-lg">
                    {term.content}
                  </div>
                </div>
              </section>
            ))}

            <section className="border border-[var(--color-steel)]/15 bg-white p-7 sm:p-9">
              <h2 className="font-display text-3xl font-bold uppercase text-[var(--color-ink)]">
                Contacto
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-[var(--color-ink)]/72 sm:text-lg">
                Para dudas sobre estos términos, escribe a{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all font-medium text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
                >
                  {CONTACT.email}
                </a>{" "}
                o consulta nuestros demás medios en la página de contacto.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                <Link
                  href="/contacto"
                  className="font-sans text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
                >
                  Ir a contacto
                </Link>
                <Link
                  href="/privacidad"
                  className="font-sans text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-brass)] underline-offset-4 hover:text-[var(--color-brass)]"
                >
                  Consultar aviso de privacidad
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
