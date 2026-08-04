import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const eliminarCuentaDocument: LegalDocument = {
  id: "eliminar-cuenta",
  path: "/Eliminar-Cuenta",
  title: "Política de Eliminación de Cuenta",
  shortTitle: "Eliminar Cuenta",
  summary:
    "Proceso, plazos y Retention legal al eliminar una cuenta en Conciencia Sánate / Elynthis.",
  description:
    "Política de Eliminación de Cuenta de Conciencia Sánate y Elynthis: proceso, plazos, datos eliminados, Retention obligatoria de historias clínicas y canales de solicitud.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "operations",
  keywords: [
    "eliminar cuenta",
    "supresión",
    "retención historia clínica",
    "Elynthis",
    "derechos del titular",
  ],
  relatedIds: [
    "privacidad",
    "proteccion-datos",
    "terminos",
    "cumplimiento",
    "seguridad",
  ],
  definitions: [
    {
      term: "Eliminación de cuenta",
      definition:
        "Proceso mediante el cual se desactiva el acceso del Usuario y se suprimen o anonimizan datos de cuenta que no deban conservarse por mandato legal o legítimo.",
    },
    {
      term: "Retention legal",
      definition:
        "Conservación obligatoria de cierta información (especialmente historia clínica y evidencias) durante los plazos exigidos por la normativa colombiana o por autoridad competente.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Esta Política explica cómo solicitar la eliminación de una cuenta en Conciencia Sánate / Elynthis, qué ocurre con los datos de acceso y qué información puede permanecer retenida por deber legal, especialmente historias clínicas.",
    },
  ],
  articles: [
    {
      id: "proceso",
      number: "Artículo 1",
      title: "Proceso",
      blocks: [
        {
          type: "ol",
          items: [
            "Inicie sesión (si es posible) y use la opción de eliminación en configuración de cuenta, o envíe solicitud a privacidad@concienciasanate.com / soporte@concienciasanate.com.",
            "Acredite identidad (nombre, documento, correo de la cuenta y, si aplica, rol u organización).",
            "Indique si solicita solo cierre de acceso o también ejercicio de supresión de datos personales no sujetos a Retention.",
            "Recibirá confirmación de recepción y el resultado del proceso en los plazos indicados.",
            "Tras la verificación, se desactivará el acceso y se ejecutará el borrado/anonimización aplicable.",
          ],
        },
        {
          type: "note",
          title: "Cuentas institucionales",
          text: "Si la cuenta pertenece a una organización, un Administrador o Representante autorizado puede ser requerido para aprobar la salida de usuarios o la eliminación de workspaces, sin perjuicio de Retention clínica.",
        },
      ],
    },
    {
      id: "plazos",
      number: "Artículo 2",
      title: "Plazos",
      blocks: [
        {
          type: "ul",
          items: [
            "Acuse de recibo: hasta 5 días hábiles.",
            "Desactivación de acceso tras verificación: normalmente entre 5 y 15 días hábiles.",
            "Supresión/anonimización de datos de cuenta no sujetos a Retention: hasta 30 días hábiles, salvo complejidad o coordinación con Responsable clínico.",
            "Datos en backups: pueden persistir hasta el ciclo de rotación del respaldo, con acceso restringido y sin uso operativo ordinario.",
          ],
        },
      ],
    },
    {
      id: "conservacion-hce",
      number: "Artículo 3",
      title: "Conservación obligatoria de historias clínicas",
      blocks: [
        {
          type: "callout",
          tone: "legal",
          title: "La eliminación de cuenta no borra la HCE por defecto",
          text: "Las historias clínicas y documentos clínicos asociados a la atención en salud están sujetos a Retention legal y reserva. El cierre de su usuario de acceso no autoriza la destrucción anticipada de la HCE cuando la ley o el Responsable del tratamiento clínico deban conservarla.",
        },
        {
          type: "p",
          text: "Si el Titular solicita copia o traslado de su historia clínica, se gestionará conforme a la normativa de HCE y a los procedimientos del Profesional/institución Responsable.",
        },
      ],
    },
    {
      id: "datos-eliminados",
      number: "Artículo 4",
      title: "Datos eliminados",
      blocks: [
        {
          type: "ul",
          items: [
            "Credenciales y sesiones activas.",
            "Perfil de acceso y preferencias de cuenta no clínicas.",
            "Tokens de integraciones voluntarias (calendarios, etc.) asociados al Usuario.",
            "Datos de marketing o preferencias no esenciales, cuando existan.",
            "Contenidos del Usuario no sujetos a Retention legal ni a reclamaciones/procesos en curso.",
          ],
        },
      ],
    },
    {
      id: "datos-retenidos",
      number: "Artículo 5",
      title: "Datos retenidos por mandato legal",
      blocks: [
        {
          type: "ul",
          items: [
            "Historia clínica electrónica y documentos clínicos.",
            "Consentimientos y firmas electrónicas que sirvan de evidencia.",
            "Registros de facturación/RIPS exigidos por normas tributarias o sanitarias.",
            "Logs de auditoría necesarios para seguridad e investigaciones.",
            "Información requerida por autoridad competente o para el ejercicio/defensa de reclamaciones.",
          ],
        },
      ],
    },
    {
      id: "efectos",
      number: "Artículo 6",
      title: "Efectos de la eliminación",
      blocks: [
        {
          type: "p",
          text: "Tras la eliminación de acceso, el Usuario no podrá ingresar a módulos autenticados. Las suscripciones activas pueden cancelarse según el plan y Stripe. La reapertura puede requerir un nuevo registro y no garantiza recuperación de datos ya anonimizados.",
        },
      ],
    },
    {
      id: "canales-eliminacion",
      number: "Artículo 7",
      title: "Canales de contacto",
      blocks: [
        {
          type: "ul",
          items: [
            `Privacidad: ${LEGAL_CONTACTS.privacy}`,
            `Soporte: ${LEGAL_CONTACTS.support}`,
            `Jurídico: ${LEGAL_CONTACTS.legal}`,
          ],
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-checklist",
      number: "Anexo A",
      title: "Lista de verificación para solicitar eliminación",
      blocks: [
        {
          type: "ol",
          items: [
            "Correo exacto de la cuenta.",
            "Nombre completo y documento.",
            "Rol (Paciente / Profesional / Administrador).",
            "Organización (si aplica).",
            "Confirmación de que comprende la Retention de HCE.",
            "Indicar si necesita exportar información antes del cierre.",
          ],
        },
      ],
    },
  ],
};
