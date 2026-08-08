/**
 * Verifica contenido canónico de privacidad y consolidación legal (sin servidor).
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(resolve(root, rel), "utf8");

const privacidad = read("lib/legal/content/privacidad.ts");
const terminos = read("lib/legal/content/terminos.ts");
const constants = read("lib/legal/constants.ts");
const index = read("lib/legal/content/index.ts");
const nextConfig = read("next.config.ts");
const footer = read("lib/footer-config.ts");
const hub = read("components/legal/legal-hub.tsx");
const proxy = read("proxy.ts");
const seo = read("lib/seo.ts");
const robots = read("app/robots.ts");
const sitemap = read("app/sitemap.ts");
const corpus = `${privacidad}\n${constants}\n${terminos}`;

let failed = false;
function assert(cond, msg) {
  if (!cond) {
    console.error(msg);
    failed = true;
  }
}

const requiredPrivacy = [
  "Google API Services User Data Policy",
  "Limited Use",
  "Google Calendar",
  "eliminación de cuenta",
  "cookies",
  "seguridad de la información",
  "inteligencia artificial",
  "openid",
  "CRA 29 31D 60 SUR",
  "+1 3124462648",
  "1.2.0",
  "cookies-tecnologias-analitica-y-preferencias",
  "seguridad-de-la-informacion",
  "datos-personales-sensibles-y-clinicos",
  "eliminacion-de-cuenta",
  "7.1 ",
  "7.8 ",
  "Tratamientos necesarios para seguridad y prevención de fraude",
  "OpenAI",
  "no se envían a OpenAI",
];

for (const needle of requiredPrivacy) {
  assert(corpus.toLowerCase().includes(needle.toLowerCase()) || corpus.includes(needle), `MISSING in privacy corpus: ${needle}`);
}

// Case-sensitive musts
assert(privacidad.includes("Google Calendar"), "MISSING Google Calendar");
assert(privacidad.includes("Limited Use"), "MISSING Limited Use");
assert(privacidad.includes("Google API Services User Data Policy"), "MISSING Google API policy");
assert(privacidad.includes("eliminación de cuenta") || privacidad.includes("Eliminación de cuenta"), "MISSING eliminación de cuenta");
assert(privacidad.includes("cookies") || privacidad.includes("Cookies"), "MISSING cookies");
assert(privacidad.includes("seguridad de la información") || privacidad.includes("Seguridad de la información"), "MISSING seguridad");
assert(
  privacidad.includes("no se envían a OpenAI") ||
    privacidad.includes("no se envían a proveedores de inteligencia artificial") ||
    privacidad.includes("excluidos de estos flujos"),
  "MISSING Google→AI exclusion"
);

assert(terminos.includes("aviso-legal"), "MISSING aviso-legal anchor in terms");
assert(terminos.includes("cumplimiento-legal-y-normativo"), "MISSING cumplimiento anchor in terms");
assert(terminos.includes("Aviso legal"), "MISSING aviso legal title");
assert(terminos.includes("1.1.0"), "MISSING terms version 1.1.0");

assert(constants.includes('TERMS_PATH = "/terminos-y-condiciones"'), "TERMS_PATH missing");
assert(constants.includes('LEGAL_HUB_PATH = "/centro-legal"'), "LEGAL_HUB_PATH missing");
assert(constants.includes('PRIVACY_PATH = "/privacidad"'), "PRIVACY_PATH missing");

// Footer exactly two legal links
const footerLinksMatch = index.match(
  /export const footerLegalCenterLinks = \[([\s\S]*?)\] as const/
);
assert(footerLinksMatch, "footerLegalCenterLinks not found");
const hrefCount = (footerLinksMatch?.[1].match(/href:/g) || []).length;
assert(hrefCount === 2, `Footer must have exactly 2 legal links, found ${hrefCount}`);
assert(index.includes('href: terminosDocument.path') || index.includes("/terminos-y-condiciones"), "Footer must link terms");
assert(index.includes('href: privacidadDocument.path') || index.includes('"/privacidad"'), "Footer must link privacy");
assert(!footer.includes("LEGAL_HUB_PATH"), "Footer config must not include Centro Legal via LEGAL_HUB_PATH");
assert(!index.includes('href: "/Politica-de-Cookies"'), "Footer catalog must not list cookies page");
assert(!index.includes('href: "/eliminar-cuenta"'), "Footer catalog must not list delete-account page");

// Hub only primary docs
assert(hub.includes("primaryLegalDocumentMetas"), "Hub must use primaryLegalDocumentMetas");
assert(!hub.includes("categoryOrder"), "Hub must not list full category inventory");

// Redirects
assert(nextConfig.includes('destination: "/privacidad#cookies-tecnologias-analitica-y-preferencias"'), "cookies redirect missing");
assert(nextConfig.includes('destination: "/privacidad#seguridad-de-la-informacion"'), "security redirect missing");
assert(nextConfig.includes('destination: "/privacidad#datos-personales-sensibles-y-clinicos"'), "proteccion redirect missing");
assert(nextConfig.includes('destination: "/privacidad#eliminacion-de-cuenta"'), "delete redirect missing");
assert(nextConfig.includes('destination: "/terminos-y-condiciones#aviso-legal"'), "aviso redirect missing");
assert(nextConfig.includes('destination: "/terminos-y-condiciones#cumplimiento-legal-y-normativo"'), "cumplimiento redirect missing");
assert(nextConfig.includes('destination: "/terminos-y-condiciones"'), "terms canonical redirect missing");
assert(nextConfig.includes('destination: "/centro-legal"'), "hub redirect missing");
assert(
  !nextConfig.includes('source: "/Centro-Legal"'),
  "Centro-Legal must not be in next.config (case-insensitive loop risk)"
);
assert(
  !nextConfig.includes('source: "/Terminos-y-Condiciones"'),
  "Terminos-y-Condiciones must not be in next.config (case-insensitive loop risk)"
);
assert(
  !(nextConfig.includes('source: "/privacidad"') && nextConfig.includes('destination: "/Politica-de-Privacidad"')),
  "Redirect cycle risk privacy"
);

assert(
  proxy.includes('"/Eliminar-Cuenta"') &&
    proxy.includes('"/privacidad"') &&
    proxy.includes("eliminacion-de-cuenta"),
  "proxy must case-sensitively redirect /Eliminar-Cuenta to privacy section"
);
assert(
  proxy.includes('"/Centro-Legal"') && proxy.includes('"/centro-legal"'),
  "proxy must case-sensitively redirect /Centro-Legal"
);
assert(
  proxy.includes('"/Terminos-y-Condiciones"') &&
    proxy.includes('"/terminos-y-condiciones"'),
  "proxy must case-sensitively redirect /Terminos-y-Condiciones"
);

assert(seo.includes("https://concienciasanate.com"), "SEO default siteUrl must be apex");
assert(!seo.includes("https://www.concienciasanate.com"), "SEO default must not prefer www");
assert(robots.includes("/privacidad") && robots.includes("/terminos-y-condiciones"), "robots must allow canonical legal routes");
assert(sitemap.includes("primaryLegalDocuments"), "sitemap must use primaryLegalDocuments");
assert(!sitemap.includes("consolidatedSourceDocuments"), "sitemap must not index consolidated sources as primary list via wrong export");

const forbidden = [
  "[DIRECCIÓN DE NOTIFICACIONES]",
  "[TELÉFONO DE CONTACTO]",
];
for (const needle of forbidden) {
  assert(!corpus.includes(needle) && !index.includes(needle), `FORBIDDEN: ${needle}`);
}
// No afirmar certificación; sí se permite negar o usar como referencia.
assert(
  !/\bcertificada HIPAA\b/.test(corpus) ||
    /no.*certificad[oa].*HIPAA|sin afirmar.*HIPAA|no declara.*HIPAA/i.test(corpus),
  "FORBIDDEN unsupported HIPAA certification claim"
);

if (failed) process.exit(1);
console.log("verify-privacy-routes: OK");
