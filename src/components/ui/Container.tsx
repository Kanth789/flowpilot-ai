import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = { children: ReactNode; className?: string } & HTMLAttributes<HTMLElement>;

export function Container({ children, className = "", ...props }: ContainerProps) {
  return <section className={`shell ${className}`.trim()} {...props}>{children}</section>;
}
