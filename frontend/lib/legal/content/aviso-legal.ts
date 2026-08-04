import { LEGAL_CONTACTS, LEGAL_ENTITY } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const avisoLegalDocument: LegalDocument = {
  id: "aviso-legal",
  path: "/Aviso-Legal",
  title: "Aviso Legal",
  shortTitle: "Aviso Legal",
  summary:
    "Información societaria, condiciones de uso informativo y límites de responsabilidad del sitio Conciencia Sánate y del software Elynthis.",
  description:
    "Aviso Legal de Conciencia Sánate y Elynthis: identificación del responsable, naturaleza del contenido, propiedad intelectual, responsabilidades y jurisdicción colombiana.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "contractual",
  keywords: [
    "aviso legal",
    "Conciencia Sánate",
    "Elynthis",
    "responsabilidad",
    "propiedad intelectual",
  ],
  relatedIds: ["terminos", "privacidad", "cumplimiento", "cookies"],
  definitions: [
    {
      term: "Sitio",
      definition:
        "El dominio concienciasanate.com y sus subdominios informativos o de producto operados por Conciencia Sánate.",
    },
    {
      term: "Contenido Educativo",
      definition:
        "Materiales de psicoeducación, blogs, herramientas y recursos públicos que no constituyen atención clínica personalizada.",
    },
  ],
  scope: [
    {
      type: "p",
      text: `Este Aviso Legal informa a Visitantes y Usuarios sobre la titularidad, naturaleza y límites del Sitio y de la información publicada por ${LEGAL_ENTITY.tradeName} en relación con ${LEGAL_ENTITY.softwareName}.`,
    },
  ],
  articles: [
    {
      id: "identificacion",
      number: "Artículo 1",
      title: "Identificación",
      blocks: [
        {
          type: "ul",
          items: [
            `Nombre comercial: ${LEGAL_ENTITY.tradeName}`,
            `Software: ${LEGAL_ENTITY.softwareName}`,
            `Productos: ${LEGAL_ENTITY.products.join(", ")}`,
            `Sitio web: ${LEGAL_ENTITY.siteUrl}`,
            `Contacto general: ${LEGAL_CONTACTS.general}`,
            `Contacto jurídico: ${LEGAL_CONTACTS.legal}`,
            `Jurisdicción: ${LEGAL_ENTITY.jurisdiction}`,
          ],
        },
      ],
    },
    {
      id: "objeto-aviso",
      number: "Artículo 2",
      title: "Objeto del Sitio",
      blocks: [
        {
          type: "p",
          text: "El Sitio tiene por objeto informar sobre el ecosistema de bienestar y tecnología clínica de Conciencia Sánate, facilitar el acceso a Elynthis y publicar documentación legal, educativa y comercial.",
        },
      ],
    },
    {
      id: "naturaleza-contenido",
      number: "Artículo 3",
      title: "Naturaleza del contenido",
      blocks: [
        {
          type: "ul",
          items: [
            "El Contenido Educativo no reemplaza evaluación, diagnóstico ni tratamiento profesional.",
            "La información de producto describe capacidades tecnológicas; la habilitación clínica depende del Profesional e institución usuaria.",
            "En caso de emergencia, el Usuario debe contactar servicios de urgencias o líneas oficiales, no el Sitio.",
          ],
        },
      ],
    },
    {
      id: "propiedad",
      number: "Artículo 4",
      title: "Propiedad intelectual y marcas",
      blocks: [
        {
          type: "p",
          text: "Los signos distintivos Conciencia Sánate y Elynthis, así como diseños, textos institucionales, código y materiales gráficos del Sitio, están protegidos. Queda prohibida su reproducción no autorizada.",
        },
      ],
    },
    {
      id: "enlaces",
      number: "Artículo 5",
      title: "Enlaces y terceros",
      blocks: [
        {
          type: "p",
          text: "El Sitio puede enlazar a servicios de terceros (por ejemplo, Clinical/Care, pagos Stripe, autenticación Google/Apple). Esos sitios tienen avisos y políticas propias. Conciencia Sánate no controla la totalidad de sus contenidos.",
        },
      ],
    },
    {
      id: "responsabilidad-aviso",
      number: "Artículo 6",
      title: "Limitación de responsabilidad",
      blocks: [
        {
          type: "p",
          text: "Conciencia Sánate procura la exactitud de la información publicada, pero puede actualizar contenidos sin previo aviso. No se garantiza ausencia total de errores tipográficos o desactualización momentánea de materiales informativos.",
        },
        {
          type: "p",
          text: "El uso de Elynthis como software clínico se rige además por los Términos y Condiciones, la Política de Privacidad y los contratos institucionales aplicables.",
        },
      ],
    },
    {
      id: "datos-aviso",
      number: "Artículo 7",
      title: "Datos personales",
      blocks: [
        {
          type: "p",
          text: "El tratamiento de datos personales se regula en la Política de Privacidad y documentos conexos del Centro Legal, no en este Aviso.",
        },
      ],
    },
    {
      id: "ley-jurisdiccion-aviso",
      number: "Artículo 8",
      title: "Ley aplicable y jurisdicción",
      blocks: [
        {
          type: "p",
          text: "Este Aviso se rige por la ley colombiana. Las controversias se someterán a los jueces de la República de Colombia, sin perjuicio de derechos irrenunciables del consumidor.",
        },
      ],
    },
    {
      id: "contacto-aviso",
      number: "Artículo 9",
      title: "Contacto",
      blocks: [
        {
          type: "ul",
          items: [
            `Jurídico: ${LEGAL_CONTACTS.legal}`,
            `Privacidad: ${LEGAL_CONTACTS.privacy}`,
            `Soporte: ${LEGAL_CONTACTS.support}`,
          ],
        },
      ],
    },
  ],
};
