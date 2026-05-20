# Conciencia Sánate

Monorepo simple con dos apps separadas:

- `frontend/`: Next.js (App Router) + TS + Tailwind + shadcn/ui + React Query.
- `backend/`: Express + TS + Supabase (service role) + JWT.

> Objetivo: el frontend **no** accede directamente a la base de datos; todo pasa por el backend vía REST.

## Requisitos
- Node.js (recomendado 18+)

## Variables de entorno

### Backend

1) Copia el ejemplo:

- `backend/.env.example` → `backend/.env`

2) Completa:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `JWT_SECRET` (mínimo 32 caracteres; tokens de usuarios finales)
- `ADMIN_JWT_SECRET` (opcional pero **recomendado en producción**; tokens del panel admin)

Opcional:

- `PORT` (por defecto `5000`)
- `CORS_ORIGIN` (por defecto `http://localhost:3000`)

### Frontend

1) Copia el ejemplo:

- `frontend/.env.example` → `frontend/.env.local`

2) Asegúrate de que apunte al backend:

- `NEXT_PUBLIC_API_URL=http://localhost:5000`

Nota: si cambias `PORT` en `backend/.env` (por ejemplo a `5001`), actualiza este valor para que coincida.

## Desarrollo local

En dos terminales:

### 1) Backend

```bash
cd backend
npm install
npm run dev
```

Healthcheck:

- `GET http://localhost:5000/health` → `{ ok, port, supabaseConfigured }`

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre:

- `http://localhost:3000`

## Panel Admin (CMS interno)

- URL: `http://localhost:3000/admin/login`
- Auth: cookie httpOnly `admin_token` (el cliente no accede al JWT)
- El frontend usa endpoints internos `/api/admin/*` como proxy hacia el backend.

### Crear el primer usuario `super_admin`

Si la tabla `admin_users` está vacía, necesitas crear el primer usuario para poder iniciar sesión:

```bash
cd backend
npm run admin:create -- admin@tu-dominio.com 'UnaClaveMuySegura123' super_admin
```

Alternativa (solo desarrollo): bootstrap con credenciales por defecto.

```bash
cd backend
npm run admin:bootstrap:dev
```

Credenciales dev (NO usar en producción):
- Usuario: `laurha96@yahoo.es`
- Password: `admin123`

Importante: estas credenciales son **solo para** `http://localhost:3000/admin/login`.
El login de usuarios finales vive en `http://localhost:3000/login` y usa Supabase Auth (registro/login normal), no la tabla `admin_users`.

Roles válidos: `super_admin | editor | admin_professional`.

Requisitos:
- Variables de entorno del backend configuradas (Supabase URL + Service Role Key, etc.).
- Migraciones aplicadas en Supabase (incluyendo el esquema admin):
	- `backend/supabase/migrations/001_init.sql`
	- `backend/supabase/migrations/002_admin_panel.sql`

Nota: para el backend necesitas `SUPABASE_SERVICE_ROLE_KEY` (service_role, secreta). La publishable/anon key es solo para clientes y no sirve para el bootstrap/admin.

## Autenticación

- Login/registro pegan al backend y guardan el `token` en `localStorage`.
- Rutas privadas (`/dashboard`, `/perfil`) validan el token llamando a `GET /api/users/profile`.

## Endpoints principales (backend)

- `POST /api/auth/login` → `{ token, user }`
- `POST /api/auth/register` → `{ token, user }`
- `GET /api/users/profile` (Bearer) → `{ profile }`
- `PUT /api/users/profile` (Bearer) → `{ profile }`
- `GET /api/users/preferences` (Bearer) → `{ preferences }`
- `PUT /api/users/preferences` (Bearer) → `{ preferences }`
- `GET /api/resources` → `{ resources }`

## Seguridad (backend + frontend)

Implementado en código:

- **Helmet** + **CORS** restringido + límite JSON 1 MB
- **Rate limiting**: login/registro, login admin, contacto y tope general `/api`
- **JWT separado** para admin (`ADMIN_JWT_SECRET`) vs usuarios (`JWT_SECRET`)
- **Recursos públicos** solo `published = true`
- **Proxy** Next.js 16 en `/admin/*` (`frontend/proxy.ts`, cookie `admin_token`)
- **Cabeceras de seguridad** en Vercel (`next.config.ts`)
- **RLS** en tablas del panel admin (`backend/supabase/migrations/003_admin_rls.sql`)

Tras desplegar:

1. En **Railway**: define `ADMIN_JWT_SECRET` distinto de `JWT_SECRET` (los admins deben volver a iniciar sesión).
2. En **Supabase SQL**: ejecuta la migración `003_admin_rls.sql` si aún no está aplicada.
3. En **Vercel/Railway**: revisa protección DDoS del plan y no expongas `SUPABASE_SERVICE_ROLE_KEY` en el frontend.

## Deploy (alto nivel)

- Backend: Railway (o similar). Define las variables de `backend/.env.example`.
- Frontend: Vercel. Define `NEXT_PUBLIC_API_URL` apuntando al dominio del backend.

### Vercel (Next.js)

Configuración en Vercel:

- **Root directory**: `frontend`
- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Install command**: `npm ci`

Variables recomendadas:

- `NEXT_PUBLIC_API_URL` — URL del backend en producción
- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (ej. `https://www.concienciasanate.com`)
