"use client";

import { Suspense, useCallback, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Download, FileText } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductModal } from "@/components/ui/ProductModal";
import { Isotipo } from "@/components/ui/Isotipo";
import { TECHNICAL_DOCUMENTS } from "@/lib/site-data";
import { CATALOG, CATALOG_ITEM_COUNT, findCategory, type ProductDetails } from "@/lib/catalog-data";
import { cn } from "@/lib/utils";

const ALL = "todas";
type Selection = { groupId: string; categoryId: string };

export default function CatalogoPage() {
  return (
    <Suspense fallback={<CatalogoView categoryParam={null} />}>
      <CatalogoWithParams />
    </Suspense>
  );
}

// Permite enlazar directamente a una categoría: /catalogo?categoria=verticales
function CatalogoWithParams() {
  const categoryParam = useSearchParams().get("categoria");
  return <CatalogoView key={categoryParam ?? ""} categoryParam={categoryParam} />;
}

function CatalogoView({ categoryParam }: { categoryParam: string | null }) {
  const [selection, setSelection] = useState<Selection>(() => {
    const match = findCategory(categoryParam);
    return match
      ? { groupId: match.group.id, categoryId: match.category.id }
      : { groupId: CATALOG[0].id, categoryId: ALL };
  });
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const closeModal = useCallback(() => setSelectedProduct(null), []);

  const group = CATALOG.find((item) => item.id === selection.groupId) ?? CATALOG[0];
  const visibleCategories = selection.categoryId === ALL
    ? group.categories
    : group.categories.filter((category) => category.id === selection.categoryId);
  const groupCount = group.categories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] pb-24">
      <header className="relative overflow-hidden bg-[var(--color-ink)] pb-16 pt-36 text-white">
        <Isotipo variant="dark" className="pointer-events-none absolute -right-10 top-24 w-[26rem] opacity-[0.12] max-md:hidden" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-sky)]">
            <span className="h-px w-10 bg-[var(--color-brass)]" aria-hidden="true" />
            Catálogo
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] sm:text-7xl">
            Equipos para mover cualquier proceso
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Bombas fabricadas por GM, líneas NOV Mono y Moyno, y los equipos de las marcas que representamos. Abre cada ficha para ver rangos, materiales y aplicaciones.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Equipos y soluciones</dt>
              <dd className="font-display text-4xl font-bold">{CATALOG_ITEM_COUNT}</dd>
            </div>
            {CATALOG.map((item) => (
              <div key={item.id}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{item.label}</dt>
                <dd className="font-display text-4xl font-bold text-[var(--color-sky)]">
                  {item.categories.reduce((sum, category) => sum + category.items.length, 0)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="sticky top-20 z-30 border-b border-[var(--color-steel)]/15 bg-white/95 backdrop-blur-md lg:top-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-label="Línea de productos" className="flex gap-1 overflow-x-auto pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATALOG.map((item) => {
              const active = item.id === group.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelection({ groupId: item.id, categoryId: ALL })}
                  className={cn(
                    "relative shrink-0 px-4 pb-3 pt-2 font-heading text-lg font-semibold uppercase tracking-wide transition-colors",
                    active ? "text-[var(--color-ink)]" : "text-[var(--color-steel)] hover:text-[var(--color-ink)]",
                  )}
                >
                  {item.label}
                  <span className={cn("absolute inset-x-4 bottom-0 h-[3px] bg-[var(--color-brass)] transition-transform", active ? "scale-x-100" : "scale-x-0")} />
                </button>
              );
            })}
          </div>
          <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden" aria-label={`Categorías de ${group.label}`}>
            {[{ id: ALL, label: `Todas (${groupCount})` }, ...group.categories.map((category) => ({ id: category.id, label: `${category.label} (${category.items.length})` }))].map((chip) => {
              const active = selection.categoryId === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelection({ groupId: group.id, categoryId: chip.id })}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-1.5 font-sans text-sm font-medium transition-colors",
                    active
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-[var(--color-steel)]/25 bg-white text-[var(--color-ink)]/75 hover:border-[var(--color-ink)]/40 hover:text-[var(--color-ink)]",
                  )}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-[var(--color-steel)]/15 py-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">{group.description}</p>
          {group.lineLogos && (
            <ul className="flex flex-wrap items-center gap-3" aria-label="Líneas incluidas">
              {group.lineLogos.map((line) => (
                <li key={line.name} className="relative h-10 w-24">
                  <Image src={line.logo} alt={line.name} fill sizes="96px" className="object-contain" />
                </li>
              ))}
            </ul>
          )}
        </div>

        {visibleCategories.map((category) => (
          <section key={`${group.id}-${category.id}`} className="pt-12" aria-labelledby={`categoria-${category.id}`}>
            <div className="mb-6 flex items-baseline gap-4">
              <h2 id={`categoria-${category.id}`} className="font-display text-3xl font-bold uppercase tracking-[-0.01em] text-[var(--color-ink)] sm:text-4xl">
                {category.label}
              </h2>
              <span className="h-px flex-1 bg-[var(--color-steel)]/20" aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-[var(--color-steel)]">
                {category.items.length} {category.items.length === 1 ? "equipo" : "equipos"}
              </span>
            </div>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((product) => (
                <li key={product.slug} className="h-full">
                  <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-24 grid gap-10 border-t border-[var(--color-steel)]/15 pt-16 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="technical-library-title">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">Biblioteca técnica</p>
            <h2 id="technical-library-title" className="mt-3 font-display text-4xl font-bold uppercase tracking-[-0.015em] text-[var(--color-ink)] sm:text-5xl">Documentos para tu proyecto</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink)]/70">Catálogos y fichas del material proporcionado por GM. Confirma con ingeniería la versión y el alcance aplicables antes de especificar un equipo.</p>
          </div>
          <ul className="divide-y divide-[var(--color-steel)]/15 border-y border-[var(--color-steel)]/15">
            {TECHNICAL_DOCUMENTS.map((document) => (
              <li key={document.href}>
                <a href={document.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-5 transition-colors hover:bg-[var(--color-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brass)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-[var(--color-ink)] text-[var(--color-sky)]"><FileText className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-xl font-semibold text-[var(--color-ink)]">{document.title}</span>
                    <span className="block text-sm text-[var(--color-ink)]/65">{document.description}</span>
                  </span>
                  <span className="hidden shrink-0 text-xs font-medium uppercase tracking-wider text-[var(--color-steel)] sm:block">{document.meta}</span>
                  <Download className="h-5 w-5 shrink-0 text-[var(--color-brass)] transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
}
