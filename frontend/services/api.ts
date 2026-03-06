import { getClientEnv } from "@/lib/env";
import { getAccessToken } from "@/services/auth-store";

export type ApiError = {
  message: string;
  issues?: unknown;
  status?: number;
};

function getApiBaseUrl() {
  const env = getClientEnv();
  return env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
}

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

export async function apiFetch<T>(
  path: string,
  options?: RequestInit & { auth?: boolean }
): Promise<T> {
  const url = `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const headers = new Headers(options?.headers);

  if (!headers.has("Content-Type") && options?.body) {
    headers.set("Content-Type", "application/json");
  }

  const needsAuth = options?.auth ?? false;
  if (needsAuth) {
    const token = getAccessToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const resp = await fetch(url, {
    ...options,
    headers,
    cache: "no-store",
  });

  if (!resp.ok) {
    const message = await readErrorMessage(resp);
    const err: ApiError = { message, status: resp.status };
    throw Object.assign(new Error(message), err);
  }

  const contentType = resp.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return undefined as unknown as T;
  }

  return (await resp.json()) as T;
}

export type AuthResponse = {
  token: string;
  user: { id: string; email: string | null };
};

export function apiLogin(input: { email: string; password: string }) {
  return apiFetch<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function apiRegister(input: {
  fullName: string;
  email: string;
  password: string;
}) {
  return apiFetch<AuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at?: string;
  updated_at?: string;
};

export function apiGetMyProfile() {
  return apiFetch<{ profile: Profile | null }>("/api/users/profile", {
    method: "GET",
    auth: true,
  });
}

export function apiUpdateMyProfile(input: {
  full_name?: string;
  avatar_url?: string | null;
}) {
  return apiFetch<{ profile: Profile | null }>("/api/users/profile", {
    method: "PUT",
    auth: true,
    body: JSON.stringify(input),
  });
}

export type Preferences = {
  user_id: string;
  interests: string[];
  objectives: string[];
  created_at?: string;
  updated_at?: string;
};

export function apiGetMyPreferences() {
  return apiFetch<{ preferences: Preferences }>("/api/users/preferences", {
    method: "GET",
    auth: true,
  });
}

export function apiUpdateMyPreferences(input: {
  interests: string[];
  objectives: string[];
}) {
  return apiFetch<{ preferences: Preferences }>("/api/users/preferences", {
    method: "PUT",
    auth: true,
    body: JSON.stringify(input),
  });
}

export type Resource = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  kind: string;
  is_free: boolean;
  storage_path: string | null;
  published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

export function apiListResources() {
  return apiFetch<{ resources: Resource[] }>("/api/resources", {
    method: "GET",
  });
}
