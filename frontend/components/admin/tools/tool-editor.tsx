"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import {
  apiAdminCreateTool,
  apiAdminGetTool,
  apiAdminUpdateTool,
} from "@/services/admin-api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { getErrorMessage } from "@/lib/errors";

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  instructionsMd: z.string().optional(),
  icon: z.string().optional(),
  featuredOnHome: z.boolean().default(false),
  orderIndex: z.number().int().min(0).default(0),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(["draft", "published", "unpublished"]).default("draft"),
});

type FormState = z.infer<typeof schema>;

const statusValues = ["draft", "published", "unpublished"] as const;
type Status = (typeof statusValues)[number];

function asStatus(value: string): Status {
  return (statusValues as readonly string[]).includes(value) ? (value as Status) : "draft";
}

function coerceInt(value: string, fallback = 0) {
  const trimmed = value.trim();
  if (!trimmed) return fallback;
  const num = Number(trimmed);
  return Number.isFinite(num) ? Math.max(0, Math.floor(num)) : fallback;
}

export function AdminToolEditor(
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
    title: "",
    slug: "",
    shortDescription: "",
    longDescription: "",
    instructionsMd: "",
    icon: "",
    featuredOnHome: false,
    orderIndex: 0,
    seoTitle: "",
    seoDescription: "",
    status: "draft",
  });

  React.useEffect(() => {
    if (props.mode !== "edit") return;

    let cancelled = false;
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const data = await apiAdminGetTool(props.id);
        const it = data.item;
        if (cancelled) return;
        setForm({
          title: it.title ?? "",
          slug: it.slug ?? "",
          shortDescription: it.short_description ?? "",
          longDescription: it.long_description ?? "",
          instructionsMd: it.instructions_md ?? "",
          icon: it.icon ?? "",
          featuredOnHome: Boolean(it.featured_on_home),
          orderIndex: Number(it.order_index ?? 0),
          seoTitle: it.seo_title ?? "",
          seoDescription: it.seo_description ?? "",
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
      setError("Revisa los campos obligatorios (título y slug)." );
      return;
    }

    try {
      if (props.mode === "create") {
        const created = await apiAdminCreateTool(parsed.data);
        router.replace(`/admin/herramientas/${created.id}`);
      } else {
        await apiAdminUpdateTool(props.id, parsed.data);
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
          {props.mode === "create" ? "Nueva herramienta" : "Editar herramienta"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Publica cuando esté lista para aparecer en la web.
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
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm((s) => ({ ...s, slug: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="short">Descripción corta</Label>
                <Textarea
                  id="short"
                  value={form.shortDescription ?? ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, shortDescription: e.target.value }))
                  }
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="long">Descripción larga</Label>
                <Textarea
                  id="long"
                  value={form.longDescription ?? ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, longDescription: e.target.value }))
                  }
                  rows={8}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instrucciones (Markdown)</Label>
                <Textarea
                  id="instructions"
                  value={form.instructionsMd ?? ""}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, instructionsMd: e.target.value }))
                  }
                  rows={10}
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
                    <Label htmlFor="icon">Icono</Label>
                    <Input
                      id="icon"
                      value={form.icon ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, icon: e.target.value }))
                      }
                    />
                  </div>
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.featuredOnHome}
                      onChange={(e) =>
                        setForm((s) => ({
                          ...s,
                          featuredOnHome: e.target.checked,
                        }))
                      }
                    />
                    Destacar en Home
                  </label>

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
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="seoTitle">Título SEO</Label>
                  <Input
                    id="seoTitle"
                    value={form.seoTitle ?? ""}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, seoTitle: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seoDesc">Descripción SEO</Label>
                  <Textarea
                    id="seoDesc"
                    value={form.seoDescription ?? ""}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, seoDescription: e.target.value }))
                    }
                    rows={4}
                  />
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
                onClick={() => router.push("/admin/herramientas")}
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
