import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const info = [
  { icon: Phone, label: "Phone", value: "+91 98200 44120" },
  { icon: Mail, label: "Email", value: "train@proathletic.fit" },
  { icon: MapPin, label: "Address", value: "24 Turf Lane, Bandra West, Mumbai 400050" },
  { icon: Clock, label: "Working Hours", value: "Open 24/7 · Staffed 6am – 11pm" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 text-sm outline-none transition focus:border-primary";
  const labelCls =
    "text-xs font-semibold tracking-widest uppercase text-muted-foreground";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="BOOK A FREE TRIAL"
          subtitle="One session on us. Bring your goals, we'll bring the plan."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full overflow-hidden rounded-[2rem] glass">
              <iframe
                title="Pro Athletic location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.81%2C19.04%2C72.86%2C19.08&layer=mapnik"
                loading="lazy"
                className="h-72 w-full border-0 grayscale lg:h-80"
              />
              <ul className="grid gap-4 p-7 sm:grid-cols-2">
                {info.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <item.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[11px] tracking-widest uppercase text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={onSubmit} className="rounded-[2rem] glass p-8 lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input id="name" name="name" required className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email</label>
                  <input id="email" name="email" type="email" required className={field} placeholder="you@email.com" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="phone" className={labelCls}>Phone</label>
                <input id="phone" name="phone" type="tel" required className={field} placeholder="+91" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className={labelCls}>Message</label>
                <textarea id="message" name="message" rows={4} className={field} placeholder="What are you training for?" />
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-full py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5"
                style={{ background: "var(--gradient-red)" }}
              >
                Book Free Trial
              </button>
              <p aria-live="polite" className="mt-4 min-h-5 text-center text-sm text-primary">
                {sent ? "Thanks — our team will call you within 24 hours." : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
