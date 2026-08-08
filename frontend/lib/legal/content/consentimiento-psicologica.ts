import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const consentimientoPsicologicaDocument: LegalDocument = {
  id: "consentimiento-psicologica",
  path: "/Consentimiento-Atencion-Psicologica",
  title: "Consentimiento Informado para Atención Psicológica",
  shortTitle: "Consentimiento Psicológico",
  summary:
    "Consentimiento informado para atención psicológica en Elynthis: confidencialidad, límites legales, riesgo suicida, terceros, autoridades y menores.",
  description:
    "Consentimiento Informado para Atención Psicológica en Elynthis, con confidencialidad, límites legales, riesgo suicida, riesgo para terceros, autoridad competente y atención a menores.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "consent",
  signable: true,
  keywords: [
    "consentimiento psicológico",
    "confidencialidad",
    "riesgo suicida",
    "menores",
    "Elynthis",
  ],
  relatedIds: [
    "consentimiento-datos",
    "consentimiento-teleconsulta",
    "proteccion-datos",
    "privacidad",
    "cumplimiento",
  ],
  definitions: [
    {
      term: "Confidencialidad terapéutica",
      definition:
        "Deber del Profesional de psicología de resguardar la información conocida en el marco de la atención, con las excepciones legales y éticas aplicables en Colombia.",
    },
    {
      term: "Representante legal",
      definition:
        "Padre, madre, tutor o quien ostente la representación legal de un menor o de una persona que requiera representación conforme a la ley.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Este consentimiento regula la atención psicológica prestada o gestionada mediante Elynthis (presencial documentada digitalmente o por teleconsulta), incluyendo psicoeducación clínica personalizada, psicoterapia y seguimiento.",
    },
  ],
  articles: [
    {
      id: "objeto-psicologico",
      number: "Artículo 1",
      title: "Objeto de la atención",
      blocks: [
        {
          type: "p",
          text: "He sido informado sobre el objetivo general del proceso psicológico, las técnicas que podrían emplearse, la duración estimada de sesiones y la posibilidad de referidos a otros profesionales cuando el caso lo requiera.",
        },
      ],
    },
    {
      id: "confidencialidad",
      number: "Artículo 2",
      title: "Confidencialidad",
      blocks: [
        {
          type: "p",
          text: "La información compartida en sesión y registrada en historia clínica es confidencial y de acceso restringido. Elynthis aplica controles técnicos de reserva; el Profesional mantiene el deber ético y legal de secreto profesional.",
        },
      ],
    },
    {
      id: "limites-legales",
      number: "Artículo 3",
      title: "Límites legales de la confidencialidad",
      blocks: [
        {
          type: "p",
          text: "Entiendo que la confidencialidad tiene límites. El Profesional podrá revelar información mínima necesaria cuando exista deber legal o riesgo grave, incluyendo los escenarios de los artículos siguientes.",
        },
      ],
    },
    {
      id: "riesgo-suicida",
      number: "Artículo 4",
      title: "Riesgo suicida",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Protección de la vida",
          text: "Si el Profesional valora riesgo suicida o de autolesión significativa, podrá activar protocolos de protección, contactar a redes de apoyo previamente indicadas, orientar a urgencias y/o comunicar a quien corresponda conforme a la ley y al deber de cuidado, priorizando la integridad del paciente.",
        },
        {
          type: "p",
          text: "La teleconsulta no reemplaza atención de urgencias. En crisis debo buscar ayuda inmediata en servicios de emergencia o líneas oficiales.",
        },
      ],
    },
    {
      id: "riesgo-terceros",
      number: "Artículo 5",
      title: "Riesgo para terceros",
      blocks: [
        {
          type: "p",
          text: "Si existe amenaza seria y creíble de daño a un tercero identificable, el Profesional podrá advertir a la persona en riesgo y/o informar a la autoridad competente, revelando solo lo necesario para prevenir el daño.",
        },
      ],
    },
    {
      id: "autoridad-competente",
      number: "Artículo 6",
      title: "Autoridad competente",
      blocks: [
        {
          type: "p",
          text: "Ante requerimientos válidos de autoridad judicial o administrativa, o deberes legales de reporte (por ejemplo, relacionados con protección de niños, niñas y adolescentes u otros mandatos), el Profesional podrá entregar información conforme a la ley colombiana.",
        },
      ],
    },
    {
      id: "menores",
      number: "Artículo 7",
      title: "Menores de edad",
      blocks: [
        {
          type: "ul",
          items: [
            "La atención a menores requiere participación y autorización del Representante legal, sin perjuicio del interés superior del menor y de su derecho a ser escuchado según su edad y madurez.",
            "El Profesional explicará el alcance de la confidencialidad con el menor y con el Representante, incluyendo qué información podrá compartirse con cuidadores para proteger la salud e integridad.",
            "En situaciones de riesgo, violencia o vulneración de derechos, el Profesional actuará conforme a rutas de protección vigentes en Colombia.",
          ],
        },
      ],
    },
    {
      id: "registro-hce-psico",
      number: "Artículo 8",
      title: "Registro en historia clínica",
      blocks: [
        {
          type: "p",
          text: "Autorizo el registro de la atención en la historia clínica electrónica de Elynthis, con retención conforme a normas sanitarias y reserva legal.",
        },
      ],
    },
    {
      id: "voluntariedad-psico",
      number: "Artículo 9",
      title: "Voluntariedad y revocación",
      blocks: [
        {
          type: "p",
          text: "Participo de forma voluntaria y puedo interrumpir el proceso o revocar este consentimiento para futuras atenciones, con los efectos clínicos y administrativos que ello implique.",
        },
      ],
    },
    {
      id: "aceptacion-psico",
      number: "Artículo 10",
      title: "Aceptación",
      blocks: [
        {
          type: "p",
          text: `Declaro que comprendí la información sobre confidencialidad y sus límites (incluyendo riesgo suicida, riesgo a terceros, autoridad competente y menores), y consiento la atención psicológica. Privacidad: ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-crisis",
      number: "Anexo A",
      title: "Orientación ante crisis",
      blocks: [
        {
          type: "p",
          text: "En emergencia, contacte servicios locales de urgencias o líneas oficiales de atención en salud mental. Elynthis y los canales de soporte asíncrono no son servicios de emergencia 24/7 salvo que un contrato institucional diga expresamente lo contrario.",
        },
      ],
    },
  ],
};
