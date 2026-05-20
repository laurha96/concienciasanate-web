-- RLS en tablas del panel admin: denegar acceso vía anon/authenticated.
-- El backend usa service_role (bypass RLS). Defensa si la anon key llegara al cliente.

alter table public.admin_users enable row level security;
alter table public.site_settings enable row level security;
alter table public.page_sections enable row level security;
alter table public.tools enable row level security;
alter table public.plans enable row level security;
alter table public.contact_messages enable row level security;
alter table public.admin_audit_logs enable row level security;

-- Sin políticas = solo service_role / superuser pueden leer/escribir.
