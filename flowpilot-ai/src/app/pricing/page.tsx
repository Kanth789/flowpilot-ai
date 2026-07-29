import { PricingCards } from "@/components/pricing/pricing-cards";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = { title: "Pricing", description: "Transparent pricing for FlowPilot AI workflow automation, document processing, and intelligent agents.", alternates: { canonical: "/pricing" }, openGraph: { title: "FlowPilot AI Pricing", description: "Simple, transparent pricing for AI workflow automation.", url: "/pricing" }, twitter: { title: "FlowPilot AI Pricing", description: "Simple, transparent pricing for AI workflow automation." } };

export default function PricingPage() {
  return <><JsonLd data={[{ "@context": "https://schema.org", "@type": "Service", name: "FlowPilot AI Workflow Automation", provider: { "@type": "Organization", name: "FlowPilot AI" }, description: "AI workflow automation for business operations." }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can I change plans later?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Your plan can grow with your team at any time." } }, { "@type": "Question", name: "Do you offer enterprise pricing?", acceptedAnswer: { "@type": "Answer", text: "Yes. Contact us for a tailored plan with enterprise security and support." } }] }]} /><PricingCards /></>;
}
