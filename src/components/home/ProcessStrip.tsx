import {
  CheckCircle2,
  Code2,
  FileSearch,
  Lightbulb,
  Rocket,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import { workProcess } from "@/lib/data/process";
import { FadeInSection } from "@/components/motion/FadeInSection";

const STEP_ICONS = [
  Lightbulb,
  FileSearch,
  Settings2,
  Code2,
  ShieldCheck,
  Rocket,
];

export function ProcessStrip() {
  return (
    <section className="relative overflow-hidden border-y border-ink/[0.05] bg-white/45">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,22,43,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,22,43,0.018)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/[0.06] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-circuit/[0.06] blur-[110px]" />

      <FadeInSection className="relative mx-auto block max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.07] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Development Process
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink md:text-4xl lg:text-[44px]">
            Alur Kerja yang{" "}
            <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
              Terstruktur & Transparan
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/55 sm:text-base">
            Setiap proyek dikerjakan melalui tahapan yang jelas, mulai dari
            memahami kebutuhan hingga implementasi dan dukungan setelah sistem
            digunakan.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-14">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workProcess.map((step, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              const number = String(i + 1).padStart(2, "0");

              return (
                <article
                  key={step.title}
                  className="group relative overflow-hidden rounded-[24px] border border-ink/[0.07] bg-white/85 p-6 shadow-[0_14px_45px_rgba(17,22,43,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_22px_60px_rgba(17,22,43,0.07)]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/[0.07] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div className="relative flex h-16 w-16 items-center justify-center">
                        <div className="absolute inset-0 rounded-2xl border border-brand/10 bg-brand/[0.05] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />

                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-circuit text-white shadow-[0_8px_22px_rgba(49,94,251,0.22)]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <span className="font-mono text-3xl font-bold tracking-[-0.05em] text-ink/[0.07] transition-colors duration-300 group-hover:text-brand/[0.12]">
                        {number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-6 bg-brand/40" />
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand/70">
                          Tahap {number}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold tracking-[-0.015em] text-ink">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-ink/55">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center gap-2 border-t border-ink/[0.05] pt-4 text-[10px] font-medium text-ink/35">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand/70" />
                      Proses terukur dan terdokumentasi
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-ink/[0.06] bg-white/55 px-5 py-4 backdrop-blur-sm">
            <p className="font-display text-sm font-bold text-ink">
              Scope yang Jelas
            </p>
            <p className="mt-1 text-xs leading-5 text-ink/45">
              Ruang lingkup dan kebutuhan disepakati sebelum pengembangan.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/[0.06] bg-white/55 px-5 py-4 backdrop-blur-sm">
            <p className="font-display text-sm font-bold text-ink">
              Progress Terpantau
            </p>
            <p className="mt-1 text-xs leading-5 text-ink/45">
              Perkembangan proyek dapat dipantau selama proses implementasi.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/[0.06] bg-white/55 px-5 py-4 backdrop-blur-sm">
            <p className="font-display text-sm font-bold text-ink">
              Support Setelah Launch
            </p>
            <p className="mt-1 text-xs leading-5 text-ink/45">
              Dukungan teknis tersedia setelah sistem mulai digunakan.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
