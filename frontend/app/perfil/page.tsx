import type { Metadata } from "next";

import { ProtectedRoute } from "@/components/protected-route";
import { SectionHeading } from "@/components/section-heading";
import { ProfileForm } from "@/components/profile-form";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Edita tu perfil y preferencias en Conciencia Sánate.",
};

export default function PerfilPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Privado"
        title="Perfil y preferencias"
        description="Ajusta tu información para personalizar tu experiencia."
        className="mb-8"
      />
      <ProtectedRoute>
        <ProfileForm />
      </ProtectedRoute>
    </div>
  );
}
