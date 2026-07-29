import Link from "next/link";

export function Footer() {
  return <footer><span>© {new Date().getFullYear()} FlowPilot AI</span><div><Link href="/product">Services</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div></footer>;
}
