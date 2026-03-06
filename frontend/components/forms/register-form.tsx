"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/errors";
import { signUpWithPassword } from "@/services/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const schema = z
  .object({
    fullName: z.string().min(2, "Escribe tu nombre"),
    email: z.string().email("Escribe un email válido"),
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Incluye al menos 1 mayúscula")
      .regex(/[0-9]/, "Incluye al menos 1 número"),
    confirmPassword: z.string().min(8, "Confirma tu contraseña"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type Values = z.infer<typeof schema>;

export function RegisterForm() {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: Values) {
    try {
      await signUpWithPassword(values.fullName, values.email, values.password);

      toast.success(
        "Cuenta creada. Revisa tu correo si se requiere confirmación."
      );
      window.location.assign("/dashboard");
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) ?? "No pudimos crear tu cuenta");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName">Nombre</Label>
        <Input
          id="fullName"
          placeholder="Tu nombre"
          autoComplete="name"
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
          autoComplete="new-password"
          className="h-11 rounded-2xl"
          {...form.register("password")}
        />
        {form.formState.errors.password ? (
          <div className="text-xs text-destructive">
            {form.formState.errors.password.message}
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
        <Input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          className="h-11 rounded-2xl"
          {...form.register("confirmPassword")}
        />
        {form.formState.errors.confirmPassword ? (
          <div className="text-xs text-destructive">
            {form.formState.errors.confirmPassword.message}
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-2xl"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Creando…" : "Crear cuenta"}
      </Button>

      <Separator className="opacity-60" />

      <div className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-foreground hover:underline">
          Entrar
        </Link>
      </div>
    </form>
  );
}
