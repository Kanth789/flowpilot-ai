import { plans } from "@/data/plans";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const comparison = [["Active workflows", "3", "Unlimited"], ["AI document processing", "—", "Included"], ["API integrations", "2", "Unlimited"], ["Support", "Email", "Priority"]];
const faqs = [["Can I change plans later?", "Absolutely. Your plan can grow with your team at any time."], ["Do you offer enterprise pricing?", "Yes. Contact us for a tailored plan with enterprise security and support."], ["Is there an onboarding fee?", "No. We’ll scope your first workflow with you before work begins."]];

export function PricingCards() {
  return <>
    <Container className="page-intro"><SectionTitle eyebrow="Simple, transparent pricing" level={1}>Start small.<br /><em>Scale smoothly.</em></SectionTitle><p className="lede">Choose a plan that matches your team today, then expand as automation becomes part of how you work.</p></Container>
    <Container className="pricing-grid">{plans.map((plan) => <Card className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>{plan.featured && <small>Most popular</small>}<h2>{plan.name}</h2><p>{plan.description}</p><div className="price">{plan.price}<span>{plan.period}</span></div><Button href="/contact">Choose {plan.name} <span>↗</span></Button><ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></Card>)}</Container>
    <section className="shell content-section comparison"><p className="eyebrow"><i /> Compare plans</p><h2>What’s included,<br /><em>at a glance.</em></h2><div role="table"><div role="row"><b>Capability</b><b>Starter</b><b>Scale</b></div>{comparison.map(([feature, starter, scale]) => <div role="row" key={feature}><span>{feature}</span><span>{starter}</span><span>{scale}</span></div>)}</div></section>
    <section className="shell content-section faq-section"><p className="eyebrow"><i /> FAQ</p><h2>Pricing without<br /><em>surprises.</em></h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    <Container className="cta"><SectionTitle eyebrow="Need a custom plan?">Let’s find the right<br /><em>way forward.</em></SectionTitle><Button href="/contact">Talk to our team <span>↗</span></Button></Container>
  </>;
}
