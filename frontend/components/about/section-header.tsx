import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        "space-y-3",
        isCentered && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(
          "text-xs font-medium tracking-wide text-muted-foreground",
          isCentered && "mx-auto"
        )}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-2xl font-semibold tracking-tight sm:text-3xl",
          isCentered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-sm leading-6 text-muted-foreground sm:text-base",
            isCentered ? "mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
