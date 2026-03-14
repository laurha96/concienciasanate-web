import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("bg-card", className)}>
      <CardContent className="space-y-3">
        {icon ? (
          <div className="inline-flex size-10 items-center justify-center rounded-2xl border border-border bg-background-soft text-green-primary shadow-soft">
            <div className="text-green-primary [&_svg]:size-5 [&_svg]:stroke-[1.75]">
              {icon}
            </div>
          </div>
        ) : null}
        <div className="text-base font-semibold tracking-tight text-text-primary">
          {title}
        </div>
        <p className="text-sm leading-6 text-text-secondary">{description}</p>
      </CardContent>
    </Card>
  );
}
