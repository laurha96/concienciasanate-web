import type { Metadata } from "next";

import { AuthCard } from "@/components/cards/auth-card";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = {
  title: "Registro",
  description: "Crea tu cuenta en Conciencia Sánate.",
};

export default function RegistroPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <AuthCard
        title="Crear cuenta"
        description="Un paso pequeño: construye tu espacio de bienestar."
      >
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
