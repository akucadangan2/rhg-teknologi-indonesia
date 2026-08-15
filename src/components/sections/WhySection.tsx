import { Sparkles, Zap, ShieldCheck, Layers } from "lucide-react";
import { SellingPoint } from "@/types/service";
import { FadeInSection } from "@/components/motion/FadeInSection";

const ICONS = [Sparkles, Zap, ShieldCheck, Layers];

export function WhySection({
  points,
  title = "Kenapa Pilih Kami",
}: {
  points: SellingPoint[];
  title?: string;
}) {
  return (
    <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6 py-12">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {points.map((point, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={point.title} className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-circuit">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">{point.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{point.description}</p>
            </div>
          );
        })}
      </div>
    </FadeInSection>
  );
}