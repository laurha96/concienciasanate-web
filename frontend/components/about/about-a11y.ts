/** Utilidades de accesibilidad — página Sobre (focus, skip, contraste). */

/** Anillo de foco visible — cumple contraste sobre fondos claros de marca. */
export const aboutFocusRing =
  "rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.42)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-background)]";

export const aboutFocusRingPill =
  "rounded-full focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.42)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-background)]";

/** Enlace «saltar» — visible solo al recibir foco por teclado. */
export const aboutSkipLinkClass =
  "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:items-center focus:rounded-full focus:border focus:border-border/50 focus:bg-brand-surface focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md";
