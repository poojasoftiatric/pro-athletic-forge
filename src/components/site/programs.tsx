import { ArrowUpRight } from "lucide-react";
import strength from "@/assets/prog-strength.webp";
import cardio from "@/assets/prog-cardio.webp";
import functional from "@/assets/prog-functional.webp";
import crossfit from "@/assets/prog-crossfit.webp";
import bodybuilding from "@/assets/prog-bodybuilding.webp";
import yoga from "@/assets/prog-yoga.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";
import { handleNavClick } from "@/lib/navigation";

const programs = [
  {
    title: "Strength Training",
    desc: "Progressive barbell strength training with power racks and Olympic barbells.",
    img: strength,
  },
  {
    title: "Weight Loss",
    desc: "High-burn metabolic conditioning and nutritional guidance for sustainable fat loss.",
    img: cardio,
  },
  {
    title: "Functional Fitness",
    desc: "Athletic agility, sled pushes, battle ropes, and kettlebell conditioning on turf.",
    img: functional,
  },
  {
    title: "CrossFit",
    desc: "High-intensity WODs coached in small, motivating groups by certified trainers.",
    img: crossfit,
  },
  {
    title: "Bodybuilding",
    desc: "Targeted hypertrophy workouts and symmetry coaching for stage or personal goals.",
    img: bodybuilding,
  },
  {
    title: "Cardio",
    desc: "Zone 2 and VO2 max endurance workouts on premium treadmills, bikes, and rowers.",
    img: cardio,
  },
  {
    title: "HIIT",
    desc: "Fast-paced 45-minute interval circuits that maximize calorie burn and endurance.",
    img: crossfit,
  },
  {
    title: "Yoga & Mobility",
    desc: "Joint mobility, deep stretching, mindful breathing, and athletic recovery flows.",
    img: yoga,
  },
  {
    title: "Powerlifting",
    desc: "Squat, bench press, and deadlift technique coaching for power and PRs.",
    img: strength,
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Training Programs"
          title="TRAIN YOUR WAY"
          subtitle="Nine expert-coached fitness disciplines, all under one membership on VIP Road. Switch anytime."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={(i % 3) * 100}>
              <article className="group h-full overflow-hidden rounded-3xl glass lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} session at Pro Athletic Gym Zirakpur`}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-wide uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick("#contact", e)}
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
