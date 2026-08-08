/**
 * Verifica contenido canónico de privacidad (sin servidor).
 * Exit 0 si el documento maestro cumple requisitos de verificación Google.
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const privacidad = readFileSync(
  resolve(root, "lib/legal/content/privacidad.ts"),
  "utf8"
);
const constants = readFileSync(
  resolve(root, "lib/legal/constants.ts"),
  "utf8"
);
const index = readFileSync(resolve(root, "lib/legal/content/index.ts"), "utf8");
const nextConfig = readFileSync(resolve(root, "next.config.ts"), "utf8");
const footer = readFileSync(resolve(root, "lib/footer-config.ts"), "utf8");
const corpus = `${privacidad}\n${constants}`;

const required = [
  "Google API Services User Data Policy",
  "Limited Use",
  "Google Calendar",
  "eliminación",
  "inteligencia artificial",
  "openid",
  "CRA 29 31D 60 SUR",
  "+1 3124462648",
  "PRIVACY_PATH",
  "1.1.0",
];

const forbidden = [
  "[DIRECCIÓN DE NOTIFICACIONES]",
  "[TELÉFONO DE CONTACTO]",
  "Retention",
  "certificada HIPAA",
  "certificación ISO",
];

let failed = false;
for (const needle of required) {
  if (!corpus.includes(needle)) {
    console.error("MISSING in privacidad/constants:", needle);
    failed = true;
  }
}
for (const needle of forbidden) {
  if (corpus.includes(needle) || index.includes(needle)) {
    console.error("FORBIDDEN marker/claim found:", needle);
    failed = true;
  }
}

if (!index.includes('href: "/privacidad"')) {
  console.error("Footer catalog must link to /privacidad");
  failed = true;
}
if (!index.includes('href: "/eliminar-cuenta"')) {
  console.error("Footer catalog must link to /eliminar-cuenta");
  failed = true;
}
if (!nextConfig.includes('destination: "/privacidad"')) {
  console.error("next.config must redirect variants to /privacidad");
  failed = true;
}
if (nextConfig.includes('source: "/privacidad"') && nextConfig.includes('destination: "/Politica-de-Privacidad"')) {
  console.error("Redirect cycle risk: /privacidad -> /Politica-de-Privacidad");
  failed = true;
}
const proxy = readFileSync(resolve(root, "proxy.ts"), "utf8");
if (!proxy.includes('pathname === "/Eliminar-Cuenta"') || !proxy.includes('"/eliminar-cuenta"')) {
  console.error("proxy.ts must case-sensitively redirect /Eliminar-Cuenta");
  failed = true;
}
if (!footer.includes("footerLegalCenterLinks") && !footer.includes("LEGAL_HUB_PATH")) {
  console.error("footer-config should pull legal center links");
  failed = true;
}

if (failed) process.exit(1);
console.log("verify-privacy-routes: OK");
