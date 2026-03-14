import * as React from "react";

import { cn } from "@/lib/utils";

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[36px] border border-border/70 bg-card p-6 shadow-card",
        className
      )}
    >
      <div className="grid gap-5 lg:grid-cols-[168px_1fr]">
        <aside className="rounded-[28px] border border-border/60 bg-background p-5">
          <div className="h-2 w-16 rounded-full bg-border/80" />
          <div className="mt-6 space-y-3">
            {[
              "Pacientes",
              "Agenda",
              "Notas",
            ].map((t, idx) => (
              <div
                key={t}
                className={
                  "h-10 rounded-full px-4 text-[13px] leading-10 transition-colors " +
                  (idx === 0
                    ? "bg-accent text-[var(--green-secondary)]"
                    : "text-muted-foreground hover:bg-accent/50")
                }
              >
                {t}
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="h-11 flex-1 rounded-full border border-border/60 bg-background px-5 text-[13px] leading-[44px] text-muted-foreground">
              Buscar paciente…
            </div>
            <div className="h-11 w-24 rounded-full border border-border/60 bg-card px-4 text-[13px] leading-[44px] text-muted-foreground">
              Hoy
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <SummaryCard title="Activos" value="24" />
            <SummaryCard title="Sesiones" value="96" />
            <SummaryCard title="Pendientes" value="7" />
          </div>

          <div className="mt-5 overflow-hidden rounded-[28px] border border-border/60 bg-card">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="text-[13px] font-medium text-foreground">Actividad reciente</div>
                <div className="mt-1 text-[12px] text-muted-foreground">Últimos 7 días</div>
              </div>
              <div className="h-8 w-28 rounded-full bg-accent/60" />
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-[22px] border border-border/60 bg-background p-4">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-32 rounded-full bg-border/80" />
                  <div className="h-2 w-12 rounded-full bg-border/70" />
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { name: "María P.", label: "Seguimiento" },
                    { name: "Carlos R.", label: "Activo" },
                    { name: "Elena S.", label: "Notas" },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-accent/70" />
                        <div>
                          <div className="text-[13px] font-medium text-foreground">{r.name}</div>
                          <div className="mt-0.5 text-[12px] text-muted-foreground">
                            {r.label}
                          </div>
                        </div>
                      </div>
                      <div className="h-8 w-20 rounded-full bg-accent/55" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[26px] border border-border/60 bg-card p-5">
      <div className="text-[12px] font-medium text-muted-foreground">{title}</div>
      <div className="mt-2 text-[22px] font-medium text-foreground">{value}</div>
      <div className="mt-4 h-2 w-24 rounded-full bg-accent/80" />
    </div>
  );
}
