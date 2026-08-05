import { Bell, CalendarCheck, CreditCard, LineChart, ListChecks } from "lucide-react";
import phone from "@/assets/app-phone.png";
import { Reveal } from "./reveal";

const features = [
  { icon: CalendarCheck, label: "Book Classes" },
  { icon: LineChart, label: "Track Progress" },
  { icon: CreditCard, label: "Membership Card" },
  { icon: ListChecks, label: "Workout Plans" },
  { icon: Bell, label: "Notifications" },
];

export function AppPromo() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 50% at 70% 50%, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
            Pro Athletic App
          </span>
          <h2 className="display mt-3 text-5xl sm:text-6xl">YOUR GYM IN YOUR POCKET</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Book sessions, follow your program and watch every lift trend upward — all from
            one app.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-2xl glass px-4 py-3 text-sm font-medium"
              >
                <f.icon size={18} className="text-primary" />
                {f.label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full glass px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition hover:border-primary hover:-translate-y-0.5"
            >
              App Store
            </a>
            <a
              href="#contact"
              className="rounded-full glass px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition hover:border-primary hover:-translate-y-0.5"
            >
              Google Play
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" className="flex justify-center">
          <img
            src={phone}
            alt="Pro Athletic mobile app shown on a smartphone"
            loading="lazy"
            width={800}
            height={1100}
            className="float-slow w-full max-w-md drop-shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
