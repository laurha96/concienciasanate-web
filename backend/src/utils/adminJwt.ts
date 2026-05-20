import jwt from "jsonwebtoken";

import { getAdminJwtSecret } from "./env";

export type AdminRole = "super_admin" | "editor" | "admin_professional";

export type JwtAdmin = {
  adminUserId: string;
  email: string;
  role: AdminRole;
};

export function signAdminAccessToken(payload: JwtAdmin): string {
  return jwt.sign(payload, getAdminJwtSecret(), { expiresIn: "7d" });
}

export function verifyAdminAccessToken(token: string): JwtAdmin {
  return jwt.verify(token, getAdminJwtSecret()) as JwtAdmin;
}
