import type { Request, Response } from "express";

import { listResources } from "../services/resourceService";

export async function getResources(_req: Request, res: Response) {
  try {
    const resources = await listResources();
    return res.json({ resources });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
