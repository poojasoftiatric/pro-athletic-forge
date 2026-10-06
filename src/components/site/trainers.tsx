import { Instagram, Twitter, Youtube } from "lucide-react";
import t1 from "@/assets/Kishan Trainer.jpeg";
import t2 from "@/assets/Yogesh.png";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const trainers = [
  { name: "Kishan", spec: "Fitness Trainer", exp: "12 years", img: t1 },
  { name: "Yogesh", spec: "Gym Manager & Fitness Consultant", exp: "8 years", img: t2 },
  { name: "Dev Kapoor", spec: "Bodybuilding", exp: "15 years", img: t3 },
  { name: "Sara Iyer", spec: "Yoga & Mobility", exp: "9 years", img: t4 },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Trainers"
          title="COACHED BY THE BEST"
          subtitle="Every coach on the floor competes, studies and programs at a professional level."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 100}>
              <article className="group overflow-hidden rounded-3xl glass lift">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.name}, ${t.spec} coach`}
                    loading="lazy"
                    width={700}
                    height={900}
                    className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-3 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {[Instagram, Twitter, Youtube].map((Icon, n) => (
                      <a
                        key={n}
                        href="#trainers"
                        aria-label={`${t.name} social profile`}
                        className="rounded-full glass p-2.5 hover:text-primary"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base font-bold tracking-wide uppercase">{t.name}</h3>
                  <p className="mt-1 text-sm text-primary line-clamp-2 min-h-[2.5rem]">{t.spec}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.exp} experience</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
