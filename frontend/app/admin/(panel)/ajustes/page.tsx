"use client";

import * as React from "react";

import { apiAdminListSiteSettings, apiAdminUpsertSiteSetting } from "@/services/admin-api";
import type { AdminSiteSettingItem } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  const [items, setItems] = React.useState<AdminSiteSettingItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [key, setKey] = React.useState("site");
  const [status, setStatus] = React.useState<"draft" | "published">("draft");
  const [json, setJson] = React.useState("{}");

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await apiAdminListSiteSettings();
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

  async function onUpsert() {
    setSaving(true);
    setError(null);
    try {
      const value = JSON.parse(json);
      await apiAdminUpsertSiteSetting(key, value, status);
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Ajustes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Configuración global (JSON) con draft/published.
        </p>
      </div>

      <Separator />

      {error ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <Card className="rounded-3xl border-border/60">
        <CardHeader>
          <CardTitle className="text-base tracking-tight">Upsert</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="key">Key</Label>
              <Input id="key" value={key} onChange={(e) => setKey(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <select
                id="status"
                className="h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value === "published" ? "published" : "draft")
                }
              >
                <option value="draft">draft</option>
                <option value="published">published</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="rounded-2xl" onClick={onUpsert} disabled={saving}>
                {saving ? "Guardando…" : "Guardar"}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="json">Value (JSON)</Label>
            <Textarea
              id="json"
              value={json}
              onChange={(e) => setJson(e.target.value)}
              rows={10}
            />
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-sm text-muted-foreground">Cargando…</div>
      ) : items.length === 0 ? (
        <div className="text-sm text-muted-foreground">Sin ajustes.</div>
      ) : (
        <div className="grid gap-3">
          {items.map((it) => (
            <Card key={it.id} className="rounded-3xl border-border/60">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">{it.key}</CardTitle>
                <div className="mt-1 text-xs text-muted-foreground">
                  estado: {it.status}
                </div>
              </CardHeader>
              <CardContent>
                <pre className="max-h-64 overflow-auto rounded-2xl bg-accent p-3 text-xs">
                  {JSON.stringify(it.value, null, 2)}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
