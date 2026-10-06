import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const info = [
  { icon: Phone, label: "Phone", value: "+91 98200 44120" },
  { icon: Mail, label: "Email", value: "train@proathletic.fit" },
  {
    icon: MapPin,
    label: "Address",
    value: "Hollywood Plaza, SCO 9-10, VIP Rd, Zirakpur, Punjab 140603",
  },
  { icon: Clock, label: "Working Hours", value: "Open 24/7 · Staffed 6am – 11pm" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage("Sending message...");
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResultMessage("Thanks! Our team will call you within 24 hours.");
        form.reset();
      } else {
        setIsSuccess(false);
        setResultMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResultMessage("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 text-sm outline-none transition focus:border-primary";
  const labelCls = "text-xs font-semibold tracking-widest uppercase text-muted-foreground";

  const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"];

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
                src="https://maps.google.com/maps?q=Hollywood%20Plaza%2C%20SCO%209-10%2C%20VIP%20Rd%2C%20Zirakpur%2C%20Punjab%20140603&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-72 w-full border-0 lg:h-80"
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
              <input type="hidden" name="access_key" value={accessKey} />
              <input
                type="hidden"
                name="subject"
                value="New Free Trial Booking - Pro Athletic Gym"
              />
              <input type="hidden" name="from_name" value="Pro Athletic Website" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="phone" className={labelCls}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={field}
                  placeholder="+91"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={field}
                  placeholder="What are you training for?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 w-full rounded-full py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "var(--gradient-red)" }}
              >
                {isSubmitting ? "Sending..." : "Book Free Trial"}
              </button>
              <p
                aria-live="polite"
                className={`mt-4 min-h-5 text-center text-sm ${
                  isSuccess ? "text-primary" : "text-red-400"
                }`}
              >
                {resultMessage}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
