import Image from "next/image";
import { cn } from "@/lib/utils";

interface IsotipoProps {
  className?: string;
  /** "light": versión para fondos claros. "dark": versión para fondos oscuros (Línea Gráfica, p. 12). */
  variant?: "light" | "dark";
}

export function Isotipo({ className, variant = "light" }: IsotipoProps) {
  return (
    <span className={cn("relative inline-block aspect-[400/376] shrink-0", className)} aria-hidden="true">
      <Image
        src={variant === "dark" ? "/images/isotipo-dark.png" : "/images/isotipo.png"}
        alt=""
        fill
        sizes="96px"
        className="object-contain"
      />
    </span>
  );
}
