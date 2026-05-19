import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { brandClasses } from "@/lib/brand/tokens";

export function BrandSection({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(brandClasses.section, className)}
    >
      {children}
    </section>
  );
}

export function BrandContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(brandClasses.container, className)}>{children}</div>;
}
