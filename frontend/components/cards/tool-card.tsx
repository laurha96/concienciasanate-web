import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  className?: string;
};

export function ToolCard({
  title,
  description,
  href,
  ctaLabel = "Abrir herramienta",
  className,
}: ToolCardProps) {
  return (
    <Card className={className ?? "rounded-3xl border-border/60 shadow-sm"}>
      <CardHeader>
        <CardTitle className="text-base tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>{description}</p>
        <Button variant="secondary" className="rounded-2xl" asChild>
          <Link href={href}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
