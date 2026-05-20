import "dotenv/config";

import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { apiRateLimiter } from "./middleware/rateLimiters";
import { apiRoutes } from "./routes";
import { getEnv } from "./utils/env";

const env = getEnv();

const app = express();

// Railway / reverse proxy: IP real para rate limiting
app.set("trust proxy", 1);

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: false,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("tiny"));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", apiRateLimiter, apiRoutes);

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${env.PORT}`);
});
