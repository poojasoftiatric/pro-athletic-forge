import { Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const plans = [
  {
    name: "Starter",
    price: "5000",
    duration: "3 Months",
    cta: "Join Starter",
    features: ["Gym Access", "Cardio Zone", "Locker"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "7500",
    duration: "6 Months",
    cta: "Become Premium",
    features: ["Everything in Starter", "Personal Training", "Nutrition Plan", "Group Classes"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "10000",
    duration: "12 Months",
    cta: "Go Elite",
    features: [
      "Unlimited Access",
      "Dedicated Coach",
      "Diet Consultation",
      "Body Analysis",
      "VIP Locker",
    ],
    highlight: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="CHOOSE YOUR LEVEL"
          subtitle="No hidden fees. Cancel anytime. Every plan includes a free onboarding session."
        />
        <div className="mt-8 grid items-stretch gap-6 lg:mt-10 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} direction="up" delay={i * 120} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 lift ${
                  plan.highlight ? "border border-primary/50 bg-card glow-red" : "glass"
                }`}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-8 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest text-primary-foreground uppercase"
                    style={{ background: "var(--gradient-red)" }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="text-sm font-bold tracking-[0.25em] text-muted-foreground uppercase">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="display text-6xl">₹{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/ {plan.duration}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block w-full rounded-full py-3.5 text-center text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "text-primary-foreground hover:glow-red"
                      : "border border-glass-border hover:border-primary"
                  }`}
                  style={plan.highlight ? { background: "var(--gradient-red)" } : undefined}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
