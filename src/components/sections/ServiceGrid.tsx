import { FadeInSection } from "@/components/motion/FadeInSection";
import { ServiceHubCard } from "@/components/layanan/ServiceHubCard";
import { services } from "@/lib/data/services";

export function ServiceGrid() {
  return (
    <section className="relative overflow-hidden bg-white/40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/[0.055] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-circuit/[0.055] blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,94,251,0.035)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
        {/* Heading */}
        <FadeInSection>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.07] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Digital Solutions
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink md:text-4xl lg:text-[44px]">
                Layanan Teknologi yang{" "}
                <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
                  Terintegrasi
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-ink/55 sm:text-base">
                Dari pengembangan website dan aplikasi hingga backend, payment
                gateway, GIS, serta integrasi sistem untuk mendukung proses
                bisnis secara end-to-end.
              </p>
            </div>

            <div className="max-w-sm rounded-2xl border border-ink/[0.06] bg-white/55 px-5 py-4 backdrop-blur-sm">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-ink/35">
                Our Approach
              </p>

              <p className="mt-1.5 text-xs leading-5 text-ink/55">
                Solusi dikembangkan berdasarkan kebutuhan nyata, bukan sekadar
                menggunakan template yang sama untuk setiap proyek.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeInSection key={service.slug} delay={i * 0.06}>
              <div className="h-full transition-transform duration-300 hover:-translate-y-1">
                <ServiceHubCard service={service} />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom strip */}
        <FadeInSection delay={0.15}>
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-ink/[0.06] bg-white/65 px-5 py-5 shadow-[0_10px_35px_rgba(17,22,43,0.025)] backdrop-blur-sm sm:flex-row sm:items-center sm:px-6">
            <div>
              <p className="font-display text-sm font-bold text-ink">
                Punya kebutuhan yang lebih spesifik?
              </p>

              <p className="mt-1 text-xs leading-5 text-ink/45">
                Sistem dapat dikembangkan secara custom sesuai alur operasional
                dan kebutuhan bisnis Anda.
              </p>
            </div>

            <a
              href="/kontak"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.07] px-4 py-2.5 text-xs font-semibold text-brand transition-all duration-200 hover:border-brand/25 hover:bg-brand hover:text-white"
            >
              Diskusikan Kebutuhan
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
