import { Card, CardContent } from "@/components/ui/card";

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role?: string;
}) {
  return (
    <Card className="rounded-3xl border-border/60 shadow-sm">
      <CardContent className="space-y-3 p-6">
        <p className="text-sm leading-7 text-foreground/90">“{quote}”</p>
        <div className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{name}</span>
          {role ? <span> · {role}</span> : null}
        </div>
      </CardContent>
    </Card>
  );
}
