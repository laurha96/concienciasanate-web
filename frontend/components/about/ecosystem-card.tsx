import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type EcosystemCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  linkText: string;
  className?: string;
};

export function EcosystemCard({
  title,
  subtitle,
  bullets,
  href,
  linkText,
  className,
}: EcosystemCardProps) {
  return (
    <Card
      className={cn(
        "relative gap-4 overflow-hidden rounded-2xl border-border/60 py-6 shadow-sm",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-primary/10 blur-2xl" />
      <CardHeader className="gap-2">
        <CardTitle className="text-base font-semibold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="max-w-sm text-sm leading-6">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        <ul className="grid gap-2 text-sm text-muted-foreground">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-soft"
              />
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" size="sm" className="w-fit">
          <Link href={href}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
