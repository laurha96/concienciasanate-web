"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { DifferentialBlockKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export type DifferentialPoint = {
  label: string;
  detail: string;
};

export type DifferentialStrategicCardProps = {
  index: number;
  blockKey: DifferentialBlockKey;
  title: string;
  summary: string;
  points: readonly DifferentialPoint[];
  icon: LucideIcon;
};

export function DifferentialStrategicCard({
  index,
  blockKey,
  title,
  summary,
  points,
  icon: Icon,
}: DifferentialStrategicCardProps) {
  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={aboutStaggerDelay(index, 0.12)}
    >
      <motion.article
        className={cn(
          "group relative overflow-hidden rounded-[32px]",
          "border border-white/50 bg-brand-surface/45",
          "shadow-[0_28px_72px_rgba(34,34,34,0.06)]",
          "backdrop-blur-xl backdrop-saturate-150",
          "ring-1 ring-border/20",
          "transition-[border-color,box-shadow] duration-300"
        )}
        whileHover={{
          y: -4,
          transition: { duration: 0.38, ease: EASE },
        }}
        aria-labelledby={`differential-${blockKey}`}
      >
        <motion.div
          className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary/[0.07] blur-3xl"
          aria-hidden
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />

        <motion.div
          className="pointer-events-none absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-primary/20 via-border/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:top-10 sm:bottom-10"
          aria-hidden
        />

        <motion.div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 lg:p-12">
          {/* Cabecera del bloque */}
          <div>
            <motion.div className="flex items-start justify-between gap-4">
              <span className={aboutEd.indexMarker} aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-2xl",
                  "border border-border/40 bg-brand-background/70",
                  "text-[var(--green-secondary)] shadow-[0_10px_28px_rgba(34,34,34,0.05)]",
                  "transition-all duration-300 group-hover:border-primary/25 group-hover:bg-accent/45"
                )}
                aria-hidden
              >
                <Icon className="size-5 opacity-90" strokeWidth={1.5} />
              </span>
            </motion.div>

            <h3
              id={`differential-${blockKey}`}
              className="mt-7 font-display text-2xl font-medium tracking-tight text-foreground sm:text-[1.75rem]"
            >
              {title}
            </h3>
            <p className={cn(aboutEd.lead, "mt-5 text-base sm:text-[17px]")}>
              {summary}
            </p>
          </div>

          {/* Pilares del bloque */}
          <ul
            className="grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4"
            aria-label={`Aspectos de ${title}`}
          >
            {points.map((point, pointIndex) => (
              <motion.li
                key={point.label}
                className="list-none"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={aboutStaggerDelay(pointIndex, 0.05)}
              >
                <motion.div
                  className={cn(
                    "h-full rounded-2xl border border-border/35 bg-brand-background/50 p-4 sm:p-5",
                    "backdrop-blur-sm",
                    "transition-[border-color,background-color,box-shadow] duration-300",
                    "hover:border-primary/20 hover:bg-brand-surface/70",
                    "hover:shadow-[0_12px_32px_rgba(34,34,34,0.05)]"
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-px w-5 shrink-0 bg-gradient-to-r from-primary/45 to-transparent"
                      aria-hidden
                    />
                    <p className="text-sm font-medium tracking-tight text-foreground">
                      {point.label}
                    </p>
                  </div>
                  <p className={cn(aboutEd.body, "mt-2.5 text-[14px] leading-relaxed")}>
                    {point.detail}
                  </p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.article>
    </motion.li>
  );
}
