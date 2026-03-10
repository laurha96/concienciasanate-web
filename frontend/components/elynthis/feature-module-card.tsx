import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FeatureModuleCardProps = {
  title: string;
  description: string;
  bullets: string[];
  className?: string;
};

export function FeatureModuleCard({
  title,
  description,
  bullets,
  className,
}: FeatureModuleCardProps) {
  return (
    <Card
      className={cn(
        "h-full gap-4 rounded-2xl border-border/60 py-5 shadow-sm",
        className
      )}
    >
      <CardHeader className="gap-2">
        <CardTitle className="text-base font-semibold tracking-tight">
          {title}
        </CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="grid gap-2 text-sm text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-soft"
              />
              <span className="leading-6">{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
