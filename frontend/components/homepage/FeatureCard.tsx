"use client";

import type { ReactNode } from "react";

import { FeatureCard as BrandFeatureCard } from "@/components/brand";
import { cn } from "@/lib/utils";

export type HomeFeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
  interactive = true,
  compact = true,
  layout = "row",
}: HomeFeatureCardProps & {
  interactive?: boolean;
  compact?: boolean;
  layout?: "stack" | "row";
}) {
  return (
    <BrandFeatureCard
      icon={icon}
      title={title}
      description={description}
      interactive={interactive}
      compact={compact}
      layout={layout}
      className={cn("h-full bg-brand-surface/95", className)}
    />
  );
}
