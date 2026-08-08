import { Router } from "express";

import {
  postClosureRequest,
  postProcessClosure,
  postReapplyTombstones,
} from "../controllers/accountClosureController";
import { adminAuthMiddleware } from "../middleware/adminAuthMiddleware";
import { authRateLimiter } from "../middleware/rateLimiters";

export const accountClosureRoutes = Router();

/** Público: formulario /eliminar-cuenta (sin login). */
accountClosureRoutes.post(
  "/closure-request",
  authRateLimiter,
  postClosureRequest
);

/** Operaciones privilegiadas (admin del CMS / ops). No exponer al cliente final. */
accountClosureRoutes.post(
  "/process",
  adminAuthMiddleware,
  postProcessClosure
);
accountClosureRoutes.post(
  "/reapply-tombstones",
  adminAuthMiddleware,
  postReapplyTombstones
);
