# Auditoría Google / Privacidad (2026-08-08)

## Hallazgos (este monorepo)

| Ámbito | Estado |
|--------|--------|
| Google OAuth / Sign-In (código) | **No implementado** |
| Google Calendar sync (código) | **No implementado** |
| Scopes en código | **Ninguno** |
| Tokens OAuth cifrados | N/A (no hay tokens aquí) |
| OpenAI / Sentry / Resend / GA (código) | **No implementados** |
| Eliminación de cuenta operativa | Página legal; sin API de borrado |
| Dirección / teléfono del Responsable | Publicados: CRA 29 31D 60 SUR, Bogotá / +1 3124462648 |

## Scopes

| | Sign-In | Calendar |
|--|---------|----------|
| Antes (este repo) | ninguno | ninguno |
| Después (este repo) | ninguno (sin OAuth local) | ninguno |
| Documentados para el ecosistema | `openid`, `email`, `profile` | `calendar.events` (mínimo; incremental) |

Los controles OAuth/Calendar/tokens deben completarse en **Elynthis Clinical**. Aquí se publica la política canónica y el componente de aviso previo.

## Archivos modificados (esta entrega)

- Política `/privacidad` v1.1.0 y redirects canónicos
- `/eliminar-cuenta` canónica
- Footer, sitemap, robots
- `GoogleCalendarConsentDialog`
- `lib/privacy/google-data-guard` + tests
- Sustitución de “Retention” por retención/conservación

## Controles no aplicables / pendientes en Clinical

- Cifrado AES-GCM de access/refresh tokens
- Deploy de Edge Functions de disconnect/revoke
- Wiring del diálogo OAuth antes de `accounts.google.com`
- Verificación RLS multi-tenant en app clínica
