import { Instagram, Twitter, Youtube } from "lucide-react";
import t1 from "@/assets/Kishan Trainer.webp";
import t2 from "@/assets/Yogesh.webp";
import t3 from "@/assets/Bhupesh.webp";
import t4 from "@/assets/Ankush.webp";
import t5 from "@/assets/Rohit_trainer.webp";
import t6 from "@/assets/Manpreet Yoga & Dance.webp";
import t7 from "@/assets/Vasu Fitness Trainer.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";
import { handleNavClick } from "@/lib/navigation";

const trainers = [
  { name: "Bhupesh", spec: "Branch Manager & Fitness Consultant", exp: "11 years", img: t3 },
  { name: "Kishan", spec: "Fitness Trainer", exp: "8 years", img: t1 },
  { name: "Rohit", spec: "Fitness Trainer", exp: "5 years", img: t5 },
  { name: "Vasu", spec: "Fitness Trainer", exp: "9 years", img: t7 },
  { name: "Ankush", spec: "Fitness Trainer", exp: "7 years", img: t4 },
  { name: "Manpreet", spec: "Yoga & Dance Instructor", exp: "8 years", img: t6 },
  { name: "Yogesh", spec: "Relationship Manager", exp: "10 years", img: t2 },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Certified Trainers"
          title="CERTIFIED PERSONAL TRAINERS"
          subtitle="Train with 7+ nationally accredited fitness coaches specializing in strength, body transformations, functional movement, and yoga."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-6 lg:mt-10">
          {trainers.map((t, i) => (
            <Reveal
              key={t.name}
              direction="up"
              delay={i * 100}
              className="trainer-card-col shrink-0"
            >
              <article className="group h-full overflow-hidden rounded-3xl glass lift">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={typeof t.img === "string" ? t.img : t.img.src}
                    alt={`${t.name} - certified personal trainer and ${t.spec} coach at Pro Athletic Gym Zirakpur (${t.exp} experience)`}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={750}
                    className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-3 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {[Instagram, Twitter, Youtube].map((Icon, n) => (
                      <a
                        key={n}
                        href="#trainers"
                        onClick={(e) => handleNavClick("#trainers", e)}
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
