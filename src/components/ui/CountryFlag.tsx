import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FlagDefinition = { colors: string[]; svg: ReactNode };

// Banderas simplificadas en SVG (proporción 3:2) y sus colores oficiales para los acentos al pasar el cursor.
const FLAGS: Record<string, FlagDefinition> = {
  México: {
    colors: ["#006847", "#ffffff", "#ce1126"],
    svg: (
      <>
        <rect width="10" height="20" fill="#006847" />
        <rect x="10" width="10" height="20" fill="#ffffff" />
        <rect x="20" width="10" height="20" fill="#ce1126" />
        <circle cx="15" cy="10" r="2.6" fill="#8c5a2b" />
        <path d="M12.6 11.6q2.4 2.2 4.8 0" stroke="#006847" strokeWidth="0.9" fill="none" />
      </>
    ),
  },
  EUA: {
    colors: ["#b22234", "#ffffff", "#3c3b6e"],
    svg: (
      <>
        <rect width="30" height="20" fill="#ffffff" />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} y={i * (20 / 6.5)} width="30" height={20 / 13} fill="#b22234" />
        ))}
        <rect width="12" height={20 * 7 / 13} fill="#3c3b6e" />
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i} cx={1.6 + (i % 4) * 2.9} cy={1.8 + Math.floor(i / 4) * 3.4} r="0.55" fill="#ffffff" />
        ))}
      </>
    ),
  },
  Alemania: {
    colors: ["#000000", "#dd0000", "#ffce00"],
    svg: (
      <>
        <rect width="30" height="6.67" fill="#000000" />
        <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
        <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
      </>
    ),
  },
  India: {
    colors: ["#ff9933", "#ffffff", "#138808"],
    svg: (
      <>
        <rect width="30" height="6.67" fill="#ff9933" />
        <rect y="6.67" width="30" height="6.67" fill="#ffffff" />
        <rect y="13.33" width="30" height="6.67" fill="#138808" />
        <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.6" />
        <circle cx="15" cy="10" r="0.6" fill="#000080" />
      </>
    ),
  },
  Brasil: {
    colors: ["#009c3b", "#ffdf00", "#002776"],
    svg: (
      <>
        <rect width="30" height="20" fill="#009c3b" />
        <path d="M15 2.5 27 10 15 17.5 3 10z" fill="#ffdf00" />
        <circle cx="15" cy="10" r="4.4" fill="#002776" />
        <path d="M10.8 9.2q4.4-1.6 8.4 1.2" stroke="#ffffff" strokeWidth="0.8" fill="none" />
      </>
    ),
  },
  Japón: {
    colors: ["#ffffff", "#bc002d"],
    svg: (
      <>
        <rect width="30" height="20" fill="#ffffff" />
        <circle cx="15" cy="10" r="6" fill="#bc002d" />
      </>
    ),
  },
  Colombia: {
    colors: ["#fcd116", "#003893", "#ce1126"],
    svg: (
      <>
        <rect width="30" height="10" fill="#fcd116" />
        <rect y="10" width="30" height="5" fill="#003893" />
        <rect y="15" width="30" height="5" fill="#ce1126" />
      </>
    ),
  },
  Francia: {
    colors: ["#0055a4", "#ffffff", "#ef4135"],
    svg: (
      <>
        <rect width="10" height="20" fill="#0055a4" />
        <rect x="10" width="10" height="20" fill="#ffffff" />
        <rect x="20" width="10" height="20" fill="#ef4135" />
      </>
    ),
  },
};

const COUNTRY_NAMES: Record<string, string> = { EUA: "Estados Unidos" };

/** Degradado con los colores de la bandera; el blanco se suaviza para que se note sobre fondos claros. */
export function flagGradient(country: string, direction = "90deg") {
  const colors = (FLAGS[country]?.colors ?? ["#108bcc", "#002e5f"]).map((color) => (color === "#ffffff" ? "#e6ecf2" : color));
  const stops = colors.flatMap((color, index) => {
    const start = (index / colors.length) * 100;
    const end = ((index + 1) / colors.length) * 100;
    return [`${color} ${start}%`, `${color} ${end}%`];
  });
  return `linear-gradient(${direction}, ${stops.join(", ")})`;
}

interface CountryFlagProps {
  country: string;
  className?: string;
  /** Muestra un anillo con los colores de la bandera cuando el contenedor con clase "group" recibe hover o foco. */
  interactive?: boolean;
}

export function CountryFlag({ country, className, interactive = false }: CountryFlagProps) {
  const flag = FLAGS[country];
  if (!flag) return null;

  return (
    <span
      className={cn("relative inline-flex shrink-0 rounded-[3px] p-[2px]", className)}
      title={COUNTRY_NAMES[country] ?? country}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute -inset-[1px] rounded-[4px] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          style={{ backgroundImage: flagGradient(country, "135deg") }}
        />
      )}
      <svg
        viewBox="0 0 30 20"
        className={cn(
          "relative block h-full w-auto rounded-[2px] shadow-[0_0_0_1px_rgba(0,46,95,0.12)] transition-transform duration-300",
          interactive && "group-hover:scale-110",
        )}
        role="img"
        aria-label={`Bandera de ${COUNTRY_NAMES[country] ?? country}`}
      >
        {flag.svg}
      </svg>
    </span>
  );
}
