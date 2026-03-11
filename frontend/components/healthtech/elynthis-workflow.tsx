"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCard } from "@/components/healthtech/chart-card";

const DATA = [
  { step: "Ingreso", value: 1 },
  { step: "Cita", value: 2 },
  { step: "Registro", value: 3 },
  { step: "Monitoreo", value: 2 },
];

export function ElynthisWorkflow() {
  const [active, setActive] = React.useState<number | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <ChartCard
      title="Visualización del flujo clínico"
      description="Una lectura simple del recorrido de trabajo (interactivo)."
    >
      <div className="h-56">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DATA} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <XAxis dataKey="step" tick={{ fontSize: 11 }} />
              <YAxis hide domain={[0, 4]} />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--background))",
                }}
                formatter={(v) => [v, "Intensidad"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.12}
                activeDot={{ r: 5, onMouseOver: () => setActive(1) }}
                dot={{ r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full rounded-2xl bg-muted/30" />
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Interacción: pasa el cursor para ver cada etapa.
        {active ? "" : ""}
      </p>
    </ChartCard>
  );
}
