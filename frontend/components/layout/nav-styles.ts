import { cn } from "@/lib/utils";

/**
 * Estilo de enlace de navegación en desktop (compartido header + dropdowns).
 * Padding y fuente fluidos con clamp() para que nunca se amontone entre
 * ~1100px y pantallas grandes, sin depender de un breakpoint exacto.
 */
export function navLinkClass(active: boolean) {
  return cn(
    "inline-flex shrink-0 items-center whitespace-nowrap rounded-full py-2 font-medium tracking-tight transition-colors duration-200",
    "px-[clamp(0.5rem,0.9vw,0.75rem)] text-[clamp(0.8125rem,0.95vw,0.875rem)]",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]",
    active
      ? "bg-accent text-[var(--green-secondary)] shadow-soft"
      : "text-muted-foreground hover:bg-accent/55 hover:text-foreground"
  );
}

/** Estilo de enlace de navegación en el menú móvil. */
export function mobileNavLinkClass(active: boolean) {
  return cn(
    "block rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]",
    active
      ? "bg-accent text-[var(--green-secondary)]"
      : "text-foreground hover:bg-accent/55"
  );
}
