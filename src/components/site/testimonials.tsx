import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import { SectionHeading } from "./why-us";

const reviews = [
  {
    name: "Vikram Sethi",
    img: t1,
    rating: 5,
    text: "The coaching is on another level. My deadlift went from 120 kg to 190 kg in a year and my back has never felt better.",
  },
  {
    name: "Meera Nair",
    img: t2,
    rating: 5,
    text: "Clean, premium and never overcrowded. The nutrition plan finally made fat loss feel simple and sustainable.",
  },
  {
    name: "Aditya Shah",
    img: t3,
    rating: 5,
    text: "24/7 access fits my shifts, and the recovery area is worth the membership on its own.",
  },
  {
    name: "Priya Menon",
    img: t4,
    rating: 5,
    text: "The group classes feel like a team. I actually look forward to training now.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const move = (d: number) => setIndex((i) => (i + d + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="MEMBER VOICES"
          subtitle="5,000+ athletes train here. Here's what a few of them say."
        />

        <div className="mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((r) => (
              <figure key={r.name} className="w-full shrink-0 px-2">
                <div className="mx-auto max-w-3xl rounded-[2rem] glass p-8 text-center lg:p-12">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={700}
                    height={900}
                    className="mx-auto h-20 w-20 rounded-full object-cover object-top ring-2 ring-primary/60"
                  />
                  <div
                    className="mt-4 flex justify-center gap-1 text-primary"
                    aria-label={`${r.rating} out of 5`}
                  >
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-bold tracking-widest uppercase">
                    {r.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
            className="rounded-full glass p-3 transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
            className="rounded-full glass p-3 transition hover:border-primary hover:text-primary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
