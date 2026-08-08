import { LEGAL_CONTACTS, PRIVACY_PATH } from "@/lib/legal/constants";
import { OPERATIONAL_CLEANUP_DAYS } from "@/lib/legal/retention-matrix";
import type { LegalDocument } from "@/lib/legal/types";

/**
 * Contenido sustancial del cierre de cuenta y supresión.
 * Se publica en /privacidad#cierre-y-supresion-de-datos y alimenta /eliminar-cuenta.
 */
export const eliminarCuentaDocument: LegalDocument = {
  id: "eliminar-cuenta",
  path: "/eliminar-cuenta",
  title: "Cierre de cuenta y supresión de datos",
  shortTitle: "Cierre de cuenta",
  summary:
    "Cierre de acceso, revocación de integraciones, supresión o anonimización de datos prescindibles y conservación legal limitada de historias clínicas y evidencias.",
  description:
    "Cierre de cuenta y solicitud de supresión de datos en Conciencia Sánate y Elynthis: desactivación de acceso, datos eliminados o anonimizados, conservación legal de historias clínicas, Google OAuth, facturación, backups y disposición final.",
  version: "2.0.0",
  updatedAt: "2026-08-08",
  effectiveDate: "2026-08-08",
  category: "operations",
  keywords: [
    "cerrar cuenta",
    "supresión de datos",
    "conservación historia clínica",
    "Ley 1581",
    "Resolución 839 de 2017",
    "Google OAuth",
    "Elynthis",
  ],
  relatedIds: ["privacidad", "terminos"],
  definitions: [
    {
      term: "Cierre de cuenta",
      definition:
        "Proceso mediante el cual se desactiva de forma permanente el acceso del Usuario a la Plataforma, se invalidan sesiones y se revocan integraciones, sin equivaler por sí solo a la destrucción de documentos sujetos a conservación legal.",
    },
    {
      term: "Supresión",
      definition:
        "Eliminación o anonimización de datos personales cuando ya no son necesarios y no existe una obligación legal o contractual de conservación, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
    },
    {
      term: "Bloqueo / archivo por conservación legal",
      definition:
        "Estado en el que los documentos retenidos dejan de usarse para el tratamiento ordinario, permanecen protegidos, con acceso restringido a custodios y finalidades legalmente autorizadas.",
    },
    {
      term: "Retención legal",
      definition:
        "Conservación obligatoria de cierta información —especialmente historia clínica, consentimientos, firmas, RIPS, facturación y evidencias— durante los plazos exigidos por la normativa colombiana o por autoridad competente.",
    },
    {
      term: "Legal hold",
      definition:
        "Bloqueo especial y justificado que impide la disposición final mientras exista proceso judicial, reclamación, investigación, requerimiento de autoridad u otra obligación documentada.",
    },
    {
      term: "Disposición final",
      definition:
        "Procedimiento archivístico y legal de eliminación segura o transferencia, aplicable solo cuando vencen los plazos, no hay legal hold y se cumplen inventarios, valoraciones y actas correspondientes. No es un borrado automático al día de vencimiento.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Esta sección explica cómo solicitar el cierre de una cuenta en Conciencia Sánate / Elynthis, qué ocurre con el acceso, qué datos se suprimen o anonimizan, qué documentos permanecen bloqueados por obligación legal y cómo se relacionan el hábeas data, Google OAuth y la custodia de historias clínicas.",
    },
    {
      type: "p",
      text: "El cierre de cuenta desactiva permanentemente el acceso del Usuario. No autoriza destruir ni alterar la integridad de la historia clínica. Tampoco se declara una retención indefinida de todos los datos: los prescindibles se eliminan o anonimizan; los sujetos a conservación se retienen solo durante el periodo justificado y luego siguen el procedimiento de disposición final.",
    },
  ],
  articles: [
    {
      id: "principios-cierre",
      number: "Artículo 1",
      title: "Principios del cierre y de la supresión",
      blocks: [
        {
          type: "ol",
          items: [
            "El cierre desactiva permanentemente el acceso del Usuario.",
            "Se revocan sesiones, credenciales, integraciones y autorizaciones asociadas a la cuenta.",
            "Los datos que no estén sujetos a conservación legal o contractual se eliminan o anonimizan de forma segura.",
            "Las historias clínicas, consentimientos, firmas, documentos clínicos, RIPS, facturas, soportes contables, evidencias de aceptación y registros sujetos a reclamaciones o investigaciones no se eliminan por el simple cierre de cuenta.",
            "Los documentos conservados por obligación legal quedan bloqueados, archivados y fuera del tratamiento ordinario.",
            "Cuando termine el plazo legal y no exista retención especial o legal hold, se ejecuta el procedimiento legal de disposición final o eliminación segura.",
            "El cierre no debe destruir ni alterar la integridad de la historia clínica.",
          ],
        },
      ],
    },
    {
      id: "como-solicitar",
      number: "Artículo 2",
      title: "Cómo solicitar el cierre y la supresión",
      blocks: [
        {
          type: "p",
          text: "Puedes solicitar en cualquier momento el cierre de tu cuenta. Al completarse el proceso perderás el acceso a Conciencia Sánate / Elynthis, se cerrarán tus sesiones y se revocarán las integraciones asociadas a tu cuenta.",
        },
        {
          type: "p",
          text: "Los datos personales que ya no sean necesarios y que no estén sujetos a una obligación legal o contractual serán eliminados o anonimizados de forma segura.",
        },
        {
          type: "p",
          text: "Determinados documentos no pueden eliminarse inmediatamente, entre ellos las historias clínicas, consentimientos informados, firmas, soportes de atención, RIPS, facturas, registros contables y evidencias necesarias para atender obligaciones legales, reclamaciones o requerimientos de autoridades. Estos documentos serán bloqueados, protegidos y conservados únicamente durante el periodo legal aplicable. No se utilizarán para publicidad ni para nuevas finalidades.",
        },
        {
          type: "ol",
          items: [
            "Use el formulario público de cierre en /eliminar-cuenta o, si está autenticado, la opción equivalente en configuración.",
            "También puede escribir a privacidad@concienciasanate.com o soporte@concienciasanate.com.",
            "Acredite identidad (nombre, documento cuando sea razonable, correo de la cuenta, rol y organización si aplica).",
            "Indique si solicita solo cierre de acceso o también supresión de datos personales no sujetos a retención.",
            "Marque la casilla de comprensión sobre conservación legal.",
            "Recibirá acuse con número de solicitud y, al finalizar, el resultado del proceso.",
          ],
        },
      ],
    },
    {
      id: "verificacion-identidad",
      number: "Artículo 3",
      title: "Verificación de identidad y roles",
      blocks: [
        {
          type: "p",
          text: "Antes de desactivar el acceso se verifica la identidad del solicitante. Si actúa como representante de un menor o de otra persona, debe acreditar la representación. El cierre de la cuenta del representante no elimina la documentación clínica de la persona representada.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Pacientes",
          text: "Cerrar tu cuenta de acceso no elimina la historia clínica conservada por el profesional o institución responsable de tu atención. Puedes solicitar una copia de tu historia clínica por los canales establecidos para ello.",
        },
        {
          type: "callout",
          tone: "legal",
          title: "Profesionales e instituciones",
          text: "El cierre de la cuenta de un profesional o de una institución no elimina las historias clínicas bajo su custodia. Antes del cierre deberán completarse los procedimientos de exportación, continuidad, transferencia o custodia que correspondan. La cancelación de una suscripción no extingue estas obligaciones.",
        },
      ],
    },
    {
      id: "flujo-tecnico",
      number: "Artículo 4",
      title: "Qué ocurre al confirmar la solicitud",
      blocks: [
        {
          type: "ol",
          items: [
            "Se verifica nuevamente la identidad.",
            "Se genera un número de solicitud.",
            "Se informa la posibilidad de solicitar o descargar previamente una copia de los datos que legalmente pueda recibir.",
            "Se cancelan sesiones y refresh tokens.",
            "Se impiden nuevos inicios de sesión y operaciones ordinarias.",
            "Se revocan integraciones externas, incluida Google cuando exista.",
            "Se detienen sincronizaciones y trabajos programados asociados a la cuenta.",
            "Se cancela la renovación de suscripciones, sin eliminar soportes de pago obligatorios.",
            "Se retiran permisos y membresías ordinarias.",
            "Se clasifican los datos según la matriz de retención.",
            "Se eliminan o anonimizan los datos prescindibles.",
            "Se bloquean los documentos sujetos a conservación.",
            "Se aplican legal holds cuando existan.",
            "Se registra cada acción sin copiar información clínica al log.",
            "Se envían confirmaciones de recepción y de cierre, indicando categorías conservadas, fundamento y plazo.",
          ],
        },
        {
          type: "p",
          text: `La depuración operativa de datos prescindibles de este sitio se programa para completarse dentro de ${OPERATIONAL_CLEANUP_DAYS} días calendario tras la verificación, siempre que la infraestructura y los trabajos asociados lo permitan. Los backups siguen su ciclo de rotación real y no se usan para tratamiento ordinario.`,
        },
      ],
    },
    {
      id: "datos-suprimidos",
      number: "Artículo 5",
      title: "Datos que se eliminan, anonimizan o desvinculan",
      blocks: [
        {
          type: "ul",
          items: [
            "Sesiones activas y tokens de refresco de acceso al sitio.",
            "Preferencias de interfaz, intereses y objetivos no clínicos.",
            "Membresías y permisos de acceso ordinario al sitio.",
            "Fotografías de perfil prescindibles.",
            "Datos de marketing o preferencias no esenciales, cuando existan.",
            "Credenciales de Google, tokens de calendario, cachés e identificadores de sincronización innecesarios (en Elynthis Clinical, cuando la integración exista).",
            "Borradores no clínicos, datos temporales, invitaciones pendientes y archivos fallidos o duplicados no incorporados a una historia clínica.",
            "Datos de analítica identificables asociados a la cuenta, cuando existan y no deban conservarse.",
          ],
        },
      ],
    },
    {
      id: "datos-conservados",
      number: "Artículo 6",
      title: "Datos sujetos a conservación legal o contractual",
      blocks: [
        {
          type: "ul",
          items: [
            "Historias clínicas, notas de evolución, evaluaciones, diagnósticos, planes y anexos clínicos.",
            "Consentimientos informados, firmas y evidencias de autenticación de consentimientos.",
            "Fórmulas, órdenes, certificados o remisiones.",
            "Registros profesionales exigidos por la Ley 1090 de 2006, cuando apliquen.",
            "RIPS y soportes de atención.",
            "Facturas, notas crédito/débito y registros contables o tributarios exigibles.",
            "Evidencias de aceptación de términos y de autorización para tratamiento de datos sensibles.",
            "Evidencias de revocatoria o de solicitudes de supresión.",
            "Auditorías necesarias para integridad y trazabilidad clínica o de seguridad.",
            "Información involucrada en reclamaciones, investigaciones, procesos judiciales o requerimientos de autoridades.",
          ],
        },
        {
          type: "p",
          text: "Estos documentos no se retienen de manera indefinida por mera comodidad: cada categoría tiene fundamento, evento inicial y plazo. Mientras estén retenidos permanecen bloqueados y fuera del tratamiento ordinario.",
        },
      ],
    },
    {
      id: "historia-clinica-plazos",
      number: "Artículo 7",
      title: "Historia clínica: plazos y disposición final",
      blocks: [
        {
          type: "p",
          text: "La historia clínica debe conservarse, como regla general, durante un mínimo de quince (15) años contados desde la última atención, conforme a la Resolución 839 de 2017 y normas que la modifiquen o sustituyan. Existen situaciones especiales en las que el plazo se duplica o la conservación debe ser permanente. Una vez cumplidos los periodos aplicables, la disposición final se realizará conforme al procedimiento archivístico y legal correspondiente.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "No hay borrado automático al cumplir 15 años",
          text: "La disposición final verifica vencimiento del término, ausencia de legal holds, inventarios, valoración (incluye posible valor científico, histórico o cultural), tablas de retención, actas y aprobaciones. No se eliminan documentos individuales de una historia salvo duplicados idénticos cuando legalmente proceda. Casos de violaciones de derechos humanos o infracciones graves al DIH pueden exigir el doble del plazo; ciertos documentos pueden requerir conservación permanente.",
        },
        {
          type: "note",
          title: "Proyecto normativo en monitoreo",
          text: "Existe un proyecto de resolución del Ministerio de Salud (julio de 2026) sobre historias clínicas. Mientras no sea formalmente expedido y publicado, no se cita como norma vigente; se monitorea para actualizar esta Política si entra en vigor.",
        },
      ],
    },
    {
      id: "google-oauth-cierre",
      number: "Artículo 8",
      title: "Google OAuth, Google Calendar y Limited Use",
      blocks: [
        {
          type: "ul",
          items: [
            "Se revocan access tokens y refresh tokens de Google.",
            "Se eliminan credenciales almacenadas y se detiene toda sincronización futura.",
            "Se eliminan cachés y copias de datos de Google no sujetas a una obligación válida.",
            "Se eliminan identificadores técnicos innecesarios.",
            "Solo se registra que la revocación ocurrió, sin almacenar el token en logs.",
            "Los datos de Google no se envían a modelos de inteligencia artificial.",
            "Se observa la Google API Services User Data Policy, incluidos Limited Use, y cuando corresponda la Google Workspace User Data and Developer Policy.",
          ],
        },
        {
          type: "p",
          text: "Los eventos ya guardados en la cuenta de Google Calendar del Usuario pueden seguir existiendo en Google. Si en el futuro se ofrece eliminarlos desde Elynthis, se pedirá confirmación independiente y se ejecutará antes de revocar la autorización. No se promete borrar contenido en Google si la aplicación no tiene capacidad técnica o autorización para hacerlo.",
        },
      ],
    },
    {
      id: "pagos-backups-holds",
      number: "Artículo 9",
      title: "Pagos, copias de seguridad y legal holds",
      blocks: [
        {
          type: "p",
          text: "La renovación de suscripciones se cancela con el cierre; los comprobantes y soportes de pago exigibles se conservan según obligaciones contables o tributarias. Stripe u otros procesadores pueden actuar como responsables independientes respecto de ciertos datos bajo sus términos.",
        },
        {
          type: "p",
          text: "Una eliminación en la base activa no implica desaparición inmediata de todas las copias de seguridad. Los backups están cifrados según la configuración del proveedor, con acceso restringido, y no se usan para reactivar cuentas cerradas ni para tratamientos ordinarios. Tras una restauración se reaplican automáticamente los tombstones de cierre pendientes.",
        },
        {
          type: "p",
          text: "Un legal hold puede aplicarse ante proceso judicial, reclamación, investigación, requerimiento de autoridad, obligación fiscal pendiente, investigación de seguridad, posible responsabilidad profesional, o casos de derechos humanos / DIH, con fundamento, fecha, responsable, alcance limitado y revisión periódica. Impide solo la eliminación necesaria y no habilita tratamientos comerciales.",
        },
      ],
    },
    {
      id: "habeas-data-plazos",
      number: "Artículo 10",
      title: "Distinción con otros derechos y plazos de respuesta",
      blocks: [
        {
          type: "p",
          text: "Cerrar una cuenta de acceso no es lo mismo que revocar una autorización, solicitar supresión de un dato concreto, corregir datos, pedir copia de la historia clínica, presentar una consulta o presentar un reclamo. Cada vía tiene alcance propio.",
        },
        {
          type: "ul",
          items: [
            "Consultas: respuesta dentro de diez (10) días hábiles; prórroga informada de hasta cinco (5) días hábiles adicionales.",
            "Reclamos: atención dentro de quince (15) días hábiles siguientes al día posterior a su recepción completa; prórroga informada de hasta ocho (8) días hábiles adicionales.",
            "Solicitud incompleta: se pedirá subsanación dentro de cinco (5) días; si transcurren dos (2) meses sin respuesta, se entenderá desistida conforme al procedimiento legal.",
          ],
        },
        {
          type: "p",
          text: "Cuando no proceda la supresión total, la respuesta indicará qué información se conserva, el fundamento, el plazo o criterio, las restricciones, los canales de reclamación y el derecho de acudir ante la Superintendencia de Industria y Comercio después de agotar el trámite correspondiente.",
        },
      ],
    },
    {
      id: "plazos-operativos",
      number: "Artículo 11",
      title: "Plazos operativos del cierre",
      blocks: [
        {
          type: "ul",
          items: [
            "Acuse de recibo: hasta cinco (5) días hábiles.",
            "Desactivación de acceso tras verificación: normalmente entre cinco (5) y quince (15) días hábiles.",
            `Supresión o anonimización de datos de cuenta no sujetos a retención: hasta ${OPERATIONAL_CLEANUP_DAYS} días calendario, salvo complejidad, legal hold o coordinación con el Responsable clínico.`,
            "Datos en backups: hasta completar el ciclo técnico de rotación, restringidos y sin uso ordinario.",
          ],
        },
      ],
    },
    {
      id: "efectos-cierre",
      number: "Artículo 12",
      title: "Efectos del cierre",
      blocks: [
        {
          type: "p",
          text: "Tras el cierre, el Usuario no podrá ingresar a módulos autenticados ni renovar tokens. La reapertura, si alguna vez se permite, requerirá un nuevo registro y no garantiza recuperar datos ya anonimizados. El cierre no puede usarse para destruir registros clínicos ni para eludir obligaciones profesionales, institucionales, tributarias o de custodia.",
        },
      ],
    },
    {
      id: "canales-cierre",
      number: "Artículo 13",
      title: "Canales de contacto",
      blocks: [
        {
          type: "ul",
          items: [
            `Formulario público: /eliminar-cuenta`,
            `Sección en Política de Privacidad: ${PRIVACY_PATH}#cierre-y-supresion-de-datos`,
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
      id: "anexo-checklist-cierre",
      number: "Anexo A",
      title: "Lista de verificación para solicitar el cierre",
      blocks: [
        {
          type: "ol",
          items: [
            "Correo exacto de la cuenta.",
            "Nombre completo y documento (cuando sea razonable para verificación).",
            "Rol (Paciente / Profesional / Administrador / Representante).",
            "Organización (si aplica).",
            "Confirmación de que comprende la conservación legal de HCE y evidencias.",
            "Indicar si necesita exportar o solicitar copia de información antes del cierre.",
            "Conservar el número de solicitud para seguimiento.",
          ],
        },
      ],
    },
  ],
};
