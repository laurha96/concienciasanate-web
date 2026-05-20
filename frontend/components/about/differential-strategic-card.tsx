"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { DifferentialBlockKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutEase, aboutStaggerDelay } from "@/components/about/about-motion";
import {
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardNested,
  AboutPremiumCardShell,
  AboutPremiumCardWatermark,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

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
  useStagger = false,
}: DifferentialStrategicCardProps & { useStagger?: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <AboutPremiumCardListItem
      index={index}
      y={28}
      staggerStep={0.11}
      useStagger={useStagger}
    >
      <AboutPremiumCardShell
        size="large"
        lift={-5}
        sideAccent
        glowPosition={isEven ? "right" : "left"}
        aria-labelledby={`differential-${blockKey}`}
      >
        <AboutPremiumCardWatermark
          index={index}
          align={isEven ? "right" : "left"}
        />

        <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:p-12 xl:gap-20">
          <div className="flex flex-col pl-3 sm:pl-4">
            <div className="flex items-start justify-between gap-4">
              <span className={aboutEd.indexMarker} aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <AboutPremiumCardIcon size="lg">
                <Icon className="size-[22px] opacity-90" strokeWidth={1.4} />
              </AboutPremiumCardIcon>
            </div>

            <h3
              id={`differential-${blockKey}`}
              className="mt-8 font-display text-[1.65rem] font-medium tracking-[-0.025em] text-foreground sm:text-[1.85rem] lg:mt-9"
            >
              {title}
            </h3>
            <p
              className={cn(
                aboutEd.lead,
                "mt-5 text-[16px] leading-[1.82] sm:text-[17px]"
              )}
            >
              {summary}
            </p>

            <motion.div
              className="mt-8 hidden h-px w-24 bg-gradient-to-r from-primary/38 to-transparent lg:block"
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: aboutEase }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <ul
            className={cn(
              "grid list-none gap-3.5 p-0 sm:grid-cols-2",
              points.length >= 5 && "lg:grid-cols-3"
            )}
            aria-label={`Aspectos de ${title}`}
          >
            {points.map((point, pointIndex) => (
              <motion.li
                key={point.label}
                className={cn(
                  "list-none",
                  points.length === 5 &&
                    pointIndex === 4 &&
                    "sm:col-span-2 lg:col-span-1"
                )}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={aboutStaggerDelay(pointIndex, 0.04)}
              >
                <AboutPremiumCardNested className="h-full p-4 sm:p-[1.125rem]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid size-6 shrink-0 place-items-center rounded-lg border border-primary/16 bg-accent/32 shadow-[0_4px_12px_rgba(34,34,34,0.04)]"
                      aria-hidden
                    >
                      <span className="size-1.5 rounded-full bg-[var(--green-secondary)]/75" />
                    </span>
                    <p className="text-[13px] font-semibold tracking-tight text-foreground">
                      {point.label}
                    </p>
                  </div>
                  <p
                    className={cn(
                      aboutEd.body,
                      "mt-3 text-[13.5px] leading-[1.74] text-muted-foreground/95"
                    )}
                  >
                    {point.detail}
                  </p>
                </AboutPremiumCardNested>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-border/45 to-transparent"
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
