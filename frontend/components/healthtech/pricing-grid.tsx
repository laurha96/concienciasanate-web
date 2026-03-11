import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export function PricingGrid({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={
            plan.highlighted
              ? "rounded-3xl border-border shadow-sm"
              : "rounded-3xl border-border/60 shadow-sm"
          }
        >
          <CardHeader>
            <CardTitle className="text-base tracking-tight">{plan.name}</CardTitle>
            <div className="mt-2 text-3xl font-semibold tracking-tight">{plan.price}</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className={plan.highlighted ? "w-full rounded-2xl" : "w-full rounded-2xl"}
              variant={plan.highlighted ? "default" : "secondary"}
              asChild
            >
              <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
