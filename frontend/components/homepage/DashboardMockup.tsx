import {
  Calendar,
  FileText,
  LayoutDashboard,
  Users,
} from "lucide-react";

import { MetricCard } from "@/components/brand";
import { cn } from "@/lib/utils";

/** Métricas de demostración — no representan datos reales. */
const demoMetrics = [
  { title: "Pacientes activos", value: "18" },
  { title: "Sesiones registradas", value: "42" },
  { title: "Documentos", value: "31" },
  { title: "Próximas citas", value: "4" },
] as const;

const sidebarItems = [
  { label: "Panel", icon: LayoutDashboard, active: true },
  { label: "Pacientes", icon: Users, active: false },
  { label: "Agenda", icon: Calendar, active: false },
  { label: "Documentos", icon: FileText, active: false },
] as const;

/** Actividad genérica de vista previa (sin identificadores clínicos). */
const demoActivity = [
  { label: "Sesión de seguimiento", detail: "Programada · mañana" },
  { label: "Historia clínica", detail: "Actualización pendiente" },
  { label: "Plan de intervención", detail: "Revisión programada" },
] as const;

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("cs-card-preview overflow-hidden p-4 sm:p-5", className)}
      role="img"
      aria-label="Vista previa ilustrativa del panel clínico Elynthis. Los datos mostrados son de demostración."
    >
      <header className="mb-4 flex items-center justify-between gap-3 border-b border-border/50 pb-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"
            aria-hidden
          >
            <LayoutDashboard className="size-4" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">Elynthis</p>
            <p className="text-[10px] text-muted-foreground">Panel clínico</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2" aria-hidden>
          <div className="hidden h-7 w-20 rounded-full bg-brand-muted/80 sm:block" />
          <div className="size-7 rounded-full border border-border/60 bg-accent/60" />
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-[3.25rem_1fr] sm:gap-4">
        <aside
          className="flex flex-row gap-1 sm:flex-col sm:gap-1.5"
          aria-label="Navegación de demostración"
        >
          {sidebarItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex flex-1 items-center justify-center rounded-xl px-2 py-2 sm:flex-none sm:justify-start sm:px-2.5 sm:py-2.5",
                active
                  ? "bg-accent text-[var(--green-secondary)]"
                  : "text-muted-foreground"
              )}
              title={label}
            >
              <Icon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </aside>

        <div className="min-w-0 space-y-3">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {demoMetrics.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                className="!px-2.5 !py-2.5 [&_p:first-child]:text-[9px] [&_p:last-of-type]:text-base"
              />
            ))}
          </div>

          <div className="rounded-[18px] border border-border/60 bg-brand-muted/35 p-3 sm:p-4">
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              Actividad reciente
            </p>
            <ul className="mt-2.5 space-y-2" aria-label="Actividad de demostración">
              {demoActivity.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/50 bg-brand-surface/90 px-3 py-2"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-medium text-foreground">
                      {row.label}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {row.detail}
                    </p>
                  </div>
                  <div
                    className="h-6 w-10 shrink-0 rounded-full bg-accent/70"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
