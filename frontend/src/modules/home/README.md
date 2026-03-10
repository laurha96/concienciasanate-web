# Módulo Home

Este módulo encapsula la lógica de dominio/ensamblaje de contenido para la homepage.

## Estructura

- `types/`: tipos del modelo de Home (`HomeModel`, `HomeRecentArticle`).
- `repositories/`: acceso a fuentes de datos (p. ej. `BLOG_ARTICLES`).
- `mappers/`: transformación entidad → view-model.
- `validators/`: validaciones de consistencia (ids únicos, etc.).
- `services/`: casos de uso y composición (p. ej. `getHomeModel`).
- `api/`: fachada estable para el resto de la app (p. ej. `fetchHomeModel`).
- `constants/`: constantes del módulo.

## Uso

En la homepage se consume así:

- Importa `fetchHomeModel` desde `@/modules/home`.
- Usa `recentArticles` para renderizar el bloque de artículos recientes.

La intención es evitar lógica inline en `app/(marketing)/page.tsx` y mantener una frontera clara para evolucionar la homepage.
