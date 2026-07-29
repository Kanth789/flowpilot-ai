import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const logos = ["Northstar", "vertex", "Luma", "arc", "NEXUS"];
const features = [
  ["01", "Automate the repeatable", "Build AI workflows that handle routine decisions and handoffs."],
  ["02", "Keep every system connected", "Bring your documents, tools, and teams into one reliable flow."],
  ["03", "Scale with confidence", "Give teams intelligent support without sacrificing control."],
];
const testimonials = [
  ["FlowPilot gave our operations team back hours every week. The handoffs are finally invisible.", "Maya Chen", "COO, Northstar"],
  ["We went from manual document review to a reliable AI workflow in just a few weeks.", "Owen Brooks", "Head of Operations, Vertex"],
];
const faqs = [
  ["How quickly can we get started?", "Most teams identify a first automation within the first week of working with us."],
  ["Does FlowPilot work with our existing tools?", "Yes. We connect to the tools your team already relies on through secure APIs and integrations."],
  ["Is our business data secure?", "Security is built into every engagement, with access controls and enterprise-ready safeguards."],
];

export function Hero() {
  return <>
    <Container className="hero"><SectionTitle eyebrow="FlowPilot AI" level={1}>Automate repetitive<br />business <em>workflows.</em></SectionTitle><p className="lede">We design practical AI systems that turn slow, manual work into reliable automated workflows.</p><div className="hero-actions"><Button href="/contact">Automate your work <span aria-hidden="true">↗</span></Button><Link className="text-link" href="/product">Explore our services <span aria-hidden="true">→</span></Link></div></Container>
    <section className="trusted"><div className="shell"><p>Trusted by teams building what’s next</p><div>{logos.map((logo) => <span key={logo}>{logo}</span>)}</div></div></section>
    <Container className="content-section"><SectionTitle eyebrow="Built for real operations">AI that takes care of<br /><em>the busywork.</em></SectionTitle><div className="feature-grid">{features.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Container>
    <Container className="benefit-grid"><div><SectionTitle eyebrow="The difference">More momentum.<br /><em>Less manual work.</em></SectionTitle></div><div className="benefit-list"><p><b>01</b> Give your team time back for work that needs a human touch.</p><p><b>02</b> Make every process consistent, visible, and easy to improve.</p><p><b>03</b> Add AI to your business without adding operational complexity.</p></div></Container>
    <Container className="content-section"><SectionTitle eyebrow="Customer stories">Built alongside teams<br />that refuse to <em>stand still.</em></SectionTitle><div className="quote-grid">{testimonials.map(([quote, name, role]) => <Card className="quote-card" key={name}><blockquote>“{quote}”</blockquote><figcaption><b>{name}</b><span>{role}</span></figcaption></Card>)}</div></Container>
    <Container className="content-section faq-section"><div><SectionTitle eyebrow="FAQ">Questions, <em>answered.</em></SectionTitle></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></Container>
    <Container className="cta"><SectionTitle eyebrow="Start your flow">Ready to put AI<br />to <em>work?</em></SectionTitle><Button href="/contact">Talk to our team <span>↗</span></Button></Container>
  </>;
}
