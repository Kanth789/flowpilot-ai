import type { ReactNode } from "react";

type SectionTitleProps = { eyebrow: string; children: ReactNode; level?: 1 | 2; className?: string };

export function SectionTitle({ eyebrow, children, level = 2, className = "" }: SectionTitleProps) {
  const Heading = `h${level}` as "h1" | "h2";
  return <><p className="eyebrow"><i aria-hidden="true" /> {eyebrow}</p><Heading className={className}>{children}</Heading></>;
}
