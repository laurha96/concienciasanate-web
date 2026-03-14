import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="flex justify-center pb-28">
      <div className="text-center px-5">
        <h2 className="text-[36px] font-semibold mb-6 text-foreground">
          Empieza con un paso pequeño, sostenido y real
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            href="/recursos"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-[var(--green-primary-hover)]"
          >
            Explorar recursos
          </Link>

          <Link
            href="/registro"
            className="border border-border px-6 py-3 rounded-full bg-background text-foreground"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}
