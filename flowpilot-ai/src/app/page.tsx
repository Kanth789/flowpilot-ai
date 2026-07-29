import { Hero } from "@/components/home/hero";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Enterprise Workflow Automation",
  description: "Automate repetitive business workflows with FlowPilot AI, from document processing to intelligent AI agents.",
  alternates: { canonical: "/" },
  openGraph: { title: "FlowPilot AI | Enterprise Workflow Automation", description: "Automate repetitive business workflows with AI.", url: "/" },
  twitter: { title: "FlowPilot AI | Enterprise Workflow Automation", description: "Automate repetitive business workflows with AI." },
};

export default function Home() {
  return (
    <><JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: "FlowPilot AI", url: "https://flowpilot.ai", description: "Enterprise AI workflow automation for modern operations.", email: "hello@flowpilot.ai" }} /><Hero /></>
  );
}
