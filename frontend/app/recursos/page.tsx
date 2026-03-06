import type { Metadata } from "next";

import { RecursosClient } from "@/app/recursos/recursos-client";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos de bienestar emocional: guías, ejercicios y plantillas. Preparado para consumo desde Supabase.",
};

export default function RecursosPage() {
  return <RecursosClient />;
}
