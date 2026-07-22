import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  theme = "light",
  as: Tag = "h2",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  
  return (
    <div className={cn(
      "flex flex-col mb-12",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        {align === "left" && <div className={cn("w-8 h-px", isDark ? "bg-[var(--color-steel)]" : "bg-[var(--color-brass)]")} />}
        <span className={cn(
          "font-mono text-xs font-semibold tracking-[0.2em] uppercase",
          isDark ? "text-[var(--color-brass)]" : "text-[var(--color-steel)]"
        )}>
          {eyebrow}
        </span>
        {align === "center" && <div className={cn("w-8 h-px", isDark ? "bg-[var(--color-steel)]" : "bg-[var(--color-brass)]")} />}
      </div>
      
      <Tag className={cn(
        "font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase",
        isDark ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"
      )}>
        {title}
      </Tag>
      
      {description && (
        <p className={cn(
          "mt-4 font-sans text-lg max-w-2xl text-balance",
          isDark ? "text-[var(--color-paper)]/70" : "text-[var(--color-steel)]"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
