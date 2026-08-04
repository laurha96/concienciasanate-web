import { LEGAL_CONTACTS, LEGAL_ENTITY, THIRD_PARTY_SERVICES } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const privacidadDocument: LegalDocument = {
  id: "privacidad",
  path: "/Politica-de-Privacidad",
  title: "Política de Privacidad",
  shortTitle: "Privacidad",
  summary:
    "Tratamiento de datos personales, clínicos y sensibles en Conciencia Sánate y Elynthis bajo la Ley 1581 de 2012 y normas conexas.",
  description:
    "Política de Privacidad de Conciencia Sánate y Elynthis: datos personales y clínicos, cookies, IA, bases legales, conservación, transferencias, seguridad, RLS Supabase y derechos del titular.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "privacy",
  keywords: [
    "política de privacidad",
    "Ley 1581",
    "datos sensibles",
    "historia clínica",
    "Elynthis",
    "habeas data",
  ],
  relatedIds: [
    "proteccion-datos",
    "cookies",
    "consentimiento-datos",
    "seguridad",
    "eliminar-cuenta",
    "cumplimiento",
  ],
  definitions: [
    {
      term: "Dato Personal",
      definition:
        "Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables (Ley 1581 de 2012).",
    },
    {
      term: "Dato Sensible",
      definition:
        "Dato que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación; incluye datos de salud, biométricos y afiliación, entre otros.",
    },
    {
      term: "Dato Clínico",
      definition:
        "Información de salud registrada en Elynthis, incluyendo diagnósticos, notas, sesiones, prescripciones, archivos y elementos de historia clínica electrónica.",
    },
    {
      term: "Responsable del Tratamiento",
      definition:
        "Persona natural o jurídica que decide sobre la base de datos y el tratamiento. Según el flujo, puede ser el Profesional/institución (respecto de la HCE de sus pacientes) y/o Conciencia Sánate (respecto de cuentas, telemetría de producto y datos propios del sitio).",
    },
    {
      term: "Encargado del Tratamiento",
      definition:
        "Quien trata datos por cuenta del Responsable. Conciencia Sánate actúa como Encargado respecto de muchos tratamientos clínicos alojados en Elynthis para Profesionales e instituciones.",
    },
    {
      term: "Titular",
      definition: "Persona natural cuyos datos son objeto de tratamiento.",
    },
    {
      term: "RLS",
      definition:
        "Row Level Security de Supabase: control de acceso a nivel de fila en base de datos para restringir visibilidad según rol y pertenencia organizacional.",
    },
  ],
  scope: [
    {
      type: "p",
      text: `Esta Política describe cómo ${LEGAL_ENTITY.tradeName} trata datos personales en ${LEGAL_ENTITY.siteUrl}, en ${LEGAL_ENTITY.softwareName} (${LEGAL_ENTITY.products.join(", ")}) y en canales asociados (soporte, correos transaccionales y aplicaciones móviles).`,
    },
    {
      type: "p",
      text: "Se rige principalmente por la Ley 1581 de 2012, el Decreto 1377 de 2013, el Decreto 1074 de 2015, la Ley 1266 de 2008 cuando aplique, y las normas especiales de salud e historia clínica. GDPR se usa solo como referencia de buenas prácticas; no implica establecimiento en la Unión Europea.",
    },
  ],
  articles: [
    {
      id: "datos-recolectados",
      number: "Artículo 1",
      title: "Datos recolectados",
      blocks: [
        {
          type: "p",
          text: "Recolectamos únicamente los datos necesarios para operar la Plataforma, cumplir obligaciones legales y prestar los módulos habilitados.",
        },
        {
          type: "table",
          headers: ["Categoría", "Ejemplos en Elynthis / Conciencia Sánate"],
          rows: [
            [
              "Identificación y cuenta",
              "Nombre, correo, teléfono, documento, rol, organización, credenciales/hashes",
            ],
            [
              "Datos clínicos",
              "Motivos de consulta, diagnósticos, notas, planes, evoluciones, adjuntos",
            ],
            [
              "Datos sensibles de salud",
              "Historia clínica, salud mental, terapias, resultados y documentos clínicos",
            ],
            [
              "Agenda y teleconsulta",
              "Citas, disponibilidad, enlaces de sesión, metadatos técnicos de llamada",
            ],
            [
              "Documental y firmas",
              "Consentimientos, firmas electrónicas, PDFs, evidencias de aceptación",
            ],
            [
              "Facturación y RIPS",
              "Datos de facturación, medios de pago tokenizados vía Stripe, RIPS",
            ],
            [
              "Técnicos",
              "IP, logs, dispositivo, navegador, cookies, ubicación aproximada, telemetría",
            ],
            [
              "IA asistiva",
              "Prompts y salidas de apoyo no diagnóstico cuando el Usuario active funciones de IA",
            ],
          ],
        },
      ],
    },
    {
      id: "datos-clinicos",
      number: "Artículo 2",
      title: "Datos clínicos",
      blocks: [
        {
          type: "p",
          text: "Los datos clínicos se tratan con reserva reforzada. Elynthis permite al Profesional registrar y gestionar historia clínica electrónica, evoluciones, diagnósticos, sesiones psicológicas, notas médicas, fotografías clínicas, archivos y documentos de atención.",
        },
        {
          type: "ul",
          items: [
            "El acceso se limita por roles, pertenencia a organización y políticas RLS.",
            "La interoperabilidad y el RDA se implementan conforme a la normativa del Ministerio de Salud, sin exponer más datos de los autorizados.",
            "Los Profesionales son responsables del contenido clínico que registran.",
          ],
        },
      ],
    },
    {
      id: "datos-personales",
      number: "Artículo 3",
      title: "Datos personales",
      blocks: [
        {
          type: "p",
          text: "Incluyen datos de identificación, contacto, cuenta, preferencias, soporte y facturación no clínica. Se tratan bajo principios de legalidad, finalidad, libertad, veracidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad (Ley 1581 de 2012).",
        },
      ],
    },
    {
      id: "datos-sensibles",
      number: "Artículo 4",
      title: "Datos sensibles",
      blocks: [
        {
          type: "p",
          text: "Los datos de salud son sensibles. Su tratamiento requiere autorización del Titular salvo excepciones legales, y se sujeta a medidas de seguridad reforzadas descritas en la Política de Protección de Datos Sensibles y en la Política de Seguridad.",
        },
      ],
    },
    {
      id: "cookies",
      number: "Artículo 5",
      title: "Cookies",
      blocks: [
        {
          type: "p",
          text: "Utilizamos cookies y tecnologías equivalentes esenciales, de preferencias, analíticas y de rendimiento (incluyendo componentes de Cloudflare y, cuando se habilite, Google Analytics). El detalle opera bajo la Política de Cookies.",
        },
      ],
    },
    {
      id: "direcciones-ip",
      number: "Artículo 6",
      title: "Direcciones IP",
      blocks: [
        {
          type: "p",
          text: "Las direcciones IP se tratan para seguridad, prevención de abuso, diagnóstico técnico, limitación de tasa y, cuando aplique, correlación de incidentes. No se usan para elaborar perfiles comerciales invasivos.",
        },
      ],
    },
    {
      id: "logs",
      number: "Artículo 7",
      title: "Logs",
      blocks: [
        {
          type: "p",
          text: "Conservamos registros técnicos y de auditoría (accesos, cambios relevantes, errores, eventos de seguridad) para integridad del servicio, investigación de incidentes y obligaciones de trazabilidad clínica/administrativa.",
        },
      ],
    },
    {
      id: "dispositivos",
      number: "Artículo 8",
      title: "Dispositivos",
      blocks: [
        {
          type: "p",
          text: "Podemos registrar tipo de dispositivo, sistema operativo, navegador, identificadores de sesión y señales de confianza para autenticación, experiencia móvil y control de sesiones sospechosas.",
        },
      ],
    },
    {
      id: "ubicacion",
      number: "Artículo 9",
      title: "Ubicación aproximada",
      blocks: [
        {
          type: "p",
          text: "La ubicación aproximada puede inferirse a partir de IP o configuraciones del dispositivo para seguridad, personalización básica de idioma/zona horaria y prevención de fraude. No rastreamos geolocalización precisa de pacientes como condición general del servicio.",
        },
      ],
    },
    {
      id: "archivos",
      number: "Artículo 10",
      title: "Archivos",
      blocks: [
        {
          type: "p",
          text: "Los archivos cargados (PDF, imágenes, documentos clínicos, evidencias) se almacenan en infraestructura controlada (incluyendo almacenamiento Supabase) con controles de acceso y cifrado en tránsito. El Usuario solo debe cargar archivos lícitos y pertinentes a la atención o gestión.",
        },
      ],
    },
    {
      id: "firmas",
      number: "Artículo 11",
      title: "Firmas",
      blocks: [
        {
          type: "p",
          text: "Las firmas electrónicas y evidencias de aceptación (nombre, documento, marca temporal, IP/user-agent cuando corresponda, hash del documento) se conservan para demostrar consentimiento y actos jurídicos asociados al uso de Elynthis.",
        },
      ],
    },
    {
      id: "consentimientos",
      number: "Artículo 12",
      title: "Consentimientos",
      blocks: [
        {
          type: "p",
          text: "Elynthis facilita la captura y custodia de consentimientos (tratamiento de datos, teleconsulta, atención psicológica y otros). El Profesional debe usar los módulos de consentimiento de forma coherente con su deber ético y legal.",
        },
      ],
    },
    {
      id: "uso-ia",
      number: "Artículo 13",
      title: "Uso de IA",
      blocks: [
        {
          type: "p",
          text: "Cuando se habiliten funciones asistidas por OpenAI u otros modelos, el tratamiento se limita a finalidades de apoyo (redacción asistida, organización de información, sugerencias no vinculantes). La IA no sustituye el juicio clínico ni genera decisiones automatizadas con efectos jurídicos o clínicos sin supervisión humana.",
        },
        {
          type: "ul",
          items: [
            "Se aplican controles para minimizar datos enviados al proveedor de IA.",
            "No deben ingresarse datos innecesarios en prompts.",
            "El Profesional valida cualquier salida antes de incorporarla a la historia clínica.",
            "GDPR se toma como buena práctica de minimización y transparencia; no implica adecuación UE.",
          ],
        },
      ],
    },
    {
      id: "finalidades",
      number: "Artículo 14",
      title: "Finalidades",
      blocks: [
        {
          type: "ol",
          items: [
            "Crear y administrar cuentas, autenticación y control de accesos.",
            "Prestar módulos clínicos: HCE, agenda, teleconsulta, documentos, consentimientos, firma, facturación, RIPS e interoperabilidad.",
            "Brindar soporte técnico y mejorar la seguridad/disponibilidad del servicio.",
            "Cumplir obligaciones legales, requerimientos de autoridad y auditoría.",
            "Enviar comunicaciones transaccionales (Resend) y, con base legal adecuada, comunicaciones de producto.",
            "Analítica agregada y rendimiento (cookies/servicios técnicos).",
            "Procesar pagos mediante Stripe cuando el Usuario contrate planes de pago.",
          ],
        },
      ],
    },
    {
      id: "base-legal",
      number: "Artículo 15",
      title: "Base legal",
      blocks: [
        {
          type: "ul",
          items: [
            "Autorización del Titular / consentimiento informado (Ley 1581 de 2012 y normas de salud).",
            "Ejecución de relación contractual o precontractual con el Usuario.",
            "Cumplimiento de deber legal (historia clínica, RIPS, interoperabilidad, Retention).",
            "Interés legítimo compatible con derechos del Titular para seguridad, prevención de fraude y mejora del servicio, cuando resulte aplicable y proporcional.",
            "Situaciones de urgencia o excepciones legales expresamente previstas.",
          ],
        },
      ],
    },
    {
      id: "conservacion",
      number: "Artículo 16",
      title: "Conservación",
      blocks: [
        {
          type: "p",
          text: "Los datos se conservan el tiempo necesario para las finalidades y para cumplir plazos legales. Las historias clínicas y documentos clínicos pueden requerir retención prolongada conforme a normas sanitarias, aun si el Titular solicita eliminación de la cuenta de acceso.",
        },
        {
          type: "p",
          text: "Los logs de seguridad y auditoría se conservan por periodos proporcionales al riesgo y a necesidades de investigación.",
        },
      ],
    },
    {
      id: "transferencias",
      number: "Artículo 17",
      title: "Transferencias",
      blocks: [
        {
          type: "p",
          text: "Pueden existir transmisiones o transferencias a encargados y proveedores tecnológicos (por ejemplo, Supabase, Cloudflare, Resend, OpenAI, Google, Apple, Stripe) para operar la Plataforma. Se aplican contratos, configuración de seguridad y principio de minimización.",
        },
        {
          type: "p",
          text: "Si un proveedor trata datos fuera de Colombia, se adoptan salvaguardas razonables y se informa cuando la ley lo exija. El detalle operativo de proveedores aparece también en Términos y Condiciones.",
        },
        {
          type: "table",
          headers: ["Proveedor", "Función de privacidad"],
          rows: THIRD_PARTY_SERVICES.map((s) => [s.name, s.purpose]),
        },
      ],
    },
    {
      id: "seguridad",
      number: "Artículo 18",
      title: "Seguridad",
      blocks: [
        {
          type: "p",
          text: "Implementamos controles administrativos, técnicos y físicos razonables: HTTPS/TLS, cifrado en tránsito, control de accesos, RLS, segmentación por roles, monitoreo, backups y registro de auditoría. El detalle está en la Política de Seguridad.",
        },
        {
          type: "note",
          title: "Referencia HIPAA",
          text: "Algunos controles se inspiran en salvaguardas técnicas HIPAA como referencia de confidencialidad. Ello no constituye declaración de certificación HIPAA.",
        },
      ],
    },
    {
      id: "backups",
      number: "Artículo 19",
      title: "Backups",
      blocks: [
        {
          type: "p",
          text: "Se realizan respaldos periódicos de la infraestructura de datos (incluyendo capacidades de Supabase y procedimientos internos) para continuidad del servicio y recuperación ante desastres, con acceso restringido.",
        },
      ],
    },
    {
      id: "auditoria",
      number: "Artículo 20",
      title: "Auditoría",
      blocks: [
        {
          type: "p",
          text: "Elynthis puede registrar eventos de acceso y cambios relevantes sobre datos clínicos y administrativos. Los Administradores y Conciencia Sánate pueden revisar auditorías para seguridad, cumplimiento y soporte, bajo mínimo privilegio.",
        },
      ],
    },
    {
      id: "control-accesos",
      number: "Artículo 21",
      title: "Control de accesos",
      blocks: [
        {
          type: "p",
          text: "El acceso a datos se otorga según rol (Paciente, Profesional, Administrador, soporte autorizado). Se aplica autenticación, sesiones controladas y principios de menor privilegio y necesidad de conocer.",
        },
      ],
    },
    {
      id: "rls-supabase",
      number: "Artículo 22",
      title: "RLS y Supabase",
      blocks: [
        {
          type: "p",
          text: "La base de datos de Elynthis utiliza PostgreSQL en Supabase con políticas RLS diseñadas para que un Usuario autenticado solo pueda leer o escribir filas para las que esté autorizado (por ejemplo, su propia información de paciente o los registros de su organización/consultorio).",
        },
        {
          type: "ul",
          items: [
            "Las claves de servicio se restringen a backends controlados.",
            "El almacenamiento de archivos se asocia a reglas de acceso coherentes con el modelo de datos.",
            "Los cambios de políticas RLS se tratan como cambios de seguridad relevantes.",
          ],
        },
      ],
    },
    {
      id: "cifrado",
      number: "Artículo 23",
      title: "Cifrado",
      blocks: [
        {
          type: "p",
          text: "Las comunicaciones usan TLS/HTTPS. Credenciales y secretos se gestionan con prácticas seguras. Se promueve cifrado en reposo en los servicios de infraestructura utilizados. Las firmas y evidencias pueden almacenarse con integridad verificable (hashes/marcas temporales).",
        },
      ],
    },
    {
      id: "derechos-titular",
      number: "Artículo 24",
      title: "Derechos del titular",
      blocks: [
        {
          type: "p",
          text: "El Titular puede ejercer, conforme a la Ley 1581 de 2012 y normas concordantes, los derechos de conocer, actualizar, rectificar, suprimir, revocar la autorización y solicitar prueba de la autorización, entre otros aplicables.",
        },
        {
          type: "callout",
          tone: "legal",
          title: "Límite importante",
          text: "La supresión no procede cuando exista deber legal de Retention (por ejemplo, historia clínica) o cuando la información sea necesaria para el cumplimiento de una obligación legal o contractual vigente.",
        },
      ],
    },
    {
      id: "revocacion",
      number: "Artículo 25",
      title: "Revocación",
      blocks: [
        {
          type: "p",
          text: "El Titular puede revocar la autorización para tratamientos basados en consentimiento, sin efectos retroactivos sobre tratamientos ya realizados de forma lícita. La revocación puede impedir el uso de ciertos módulos.",
        },
      ],
    },
    {
      id: "procedimiento",
      number: "Artículo 26",
      title: "Procedimiento",
      blocks: [
        {
          type: "ol",
          items: [
            "Presentar solicitud al canal de privacidad indicando nombre, documento, correo de cuenta, descripción del derecho y documentos que acrediten identidad o representación.",
            "Conciencia Sánate acusará recibo y gestionará la solicitud en los plazos legales.",
            "Si Conciencia Sánate actúa como Encargado de un Profesional/institución, podrá redirigir o coordinar la respuesta con el Responsable del tratamiento clínico.",
            "El Titular puede elevar consulta o reclamo ante la Superintendencia de Industria y Comercio cuando corresponda.",
          ],
        },
      ],
    },
    {
      id: "canales-contacto",
      number: "Artículo 27",
      title: "Canales de contacto",
      blocks: [
        {
          type: "ul",
          items: [
            `${LEGAL_CONTACTS.dpoTitle}: ${LEGAL_CONTACTS.privacy}`,
            `Jurídico: ${LEGAL_CONTACTS.legal}`,
            `Seguridad: ${LEGAL_CONTACTS.security}`,
            `Soporte: ${LEGAL_CONTACTS.support}`,
            `General: ${LEGAL_CONTACTS.general}`,
          ],
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-roles-tratamiento",
      number: "Anexo A",
      title: "Roles de tratamiento en el ecosistema",
      blocks: [
        {
          type: "ul",
          items: [
            "Sitio público y cuenta Conciencia Sánate: Conciencia Sánate suele actuar como Responsable.",
            "Historia clínica y atención en Elynthis: el Profesional o institución suele actuar como Responsable; Conciencia Sánate como Encargado tecnológico.",
            "Pagos Stripe: tratamiento compartido/limitado según el flujo de checkout y normativa de pagos.",
          ],
        },
      ],
    },
  ],
};
