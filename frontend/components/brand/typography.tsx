import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { brandClasses } from "@/lib/brand/tokens";

export function DisplayTitle({
  children,
  className,
  as: Tag = "h1",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <Tag id={id} className={cn(brandClasses.displayTitle, className)}>
      {children}
    </Tag>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
  id?: string;
}) {
  return (
    <Tag id={id} className={cn(brandClasses.sectionTitle, className)}>
      {children}
    </Tag>
  );
}

export function SectionSubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn(brandClasses.sectionDesc, className)}>{children}</p>;
}
