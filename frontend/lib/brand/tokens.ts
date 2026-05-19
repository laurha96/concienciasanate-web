/**
 * Tokens semánticos de marca (referencia).
 * Los valores reales viven en `app/globals.css` como CSS variables.
 */
export const brandTokens = {
  colors: {
    primary: "#76B041",
    primaryDark: "#355E2B",
    sage: "#DCE8D4",
    background: "#F4F8F1",
    beige: "#F6F1E8",
    textMain: "#222222",
    textSoft: "#667065",
    white: "#FFFFFF",
  },
} as const;

/** Clases utilitarias definidas en globals.css (@layer components) */
export const brandClasses = {
  section: "cs-section",
  container: "cs-container",
  displayTitle: "cs-display-title",
  sectionTitle: "cs-section-title",
  sectionDesc: "cs-section-desc",
  badge: "cs-badge",
  glass: "cs-glass",
  cardSoft: "cs-card-soft",
  cardFeature: "cs-card-feature",
  cardMetric: "cs-card-metric",
  cardPreview: "cs-card-preview",
} as const;
