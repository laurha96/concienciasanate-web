export default function OrganicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-muted/35 via-brand-background to-brand-surface" />
      <div className="absolute -left-28 -top-40 size-[min(760px,95vw)] rounded-full bg-[rgb(var(--brand-primary-rgb)/0.07)] blur-[110px]" />
      <div className="absolute -right-36 top-24 size-[min(600px,80vw)] rounded-full bg-[rgb(var(--brand-accent-rgb)/0.65)] blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 size-[min(680px,85vw)] -translate-x-1/3 rounded-full bg-soft-beige/90 blur-[120px]" />
    </div>
  );
}
