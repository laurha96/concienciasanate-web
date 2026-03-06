import { apiLogin, apiRegister } from "@/services/api";
import { clearAuth, setAccessToken, setStoredUser } from "@/services/auth-store";

export async function signInWithPassword(email: string, password: string) {
  const data = await apiLogin({ email, password });
  setAccessToken(data.token);
  setStoredUser({ id: data.user.id, email: data.user.email ?? null });
  return data;
}

export async function signUpWithPassword(
  fullName: string,
  email: string,
  password: string
) {
  const data = await apiRegister({ fullName, email, password });
  setAccessToken(data.token);
  setStoredUser({ id: data.user.id, email: data.user.email ?? null });
  return data;
}

export async function signOut() {
  clearAuth();
}
