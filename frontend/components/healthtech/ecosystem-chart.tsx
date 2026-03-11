"use client";

import * as React from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { cn } from "@/lib/utils";

export type EcosystemNodeKey = "Psychology" | "Wellbeing" | "Tools" | "Elynthis";

export type EcosystemNode = {
  key: EcosystemNodeKey;
  label: string;
  description: string;
  weight: number;
};

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--muted-foreground))",
  "hsl(var(--foreground))",
  "hsl(var(--border))",
];

export function EcosystemChart({
  nodes,
  className,
}: {
  nodes: EcosystemNode[];
  className?: string;
}) {
  const [activeKey, setActiveKey] = React.useState<EcosystemNodeKey>(nodes[0]?.key ?? "Psychology");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const active = nodes.find((n) => n.key === activeKey) ?? nodes[0];

  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      <div className="rounded-3xl border border-border/60 bg-background p-4 shadow-sm">
        <div className="h-64 sm:h-72">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={nodes}
                  dataKey="weight"
                  nameKey="label"
                  innerRadius={62}
                  outerRadius={92}
                  paddingAngle={2}
                  onClick={(data) => {
                    const key = (data as unknown as { key?: EcosystemNodeKey }).key;
                    if (key) setActiveKey(key);
                  }}
                >
                  {nodes.map((entry, index) => {
                    const isActive = entry.key === activeKey;
                    return (
                      <Cell
                        key={entry.key}
                        fill={COLORS[index % COLORS.length]}
                        opacity={isActive ? 1 : 0.45}
                      />
                    );
                  })}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--background))",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full rounded-2xl bg-muted/30" />
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {nodes.map((node) => {
            const isActive = node.key === activeKey;
            return (
              <button
                key={node.key}
                type="button"
                onClick={() => setActiveKey(node.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs transition",
                  isActive
                    ? "border-border bg-background shadow-sm"
                    : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground"
                )}
              >
                {node.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium tracking-tight">{active?.label}</div>
        <p className="text-sm leading-6 text-muted-foreground">{active?.description}</p>
        <p className="text-xs text-muted-foreground">
          Interacción: toca un segmento o etiqueta.
        </p>
      </div>
    </div>
  );
}
