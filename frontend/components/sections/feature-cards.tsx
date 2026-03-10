import { FeatureCard } from "@/components/cards/feature-card";

export function FeatureCards({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <FeatureCard key={it.title} title={it.title} description={it.description} />
      ))}
    </div>
  );
}
