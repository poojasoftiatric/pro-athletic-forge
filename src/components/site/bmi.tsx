import { useMemo, useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

function statusFor(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", tip: "Focus on strength and a calorie surplus." };
  if (bmi < 25) return { label: "Healthy", tip: "Great base — build performance and muscle." };
  if (bmi < 30) return { label: "Overweight", tip: "Conditioning plus nutrition coaching works." };
  return { label: "Obese", tip: "Start with guided low-impact training." };
}

export function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const gauge = useMemo(() => {
    const value = bmi ?? 0;
    const pct = Math.max(0, Math.min(1, (value - 10) / 30));
    return pct * 270;
  }, [bmi]);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0) {
      setBmi(null);
      return;
    }
    setBmi(Math.round((w / (h * h)) * 10) / 10);
  };

  const status = bmi ? statusFor(bmi) : null;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Know Your Numbers"
          title="BMI CALCULATOR"
          subtitle="Get an instant baseline, then let a coach turn it into a plan."
        />
        <div className="mt-14 grid items-center gap-8 rounded-[2rem] glass p-8 lg:grid-cols-2 lg:p-12">
          <Reveal direction="left">
            <div className="space-y-5">
              <div>
                <label htmlFor="bmi-height" className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Height (cm)
                </label>
                <input
                  id="bmi-height"
                  type="number"
                  inputMode="decimal"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="eg: 175"
                  className="mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="bmi-weight" className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Weight (kg)
                </label>
                <input
                  id="bmi-weight"
                  type="number"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="eg: 72"
                  className="mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 outline-none transition focus:border-primary"
                />
              </div>
              <button
                type="button"
                onClick={calculate}
                className="w-full rounded-full py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5"
                style={{ background: "var(--gradient-red)" }}
              >
                Calculate BMI
              </button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex flex-col items-center">
              <div className="relative h-56 w-56">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-[135deg]">
                  <circle
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="oklch(1 0 0 / 10%)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${(270 / 360) * 2 * Math.PI * 82} ${2 * Math.PI * 82}`}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${(gauge / 360) * 2 * Math.PI * 82} ${2 * Math.PI * 82}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="display text-6xl">{bmi ?? "--"}</span>
                  <span className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    BMI Score
                  </span>
                </div>
              </div>
              <p aria-live="polite" className="mt-5 text-center">
                <span className="text-lg font-bold tracking-wide text-primary uppercase">
                  {status?.label ?? "Enter your details"}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {status?.tip ?? "We'll show your health status instantly."}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
