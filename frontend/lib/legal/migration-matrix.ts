/**
 * Matriz de cobertura de la consolidación legal (navegación → 2 documentos).
 * Cada fila debe quedar en estado "migrated" antes de retirar páginas públicas.
 */
export type MigrationStatus = "migrated" | "redirect" | "retained-signable";

export type MigrationRow = {
  sourceId: string;
  sourceTitle: string;
  sourcePath: string;
  sourceSection: string;
  targetId: "privacidad" | "terminos" | "consentimientos";
  targetSectionId: string;
  status: MigrationStatus;
  notes?: string;
};

export const LEGAL_MIGRATION_MATRIX: MigrationRow[] = [
  {
    sourceId: "privacidad",
    sourceTitle: "Política de Privacidad y Tratamiento de Datos Personales",
    sourcePath: "/privacidad",
    sourceSection: "Documento completo v1.1.0",
    targetId: "privacidad",
    targetSectionId: "identificacion-responsable",
    status: "migrated",
    notes: "Documento base; versión incrementada por consolidación.",
  },
  {
    sourceId: "cookies",
    sourceTitle: "Política de Cookies",
    sourcePath: "/Politica-de-Cookies",
    sourceSection: "Documento completo",
    targetId: "privacidad",
    targetSectionId: "cookies-tecnologias-analitica-y-preferencias",
    status: "redirect",
  },
  {
    sourceId: "seguridad",
    sourceTitle: "Política de Seguridad de la Información",
    sourcePath: "/Politica-de-Seguridad",
    sourceSection: "Documento completo",
    targetId: "privacidad",
    targetSectionId: "seguridad-de-la-informacion",
    status: "redirect",
  },
  {
    sourceId: "proteccion-datos",
    sourceTitle: "Política de Protección de Datos Sensibles",
    sourcePath: "/Proteccion-de-Datos",
    sourceSection: "Documento completo",
    targetId: "privacidad",
    targetSectionId: "datos-personales-sensibles-y-clinicos",
    status: "redirect",
  },
  {
    sourceId: "eliminar-cuenta",
    sourceTitle: "Política de Eliminación de Cuenta",
    sourcePath: "/eliminar-cuenta",
    sourceSection: "Documento completo",
    targetId: "privacidad",
    targetSectionId: "cierre-y-supresion-de-datos",
    status: "redirect",
    notes: "Página /eliminar-cuenta operativa + sección en Privacidad.",
  },
  {
    sourceId: "cumplimiento",
    sourceTitle: "Cumplimiento Normativo",
    sourcePath: "/Cumplimiento",
    sourceSection: "Materias de privacidad, seguridad y datos",
    targetId: "privacidad",
    targetSectionId: "cumplimiento-privacidad-y-proteccion-de-datos",
    status: "migrated",
    notes: "Copia de cobertura en Privacidad; el documento íntegro también vive en Términos.",
  },
  {
    sourceId: "cumplimiento",
    sourceTitle: "Cumplimiento Normativo",
    sourcePath: "/Cumplimiento",
    sourceSection: "Documento completo (contractual, sanitario, RDA/IHCE)",
    targetId: "terminos",
    targetSectionId: "cumplimiento-legal-y-normativo",
    status: "redirect",
  },
  {
    sourceId: "terminos",
    sourceTitle: "Términos y Condiciones de Uso",
    sourcePath: "/Terminos-&-Condiciones",
    sourceSection: "Documento completo",
    targetId: "terminos",
    targetSectionId: "aceptacion",
    status: "migrated",
    notes: "Ruta canónica nueva: /terminos-y-condiciones.",
  },
  {
    sourceId: "aviso-legal",
    sourceTitle: "Aviso Legal",
    sourcePath: "/Aviso-Legal",
    sourceSection: "Documento completo",
    targetId: "terminos",
    targetSectionId: "aviso-legal",
    status: "redirect",
  },
  {
    sourceId: "consentimiento-datos",
    sourceTitle: "Consentimiento para el Tratamiento de Datos Personales",
    sourcePath: "/Consentimiento-Tratamiento-Datos",
    sourceSection: "Documento firmable",
    targetId: "consentimientos",
    targetSectionId: "consentimiento-datos",
    status: "retained-signable",
    notes: "Fuera del footer y del hub de dos tarjetas; ruta operativa conservada.",
  },
  {
    sourceId: "consentimiento-teleconsulta",
    sourceTitle: "Consentimiento Informado para Teleconsulta",
    sourcePath: "/Consentimiento-Teleconsulta",
    sourceSection: "Documento firmable",
    targetId: "consentimientos",
    targetSectionId: "consentimiento-teleconsulta",
    status: "retained-signable",
  },
  {
    sourceId: "consentimiento-psicologica",
    sourceTitle: "Consentimiento Informado para Atención Psicológica",
    sourcePath: "/Consentimiento-Atencion-Psicologica",
    sourceSection: "Documento firmable",
    targetId: "consentimientos",
    targetSectionId: "consentimiento-psicologica",
    status: "retained-signable",
  },
];

export const REQUIRED_PRIVACY_ANCHORS = [
  "cookies-tecnologias-analitica-y-preferencias",
  "seguridad-de-la-informacion",
  "datos-personales-sensibles-y-clinicos",
  "cierre-y-supresion-de-datos",
  "cumplimiento-privacidad-y-proteccion-de-datos",
] as const;

export const REQUIRED_TERMS_ANCHORS = [
  "aviso-legal",
  "cumplimiento-legal-y-normativo",
] as const;

export const LEGACY_REDIRECTS: {
  sources: string[];
  destination: string;
}[] = [
  {
    sources: [
      "/Politica-de-Cookies",
      "/politica-de-cookies",
      "/Politica-de-cookies",
    ],
    destination: "/privacidad#cookies-tecnologias-analitica-y-preferencias",
  },
  {
    sources: [
      "/Politica-de-Seguridad",
      "/politica-de-seguridad",
      "/Politica-de-seguridad",
    ],
    destination: "/privacidad#seguridad-de-la-informacion",
  },
  {
    sources: [
      "/Proteccion-de-Datos",
      "/proteccion-de-datos",
      "/Proteccion-de-datos",
    ],
    destination: "/privacidad#datos-personales-sensibles-y-clinicos",
  },
  {
    sources: ["/Eliminar-Cuenta"],
    destination: "/eliminar-cuenta",
  },
  {
    sources: ["/Aviso-Legal", "/aviso-legal"],
    destination: "/terminos-y-condiciones#aviso-legal",
  },
  {
    sources: ["/Cumplimiento", "/cumplimiento"],
    destination: "/terminos-y-condiciones#cumplimiento-legal-y-normativo",
  },
  {
    sources: [
      "/Terminos-&-Condiciones",
      "/terminos",
      "/Terminos-y-Condiciones",
      "/terminos-y-condiciones/",
    ],
    destination: "/terminos-y-condiciones",
  },
  {
    sources: ["/Centro-Legal", "/centro-legal/", "/legal"],
    destination: "/centro-legal",
  },
  {
    sources: [
      "/Politica-de-Privacidad",
      "/Politica-de-privacidad",
      "/politica-de-privacidad",
    ],
    destination: "/privacidad",
  },
];
