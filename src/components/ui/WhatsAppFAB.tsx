"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "525546020434"; // Includes country code, no +, no spaces
  const prefilledMessage = "Hola, quisiera cotizar un equipo de bombeo.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 bg-[var(--color-brass)] text-[var(--color-ink)] rounded-full shadow-lg shadow-[var(--color-brass)]/20 hover:scale-105 transition-all duration-300 overflow-hidden"
      style={{
        width: isHovered ? "160px" : "56px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contactar por WhatsApp"
    >
      <div className="flex items-center justify-center w-14 h-14 shrink-0">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span
        className="font-sans font-medium whitespace-nowrap overflow-hidden transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          width: isHovered ? "auto" : 0,
          paddingRight: isHovered ? "1.5rem" : 0,
        }}
      >
        ¿Hablamos?
      </span>
    </a>
  );
}
