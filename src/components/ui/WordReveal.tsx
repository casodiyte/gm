"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote";

interface WordRevealProps {
  text: string;
  as?: RevealTag;
  className?: string;
  id?: string;
  delay?: number;
  once?: boolean;
}

export function WordReveal({
  text,
  as: Tag = "h2",
  className,
  id,
  delay = 0,
  once = true,
}: WordRevealProps) {
  const words = text.trim().split(/\s+/);

  return (
    <Tag id={id} className={cn(className)}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-8% 0px -8% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: 0.045,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "115%" },
                visible: {
                  y: 0,
                  transition: {
                    duration: index === 0 ? 0.38 : 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}{index < words.length - 1 ? "\u00a0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
