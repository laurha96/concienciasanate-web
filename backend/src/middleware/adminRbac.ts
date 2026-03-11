import type { NextFunction, Response } from "express";

import type { AdminAuthedRequest } from "./adminAuthMiddleware";
import type { AdminRole } from "../utils/adminJwt";

export function requireAdminRole(allowed: AdminRole[]) {
  return function roleGuard(req: AdminAuthedRequest, res: Response, next: NextFunction) {
    const role = req.admin?.role;
    if (!role) return res.status(401).json({ message: "Not authenticated" });

    if (!allowed.includes(role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    return next();
  };
}

export const canEditPublicContent: AdminRole[] = [
  "super_admin",
  "editor",
  "admin_professional",
];

export const superAdminOnly: AdminRole[] = ["super_admin"];
