import { LEGAL_CONTACTS, LEGAL_ENTITY, THIRD_PARTY_SERVICES } from "@/lib/legal/constants";
import type { LegalDocument } from "@/lib/legal/types";

export const terminosDocument: LegalDocument = {
  id: "terminos",
  path: "/Terminos-&-Condiciones",
  title: "Términos y Condiciones de Uso",
  shortTitle: "Términos y Condiciones",
  summary:
    "Condiciones contractuales del uso de Conciencia Sánate y de la suite Elynthis (Clinical, Care y Lite).",
  description:
    "Términos y Condiciones de uso de Conciencia Sánate y Elynthis: cuentas, responsabilidades de profesionales y pacientes, servicios de terceros, propiedad intelectual y jurisdicción colombiana.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "contractual",
  keywords: [
    "términos y condiciones",
    "Elynthis",
    "Conciencia Sánate",
    "historia clínica electrónica",
    "teleconsulta",
    "Colombia",
  ],
  relatedIds: [
    "privacidad",
    "cookies",
    "aviso-legal",
    "seguridad",
    "proteccion-datos",
    "cumplimiento",
  ],
  definitions: [
    {
      term: "Plataforma",
      definition:
        "El sitio web concienciasanate.com, las aplicaciones asociadas y la suite de software Elynthis (Clinical, Care y Lite), incluyendo APIs, paneles administrativos y módulos móviles.",
    },
    {
      term: "Elynthis",
      definition:
        "Software clínico y de gestión de atención en salud desarrollado por Conciencia Sánate, orientado a profesionales, instituciones y pacientes en Colombia.",
    },
    {
      term: "Usuario",
      definition:
        "Persona natural o jurídica que accede o utiliza la Plataforma en cualquier calidad: visitante, paciente, profesional o administrador.",
    },
    {
      term: "Profesional",
      definition:
        "Prestador de servicios de salud o bienestar (psicología, medicina, terapias alternativas u otros habilitados) que utiliza Elynthis para gestionar agenda, historia clínica, teleconsulta, consentimientos, facturación, RIPS u otros módulos.",
    },
    {
      term: "Paciente",
      definition:
        "Persona natural que recibe o gestiona atención a través de la Plataforma, directamente o mediada por un Profesional o institución.",
    },
    {
      term: "Administrador",
      definition:
        "Usuario con privilegios de configuración, gestión de usuarios, auditoría o parámetros institucionales dentro de una cuenta Elynthis.",
    },
    {
      term: "Visitante",
      definition:
        "Persona que navega contenidos públicos de Conciencia Sánate sin autenticarse.",
    },
    {
      term: "Historia Clínica Electrónica (HCE)",
      definition:
        "Registro digital de la atención en salud, sujeto a reserva legal conforme a la Ley 23 de 1981, la Resolución 1995 de 1999, la Resolución 839 de 2017 y demás normas aplicables.",
    },
    {
      term: "Contenido del Usuario",
      definition:
        "Datos, textos, archivos, firmas, notas clínicas, consentimientos, imágenes y cualquier información cargada o generada por Usuarios en la Plataforma.",
    },
    {
      term: "Servicios de Terceros",
      definition:
        "Proveedores tecnológicos integrados a la Plataforma (entre otros, Google, Apple, Cloudflare, Supabase, Resend, OpenAI, Google Calendar, Apple Calendar y Stripe).",
    },
  ],
  scope: [
    {
      type: "p",
      text: `Estos Términos y Condiciones regulan el acceso y uso de ${LEGAL_ENTITY.tradeName} y de ${LEGAL_ENTITY.softwareName} (productos ${LEGAL_ENTITY.products.join(", ")}) por parte de Visitantes, Pacientes, Profesionales y Administradores en la República de Colombia.`,
    },
    {
      type: "p",
      text: "La Plataforma ofrece, según el plan y la configuración habilitada, servicios de psicología, medicina, terapias alternativas, historia clínica electrónica, agenda médica, teleconsulta, gestión documental, consentimientos, firma electrónica, facturación, RIPS, interoperabilidad y aplicaciones móviles.",
    },
    {
      type: "note",
      title: "Naturaleza del servicio",
      text: "Elynthis es una herramienta tecnológica de apoyo a la prestación y gestión de servicios de salud y bienestar. No sustituye el criterio clínico del Profesional ni constituye, por sí misma, una entidad prestadora de salud, salvo que se indique expresamente lo contrario en un contrato institucional específico.",
    },
  ],
  articles: [
    {
      id: "aceptacion",
      number: "Artículo 1",
      title: "Aceptación",
      blocks: [
        {
          type: "p",
          text: "Al acceder, registrarse, autenticarse o utilizar cualquier módulo de la Plataforma, el Usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones, la Política de Privacidad, la Política de Cookies y los consentimientos aplicables a su rol.",
        },
        {
          type: "p",
          text: "Si el Usuario no está de acuerdo, debe abstenerse de usar la Plataforma y, de ser el caso, solicitar la eliminación de su cuenta conforme a la Política de Eliminación de Cuenta.",
        },
        {
          type: "ul",
          items: [
            "La aceptación puede realizarse mediante casilla de verificación, firma electrónica, uso continuado tras notificación de actualización, o cualquier mecanismo equivalente habilitado en Elynthis.",
            "Los Profesionales e instituciones pueden estar sujetos a condiciones comerciales adicionales (órdenes de servicio, planes, SLA o acuerdos de tratamiento de datos).",
            "El uso de módulos clínicos implica aceptación de obligaciones especiales de confidencialidad, ética profesional y protección de datos sensibles.",
          ],
        },
      ],
    },
    {
      id: "objeto",
      number: "Artículo 2",
      title: "Objeto",
      blocks: [
        {
          type: "p",
          text: "El objeto de estos Términos es establecer las reglas de uso de la Plataforma, la licencia de software, las responsabilidades de las partes, las limitaciones aplicables y el marco de jurisdicción colombiana.",
        },
        {
          type: "ol",
          items: [
            "Facilitar la operación digital de atención y gestión clínica a través de Elynthis.",
            "Definir derechos y deberes de Visitantes, Pacientes, Profesionales y Administradores.",
            "Regular la integración con Servicios de Terceros necesarios para autenticación, infraestructura, comunicaciones, IA asistiva, calendarios y pagos.",
            "Preservar la reserva de la historia clínica y el cumplimiento de la normativa colombiana de salud y protección de datos.",
          ],
        },
      ],
    },
    {
      id: "usuarios",
      number: "Artículo 3",
      title: "Usuarios",
      blocks: [
        {
          type: "p",
          text: "La Plataforma distingue roles con permisos y obligaciones diferenciadas. El Usuario es responsable de utilizar únicamente el rol que le corresponde y de no intentar elevar privilegios ni acceder a datos ajenos.",
        },
        {
          type: "table",
          headers: ["Rol", "Descripción principal", "Obligaciones clave"],
          rows: [
            [
              "Visitante",
              "Consulta contenidos públicos y materiales educativos",
              "No burlar medidas técnicas; no recopilar datos de forma automatizada no autorizada",
            ],
            [
              "Paciente",
              "Gestiona citas, documentos, teleconsulta y acceso a su información",
              "Proporcionar datos veraces; custodiar credenciales; respetar canales clínicos",
            ],
            [
              "Profesional",
              "Opera agenda, HCE, consentimientos, teleconsulta, RIPS y facturación",
              "Mantener habilitación/ética profesional; reserva de historia clínica; uso lícito",
            ],
            [
              "Administrador",
              "Configura usuarios, permisos, auditoría e integraciones institucionales",
              "Principio de mínimo privilegio; control de accesos; reportar incidentes",
            ],
          ],
        },
      ],
    },
    {
      id: "profesionales",
      number: "Artículo 4",
      title: "Profesionales",
      blocks: [
        {
          type: "p",
          text: "El Profesional declara contar con la formación, autorización, registro o habilitación exigida por la normativa colombiana y por su profesión para prestar los servicios que registre o gestione en Elynthis.",
        },
        {
          type: "ul",
          items: [
            "Es el único responsable del acto clínico, del diagnóstico, del tratamiento y del contenido de la historia clínica que elabora.",
            "Debe observar la Ley 23 de 1981, la Ley Estatutaria 1751 de 2015 y las normas de historia clínica e interoperabilidad aplicables.",
            "No puede usar Elynthis para ejercer sin título, suplantar identidad profesional ni compartir accesos con terceros no autorizados.",
            "Debe obtener y documentar los consentimientos informados requeridos (incluyendo teleconsulta y atención psicológica cuando corresponda).",
            "Es responsable de la exactitud de RIPS, facturación y datos clínicos que registre o exporte.",
          ],
        },
        {
          type: "callout",
          tone: "legal",
          title: "Reserva de la historia clínica",
          text: "La historia clínica es un documento privado, sometido a reserva, al que solo pueden acceder el paciente, el equipo de salud tratante y las personas o autoridades legitimadas por la ley. El Profesional y el Administrador deben configurar y usar Elynthis respetando ese principio.",
        },
      ],
    },
    {
      id: "pacientes",
      number: "Artículo 5",
      title: "Pacientes",
      blocks: [
        {
          type: "p",
          text: "El Paciente utiliza la Plataforma para facilitar su atención, no como sustituto de una emergencia médica o de salud mental. En urgencias debe acudir a servicios de emergencia o líneas oficiales de atención.",
        },
        {
          type: "ul",
          items: [
            "Debe suministrar información veraz, actualizada y suficiente para la atención.",
            "Puede ejercer derechos sobre sus datos personales y solicitar acceso a su historia clínica conforme a la ley.",
            "Es responsable del uso de dispositivos, red y entorno desde los cuales realiza teleconsulta.",
            "No debe grabar, redistribuir ni publicar sesiones o documentos clínicos sin autorización legal o del Profesional cuando corresponda.",
          ],
        },
      ],
    },
    {
      id: "administradores",
      number: "Artículo 6",
      title: "Administradores",
      blocks: [
        {
          type: "p",
          text: "El Administrador actúa como gestor de la cuenta institucional o del consultorio digital. Sus actos se entienden realizados en nombre de la organización o del Profesional titular de la cuenta, según configuración.",
        },
        {
          type: "ul",
          items: [
            "Debe aplicar control de accesos basado en roles y mínimo privilegio.",
            "No puede consultar historias clínicas sin legitimación clínica o legal.",
            "Debe cooperar con auditorías, retención legal y respuesta a incidentes de seguridad.",
            "Es responsable de desactivar usuarios que pierdan vínculo laboral o contractual.",
          ],
        },
      ],
    },
    {
      id: "visitantes",
      number: "Artículo 7",
      title: "Visitantes",
      blocks: [
        {
          type: "p",
          text: "Los contenidos educativos públicos de Conciencia Sánate tienen carácter informativo y de psicoeducación. No constituyen diagnóstico, tratamiento ni relación clínico-asistencial.",
        },
      ],
    },
    {
      id: "creacion-cuenta",
      number: "Artículo 8",
      title: "Creación de cuenta",
      blocks: [
        {
          type: "p",
          text: "Para usar módulos autenticados, el Usuario debe crear una cuenta con datos exactos, un correo válido y, cuando se exija, verificación de identidad o vinculación institucional.",
        },
        {
          type: "ul",
          items: [
            "Una persona natural solo puede mantener las cuentas legítimamente necesarias para su rol.",
            "Las cuentas institucionales pueden requerir dominio, NIT, razón social o configuración de organización.",
            "Conciencia Sánate puede rechazar, suspender o solicitar verificación adicional ante indicios de fraude, usurpación o riesgo clínico/seguridad.",
            "Los menores de edad solo pueden registrarse o ser atendidos conforme a la representación legal y consentimientos exigidos por la ley colombiana.",
          ],
        },
      ],
    },
    {
      id: "autenticacion",
      number: "Artículo 9",
      title: "Autenticación",
      blocks: [
        {
          type: "p",
          text: "La autenticación puede realizarse mediante correo y contraseña, enlaces mágicos, proveedores OAuth (Google/Apple) u otros mecanismos seguros habilitados a través de Supabase u integraciones equivalentes.",
        },
        {
          type: "ul",
          items: [
            "El Usuario debe custodiar credenciales, tokens de sesión y dispositivos autorizados.",
            "Se recomienda autenticación multifactor cuando esté disponible.",
            "Cualquier actividad realizada con las credenciales del Usuario se presume efectuada por él, salvo prueba de compromiso reportado oportunamente.",
            "El Usuario debe notificar de inmediato a seguridad@concienciasanate.com ante sospecha de acceso no autorizado.",
          ],
        },
      ],
    },
    {
      id: "responsabilidades",
      number: "Artículo 10",
      title: "Responsabilidades",
      blocks: [
        {
          type: "p",
          text: "Cada parte asume responsabilidades propias del modelo SaaS clínico:",
        },
        {
          type: "ul",
          items: [
            "Conciencia Sánate: proveer y mantener la Plataforma con diligencia razonable, aplicar controles de seguridad alineados a buenas prácticas (incluyendo referencias técnicas inspiradas en ISO 27001/27701 e HIPAA como marco de control, sin afirmar certificación), y cumplir deberes como encargado o responsable según el caso.",
            "Profesional/Institución: legitimidad del tratamiento clínico, exactitud de registros, consentimientos, ética profesional y cumplimiento sanitario.",
            "Paciente: veracidad de la información aportada y uso adecuado de canales no urgentes.",
            "Administrador: gobierno de accesos y configuración segura de la cuenta.",
          ],
        },
      ],
    },
    {
      id: "uso-permitido",
      number: "Artículo 11",
      title: "Uso permitido",
      blocks: [
        {
          type: "ul",
          items: [
            "Usar la Plataforma para fines lícitos de atención, gestión clínica, educación y administración autorizada.",
            "Registrar y conservar historia clínica, consentimientos, firmas electrónicas y documentos clínicos conforme a la ley.",
            "Utilizar teleconsulta cuando el Profesional determine su idoneidad clínica y técnica.",
            "Exportar o interoperar datos clínicos solo por canales autorizados y con legitimación.",
            "Usar asistencias de IA exclusivamente como apoyo no vinculante, bajo supervisión humana.",
          ],
        },
      ],
    },
    {
      id: "uso-prohibido",
      number: "Artículo 12",
      title: "Uso prohibido",
      blocks: [
        {
          type: "ul",
          items: [
            "Acceder a datos clínicos o personales sin legitimación.",
            "Intentar vulnerar RLS, controles de acceso, cifrado, registros de auditoría o medidas de Cloudflare/Supabase.",
            "Usar la Plataforma para diagnosticar o prescribir sin título o fuera del marco legal.",
            "Cargar malware, realizar scraping abusivo, denegación de servicio o ingeniería inversa no autorizada.",
            "Reutilizar marcas, código, diseños o documentación de Elynthis fuera de la licencia concedida.",
            "Emplear módulos de IA para elaborar perfiles discriminatorios o decisiones clínicas automatizadas sin supervisión.",
            "Compartir cuentas personales o profesionales con terceros no autorizados.",
          ],
        },
      ],
    },
    {
      id: "suspension",
      number: "Artículo 13",
      title: "Suspensión",
      blocks: [
        {
          type: "p",
          text: "Conciencia Sánate puede suspender total o parcialmente el acceso, de forma preventiva o correctiva, cuando exista riesgo razonable de seguridad, ilicitud, afectación a terceros, incumplimiento grave de estos Términos, requerimiento de autoridad o amenaza a la integridad de la historia clínica.",
        },
        {
          type: "p",
          text: "La suspensión busca preservar la confidencialidad, disponibilidad e integridad de la información. Se comunicará al Usuario cuando sea jurídicamente posible y no comprometa investigaciones de seguridad.",
        },
      ],
    },
    {
      id: "terminacion",
      number: "Artículo 14",
      title: "Terminación",
      blocks: [
        {
          type: "p",
          text: "El Usuario puede solicitar la terminación de su cuenta conforme a la Política de Eliminación de Cuenta. Conciencia Sánate puede terminar la relación contractual por incumplimiento grave, imposibilidad técnica/legal sobrevenida o finalización del plan comercial.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Conservación obligatoria",
          text: "La terminación de la cuenta no implica destrucción inmediata de historias clínicas u otros datos que deban conservarse por mandato legal o por instrucción del responsable del tratamiento clínico.",
        },
      ],
    },
    {
      id: "propiedad-intelectual",
      number: "Artículo 15",
      title: "Propiedad intelectual",
      blocks: [
        {
          type: "p",
          text: "Elynthis, Conciencia Sánate, sus marcas, logotipos, interfaces, código fuente, bases de datos no clínicas de producto, documentación, modelos de diseño y materiales corporativos son titularidad de Conciencia Sánate o de sus licenciantes.",
        },
        {
          type: "p",
          text: "El Contenido del Usuario (incluyendo datos clínicos) permanece bajo la titularidad y responsabilidad que corresponda según la ley colombiana y la relación clínica. Conciencia Sánate no reivindica propiedad sobre la historia clínica del paciente.",
        },
      ],
    },
    {
      id: "licencia",
      number: "Artículo 16",
      title: "Licencia",
      blocks: [
        {
          type: "p",
          text: "Se concede al Usuario una licencia limitada, no exclusiva, intransferible, revocable y no sublicenciable para usar la Plataforma conforme al plan contratado y a estos Términos.",
        },
        {
          type: "ul",
          items: [
            "La licencia no implica cesión de derechos de propiedad intelectual.",
            "Queda prohibida la explotación comercial no autorizada del software, APIs o documentación.",
            "Los entornos Clinical, Care y Lite pueden tener módulos y límites distintos según el plan.",
          ],
        },
      ],
    },
    {
      id: "disponibilidad",
      number: "Artículo 17",
      title: "Disponibilidad",
      blocks: [
        {
          type: "p",
          text: "Conciencia Sánate procura alta disponibilidad de Elynthis, sin garantizar operación ininterrumpida. Pueden existir ventanas de mantenimiento, incidentes de terceros (por ejemplo, Cloudflare, Supabase, proveedores de correo o pagos) o eventos de fuerza mayor.",
        },
        {
          type: "p",
          text: "Los Profesionales deben mantener planes de continuidad clínica alternos para situaciones en las que la Plataforma no esté disponible.",
        },
      ],
    },
    {
      id: "mantenimiento",
      number: "Artículo 18",
      title: "Mantenimiento",
      blocks: [
        {
          type: "p",
          text: "Podrán realizarse mantenimientos programados o de emergencia para actualizar seguridad, corregir fallas o desplegar mejoras. Cuando sea razonable, se informará con antelación por canales de la Plataforma o correo.",
        },
      ],
    },
    {
      id: "actualizaciones",
      number: "Artículo 19",
      title: "Actualizaciones",
      blocks: [
        {
          type: "p",
          text: "Elynthis puede actualizarse de forma continua (nuevas funciones, cambios de interfaz, mejoras de interoperabilidad, RDA/IHCE, seguridad y cumplimiento). El uso posterior a una actualización implica aceptación de las condiciones vigentes, salvo que una modificación sustancial requiera consentimiento específico.",
        },
      ],
    },
    {
      id: "servicios-terceros",
      number: "Artículo 20",
      title: "Servicios de terceros",
      blocks: [
        {
          type: "p",
          text: "La Plataforma se apoya en Servicios de Terceros indispensables para su operación. El uso de dichas integraciones puede estar sujeto a términos propios del proveedor. Conciencia Sánate selecciona proveedores con diligencia, sin asumir responsabilidad ilimitada por actos u omisiones de terceros fuera de su control razonable.",
        },
        {
          type: "table",
          headers: ["Proveedor", "Uso en Elynthis / Conciencia Sánate"],
          rows: THIRD_PARTY_SERVICES.map((s) => [s.name, s.purpose]),
        },
        {
          type: "p",
          text: "El Usuario autoriza las integraciones que active voluntariamente (por ejemplo, calendarios o pagos). Algunas integraciones son estructurales (infraestructura, seguridad perimetral, base de datos) y forman parte del servicio.",
        },
      ],
    },
    {
      id: "limitacion-responsabilidad",
      number: "Artículo 21",
      title: "Limitación de responsabilidad",
      blocks: [
        {
          type: "p",
          text: "En la máxima medida permitida por la ley colombiana, Conciencia Sánate no será responsable por:",
        },
        {
          type: "ul",
          items: [
            "Decisiones clínicas, diagnósticos, tratamientos o resultados asistenciales del Profesional.",
            "Uso indebido de la Plataforma por Usuarios o terceros que obtengan credenciales por culpa del Usuario.",
            "Interrupciones atribuibles a fuerza mayor, fallas de Internet del Usuario o de Servicios de Terceros.",
            "Daños indirectos, lucro cesante o pérdida de oportunidad, salvo dolo o culpa grave declarada judicialmente.",
            "Contenidos educativos interpretados como consejo clínico personalizado.",
          ],
        },
        {
          type: "p",
          text: "Ninguna disposición limita derechos irrenunciables de consumidores o titulares de datos, ni la responsabilidad por dolo o culpa grave cuando la ley lo imponga.",
        },
      ],
    },
    {
      id: "jurisdiccion",
      number: "Artículo 22",
      title: "Jurisdicción",
      blocks: [
        {
          type: "p",
          text: `Cualquier controversia se someterá a los jueces y tribunales de la República de Colombia, sin perjuicio de mecanismos de mediación o conciliación previos cuando resulten aplicables.`,
        },
      ],
    },
    {
      id: "ley-aplicable",
      number: "Artículo 23",
      title: "Ley aplicable",
      blocks: [
        {
          type: "p",
          text: "Estos Términos se rigen por las leyes de la República de Colombia, incluyendo las normas de protección de datos personales, derecho a la salud, historia clínica, comercio electrónico y protección al consumidor cuando resulten aplicables.",
        },
        {
          type: "note",
          title: "Estándares internacionales",
          text: "GDPR se toma únicamente como referencia de buenas prácticas internacionales. HIPAA se toma únicamente como referencia técnica de seguridad y confidencialidad. Conciencia Sánate no afirma ser empresa europea ni entidad certificada HIPAA por el solo hecho de aplicar controles inspirados en dichos marcos.",
        },
      ],
    },
    {
      id: "contacto-juridico",
      number: "Artículo 24",
      title: "Contacto jurídico",
      blocks: [
        {
          type: "p",
          text: "Para notificaciones legales, requerimientos y consultas sobre estos Términos:",
        },
        {
          type: "ul",
          items: [
            `Correo jurídico: ${LEGAL_CONTACTS.legal}`,
            `Protección de datos: ${LEGAL_CONTACTS.privacy}`,
            `Seguridad de la información: ${LEGAL_CONTACTS.security}`,
            `Soporte: ${LEGAL_CONTACTS.support}`,
            `Contacto general: ${LEGAL_CONTACTS.general}`,
            `Sitio web: ${LEGAL_ENTITY.siteUrl}`,
          ],
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-productos",
      number: "Anexo A",
      title: "Productos Elynthis",
      blocks: [
        {
          type: "ul",
          items: [
            "Elynthis Clinical: entorno orientado a operación clínica profesional e institucional.",
            "Elynthis Care: entorno orientado a acompañamiento y experiencia de cuidado del paciente.",
            "Elynthis Lite: entorno con funcionalidades esenciales según el plan habilitado.",
          ],
        },
      ],
    },
    {
      id: "anexo-normativo",
      number: "Anexo B",
      title: "Marco normativo de referencia",
      blocks: [
        {
          type: "p",
          text: "Sin perjuicio de la lista completa en el Centro Legal y en Cumplimiento Normativo, estos Términos se interpretan de forma coherente con la Constitución Política, la Ley 1581 de 2012, la Ley 1751 de 2015, las normas de historia clínica e interoperabilidad (incluyendo Ley 2015 de 2020, Resolución 866 de 2021 y Resolución 1888 de 2025) y demás disposiciones vigentes.",
        },
      ],
    },
  ],
};
