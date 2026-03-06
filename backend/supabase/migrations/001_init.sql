-- Conciencia Sánate / Elynthis - Base schema (Supabase Postgres)
-- Ejecutar en Supabase SQL editor o via CLI migrations.

create extension if not exists "pgcrypto";

-- PROFILES
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles
  for select
  using (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- USER PREFERENCES
create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  interests text[] not null default '{}',
  objectives text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_preferences enable row level security;

create policy "prefs_select_own" on public.user_preferences
  for select using (auth.uid() = user_id);

create policy "prefs_upsert_own" on public.user_preferences
  for insert with check (auth.uid() = user_id);

create policy "prefs_update_own" on public.user_preferences
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- RESOURCES
create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  kind text not null default 'guia',
  is_free boolean not null default true,
  storage_path text,
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.resources enable row level security;

create policy "resources_select_published" on public.resources
  for select using (published = true);

create policy "resources_crud_owner" on public.resources
  for all
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

-- BLOG POSTS
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content_md text,
  category text,
  cover_image_path text,
  published boolean not null default false,
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

create policy "blog_select_published" on public.blog_posts
  for select using (published = true);

create policy "blog_crud_owner" on public.blog_posts
  for all
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

-- MODULES
create table if not exists public.modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.modules enable row level security;

create policy "modules_select_active" on public.modules
  for select using (is_active = true);

-- ENROLLMENTS / USER MODULES
create table if not exists public.user_modules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id uuid not null references public.modules(id) on delete cascade,
  status text not null default 'active',
  progress_percent int not null default 0,
  started_at timestamptz default now(),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, module_id)
);

alter table public.user_modules enable row level security;

create policy "user_modules_select_own" on public.user_modules
  for select using (auth.uid() = user_id);

create policy "user_modules_write_own" on public.user_modules
  for insert with check (auth.uid() = user_id);

create policy "user_modules_update_own" on public.user_modules
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- TESTIMONIALS (opcional)
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_role text,
  content text not null,
  rating int check (rating between 1 and 5),
  is_featured boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;

create policy "testimonials_select_featured" on public.testimonials
  for select using (is_featured = true);

-- STORAGE (buckets)
-- Nota: para políticas detalladas de Storage, es mejor configurarlas en el dashboard.
-- Aquí dejamos buckets sugeridos.
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('resources', 'resources', false)
on conflict (id) do nothing;
