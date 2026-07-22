"use client";

import { MouseEvent } from "react";
import Image from "next/image";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  imageSrc?: string;
  onClick?: () => void;
}

export function ServiceCard({ number, title, description, Icon, imageSrc, onClick }: ServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="group flex flex-col p-8 bg-gradient-to-b from-[#151a24] to-[var(--color-ink)] border border-[var(--color-steel)]/10 transition-all duration-500 relative overflow-hidden h-full rounded-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Background Image on Hover */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out mix-blend-luminosity"
            />
          </div>
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/80 to-[var(--color-ink)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
        </>
      )}

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(202, 166, 112, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-steel)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] z-0" />

      {/* Number Watermark */}
      <div className="absolute right-[-5%] bottom-[-5%] text-[12rem] leading-none font-display font-bold text-white/[0.02] select-none group-hover:text-[var(--color-brass)]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:scale-110 transition-all duration-700 pointer-events-none origin-bottom-right z-0">
        {number}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header line */}
        <div className="w-full h-px bg-gradient-to-r from-[var(--color-steel)]/20 to-transparent mb-8 group-hover:from-[var(--color-brass)] transition-colors duration-500" />

        <div className="flex items-start justify-between mb-8">
          <div className="w-16 h-16 bg-[#1a212d] border border-[var(--color-steel)]/20 flex items-center justify-center rounded-lg group-hover:border-[var(--color-brass)]/50 group-hover:bg-gradient-to-br group-hover:from-[var(--color-brass)]/20 group-hover:to-transparent group-hover:shadow-[0_0_20px_rgba(202,166,112,0.2)] transition-all duration-500">
            <Icon strokeWidth={1.5} className="w-8 h-8 text-[var(--color-steel)] group-hover:text-[var(--color-brass)] transition-colors duration-500" />
          </div>
          <span className="font-mono text-sm text-[var(--color-steel)] group-hover:text-[var(--color-brass)] transition-colors duration-500 pt-2 backdrop-blur-sm px-2 rounded-sm bg-black/10">
            /{number}
          </span>
        </div>
        
        <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-[var(--color-brass)] transition-colors duration-500">
          {title}
        </h3>
        
        <p className="font-sans text-[15px] text-[var(--color-paper)]/60 leading-relaxed mb-8 flex-grow group-hover:text-white/90 transition-colors duration-500">
          {description}
        </p>

        {/* Footer Link / Arrow */}
        <div className="flex items-center text-[var(--color-brass)] text-sm font-sans font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 mt-auto">
          Explorar servicio
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[var(--color-brass)] to-[#f0d49f] group-hover:w-full transition-all duration-700 ease-out z-20 shadow-[0_0_10px_rgba(202,166,112,0.8)]" />
    </div>
  );
}
