# Sistema visual — Conciencia Sánate

## Paleta (CSS variables en `frontend/app/globals.css`)

| Token | Variable | Hex |
|-------|----------|-----|
| Primary | `--green-primary` | `#6FAF3F` |
| Primary dark | `--green-secondary` / `--brand-primary-dark` | `#355E2B` |
| Sage | `--green-soft` | `#DDEAD3` |
| Background | `--brand-background` | `#F3F8EF` |
| Muted / beige | `--brand-muted` | `#F6F1E8` |
| Surface | `--brand-surface` | `#FFFFFF` |
| Text main | `--brand-text-main` | `#2E332D` |
| Text soft | `--brand-text-soft` | `#6B7168` |

## Clases utilitarias (`@layer components`)

- `cs-section`, `cs-container`
- `cs-display-title`, `cs-section-title`, `cs-section-desc`
- `cs-badge`, `cs-glass`
- `cs-card-soft`, `cs-card-feature`, `cs-card-metric`, `cs-card-preview`

## Componentes React (`@/components/brand`)

**Botones:** `PrimaryButton`, `SecondaryButton`, `GhostButton`, `BrandCtaLink`  
**Cards:** `FeatureCard`, `SoftCard`, `MetricCard`, `PreviewCard`, `MotionCard`  
**Layout:** `BrandSection`, `BrandContainer`  
**Tipografía:** `DisplayTitle`, `SectionTitle`, `SectionSubtitle`  
**Badge:** `BrandBadge`

## Uso en Home

La Home importa el sistema vía secciones en `components/homepage/*` y `HomeCtaLink` (wrapper de `BrandCtaLink`).

## Accesibilidad

- Focus ring: `focus-visible:ring-[3px]` con `--brand-primary-rgb`
- Contraste texto principal sobre fondos claros ≥ WCAG AA en combinaciones por defecto
- `aria-label` en mock Elynthis y listas de actividad
