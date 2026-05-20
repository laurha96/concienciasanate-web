import rateLimit from "express-rate-limit";

/** Mensaje uniforme (no revelar si el email existe). */
const limitMessage = {
  message: "Demasiados intentos. Espera un momento e inténtalo de nuevo.",
};

/** Login / registro de usuarios finales. */
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: limitMessage,
  skipSuccessfulRequests: true,
});

/** Login del panel admin. */
export const adminAuthRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: limitMessage,
  skipSuccessfulRequests: true,
});

/** Formulario de contacto público. */
export const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: limitMessage,
});

/** Límite general por IP en toda la API (defensa en profundidad). */
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 600,
  standardHeaders: true,
  legacyHeaders: false,
  message: limitMessage,
});
