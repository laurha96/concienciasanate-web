import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const seguridadDocument: LegalDocument = {
  id: "seguridad",
  path: "/Politica-de-Seguridad",
  title: "Política de Seguridad de la Información",
  shortTitle: "Seguridad",
  summary:
    "Controles de seguridad de Elynthis: Zero Trust, TLS, cifrado, RLS, backups, auditoría, DR y notificación de incidentes.",
  description:
    "Política de Seguridad de Conciencia Sánate y Elynthis: modelo Zero Trust, HTTPS/TLS, cifrado, control de acceso, RLS Supabase, backups, logs, recuperación ante desastres y notificación de incidentes.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "security",
  keywords: [
    "seguridad de la información",
    "Zero Trust",
    "ISO 27001",
    "RLS",
    "Elynthis",
    "incidentes",
  ],
  relatedIds: [
    "privacidad",
    "proteccion-datos",
    "cumplimiento",
    "terminos",
    "eliminar-cuenta",
  ],
  definitions: [
    {
      term: "Zero Trust",
      definition:
        "Enfoque de seguridad que asume que ninguna solicitud es confiable por defecto y exige verificación continua de identidad, contexto y autorización.",
    },
    {
      term: "Incidente de Seguridad",
      definition:
        "Evento que compromete o amenaza de forma significativa la confidencialidad, integridad o disponibilidad de la información o de la Plataforma.",
    },
    {
      term: "DR / BCP",
      definition:
        "Recuperación ante desastres (Disaster Recovery) y continuidad del negocio (Business Continuity Planning).",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Esta Política describe el marco de seguridad aplicable a Conciencia Sánate y a la suite Elynthis. Se alinea a buenas prácticas de ISO/IEC 27001 e ISO/IEC 27701 como referencia de gestión, y a salvaguardas técnicas inspiradas en HIPAA, sin afirmar certificación formal por este documento.",
    },
    {
      type: "p",
      text: "Aplica a sistemas productivos, entornos de administración, integraciones (Supabase, Cloudflare, Resend, OpenAI, Stripe, Google, Apple) y al personal o contratistas con acceso a información.",
    },
  ],
  articles: [
    {
      id: "zero-trust",
      number: "Artículo 1",
      title: "Modelo Zero Trust",
      blocks: [
        {
          type: "ul",
          items: [
            "Autenticación fuerte y sesiones con expiración.",
            "Autorización por rol y contexto (organización, vínculo clínico, permiso).",
            "Segmentación lógica de datos mediante RLS y APIs controladas.",
            "Registro y monitoreo de eventos relevantes.",
            "Mínimo privilegio para soporte y administración.",
            "Verificación continua ante cambios de riesgo (nuevos dispositivos, patrones anómalos).",
          ],
        },
      ],
    },
    {
      id: "https-tls",
      number: "Artículo 2",
      title: "HTTPS y TLS",
      blocks: [
        {
          type: "p",
          text: "El tráfico de Usuarios hacia la Plataforma se protege con HTTPS y TLS. Se deshabilitan protocolos inseguros en la medida de las capacidades de la infraestructura y CDN (Cloudflare).",
        },
      ],
    },
    {
      id: "cifrado",
      number: "Artículo 3",
      title: "Cifrado",
      blocks: [
        {
          type: "ul",
          items: [
            "Cifrado en tránsito para comunicaciones de aplicación.",
            "Cifrado en reposo en servicios de infraestructura que lo soporten.",
            "Protección de secretos (variables de entorno, claves de servicio) fuera del código cliente.",
            "Hashes e integridad para evidencias de consentimientos y firmas cuando aplique.",
          ],
        },
      ],
    },
    {
      id: "control-acceso",
      number: "Artículo 4",
      title: "Control de acceso",
      blocks: [
        {
          type: "p",
          text: "El acceso a datos clínicos y administrativos se otorga según necesidad de conocer. Los Administradores deben revisar periódicamente usuarios activos. El acceso de soporte se limita, se registra y se revoca al cesar la necesidad.",
        },
      ],
    },
    {
      id: "rls",
      number: "Artículo 5",
      title: "RLS (Row Level Security)",
      blocks: [
        {
          type: "p",
          text: "Elynthis emplea políticas RLS en Supabase/PostgreSQL para impedir que un Usuario lea o modifique filas ajenas. Las operaciones privilegiadas se ejecutan solo desde backends controlados con claves de servicio protegidas.",
        },
      ],
    },
    {
      id: "backups",
      number: "Artículo 6",
      title: "Backups",
      blocks: [
        {
          type: "p",
          text: "Se realizan respaldos periódicos de bases de datos y, según diseño, de almacenamiento de archivos. Los backups tienen acceso restringido y se prueban en ejercicios de restauración cuando el programa de continuidad lo programe.",
        },
      ],
    },
    {
      id: "registro-auditoria",
      number: "Artículo 7",
      title: "Registro de auditoría",
      blocks: [
        {
          type: "p",
          text: "Se registran eventos de seguridad y trazas de acceso/cambio relevantes para investigación, cumplimiento y soporte. La alteración o desactivación no autorizada de auditoría está prohibida.",
        },
      ],
    },
    {
      id: "logs",
      number: "Artículo 8",
      title: "Logs",
      blocks: [
        {
          type: "p",
          text: "Los logs técnicos (aplicación, borde Cloudflare, autenticación, errores) se usan para operación y seguridad. Se evita registrar secretos o datos clínicos innecesarios en texto claro.",
        },
      ],
    },
    {
      id: "recuperacion",
      number: "Artículo 9",
      title: "Recuperación ante desastres",
      blocks: [
        {
          type: "p",
          text: "El programa de DR contempla restauración desde backups, failover según capacidades del proveedor cloud, comunicación a Usuarios afectados y priorización de módulos clínicos críticos (agenda, HCE, teleconsulta) en la medida técnicamente posible.",
        },
        {
          type: "note",
          text: "Los Profesionales deben mantener procedimientos clínicos alternos ante indisponibilidad prolongada.",
        },
      ],
    },
    {
      id: "notificacion-incidentes",
      number: "Artículo 10",
      title: "Notificación de incidentes",
      blocks: [
        {
          type: "ol",
          items: [
            "Detección y clasificación del incidente (confidencialidad, integridad, disponibilidad).",
            "Contención, erradicación y recuperación.",
            "Evaluación de impacto a Titulares y Responsables.",
            "Notificación a afectados y autoridades cuando la ley o el riesgo lo exijan, en plazos razonables.",
            "Lecciones aprendidas y refuerzo de controles.",
          ],
        },
        {
          type: "p",
          text: `Canal de reporte: ${LEGAL_CONTACTS.security}. Los Usuarios deben reportar sospechas de acceso indebido de inmediato.`,
        },
      ],
    },
    {
      id: "disponibilidad",
      number: "Artículo 11",
      title: "Disponibilidad",
      blocks: [
        {
          type: "p",
          text: "Se monitorea la disponibilidad del servicio y de dependencias críticas. Los mantenimientos se programan para minimizar impacto. Los compromisos de SLA específicos, si existen, constan en contratos institucionales o planes comerciales.",
        },
      ],
    },
    {
      id: "desarrollo-seguro",
      number: "Artículo 12",
      title: "Desarrollo y operación seguros",
      blocks: [
        {
          type: "ul",
          items: [
            "Revisión de cambios con impacto en seguridad (RLS, auth, exportaciones clínicas).",
            "Separación razonable de entornos.",
            "Gestión de vulnerabilidades y dependencias.",
            "Encabezados de seguridad HTTP en el front (por ejemplo, frame denial, nosniff, referrer policy).",
          ],
        },
      ],
    },
    {
      id: "responsabilidades-usuarios-seg",
      number: "Artículo 13",
      title: "Responsabilidades de los Usuarios",
      blocks: [
        {
          type: "ul",
          items: [
            "Custodiar credenciales y dispositivos.",
            "No desactivar controles de seguridad locales.",
            "Usar redes razonablemente seguras en teleconsulta.",
            "Reportar incidentes y retiros de personal con acceso.",
          ],
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-controles",
      number: "Anexo A",
      title: "Mapa de controles (resumen)",
      blocks: [
        {
          type: "table",
          headers: ["Dominio", "Control principal en Elynthis"],
          rows: [
            ["Identidad", "Auth Supabase / OAuth Google-Apple, sesiones"],
            ["Autorización", "Roles + RLS"],
            ["Red", "HTTPS/TLS + Cloudflare"],
            ["Datos", "Minimización, cifrado, Retención legal"],
            ["Operación", "Logs, backups, incident response"],
            ["Privacidad", "Alineación ISO 27701 como referencia"],
          ],
        },
      ],
    },
  ],
};
