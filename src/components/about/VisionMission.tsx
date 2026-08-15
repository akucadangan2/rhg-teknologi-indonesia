import { Compass, Target } from "lucide-react";
import { vision, missions } from "@/lib/data/company";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function VisionMission() {
  return (
    <FadeInSection className="mx-auto block max-w-4xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink/10 bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
            <Compass size={20} className="text-brand" />
          </span>
          <h2 className="mt-4 font-display text-lg font-bold text-ink">Visi</h2>
          <p className="mt-2 text-sm text-ink/70">{vision}</p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-circuit/10">
            <Target size={20} className="text-circuit" />
          </span>
          <h2 className="mt-4 font-display text-lg font-bold text-ink">Misi</h2>
          <ul className="mt-3 space-y-2">
            {missions.map((m) => (
              <li key={m} className="text-sm text-ink/70">— {m}</li>
            ))}
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}