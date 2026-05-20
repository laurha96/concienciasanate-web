import * as React from "react";

import { aboutEd } from "@/components/about/about-editorial-tokens";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  editorial?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  editorial = true,
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        editorial ? "space-y-5 sm:space-y-6" : "space-y-3",
        isCentered && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            editorial ? aboutEd.eyebrow : "text-xs font-medium tracking-wide text-muted-foreground",
            isCentered && "mx-auto"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          editorial
            ? cn(aboutEd.title, isCentered && "mx-auto max-w-3xl")
            : cn(
                "text-balance text-2xl font-semibold tracking-tight sm:text-3xl",
                isCentered && "mx-auto"
              )
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            editorial ? aboutEd.lead : "text-pretty text-sm leading-6 text-muted-foreground sm:text-base",
            isCentered ? "mx-auto max-w-3xl" : editorial ? undefined : "max-w-3xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
