import { LEGAL_CONTACTS, LEGAL_ENTITY } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const consentimientoDatosDocument: LegalDocument = {
  id: "consentimiento-datos",
  path: "/Consentimiento-Tratamiento-Datos",
  title: "Consentimiento para el Tratamiento de Datos Personales",
  shortTitle: "Consentimiento de Datos",
  summary:
    "Autorización firmable electrónicamente para el tratamiento de datos personales y sensibles en el ecosistema Conciencia Sánate / Elynthis.",
  description:
    "Consentimiento para tratamiento de datos personales y sensibles de Conciencia Sánate y Elynthis, firmable electrónicamente conforme a la Ley 1581 de 2012.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "consent",
  signable: true,
  keywords: [
    "consentimiento",
    "tratamiento de datos",
    "Ley 1581",
    "firma electrónica",
    "Elynthis",
  ],
  relatedIds: [
    "privacidad",
    "proteccion-datos",
    "consentimiento-teleconsulta",
    "consentimiento-psicologica",
    "eliminar-cuenta",
  ],
  definitions: [
    {
      term: "Autorización",
      definition:
        "Consentimiento previo, expreso e informado del Titular para que el Responsable o Encargado trate sus datos personales (Ley 1581 de 2012).",
    },
    {
      term: "Firma electrónica de aceptación",
      definition:
        "Manifestación de voluntad capturada en Elynthis mediante casillas, nombre, documento, marca temporal y, cuando se habilite, trazo o firma tipográfica, con evidencia de integridad.",
    },
  ],
  scope: [
    {
      type: "p",
      text: `Mediante este documento, el Titular autoriza a ${LEGAL_ENTITY.tradeName} y, cuando corresponda, al Profesional o institución que utiliza ${LEGAL_ENTITY.softwareName}, a tratar sus datos personales y sensibles de salud para las finalidades descritas.`,
    },
    {
      type: "note",
      title: "Carácter firmable",
      text: "Este consentimiento está diseñado para aceptación electrónica en la Plataforma. La evidencia de firma forma parte del expediente digital.",
    },
  ],
  articles: [
    {
      id: "declaracion",
      number: "Artículo 1",
      title: "Declaración del Titular",
      blocks: [
        {
          type: "p",
          text: "Declaro que he sido informado de manera clara y suficiente sobre el tratamiento de mis datos personales y sensibles, mis derechos y los canales para ejercerlos.",
        },
      ],
    },
    {
      id: "datos-autorizados",
      number: "Artículo 2",
      title: "Datos cuya recolección autorizo",
      blocks: [
        {
          type: "ul",
          items: [
            "Datos de identificación y contacto.",
            "Datos de cuenta, autenticación y soporte.",
            "Datos de salud e historia clínica necesarios para la atención.",
            "Agenda, teleconsulta, documentos, firmas y consentimientos.",
            "Datos de facturación/RIPS cuando apliquen.",
            "Datos técnicos de seguridad (IP, logs, dispositivo) en los términos de la Política de Privacidad.",
          ],
        },
      ],
    },
    {
      id: "finalidades-autorizadas",
      number: "Artículo 3",
      title: "Finalidades autorizadas",
      blocks: [
        {
          type: "ol",
          items: [
            "Prestación y gestión de servicios a través de Elynthis.",
            "Elaboración y custodia tecnológica de historia clínica electrónica.",
            "Comunicaciones transaccionales relacionadas con la atención o la cuenta.",
            "Seguridad, auditoría y prevención de fraude.",
            "Cumplimiento de obligaciones legales e interoperabilidad cuando proceda.",
            "Mejora del servicio con analítica agregada y, si acepto módulos específicos, asistencias de IA no diagnósticas.",
          ],
        },
      ],
    },
    {
      id: "encargados",
      number: "Artículo 4",
      title: "Encargados y proveedores",
      blocks: [
        {
          type: "p",
          text: "Autorizo la transmisión a encargados tecnológicos necesarios para operar la Plataforma (incluyendo infraestructura Supabase, seguridad Cloudflare, correo Resend, autenticación Google/Apple, pagos Stripe y, si uso funciones de IA, OpenAI), bajo deberes de confidencialidad y seguridad.",
        },
      ],
    },
    {
      id: "caracter-sensible",
      number: "Artículo 5",
      title: "Carácter sensible",
      blocks: [
        {
          type: "p",
          text: "Entiendo que mis datos de salud son sensibles y que su tratamiento se somete a reserva legal y medidas reforzadas. He leído o tengo a disposición la Política de Protección de Datos Sensibles.",
        },
      ],
    },
    {
      id: "derechos-consentimiento",
      number: "Artículo 6",
      title: "Derechos",
      blocks: [
        {
          type: "p",
          text: `Puedo conocer, actualizar, rectificar, suprimir y revocar esta autorización en los términos de ley, escribiendo a ${LEGAL_CONTACTS.privacy}, sin perjuicio de Retención legal de historia clínica.`,
        },
      ],
    },
    {
      id: "voluntariedad",
      number: "Artículo 7",
      title: "Voluntariedad y consecuencias",
      blocks: [
        {
          type: "p",
          text: "Sé que la autorización es voluntaria. Sin embargo, sin ella pueden no prestarse ciertos módulos digitales de Elynthis que requieren tratamiento de datos para funcionar.",
        },
      ],
    },
    {
      id: "evidencia-electronica",
      number: "Artículo 8",
      title: "Evidencia electrónica",
      blocks: [
        {
          type: "p",
          text: "Acepto que mi manifestación de voluntad se capture electrónicamente y que se almacenen evidencias de integridad (versión del documento, marca temporal, identidad declarada y metadatos técnicos razonables).",
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-canales",
      number: "Anexo A",
      title: "Canales",
      blocks: [
        {
          type: "ul",
          items: [
            `Privacidad: ${LEGAL_CONTACTS.privacy}`,
            `Jurídico: ${LEGAL_CONTACTS.legal}`,
            `Sitio: ${LEGAL_ENTITY.siteUrl}`,
          ],
        },
      ],
    },
  ],
};
