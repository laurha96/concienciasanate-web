"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import {
  apiAdminCreatePlan,
  apiAdminGetPlan,
  apiAdminUpdatePlan,
} from "@/services/admin-api";
import type { PublishStatus } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  name: z.string().min(2),
  priceLabel: z.string().optional(),
  billingPeriod: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).default([]),
  highlight: z.boolean().default(false),
  orderIndex: z.number().int().min(0).default(0),
  ctaLabel: z.string().optional(),
  ctaHref: z.string().optional(),
  status: z.enum(["draft", "published", "unpublished"]).default("draft"),
});

type FormState = z.infer<typeof schema>;

const statusValues = ["draft", "published", "unpublished"] as const;
function asStatus(value: string): PublishStatus {
  return (statusValues as readonly string[]).includes(value)
    ? (value as PublishStatus)
    : "draft";
}

function coerceInt(value: string, fallback = 0) {
  const trimmed = value.trim();
  if (!trimmed) return fallback;
  const num = Number(trimmed);
  return Number.isFinite(num) ? Math.max(0, Math.floor(num)) : fallback;
}

export function AdminPlanEditor(
  props:
    | { mode: "create" }
    | {
        mode: "edit";
        id: string;
      }
) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(props.mode === "edit");
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [form, setForm] = React.useState<FormState>({
    name: "",
    priceLabel: "",
    billingPeriod: "",
    description: "",
    features: [],
    highlight: false,
    orderIndex: 0,
    ctaLabel: "",
    ctaHref: "",
    status: "draft",
  });

  React.useEffect(() => {
    if (props.mode !== "edit") return;

    let cancelled = false;
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const data = await apiAdminGetPlan(props.id);
        const it = data.item;
        if (cancelled) return;
        setForm({
          name: it.name ?? "",
          priceLabel: it.price_label ?? "",
          billingPeriod: it.billing_period ?? "",
          description: it.description ?? "",
          features: Array.isArray(it.features) ? it.features : [],
          highlight: Boolean(it.highlight),
          orderIndex: Number(it.order_index ?? 0),
          ctaLabel: it.cta_label ?? "",
          ctaHref: it.cta_href ?? "",
          status: it.status ?? "draft",
        });
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [props]);

  async function onSave() {
    setSaving(true);
    setError(null);

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setSaving(false);
      setError("Revisa los campos obligatorios (nombre)." );
      return;
    }

    try {
      if (props.mode === "create") {
        const created = await apiAdminCreatePlan(parsed.data);
        router.replace(`/admin/planes/${created.id}`);
      } else {
        await apiAdminUpdatePlan(props.id, parsed.data);
      }
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          {props.mode === "create" ? "Nuevo plan" : "Editar plan"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Publica cuando esté listo para aparecer en la web.
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
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="rounded-3xl border-border/60">
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Contenido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio</Label>
                  <Input
                    id="price"
                    value={form.priceLabel ?? ""}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, priceLabel: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="period">Periodo</Label>
                  <Input
                    id="period"
                    value={form.billingPeriod ?? ""}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, billingPeriod: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="desc">Descripción</Label>
                <Textarea
                  id="desc"
                  value={form.description ?? ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, description: e.target.value }))
                  }
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (1 por línea)</Label>
                <Textarea
                  id="features"
                  value={form.features.join("\n")}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      features: e.target.value
                        .split("\n")
                        .map((x) => x.trim())
                        .filter(Boolean),
                    }))
                  }
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="rounded-3xl border-border/60">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Ajustes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="order">Orden</Label>
                    <Input
                      id="order"
                      inputMode="numeric"
                      value={String(form.orderIndex ?? 0)}
                      onChange={(e) =>
                        setForm((s) => ({
                          ...s,
                          orderIndex: coerceInt(e.target.value, 0),
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Estado</Label>
                    <select
                      id="status"
                      className="h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm"
                      value={form.status}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, status: asStatus(e.target.value) }))
                      }
                    >
                      <option value="draft">draft</option>
                      <option value="published">published</option>
                      <option value="unpublished">unpublished</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.highlight}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, highlight: e.target.checked }))
                    }
                  />
                  Resaltar
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ctaLabel">CTA label</Label>
                    <Input
                      id="ctaLabel"
                      value={form.ctaLabel ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, ctaLabel: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ctaHref">CTA href</Label>
                    <Input
                      id="ctaHref"
                      value={form.ctaHref ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, ctaHref: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button className="rounded-2xl" onClick={onSave} disabled={saving}>
                {saving ? "Guardando…" : "Guardar"}
              </Button>
              <Button
                variant="secondary"
                className="rounded-2xl"
                onClick={() => router.push("/admin/planes")}
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
