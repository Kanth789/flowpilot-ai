import type { Plan } from "@/types/plan";

export const plans: Plan[] = [
  { name: "Starter", description: "For small teams building their first flow.", price: "$19", period: "/ member / mo", features: ["3 active workflows", "AI task summaries", "Email support"] },
  { name: "Scale", description: "For teams ready to run work at full speed.", price: "$49", period: "/ member / mo", features: ["Unlimited workflows", "Advanced automations", "Priority support"], featured: true },
];
