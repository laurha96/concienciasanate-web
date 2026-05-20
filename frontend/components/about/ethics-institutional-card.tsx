"use client";

import type { LucideIcon } from "lucide-react";
import { AlertCircle, Check, Minus, Shield, Stethoscope } from "lucide-react";

import type {
  EthicsSectionItem,
  EthicsSectionVariant,
} from "@/components/about/about-ethics-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { EthicsClinicalBadge } from "@/components/about/ethics-clinical-badge";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import {
  AboutPremiumCardBottomLine,
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardNested,
  AboutPremiumCardShell,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const variantStyles: Record<
  EthicsSectionVariant,
  { accent: string; iconBg: string; glow: string }
> = {
  positive: {
    accent: "text-[var(--green-secondary)]",
    iconBg: "border-primary/20 bg-accent/48",
    glow: "bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.1),transparent_68%)]",
  },
  negative: {
    accent: "text-muted-foreground",
    iconBg: "border-border/48 bg-muted/42",
    glow: "bg-[radial-gradient(circle,rgba(34,34,34,0.05),transparent_68%)]",
  },
  guidance: {
    accent: "text-[var(--green-secondary)]",
    iconBg: "border-primary/18 bg-brand-surface/68",
    glow: "bg-[radial-gradient(circle,rgb(var(--brand-accent-rgb)/0.14),transparent_68%)]",
  },
  safety: {
    accent: "text-[var(--green-secondary)]",
    iconBg: "border-primary/18 bg-accent/38",
    glow: "bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.09),transparent_68%)]",
  },
};

const variantIcons: Record<EthicsSectionVariant, LucideIcon> = {
  positive: Check,
  negative: Minus,
  guidance: Stethoscope,
  safety: Shield,
};

export type EthicsInstitutionalCardProps = {
  sectionId: string;
  variant: EthicsSectionVariant;
  badge: string;
  title: string;
  lead: string;
  items: readonly EthicsSectionItem[];
  index: number;
  icon?: LucideIcon;
};

export function EthicsInstitutionalCard({
  sectionId,
  variant,
  badge,
  title,
  lead,
  items,
  index,
  icon,
  useStagger = false,
}: EthicsInstitutionalCardProps & { useStagger?: boolean }) {
  const styles = variantStyles[variant];
  const HeaderIcon = icon ?? variantIcons[variant];
  const ItemIcon = variant === "negative" ? Minus : Check;
  return (
    <AboutPremiumCardListItem
      index={index}
      y={24}
      staggerStep={0.1}
      useStagger={useStagger}
    >
      <AboutPremiumCardShell
        className="flex h-full flex-col"
        lift={-5}
        glowClassName={cn(styles.glow, "opacity-55")}
        aria-labelledby={sectionId}
      >
        <div className="relative flex flex-1 flex-col p-7 sm:p-8 lg:p-9">
          <div className="flex items-start justify-between gap-3">
            <EthicsClinicalBadge label={badge} variant={variant} />
            <AboutPremiumCardIcon
              size="md"
              className={cn("border", styles.iconBg, styles.accent)}
            >
              <HeaderIcon className="size-[19px] opacity-90" strokeWidth={1.45} />
            </AboutPremiumCardIcon>
          </div>

          <span className={cn(aboutEd.indexMarker, "mt-6 block")} aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            id={sectionId}
            className="mt-3 font-display text-xl font-medium tracking-[-0.02em] text-foreground sm:text-[1.42rem]"
          >
            {title}
          </h3>
          <p
            className={cn(
              aboutEd.body,
              "mt-4 text-[15px] leading-[1.82] text-muted-foreground/95"
            )}
          >
            {lead}
          </p>

          <ul className="mt-7 flex flex-1 flex-col gap-3" aria-label={title}>
            {items.map((item, itemIndex) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={aboutStaggerDelay(itemIndex, 0.04)}
                className="list-none"
              >
                <AboutPremiumCardNested className="flex gap-3 p-3.5 sm:p-4">
                  <span
                    className={cn(
                      "mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-border/32 bg-brand-surface/65 shadow-[0_4px_10px_rgba(34,34,34,0.03)]",
                      styles.accent
                    )}
                    aria-hidden
                  >
                    {variant === "guidance" && itemIndex === 0 ? (
                      <AlertCircle className="size-3 opacity-80" strokeWidth={2} />
                    ) : (
                      <ItemIcon className="size-3 opacity-80" strokeWidth={2.25} />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold tracking-tight text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-[1.7] text-muted-foreground/95">
                      {item.detail}
                    </p>
                  </div>
                </AboutPremiumCardNested>
              </motion.li>
            ))}
          </ul>

          <AboutPremiumCardBottomLine className="mt-7" />
        </div>
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
