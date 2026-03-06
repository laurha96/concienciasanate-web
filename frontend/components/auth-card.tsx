import * as React from "react";

import { Logo } from "@/components/logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AuthCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="rounded-[40px] border-border/60 shadow-sm">
        <CardHeader className="space-y-3">
          <Logo />
          <div className="space-y-1">
            <div className="text-2xl font-semibold tracking-tight">{title}</div>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="pb-8">{children}</CardContent>
      </Card>
    </div>
  );
}
