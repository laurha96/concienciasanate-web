import { cn } from "@/lib/utils";

const VARIANT_MIN_HEIGHT: Record<
  "ecosystem" | "differential" | "manifesto",
  string
> = {
  ecosystem: "min-h-[520px] sm:min-h-[560px]",
  differential: "min-h-[680px] sm:min-h-[720px]",
  manifesto: "min-h-[640px] sm:min-h-[700px]",
};

export type AboutSectionPlaceholderProps = {
  variant: keyof typeof VARIANT_MIN_HEIGHT;
  /** ID de sección para reservar espacio y evitar CLS al hidratar. */
  sectionId?: string;
  label?: string;
};

/** Reserva altura mientras carga un bloque below-the-fold (evita CLS). */
export function AboutSectionPlaceholder({
  variant,
  sectionId,
  label = "Cargando sección",
}: AboutSectionPlaceholderProps) {
  return (
    <section
      id={sectionId}
      aria-busy="true"
      aria-label={label}
      className={cn(
        "relative w-full animate-pulse",
        VARIANT_MIN_HEIGHT[variant],
        "rounded-[2px] bg-gradient-to-b from-brand-background via-[rgb(var(--brand-accent-rgb)/0.08)] to-brand-background"
      )}
    >
      <span className="sr-only">{label}</span>
    </section>
  );
}
