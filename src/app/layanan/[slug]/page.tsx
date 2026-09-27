import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  services,
  getServiceBySlug,
} from "@/lib/data/services";

import { workProcess } from "@/lib/data/process";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

const CUSTOM_DESIGN_SLUGS = [
  "aplikasi-mobile",
  "jasa-it-backend",
  "payment-gateway",
  "maps-gis",
  "integrasi-sistem",
  "maintenance-support",
];

export function generateStaticParams() {
  return services
    .filter(
      (service) =>
        !CUSTOM_DESIGN_SLUGS.includes(service.slug)
    )
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Layanan — RHG Teknologi Indonesia",
    };
  }

  return {
    title: `${service.title} — RHG Teknologi Indonesia`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (
    !service ||
    CUSTOM_DESIGN_SLUGS.includes(slug)
  ) {
    return notFound();
  }

  const isAI =
    slug === "ai-agent-development";

  return (
    <>
      <style>{`
        @keyframes detailHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes detailGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes detailFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .detail-grid {
          background-image:
            linear-gradient(
              rgba(15,23,42,.038) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.038) 1px,
              transparent 1px
            );

          background-size: 40px 40px;

          animation:
            detailGridMove
            18s
            linear
            infinite;
        }

        .detail-hero-1,
        .detail-hero-2,
        .detail-hero-3,
        .detail-hero-4 {
          opacity: 0;

          animation:
            detailHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .detail-hero-1 {
          animation-delay: .04s;
        }

        .detail-hero-2 {
          animation-delay: .12s;
        }

        .detail-hero-3 {
          animation-delay: .20s;
        }

        .detail-hero-4 {
          animation-delay: .28s;
        }

        .detail-floating-card {
          animation:
            detailFloat
            7s
            ease-in-out
            infinite;
        }

        .detail-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .detail-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              transparent
            );

          transition:
            width .4s ease;
        }

        .detail-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .detail-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .detail-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .detail-floating-card {
            animation: none;
          }

          .detail-card:hover {
            transform: none;
          }

          .detail-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .detail-grid,
          .detail-hero-1,
          .detail-hero-2,
          .detail-hero-3,
          .detail-hero-4,
          .detail-floating-card {
            animation: none !important;
          }

          .detail-hero-1,
          .detail-hero-2,
          .detail-hero-3,
          .detail-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="detail-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.88fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            {/* LEFT */}

            <div>
              <div className="detail-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                RHG Technology Services
              </div>

              <div className="detail-hero-2 mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>

                {isAI && (
                  <span className="rounded-full border border-[#ff6f0f]/15 bg-[#fff0e5] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.13em] text-[#ff6f0f]">
                    Applied AI
                  </span>
                )}
              </div>

              <h1 className="detail-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                {service.title}
              </h1>

              {service.tagline && (
                <p className="detail-hero-3 mt-4 max-w-2xl text-lg font-bold leading-7 text-[#ff6f0f] sm:text-xl">
                  {service.tagline}
                </p>
              )}

              <p className="detail-hero-3 mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                {service.description}
              </p>

              <div className="detail-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Konsultasi Project

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/layanan"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Semua Layanan

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT */}

            <div className="detail-floating-card relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-4 top-5 hidden h-[90%] w-[91%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.035] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,.09)] sm:p-6">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-5">
                  <div>
                    <p className="text-sm font-black">
                      Service Overview
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Scope & Technology
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                    {isAI ? (
                      <Sparkles className="h-[18px] w-[18px] text-[#ff8a34]" />
                    ) : (
                      <Code2 className="h-[18px] w-[18px] text-[#ff8a34]" />
                    )}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Technology Stack
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.techStack
                      .slice(0, 8)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/[0.07] bg-[#fafaf8] px-3 py-2 text-[9px] font-bold text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-black/[0.06] pt-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Included
                  </p>

                  <div className="mt-3 space-y-2.5">
                    {service.items
                      .slice(0, 4)
                      .map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-[11px] leading-5 text-slate-500"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0e5]">
                            <Check className="h-3 w-3 text-[#ff6f0f]" />
                          </span>

                          {item}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[17px] bg-[#17191c] p-4 text-white">
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                    Custom Development
                  </p>

                  <p className="mt-1.5 text-xs font-black">
                    Dibangun mengikuti kebutuhan project.
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-white/35">
                    Scope, architecture, integration, dan deployment
                    dapat disesuaikan dengan sistem existing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        {service.stats && service.stats.length > 0 && (
          <section className="border-b border-black/[0.06] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="grid grid-cols-2 border-x border-black/[0.06] md:grid-cols-4">
                {service.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-r border-black/[0.06] px-4 py-6 last:border-r-0 md:border-b-0 sm:px-6 sm:py-7"
                  >
                    <p className="text-2xl font-black tracking-[-0.04em] text-[#17191c] sm:text-3xl">
                      {stat.value}
                      <span className="text-[#ff6f0f]">
                        {stat.suffix}
                      </span>
                    </p>

                    <p className="mt-1.5 text-[9px] font-semibold leading-4 text-slate-400 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            WHY RHG
        ====================================================== */}

        {service.sellingPoints &&
          service.sellingPoints.length > 0 && (
            <section className="bg-[#f7f7f5]">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                    <div>
                      <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <span className="h-px w-7 bg-[#ff6f0f]" />

                        Why This Service
                      </div>

                      <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                        Dibangun untuk kebutuhan nyata.
                      </h2>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                      Pendekatan kami tidak berhenti pada
                      implementasi fitur. Sistem dirancang agar
                      dapat digunakan, dipelihara, dan dikembangkan
                      setelah masuk production.
                    </p>
                  </div>
                </FadeInSection>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                  {service.sellingPoints.map(
                    (point, index) => (
                      <FadeInSection
                        key={point.title}
                        delay={index * 0.05}
                      >
                        <div className="detail-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
                          <div className="flex items-start justify-between">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                              <ShieldCheck className="h-[18px] w-[18px] text-[#ff8a34]" />
                            </span>

                            <span className="font-mono text-[9px] font-bold text-slate-300">
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="mt-5 text-base font-black tracking-[-0.02em]">
                            {point.title}
                          </h3>

                          <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                            {point.description}
                          </p>
                        </div>
                      </FadeInSection>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

        {/* =====================================================
            SCOPE
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.72fr_1.28fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Scope
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Apa yang termasuk.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Scope dapat disesuaikan kembali setelah
                  discovery sesuai kebutuhan, sistem existing,
                  target platform, dan integrasi yang diperlukan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {service.items.map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex min-h-[76px] items-start gap-3 rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0e5] font-mono text-[9px] font-black text-[#ff6f0f]">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <p className="pt-0.5 text-[12px] leading-6 text-slate-600 sm:text-[13px]">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            TECH
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10">
            <FadeInSection>
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff6f0f]">
                    Technology
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                    Technology stack menyesuaikan kebutuhan.
                  </h2>
                </div>

                <div className="md:max-w-2xl md:flex-1">
                  <TechMarquee
                    items={service.techStack}
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Use Cases
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Cocok untuk kebutuhan seperti ini.
                </h2>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14">
              {service.useCases.map(
                (useCase, index) => (
                  <FadeInSection
                    key={useCase}
                    delay={index * 0.05}
                  >
                    <div className="detail-card flex h-full items-start gap-4 rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#17191c]">
                        <Layers3 className="h-[18px] w-[18px] text-[#ff8a34]" />
                      </span>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.13em] text-slate-300">
                          Use Case{" "}
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </p>

                        <p className="mt-1.5 text-[13px] font-semibold leading-6 text-slate-600 sm:text-sm">
                          {useCase}
                        </p>
                      </div>
                    </div>
                  </FadeInSection>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff6f0f]/[0.08] blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.72fr_1.28fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                  <span className="h-px w-7 bg-[#ff8a34]" />

                  Process
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Proses kerja yang
                  <span className="text-[#ff8a34]">
                    {" "}
                    terstruktur.
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  Setiap project dimulai dengan memahami masalah
                  sebelum menentukan architecture maupun
                  teknologi yang digunakan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="border-t border-white/[0.08]">
                {workProcess.map(
                  (step, index) => (
                    <div
                      key={step.title}
                      className="grid gap-3 border-b border-white/[0.08] py-5 sm:grid-cols-[70px_180px_1fr] sm:gap-4 sm:py-6"
                    >
                      <span className="font-mono text-[10px] font-black text-[#ff8a34]">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <h3 className="text-sm font-black text-white sm:text-base">
                        {step.title}
                      </h3>

                      <p className="text-[12px] leading-6 text-white/40 sm:text-[13px]">
                        {step.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            PRICING
        ====================================================== */}

        {service.pricingTiers &&
          service.pricingTiers.length > 0 && (
            <section className="bg-[#f7f7f5]">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />

                      Investment
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Paket & estimasi.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      Estimasi awal untuk membantu memberikan
                      gambaran budget. Harga final menyesuaikan
                      scope, complexity, integrasi, dan timeline
                      setelah konsultasi.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection
                  delay={0.08}
                  className="mt-10 block lg:mt-14"
                >
                  <PricingTiers
                    tiers={service.pricingTiers}
                  />
                </FadeInSection>
              </div>
            </section>
          )}

        {/* =====================================================
            FAQ
        ====================================================== */}

        {service.faqs &&
          service.faqs.length > 0 && (
            <section className="bg-white">
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.65fr_1.35fr] md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div>
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />

                      FAQ
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Pertanyaan umum.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                      Beberapa pertanyaan yang sering muncul
                      sebelum project dimulai.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={0.08}>
                  <FaqAccordion
                    faqs={service.faqs}
                  />
                </FadeInSection>
              </div>
            </section>
          )}

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-black/45">
                  Start a Project
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Butuh {service.title.toLowerCase()}?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan kebutuhan, sistem existing,
                  target pengguna, atau masalah yang ingin
                  diselesaikan. Kami bantu menyusun scope dan
                  pendekatan teknis yang sesuai.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi Sekarang

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}