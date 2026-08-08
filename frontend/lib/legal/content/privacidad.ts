import {
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
  PRIVACY_PATH,
  DELETE_ACCOUNT_PATH,
  THIRD_PARTY_SERVICES,
} from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const privacidadDocument: LegalDocument = {
  id: "privacidad",
  path: PRIVACY_PATH,
  title: "Política de Privacidad y Tratamiento de Datos Personales",
  shortTitle: "Privacidad",
  summary:
    "Tratamiento de datos personales, clínicos y de Google en Conciencia Sánate y el ecosistema Elynthis, conforme a la Ley 1581 de 2012 y Limited Use de Google.",
  description:
    "Política de Privacidad de Conciencia Sánate y Elynthis: datos personales y clínicos, Google Sign-In, Google Calendar, Limited Use, inteligencia artificial, conservación, derechos del titular y eliminación de cuenta.",
  version: "1.1.0",
  updatedAt: "2026-08-07",
  effectiveDate: "2026-08-07",
  category: "privacy",
  keywords: [
    "política de privacidad",
    "Ley 1581",
    "Google API Services User Data Policy",
    "Limited Use",
    "Google Calendar",
    "eliminación",
    "inteligencia artificial",
    "Elynthis",
    "historia clínica",
  ],
  relatedIds: [
    "proteccion-datos",
    "cookies",
    "consentimiento-datos",
    "seguridad",
    "eliminar-cuenta",
    "cumplimiento",
    "terminos",
  ],
  definitions: [
    {
      term: "Dato personal",
      definition:
        "Información vinculada o que pueda asociarse a una persona natural determinada o determinable.",
    },
    {
      term: "Dato sensible",
      definition:
        "Información que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación; incluye datos de salud, biométricos y de vida sexual, entre otros.",
    },
    {
      term: "Dato clínico",
      definition:
        "Información generada o recopilada durante la atención en salud, incluida la historia clínica, diagnósticos, notas, evoluciones, planes, prescripciones, resultados y documentos relacionados.",
    },
    {
      term: "Titular",
      definition: "Persona natural a quien pertenece la información.",
    },
    {
      term: "Responsable",
      definition:
        "Persona natural o jurídica que decide sobre la base de datos o el tratamiento.",
    },
    {
      term: "Encargado",
      definition:
        "Persona natural o jurídica que trata datos por cuenta del Responsable.",
    },
    {
      term: "Tratamiento",
      definition:
        "Cualquier operación sobre datos personales, como recolección, almacenamiento, uso, consulta, circulación, transmisión, actualización, anonimización o supresión.",
    },
    {
      term: "Datos de Google",
      definition:
        "Información recibida directamente o derivada de Google Sign-In, Google Calendar u otra API de Google autorizada por el Usuario.",
    },
    {
      term: "Token OAuth",
      definition:
        "Credencial técnica que permite a Elynthis acceder a una funcionalidad de Google dentro de los permisos autorizados por el Usuario.",
    },
  ],
  scope: [
    {
      type: "p",
      text: `Esta Política se aplica al tratamiento de datos personales realizado a través de ${LEGAL_ENTITY.siteUrl} y sus páginas públicas; Elynthis Clinical; Elynthis Clinical Lite; Elynthis Care; aplicaciones web y móviles asociadas; formularios de contacto, soporte y demostraciones; cuentas, autenticación y administración de usuarios; agenda, teleconsulta, documentos, consentimientos, facturación, RIPS e integraciones habilitadas; comunicaciones transaccionales y de seguridad; e integraciones opcionales con Google, Apple y otros proveedores expresamente informados.`,
    },
    {
      type: "p",
      text: "La Política aplica a visitantes, usuarios registrados, pacientes, profesionales de la salud, auxiliares, administradores de organizaciones, representantes legales, proveedores y personas que se comuniquen con Conciencia Sánate/Elynthis.",
    },
  ],
  articles: [
    {
      id: "identificacion-responsable",
      number: "Artículo 1",
      title: "Identificación del Responsable y canales de contacto",
      blocks: [
        {
          type: "p",
          text: "Para los datos personales tratados directamente por el sitio web Conciencia Sánate, las cuentas de usuario y las funcionalidades propias de Elynthis, el Responsable del Tratamiento es:",
        },
        {
          type: "ul",
          items: [
            `Responsable: ${LEGAL_ENTITY.controllerName}, salvo que una persona jurídica sea formalmente constituida y comunicada mediante actualización de esta Política.`,
            `Domicilio: ${LEGAL_ENTITY.domicile}.`,
            `Dirección de notificaciones: ${LEGAL_ENTITY.noticeAddress}.`,
            `Teléfono: ${LEGAL_ENTITY.phone}.`,
            `Privacidad y protección de datos: ${LEGAL_CONTACTS.privacy}.`,
            `Soporte: ${LEGAL_CONTACTS.support}.`,
            `Seguridad: ${LEGAL_CONTACTS.security}.`,
            `Asuntos jurídicos: ${LEGAL_CONTACTS.legal}.`,
            `Sitio web: ${LEGAL_ENTITY.siteUrl}.`,
          ],
        },
        {
          type: "p",
          text: "Cuando un profesional de la salud, consultorio, institución u organización utiliza Elynthis para prestar servicios a sus propios pacientes, dicho profesional u organización generalmente actúa como Responsable del Tratamiento de la historia clínica y de los datos derivados de la atención. En esos casos, Conciencia Sánate/Elynthis actúa como Encargado tecnológico, siguiendo las instrucciones del Responsable, los acuerdos aplicables y la normativa vigente.",
        },
        {
          type: "p",
          text: "Esta distribución de funciones no limita los derechos de los Titulares. Cuando una solicitud corresponda a un profesional u organización Responsable, Elynthis podrá remitirla o coordinar su gestión con esa parte.",
        },
      ],
    },
    {
      id: "marco-normativo",
      number: "Artículo 2",
      title: "Marco normativo y principios",
      blocks: [
        {
          type: "p",
          text: "El tratamiento se realiza conforme a la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 compilado en el Decreto 1074 de 2015, la Ley 1266 de 2008 cuando resulte aplicable, las normas colombianas sobre historia clínica y atención en salud, y las disposiciones que las modifiquen o sustituyan.",
        },
        {
          type: "p",
          text: "Para las funcionalidades que utilizan APIs de Google también se observan la Google API Services User Data Policy, la Google Workspace User Data and Developer Policy y sus requisitos de Limited Use.",
        },
        {
          type: "p",
          text: "El tratamiento se rige por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad, confidencialidad, necesidad, minimización y responsabilidad demostrada.",
        },
      ],
    },
    {
      id: "datos-que-tratamos",
      number: "Artículo 3",
      title: "Datos que podemos tratar",
      blocks: [
        {
          type: "p",
          text: "Elynthis trata únicamente los datos necesarios para las finalidades informadas y las funcionalidades habilitadas.",
        },
        {
          type: "table",
          headers: ["Categoría", "Ejemplos"],
          rows: [
            [
              "Identificación y cuenta",
              "Nombre, apellidos, tipo y número de documento, correo, teléfono, fotografía de perfil, identificador interno, rol y organización",
            ],
            [
              "Autenticación",
              "Hashes de credenciales, identificadores de sesión, tokens de recuperación, datos de inicio de sesión y señales de seguridad",
            ],
            [
              "Datos profesionales",
              "Profesión, especialidad, registro profesional, RETHUS cuando corresponda, firma, organización y datos de facturación",
            ],
            [
              "Datos clínicos y sensibles",
              "Motivo de consulta, antecedentes, síntomas, evaluaciones, diagnósticos, notas, evoluciones, formulación, planes, consentimientos, archivos y documentos de historia clínica",
            ],
            [
              "Agenda y teleconsulta",
              "Fecha, hora, zona horaria, estado de cita, profesional, paciente, recordatorios, enlace de reunión y metadatos técnicos necesarios",
            ],
            [
              "Documentos y evidencias",
              "Consentimientos, firmas electrónicas, PDFs, archivos adjuntos, marcas de tiempo y evidencias de aceptación",
            ],
            [
              "Facturación y cumplimiento",
              "Plan contratado, transacciones, estado de pago, facturas, convenios, RIPS y datos tributarios o sanitarios requeridos",
            ],
            [
              "Soporte y comunicaciones",
              "Mensajes, solicitudes, archivos aportados al soporte, respuestas, preferencias y comunicaciones transaccionales",
            ],
            [
              "Datos técnicos",
              "Dirección IP, navegador, sistema operativo, dispositivo, idioma, zona horaria, logs, eventos de seguridad, cookies y telemetría necesaria",
            ],
            [
              "Ubicación aproximada",
              "País, región o ciudad inferidos de la IP para seguridad, idioma, zona horaria o prevención de fraude; no se obtiene geolocalización precisa salvo información y autorización separadas",
            ],
            [
              "Integraciones",
              "Identificadores, permisos, tokens y datos estrictamente necesarios para la integración opcional autorizada por el Usuario",
            ],
            [
              "Inteligencia artificial",
              "Instrucciones y contenido enviado voluntariamente a una función asistiva, junto con su resultado, aplicando minimización y exclusiones descritas en esta Política",
            ],
          ],
        },
        {
          type: "note",
          text: "No solicitamos datos que no sean necesarios para una funcionalidad disponible. Los Usuarios no deben incorporar en campos libres información sensible que no sea pertinente para la atención o gestión autorizada.",
        },
      ],
    },
    {
      id: "finalidades",
      number: "Artículo 4",
      title: "Finalidades del tratamiento",
      blocks: [
        {
          type: "ol",
          items: [
            "Crear, autenticar, proteger y administrar cuentas.",
            "Verificar identidad, rol, permisos y pertenencia a una organización.",
            "Prestar las funcionalidades de Elynthis, incluidas historia clínica electrónica, agenda, teleconsulta, documentos, consentimientos, firma, seguimiento, facturación, RIPS e interoperabilidad autorizada.",
            "Permitir que profesionales e instituciones presten y documenten servicios de salud.",
            "Sincronizar, cuando el Usuario lo active, citas con Google Calendar u otros calendarios compatibles.",
            "Enviar comunicaciones transaccionales, recordatorios, alertas de seguridad y mensajes relacionados con el servicio.",
            "Procesar pagos y administrar suscripciones mediante proveedores especializados, sin almacenar directamente los datos completos de tarjetas cuando el pago sea procesado por un tercero.",
            "Prestar soporte, responder solicitudes y solucionar errores.",
            "Prevenir fraude, abuso, accesos no autorizados e incidentes de seguridad.",
            "Mantener logs, auditoría, integridad, continuidad y recuperación del servicio.",
            "Cumplir obligaciones legales, sanitarias, contables, tributarias, contractuales y requerimientos de autoridad competente.",
            "Elaborar métricas agregadas o anonimizadas para evaluar funcionamiento y calidad, sin intentar reidentificar a las personas.",
            "Operar funciones asistivas de inteligencia artificial únicamente cuando estén habilitadas, sean visibles para el Usuario y se sometan a supervisión humana.",
          ],
        },
        {
          type: "callout",
          tone: "legal",
          title: "Prohibiciones",
          text: "No vendemos datos personales ni los utilizamos para determinar solvencia, conceder crédito, crear bases de datos comerciales, realizar vigilancia, vender audiencias o efectuar publicidad personalizada basada en datos clínicos o datos obtenidos de Google.",
        },
      ],
    },
    {
      id: "autorizacion-bases",
      number: "Artículo 5",
      title: "Autorización y bases que permiten el tratamiento",
      blocks: [
        {
          type: "ul",
          items: [
            "Autorización previa, expresa e informada del Titular.",
            "Consentimiento informado para datos sensibles o atención en salud.",
            "Ejecución de una relación contractual o de medidas precontractuales.",
            "Cumplimiento de obligaciones legales o regulatorias.",
            "Atención de requerimientos de autoridad competente.",
            "Protección de intereses vitales o atención de urgencias, cuando legalmente proceda.",
            "Finalidades legítimas de seguridad y prevención de fraude compatibles con los derechos del Titular.",
            "Otras excepciones expresamente previstas por la ley.",
          ],
        },
        {
          type: "p",
          text: "El acceso opcional a Google Calendar requiere una acción afirmativa del Usuario y puede ser revocado sin impedir el uso de las funciones de Elynthis que no dependan de dicha integración.",
        },
      ],
    },
    {
      id: "datos-sensibles-menores",
      number: "Artículo 6",
      title: "Datos sensibles, datos clínicos y menores de edad",
      blocks: [
        {
          type: "p",
          text: "Los datos de salud y salud mental son sensibles y reciben protección reforzada. El Titular será informado de que no está obligado a autorizar su tratamiento salvo cuando resulte indispensable para la prestación solicitada o exista una excepción legal.",
        },
        {
          type: "p",
          text: "Los datos clínicos son reservados. Su acceso se limita al Titular, al profesional tratante, al personal autorizado por necesidad de conocer y a terceros autorizados o habilitados por la ley. Los administradores organizacionales no deben acceder al contenido clínico salvo que su función, autorización y marco jurídico lo permitan expresamente.",
        },
        {
          type: "p",
          text: "La atención o registro de menores de edad debe respetar su interés superior, sus derechos prevalentes y la autorización de sus representantes cuando corresponda. Elynthis no habilita por regla general cuentas autónomas para menores sin un flujo de consentimiento y representación apropiado. El profesional o institución Responsable debe verificar la legitimidad de la autorización y aplicar las reglas clínicas correspondientes.",
        },
      ],
    },
    {
      id: "google-apis",
      number: "Artículo 7",
      title: "Tratamiento de datos obtenidos mediante APIs de Google",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "9.1 Carácter opcional y consentimiento",
          text: "Google Sign-In y Google Calendar son integraciones diferenciadas. Antes de solicitar permisos de Google Calendar, Elynthis muestra una explicación clara de los datos que solicita, la finalidad, las acciones que podrá realizar y la forma de revocar el acceso. La conexión se inicia únicamente después de una acción afirmativa del Usuario. El Usuario puede utilizar Google Sign-In sin autorizar automáticamente Google Calendar.",
        },
        {
          type: "p",
          text: "9.2 Datos de Google Sign-In. Cuando el Usuario elige “Continuar con Google”, Elynthis puede recibir, de acuerdo con los permisos openid, email y profile: identificador único de la cuenta de Google; nombre y apellidos; correo electrónico; y fotografía de perfil, cuando esté disponible. Estos datos se usan exclusivamente para autenticar, crear o vincular la cuenta, mostrar información básica de perfil, prevenir duplicados y proteger el acceso. Google Sign-In no concede por sí solo acceso a Gmail, Google Drive, contactos ni Google Calendar.",
        },
        {
          type: "p",
          text: "9.3 Datos de Google Calendar. Cuando el Usuario conecta voluntariamente Google Calendar, Elynthis puede acceder, dentro de los permisos exhibidos por Google, a: identificador del calendario seleccionado; identificador y estado de eventos; título, descripción y ubicación; fecha y hora de inicio y finalización; zona horaria; recurrencia, recordatorios y disponibilidad; asistentes y sus correos únicamente cuando formen parte del evento que el Usuario crea, selecciona o sincroniza; enlace de videoconferencia o Google Meet cuando el Usuario lo solicite; y metadatos técnicos necesarios para crear, consultar, actualizar, cancelar o evitar duplicados.",
        },
        {
          type: "ul",
          items: [
            "Mostrar disponibilidad necesaria para gestionar la agenda.",
            "Crear en el calendario elegido las citas que el Usuario ordene sincronizar.",
            "Mantener coherencia entre la cita de Elynthis y su evento correspondiente.",
            "Actualizar o cancelar el evento cuando el Usuario ejecute esa acción.",
            "Prevenir conflictos y duplicados de agenda.",
            "Solucionar errores de sincronización y proteger la integración.",
          ],
        },
        {
          type: "p",
          text: "Elynthis no accede a Gmail, Google Drive, Google Contacts ni otros productos de Google mediante la integración de Calendar. Si en el futuro se incorpora una API o finalidad diferente, esta Política y la divulgación previa al consentimiento serán actualizadas antes de solicitar el nuevo permiso.",
        },
        {
          type: "p",
          text: "9.4 Acciones realizadas por cuenta del Usuario. Elynthis solo crea, consulta, actualiza o elimina eventos de Google Calendar como consecuencia de una acción del Usuario o de una regla de sincronización que este haya activado y pueda desactivar. La aplicación no envía correos, modifica archivos ni actúa en otros servicios de Google mediante los permisos de Calendar.",
        },
        {
          type: "p",
          text: "9.5 Almacenamiento y seguridad. Elynthis puede conservar el identificador de la cuenta de Google, el correo vinculado, el calendario seleccionado, identificadores de eventos, estados de sincronización y tokens OAuth mientras la integración permanezca activa. Los tokens OAuth deben almacenarse cifrados en reposo, disponibles únicamente en componentes de servidor autorizados y transmitirse mediante HTTPS/TLS. No se exponen en código cliente, URLs públicas, logs, herramientas analíticas ni mensajes de error. Elynthis evita incluir diagnósticos, notas clínicas u otra información sensible innecesaria en eventos de Calendar.",
        },
        {
          type: "p",
          text: "9.6 Compartición, transferencias y acceso humano. Los datos obtenidos mediante APIs de Google no se venden, alquilan ni comparten con plataformas publicitarias, corredores de datos, revendedores de información o entidades que determinen solvencia o concedan crédito. El personal de Conciencia Sánate/Elynthis no accede al contenido de datos de Google salvo consentimiento explícito del Usuario para soporte, investigación de incidentes, datos agregados y anonimizados, u obligación legal.",
        },
        {
          type: "callout",
          tone: "legal",
          title: "9.7 Limited Use y prohibición de entrenamiento de IA",
          text: "El uso y la transferencia de información recibida de las APIs de Google se realizan conforme a la Google API Services User Data Policy, incluidos los requisitos de Limited Use, y cuando corresponda a la Google Workspace User Data and Developer Policy. Elynthis no utiliza, transfiere ni permite que datos obtenidos mediante Google Workspace APIs se empleen para desarrollar, mejorar o entrenar modelos generalizados o no personalizados de inteligencia artificial. Los datos de Google Sign-In o Google Calendar no se envían a OpenAI ni a otros proveedores de IA, ni se usan para publicidad, retargeting, perfiles comerciales, vigilancia o bases de datos comerciales.",
        },
        {
          type: "p",
          text: "9.8 Desconexión, revocación y eliminación. El Usuario puede desconectar Google Calendar desde la configuración de integraciones de Elynthis. Al hacerlo se invalida o revoca el acceso, se eliminan los tokens OAuth de sistemas activos, se detienen nuevas sincronizaciones y se eliminan mapeos y datos derivados innecesarios, normalmente dentro de treinta (30) días calendario. La desconexión no elimina automáticamente los eventos ya creados en Google Calendar. También puede revocar el acceso en https://myaccount.google.com/connections o solicitar eliminación escribiendo a privacidad@concienciasanate.com.",
        },
      ],
    },
    {
      id: "inteligencia-artificial",
      number: "Artículo 8",
      title: "Inteligencia artificial y decisiones automatizadas",
      blocks: [
        {
          type: "p",
          text: "Las funciones asistidas por inteligencia artificial, cuando existan, tienen finalidades de apoyo, como organización o asistencia de redacción. No sustituyen el juicio del profesional ni deben tomar decisiones clínicas o jurídicas autónomas sobre una persona.",
        },
        {
          type: "p",
          text: "El Usuario decide cuándo activar estas funciones y debe revisar cualquier resultado antes de incorporarlo a un documento o historia clínica. Se aplican minimización, control de acceso y separación de finalidades.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Exclusión de datos de Google",
          text: "Los datos obtenidos mediante Google APIs están excluidos de estos flujos y no se envían a proveedores de inteligencia artificial.",
        },
      ],
    },
    {
      id: "cookies-analitica",
      number: "Artículo 9",
      title: "Cookies, analítica y datos técnicos",
      blocks: [
        {
          type: "ul",
          items: [
            "Esenciales: autenticación, seguridad, preferencias de sesión y funcionamiento.",
            "De preferencias: idioma, zona horaria y configuración.",
            "Analíticas o de rendimiento: únicamente cuando estén habilitadas y exista la base o autorización correspondiente.",
            "De seguridad: prevención de abuso, limitación de tasa y protección de infraestructura.",
          ],
        },
        {
          type: "p",
          text: "Las cookies no esenciales se gestionan mediante información y controles de consentimiento cuando sean exigibles. Los datos obtenidos mediante APIs de Google no se emplean para publicidad personalizada ni se incorporan a perfiles publicitarios. El detalle opera bajo la Política de Cookies.",
        },
      ],
    },
    {
      id: "encargados-proveedores",
      number: "Artículo 10",
      title: "Encargados, proveedores y transferencias internacionales",
      blocks: [
        {
          type: "p",
          text: "Elynthis puede apoyarse en proveedores tecnológicos sujetos a contratos, instrucciones, controles de acceso y deberes de confidencialidad.",
        },
        {
          type: "table",
          headers: ["Proveedor o categoría", "Finalidad"],
          rows: THIRD_PARTY_SERVICES.map((s) => [s.name, s.purpose]),
        },
        {
          type: "p",
          text: "Algunos proveedores pueden tratar información fuera de Colombia. Las transmisiones o transferencias internacionales se realizan conforme a la normativa aplicable, con finalidades limitadas, medidas de seguridad y acuerdos apropiados. Cada proveedor también puede actuar como Responsable independiente respecto de ciertos datos bajo sus propios términos (por ejemplo, Google o Stripe).",
        },
      ],
    },
    {
      id: "seguridad-informacion",
      number: "Artículo 11",
      title: "Seguridad de la información",
      blocks: [
        {
          type: "ul",
          items: [
            "HTTPS/TLS para datos en tránsito.",
            "Cifrado en reposo de datos y secretos que lo requieran.",
            "Almacenamiento cifrado y acceso restringido a tokens OAuth.",
            "Autenticación, expiración de sesiones y controles por rol.",
            "Segregación por organización y políticas de seguridad a nivel de datos.",
            "Mínimo privilegio y necesidad de conocer.",
            "Gestión de secretos fuera del código cliente.",
            "Registros de auditoría y monitoreo de eventos de seguridad.",
            "Respaldos, continuidad y procedimientos de recuperación.",
            "Revisión de dependencias, cambios y vulnerabilidades.",
            "Medidas para reducir la presencia de datos clínicos o secretos en logs.",
            "Procedimientos de respuesta y notificación de incidentes.",
          ],
        },
        {
          type: "note",
          title: "Marcos de referencia (no certificaciones)",
          text: "Algunos controles pueden inspirarse en buenas prácticas de ISO/IEC 27001, ISO/IEC 27701 o salvaguardas técnicas HIPAA como referencia. Ello no constituye declaración de certificación formal por este documento.",
        },
        {
          type: "p",
          text: `Ningún sistema es absolutamente invulnerable. Los Usuarios deben proteger sus credenciales, dispositivos y sesiones, y reportar sospechas a ${LEGAL_CONTACTS.security}.`,
        },
      ],
    },
    {
      id: "conservacion-eliminacion",
      number: "Artículo 12",
      title: "Conservación y eliminación",
      blocks: [
        {
          type: "p",
          text: "Los datos se conservan únicamente durante el tiempo necesario para las finalidades informadas y los plazos exigidos por la ley.",
        },
        {
          type: "table",
          headers: ["Categoría", "Criterio de conservación"],
          rows: [
            [
              "Historia clínica y documentos clínicos",
              "Mínimo quince (15) años desde la última atención, conforme a la Resolución 839 de 2017, o el término que establezca la norma que la modifique o sustituya",
            ],
            [
              "Datos de cuenta no clínicos",
              "Mientras la cuenta esté activa y hasta treinta (30) días después de una solicitud de supresión verificada, salvo obligación, controversia o necesidad de seguridad",
            ],
            [
              "Datos y tokens de Google",
              "Mientras la integración esté activa; los tokens se eliminan o invalidan al desconectar y los datos derivados innecesarios se eliminan normalmente dentro de treinta (30) días calendario",
            ],
            [
              "Consentimientos y firmas",
              "Durante el plazo necesario para acreditar la autorización y cumplir obligaciones legales o contractuales",
            ],
            [
              "Facturación, RIPS y registros contables",
              "Durante los plazos tributarios, sanitarios o contractuales aplicables",
            ],
            [
              "Logs de seguridad y auditoría",
              "Por un periodo proporcional al riesgo, investigación y obligaciones de trazabilidad",
            ],
            [
              "Solicitudes de soporte",
              "Durante el tiempo necesario para resolver, documentar y proteger frente a reclamaciones",
            ],
            [
              "Respaldos",
              "Hasta completar el ciclo técnico de rotación definido; permanecen restringidos y no se usan para finalidades ordinarias",
            ],
          ],
        },
        {
          type: "callout",
          tone: "legal",
          title: "Retención de historia clínica",
          text: "La eliminación de una cuenta no implica destruir una historia clínica antes del vencimiento de su retención legal. Cuando proceda, los datos se eliminan, anonimizan o bloquean mediante procedimientos seguros.",
        },
      ],
    },
    {
      id: "derechos-titulares",
      number: "Artículo 13",
      title: "Derechos de los Titulares",
      blocks: [
        {
          type: "ul",
          items: [
            "Conocer, acceder, actualizar y rectificar sus datos.",
            "Solicitar prueba de la autorización, salvo excepción legal.",
            "Conocer el uso dado a sus datos.",
            "Presentar consultas y reclamos.",
            "Revocar la autorización o solicitar la supresión cuando sea procedente.",
            "Solicitar copia o portabilidad cuando resulte aplicable.",
            "Acudir ante la Superintendencia de Industria y Comercio después de agotar el trámite correspondiente.",
            "Retirar el consentimiento para tratamientos opcionales sin afectar la licitud del tratamiento previo.",
            "Desconectar integraciones y revocar permisos de Google.",
          ],
        },
        {
          type: "p",
          text: "La supresión o revocación puede no proceder respecto de información que deba conservarse por ley, contrato vigente, seguridad, defensa de derechos o custodia de historia clínica.",
        },
      ],
    },
    {
      id: "procedimiento-consultas",
      number: "Artículo 14",
      title: "Procedimiento para consultas, reclamos, corrección y supresión",
      blocks: [
        {
          type: "p",
          text: `Las solicitudes pueden enviarse a ${LEGAL_CONTACTS.privacy} e incluir: nombre completo; documento o mecanismo razonable de verificación de identidad; correo asociado a la cuenta; descripción clara de la solicitud; datos o documentos que faciliten su gestión; y calidad en la que actúa, si representa a otra persona.`,
        },
        {
          type: "ul",
          items: [
            "Consultas: respuesta dentro de diez (10) días hábiles; prórroga informada de hasta cinco (5) días hábiles adicionales.",
            "Reclamos: atención dentro de quince (15) días hábiles siguientes al día posterior a su recepción completa; prórroga informada de hasta ocho (8) días hábiles adicionales.",
            "Solicitud incompleta: se pedirá subsanación dentro de cinco (5) días; si transcurren dos (2) meses sin respuesta, se entenderá desistida.",
          ],
        },
        {
          type: "p",
          text: "Cuando Elynthis sea Encargado de un profesional u organización, podrá trasladar o coordinar la solicitud con el Responsable clínico sin abandonar sus propios deberes.",
        },
      ],
    },
    {
      id: "eliminacion-cuenta",
      number: "Artículo 15",
      title: "Eliminación de cuenta y revocación de integraciones",
      blocks: [
        {
          type: "p",
          text: `El Usuario puede solicitar la eliminación desde la configuración de la cuenta, cuando la función esté disponible, o escribiendo a ${LEGAL_CONTACTS.privacy} o ${LEGAL_CONTACTS.support}.`,
        },
        {
          type: "p",
          text: "La eliminación comprende credenciales, sesiones, preferencias, tokens de integraciones voluntarias y otros datos no sujetos a conservación obligatoria. Las historias clínicas, consentimientos, registros de facturación, RIPS y evidencias legalmente exigidas pueden permanecer bloqueadas y protegidas durante el término correspondiente.",
        },
        {
          type: "p",
          text: `La información detallada está en ${LEGAL_ENTITY.siteUrl}${DELETE_ACCOUNT_PATH}.`,
        },
      ],
    },
    {
      id: "comunicaciones",
      number: "Artículo 16",
      title: "Comunicaciones",
      blocks: [
        {
          type: "p",
          text: "Las comunicaciones necesarias para la cuenta, citas, seguridad, facturación, soporte o cambios relevantes del servicio se consideran transaccionales. Las comunicaciones comerciales o educativas que requieran autorización ofrecerán un mecanismo para retirar el consentimiento. El retiro de comunicaciones comerciales no impide el envío de avisos necesarios para la prestación, seguridad o cumplimiento.",
        },
      ],
    },
    {
      id: "incidentes",
      number: "Artículo 17",
      title: "Incidentes de seguridad",
      blocks: [
        {
          type: "p",
          text: "Ante un incidente que pueda comprometer datos personales, Elynthis aplicará procedimientos de detección, contención, investigación, recuperación y documentación. Cuando la ley o el nivel de riesgo lo exijan, se notificará a los Responsables, Titulares y autoridades competentes por los canales y dentro de los términos aplicables.",
        },
      ],
    },
    {
      id: "enlaces-terceros",
      number: "Artículo 18",
      title: "Enlaces y servicios de terceros",
      blocks: [
        {
          type: "p",
          text: "La Plataforma puede contener enlaces a servicios externos. El tratamiento efectuado directamente por esos terceros se rige por sus propias políticas. Esto no autoriza a Elynthis a transferir datos de Google ni datos clínicos fuera de las finalidades expresamente indicadas.",
        },
      ],
    },
    {
      id: "cambios-politica",
      number: "Artículo 19",
      title: "Cambios de esta Política",
      blocks: [
        {
          type: "p",
          text: "La Política puede actualizarse por cambios normativos, operativos, tecnológicos o de finalidades. La versión, fecha de actualización y entrada en vigor se publicarán en esta página. Si un cambio modifica sustancialmente el uso de datos personales o de Google, se informará de manera destacada y, cuando corresponda, se solicitará una nueva autorización.",
        },
      ],
    },
    {
      id: "aceptacion-relacion",
      number: "Artículo 20",
      title: "Aceptación y relación con otros documentos",
      blocks: [
        {
          type: "p",
          text: "Esta Política debe leerse junto con los Términos y Condiciones, la Política de Seguridad, la Política de Cookies, la Política de Datos Sensibles, la Política de Eliminación de Cuenta, los consentimientos clínicos y los acuerdos de tratamiento aplicables. Su publicación no sustituye la autorización de tratamiento de datos ni el consentimiento informado clínico cuando sean legalmente requeridos.",
        },
      ],
    },
  ],
  annexes: [
    {
      id: "referencias-normativas",
      number: "Anexo A",
      title: "Referencias normativas y de plataforma",
      blocks: [
        {
          type: "ul",
          items: [
            "Ley Estatutaria 1581 de 2012: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981",
            "Decreto 1377 de 2013: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646",
            "Resolución 839 de 2017: https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No%20839%20de%202017.pdf",
            "Google API Services User Data Policy: https://developers.google.com/terms/api-services-user-data-policy",
            "Google Workspace User Data and Developer Policy: https://developers.google.com/workspace/workspace-api-user-data-developer-policy",
            "Gestión de conexiones de la Cuenta de Google: https://myaccount.google.com/connections",
            `Política canónica: ${LEGAL_ENTITY.siteUrl}${PRIVACY_PATH}`,
            `Eliminación de cuenta: ${LEGAL_ENTITY.siteUrl}${DELETE_ACCOUNT_PATH}`,
          ],
        },
      ],
    },
  ],
};
