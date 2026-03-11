export type AdminApiError = {
  message: string;
  issues?: unknown;
  status?: number;
};

export type PublishStatus = "draft" | "published" | "unpublished";

export type AdminBlogPostListItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  status: PublishStatus;
  updated_at: string | null;
};

export type AdminBlogPostItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content_md: string | null;
  category: string | null;
  tags: string[];
  series: string | null;
  reading_time_min: number | null;
  featured: boolean;
  essential: boolean;
  seo_title: string | null;
  seo_description: string | null;
  status: PublishStatus;
};

export type AdminToolListItem = {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  status: PublishStatus;
  featured_on_home: boolean;
  order_index: number;
};

export type AdminToolItem = {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  long_description: string | null;
  instructions_md: string | null;
  icon: string | null;
  status: PublishStatus;
  featured_on_home: boolean;
  order_index: number;
  seo_title: string | null;
  seo_description: string | null;
};

export type AdminTestimonialItem = {
  id: string;
  author_name: string | null;
  author_role: string | null;
  content: string;
  anonymous: boolean;
  is_featured: boolean;
  order_index: number;
  status: PublishStatus;
};

export type AdminPlanListItem = {
  id: string;
  name: string;
  price_label: string | null;
  billing_period: string | null;
  highlight: boolean;
  order_index: number;
  status: PublishStatus;
};

export type AdminPlanItem = {
  id: string;
  name: string;
  price_label: string | null;
  billing_period: string | null;
  description: string | null;
  features: string[];
  highlight: boolean;
  order_index: number;
  cta_label: string | null;
  cta_href: string | null;
  status: PublishStatus;
};

export type LeadStatus = "new" | "in_progress" | "resolved" | "spam";
export type AdminLeadItem = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
  status: LeadStatus;
  created_at: string | null;
};

export type AdminSiteSettingItem = {
  id: string;
  key: string;
  status: "draft" | "published";
  value: unknown;
};

export type AdminUserRow = {
  id: string;
  email: string;
  role: string;
  created_at?: string;
};

async function readErrorMessage(resp: Response) {
  try {
    const data: unknown = await resp.json();
    if (data && typeof data === "object" && "message" in data) {
      const msg = (data as { message?: unknown }).message;
      if (typeof msg === "string") return msg;
    }
    return resp.statusText;
  } catch {
    return resp.statusText;
  }
}

export async function adminFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const resp = await fetch(path, {
    ...options,
    headers: {
      ...(options?.headers ?? {}),
      ...(options?.body ? { "Content-Type": "application/json" } : {}),
    },
    cache: "no-store",
  });

  if (!resp.ok) {
    const message = await readErrorMessage(resp);
    const err: AdminApiError = { message, status: resp.status };
    throw Object.assign(new Error(message), err);
  }

  const contentType = resp.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return undefined as unknown as T;
  }

  return (await resp.json()) as T;
}

export type AdminUserSession = {
  adminUser: { adminUserId: string; email: string; role: string };
};

export function apiAdminLogin(input: { email: string; password: string }) {
  return adminFetch<{ adminUser: { id: string; email: string; role: string } }>(
    "/api/admin/auth/login",
    { method: "POST", body: JSON.stringify(input) }
  );
}

export function apiAdminMe() {
  return adminFetch<AdminUserSession>("/api/admin/auth/me", { method: "GET" });
}

export function apiAdminLogout() {
  return adminFetch<{ ok: true }>("/api/admin/auth/logout", { method: "POST" });
}

export function apiAdminListBlog() {
  return adminFetch<{ items: AdminBlogPostListItem[] }>("/api/admin/content/blog", {
    method: "GET",
  });
}

export function apiAdminGetBlog(id: string) {
  return adminFetch<{ item: AdminBlogPostItem }>(`/api/admin/content/blog/${id}`, {
    method: "GET",
  });
}

export function apiAdminCreateBlog(input: Record<string, unknown>) {
  return adminFetch<{ id: string }>("/api/admin/content/blog", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiAdminUpdateBlog(id: string, input: Record<string, unknown>) {
  return adminFetch<{ ok: true }>(`/api/admin/content/blog/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function apiAdminDeleteBlog(id: string) {
  return adminFetch<{ ok: true }>(`/api/admin/content/blog/${id}`, {
    method: "DELETE",
  });
}

export function apiAdminListTools() {
  return adminFetch<{ items: AdminToolListItem[] }>("/api/admin/content/tools", {
    method: "GET",
  });
}

export function apiAdminGetTool(id: string) {
  return adminFetch<{ item: AdminToolItem }>(`/api/admin/content/tools/${id}`, {
    method: "GET",
  });
}

export function apiAdminCreateTool(input: Record<string, unknown>) {
  return adminFetch<{ id: string }>("/api/admin/content/tools", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiAdminUpdateTool(id: string, input: Record<string, unknown>) {
  return adminFetch<{ ok: true }>(`/api/admin/content/tools/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function apiAdminDeleteTool(id: string) {
  return adminFetch<{ ok: true }>(`/api/admin/content/tools/${id}`, {
    method: "DELETE",
  });
}

export function apiAdminListTestimonials() {
  return adminFetch<{ items: AdminTestimonialItem[] }>(
    "/api/admin/content/testimonials",
    { method: "GET" }
  );
}

export function apiAdminCreateTestimonial(input: Record<string, unknown>) {
  return adminFetch<{ id: string }>("/api/admin/content/testimonials", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiAdminUpdateTestimonial(id: string, input: Record<string, unknown>) {
  return adminFetch<{ ok: true }>(`/api/admin/content/testimonials/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function apiAdminDeleteTestimonial(id: string) {
  return adminFetch<{ ok: true }>(`/api/admin/content/testimonials/${id}`, {
    method: "DELETE",
  });
}

export function apiAdminListPlans() {
  return adminFetch<{ items: AdminPlanListItem[] }>("/api/admin/content/plans", {
    method: "GET",
  });
}

export function apiAdminGetPlan(id: string) {
  return adminFetch<{ item: AdminPlanItem }>(`/api/admin/content/plans/${id}`, {
    method: "GET",
  });
}

export function apiAdminCreatePlan(input: Record<string, unknown>) {
  return adminFetch<{ id: string }>("/api/admin/content/plans", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiAdminUpdatePlan(id: string, input: Record<string, unknown>) {
  return adminFetch<{ ok: true }>(`/api/admin/content/plans/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function apiAdminDeletePlan(id: string) {
  return adminFetch<{ ok: true }>(`/api/admin/content/plans/${id}`, {
    method: "DELETE",
  });
}

export function apiAdminListLeads() {
  return adminFetch<{ items: AdminLeadItem[] }>("/api/admin/content/leads", {
    method: "GET",
  });
}

export function apiAdminUpdateLead(id: string, status: LeadStatus) {
  return adminFetch<{ ok: true }>(`/api/admin/content/leads/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export function apiAdminListSiteSettings() {
  return adminFetch<{ items: AdminSiteSettingItem[] }>(
    "/api/admin/content/site-settings",
    { method: "GET" }
  );
}

export function apiAdminUpsertSiteSetting(
  key: string,
  value: unknown,
  status: "draft" | "published"
) {
  return adminFetch<{ id: string }>(`/api/admin/content/site-settings/${key}`, {
    method: "PUT",
    body: JSON.stringify({ value, status }),
  });
}

export function apiAdminListAdminUsers() {
  return adminFetch<{ users: AdminUserRow[] }>("/api/admin/users", {
    method: "GET",
  });
}

export function apiAdminCreateAdminUser(input: Record<string, unknown>) {
  return adminFetch<{ adminUser: AdminUserRow }>("/api/admin/users", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiAdminUpdateAdminUser(id: string, input: Record<string, unknown>) {
  return adminFetch<{ adminUser: AdminUserRow }>(`/api/admin/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function apiAdminResetAdminPassword(id: string, password: string) {
  return adminFetch<{ ok: true }>(`/api/admin/users/${id}/reset-password`, {
    method: "POST",
    body: JSON.stringify({ password }),
  });
}

export function apiAdminGetPageSections(pageKey: string, status: "draft" | "published") {
  return adminFetch<{ items: Array<{ id: string; page_key: string; section_key: string; status: string; order_index: number; content: unknown }> }>(
    `/api/admin/content/pages/${pageKey}/sections?status=${status}`,
    { method: "GET" }
  );
}

export function apiAdminUpsertPageSection(
  pageKey: string,
  sectionKey: string,
  payload: { content: unknown; orderIndex: number }
) {
  return adminFetch<{ id: string }>(
    `/api/admin/content/pages/${pageKey}/sections/${sectionKey}`,
    { method: "PUT", body: JSON.stringify(payload) }
  );
}

export function apiAdminPublishPage(pageKey: string) {
  return adminFetch<{ ok: true; published: number }>(
    `/api/admin/content/pages/${pageKey}/publish`,
    { method: "POST" }
  );
}
