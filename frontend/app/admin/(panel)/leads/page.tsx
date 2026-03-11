"use client";

import * as React from "react";

import { apiAdminListLeads, apiAdminUpdateLead } from "@/services/admin-api";
import type { AdminLeadItem, LeadStatus } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdminLeadsPage() {
  const [items, setItems] = React.useState<AdminLeadItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [savingId, setSavingId] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await apiAdminListLeads();
      setItems(data.items ?? []);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    void load();
  }, []);

  async function onChangeStatus(id: string, status: LeadStatus) {
    setSavingId(id);
    setError(null);
    try {
      await apiAdminUpdateLead(id, status);
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Leads</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Mensajes del formulario de contacto.
        </p>
      </div>

      <Separator />

      {error ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="text-sm text-muted-foreground">Cargando…</div>
      ) : items.length === 0 ? (
        <div className="text-sm text-muted-foreground">Sin leads.</div>
      ) : (
        <div className="grid gap-3">
          {items.map((it) => (
            <Card key={it.id} className="rounded-3xl border-border/60">
              <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                <div>
                  <CardTitle className="text-base tracking-tight">
                    {it.name || "(Sin nombre)"}
                  </CardTitle>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {it.email || "-"} · {it.phone || "-"} · {it.status}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    className="h-9 rounded-2xl border border-input bg-background px-3 text-sm"
                    value={it.status}
                    onChange={(e) => onChangeStatus(it.id, e.target.value as LeadStatus)}
                    disabled={savingId === it.id}
                  >
                    <option value="new">new</option>
                    <option value="in_progress">in_progress</option>
                    <option value="resolved">resolved</option>
                    <option value="spam">spam</option>
                  </select>
                  <Button
                    variant="secondary"
                    className="rounded-2xl"
                    onClick={() => onChangeStatus(it.id, it.status)}
                    disabled
                  >
                    Guardado
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {it.message || "(Sin mensaje)"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
