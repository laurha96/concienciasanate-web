import {
  apiGetMyPreferences,
  apiGetMyProfile,
  apiUpdateMyPreferences,
  apiUpdateMyProfile,
} from "@/services/api";

export type ProfileRow = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
};

export type UserPreferencesRow = {
  user_id: string;
  interests: string[];
  objectives: string[];
};

export async function fetchMyProfile() {
  const { profile } = await apiGetMyProfile();
  if (!profile) throw new Error("No pudimos cargar tu perfil");
  return profile as ProfileRow;
}

export async function upsertMyProfile(payload: {
  full_name: string;
  avatar_url?: string | null;
}) {
  await apiUpdateMyProfile({
    full_name: payload.full_name,
    ...(payload.avatar_url !== undefined ? { avatar_url: payload.avatar_url ?? null } : {}),
  });
}

export async function fetchMyPreferences() {
  const { preferences } = await apiGetMyPreferences();
  return preferences as UserPreferencesRow;
}

export async function upsertMyPreferences(payload: {
  interests: string[];
  objectives: string[];
}) {
  await apiUpdateMyPreferences(payload);
}
