import { cn } from "@/lib/utils";

/** Estilo de enlace de navegación en desktop (compartido header + dropdowns). */
export function navLinkClass(active: boolean) {
  return cn(
    "rounded-full px-2.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200 xl:px-3 xl:text-sm",
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
