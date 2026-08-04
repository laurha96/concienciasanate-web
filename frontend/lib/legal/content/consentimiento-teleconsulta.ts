import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const consentimientoTeleconsultaDocument: LegalDocument = {
  id: "consentimiento-teleconsulta",
  path: "/Consentimiento-Teleconsulta",
  title: "Consentimiento Informado para Teleconsulta",
  shortTitle: "Consentimiento Teleconsulta",
  summary:
    "Consentimiento informado para atención por teleconsulta mediante Elynthis, incluyendo beneficios, riesgos, privacidad y límites.",
  description:
    "Consentimiento Informado para Teleconsulta en Elynthis: naturaleza del servicio, riesgos tecnológicos, confidencialidad, emergencias y firma electrónica.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "consent",
  signable: true,
  keywords: [
    "teleconsulta",
    "consentimiento informado",
    "telemedicina",
    "Elynthis",
    "Ley 1751",
  ],
  relatedIds: [
    "consentimiento-datos",
    "consentimiento-psicologica",
    "privacidad",
    "seguridad",
    "terminos",
  ],
  definitions: [
    {
      term: "Teleconsulta",
      definition:
        "Atención en salud mediada por tecnologías de la información y las comunicaciones a través de Elynthis u herramientas integradas autorizadas, sin presencia física simultánea en el mismo lugar.",
    },
    {
      term: "Entorno del Usuario",
      definition:
        "Lugar, dispositivo, red y condiciones de privacidad desde las cuales el Paciente o el Profesional participa en la teleconsulta.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Este consentimiento aplica a teleconsultas de psicología, medicina u otras atenciones habilitadas en Elynthis, complementando el consentimiento de tratamiento de datos y, cuando corresponda, el consentimiento de atención psicológica.",
    },
  ],
  articles: [
    {
      id: "naturaleza",
      number: "Artículo 1",
      title: "Naturaleza del servicio",
      blocks: [
        {
          type: "p",
          text: "He sido informado de que la teleconsulta permite valoración, seguimiento u orientación profesional a distancia. El Profesional determinará si mi caso es apto para esta modalidad o si requiere atención presencial.",
        },
      ],
    },
    {
      id: "beneficios",
      number: "Artículo 2",
      title: "Beneficios",
      blocks: [
        {
          type: "ul",
          items: [
            "Acceso oportuno sin desplazamiento.",
            "Continuidad de cuidado y seguimiento.",
            "Registro en historia clínica electrónica cuando el Profesional lo documente en Elynthis.",
          ],
        },
      ],
    },
    {
      id: "riesgos",
      number: "Artículo 3",
      title: "Riesgos y limitaciones",
      blocks: [
        {
          type: "ul",
          items: [
            "Interrupciones de conectividad, audio o video.",
            "Limitaciones para examen físico completo.",
            "Riesgos residuales de seguridad pese a controles técnicos (TLS, autenticación, etc.).",
            "Menor idoneidad en urgencias o crisis que requieran presencia física.",
          ],
        },
      ],
    },
    {
      id: "privacidad-teleconsulta",
      number: "Artículo 4",
      title: "Privacidad y entorno",
      blocks: [
        {
          type: "p",
          text: "Me comprometo a participar desde un espacio razonablemente privado, a no permitir la presencia de terceros no autorizados y a no grabar la sesión salvo acuerdo o autorización legal. El Profesional hará lo propio en su entorno profesional.",
        },
      ],
    },
    {
      id: "tecnologia",
      number: "Artículo 5",
      title: "Tecnología utilizada",
      blocks: [
        {
          type: "p",
          text: "La teleconsulta se realiza mediante Elynthis y/o proveedores tecnológicos de comunicaciones integrados, protegidos con HTTPS/TLS y controles de acceso. Pueden generarse metadatos técnicos (hora, duración, calidad de conexión, IP) para seguridad y soporte.",
        },
      ],
    },
    {
      id: "emergencias",
      number: "Artículo 6",
      title: "Emergencias",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No es un canal de urgencias",
          text: "Si presento una emergencia médica o de salud mental, debo contactar servicios de urgencias o líneas oficiales. La teleconsulta puede no estar disponible de forma inmediata ni ser suficiente en crisis.",
        },
      ],
    },
    {
      id: "historia-teleconsulta",
      number: "Artículo 7",
      title: "Historia clínica",
      blocks: [
        {
          type: "p",
          text: "Autorizo que la atención por teleconsulta sea registrada en mi historia clínica electrónica conforme a la normativa colombiana de HCE y reserva.",
        },
      ],
    },
    {
      id: "revocacion-teleconsulta",
      number: "Artículo 8",
      title: "Revocación",
      blocks: [
        {
          type: "p",
          text: "Puedo revocar este consentimiento para futuras teleconsultas, entendiéndose que ello puede exigir reprogramar atención presencial u otros canales.",
        },
      ],
    },
    {
      id: "aceptacion-teleconsulta",
      number: "Artículo 9",
      title: "Aceptación",
      blocks: [
        {
          type: "p",
          text: `Declaro que he comprendido la información, he podido formular preguntas al Profesional y acepto la teleconsulta de forma libre e informada. Canal de datos: ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
};
