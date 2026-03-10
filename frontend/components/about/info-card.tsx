import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
};

export function InfoCard({ title, description, className, icon }: InfoCardProps) {
  return (
    <Card
      className={cn(
        "h-full gap-4 rounded-2xl border-border/60 py-5 shadow-sm",
        className
      )}
    >
      <CardHeader className="gap-2">
        <div className="flex items-start gap-3">
          {icon ? (
            <div
              aria-hidden="true"
              className="mt-0.5 inline-flex size-9 items-center justify-center rounded-2xl border border-border/60 bg-background-soft text-foreground"
            >
              {icon}
            </div>
          ) : null}
          <CardTitle className="text-base font-semibold tracking-tight">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </CardContent>
    </Card>
  );
}
