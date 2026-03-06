import type { Response } from "express";

import type { AuthedRequest } from "../middleware/authMiddleware";
import {
  getPreferencesByUserId,
  updatePreferencesSchema,
  upsertPreferences,
} from "../services/preferencesService";
import {
  getProfileByUserId,
  updateProfileSchema,
  upsertProfile,
} from "../services/userService";

export async function getMyProfile(req: AuthedRequest, res: Response) {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  try {
    const profile = await getProfileByUserId(userId);
    return res.json({ profile });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function putMyProfile(req: AuthedRequest, res: Response) {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const parsed = updateProfileSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const profile = await upsertProfile(userId, parsed.data);
    return res.json({ profile });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getMyPreferences(req: AuthedRequest, res: Response) {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  try {
    const preferences = await getPreferencesByUserId(userId);
    return res.json({ preferences });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function putMyPreferences(req: AuthedRequest, res: Response) {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const parsed = updatePreferencesSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const preferences = await upsertPreferences(userId, parsed.data);
    return res.json({ preferences });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
