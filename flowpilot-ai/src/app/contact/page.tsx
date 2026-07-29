import { ContactForm } from "@/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Talk with FlowPilot AI about automating your business workflows with secure AI systems.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact FlowPilot AI", description: "Talk with our team about AI workflow automation.", url: "/contact" }, twitter: { title: "Contact FlowPilot AI", description: "Talk with our team about AI workflow automation." } };

export default function ContactPage() {
  return <ContactForm />;
}
