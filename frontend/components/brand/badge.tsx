import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { brandClasses } from "@/lib/brand/tokens";

export function BrandBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn(brandClasses.badge, className)}>{children}</span>;
}
