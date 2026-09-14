"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";
type RevealTag = "div" | "article" | "li" | "aside" | "span";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  once?: boolean;
  as?: RevealTag;
}

const motionTags = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  aside: motion.aside,
  span: motion.span,
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motionTags[as];
  const offset = direction === "left" ? { x: -30 } : direction === "right" ? { x: 30 } : { y: 26 };
  const scale = direction === "scale" ? 0.965 : 1;

  return (
    <Component
      className={cn(className)}
      initial={reduceMotion ? false : { ...offset, scale, opacity: 0.58 }}
      whileInView={reduceMotion ? undefined : { x: 0, y: 0, scale: 1, opacity: 1 }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ImageReveal({ children, className, delay = 0, once = true }: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={
        reduceMotion
          ? false
          : { scale: 1.035, filter: "saturate(0.72) contrast(0.92) brightness(0.86)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { scale: 1, filter: "saturate(1) contrast(1) brightness(1)" }
      }
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1 origin-left bg-[#108bcc]"
          initial={{ scaleX: 0, opacity: 0.35 }}
          whileInView={{ scaleX: 1, opacity: 0.85 }}
          viewport={{ once, amount: 0.2 }}
          transition={{ duration: 0.75, delay: delay + 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </motion.div>
  );
}
