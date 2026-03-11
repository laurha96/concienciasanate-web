"use client";

import * as React from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartCard } from "@/components/healthtech/chart-card";
import { FilterChips } from "@/components/shared/filter-chips";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type ToolCategory =
  | "Breathing"
  | "Emotional journaling"
  | "Wellbeing plans"
  | "Guided practices";

export type Tool = {
  id: string;
  category: ToolCategory;
  name: string;
  description: string;
};

const ALL = "Todas";

function toLabel(category: ToolCategory) {
  switch (category) {
    case "Breathing":
      return "Respiración";
    case "Emotional journaling":
      return "Diario emocional";
    case "Wellbeing plans":
      return "Planes de bienestar";
    case "Guided practices":
      return "Prácticas guiadas";
  }
}

function distribution(tools: Tool[]) {
  const map = new Map<string, number>();
  for (const t of tools) {
    const key = toLabel(t.category);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
}

export type ToolCategoryQueryKey = "Breathing" | "Journaling" | "Plans" | "Guided";

function BreathingPanel() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const phase = seconds % 16;
  const label =
    phase < 4
      ? "Inhala"
      : phase < 8
        ? "Sostén"
        : phase < 12
          ? "Exhala"
          : "Sostén";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium tracking-tight">Sesión 4–4–4–4</div>
          <div className="mt-1 text-xs text-muted-foreground">{label} • {seconds}s</div>
        </div>
        <Button
          variant={running ? "secondary" : "default"}
          className="rounded-2xl"
          onClick={() => setRunning((v) => !v)}
        >
          {running ? "Pausar" : "Iniciar"}
        </Button>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-[width]"
          style={{ width: `${((phase + 1) / 16) * 100}%` }}
        />
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        Nota: práctica breve para regulación fisiológica. Ajusta el ritmo si lo necesitas.
      </p>
    </div>
  );
}

function JournalingPanel() {
  const STORAGE_KEY = "cs_tool_journal";
  const [text, setText] = React.useState("");
  const [savedAt, setSavedAt] = React.useState<string | null>(null);

  React.useEffect(() => {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (existing) setText(existing);
  }, []);

  function save() {
    window.localStorage.setItem(STORAGE_KEY, text);
    setSavedAt(new Date().toLocaleString());
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium tracking-tight">Escritura guiada</div>
        <div className="mt-1 text-xs text-muted-foreground">
          3 preguntas para claridad emocional.
        </div>
      </div>
      <div className="grid gap-3">
        <div className="text-xs text-muted-foreground">1) ¿Qué siento ahora mismo?</div>
        <div className="text-xs text-muted-foreground">2) ¿Qué necesito?</div>
        <div className="text-xs text-muted-foreground">3) ¿Qué acción pequeña puedo tomar hoy?</div>
      </div>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-32 rounded-2xl"
        placeholder="Escribe aquí…"
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button className="rounded-2xl" onClick={save}>
          Guardar local
        </Button>
        <div className="text-xs text-muted-foreground">
          {savedAt ? `Guardado: ${savedAt}` : "Guardado local (tu navegador)."}
        </div>
      </div>
    </div>
  );
}

function PlansPanel() {
  const items = [
    "Dormir 7–8h (higiene del sueño)",
    "Caminata 10 min",
    "2 pausas de respiración",
    "Hidratación (2 vasos)",
  ];

  const [checked, setChecked] = React.useState<Record<string, boolean>>({});
  const done = items.filter((i) => checked[i]).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium tracking-tight">Plan simple (hoy)</div>
          <div className="mt-1 text-xs text-muted-foreground">Progreso: {done}/{items.length}</div>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((i) => (
          <label key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={Boolean(checked[i])}
              onChange={(e) => setChecked((s) => ({ ...s, [i]: e.target.checked }))}
              className="h-4 w-4"
            />
            <span className="leading-6">{i}</span>
          </label>
        ))}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        Mantén el plan pequeño: consistencia &gt; intensidad.
      </p>
    </div>
  );
}

function GuidedPanel() {
  const [minutes, setMinutes] = React.useState("3");
  const [running, setRunning] = React.useState(false);
  const [remaining, setRemaining] = React.useState(0);

  React.useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setRemaining((s) => Math.max(0, s - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  React.useEffect(() => {
    if (running && remaining === 0) setRunning(false);
  }, [running, remaining]);

  function start() {
    const total = Math.max(1, Number(minutes || 3)) * 60;
    setRemaining(total);
    setRunning(true);
  }

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium tracking-tight">Práctica guiada (temporizador)</div>
        <div className="mt-1 text-xs text-muted-foreground">Atención suave + respiración natural.</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 sm:items-end">
        <div className="space-y-2">
          <Label htmlFor="guided-min">Minutos</Label>
          <Input
            id="guided-min"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            inputMode="numeric"
            className="rounded-2xl"
          />
        </div>
        <Button className="rounded-2xl" onClick={start} disabled={running}>
          {running ? "En curso" : "Iniciar"}
        </Button>
      </div>
      <div className="text-sm text-muted-foreground">
        Tiempo restante: <span className="font-medium text-foreground">{mm}:{ss}</span>
      </div>
    </div>
  );
}

export function ToolExplorer({
  tools,
  initialCategoryKey,
  className,
}: {
  tools: Tool[];
  initialCategoryKey?: ToolCategoryQueryKey | null;
  className?: string;
}) {
  const categories = React.useMemo(() => {
    const distinct = Array.from(new Set(tools.map((t) => toLabel(t.category))));
    return [ALL, ...distinct];
  }, [tools]);

  const [filter, setFilter] = React.useState<string>(ALL);
  const [activeToolId, setActiveToolId] = React.useState<string>(tools[0]?.id ?? "");

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!initialCategoryKey) return;
    const mapping: Record<ToolCategoryQueryKey, string> = {
      Breathing: "Respiración",
      Journaling: "Diario emocional",
      Plans: "Planes de bienestar",
      Guided: "Prácticas guiadas",
    };
    const label = mapping[initialCategoryKey] ?? null;
    if (label && categories.includes(label)) setFilter(label);
  }, [initialCategoryKey, categories]);

  const filtered = React.useMemo(() => {
    if (filter === ALL) return tools;
    return tools.filter((t) => toLabel(t.category) === filter);
  }, [tools, filter]);

  const active = React.useMemo(() => {
    return filtered.find((t) => t.id === activeToolId) ?? filtered[0] ?? null;
  }, [filtered, activeToolId]);

  React.useEffect(() => {
    if (!filtered.some((t) => t.id === activeToolId)) {
      setActiveToolId(filtered[0]?.id ?? "");
    }
  }, [filtered, activeToolId]);

  const chartData = React.useMemo(() => distribution(tools), [tools]);

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <FilterChips options={categories} value={filter} onChange={setFilter} />
        <div className="text-xs text-muted-foreground">{filtered.length} herramienta(s)</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((t) => {
              const selected = t.id === active?.id;
              return (
                <Card
                  key={t.id}
                  className={cn(
                    "rounded-3xl border-border/60 shadow-sm transition",
                    selected ? "bg-muted/30" : "hover:bg-muted/20"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-base tracking-tight">{t.name}</CardTitle>
                    <div className="mt-1 text-xs text-muted-foreground">{toLabel(t.category)}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-6 text-muted-foreground">{t.description}</p>
                    <Button
                      variant={selected ? "default" : "secondary"}
                      className="w-full rounded-2xl"
                      onClick={() => setActiveToolId(t.id)}
                    >
                      {selected ? "Abierta" : "Acceder"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <ChartCard
            title="Tipos de herramientas"
            description="Distribución por categoría."
          >
            <div className="h-52">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={56}
                      outerRadius={86}
                      paddingAngle={2}
                    />
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
          </ChartCard>

          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Herramienta activa</CardTitle>
            </CardHeader>
            <CardContent>
              {active ? (
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium tracking-tight">{active.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{toLabel(active.category)}</div>
                  </div>

                  {active.category === "Breathing" ? (
                    <BreathingPanel />
                  ) : active.category === "Emotional journaling" ? (
                    <JournalingPanel />
                  ) : active.category === "Wellbeing plans" ? (
                    <PlansPanel />
                  ) : (
                    <GuidedPanel />
                  )}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">Selecciona una herramienta.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
