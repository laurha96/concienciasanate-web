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

/**
 * Card reutilizable para pilares del ecosistema (Home y secciones similares).
 */
export function FeatureCard({
  icon,
  title,
  description,
  className,
}: HomeFeatureCardProps) {
  return (
    <BrandFeatureCard
      icon={icon}
      title={title}
      description={description}
      className={cn("h-full bg-brand-surface/95", className)}
    />
  );
}
