-- Admin panel + editable public content
-- Adds: admin users/auth, page sections, tools, plans, leads, site settings, audit logs.

create extension if not exists "pgcrypto";

do $$ begin
  create type public.admin_role as enum ('super_admin', 'editor', 'admin_professional');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.publish_status as enum ('draft', 'published', 'unpublished');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.lead_status as enum ('new', 'read', 'responded', 'archived');
exception
  when duplicate_object then null;
end $$;

-- ADMIN USERS (separate from auth.users)
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  role public.admin_role not null default 'editor',
  is_active boolean not null default true,
  last_login_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- SITE SETTINGS (branding, nav, footer, social, contact email, global/page seo)
create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value jsonb not null default '{}'::jsonb,
  status public.publish_status not null default 'draft',
  updated_by uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- PAGE SECTIONS (editable, ordered, draft/published)
create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_key text not null,
  section_key text not null,
  content jsonb not null default '{}'::jsonb,
  order_index int not null default 0,
  status public.publish_status not null default 'draft',
  updated_by uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_key, section_key, status)
);

-- TOOLS (public tools editable from admin)
create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text,
  long_description text,
  instructions_md text,
  icon text,
  status public.publish_status not null default 'draft',
  featured_on_home boolean not null default false,
  order_index int not null default 0,
  seo_title text,
  seo_description text,
  updated_by uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- PLANS (pricing)
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price_label text,
  billing_period text,
  description text,
  features text[] not null default '{}',
  highlight boolean not null default false,
  order_index int not null default 0,
  cta_label text,
  cta_href text,
  status public.publish_status not null default 'draft',
  updated_by uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- LEADS / CONTACT MESSAGES
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  reason text,
  subject text,
  message text,
  status public.lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Extend BLOG POSTS for editorial workflow (keep existing published boolean for compatibility)
alter table public.blog_posts
  add column if not exists status public.publish_status not null default 'draft',
  add column if not exists tags text[] not null default '{}',
  add column if not exists series text,
  add column if not exists reading_time_min int,
  add column if not exists featured boolean not null default false,
  add column if not exists essential boolean not null default false,
  add column if not exists seo_title text,
  add column if not exists seo_description text,
  add column if not exists updated_by_admin uuid references public.admin_users(id) on delete set null;

-- Extend TESTIMONIALS for ordering & publish controls
alter table public.testimonials
  add column if not exists anonymous boolean not null default false,
  add column if not exists status public.publish_status not null default 'published',
  add column if not exists order_index int not null default 0,
  add column if not exists updated_by uuid references public.admin_users(id) on delete set null,
  add column if not exists updated_at timestamptz not null default now();

-- AUDIT LOGS (optional but recommended)
create table if not exists public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid references public.admin_users(id) on delete set null,
  action text not null,
  entity text not null,
  entity_id uuid,
  before jsonb,
  after jsonb,
  created_at timestamptz not null default now()
);
