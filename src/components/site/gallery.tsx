import weights from "@/assets/gal-weights.webp";
import cardio from "@/assets/gal-cardio.webp";
import reception from "@/assets/gal-reception.webp";
import locker from "@/assets/gal-locker.webp";
import functional from "@/assets/gal-functional.webp";
import recovery from "@/assets/gal-recovery.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const shots = [
  { img: weights, label: "Weight Section", w: 900, h: 1200 },
  { img: cardio, label: "Cardio Zone", w: 900, h: 700 },
  { img: functional, label: "Functional Zone", w: 900, h: 700 },
  { img: locker, label: "Locker Rooms", w: 900, h: 1200 },
  { img: reception, label: "Reception", w: 900, h: 700 },
  { img: recovery, label: "Recovery Area", w: 900, h: 1100 },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gym Gallery"
          title="INSIDE THE PRO ATHLETIC FLOOR"
          subtitle="Explore our specialized workout zones, Olympic weightlifting racks, cardio arenas, and recovery suites on VIP Road, Zirakpur."
        />
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:mt-10 lg:columns-3 [&>*]:mb-5">
          {shots.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={(i % 3) * 100}>
              <figure className="group relative overflow-hidden rounded-3xl glass break-inside-avoid">
                <img
                  src={typeof s.img === "string" ? s.img : s.img.src}
                  alt={`${s.label} facility and Olympic fitness training equipment at Pro Athletic Gym on VIP Road Zirakpur`}
                  loading="lazy"
                  decoding="async"
                  width={s.w}
                  height={s.h}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 text-sm font-bold tracking-widest uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
