import * as React from "react";

import { cn } from "@/lib/utils";

type BlogSectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function BlogSectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: BlogSectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-2.5",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
