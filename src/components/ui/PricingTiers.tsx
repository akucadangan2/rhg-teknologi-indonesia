import { Check } from "lucide-react";
import { PricingTier } from "@/types/service";

export function PricingTiers({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-xl border p-6 ${
            tier.highlighted
              ? "border-brand bg-gradient-to-b from-brand/5 to-transparent shadow-md"
              : "border-ink/10 bg-white"
          }`}
        >
          {tier.highlighted && (
            <span className="mb-2 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
              Paling Populer
            </span>
          )}
          <h3 className="font-display text-lg font-bold text-ink">{tier.name}</h3>
          <p className="mt-1 font-display text-2xl font-extrabold text-ink">{tier.price}</p>
          <p className="mt-1 text-sm text-ink/60">{tier.description}</p>
          <ul className="mt-4 space-y-2">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-ink/70">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}