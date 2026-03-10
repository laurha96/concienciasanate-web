import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type PricingCardProps = {
  name: string;
  description: string;
  ctaLabel: string;
  href: string;
  emphasized?: boolean;
};

export function PricingCard({
  name,
  description,
  ctaLabel,
  href,
  emphasized,
}: PricingCardProps) {
  return (
    <Card
      className={
        emphasized
          ? "rounded-3xl border-border/60 bg-background-soft shadow-sm"
          : "rounded-3xl border-border/60 shadow-sm"
      }
    >
      <CardHeader>
        <CardTitle className="text-base tracking-tight">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>{description}</p>
        <Button
          asChild
          className="w-full rounded-2xl"
          variant={emphasized ? "default" : "secondary"}
        >
          <Link href={href}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
