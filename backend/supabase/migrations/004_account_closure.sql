-- Account closure / suppression workflow (additive, non-destructive).
-- Do NOT run destructive cleanup against production without review.

-- Account status on profiles (separate from clinical document state).
alter table public.profiles
  add column if not exists account_status text not null default 'active';

alter table public.profiles
  drop constraint if exists profiles_account_status_check;

alter table public.profiles
  add constraint profiles_account_status_check
  check (
    account_status in (
      'active',
      'closure_requested',
      'identity_verification_pending',
      'access_disabled',
      'data_cleanup_pending',
      'archived_legal_retention',
      'anonymized',
      'closure_completed'
    )
  );

create index if not exists profiles_account_status_idx
  on public.profiles (account_status);

-- Closure requests (no clinical content).
create table if not exists public.account_closure_requests (
  id uuid primary key default gen_random_uuid(),
  request_number text not null unique,
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  full_name text not null,
  document_id text,
  role text not null,
  organization_name text,
  scope text not null check (scope in ('access_only', 'access_and_suppression')),
  export_requested boolean not null default false,
  understood_legal_retention boolean not null default false,
  status text not null default 'closure_requested',
  identity_verification_method text,
  deactivated_at timestamptz,
  categories_deleted jsonb not null default '[]'::jsonb,
  categories_anonymized jsonb not null default '[]'::jsonb,
  categories_retained jsonb not null default '[]'::jsonb,
  estimated_final_disposition_at timestamptz,
  legal_holds jsonb not null default '[]'::jsonb,
  reviewed_by text,
  result_summary text,
  notification_log jsonb not null default '[]'::jsonb,
  last_error text,
  retry_count integer not null default 0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint account_closure_requests_status_check check (
    status in (
      'closure_requested',
      'identity_verification_pending',
      'access_disabled',
      'data_cleanup_pending',
      'archived_legal_retention',
      'anonymized',
      'closure_completed'
    )
  )
);

create index if not exists account_closure_requests_email_idx
  on public.account_closure_requests (lower(email));

create index if not exists account_closure_requests_user_idx
  on public.account_closure_requests (user_id);

create index if not exists account_closure_requests_status_idx
  on public.account_closure_requests (status);

-- Event log without clinical payloads.
create table if not exists public.account_closure_events (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.account_closure_requests(id) on delete cascade,
  event_type text not null,
  detail text,
  created_at timestamptz not null default now()
);

create index if not exists account_closure_events_request_idx
  on public.account_closure_events (request_id);

-- Tombstones so restores re-apply closures.
create table if not exists public.deletion_tombstones (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  email_normalized text not null,
  request_id uuid references public.account_closure_requests(id) on delete set null,
  reason text not null default 'account_closure',
  applied_at timestamptz not null default now(),
  unique (email_normalized, reason)
);

create index if not exists deletion_tombstones_email_idx
  on public.deletion_tombstones (email_normalized);

-- Legal holds (site-level; clinical holds live in Clinical).
create table if not exists public.legal_holds (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references public.account_closure_requests(id) on delete set null,
  user_id uuid,
  basis text not null,
  scope text not null,
  owner text not null,
  active boolean not null default true,
  started_at timestamptz not null default now(),
  review_at timestamptz,
  ended_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.account_closure_requests enable row level security;
alter table public.account_closure_events enable row level security;
alter table public.deletion_tombstones enable row level security;
alter table public.legal_holds enable row level security;

-- No client policies: only service_role / backend may manage closure tables.
drop policy if exists "closure_requests_select_own" on public.account_closure_requests;

comment on table public.account_closure_requests is
  'Solicitudes de cierre/supresión del sitio. Sin contenido clínico.';
comment on table public.deletion_tombstones is
  'Marcas para reaplicar cierres tras restauración de backups.';
