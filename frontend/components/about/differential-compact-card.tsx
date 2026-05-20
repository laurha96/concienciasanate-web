"use client";

import type { LucideIcon } from "lucide-react";

import type { DifferentialBlockKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardShell,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

export function DifferentialCompactCard({
  index,
  blockKey,
  title,
  body,
  icon: Icon,
  useStagger = false,
}: {
  index: number;
  blockKey: DifferentialBlockKey;
  title: string;
  body: string;
  icon: LucideIcon;
  useStagger?: boolean;
}) {
  return (
    <AboutPremiumCardListItem
      index={index}
      y={8}
      staggerStep={0.04}
      useStagger={useStagger}
    >
      <AboutPremiumCardShell
        className="h-full p-4"
        lift={-2}
        aria-labelledby={`diff-${blockKey}`}
      >
        <AboutPremiumCardIcon size="sm">
          <Icon className="size-3.5 opacity-80" strokeWidth={1.5} />
        </AboutPremiumCardIcon>
        <h3 id={`diff-${blockKey}`} className={cn(aboutEd.h3, "mt-3 text-base md:text-lg")}>
          {title}
        </h3>
        <p className={cn(aboutEd.bodySm, "mt-1.5")}>{body}</p>
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
