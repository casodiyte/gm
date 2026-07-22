"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="pt-28 pb-32 bg-[var(--color-paper)] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative max-w-4xl mb-24 z-10 pt-8">
          <div className="absolute top-0 -left-4 text-[4rem] md:text-[9rem] font-display font-bold text-[var(--color-steel)]/5 pointer-events-none select-none uppercase tracking-tighter leading-none whitespace-nowrap">
            Insights
          </div>
          <SectionHeader 
            eyebrow="BLOG TÉCNICO" 
            title="Conocimiento y mejores prácticas" 
            align="left"
            className="mb-8 relative z-10"
          />
          <p className="font-sans text-lg md:text-xl text-[var(--color-ink)]/70 leading-relaxed relative z-10 border-l-4 border-[var(--color-brass)] pl-6 max-w-3xl">
            Artículos especializados, casos de estudio y guías técnicas escritas por nuestros ingenieros para optimizar el rendimiento y la vida útil de tus equipos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-[var(--color-steel)]/10 shadow-xl hover:shadow-2xl hover:border-[var(--color-brass)]/40 transition-all duration-500 rounded-sm overflow-hidden hover:-translate-y-2 relative"
            >
              {/* Golden line on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brass)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-ink)]">
                <Image
                  src={post.fallbackImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Etiqueta Flotante */}
                <div className="absolute top-6 left-6 bg-[var(--color-ink)]/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--color-brass)] uppercase">
                    Ingeniería
                  </span>
                </div>
              </Link>
              
              <div className="flex flex-col flex-grow p-10">
                <div className="flex items-center text-[var(--color-steel)] font-mono text-[11px] uppercase tracking-widest mb-6">
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[var(--color-brass)]" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="mx-3 text-[var(--color-steel)]/30">|</span>
                  <span>5 MIN LECTURA</span>
                </div>
                
                <h2 className="font-display font-bold text-3xl text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-brass)] transition-colors leading-tight line-clamp-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="font-sans text-lg text-[var(--color-ink)]/70 mb-8 line-clamp-3 flex-grow leading-relaxed">
                  {post.content[0].replace(/\*\*/g, '')}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center font-sans font-semibold text-sm tracking-widest uppercase text-[var(--color-ink)] group-hover:text-[var(--color-ink)] border border-[var(--color-steel)]/20 group-hover:border-[var(--color-brass)] bg-transparent group-hover:bg-[var(--color-brass)]/10 transition-all duration-300 mt-auto py-4 px-6 rounded-sm w-full sm:w-auto"
                >
                  Leer artículo completo
                  <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1 text-[var(--color-brass)]" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
