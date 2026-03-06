import { Router } from "express";

import { getResources } from "../controllers/resourceController";

export const resourceRoutes = Router();

resourceRoutes.get("/", getResources);
