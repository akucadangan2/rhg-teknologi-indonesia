import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { sectorHighlights } from "@/lib/data/company";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function SectorFocus() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-circuit/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/[0.07] blur-[100px]" />

      <FadeInSection className="relative mx-auto block max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-circuit/15 bg-circuit/[0.07] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-circuit sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-circuit" />
            Untuk Berbagai Sektor
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink md:text-4xl lg:text-[44px]">
            Solusi Teknologi untuk{" "}
            <span className="bg-gradient-to-r from-circuit to-brand bg-clip-text text-transparent">
              Pemerintah & Bisnis
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/55 sm:text-base">
            Kami menyesuaikan proses pengembangan dengan kebutuhan setiap
            sektor, mulai dari dokumentasi formal hingga implementasi produk
            digital yang membutuhkan kecepatan dan fleksibilitas.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* GOVERNMENT */}
          <article className="group relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white p-6 shadow-[0_18px_50px_rgba(17,22,43,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-circuit/20 hover:shadow-[0_24px_70px_rgba(17,22,43,0.07)] sm:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-circuit/[0.06] blur-[55px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/[0.06] bg-ink/[0.04]">
                  <Landmark className="h-5 w-5 text-ink/70" />
                </div>

                <span className="rounded-full border border-ink/[0.06] bg-ink/[0.025] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                  Government
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                Sektor Pemerintah
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-ink/55">
                Pengembangan sistem dengan perhatian pada dokumentasi,
                struktur proses, keamanan data, serta kebutuhan administratif
                instansi.
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-3">
                {sectorHighlights.government.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-ink/[0.05] bg-ink/[0.018] px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-circuit" />

                    <span className="text-sm leading-5 text-ink/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-7 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-ink/[0.035] px-3 py-2 text-[11px] font-medium text-ink/55">
                  <FileCheck2 className="h-3.5 w-3.5" />
                  Dokumentasi
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg bg-ink/[0.035] px-3 py-2 text-[11px] font-medium text-ink/55">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Compliance
                </div>
              </div>
            </div>
          </article>

          {/* PRIVATE */}
          <article className="group relative overflow-hidden rounded-[26px] border border-brand/15 bg-gradient-to-br from-brand/[0.055] via-white to-white p-6 shadow-[0_18px_50px_rgba(49,94,251,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_70px_rgba(49,94,251,0.09)] sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/[0.10] blur-[65px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/10 bg-brand/10">
                  <Building2 className="h-5 w-5 text-brand" />
                </div>

                <span className="rounded-full border border-brand/10 bg-brand/[0.07] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Private Sector
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                Sektor Swasta
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-ink/55">
                Pengembangan produk digital dengan fokus pada efisiensi,
                kecepatan implementasi, integrasi sistem, dan skalabilitas
                bisnis.
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-3">
                {sectorHighlights.private.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-brand/[0.08] bg-white/65 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />

                    <span className="text-sm leading-5 text-ink/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-7 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-brand/[0.07] px-3 py-2 text-[11px] font-medium text-brand">
                  <Rocket className="h-3.5 w-3.5" />
                  Fast Implementation
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg bg-brand/[0.07] px-3 py-2 text-[11px] font-medium text-brand">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  Scalable System
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom statement */}
        <div className="mt-6 rounded-2xl border border-ink/[0.06] bg-white/45 px-5 py-4 backdrop-blur-sm sm:px-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs leading-5 text-ink/45 sm:text-sm">
              Setiap solusi dikembangkan berdasarkan kebutuhan operasional,
              alur kerja, dan target implementasi masing-masing klien.
            </p>

            <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Custom Solution
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
