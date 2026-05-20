import {
  Calendar,
  FileText,
  LayoutDashboard,
  Users,
} from "lucide-react";

import { MetricCard } from "@/components/brand";
import { brandClasses } from "@/lib/brand/tokens";
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

const demoActivity = [
  { label: "Sesión de seguimiento", detail: "Programada · mañana" },
  { label: "Historia clínica", detail: "Actualización pendiente" },
  { label: "Plan de intervención", detail: "Revisión programada" },
] as const;

type MockupSize = "default" | "compact" | "mini";

export function DashboardMockup({
  className,
  compact = false,
  /** Vista mínima para la Home (≈40% menos altura que compact). */
  mini = false,
}: {
  className?: string;
  compact?: boolean;
  mini?: boolean;
}) {
  const size: MockupSize = mini ? "mini" : compact ? "compact" : "default";
  const metrics =
    size === "mini"
      ? demoMetrics.slice(0, 2)
      : size === "compact"
        ? demoMetrics.slice(0, 2)
        : demoMetrics;
  const activity =
    size === "mini"
      ? demoActivity.slice(0, 1)
      : size === "compact"
        ? demoActivity.slice(0, 2)
        : demoActivity;

  const shellClass =
    size === "mini"
      ? brandClasses.cardPreviewMini
      : size === "compact"
        ? brandClasses.cardPreviewCompact
        : "cs-card-preview";

  return (
    <div
      className={cn(shellClass, "overflow-hidden", size === "default" && "p-4 sm:p-5", className)}
      role="img"
      aria-label="Vista previa ilustrativa del panel clínico Elynthis. Los datos mostrados son de demostración."
    >
      <header
        className={cn(
          "flex items-center justify-between gap-2 border-b border-border/50",
          size === "mini" ? "mb-2 pb-1.5" : size === "compact" ? "mb-2.5 pb-2" : "mb-4 pb-3"
        )}
      >
        <div className="flex min-w-0 items-center gap-2">
          <div
            className={cn(
              "grid shrink-0 place-items-center rounded-md bg-primary/15 text-primary",
              size === "mini" ? "size-6" : "size-8 rounded-lg"
            )}
            aria-hidden
          >
            <LayoutDashboard
              className={size === "mini" ? "size-3" : "size-4"}
              strokeWidth={1.75}
            />
          </div>
          <div className="min-w-0">
            <p
              className={cn(
                "truncate font-semibold text-foreground",
                size === "mini" ? "text-[11px]" : "text-sm"
              )}
            >
              Elynthis
            </p>
            {size !== "mini" ? (
              <p className="text-[10px] text-muted-foreground">Panel clínico</p>
            ) : null}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
          {size !== "mini" ? (
            <div className="hidden h-6 w-14 rounded-full bg-brand-muted/80 sm:block" />
          ) : null}
          <div
            className={cn(
              "rounded-full border border-border/60 bg-accent/60",
              size === "mini" ? "size-5" : "size-7"
            )}
          />
        </div>
      </header>

      <div
        className={cn(
          "grid",
          size === "mini" ? "grid-cols-[2rem_1fr] gap-2" : "gap-3 sm:grid-cols-[3.25rem_1fr] sm:gap-4"
        )}
      >
        <aside
          className={cn(
            "flex gap-0.5",
            size === "mini" ? "flex-col" : "flex-row sm:flex-col sm:gap-1.5"
          )}
          aria-label="Navegación de demostración"
        >
          {sidebarItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center justify-center rounded-lg",
                size === "mini" ? "px-1 py-1" : "flex-1 rounded-xl px-2 py-2 sm:flex-none sm:justify-start sm:px-2.5 sm:py-2.5",
                active
                  ? "bg-accent text-[var(--green-secondary)]"
                  : "text-muted-foreground"
              )}
              title={label}
            >
              <Icon
                className={cn("shrink-0", size === "mini" ? "size-3" : "size-4")}
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </aside>

        <div className={cn("min-w-0", size === "mini" ? "space-y-1.5" : "space-y-3")}>
          <div className="grid grid-cols-2 gap-1.5">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                className={cn(
                  size === "mini" && "!px-2 !py-1.5 [&_p:first-child]:text-[8px] [&_p:last-of-type]:text-sm",
                  size === "compact" &&
                    "!px-2.5 !py-2.5 [&_p:first-child]:text-[9px] [&_p:last-of-type]:text-base"
                )}
              />
            ))}
          </div>

          <div
            className={cn(
              "rounded-lg border border-border/60 bg-brand-muted/35",
              size === "mini" ? "p-1.5" : size === "compact" ? "p-2.5" : "rounded-[18px] p-3 sm:p-4"
            )}
          >
            {size !== "mini" ? (
              <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                Actividad reciente
              </p>
            ) : null}
            <ul
              className={cn(size === "mini" ? "space-y-0" : "mt-2 space-y-1.5")}
              aria-label="Actividad de demostración"
            >
              {activity.map((row) => (
                <li
                  key={row.label}
                  className={cn(
                    "flex items-center justify-between gap-1.5 rounded-md border border-border/50 bg-brand-surface/90",
                    size === "mini" ? "px-2 py-1" : "rounded-xl px-3 py-2"
                  )}
                >
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate font-medium text-foreground",
                        size === "mini" ? "text-[10px]" : "text-[12px]"
                      )}
                    >
                      {row.label}
                    </p>
                    <p
                      className={cn(
                        "truncate text-muted-foreground",
                        size === "mini" ? "text-[9px]" : "text-[10px]"
                      )}
                    >
                      {row.detail}
                    </p>
                  </div>
                  {size !== "mini" ? (
                    <div className="h-6 w-10 shrink-0 rounded-full bg-accent/70" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
