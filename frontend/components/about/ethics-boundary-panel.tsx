"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFadeUp, aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

export type EthicsBoundaryPanelProps = {
  variant: "do" | "dont";
  title: string;
  lead: string;
  items: readonly string[];
  panelId: string;
  index?: number;
  editorial?: boolean;
  className?: string;
};

/** Panel Qué hacemos / Qué no hacemos — tarjeta institucional premium */
export function EthicsBoundaryPanel({
  variant,
  title,
  lead,
  items,
  panelId,
  index = 0,
  editorial = false,
  className,
}: EthicsBoundaryPanelProps) {
  const isDo = variant === "do";
  const ItemIcon = isDo ? Check : Minus;

  return (
    <motion.article
      initial={aboutFadeUp.initial}
      whileInView={aboutFadeUp.whileInView}
      viewport={aboutFadeUp.viewport}
      transition={aboutStaggerDelay(index, 0.08)}
      whileHover={{ y: -1 }}
      className={cn(
        "relative h-full overflow-hidden transition-[border-color,box-shadow] duration-300",
        editorial
          ? "py-2 sm:py-4"
          : cn(
              "rounded-3xl border p-6 shadow-card sm:p-8",
              isDo
                ? "border-border/55 bg-brand-surface/90 hover:border-[rgb(var(--brand-primary-rgb)/0.2)] hover:shadow-soft"
                : "border-border/50 bg-gradient-to-br from-brand-muted/50 via-brand-surface/80 to-brand-muted/30 hover:shadow-soft"
            ),
        className
      )}
      aria-labelledby={panelId}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
          isDo ? "via-primary/25" : "via-border/80"
        )}
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div
        className={cn(
          "pointer-events-none absolute -bottom-16 -right-16 size-48 rounded-full blur-3xl",
          isDo ? "bg-primary/[0.06]" : "bg-muted/40"
        )}
        aria-hidden
      />

      <header className="relative">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "grid size-10 place-items-center rounded-xl border",
              isDo
                ? "border-primary/15 bg-accent/80 text-[var(--green-secondary)]"
                : "border-border/60 bg-muted/50 text-muted-foreground"
            )}
            aria-hidden
          >
            <ItemIcon className="size-4" strokeWidth={1.75} />
          </span>
          <h3
            id={panelId}
            className={cn(
              "font-semibold tracking-tight",
              editorial
                ? "font-display text-2xl sm:text-[1.65rem]"
                : "text-lg sm:text-xl"
            )}
          >
            {title}
          </h3>
        </div>
        <p className={cn(editorial ? aboutEd.lead : "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]", !editorial && "mt-3")}>
          {lead}
        </p>
      </header>

      <ul className="relative mt-6 space-y-3.5" aria-label={title}>
        {items.map((item, itemIndex) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={aboutStaggerDelay(itemIndex, 0.04)}
            className={cn(
              "flex items-start gap-3",
              editorial ? aboutEd.body : "text-sm leading-relaxed text-muted-foreground"
            )}
          >
            <ItemIcon
              className={cn(
                "mt-0.5 size-4 shrink-0",
                isDo ? "text-primary/80" : "text-muted-foreground/60"
              )}
              strokeWidth={2}
              aria-hidden
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
