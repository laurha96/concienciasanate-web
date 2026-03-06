import type { Metadata } from "next";

import { AuthCard } from "@/components/auth-card";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Inicia sesión en Conciencia Sánate.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: { redirect?: string };
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <AuthCard
        title="Bienvenida de vuelta"
        description="Entra con calma. Tu espacio te está esperando."
      >
        <LoginForm redirectTo={searchParams?.redirect} />
      </AuthCard>
    </div>
  );
}
