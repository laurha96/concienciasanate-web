import type { Request, Response } from "express";

import type { AdminAuthedRequest } from "../middleware/adminAuthMiddleware";
import {
  closureRequestSchema,
  createClosureRequest,
  processVerifiedClosure,
  reapplyTombstonesAfterRestore,
} from "../services/accountClosureService";

export async function postClosureRequest(req: Request, res: Response) {
  try {
    const parsed = closureRequestSchema.parse(req.body);
    const result = await createClosureRequest(parsed);
    return res.status(result.reused ? 200 : 201).json({
      message:
        "Hemos recibido tu solicitud de cierre. El acceso a tu cuenta será desactivado y comenzaremos la supresión o anonimización de los datos que no debamos conservar. Los documentos sujetos a obligaciones legales permanecerán bloqueados, protegidos y limitados a las finalidades autorizadas por la ley.",
      requestNumber: result.requestNumber,
      status: result.status,
      reused: result.reused,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No fue posible registrar la solicitud";
    const status = message.toLowerCase().includes("understood") ? 400 : 400;
    return res.status(status).json({ message });
  }
}

/** Internal/ops endpoint — protect with admin middleware in route wiring. */
export async function postProcessClosure(req: AdminAuthedRequest, res: Response) {
  try {
    const requestNumber = String(req.body?.requestNumber ?? "");
    if (!requestNumber) {
      return res.status(400).json({ message: "requestNumber requerido" });
    }
    const result = await processVerifiedClosure(requestNumber);
    return res.status(200).json({
      message:
        result.status === "closure_completed"
          ? "Tu cuenta ha sido cerrada y ya no puede utilizarse para acceder a Conciencia Sánate / Elynthis. Los datos no sujetos a conservación fueron eliminados o anonimizados. Los documentos que debamos conservar por obligaciones legales permanecen bloqueados y protegidos durante el periodo aplicable."
          : "Proceso actualizado. Existen retenciones o legal holds activos.",
      ...result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error procesando cierre";
    return res.status(400).json({ message });
  }
}

export async function postReapplyTombstones(_req: Request, res: Response) {
  try {
    const results = await reapplyTombstonesAfterRestore();
    return res.status(200).json({ reapplied: results.length, results });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error reaplicando tombstones";
    return res.status(500).json({ message });
  }
}
