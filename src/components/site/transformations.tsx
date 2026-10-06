import { useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const results = [
  { name: "Rohit", detail: "-14 kg in 6 months" },
  { name: "Ayesha", detail: "-9 kg, +5 kg lean mass" },
  { name: "Karan", detail: "+11 kg lean mass in 8 months" },
];

export function Transformations() {
  const [pos, setPos] = useState(50);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title="REAL RESULTS"
          subtitle="Drag the slider to see what disciplined coaching looks like."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem] glass">
              <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                <img
                  src={after1}
                  alt="Member after their Pro Athletic transformation"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                  <img
                    src={before1}
                    alt="Member before their Pro Athletic transformation"
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                    style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
                  style={{ left: `${pos}%` }}
                >
                  <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    ↔
                  </span>
                </div>
                <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
                  Before
                </span>
                <span className="absolute top-4 right-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
                  After
                </span>
              </div>
              <label htmlFor="compare" className="sr-only">
                Compare before and after
              </label>
              <input
                id="compare"
                type="range"
                min={2}
                max={98}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                className="w-full accent-[oklch(0.556_0.245_28.5)] p-5"
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {results.map((r, i) => (
              <Reveal key={r.name} direction="right" delay={i * 120}>
                <div className="rounded-3xl glass lift p-6">
                  <p className="display text-3xl">{r.detail}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{r.name} — Premium member</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
