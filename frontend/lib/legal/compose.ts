import type {
  LegalArticle,
  LegalBlock,
  LegalDefinition,
  LegalDocument,
} from "@/lib/legal/types";

export type EmbedSourceOptions = {
  source: LegalDocument;
  /** Ancla estable para redirecciones históricas. */
  sectionId: string;
  sectionNumber: string;
  sectionTitle: string;
  /** Prefijo numérico de subsecciones (p. ej. "9" → 9.1). */
  numberPrefix: string;
  introBlocks?: LegalBlock[];
};

/**
 * Incorpora un documento fuente completo como sección + subartículos,
 * preservando párrafos, listas, tablas, callouts y anexos.
 */
export function embedSourceAsSection(options: EmbedSourceOptions): {
  articles: LegalArticle[];
  definitions: LegalDefinition[];
} {
  const {
    source,
    sectionId,
    sectionNumber,
    sectionTitle,
    numberPrefix,
    introBlocks = [],
  } = options;

  const definitionBlocks: LegalBlock[] =
    source.definitions.length > 0
      ? [
          {
            type: "p",
            text: "Definiciones aplicables a esta sección (integradas desde el documento consolidado):",
          },
          {
            type: "ul",
            items: source.definitions.map(
              (item) => `${item.term}: ${item.definition}`
            ),
          },
        ]
      : [];

  const intro: LegalArticle = {
    id: sectionId,
    number: sectionNumber,
    title: sectionTitle,
    blocks: [
      ...introBlocks,
      {
        type: "callout",
        tone: "legal",
        title: "Consolidación documental",
        text: `Esta sección incorpora íntegramente el contenido previamente publicado como «${source.title}» (versión ${source.version}, vigencia ${source.effectiveDate}), sin reducir derechos, obligaciones ni garantías. La simplificación es únicamente de navegación.`,
      },
      ...source.scope,
      ...definitionBlocks,
    ],
  };

  const childArticles: LegalArticle[] = source.articles.map((article, index) => ({
    id: `${sectionId}--${article.id}`,
    number: `${numberPrefix}.${index + 1}`,
    title: article.title,
    blocks: article.blocks,
  }));

  const childAnnexes: LegalArticle[] = (source.annexes ?? []).map(
    (annex, index) => ({
      id: `${sectionId}--${annex.id}`,
      number: `${numberPrefix}.${source.articles.length + index + 1}`,
      title: annex.title,
      blocks: annex.blocks,
    })
  );

  return {
    articles: [intro, ...childArticles, ...childAnnexes],
    definitions: source.definitions,
  };
}

/** Une definiciones por término, conservando la definición más larga. */
export function mergeDefinitions(
  ...groups: LegalDefinition[][]
): LegalDefinition[] {
  const byTerm = new Map<string, LegalDefinition>();
  for (const group of groups) {
    for (const item of group) {
      const existing = byTerm.get(item.term);
      if (!existing || item.definition.length > existing.definition.length) {
        byTerm.set(item.term, item);
      }
    }
  }
  return Array.from(byTerm.values());
}
