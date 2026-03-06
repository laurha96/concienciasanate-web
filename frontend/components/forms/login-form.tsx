"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/errors";
import { signInWithPassword } from "@/services/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  email: z.string().email("Escribe un email válido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
});

type Values = z.infer<typeof schema>;

export function LoginForm({ redirectTo }: { redirectTo?: string }) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: Values) {
    try {
      await signInWithPassword(values.email, values.password);

      const target = redirectTo ?? "/dashboard";
      window.location.assign(target);
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) ?? "No pudimos iniciar sesión");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="tu@email.com"
          autoComplete="email"
          className="h-11 rounded-2xl"
          {...form.register("email")}
        />
        {form.formState.errors.email ? (
          <div className="text-xs text-destructive">
            {form.formState.errors.email.message}
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          className="h-11 rounded-2xl"
          {...form.register("password")}
        />
        {form.formState.errors.password ? (
          <div className="text-xs text-destructive">
            {form.formState.errors.password.message}
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-2xl"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Ingresando…" : "Entrar"}
      </Button>

      <Separator className="opacity-60" />

      <div className="text-center text-sm text-muted-foreground">
        ¿Primera vez aquí?{" "}
        <Link href="/registro" className="text-foreground hover:underline">
          Crear cuenta
        </Link>
      </div>
    </form>
  );
}
