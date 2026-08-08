# Cierre de cuenta y supresión de datos — diagnóstico y entrega

Fecha: 2026-08-08  
Rama: `cursor/cierre-cuenta-supresion-datos-aa3b`

## 1. Diagnóstico del flujo anterior

- La “eliminación de cuenta” era **solo documental**: página legal + redirect a `/privacidad#eliminacion-de-cuenta`.
- **No existía** API de cierre, estados de cuenta, tombstones, legal holds ni jobs.
- El schema del sitio (`profiles`, `user_preferences`, `user_modules`) usa `ON DELETE CASCADE` desde `auth.users` — peligroso si se borra Auth sin cuidado, pero **no hay tablas clínicas** en este repo.
- Google OAuth, HCE, RIPS, Stripe operativo y RLS multi-tenant clínico viven en **Elynthis Clinical (fuera de este monorepo)**.

## 2. Riesgos legales y técnicos encontrados

| Riesgo | Mitigación en esta entrega |
|--------|----------------------------|
| Afirmar “nunca se eliminan” / “todos los datos se borran” | Textos reformulados: supresión de prescindibles + bloqueo de retenidos + disposición final |
| CASCADE sobre datos clínicos | No aplica aquí (no hay HCE); Clinical debe auditar FKs; documentado |
| Borrado automático a los 15 años | Explicitamente prohibido; procedimiento archivístico |
| Redirect único sin formulario usable | `/eliminar-cuenta` vuelve a ser página pública con formulario |
| Cifrado OAuth no verificable aquí | Adaptador Clinical stub + política con obligación, no afirmación falsa |
| www→apex / teléfono +57 | Pendientes operativos previos |

## 3–4. Inventario y matriz de retención

Código fuente: `frontend/lib/legal/retention-matrix.ts`.

Incluye filas `this-repo`, `elynthis-clinical` y `third-party`, con fundamento, plazo, acción post-cierre, backups y legal hold.

## 5. Mapa requisito → implementación

| Requisito | Implementación |
|-----------|----------------|
| Estados de cuenta | `profiles.account_status` + enum en migración 004 |
| Registro de solicitudes | `account_closure_requests` + `account_closure_events` |
| Formulario público | `/eliminar-cuenta` + `AccountClosureForm` |
| API intake | `POST /api/account/closure-request` |
| Procesamiento verificado | `POST /api/account/process` (admin) |
| Bloqueo de login | `assertLoginAllowed` en `authService.loginWithPassword` |
| Tombstones / restore | `deletion_tombstones` + `POST /api/account/reapply-tombstones` |
| Legal holds | tabla `legal_holds` |
| Textos | Privacidad 1.3.0 sección `#cierre-y-supresion-de-datos`; Términos 1.2.0 art. 29 |
| Clinical Google/HCE/Stripe | `clinical-adapter.stub.ts` (contrato) |

## 6. Archivos modificados / creados

Ver diff del PR. Principales: contenidos legales, form UI, migración 004, `accountClosureService`, tests, esta nota.

## 7. Migraciones

- `backend/supabase/migrations/004_account_closure.sql` (**aditiva**, no destructiva).
- **No ejecutar en producción automáticamente.** Revisar en staging primero.

## 8. RLS

- Tablas de cierre: RLS enabled **sin policies de cliente** (solo service_role/backend).
- Profiles: se añade `account_status`; policies existentes de “own row” se mantienen.

## 9. Funciones / jobs

- Servicio Node: create / process / reapply tombstones.
- Job recomendado (manual/cron ops): llamar `process` tras verificación humana; cron diario `reapply-tombstones` post-restore.
- **No** se programa `DELETE` automático de HCE a los 15 años.

## 10. Textos legales

- Privacidad v**1.3.0** — sección cierre/supresión/bloqueo/conservación.
- Términos v**1.2.0** — artículo de cierre y custodia.
- Documento fuente `eliminar-cuenta.ts` v**2.0.0**.

## 11. Pruebas

- `npm test` / `npm run test:privacy` en frontend (incl. `account-closure.test.ts`).
- Backend: compilación `tsc` (sin DB real en CI de este entorno si faltan secrets).

## 12. Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_API_URL` | Frontend → API de cierre |
| `SUPABASE_URL` | Backend |
| `SUPABASE_SERVICE_ROLE_KEY` | Backend (solo servidor) |
| `JWT_SECRET` / `ADMIN_JWT_SECRET` | Auth app + endpoint process |

## 13. Acciones manuales pendientes

1. Aplicar migración 004 en Supabase **staging**, luego producción con aprobación.
2. Configurar `NEXT_PUBLIC_API_URL` en el frontend desplegado.
3. Conectar adaptador real en **Elynthis Clinical** (Google revoke, stop sync, Stripe cancel, block HCE).
4. Documentar retención real de backups de Supabase del sitio.
5. Definir operador humano que llama `/api/account/process` tras verificación.
6. Revisar vigencia de plazos fiscales/DIAN con contador antes de fijar textos de facturación en Clinical.

## 14. Revisión por abogado / DPO / contador

- Plazos exactos de facturación/RIPS según el régimen del prestador.
- Valoración archivística y actas de disposición final (AGN / Res. 839).
- Representación de menores y cuentas institucionales.
- Contrato Encargado con profesionales/instituciones.

## 15. Plan de rollback

1. Revertir deploy frontend/backend al commit anterior.
2. **No** borrar tablas 004 si ya hay solicitudes (conservan evidencia).
3. Si es necesario desactivar el flujo: feature-flag o dejar de enrutar `/api/account/*`.
4. Restaurar textos legales desde git.
5. No reactivar usuarios cerrados desde backup sin revisar tombstones.

## Confirmaciones

- Derecho al cierre de acceso: sí (formulario + API + ban).
- Supresión de prescindibles del sitio: sí (preferencias/módulos/avatar/anonimización).
- Conservación legal justificada: documentada; ejecución clínica en Clinical.
- Custodia HCE: no se destruye por cierre; textos y términos lo prohíben.
- Google OAuth Limited Use: textos + stub Clinical.
- Trazabilidad: `account_closure_requests` / events.
- Disposición final: procedimiento, no delete automático.
