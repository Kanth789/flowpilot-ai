import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const faqs = [["When will I hear back?", "We reply to every message within one business day."], ["What should I bring to a first call?", "A rough idea of the process you want to improve is plenty."], ["Do you work with enterprise teams?", "Yes. We build secure, tailored systems for teams of all sizes."]];

export function ContactForm() {
  return <>
    <Container className="contact"><SectionTitle eyebrow="Let’s talk" level={1}>Ready to make work<br /><em>flow?</em></SectionTitle><p className="lede">Tell us a little about your team. We’ll be in touch within one business day.</p><form action="#contact-form" id="contact-form"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" placeholder="Your name" required aria-describedby="name-help" /><span id="name-help" className="field-help">Please enter your full name.</span><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-describedby="email-help" /><span id="email-help" className="field-help">Use a valid work email address.</span><label htmlFor="message">What would you like to improve?</label><textarea id="message" name="message" autoComplete="off" placeholder="Tell us about your workflow" rows={4} required aria-describedby="message-help" /><span id="message-help" className="field-help">Tell us briefly about the workflow you want to improve.</span><Button type="submit">Send message <span aria-hidden="true">↗</span></Button></form></Container>
    <Container className="office"><div><SectionTitle eyebrow="Our office">Built for teams<br />everywhere.</SectionTitle><p>FlowPilot AI is a distributed team, with our home base in Bengaluru, India.</p><a href="mailto:hello@flowpilot.ai">hello@flowpilot.ai</a></div></Container>
    <Container className="content-section faq-section"><div><SectionTitle eyebrow="FAQ">A few useful<br /><em>answers.</em></SectionTitle></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></Container>
  </>;
}
