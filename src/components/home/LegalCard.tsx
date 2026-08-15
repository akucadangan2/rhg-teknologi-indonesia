import { FileCheck, Building, CreditCard, Landmark } from "lucide-react";
import { legalInfo } from "@/lib/data/company";
import { FadeInSection } from "@/components/motion/FadeInSection";

const ICONS = [FileCheck, Building, CreditCard, Landmark];

export function LegalCard() {
  return (
    <FadeInSection className="mx-auto block max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-ink/10 bg-white p-8">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Legalitas Perusahaan
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          {legalInfo.companyName}, berdomisili di {legalInfo.domicile}. Kelengkapan dokumen
          tersedia untuk keperluan kontrak maupun pengadaan.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {legalInfo.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-ink/10 p-4">
                <Icon size={18} className="text-brand" />
                <span className="text-sm text-ink/70">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </FadeInSection>
  );
}