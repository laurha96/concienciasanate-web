import type { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  /** Contenido secundario opcional debajo de los CTA principales. */
  children?: ReactNode;
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
  children,
}: HeroProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button variant="secondary" className="rounded-2xl" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
