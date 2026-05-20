import { cn } from "@/lib/utils";

export type EthicsClinicalBadgeProps = {
  label: string;
  className?: string;
};

/** Badge clínico suave — sección Ética y límites */
export function EthicsClinicalBadge({ label, className }: EthicsClinicalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgb(var(--brand-primary-rgb)/0.18)]",
        "bg-brand-surface/80 px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--green-secondary)]",
        "shadow-soft backdrop-blur-sm transition-colors duration-300 sm:text-xs",
        className
      )}
    >
      <span
        className="mr-1.5 size-1.5 shrink-0 rounded-full bg-primary/70"
        aria-hidden
      />
      {label}
    </span>
  );
}
