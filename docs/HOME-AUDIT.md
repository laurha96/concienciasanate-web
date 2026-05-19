# Auditoría Home — Conciencia Sánate

**Fecha:** 2026-05-19  
**Stack:** Next.js 16 (App Router) · React 19 · Tailwind v4 · Vercel  
**Objetivo:** Diagnóstico y arquitectura propuesta antes de implementar contenido nuevo.

---

## 1. Diagnóstico breve

### Entrada de la Home

| Capa | Archivo | Rol |
|------|---------|-----|
| Ruta | `frontend/app/(marketing)/page.tsx` | Server Component mínimo; delega en `<HomePage />` |
| Orquestador | `frontend/components/homepage/HomePage.tsx` | Client Component; compone secciones + `OrganicBackground` + animaciones Framer Motion |
| Layout global | `frontend/app/layout.tsx` | `Header` + `<main>` + `Footer` en **todas** las páginas públicas |
| Proxy admin | `frontend/proxy.ts` | Solo protege `/admin/*` (cookie `admin_token`). **No afecta la Home** |

### Estado actual de secciones (orden en pantalla)

1. `HeroSection` — copy en `data.ts` (`brandCopy`) + visual `HeroNetworkVisual`
2. `EcosystemSection` — 4 cards (`ecosystemCards`)
3. `MethodSection` — Comprender / Regular / Transformar
4. `ElynthisSection` — copy + `DashboardMockup` + CTAs
5. `EvidenceSection` — 6 pilares científicos
6. `EducationSection` — 8 categorías → `/blog`
7. `FinalCTASection` — 3 CTAs

**Footer y Header no viven dentro de `HomePage`** — correcto; evita duplicación en runtime (aunque existen archivos legacy duplicados en disco).

### Hallazgos críticos

| # | Hallazgo | Impacto | Acción recomendada |
|---|----------|---------|-------------------|
| 1 | **Dos capas de Home sin conectar** | `components/homepage/*` (activa) vs `src/modules/home/*` (dominio, no usado en la ruta) | Fase 2: Server wrapper que llame `fetchHomeModel()` y pase props; no borrar el módulo |
| 2 | **Componentes legacy sin uso** | Confusión al mantener | Marcar `@deprecated`; no eliminar hasta confirmar |
| 3 | **Nav duplicada en código** | `header.tsx` y `data.ts` (`navLinks`) | Extraer `site-nav.ts` compartido |
| 4 | **Secciones propuestas faltantes** | `ToolsPreviewSection`, `ProfessionalIdentitySection` | Añadir en fase de contenido |
| 5 | **Enlaces legales** | Footer → `#` | Crear `/privacidad`, `/terminos` o CMS page cuando exista |
| 6 | **Blog educativo sin filtros** | Cards de educación apuntan todas a `/blog` | OK como fallback; mejorar con `?tema=` cuando el blog lo soporte |
| 7 | **API pública backend no consumida en Home** | Contenido estático en TS | Conectar gradualmente a `GET /api/public/*` |

### Build

`npm run build` en `frontend/` — **OK** (sin errores TypeScript al momento de la auditoría).

---

## 2. Mapa de componentes

### Layout global (reutilizar siempre)

| Componente | Ruta | Notas |
|------------|------|-------|
| `Header` | `components/layout/header.tsx` | Sticky, nav con estado activo, `UserMenu` (Entrar / Crear cuenta) |
| `Footer` | `components/layout/footer.tsx` | Usa `brandCopy.footer` |
| `Logo` | `components/layout/logo.tsx` | Marca + subtítulo |
| `UserMenu` | `components/layout/user-menu.tsx` | Auth usuario: `/login`, `/registro` |
| `Providers` | `app/providers.tsx` | React Query, temas |

### Home activa (`components/homepage/`)

| Componente | Propósito | Dependencias clave |
|------------|-----------|-------------------|
| `HomePage` | Orquestación | Framer Motion, secciones |
| `HeroSection` | Hero + CTAs | `brandCopy`, `HeroNetworkVisual`, `HomeCtaLink` |
| `EcosystemSection` | 4 pilares | `EcosystemCard`, `ecosystemCards` |
| `MethodSection` | Propuesta 3 bloques | `methodBlocks`, motion |
| `ElynthisSection` | Preview clínico | `DashboardMockup` |
| `EvidenceSection` | Ciencia | `ScientificCard`, `evidenceCards` |
| `EducationSection` | Hub educativo | `educationCategories` |
| `FinalCTASection` | Cierre | `HomeCtaLink` |
| `SectionContainer` | Max-width + padding | Base de todas las secciones |
| `SectionHeading` | Títulos | Tipografía `font-display` |
| `HomeCtaLink` | Botones redondeados | Variants primary/secondary/outline |
| `OrganicBackground` | Degradados de fondo | Solo Home |
| `HeroNetworkVisual` | Ilustración hero | SVG, pills, particles |
| `DashboardMockup` | Mock Elynthis | UI estática |
| `data.ts` | Copy + listas | **Fuente de verdad de contenido estático** |

### Legacy / duplicados (no borrar sin confirmar)

| Archivo | Estado | Relación |
|---------|--------|----------|
| `homepage/Navbar.tsx` | No importado | Duplica `layout/header` |
| `homepage/Footer.tsx` | No importado | Duplica `layout/footer` |
| `homepage/ScientificSection.tsx` | Sustituido por `EvidenceSection` | Mismo dato `scientificCards` alias |
| `homepage/ArticlesSection.tsx` | Sustituido por `EducationSection` | — |
| `homepage/FeatureCard.tsx`, `ArticleCard.tsx` | Sin uso en Home actual | Posible reutilización |
| `components/home/home-hero.tsx` | Sin referencias en app | Iteración anterior |
| `components/home/home-ecosystem-section.tsx` | Sin referencias | Iteración anterior |
| `components/design-system/*` | Storybook / ejemplos | No es la Home de producción |
| `src/modules/home/**` | Dominio preparado | `HOME_SECTION_ORDER`, configs, `fetchHomeModel()` |

### Módulo de dominio `src/modules/home` (futuro)

Orden definido en `HOME_SECTION_ORDER`:

```
hero → pillars → tools → foundation → ecosystem → elynthis → articles → finalCta
```

**Equivalencia aproximada con UI actual:**

| Clave módulo | Sección UI actual |
|--------------|-------------------|
| `hero` | `HeroSection` |
| `pillars` | `MethodSection` |
| `tools` | *(falta `ToolsPreviewSection`)* |
| `foundation` | `EvidenceSection` |
| `ecosystem` | `EcosystemSection` |
| `elynthis` | `ElynthisSection` |
| `articles` | `EducationSection` |
| `finalCta` | `FinalCTASection` |

---

## 3. Estilos y tokens

### Tailwind

- Config: `frontend/tailwind.config.js` (colores marca, `font-sans` / `font-display`, sombras `card` / `soft`)
- Entrada v4: `frontend/app/globals.css` (`@import "tailwindcss"`, `@theme inline`)

### Tokens de marca (`:root` en `globals.css`)

| Token | Uso |
|-------|-----|
| `--green-primary`, `--green-secondary`, `--green-soft`, `--green-light` | CTAs, acentos, pills |
| `--background-main`, `--background-soft` | Fondos orgánicos |
| `--text-primary`, `--text-secondary` | Tipografía |
| `--primary`, `--accent`, `--card`, `--border` | shadcn/ui |
| `--brand-primary-rgb` | Gradientes hero |

### Patrones UI en Home

- Cards: `rounded-[24–32px]`, `border-border/70`, `shadow-card`, hover lift (Framer o `group-hover`)
- Botones marketing: `HomeCtaLink` (pill) vs `Button` shadcn en header
- Tipografía: `font-display` en H1/H2; Inter en cuerpo

**Recomendación:** No introducir nueva paleta; extender `data.ts` + variables CSS existentes.

---

## 4. Arquitectura propuesta (objetivo)

```
app/(marketing)/page.tsx          [Server - futuro: fetch datos]
└── HomePage                      [Client - composición + motion]
    ├── OrganicBackground
    ├── HeroSection
    ├── EcosystemSection
    ├── MethodSection
    ├── ElynthisPreviewSection    ← renombrar ElynthisSection (opcional)
    ├── EvidenceSection
    ├── EducationHubSection       ← renombrar EducationSection (opcional)
    ├── ToolsPreviewSection       ← NUEVA (teaser → /herramientas)
    ├── ProfessionalIdentitySection ← NUEVA (ética, evidencia, humanidad → /sobre)
    └── FinalCTASection

app/layout.tsx
├── Header                        [nav única]
└── Footer
```

### Principios

1. **Una sola nav** — `site-nav.ts` exportado por Header y tests.
2. **Copy centralizado** — `data.ts` o JSON bajo `src/modules/home/constants` cuando migre el módulo.
3. **Server donde haya datos** — `page.tsx` async + `fetchHomeModel()` / API pública; hijos reciben props.
4. **Client solo para motion** — Mantener `"use client"` en `HomePage` o por sección si se optimiza LCP.
5. **No tocar auth/DB** — Solo enlaces y fetch de contenido público.

### Estructura de carpetas sugerida (evolutiva)

```
components/homepage/
  sections/           # mover secciones aquí (opcional)
  ui/                 # HomeCtaLink, SectionHeading, SectionContainer
  visuals/            # HeroNetworkVisual, DashboardMockup, OrganicBackground
  data.ts
  HomePage.tsx
  index.ts

lib/site-nav.ts       # navLinks único
```

---

## 5. Rutas y CTAs

### Rutas frontend existentes (marketing + auth)

| Ruta | Página | ¿Existe? | Usado en Home |
|------|--------|----------|---------------|
| `/` | Home | Sí | — |
| `/sobre` | Sobre | Sí | Nav (no CTA directo) |
| `/blog` | Blog | Sí | `EducationSection` |
| `/herramientas` | Herramientas | Sí | Nav (falta sección preview) |
| `/elynthis` | Elynthis | Sí | Hero, Elynthis, Final CTA |
| `/planes` | Planes | Sí | Nav |
| `/contacto` | Contacto | Sí | Elynthis “Solicitar demo” |
| `/recursos` | Recursos | Sí | Hero + Final CTA |
| `/login` | Login | Sí | Header `UserMenu` |
| `/registro` | Registro | Sí | Final CTA |
| `/dashboard` | Dashboard | Sí | Post-login (no Home) |
| `/perfil` | Perfil | Sí | Protegido (`ProtectedRoute`) |
| `/auth/login` | — | **No** | Usar `/login` |
| `/privacidad` | — | **No** | Footer `#` (TODO) |
| `/terminos` | — | **No** | Footer `#` (TODO) |

### CTAs actuales en Home — validación

| CTA | Destino | Válido |
|-----|---------|--------|
| Explorar recursos | `/recursos` | Sí (página pública) |
| Conocer Elynthis | `/elynthis` | Sí |
| Solicitar demo | `/contacto` | Sí |
| Crear cuenta | `/registro` | Sí |
| Explorar (educación) | `/blog` | Sí (sin filtro por categoría) |

### Endpoints backend relevantes (Express)

Prefijo: `{API_URL}/api`

| Área | Método | Ruta | Uso potencial Home |
|------|--------|------|-------------------|
| Auth | POST | `/auth/login`, `/auth/register` | No en Home (solo header) |
| Recursos | GET | `/resources` | App autenticada / recursos |
| Público | GET | `/public/blog`, `/public/blog/:slug` | Artículos recientes |
| Público | GET | `/public/tools`, `/public/tools/:slug` | ToolsPreviewSection |
| Público | GET | `/public/plans` | Planes (opcional en Home) |
| Público | GET | `/public/testimonials` | Social proof (futuro) |
| Público | POST | `/public/contact` | Formulario contacto |
| Público | GET | `/public/pages/:pageKey` | Páginas legales CMS |
| Admin | * | `/admin/*` | CMS (no Home) |

**Nota:** La Home actual **no llama** al backend; todo el copy está en `components/homepage/data.ts`. Integrar API es trabajo de fase 2 sin romper build (fallback a estático si falla fetch).

---

## 6. Autenticación (solo impacto en Home)

| Flujo | Mecanismo | Rutas |
|-------|-----------|-------|
| Usuario final | JWT en `localStorage` vía `services/auth.ts` | `/login`, `/registro` |
| Rutas protegidas | `ProtectedRoute` en dashboard/perfil | No bloquean Home |
| Admin CMS | Cookie `admin_token` + `proxy.ts` | `/admin/*` |

**No modificar** lógica auth para la auditoría. Solo mantener enlaces del header.

---

## 7. Plan de implementación por fases

### Fase 0 — Consolidación (sin contenido nuevo)

- [ ] Extraer `lib/site-nav.ts` desde `navLinks` / header
- [ ] Documentar deprecación en `Navbar.tsx`, `homepage/Footer.tsx`, `ScientificSection`, `ArticlesSection`, `components/home/*`
- [ ] Alinear nombres: `ElynthisPreviewSection`, `EducationHubSection` (rename + re-export en `index.ts`)

### Fase 1 — Secciones faltantes (contenido)

- [ ] `ToolsPreviewSection` — 3 cards + link `/herramientas`
- [ ] `ProfessionalIdentitySection` — valores (ciencia, claridad, humanidad) + CTA `/sobre`
- [ ] Revisar copy con `brandCopy` en todas las secciones

### Fase 2 — Datos dinámicos

- [ ] `app/(marketing)/page.tsx` → server fetch `fetchHomeModel()` o `/api/public/*`
- [ ] Pasar `recentArticles` a `EducationHubSection`
- [ ] Error boundary / fallback estático

### Fase 3 — Legal y SEO

- [ ] Rutas `/privacidad`, `/terminos` o `getPublicPage('privacy')`
- [ ] Metadata por sección (`generateMetadata` en page o layout marketing)

---

## 8. Checklist pre-deploy

- [ ] `npm run build` en `frontend/`
- [ ] `npm run lint`
- [ ] Probar CTAs en mobile (Sheet nav + CTAs apilados)
- [ ] Verificar una sola instancia Header/Footer en `/`
- [ ] Variables Vercel: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`

---

## 9. Resumen ejecutivo

La Home **ya está modularizada** en siete secciones bajo `components/homepage/`, con layout global correcto (sin doble header en runtime). Existe **deuda de arquitectura**: módulo `src/modules/home` preparado pero desconectado, y componentes legacy en disco.

**Prioridad:** consolidar navegación y copy (`data.ts` / `brandCopy`), añadir `ToolsPreviewSection` y `ProfessionalIdentitySection`, luego conectar API pública sin tocar auth ni base de datos.

**Riesgo bajo** si se implementa por secciones con re-exports y sin eliminar archivos legacy hasta validación visual.
