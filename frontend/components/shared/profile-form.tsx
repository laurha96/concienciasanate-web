"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/errors";
import {
  fetchMyPreferences,
  fetchMyProfile,
  upsertMyPreferences,
  upsertMyProfile,
} from "@/services/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";

const schema = z.object({
  fullName: z.string().min(2, "Escribe tu nombre"),
  interests: z.string().optional(),
  objectives: z.string().optional(),
});

type Values = z.infer<typeof schema>;

function parseList(text?: string) {
  return (text ?? "")
    .split(/\n|,/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function ProfileForm() {
  const profileQuery = useQuery({
    queryKey: ["me", "profile"],
    queryFn: fetchMyProfile,
  });

  const prefsQuery = useQuery({
    queryKey: ["me", "preferences"],
    queryFn: fetchMyPreferences,
  });

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", interests: "", objectives: "" },
  });

  React.useEffect(() => {
    if (profileQuery.data) {
      form.setValue("fullName", profileQuery.data.full_name ?? "");
    }
    if (prefsQuery.data) {
      form.setValue("interests", (prefsQuery.data.interests ?? []).join("\n"));
      form.setValue(
        "objectives",
        (prefsQuery.data.objectives ?? []).join("\n")
      );
    }
  }, [form, prefsQuery.data, profileQuery.data]);

  const saveMutation = useMutation({
    mutationFn: async (values: Values) => {
      await upsertMyProfile({ full_name: values.fullName });
      await upsertMyPreferences({
        interests: parseList(values.interests),
        objectives: parseList(values.objectives),
      });
    },
    onSuccess: async () => {
      toast.success("Perfil guardado");
      await Promise.all([profileQuery.refetch(), prefsQuery.refetch()]);
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err) ?? "No pudimos guardar tu perfil");
    },
  });

  const loading = profileQuery.isLoading || prefsQuery.isLoading;

  return (
    <Card className="rounded-[40px] border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-base tracking-tight">Tu perfil</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {loading ? (
          <div className="grid gap-4">
            <Skeleton className="h-11 rounded-2xl" />
            <Skeleton className="h-28 rounded-2xl" />
            <Skeleton className="h-28 rounded-2xl" />
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={form.handleSubmit((values) => saveMutation.mutate(values))}
          >
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre</Label>
              <Input
                id="fullName"
                className="h-11 rounded-2xl"
                {...form.register("fullName")}
              />
              {form.formState.errors.fullName ? (
                <div className="text-xs text-destructive">
                  {form.formState.errors.fullName.message}
                </div>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Intereses (uno por línea)</Label>
              <Textarea
                id="interests"
                className="min-h-28 rounded-2xl"
                placeholder="Ej: manejo del estrés\nautoestima\nhábitos"
                {...form.register("interests")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">Objetivos emocionales (uno por línea)</Label>
              <Textarea
                id="objectives"
                className="min-h-28 rounded-2xl"
                placeholder="Ej: dormir mejor\nregular ansiedad\nmejorar límites"
                {...form.register("objectives")}
              />
            </div>

            <Button
              type="submit"
              className="rounded-2xl"
              disabled={saveMutation.isPending}
            >
              {saveMutation.isPending ? "Guardando…" : "Guardar cambios"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
