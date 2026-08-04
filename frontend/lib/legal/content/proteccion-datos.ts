import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const proteccionDatosDocument: LegalDocument = {
  id: "proteccion-datos",
  path: "/Proteccion-de-Datos",
  title: "Política de Protección de Datos Sensibles",
  shortTitle: "Datos Sensibles",
  summary:
    "Régimen reforzado para historia clínica, diagnósticos, sesiones psicológicas, firmas, consentimientos y documentos clínicos en Elynthis.",
  description:
    "Política de Protección de Datos Sensibles de Elynthis: historia clínica, diagnósticos, sesiones psicológicas, notas médicas, fotografías, archivos, firmas y consentimientos bajo normativa colombiana.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "privacy",
  keywords: [
    "datos sensibles",
    "historia clínica",
    "psicología",
    "Ley 23 de 1981",
    "Elynthis",
  ],
  relatedIds: [
    "privacidad",
    "seguridad",
    "consentimiento-datos",
    "consentimiento-psicologica",
    "cumplimiento",
    "eliminar-cuenta",
  ],
  definitions: [
    {
      term: "Dato Sensible de Salud",
      definition:
        "Información relativa a la salud física o mental de una persona, incluyendo historia clínica, diagnósticos, tratamientos y cualquier dato asociado a la atención.",
    },
    {
      term: "Sesión Psicológica",
      definition:
        "Registro o encuentro de atención en salud mental documentado en Elynthis, sujeto a confidencialidad profesional y reserva legal.",
    },
    {
      term: "Documento Clínico",
      definition:
        "Cualquier archivo o registro generado o adjunto en el marco de la atención (evoluciones, consentimientos firmados, imágenes, órdenes, reportes).",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Esta Política complementa la Política de Privacidad y se centra en el tratamiento reforzado de datos sensibles de salud dentro de Elynthis Clinical, Care y Lite.",
    },
    {
      type: "p",
      text: "Marco principal: Ley 1581 de 2012, Ley 23 de 1981, Resolución 1995 de 1999, Resolución 839 de 2017, Ley 1751 de 2015, Decreto 780 de 2016, Ley 2015 de 2020 y normas de interoperabilidad (Resoluciones 866 de 2021 y 1888 de 2025).",
    },
  ],
  articles: [
    {
      id: "principio-reserva",
      number: "Artículo 1",
      title: "Principio de reserva",
      blocks: [
        {
          type: "p",
          text: "La historia clínica y los datos de salud mental tienen carácter reservado. Solo pueden acceder el paciente, el equipo tratante y las personas o autoridades legitimadas por la ley. Elynthis implementa controles técnicos para sostener ese principio; el Profesional y el Administrador deben respetarlo operativamente.",
        },
      ],
    },
    {
      id: "historia-clinica",
      number: "Artículo 2",
      title: "Historia clínica",
      blocks: [
        {
          type: "ul",
          items: [
            "Se registra de forma electrónica con trazabilidad.",
            "Debe ser legible, completa y oportuna según deberes del Profesional.",
            "No puede alterarse adulterando el pasado clínico; las correcciones deben ser auditablemente trazables.",
            "La Retention sigue mandatos sanitarios aun tras cierre de cuenta de acceso.",
          ],
        },
      ],
    },
    {
      id: "diagnosticos",
      number: "Artículo 3",
      title: "Diagnósticos",
      blocks: [
        {
          type: "p",
          text: "Los diagnósticos son datos sensibles. Su visualización, exportación e interoperabilidad se restringe a finalidades de atención, obligación legal o autorización válida. Queda prohibido usar diagnósticos para discriminación o publicidad.",
        },
      ],
    },
    {
      id: "sesiones-psicologicas",
      number: "Artículo 4",
      title: "Sesiones psicológicas",
      blocks: [
        {
          type: "p",
          text: "Las notas y metadatos de sesiones psicológicas reciben protección reforzada. El Profesional debe registrar solo lo necesario y observar límites éticos de confidencialidad, incluyendo deberes de denuncia o protección cuando la ley lo exija (riesgo suicida, riesgo para terceros, autoridades competentes).",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Límites de la confidencialidad",
          text: "La confidencialidad no es absoluta. Ante riesgo inminente para la vida del paciente o de terceros, o requerimientos legales válidos, el Profesional puede revelar información mínima necesaria conforme a la ley y a su deber de cuidado.",
        },
      ],
    },
    {
      id: "notas-medicas",
      number: "Artículo 5",
      title: "Notas médicas",
      blocks: [
        {
          type: "p",
          text: "Las evoluciones y notas médicas forman parte de la HCE. Su acceso se limita por rol. Las asistencias de IA, si se usan, no deben volcarse a la HCE sin revisión humana del Profesional.",
        },
      ],
    },
    {
      id: "fotografias",
      number: "Artículo 6",
      title: "Fotografías",
      blocks: [
        {
          type: "p",
          text: "Las fotografías clínicas o de seguimiento se tratan como datos sensibles. Deben cargarse solo con pertinencia clínica y base legal/consentimiento adecuado, evitando rostros o contextos innecesarios cuando no aporten a la atención.",
        },
      ],
    },
    {
      id: "archivos-sensibles",
      number: "Artículo 7",
      title: "Archivos",
      blocks: [
        {
          type: "p",
          text: "Los archivos clínicos se almacenan con control de acceso. Se prohíbe compartir enlaces públicos abiertos a documentos de salud. Las descargas y exportaciones deben realizarse por canales autorizados.",
        },
      ],
    },
    {
      id: "firmas-sensibles",
      number: "Artículo 8",
      title: "Firmas",
      blocks: [
        {
          type: "p",
          text: "Las firmas electrónicas asociadas a consentimientos o documentos clínicos se conservan como evidencia. Incluyen elementos de integridad (contenido aceptado, marca temporal y datos de contexto técnicos razonables).",
        },
      ],
    },
    {
      id: "consentimientos-sensibles",
      number: "Artículo 9",
      title: "Consentimientos",
      blocks: [
        {
          type: "p",
          text: "Elynthis facilita consentimientos específicos para tratamiento de datos, teleconsulta y atención psicológica. El Profesional debe verificar capacidad, representación de menores y comprensión del Titular antes de recoger la firma.",
        },
      ],
    },
    {
      id: "documentos-clinicos",
      number: "Artículo 10",
      title: "Documentos clínicos",
      blocks: [
        {
          type: "p",
          text: "Órdenes, reportes, consentimientos firmados y demás documentos clínicos siguen el mismo régimen de reserva. Su interoperabilidad (incluyendo RDA/IHCE) se realiza conforme a especificaciones del Ministerio de Salud y a legitimación del destinatario.",
        },
      ],
    },
    {
      id: "medidas-reforzadas",
      number: "Artículo 11",
      title: "Medidas de seguridad reforzadas",
      blocks: [
        {
          type: "ul",
          items: [
            "RLS y autorización por organización/rol.",
            "Auditoría de accesos sensibles.",
            "Cifrado en tránsito y controles de almacenamiento.",
            "Minimización en integraciones de IA y terceros.",
            "Procedimiento de incidentes con evaluación de impacto a datos de salud.",
          ],
        },
      ],
    },
    {
      id: "prohibiciones",
      number: "Artículo 12",
      title: "Prohibiciones específicas",
      blocks: [
        {
          type: "ul",
          items: [
            "Usar datos sensibles con fines comerciales ajenos a la atención.",
            "Entrenar modelos de IA públicos con historias clínicas de Elynthis sin base legal y controles contractuales adecuados.",
            "Exportar bases clínicas completas a canales no seguros (correo personal, mensajería no autorizada, repositorios abiertos).",
            "Acceder por curiosidad a pacientes sin vínculo asistencial.",
          ],
        },
      ],
    },
    {
      id: "ejercicio-derechos-sensibles",
      number: "Artículo 13",
      title: "Ejercicio de derechos",
      blocks: [
        {
          type: "p",
          text: `Las solicitudes se canalizan a ${LEGAL_CONTACTS.privacy}. Cuando Conciencia Sánate sea Encargado, coordinará con el Responsable clínico. La Retention legal de HCE puede limitar la supresión total.`,
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-categorias-sensibles",
      number: "Anexo A",
      title: "Inventario de categorías sensibles en Elynthis",
      blocks: [
        {
          type: "table",
          headers: ["Categoría", "Ejemplos", "Control clave"],
          rows: [
            ["HCE", "Evoluciones, antecedentes", "Reserva + RLS"],
            ["Salud mental", "Notas de sesión, riesgo", "Confidencialidad reforzada"],
            ["Diagnósticos", "CIE / impresiones diagnósticas", "Acceso mínimo"],
            ["Medios", "Fotos, PDFs, audios clínicos", "Storage controlado"],
            ["Evidencias", "Firmas y consentimientos", "Integridad + Retention"],
          ],
        },
      ],
    },
  ],
};
