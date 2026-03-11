import { Router } from "express";

import { authRoutes } from "./authRoutes";
import { userRoutes } from "./userRoutes";
import { resourceRoutes } from "./resourceRoutes";
import { adminRoutes } from "./adminRoutes";
import { publicRoutes } from "./publicRoutes";

export const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/resources", resourceRoutes);
apiRoutes.use("/admin", adminRoutes);
apiRoutes.use("/public", publicRoutes);
