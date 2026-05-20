"use client";

import type { LucideIcon } from "lucide-react";

import type { ScientificFoundationKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardShell,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

export type ScientificFoundationCardProps = {
  index: number;
  areaKey: ScientificFoundationKey;
  label: string;
  discipline: string;
  body: string;
  icon: LucideIcon;
};

export function ScientificFoundationCard({
  index,
  areaKey,
  label,
  discipline,
  body,
  icon: Icon,
  useStagger = false,
}: ScientificFoundationCardProps & { useStagger?: boolean }) {
  return (
    <AboutPremiumCardListItem
      index={index}
      y={18}
      staggerStep={0.07}
      useStagger={useStagger}
    >
      <AboutPremiumCardShell
        className="flex h-full flex-col p-8 sm:p-9"
        lift={-5}
        aria-labelledby={`science-area-${areaKey}`}
      >
        <div className="relative flex items-start justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/75">
            {discipline}
          </span>
          <AboutPremiumCardIcon size="sm">
            <Icon className="size-[18px] opacity-88" strokeWidth={1.45} />
          </AboutPremiumCardIcon>
        </div>

        <h3
          id={`science-area-${areaKey}`}
          className="relative mt-6 font-display text-[1.28rem] font-medium leading-snug tracking-[-0.02em] text-foreground sm:text-[1.38rem]"
        >
          {label}
        </h3>

        <p
          className={cn(
            aboutEd.body,
            "relative mt-5 flex-1 text-[15px] leading-[1.84] text-muted-foreground/95"
          )}
        >
          {body}
        </p>

        <span className={cn(aboutEd.indexMarker, "relative mt-8 block")} aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
