import type { ReactNode } from "react";

import { BrandContainer, BrandSection } from "@/components/brand";
import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
  id,
  "aria-labelledby": ariaLabelledby,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <BrandSection
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(className)}
    >
      <BrandContainer>{children}</BrandContainer>
    </BrandSection>
  );
}
