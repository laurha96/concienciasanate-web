import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type FeatureCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ title, description, className }: FeatureCardProps) {
  return (
    <Card
      className={
        className ??
        "rounded-3xl border-border/70 shadow-sm transition-[box-shadow,border-color] hover:border-primary/20 hover:shadow-md"
      }
    >
      <CardHeader>
        <CardTitle className="text-base tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}
