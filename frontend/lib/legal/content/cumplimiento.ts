import { NORMATIVE_REFERENCES } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const cumplimientoDocument: LegalDocument = {
  id: "cumplimiento",
  path: "/Cumplimiento",
  title: "Cumplimiento Normativo",
  shortTitle: "Cumplimiento",
  summary:
    "Explicación clara del alineamiento normativo de Elynthis en Colombia: datos, HCE, RDA, interoperabilidad, seguridad y consentimientos.",
  description:
    "Cumplimiento normativo de Elynthis: normas colombianas aplicables, estado de implementación, interoperabilidad, RDA, protección de información, auditoría y consentimientos. Sin certificaciones falsas.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "compliance",
  keywords: [
    "cumplimiento normativo",
    "RDA",
    "IHCE",
    "interoperabilidad",
    "Resolución 1888 de 2025",
    "Elynthis",
  ],
  relatedIds: [
    "privacidad",
    "proteccion-datos",
    "seguridad",
    "terminos",
    "consentimiento-datos",
  ],
  definitions: [
    {
      term: "IHCE",
      definition:
        "Interoperabilidad de la Historia Clínica Electrónica, impulsada por la Ley 2015 de 2020 y desarrollos reglamentarios del Ministerio de Salud.",
    },
    {
      term: "RDA",
      definition:
        "Resumen Digital de Atención, componente definido en la Resolución 1888 de 2025 para la implementación de la IHCE.",
    },
    {
      term: "Alineamiento",
      definition:
        "Diseño e implementación de controles, procesos y funcionalidades orientados a cumplir o preparar el cumplimiento de una norma, sin equivaler automáticamente a una certificación externa.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Este documento explica, en lenguaje claro, qué normas observa Elynthis hoy, qué capacidades están en proceso y cómo abordamos interoperabilidad, seguridad, auditoría, consentimientos y RDA. No declara certificaciones inexistentes.",
    },
  ],
  articles: [
    {
      id: "normas-actuales",
      number: "Artículo 1",
      title: "Qué normas cumple o alinea actualmente Elynthis",
      blocks: [
        {
          type: "p",
          text: "Elynthis está diseñado para operar en Colombia con alineamiento a:",
        },
        {
          type: "ul",
          items: [
            "Ley 1581 de 2012 y decretos reglamentarios: autorización, finalidades, seguridad, derechos del Titular y encargos.",
            "Ley 23 de 1981 y resoluciones de historia clínica (1995/839): reserva, custodia y buenas prácticas de registro.",
            "Ley Estatutaria 1751 de 2015 y Decreto 780 de 2016: marco de derecho a la salud y operación del SGSSS cuando aplique al Usuario institucional.",
            "Controles de seguridad inspirados en ISO/IEC 27001, ISO/IEC 27701 y referencias técnicas HIPAA (sin afirmar certificación).",
            "Prácticas de consentimiento informado digital (datos, teleconsulta, atención psicológica).",
            "Principios de minimización y transparencia inspirados en GDPR como buena práctica internacional (sin afirmar establecimiento UE).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Transparencia sobre certificaciones",
          text: "Salvo que Conciencia Sánate publique un certificado vigente emitido por un organismo acreditado, no debe interpretarse este Centro Legal como prueba de certificación ISO, HIPAA, SOC u otra. Hablar de “alineamiento” describe controles y diseño, no un sello externo.",
        },
      ],
    },
    {
      id: "normas-proceso",
      number: "Artículo 2",
      title: "Qué normas están en proceso",
      blocks: [
        {
          type: "ul",
          items: [
            "Evolución continua hacia interoperabilidad nacional de HCE conforme a Ley 2015 de 2020.",
            "Implementación progresiva de elementos de datos clínicos e intercambio según Resolución 866 de 2021.",
            "Preparación e implementación del RDA e IHCE según Resolución 1888 de 2025 y circulares del Ministerio de Salud.",
            "Ajustes a guías de Gobierno Digital del MinTIC cuando resulten aplicables a componentes específicos.",
            "Mejora continua de RIPS, facturación y exportaciones exigidas por la operación sanitaria/administrativa de los Usuarios.",
          ],
        },
        {
          type: "p",
          text: "Los plazos exactos de adopción nacional dependen de actos administrativos, pilotos y obligaciones que el Ministerio de Salud fije para prestadores y plataformas. Elynthis actualiza su hoja de ruta conforme a esas disposiciones.",
        },
      ],
    },
    {
      id: "interoperabilidad",
      number: "Artículo 3",
      title: "Cómo implementa la interoperabilidad",
      blocks: [
        {
          type: "ol",
          items: [
            "Modelo de datos clínicos estructurado y extensible.",
            "Control de legitimación: solo se comparte con destinatarios autorizados.",
            "Trazabilidad de exportaciones e intercambios.",
            "Adopción gradual de estándares y elementos definidos por el Ministerio de Salud.",
            "Separación entre datos necesarios para RDA/intercambio y el expediente completo interno.",
          ],
        },
      ],
    },
    {
      id: "proteccion-info",
      number: "Artículo 4",
      title: "Cómo protege la información",
      blocks: [
        {
          type: "ul",
          items: [
            "HTTPS/TLS y borde de seguridad (Cloudflare).",
            "Autenticación y control de accesos por roles.",
            "RLS en Supabase/PostgreSQL.",
            "Backups y procedimientos de incidentes.",
            "Políticas específicas de datos sensibles y seguridad publicadas en este Centro Legal.",
          ],
        },
      ],
    },
    {
      id: "auditoria-cumplimiento",
      number: "Artículo 5",
      title: "Cómo maneja la auditoría",
      blocks: [
        {
          type: "p",
          text: "Elynthis registra eventos relevantes de acceso y cambio para soportar investigaciones, soporte seguro y deberes de trazabilidad. Los Administradores institucionales pueden tener vistas de auditoría según el plan. Los logs se protegen contra alteración indebida y se conservan por periodos proporcionales al riesgo.",
        },
      ],
    },
    {
      id: "consentimiento-cumplimiento",
      number: "Artículo 6",
      title: "Cómo maneja el consentimiento",
      blocks: [
        {
          type: "ul",
          items: [
            "Consentimientos específicos firmables electrónicamente (datos, teleconsulta, psicología).",
            "Versionado del texto aceptado y evidencia de aceptación.",
            "Revocación y gestión de derechos canalizadas a privacidad@concienciasanate.com.",
            "El Profesional permanece responsable de verificar comprensión y capacidad del Titular.",
          ],
        },
      ],
    },
    {
      id: "rda",
      number: "Artículo 7",
      title: "Cómo funciona el RDA",
      blocks: [
        {
          type: "p",
          text: "El Resumen Digital de Atención (RDA), conforme a la Resolución 1888 de 2025, busca facilitar un resumen estandarizado de la atención para interoperabilidad. En Elynthis, el RDA se aborda como capacidad de producto en implementación/evolución:",
        },
        {
          type: "ul",
          items: [
            "Identificar y mapear elementos de datos requeridos.",
            "Permitir generación/exportación del resumen cuando el módulo esté habilitado para el Usuario.",
            "Aplicar controles de autorización y auditoría al compartir.",
            "Actualizar el mapeo cuando el Ministerio publique precisiones o circulares.",
          ],
        },
        {
          type: "note",
          text: "La disponibilidad del RDA en un consultorio o institución concreta depende del plan, de la configuración y del estado de habilitación normativa/técnica del momento.",
        },
      ],
    },
    {
      id: "interoperabilidad-nacional",
      number: "Artículo 8",
      title: "Cómo funcionará la interoperabilidad nacional",
      blocks: [
        {
          type: "p",
          text: "La interoperabilidad nacional de la HCE busca que, con legitimación, un prestador autorizado pueda acceder a información clínica relevante del paciente a lo largo del sistema de salud. Elynthis se prepara para:",
        },
        {
          type: "ol",
          items: [
            "Conectarse a mecanismos o servicios que defina el Ministerio de Salud.",
            "Respetar consentimiento, reserva y finalidades de atención.",
            "Registrar trazas de intercambio.",
            "Limitar el conjunto de datos al mínimo necesario (p. ej., RDA frente a expediente completo).",
          ],
        },
        {
          type: "p",
          text: "Hasta que las piezas nacionales estén plenamente operativas para un Usuario, Elynthis continúa sirviendo como HCE/gestión clínica del Prestador con exportaciones controladas.",
        },
      ],
    },
    {
      id: "roles-cumplimiento",
      number: "Artículo 9",
      title: "Responsabilidades compartidas",
      blocks: [
        {
          type: "table",
          headers: ["Actor", "Responsabilidad de cumplimiento"],
          rows: [
            [
              "Conciencia Sánate / Elynthis",
              "Seguridad del software, privacidad por diseño, documentación legal, evolución RDA/IHCE",
            ],
            [
              "Profesional / Institución",
              "Habilitación, ética, contenido clínico, consentimientos del acto asistencial, uso lícito",
            ],
            [
              "Paciente",
              "Veracidad de datos aportados y ejercicio de derechos por canales adecuados",
            ],
          ],
        },
      ],
    },
    {
      id: "marco-referencia",
      number: "Artículo 10",
      title: "Marco normativo de referencia",
      blocks: [
        {
          type: "ul",
          items: [...NORMATIVE_REFERENCES],
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-estado",
      number: "Anexo A",
      title: "Estado resumido (producto)",
      blocks: [
        {
          type: "table",
          headers: ["Ámbito", "Estado"],
          rows: [
            ["Protección de datos (Ley 1581)", "Alineado / operativo con políticas publicadas"],
            ["Reserva de HCE", "Controles de acceso + políticas de datos sensibles"],
            ["Consentimientos electrónicos", "Documentos firmables publicados"],
            ["Seguridad (Zero Trust, TLS, RLS, backups)", "Controles implementados y en mejora continua"],
            ["RIPS / facturación", "Según módulos y plan del Usuario"],
            ["RDA / IHCE (Res. 1888/2025)", "En implementación / evolución"],
            ["Interoperabilidad nacional", "En preparación según actos del MinSalud"],
            ["Certificaciones ISO/HIPAA", "No declaradas en este documento"],
          ],
        },
      ],
    },
  ],
};
