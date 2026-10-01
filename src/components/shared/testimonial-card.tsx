import type { ReactNode } from "react";
import Image from "next/image";

export default function TestimonialCard({ name, role, children }: { name: string; role: string; children: ReactNode }) {
  return (
    <article className="testimonial-card">
      <Image className="testimonial-avatar" src="/people-1.png" alt={name} width={43} height={43} />
      <h3>{name}</h3>
      <p className="testimonial-role">{role}</p>
      <p className="testimonial-quote">{children}</p>
    </article>
  );
}
