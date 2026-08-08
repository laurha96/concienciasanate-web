import { redirect } from "next/navigation";

/** Compatibilidad: la canónica es /privacidad (también redirige next.config). */
export default function PoliticaDePrivacidadRedirectPage() {
  redirect("/privacidad");
}
