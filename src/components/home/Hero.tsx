import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#03172c]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/hero-pump.webp"
        alt="Bomba centrífuga industrial abierta con sus componentes internos expuestos"
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-[52%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,42,0.97)_0%,rgba(0,25,52,0.82)_36%,rgba(0,25,52,0.24)_70%,rgba(0,17,35,0.3)_100%)] max-md:bg-[linear-gradient(0deg,rgba(0,18,38,0.98)_0%,rgba(0,20,42,0.82)_48%,rgba(0,15,32,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(16,139,204,0.14),transparent_36%)]" />
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto flex min-h-[100svh] items-end px-4 pb-20 pt-32 sm:px-6 md:items-center md:pb-16 lg:px-8 [@media(max-height:500px)]:items-start [@media(max-height:500px)]:pb-10 [@media(max-height:500px)]:pt-24">
        <div className="max-w-3xl md:pb-4">
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70c9f5] sm:text-xs [@media(max-height:500px)]:mb-2">
            <span className="h-px w-8 bg-[#70c9f5]" />
            Ingeniería industrial mexicana
          </div>

          <h1
            id="hero-title"
            className="max-w-3xl text-balance font-display text-[clamp(2.7rem,6vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.025em] text-white"
          >
            Bombeo diseñado para mantener tu planta en movimiento.
          </h1>

          <p className="mt-6 max-w-2xl text-balance font-sans text-base leading-relaxed text-white/80 sm:text-lg md:text-xl [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:line-clamp-2 [@media(max-height:500px)]:text-sm">
            Diseñamos, fabricamos, rehabilitamos y probamos sistemas críticos
            con ingeniería aplicada y respaldo técnico de principio a fin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row [@media(max-height:500px)]:mt-3">
            <Button
              size="lg"
              asChild
              className="h-12 rounded-full bg-[#108bcc] px-7 text-white shadow-[0_12px_40px_rgba(16,139,204,.28)] hover:bg-[#39a7df] hover:brightness-100 [@media(max-height:500px)]:h-10 [@media(max-height:500px)]:px-5 [@media(max-height:500px)]:text-sm"
            >
              <Link href="/contacto">
                Solicitar cotización <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-full border-white/35 px-7 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#002e5f] [@media(max-height:500px)]:h-10 [@media(max-height:500px)]:px-5 [@media(max-height:500px)]:text-sm"
            >
              <Link href="/catalogo">Explorar catálogo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
