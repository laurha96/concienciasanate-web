import { redirect } from "next/navigation";

/** Ruta histórica pública; el procedimiento vive en Privacidad. */
export default function EliminarCuentaLegacyPage() {
  redirect("/privacidad#eliminacion-de-cuenta");
}
