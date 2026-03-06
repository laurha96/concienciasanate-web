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
- `JWT_SECRET` (mínimo 32 caracteres)

Opcional:

- `PORT` (por defecto `5000`)
- `CORS_ORIGIN` (por defecto `http://localhost:3000`)

### Frontend

1) Copia el ejemplo:

- `frontend/.env.example` → `frontend/.env.local`

2) Asegúrate de que apunte al backend:

- `NEXT_PUBLIC_API_URL=http://localhost:5000`

## Desarrollo local

En dos terminales:

### 1) Backend

```bash
cd backend
npm install
npm run dev
```

Healthcheck:

- `GET http://localhost:5000/health`

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre:

- `http://localhost:3000`

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

## Deploy (alto nivel)

- Backend: Railway (o similar). Define las variables de `backend/.env.example`.
- Frontend: Cloudflare Pages o Vercel. Define `NEXT_PUBLIC_API_URL` apuntando al dominio del backend.
