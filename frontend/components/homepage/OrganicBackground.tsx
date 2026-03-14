import * as React from "react";

export default function OrganicBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background" />

      <div className="absolute -left-[100px] -top-[200px] h-[700px] w-[700px] rounded-full bg-primary/10 blur-[120px] opacity-70" />
      <div className="absolute right-[-150px] top-[200px] h-[600px] w-[600px] rounded-full bg-primary/12 blur-[120px] opacity-60" />
      <div className="absolute bottom-[-200px] left-[200px] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[140px] opacity-60" />
    </div>
  );
}
