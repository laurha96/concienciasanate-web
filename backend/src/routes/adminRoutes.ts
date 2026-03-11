import { Router } from "express";

import { adminAuthMiddleware } from "../middleware/adminAuthMiddleware";
import { canEditPublicContent, requireAdminRole, superAdminOnly } from "../middleware/adminRbac";
import { getAdminMe, postAdminLogin } from "../controllers/adminAuthController";
import {
  getAdminUsers,
  patchAdminUser,
  postAdminResetPassword,
  postAdminUser,
} from "../controllers/adminUsersController";
import { adminContentRoutes } from "./adminContentRoutes";

export const adminRoutes = Router();

// Auth
adminRoutes.post("/auth/login", postAdminLogin);
adminRoutes.get("/auth/me", adminAuthMiddleware, getAdminMe);

// Admin users
adminRoutes.get("/users", adminAuthMiddleware, requireAdminRole(superAdminOnly), getAdminUsers);
adminRoutes.post("/users", adminAuthMiddleware, requireAdminRole(superAdminOnly), postAdminUser);
adminRoutes.patch(
  "/users/:id",
  adminAuthMiddleware,
  requireAdminRole(superAdminOnly),
  patchAdminUser
);
adminRoutes.post(
  "/users/:id/reset-password",
  adminAuthMiddleware,
  requireAdminRole(superAdminOnly),
  postAdminResetPassword
);

// Content modules will be mounted under /content
adminRoutes.use(
  "/content",
  adminAuthMiddleware,
  requireAdminRole(canEditPublicContent),
  adminContentRoutes
);
