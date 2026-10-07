import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./why-us";

const reviews = [
  {
    name: "Shivali Verma",
    rating: 5,
    time: "4 weeks ago",
    text: "Great facility, modern equipment, and a very positive training atmosphere. Special shoutout to my trainer Rohit for his dedication and clear guidance. He keeps every workout session engaging and effective. 5 stars all the way",
  },
  {
    name: "Reeva Talwar",
    rating: 5,
    time: "a year ago",
    text: "Absolutely love this gym! I've been training here for a while now, and I can confidently say it's one of the best gyms in the area. The equipment is top-notch and always clean, and there's plenty of space, so I never feel cramped—even during peak hours. The staff is super friendly, knowledgeable, and always willing to help, whether it's with form correction, workout advice, or just a quick chat for motivation. The vibe here is really positive and welcoming, no matter your fitness level.",
  },
  {
    name: "Vishesh Birla",
    rating: 5,
    time: "7 months ago",
    text: "I've been going to this gym for a few months now and I really love it. The equipment is modern and always clean, which is very important to me. The staff are friendly and always ready to help if you have a question. It has a great atmosphere that makes me feel motivated to work out. Highly recommended. Especially Rohit bhai, who helps really much and tells me the best technique to perform the exercises",
  },
  {
    name: "Amisha Tiwari",
    rating: 5,
    time: "2 months ago",
    text: "I've been working out here for a while, and it's been a great experience. The gym is clean, the equipment is well maintained, and the staff is friendly and supportive. Definitely a good place to stay consistent with your fitness goals✨",
  },
  {
    name: "Chandan Kumar Yadav",
    rating: 5,
    time: "a month ago",
    text: "It was best experience working out here... Must join if someone wants to transform without taking personal training... I am very happy with their equipment",
  },
  {
    name: "Srishti Sharma",
    rating: 5,
    time: "6 months ago",
    text: "A good gym. Trainers are amazing especially Rohit Sahota. He gives personal attention to all his clients and a very knowledgeable guy. Provides results. Must Join..",
  },
  {
    name: "Nehaa Sharma",
    rating: 5,
    time: "a month ago",
    text: "Clean, well-equipped, and professionally managed gym. The staff is friendly and the overall environment is very motivating. Great experience so far!",
  },
];

function GoogleIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const move = (d: number) => setIndex((i) => (i + d + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="MEMBER VOICES"
          subtitle="Real reviews from our Google verified members."
        />

        <div className="mt-8 overflow-hidden lg:mt-10">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((r) => (
              <figure key={r.name} className="w-full shrink-0 px-2">
                <div className="mx-auto max-w-2xl rounded-3xl glass p-6 sm:p-8 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white shadow-md ring-2 ring-primary/60 bg-gradient-to-br from-primary to-primary/70">
                      {r.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <figcaption className="text-sm font-bold tracking-wide uppercase text-foreground">
                        {r.name}
                      </figcaption>
                      <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                          <GoogleIcon /> Google Review
                        </span>
                        <span>·</span>
                        <span className="text-[11px]">{r.time}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-3 flex justify-center gap-1 text-primary"
                    aria-label={`${r.rating} out of 5`}
                  >
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="mt-3.5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                    “{r.text}”
                  </blockquote>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
            className="rounded-full glass p-2.5 transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
            className="rounded-full glass p-2.5 transition hover:border-primary hover:text-primary"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
