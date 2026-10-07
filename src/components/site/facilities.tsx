import {
  Car,
  CupSoda,
  Droplets,
  Lock,
  LockKeyhole,
  Snowflake,
  Sparkles,
  Waves,
  Wifi,
  Activity,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./why-us";

const facilities = [
  { icon: Waves, label: "Steam Bath" },
  { icon: Lock, label: "Locker" },
  { icon: Car, label: "Parking" },
  { icon: CupSoda, label: "Protein Bar" },
  { icon: Wifi, label: "WiFi" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: LockKeyhole, label: "Personal Lockers" },
  { icon: Droplets, label: "Shower Rooms" },
  { icon: Activity, label: "Functional Zone" },
  { icon: Sparkles, label: "Recovery Area" },
];

export function Facilities() {
  return (
    <section className="relative py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="EVERY DETAIL COVERED"
          subtitle="Amenities that make training the easiest part of your day."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5">
          {facilities.map((f, i) => (
            <Reveal key={f.label} direction="scale" delay={(i % 5) * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-3xl glass lift p-6 text-center">
                <f.icon size={26} className="text-primary" />
                <span className="text-sm font-semibold tracking-wide">{f.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
