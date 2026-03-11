"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCard } from "@/components/healthtech/chart-card";
import { FilterChips } from "@/components/shared/filter-chips";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type BlogCategory =
  | "Psychology"
  | "Emotional regulation"
  | "Habits"
  | "Wellbeing"
  | "Applied neuroscience";

export type Article = {
  id: string;
  title: string;
  category: BlogCategory;
  minutes: number;
  abstract: string;
  bullets: string[];
};

const ALL = "Todas";

function toLabel(category: BlogCategory) {
  switch (category) {
    case "Psychology":
      return "Psicología";
    case "Emotional regulation":
      return "Regulación emocional";
    case "Habits":
      return "Hábitos";
    case "Wellbeing":
      return "Bienestar";
    case "Applied neuroscience":
      return "Neurociencia aplicada";
  }
}

function distribution(articles: Article[]) {
  const map = new Map<string, number>();
  for (const a of articles) {
    const key = toLabel(a.category);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
}

export function ArticleExplorer({ articles, className }: { articles: Article[]; className?: string }) {
  const categories = React.useMemo(() => {
    const distinct = Array.from(new Set(articles.map((a) => toLabel(a.category))));
    return [ALL, ...distinct];
  }, [articles]);

  const [filter, setFilter] = React.useState<string>(ALL);
  const [activeId, setActiveId] = React.useState<string>(articles[0]?.id ?? "");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const filtered = React.useMemo(() => {
    if (filter === ALL) return articles;
    return articles.filter((a) => toLabel(a.category) === filter);
  }, [articles, filter]);

  const active = React.useMemo(() => {
    return filtered.find((a) => a.id === activeId) ?? filtered[0] ?? null;
  }, [filtered, activeId]);

  React.useEffect(() => {
    if (!filtered.some((a) => a.id === activeId)) {
      setActiveId(filtered[0]?.id ?? "");
    }
  }, [filtered, activeId]);

  const chartData = React.useMemo(() => distribution(articles), [articles]);

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <FilterChips options={categories} value={filter} onChange={setFilter} />
        <div className="text-xs text-muted-foreground">
          {filtered.length} artículo(s)
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((a) => {
              const selected = a.id === active?.id;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setActiveId(a.id)}
                  className="text-left"
                >
                  <Card
                    className={cn(
                      "rounded-3xl border-border/60 shadow-sm transition",
                      selected ? "bg-muted/30" : "hover:bg-muted/20"
                    )}
                  >
                    <CardHeader>
                      <CardTitle className="text-base tracking-tight">{a.title}</CardTitle>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{toLabel(a.category)}</span>
                        <span aria-hidden>•</span>
                        <span>{a.minutes} min</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      {a.abstract}
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <ChartCard
            title="Distribución de temas"
            description="Vista rápida de la cobertura educativa."
          >
            <div className="h-52">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ left: 4, right: 4 }}>
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      interval={0}
                      angle={-10}
                      height={48}
                    />
                    <YAxis allowDecimals={false} tick={{ fontSize: 10 }} width={24} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 16,
                        border: "1px solid hsl(var(--border))",
                        background: "hsl(var(--background))",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="hsl(var(--primary))"
                      radius={[10, 10, 10, 10]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full rounded-2xl bg-muted/30" />
              )}
            </div>
          </ChartCard>

          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Lectura</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {active ? (
                <>
                  <div>
                    <div className="text-sm font-medium tracking-tight">{active.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {toLabel(active.category)} • {active.minutes} min
                    </div>
                  </div>
                  <div className="text-sm leading-6 text-muted-foreground">{active.abstract}</div>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    {active.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">Selecciona un artículo.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
