import { ProductOverview } from "@/components/product/product-overview";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = { title: "AI Automation Platform", description: "Explore FlowPilot AI's workflow automation platform, document processing, AI agents, API integrations, and enterprise security.", alternates: { canonical: "/product" }, openGraph: { title: "FlowPilot AI Platform", description: "AI automation for business operations.", url: "/product" }, twitter: { title: "FlowPilot AI Platform", description: "AI automation for business operations." } };

export default function ProductPage() {
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "FlowPilot AI", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "An AI workflow automation platform for business operations.", url: "https://flowpilot.ai/product" }} /><ProductOverview /></>;
}
