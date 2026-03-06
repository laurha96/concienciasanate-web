import { Router } from "express";

import { authRoutes } from "./authRoutes";
import { userRoutes } from "./userRoutes";
import { resourceRoutes } from "./resourceRoutes";

export const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/resources", resourceRoutes);
