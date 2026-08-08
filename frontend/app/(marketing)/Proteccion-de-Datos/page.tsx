import { redirect } from "next/navigation";

export default function ProteccionDatosLegacyPage() {
  redirect("/privacidad#datos-personales-sensibles-y-clinicos");
}
