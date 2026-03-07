import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  kind: "guia" | "ejercicio" | "plantilla";
  isFree: boolean;
};

export function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <Card className="rounded-3xl border-border/60 shadow-sm transition-transform hover:-translate-y-0.5">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="rounded-full">
            {item.category}
          </Badge>
          <Badge className="rounded-full" variant={item.isFree ? "default" : "secondary"}>
            {item.isFree ? "Gratis" : "Acceso"}
          </Badge>
        </div>
        <CardTitle className="text-base tracking-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-muted-foreground">
        {item.description}
      </CardContent>
    </Card>
  );
}
