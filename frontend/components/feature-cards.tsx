import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureCards({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Card
          key={it.title}
          className="rounded-3xl border-border/60 shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <CardHeader>
            <CardTitle className="text-base tracking-tight">{it.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            {it.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
