import { redirect } from "next/navigation";

/** Compatibilidad: canónica `/terminos-y-condiciones`. */
export default function TerminosLegacyPage() {
  redirect("/terminos-y-condiciones");
}
