import type { HTMLAttributes, ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string } & HTMLAttributes<HTMLElement>;

export function Card({ children, className = "", ...props }: CardProps) {
  return <article className={`card ${className}`.trim()} {...props}>{children}</article>;
}
