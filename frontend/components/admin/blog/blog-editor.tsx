"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import {
  apiAdminCreateBlog,
  apiAdminGetBlog,
  apiAdminUpdateBlog,
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
  excerpt: z.string().optional(),
  contentMd: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  series: z.string().optional(),
  readingTimeMin: z.number().int().positive().optional(),
  featured: z.boolean().default(false),
  essential: z.boolean().default(false),
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

function coerceNumber(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const num = Number(trimmed);
  return Number.isFinite(num) ? num : undefined;
}

export function AdminBlogEditor(
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
    excerpt: "",
    contentMd: "",
    category: "",
    tags: [],
    series: "",
    readingTimeMin: undefined,
    featured: false,
    essential: false,
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
        const data = await apiAdminGetBlog(props.id);
        const it = data.item;
        if (cancelled) return;
        setForm({
          title: it.title ?? "",
          slug: it.slug ?? "",
          excerpt: it.excerpt ?? "",
          contentMd: it.content_md ?? "",
          category: it.category ?? "",
          tags: Array.isArray(it.tags) ? it.tags : [],
          series: it.series ?? "",
          readingTimeMin: it.reading_time_min ?? undefined,
          featured: Boolean(it.featured),
          essential: Boolean(it.essential),
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
        const created = await apiAdminCreateBlog(parsed.data);
        router.replace(`/admin/blog/${created.id}`);
      } else {
        await apiAdminUpdateBlog(props.id, parsed.data);
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
          {props.mode === "create" ? "Nuevo post" : "Editar post"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Estado y SEO se guardan junto al contenido.
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
                <Label htmlFor="excerpt">Extracto</Label>
                <Textarea
                  id="excerpt"
                  value={form.excerpt ?? ""}
                  onChange={(e) => setForm((s) => ({ ...s, excerpt: e.target.value }))}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenido (Markdown)</Label>
                <Textarea
                  id="content"
                  value={form.contentMd ?? ""}
                  onChange={(e) => setForm((s) => ({ ...s, contentMd: e.target.value }))}
                  rows={16}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="rounded-3xl border-border/60">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Metadatos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoría</Label>
                    <Input
                      id="category"
                      value={form.category ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, category: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="series">Serie</Label>
                    <Input
                      id="series"
                      value={form.series ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, series: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (separados por coma)</Label>
                  <Input
                    id="tags"
                    value={form.tags.join(", ")}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        tags: e.target.value
                          .split(",")
                          .map((t) => t.trim())
                          .filter(Boolean),
                      }))
                    }
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="reading">Tiempo lectura (min)</Label>
                    <Input
                      id="reading"
                      inputMode="numeric"
                      value={form.readingTimeMin?.toString() ?? ""}
                      onChange={(e) =>
                        setForm((s) => ({
                          ...s,
                          readingTimeMin: coerceNumber(e.target.value),
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
                        setForm((s) => ({
                          ...s,
                          status: asStatus(e.target.value),
                        }))
                      }
                    >
                      <option value="draft">draft</option>
                      <option value="published">published</option>
                      <option value="unpublished">unpublished</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, featured: e.target.checked }))
                      }
                    />
                    Destacado
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.essential}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, essential: e.target.checked }))
                      }
                    />
                    Esencial
                  </label>
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
                onClick={() => router.push("/admin/blog")}
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
