import { Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Counter, Reveal } from "./reveal";

const stats = [
  { value: 4, suffix: "+ Years", label: "Running Successfully" },
  { value: 7, suffix: "+", label: "Certified Trainers" },
  { value: 18, suffix: " hrs", label: "Facility Access" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Athlete performing a heavy barbell deadlift at Pro Athletic"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-70 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(70% 60% at 15% 40%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8">
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Premium Performance Center
          </span>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h1 className="display mt-6 max-w-4xl text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
            UNLEASH YOUR
            <br />
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              STRONGEST SELF
            </span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Train with elite coaches, world-class equipment, and a community built for champions.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full px-8 py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5"
              style={{ background: "var(--gradient-red)" }}
            >
              Start Today
            </a>
            <a
              href="#membership"
              className="rounded-full glass px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
            >
              View Membership
            </a>
          </div>
        </Reveal>

        <Reveal direction="up" delay={400}>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 rounded-3xl glass px-7 py-6 lg:inline-flex">
            <div>
              <div className="flex gap-1 text-primary" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">Rated 5 by members</p>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="min-w-28">
                <p className="display text-4xl text-foreground">
                  <Counter
                    to={s.value}
                    suffix={<span className="font-sans text-3xl">{s.suffix}</span>}
                  />
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
