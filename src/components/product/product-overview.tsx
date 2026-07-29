import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [["01", "Map the work", "We find the repeatable steps slowing your team down."], ["02", "Build the flow", "We connect AI, documents, and systems into one practical workflow."], ["03", "Improve as you grow", "Track outcomes and keep making the flow smarter over time."]];
const features = ["AI Workflow Automation", "Document Processing", "AI Agents", "API Integration"];

export function ProductOverview() {
  return <>
    <Container className="page-intro"><SectionTitle eyebrow="The FlowPilot platform" level={1}>Business operations,<br /><em>on autopilot.</em></SectionTitle><p className="lede">A practical AI layer for the workflows, systems, and documents that power your business.</p><Button href="/contact">Build your workflow <span>↗</span></Button></Container>
    <Container className="content-section"><SectionTitle eyebrow="How it works">From friction to flow<br />in <em>three steps.</em></SectionTitle><div className="feature-grid">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Container>
    <Container className="dashboard"><div className="dashboard-top"><span>Operations overview</span><span className="live-dot">Systems live</span></div><div className="dashboard-metrics"><p><b>42</b><span>workflows running</span></p><p><b>86%</b><span>manual work removed</span></p><p><b>12.4h</b><span>saved this week</span></p></div><div className="dashboard-flow"><span>New document</span><i /> <span>AI review</span><i /> <span>Action completed</span></div></Container>
    <Container className="content-section"><SectionTitle eyebrow="Capabilities">Everything your team needs<br />to <em>move faster.</em></SectionTitle><div className="capability-list">{features.map((feature, index) => <Card key={feature}><span>0{index + 1}</span><h3>{feature}</h3><p>Designed to work with your people and the tools they use every day.</p></Card>)}</div></Container>
    <Container className="split-section"><div><SectionTitle eyebrow="Enterprise security">Designed for<br /><em>your trust.</em></SectionTitle></div><p className="lede">Role-based access, secure integrations, and clear oversight help you bring AI into core operations with confidence.</p></Container>
    <Container className="split-section api-section"><div><SectionTitle eyebrow="API first">Connect the tools<br />you already <em>use.</em></SectionTitle></div><pre>{`POST /workflows/run\n{\n  "document": "invoice.pdf",\n  "action": "extract-and-route"\n}`}</pre></Container>
    <Container className="cta"><SectionTitle eyebrow="Your next workflow">Let’s build something<br /><em>smarter.</em></SectionTitle><Button href="/contact">Talk to our team <span>↗</span></Button></Container>
  </>;
}
