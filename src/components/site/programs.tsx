import { ArrowUpRight } from "lucide-react";
import strength from "@/assets/prog-strength.jpg";
import cardio from "@/assets/prog-cardio.jpg";
import functional from "@/assets/prog-functional.jpg";
import crossfit from "@/assets/prog-crossfit.jpg";
import bodybuilding from "@/assets/prog-bodybuilding.jpg";
import yoga from "@/assets/prog-yoga.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const programs = [
  { title: "Strength Training", desc: "Progressive barbell blocks for raw power.", img: strength },
  { title: "Weight Loss", desc: "Conditioning and nutrition to shred fat fast.", img: cardio },
  {
    title: "Functional Fitness",
    desc: "Move better with sled, rope and kettlebell work.",
    img: functional,
  },
  { title: "CrossFit", desc: "High-intensity WODs coached in small groups.", img: crossfit },
  {
    title: "Bodybuilding",
    desc: "Hypertrophy programming for stage-ready shape.",
    img: bodybuilding,
  },
  { title: "Cardio", desc: "Zone-based endurance on premium machines.", img: cardio },
  { title: "HIIT", desc: "45-minute intervals that torch calories.", img: crossfit },
  { title: "Yoga", desc: "Mobility, breath and recovery-focused flows.", img: yoga },
  { title: "Powerlifting", desc: "Squat, bench and deadlift meet preparation.", img: strength },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="TRAIN YOUR WAY"
          subtitle="Nine coached disciplines, one membership. Switch whenever your goals change."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={(i % 3) * 100}>
              <article className="group h-full overflow-hidden rounded-3xl glass lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} at Pro Athletic`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-wide uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Learn More <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
