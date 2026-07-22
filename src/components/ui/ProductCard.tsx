import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  code: string;
  name: string;
  imageSrc: string;
  fallbackText?: string;
  onClick?: () => void;
}

export function ProductCard({ code, name, imageSrc, fallbackText, onClick }: ProductCardProps) {
  return (
    <button onClick={onClick} className="w-full text-left group relative bg-[var(--color-paper)] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col corner-brackets">
      {/* Code Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-[var(--color-steel)] px-2 py-1 bg-[var(--color-ink)]/5 rounded">
          {code}
        </span>
      </div>

      {/* Image Container with 1:1 Aspect Ratio */}
      <div className="relative w-full aspect-square mb-6 bg-white flex items-center justify-center p-4">
        <Image
          src={imageSrc}
          alt={`Producto: ${name}`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Fallback styling for when image fails or isn't perfect */}
        <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 hover:opacity-0 -z-10 bg-[var(--color-ink)]/5">
           <span className="font-display text-xl text-[var(--color-steel)]">{fallbackText || name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-end">
        <h3 className="font-heading font-semibold text-lg text-[var(--color-ink)] mb-3 line-clamp-2">
          {name}
        </h3>
        <span 
          className="inline-flex items-center text-sm font-sans font-medium text-[var(--color-steel)] group-hover:text-[var(--color-brass)] transition-colors"
        >
          Ver ficha técnica
          <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </span>
      </div>
      
      {/* Structural hairline bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-steel)]/20" />
    </button>
  );
}
