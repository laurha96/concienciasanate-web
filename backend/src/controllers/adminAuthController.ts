import type { Request, Response } from "express";

import { signAdminAccessToken } from "../utils/adminJwt";
import { adminLogin, adminLoginSchema } from "../services/adminAuthService";
import type { AdminAuthedRequest } from "../middleware/adminAuthMiddleware";

export async function postAdminLogin(req: Request, res: Response) {
  const parsed = adminLoginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const { adminUser } = await adminLogin(parsed.data);
    const token = signAdminAccessToken({
      adminUserId: adminUser.id,
      email: adminUser.email,
      role: adminUser.role,
    });
    return res.json({ token, adminUser });
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}

export async function getAdminMe(req: AdminAuthedRequest, res: Response) {
  if (!req.admin) return res.status(401).json({ message: "Not authenticated" });
  return res.json({ adminUser: req.admin });
}
