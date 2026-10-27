"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const faqs = [
  {
    q: "What are Pro Athletic's operating hours?",
    a: "Pro Athletic is staffed from 6 AM to 11 PM, 7 days a week — including public holidays. Members on Elite or 24/7 access plans can use the facility at any hour with their access card.",
  },
  {
    q: "Where is Pro Athletic located?",
    a: "We are located at Hollywood Plaza, SCO 9-10, VIP Road, Zirakpur, Punjab 140603 — easily accessible from Chandigarh, Panchkula, and Mohali.",
  },
  {
    q: "How much does a gym membership cost?",
    a: "Memberships start at ₹5,000 for 3 months (Starter), ₹7,500 for 6 months (Premium), and ₹10,000 for 12 months (Elite). Every plan includes a free onboarding session with a certified trainer. There are no hidden fees.",
  },
  {
    q: "Does Pro Athletic offer personal training?",
    a: "Yes! We have 7+ certified personal trainers specialising in Strength Training, CrossFit, Yoga, Bodybuilding, and Weight Loss. Personal training is included in Premium and Elite membership plans, and can be added to any plan.",
  },
  {
    q: "Can I try the gym before joining?",
    a: "Absolutely. We offer a completely free trial session with no commitment required. Book through the contact form on this page or call us directly at +91-98200-44120.",
  },
  {
    q: "What programs does Pro Athletic offer?",
    a: "We offer 9 coached disciplines under one membership: Strength Training, Weight Loss, Functional Fitness, CrossFit, Bodybuilding, Cardio, HIIT, Yoga, and Powerlifting. You can switch between programs as your goals evolve.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about gym timings, membership fees, certified trainers, and free trial passes in Zirakpur."
        />

        <dl className="mt-8 space-y-3 lg:mt-10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} direction="up" delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl glass transition-all duration-300 ${
                    isOpen ? "border-primary/50" : ""
                  }`}
                >
                  <dt>
                    <button
                      id={`faq-btn-${i}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold tracking-wide transition-colors hover:text-primary"
                    >
                      <h3 className="text-base font-semibold tracking-wide">{faq.q}</h3>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-primary text-primary-foreground"
                            : "border border-glass-border text-muted-foreground"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={14} />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
