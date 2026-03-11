import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type FeatureItem = {
  title: string;
  description: string;
};

export function FeatureGrid({
  items,
}: {
  items: FeatureItem[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title} className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            {item.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
