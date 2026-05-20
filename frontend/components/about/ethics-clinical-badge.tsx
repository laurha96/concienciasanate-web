import type { EthicsSectionVariant } from "@/components/about/about-ethics-data";
import { cn } from "@/lib/utils";

export type EthicsClinicalBadgeProps = {
  label: string;
  variant?: EthicsSectionVariant;
  className?: string;
};

const variantBadgeClass: Record<EthicsSectionVariant, string> = {
  positive:
    "border-[rgb(var(--brand-primary-rgb)/0.12)] text-[var(--green-secondary)]",
  negative: "border-[rgb(var(--brand-primary-rgb)/0.08)] text-foreground/58",
  guidance:
    "border-[rgb(var(--brand-primary-rgb)/0.11)] text-[var(--green-secondary)]",
  safety:
    "border-[rgb(var(--brand-primary-rgb)/0.11)] text-[var(--green-secondary)]",
};

/** Badge institucional suave — sección Ética y límites */
export function EthicsClinicalBadge({
  label,
  variant = "positive",
  className,
}: EthicsClinicalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border",
        "bg-[rgb(var(--brand-accent-rgb)/0.38)] px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em]",
        "shadow-[0_6px_18px_rgba(34,34,34,0.028)] backdrop-blur-md",
        "transition-colors duration-300 sm:text-[11px]",
        variantBadgeClass[variant],
        className
      )}
    >
      <span
        className={cn(
          "mr-1.5 size-1.5 shrink-0 rounded-full",
          variant === "negative" ? "bg-muted-foreground/50" : "bg-primary/65"
        )}
        aria-hidden
      />
      {label}
    </span>
  );
}
