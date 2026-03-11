"use client";

import * as React from "react";

import {
  apiAdminCreateTestimonial,
  apiAdminDeleteTestimonial,
  apiAdminListTestimonials,
} from "@/services/admin-api";
import type { AdminTestimonialItem, PublishStatus } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

type Draft = {
  authorName: string;
  authorRole?: string;
  content: string;
  anonymous: boolean;
  isFeatured: boolean;
  orderIndex: number;
  status: PublishStatus;
};

const empty: Draft = {
  authorName: "",
  authorRole: "",
  content: "",
  anonymous: false,
  isFeatured: true,
  orderIndex: 0,
  status: "published",
};

export default function AdminTestimonialsPage() {
  const [items, setItems] = React.useState<AdminTestimonialItem[]>([]);
  const [draft, setDraft] = React.useState<Draft>(empty);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await apiAdminListTestimonials();
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

  async function onCreate() {
    setSaving(true);
    setError(null);
    try {
      await apiAdminCreateTestimonial(draft);
      setDraft(empty);
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("¿Eliminar este testimonio?")) return;
    await apiAdminDeleteTestimonial(id);
    await load();
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Testimonios</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Añade testimonios y controla su orden/estado.
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
          <CardTitle className="text-base tracking-tight">Nuevo testimonio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="author">Autor/a</Label>
              <Input
                id="author"
                value={draft.authorName}
                onChange={(e) => setDraft((s) => ({ ...s, authorName: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rol</Label>
              <Input
                id="role"
                value={draft.authorRole ?? ""}
                onChange={(e) => setDraft((s) => ({ ...s, authorRole: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenido</Label>
            <Textarea
              id="content"
              value={draft.content}
              onChange={(e) => setDraft((s) => ({ ...s, content: e.target.value }))}
              rows={5}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={draft.anonymous}
                onChange={(e) => setDraft((s) => ({ ...s, anonymous: e.target.checked }))}
              />
              Anónimo
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={draft.isFeatured}
                onChange={(e) => setDraft((s) => ({ ...s, isFeatured: e.target.checked }))}
              />
              Destacado
            </label>
            <div className="space-y-2">
              <Label htmlFor="order">Orden</Label>
              <Input
                id="order"
                inputMode="numeric"
                value={String(draft.orderIndex)}
                onChange={(e) =>
                  setDraft((s) => ({
                    ...s,
                    orderIndex: Math.max(0, Math.floor(Number(e.target.value || 0))),
                  }))
                }
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <select
                id="status"
                className="h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm"
                value={draft.status}
                onChange={(e) =>
                  setDraft((s) => ({
                    ...s,
                    status:
                      e.target.value === "draft" ||
                      e.target.value === "published" ||
                      e.target.value === "unpublished"
                        ? (e.target.value as PublishStatus)
                        : "draft",
                  }))
                }
              >
                <option value="draft">draft</option>
                <option value="published">published</option>
                <option value="unpublished">unpublished</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="rounded-2xl" onClick={onCreate} disabled={saving}>
                {saving ? "Creando…" : "Crear"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-sm text-muted-foreground">Cargando…</div>
      ) : items.length === 0 ? (
        <div className="text-sm text-muted-foreground">Sin testimonios.</div>
      ) : (
        <div className="grid gap-3">
          {items.map((it) => (
            <Card key={it.id} className="rounded-3xl border-border/60">
              <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                <div>
                  <CardTitle className="text-base tracking-tight">
                    {it.author_name || "(Anónimo)"}
                  </CardTitle>
                  <div className="mt-1 text-xs text-muted-foreground">
                    estado: {it.status} · orden: {it.order_index}
                  </div>
                </div>
                <Button
                  variant="destructive"
                  className="rounded-2xl"
                  onClick={() => onDelete(it.id)}
                >
                  Eliminar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">{it.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
