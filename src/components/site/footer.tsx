import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quick = ["Home", "About", "Programs", "Membership", "Trainers", "Contact"];
const programs = ["Strength Training", "Weight Loss", "CrossFit", "Bodybuilding", "Yoga"];

export function Footer() {
  const [joined, setJoined] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <footer className="border-t border-glass-border bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="display text-2xl tracking-widest">
            PRO<span className="text-primary">ATHLETIC</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            A premium athletic performance center built for people who take training seriously.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/pro_athletic_gyms/",
                label: "Instagram",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/proathleticgymsviproadzirakpur/",
                label: "Facebook",
              },
              { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
              { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pro Athletic ${s.label}`}
                className="rounded-full glass p-2.5 transition hover:border-primary hover:text-primary"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold tracking-widest uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {quick.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Programs">
          <h2 className="text-sm font-bold tracking-widest uppercase">Programs</h2>
          <ul className="mt-4 space-y-2.5">
            {programs.map((p) => (
              <li key={p}>
                <a
                  href="#programs"
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase">Newsletter</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Training tips and member offers, once a month.
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-glass-border bg-secondary/60 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:glow-red"
              style={{ background: "var(--gradient-red)" }}
            >
              Join
            </button>
          </form>
          <p aria-live="polite" className="mt-2 min-h-4 text-xs text-primary">
            {joined ? "You're subscribed." : ""}
          </p>
        </div>
      </div>

      <div className="border-t border-glass-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pro Athletic. All rights reserved.
      </div>
    </footer>
  );
}
