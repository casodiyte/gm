import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { keySpec, type ProductDetails } from "@/lib/catalog-data";

interface ProductCardProps {
  product: ProductDetails;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const spec = keySpec(product);

  return (
    <button
      type="button"
      aria-label={`Ver ficha técnica de ${product.name}`}
      onClick={onClick}
      className="group relative flex h-full w-full flex-col overflow-hidden border border-[var(--color-steel)]/15 bg-white text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--color-brass)]/60 hover:shadow-[0_24px_60px_rgba(0,46,95,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,var(--color-mist)_100%)]">
        <div
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(0,46,95,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,46,95,.05)_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        <Image
          src={product.img}
          alt=""
          fill
          className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 25vw"
        />
        <span className="absolute left-4 top-4 bg-white/90 px-2 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-steel)] backdrop-blur-sm">
          {product.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-semibold leading-tight text-[var(--color-ink)]">
          {product.name}
        </h3>
        {spec && (
          <p className="mt-3 border-l-2 border-[var(--color-brass)] pl-3 font-sans text-sm leading-snug text-[var(--color-ink)]/75">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-steel)]">{spec.label}</span>
            <span className="line-clamp-2">{spec.value}</span>
          </p>
        )}
        <span className="mt-auto flex items-center justify-between pt-5 font-sans text-sm font-semibold text-[var(--color-ink)]">
          Ver ficha técnica
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-ink)]/15 transition-colors group-hover:border-[var(--color-brass)] group-hover:bg-[var(--color-brass)] group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[var(--color-brass)] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
    </button>
  );
}
