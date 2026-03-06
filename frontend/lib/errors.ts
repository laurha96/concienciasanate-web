export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "message" in error) {
    const maybe = (error as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  return "Ocurrió un error inesperado";
}
