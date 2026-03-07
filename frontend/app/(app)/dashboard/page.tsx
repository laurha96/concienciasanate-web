import type { Metadata } from "next";

import { DashboardClient } from "@/app/(app)/dashboard/dashboard-client";
import { ProtectedRoute } from "@/components/layout/protected-route";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Zona privada de Conciencia Sánate.",
};

export default async function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Privado"
        title="Tu dashboard"
        description="Bienestar emocional con una experiencia limpia y acogedora."
        className="mb-8"
      />
      <ProtectedRoute>
        <DashboardClient />
      </ProtectedRoute>
    </div>
  );
}
