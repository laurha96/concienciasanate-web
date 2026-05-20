import type { ReactNode } from "react";

import { BrandContainer, BrandSection } from "@/components/brand";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
  id,
  "aria-labelledby": ariaLabelledby,
  variant = "default",
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  /** `home` aplica padding y ritmo compacto de la landing. */
  variant?: "default" | "home";
}) {
  return (
    <BrandSection
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(variant === "home" && homeLayout.section, className)}
    >
      <BrandContainer>{children}</BrandContainer>
    </BrandSection>
  );
}
