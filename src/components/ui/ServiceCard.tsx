import Image from "next/image";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  imageSrc?: string;
  onClick?: () => void;
}

export function ServiceCard({ number, title, description, Icon, imageSrc, onClick }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b from-[var(--color-ink)] to-[var(--color-ink-2)] p-8 text-left transition-all duration-500",
        onClick && "cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,34,71,0.35)] focus-within:-translate-y-1 focus-within:shadow-[0_20px_40px_rgba(0,34,71,0.35)]",
      )}
    >
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          aria-label={`Ver servicio: ${title}`}
          className="absolute inset-0 z-30 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-brass)]"
        />
      )}

      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              className={cn(
                "object-cover mix-blend-luminosity transition-all duration-700 ease-out",
                onClick
                  ? "scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-35 group-focus-within:scale-110 group-focus-within:opacity-35"
                  : "opacity-15",
              )}
            />
          </div>
          <div
            className={cn(
              "absolute inset-0 z-0 bg-gradient-to-t from-[var(--color-ink-2)] via-[var(--color-ink)]/80 to-[var(--color-ink)]/30 transition-opacity duration-700",
              onClick ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100" : "opacity-70",
            )}
          />
        </>
      )}

      <div
        className={cn(
          "pointer-events-none absolute bottom-[-5%] right-[-5%] z-0 origin-bottom-right select-none font-display text-[12rem] font-bold leading-none text-white/[0.03] transition-all duration-700",
          onClick && "group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:text-[var(--color-brass)]/15 group-focus-within:text-[var(--color-brass)]/15",
        )}
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className={cn(
          "mb-8 h-px w-full bg-gradient-to-r from-white/20 to-transparent transition-colors duration-500",
          onClick && "group-hover:from-[var(--color-brass)] group-focus-within:from-[var(--color-brass)]",
        )} />

        <div className="mb-8 flex items-start justify-between">
          <div className={cn(
            "flex h-16 w-16 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-all duration-500",
            onClick && "group-hover:border-[var(--color-brass)]/60 group-hover:bg-[var(--color-brass)]/15 group-focus-within:border-[var(--color-brass)]/60 group-focus-within:bg-[var(--color-brass)]/15",
          )}>
            <Icon strokeWidth={1.5} className="h-8 w-8 text-[var(--color-brass)]" aria-hidden="true" />
          </div>
          <span className="rounded-sm bg-black/10 px-2 pt-2 font-mono text-sm font-medium text-[var(--color-sky)]">
            /{number}
          </span>
        </div>

        <h3 className="mb-4 font-heading text-2xl font-bold text-white">
          {title}
        </h3>

        <p className={cn(
          "mb-8 flex-grow font-sans text-[15px] leading-relaxed text-white/75 transition-colors duration-500",
          onClick && "group-hover:text-white/90 group-focus-within:text-white/90",
        )}>
          {description}
        </p>

        {onClick && (
          <div className="mt-auto flex items-center font-sans text-sm font-semibold uppercase tracking-widest text-[var(--color-sky)]">
            Ver servicio
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1" aria-hidden="true" />
          </div>
        )}
      </div>

      {onClick && (
        <div className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[var(--color-brass)] transition-all duration-700 ease-out group-hover:w-full group-focus-within:w-full" />
      )}
    </article>
  );
}
