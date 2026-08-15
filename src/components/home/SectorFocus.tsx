import { Landmark, Building2 } from "lucide-react";
import { sectorHighlights } from "@/lib/data/company";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function SectorFocus() {
  return (
    <FadeInSection className="mx-auto block max-w-6xl px-6 py-16">
      <div className="text-center">
        <span className="inline-block rounded-full bg-circuit/10 px-3 py-1 font-mono text-xs font-medium text-circuit">
          Untuk Semua Sektor
        </span>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-extrabold text-ink md:text-4xl">
          Melayani Instansi Pemerintah & Pelaku Usaha Swasta
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink/10 bg-white p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink/10">
            <Landmark size={22} className="text-ink/70" />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold text-ink">Sektor Pemerintah</h3>
          <p className="mt-1 text-sm text-ink/60">
            Siap memenuhi standar dokumentasi dan legalitas pengadaan.
          </p>
          <ul className="mt-4 space-y-2">
            {sectorHighlights.government.map((item) => (
              <li key={item} className="text-sm text-ink/70">— {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-brand/20 bg-brand/5 p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
            <Building2 size={22} className="text-brand" />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold text-ink">Sektor Swasta</h3>
          <p className="mt-1 text-sm text-ink/60">
            Fokus pada kecepatan implementasi dan pertumbuhan bisnis.
          </p>
          <ul className="mt-4 space-y-2">
            {sectorHighlights.private.map((item) => (
              <li key={item} className="text-sm text-ink/70">— {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}