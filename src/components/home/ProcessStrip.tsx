import { workProcess } from "@/lib/data/process";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function ProcessStrip() {
  return (
    <FadeInSection className="mx-auto block max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
        Alur Kerja Kami
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workProcess.map((step, i) => (
          <div key={step.title} className="rounded-xl border border-ink/10 bg-white p-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-circuit font-mono text-xs font-semibold text-white">
              {i + 1}
            </span>
            <h3 className="mt-3 font-display font-semibold text-ink">{step.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{step.description}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}