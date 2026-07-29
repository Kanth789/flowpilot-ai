import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, href, className = "", type, ...props }: ButtonProps) {
  const classes = `button ${className}`.trim();
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} type={type ?? "button"} {...props}>{children}</button>;
}
