import { Dumbbell, Flame, Salad, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal direction="up">
        <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">{eyebrow}</span>
        <h2 className="display mt-3 text-5xl sm:text-6xl">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      </Reveal>
    </div>
  );
}

const features = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    text: "Rogue racks, calibrated plates and performance machines maintained daily.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Trainers",
    text: "Coaches with national certifications and competitive athletic backgrounds.",
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    text: "Macro plans built around your body composition goals and daily routine.",
  },
  {
    icon: Flame,
    title: "Personalized Training",
    text: "Programming that adapts every block based on your measured progress.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Pro Athletic"
          title="BUILT FOR CHAMPIONS"
          subtitle="Everything under one roof so nothing stands between you and your next personal record."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} direction="up" delay={i * 100}>
              <article className="group h-full rounded-3xl glass lift p-7">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <f.icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-bold tracking-wide uppercase">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
