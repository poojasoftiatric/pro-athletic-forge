import { useState, useRef } from "react";
import before1 from "@/assets/before-1.webp";
import after1 from "@/assets/after-1.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const results = [
  { name: "Rohit", detail: "-14 kg in 6 months" },
  { name: "Ayesha", detail: "-9 kg, +5 kg lean mass" },
  { name: "Karan", detail: "+11 kg lean mass in 8 months" },
];

export function Transformations() {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPos(Math.round(percentage * 10) / 10);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title="REAL RESULTS"
          subtitle="Drag the slider or circle to see what disciplined coaching looks like."
        />

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem] glass">
              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className={`relative aspect-[4/5] sm:aspect-[4/3] select-none touch-none overflow-hidden ${
                  isDragging ? "cursor-grabbing" : "cursor-ew-resize"
                }`}
              >
                <img
                  src={after1}
                  alt="Member after their Pro Athletic transformation"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  width={800}
                  height={800}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center select-none"
                />
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden select-none"
                  style={{ width: `${pos}%` }}
                >
                  <img
                    src={before1}
                    alt="Member before their Pro Athletic transformation"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    width={800}
                    height={800}
                    className="pointer-events-none h-full w-full object-cover object-center select-none"
                    style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
                  />
                </div>

                {/* Vertical Divider & Draggable Center Circle */}
                <div
                  className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-primary shadow-glow z-10"
                  style={{ left: `${pos}%` }}
                >
                  <div
                    role="slider"
                    aria-label="Before and after comparison slider"
                    aria-valuenow={Math.round(pos)}
                    aria-valuemin={2}
                    aria-valuemax={98}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 3));
                      if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 3));
                    }}
                    className={`pointer-events-auto absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg transition-transform ring-4 ring-background/70 ${
                      isDragging
                        ? "scale-115 cursor-grabbing"
                        : "hover:scale-110 active:scale-95 cursor-grab"
                    }`}
                  >
                    <span className="select-none tracking-tighter">↔</span>
                  </div>
                </div>

                <span className="pointer-events-none absolute top-4 left-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase select-none">
                  Before
                </span>
                <span className="pointer-events-none absolute top-4 right-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase select-none">
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
                className="w-full accent-[oklch(0.556_0.245_28.5)] p-5 cursor-pointer"
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
