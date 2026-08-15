import { LucideIcon } from "lucide-react";
import { FadeInSection } from "@/components/motion/FadeInSection";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <FadeInSection
            key={feature.title}
            delay={i * 0.05}
            className={`rounded-xl border border-ink/10 bg-white p-5 shadow-sm ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-circuit">
              <Icon size={20} className="text-white" />
            </div>
            <h3 className="mt-3 font-display font-semibold text-ink">{feature.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{feature.description}</p>
          </FadeInSection>
        );
      })}
    </div>
  );
}