import * as React from "react";

import { cn } from "@/lib/utils";

type MockNavItem = {
  label: string;
  active?: boolean;
};

type MockPatient = {
  name: string;
  id: string;
  tag: string;
  next: string;
};

type MockAppointment = {
  time: string;
  patient: string;
  type: string;
};

const NAV_ITEMS: MockNavItem[] = [
  { label: "Dashboard", active: true },
  { label: "Pacientes" },
  { label: "Agenda" },
  { label: "Historia clínica" },
  { label: "Documentación" },
  { label: "Ajustes" },
];

const PATIENTS: MockPatient[] = [
  {
    name: "Valeria M.",
    id: "CS-2041",
    tag: "Seguimiento",
    next: "Hoy · 4:30 p. m.",
  },
  {
    name: "Juan P.",
    id: "CS-1987",
    tag: "Primera consulta",
    next: "Mañana · 9:00 a. m.",
  },
  {
    name: "Camila R.",
    id: "CS-1762",
    tag: "Evolución",
    next: "Jue · 2:00 p. m.",
  },
  {
    name: "Andrés G.",
    id: "CS-1654",
    tag: "Pendiente",
    next: "—",
  },
];

const APPOINTMENTS: MockAppointment[] = [
  { time: "09:00", patient: "Juan P.", type: "Consulta" },
  { time: "11:30", patient: "Camila R.", type: "Seguimiento" },
  { time: "16:30", patient: "Valeria M.", type: "Seguimiento" },
];

export type ProductMockupCardProps = {
  className?: string;
};

export function ProductMockupCard({ className }: ProductMockupCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm",
        className
      )}
      aria-label="Vista previa del dashboard de Elynthis"
      role="img"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="grid min-h-[380px] grid-cols-[210px_1fr]">
        <div className="border-r border-border/60 bg-background-soft p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-2xl border border-border/60 bg-card text-sm font-semibold">
              E
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight">
                Elynthis
              </div>
              <div className="truncate text-xs text-muted-foreground">
                Panel clínico
              </div>
            </div>
          </div>

          <nav className="mt-5 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground",
                  item.active &&
                    "bg-card text-foreground shadow-xs ring-1 ring-border/60"
                )}
              >
                <span className="truncate">{item.label}</span>
                {item.active ? (
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-green-soft"
                  />
                ) : null}
              </div>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-border/60 bg-card p-3">
            <div className="text-xs font-medium">Hoy</div>
            <div className="mt-1 text-xs text-muted-foreground">
              3 citas · 1 pendiente
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight">
                Dashboard
              </div>
              <div className="truncate text-xs text-muted-foreground">
                Vista general de tu práctica
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center rounded-xl border border-border/60 bg-background px-3 py-2 text-xs text-muted-foreground sm:flex">
                Buscar paciente…
              </div>
              <div className="flex size-9 items-center justify-center rounded-2xl border border-border/60 bg-background text-xs font-medium">
                DR
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-background-soft p-3">
              <div className="text-[11px] font-medium text-muted-foreground">
                Pacientes activos
              </div>
              <div className="mt-1 text-lg font-semibold tracking-tight">24</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background-soft p-3">
              <div className="text-[11px] font-medium text-muted-foreground">
                Próximas citas
              </div>
              <div className="mt-1 text-lg font-semibold tracking-tight">3</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background-soft p-3">
              <div className="text-[11px] font-medium text-muted-foreground">
                Notas pendientes
              </div>
              <div className="mt-1 text-lg font-semibold tracking-tight">1</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-2xl border border-border/60 bg-background p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-tight">
                  Pacientes
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Últimos accesos
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {PATIENTS.map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-background-soft px-3 py-2"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-xs font-medium">
                        {patient.name}
                      </div>
                      <div className="truncate text-[11px] text-muted-foreground">
                        {patient.id} · {patient.tag}
                      </div>
                    </div>
                    <div className="shrink-0 text-[11px] text-muted-foreground">
                      {patient.next}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-tight">Agenda</div>
                <div className="text-[11px] text-muted-foreground">Hoy</div>
              </div>

              <div className="mt-3 space-y-2">
                {APPOINTMENTS.map((apt) => (
                  <div
                    key={`${apt.time}-${apt.patient}`}
                    className="flex items-start justify-between rounded-xl border border-border/60 bg-background-soft px-3 py-2"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-medium">{apt.patient}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {apt.type}
                      </div>
                    </div>
                    <div className="shrink-0 text-[11px] font-medium text-muted-foreground">
                      {apt.time}
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-dashed border-border/60 bg-background px-3 py-2 text-[11px] text-muted-foreground">
                  Cuando no hay citas, este panel mantiene el día claro.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border/60 bg-background-soft px-3 py-3 text-[11px] text-muted-foreground">
            Acceso rápido: historia clínica, notas y documentación.
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-background-soft px-4 py-3 text-xs text-muted-foreground">
        Vista previa ilustrativa · Interfaz estática
      </div>
    </div>
  );
}
