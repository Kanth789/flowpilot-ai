import Link from "next/link";
import { Button } from "@/components/ui/Button";

const links = [["Services", "/product"], ["Pricing", "/pricing"], ["Contact", "/contact"]] as const;

export function Navbar() {
  return <header className="site-header"><Link className="brand" href="/">flow<span>pilot</span> <small>AI</small></Link><nav aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Button className="button-small" href="/contact">Get started <span>↗</span></Button></header>;
}
