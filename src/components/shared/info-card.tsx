import type { ReactNode } from "react";

export default function InfoCard({ className, children }: { className: string; children: ReactNode }) {
  return <article className={`hero-card ${className}`}>{children}</article>;
}
