import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type PrincipleCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function PrincipleCard({
  title,
  description,
  className,
}: PrincipleCardProps) {
  return (
    <Card
      className={cn(
        "h-full gap-3 rounded-2xl border-border/50 bg-background py-5 shadow-none",
        className
      )}
    >
      <CardHeader className="gap-1">
        <CardTitle className="text-sm font-semibold tracking-tight sm:text-base">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}
