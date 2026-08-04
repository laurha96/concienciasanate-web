import type { LegalDocument } from "@/lib/legal/types";

export const cookiesDocument: LegalDocument = {
  id: "cookies",
  path: "/Politica-de-Cookies",
  title: "Política de Cookies",
  shortTitle: "Cookies",
  summary:
    "Uso de cookies esenciales, de preferencias, analíticas y de rendimiento en Conciencia Sánate y Elynthis.",
  description:
    "Política de Cookies de Conciencia Sánate y Elynthis: cookies esenciales, preferencias, analíticas, rendimiento, Cloudflare, Google Analytics y cómo administrarlas.",
  version: "1.0.0",
  updatedAt: "2026-08-04",
  effectiveDate: "2026-08-04",
  category: "privacy",
  keywords: [
    "cookies",
    "Cloudflare",
    "Google Analytics",
    "privacidad",
    "Conciencia Sánate",
  ],
  relatedIds: ["privacidad", "aviso-legal", "seguridad", "terminos"],
  definitions: [
    {
      term: "Cookie",
      definition:
        "Archivo o identificador que un sitio o aplicación almacena en el dispositivo del Usuario para recordar información, mantener sesión o medir uso.",
    },
    {
      term: "Cookie esencial",
      definition:
        "Necesaria para seguridad, autenticación, balanceo, protección antifraude o funciones básicas que el Usuario solicita.",
    },
    {
      term: "SDK / baliza",
      definition:
        "Tecnología equivalente a cookies (almacenamiento local, píxeles o scripts) con finalidades similares de medición o preferencias.",
    },
  ],
  scope: [
    {
      type: "p",
      text: "Esta Política aplica a concienciasanate.com, subdominios del ecosistema Elynthis y apps asociadas que utilicen cookies o tecnologías equivalentes.",
    },
    {
      type: "p",
      text: "Se interpreta junto con la Política de Privacidad y la Ley 1581 de 2012. Las cookies no esenciales se habilitan según configuración y consentimiento cuando corresponda.",
    },
  ],
  articles: [
    {
      id: "que-son",
      number: "Artículo 1",
      title: "Qué son las cookies y por qué las usamos",
      blocks: [
        {
          type: "p",
          text: "Usamos cookies para operar de forma segura un producto clínico, recordar preferencias, proteger la infraestructura (Cloudflare) y, cuando se active, comprender el rendimiento del sitio con analítica agregada.",
        },
      ],
    },
    {
      id: "esenciales",
      number: "Artículo 2",
      title: "Cookies esenciales",
      blocks: [
        {
          type: "ul",
          items: [
            "Sesión y autenticación de Usuarios en Elynthis.",
            "Protección CSRF y preferencias de seguridad.",
            "Balanceo, enrutamiento y mitigación de bots/DDoS vía Cloudflare.",
            "Recordar la elección del banner de cookies (cuando exista).",
            "Firma electrónica y flujos de consentimiento que requieren continuidad de sesión.",
          ],
        },
        {
          type: "note",
          text: "Sin cookies esenciales, el inicio de sesión, la teleconsulta autenticada o la carga segura de documentos pueden fallar.",
        },
      ],
    },
    {
      id: "preferencias",
      number: "Artículo 3",
      title: "Cookies de preferencias",
      blocks: [
        {
          type: "p",
          text: "Permiten recordar idioma, zona horaria, dismissals de UI no críticos y opciones de interfaz del Usuario para no repetir configuraciones en cada visita.",
        },
      ],
    },
    {
      id: "analiticas",
      number: "Artículo 4",
      title: "Cookies analíticas",
      blocks: [
        {
          type: "p",
          text: "Cuando Google Analytics u otra analítica esté habilitada, se usan para medir páginas visitadas, embudos de conversión informativos y errores de front de forma agregada. No se emplean para tomar decisiones clínicas sobre un paciente.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Minimización",
          text: "Configuramos analítica con criterios de minimización (IP anonimizada cuando el proveedor lo permita, Retention limitada y desactivación en rutas sensibles cuando sea viable).",
        },
      ],
    },
    {
      id: "rendimiento",
      number: "Artículo 5",
      title: "Cookies de rendimiento",
      blocks: [
        {
          type: "p",
          text: "Ayudan a medir latencia, disponibilidad y experiencia de carga (incluyendo señales de Cloudflare o telemetría técnica) para optimizar Elynthis y el sitio corporativo.",
        },
      ],
    },
    {
      id: "cloudflare",
      number: "Artículo 6",
      title: "Cloudflare",
      blocks: [
        {
          type: "p",
          text: "Cloudflare puede establecer cookies o identificadores técnicos para seguridad (desafíos bot, WAF), CDN y rendimiento. Estas suelen ser esenciales o de seguridad/rendimiento. Su tratamiento se rige también por las políticas de Cloudflare.",
        },
      ],
    },
    {
      id: "google-analytics",
      number: "Artículo 7",
      title: "Google Analytics",
      blocks: [
        {
          type: "p",
          text: "Si se habilita Google Analytics en propiedades de Conciencia Sánate, Google actúa como encargado/proveedor tecnológico de medición. El Usuario puede oponerse mediante configuración de cookies del sitio (cuando esté disponible) o controles del navegador/complementos de Google.",
        },
      ],
    },
    {
      id: "administrar",
      number: "Artículo 8",
      title: "Cómo administrarlas",
      blocks: [
        {
          type: "ol",
          items: [
            "Usar el panel de preferencias de cookies del sitio, si está disponible.",
            "Configurar el navegador para bloquear o eliminar cookies (puede afectar login y firmas).",
            "Emplear modo privado/incógnito comprendiendo que se perderán preferencias.",
            "Gestionar consentimiento de analítica de forma independiente a las cookies esenciales.",
            "En aplicaciones móviles, revisar permisos del sistema operativo y opciones in-app.",
          ],
        },
        {
          type: "p",
          text: "Para ejercer derechos sobre datos personales asociados a cookies, consulte la Política de Privacidad y escriba a privacidad@concienciasanate.com.",
        },
      ],
    },
    {
      id: "actualizaciones-cookies",
      number: "Artículo 9",
      title: "Actualizaciones",
      blocks: [
        {
          type: "p",
          text: "Esta Política puede actualizarse cuando cambien integraciones (por ejemplo, nuevas métricas, cambios de Cloudflare/Analytics) o la normativa. La fecha de actualización aparece en el encabezado del documento.",
        },
      ],
    },
  ],
  annexes: [
    {
      id: "anexo-categorias",
      number: "Anexo A",
      title: "Mapa rápido de categorías",
      blocks: [
        {
          type: "table",
          headers: ["Categoría", "¿Puede desactivarse?", "Impacto"],
          rows: [
            ["Esenciales / seguridad", "No (requeridas)", "Login, WAF, sesión, consentimientos"],
            ["Preferencias", "Sí", "Se pierden ajustes de UI"],
            ["Analíticas", "Sí", "Menor capacidad de mejora de producto"],
            ["Rendimiento", "Parcial", "Menor visibilidad de latencia/errores"],
          ],
        },
      ],
    },
  ],
};
