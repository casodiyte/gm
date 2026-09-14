import { HeroMedia } from "@/components/home/HeroMedia";
import { SITE } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      className="group/hero relative isolate min-h-[88svh] overflow-hidden bg-[var(--color-ink)]"
      aria-labelledby="hero-title"
    >
      <HeroMedia />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,34,71,0.92)_0%,rgba(0,46,95,0.72)_45%,rgba(0,46,95,0.25)_100%)] max-md:bg-[linear-gradient(0deg,rgba(0,34,71,0.94)_0%,rgba(0,46,95,0.7)_55%,rgba(0,46,95,0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto flex min-h-[88svh] items-end px-4 pb-20 pt-32 sm:px-6 md:items-center lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sky)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
            {SITE.tagline}
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.25rem,9vw,8.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white"
          >
            GM Corporativo
            <span className="block text-[var(--color-brass)]">Industrial</span>
          </h1>
        </div>
      </div>

      <div className="brand-band absolute inset-x-0 bottom-0 z-10 h-2" aria-hidden="true" />
    </section>
  );
}
