import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  MapPinned,
  Network,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

import {
  companyStory,
  values,
  coreTech,
  legalInfo,
} from "@/lib/data/company";

import { FadeInSection } from "@/components/motion/FadeInSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhySection } from "@/components/sections/WhySection";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { VisionMission } from "@/components/about/VisionMission";
import { LegalCard } from "@/components/home/LegalCard";

export const metadata = {
  title: "Tentang Kami — RHG Teknologi Indonesia",
  description:
    "Mengenal RHG Teknologi Indonesia, perusahaan teknologi yang mengembangkan website, aplikasi mobile, backend, GIS, integrasi sistem, dan solusi AI.",
};

const CAPABILITIES = [
  {
    icon: Globe2,
    title: "Web Platform",
    description: "Website, dashboard, portal, dan sistem berbasis web.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Aplikasi Android, iOS, dan cross-platform.",
  },
  {
    icon: Database,
    title: "Backend & Data",
    description: "API, database, migrasi, sinkronisasi, dan cloud.",
  },
  {
    icon: BrainCircuit,
    title: "AI Development",
    description: "AI Agent, AI assistant, automation, dan integrasi AI.",
  },
];

const APPROACH = [
  {
    number: "01",
    icon: Workflow,
    title: "Understand",
    description:
      "Kami memahami kebutuhan, workflow, pengguna, dan masalah bisnis sebelum menentukan solusi teknis.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Build",
    description:
      "Sistem dikembangkan secara custom dengan arsitektur yang menyesuaikan kebutuhan project.",
  },
  {
    number: "03",
    icon: Network,
    title: "Integrate",
    description:
      "Website, aplikasi, API, database, pembayaran, AI, GIS, dan sistem lain dapat saling terhubung.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Maintain",
    description:
      "Setelah production, sistem dapat terus dipantau, dirawat, dan dikembangkan mengikuti kebutuhan bisnis.",
  },
];

export default function TentangPage() {
  return (
    <>
      <style>{`
        @keyframes aboutUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes aboutGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes aboutGlow {
          0%,
          100% {
            opacity: .3;
            transform: translate3d(-5%, 0, 0);
          }

          50% {
            opacity: .48;
            transform: translate3d(12%, -5%, 0);
          }
        }

        .about-grid {
          background-image:
            linear-gradient(
              rgba(15,23,42,.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.04) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
          animation: aboutGrid 18s linear infinite;
        }

        .about-hero-1,
        .about-hero-2,
        .about-hero-3,
        .about-hero-4 {
          opacity: 0;
          animation:
            aboutUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .about-hero-1 {
          animation-delay: .05s;
        }

        .about-hero-2 {
          animation-delay: .13s;
        }

        .about-hero-3 {
          animation-delay: .21s;
        }

        .about-hero-4 {
          animation-delay: .29s;
        }

        .about-float {
          animation: aboutFloat 7s ease-in-out infinite;
        }

        .about-glow {
          animation: aboutGlow 11s ease-in-out infinite;
        }

        .about-capability {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            background-color .35s ease;
        }

        .about-capability:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.15);
          background: #ffffff;
        }

        .about-step {
          position: relative;
          overflow: hidden;

          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease;
        }

        .about-step::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              transparent
            );

          transition:
            width .45s ease;
        }

        .about-step:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.18);
        }

        .about-step:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .about-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .about-float {
            animation: none;
          }

          .about-capability:hover,
          .about-step:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-grid,
          .about-hero-1,
          .about-hero-2,
          .about-hero-3,
          .about-hero-4,
          .about-float,
          .about-glow {
            animation: none !important;
          }

          .about-hero-1,
          .about-hero-2,
          .about-hero-3,
          .about-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="about-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-36 -top-28 h-80 w-80 rounded-full bg-[#ff6f0f]/[0.07] blur-[100px]" />

          <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.9fr] md:px-8 md:py-24 lg:px-10">
            {/* LEFT */}

            <div>
              <div className="about-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Tentang Kami
              </div>

              <h1 className="about-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] text-[#111315] sm:text-5xl md:text-[58px]">
                Teknologi dibangun untuk
                <span className="text-[#ff6f0f]">
                  {" "}
                  menyelesaikan masalah nyata.
                </span>
              </h1>

              <p className="about-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG Teknologi Indonesia mengembangkan produk dan sistem digital
                yang mengikuti kebutuhan bisnis — mulai dari web, mobile,
                backend, GIS, integrasi sistem hingga AI.
              </p>

              <div className="about-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/portofolio"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-bold text-white transition hover:bg-black"
                >
                  Lihat Portofolio

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Hubungi Kami

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT */}

            <div className="about-float relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-4 top-5 hidden h-[90%] w-[91%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,.09)] sm:p-6">
                <div className="flex items-center gap-4 border-b border-black/[0.06] pb-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-black/[0.07] bg-[#fafafa]">
                    <Image
                      src="/logo.png"
                      alt="RHG Teknologi Indonesia"
                      width={48}
                      height={48}
                      priority
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff6f0f]">
                      Technology Company
                    </p>

                    <h2 className="mt-1 text-lg font-black tracking-[-0.025em]">
                      {legalInfo.companyName}
                    </h2>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {CAPABILITIES.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="about-capability rounded-[17px] border border-black/[0.06] bg-[#fafaf8] p-3.5 sm:p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#17191c]">
                          <Icon className="h-4 w-4 text-[#ff8a34]" />
                        </div>

                        <h3 className="mt-3 text-xs font-black sm:text-sm">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[10px] leading-4.5 text-slate-400 sm:text-[11px] sm:leading-5">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between rounded-[18px] bg-[#17191c] px-4 py-4 text-white">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#ff8a34]">
                      Our Focus
                    </p>

                    <p className="mt-1 text-xs font-black sm:text-sm">
                      Digital systems built around business
                    </p>
                  </div>

                  <Network className="h-5 w-5 text-white/30" />
                </div>
              </div>
            </div>
          </div>

          {/* TRUST */}

          <div className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 md:px-8 lg:px-10">
            <FadeInSection>
              <TrustStrip />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            STORY
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.65fr_1.35fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Our Story
                </div>

                <h2 className="mt-4 max-w-md text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dibangun dari pengalaman mengembangkan sistem nyata.
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div>
                <p className="text-[16px] leading-8 text-slate-600 sm:text-lg sm:leading-9">
                  {companyStory}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[18px] border border-black/[0.07] bg-[#f7f7f5] p-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                      Approach
                    </p>

                    <p className="mt-2 text-sm font-black">
                      Custom Development
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-[#f7f7f5] p-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                      Coverage
                    </p>

                    <p className="mt-2 text-sm font-black">
                      End-to-End System
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-[#f7f7f5] p-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                      Support
                    </p>

                    <p className="mt-2 text-sm font-black">
                      Continuous Development
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            VISION MISSION
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
            <VisionMission />
          </div>
        </section>

        {/* =====================================================
            HOW WE WORK
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  How We Work
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Kami tidak mulai dari teknologi.
                  <span className="text-[#ff6f0f]">
                    {" "}
                    Kami mulai dari kebutuhan.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Framework atau teknologi dipilih setelah kebutuhan sistem
                  dipahami, bukan sebaliknya.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {APPROACH.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.number}
                    delay={index * 0.05}
                  >
                    <div className="about-step h-full rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                          <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                        </span>

                        <span className="font-mono text-[9px] font-bold text-slate-300">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-black tracking-[-0.025em]">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[13px] leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="about-glow pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff6f0f]/[0.08] blur-[130px]" />

          <div className="relative">
            <WhySection
              points={values}
              title="Nilai-Nilai Kami"
            />
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Technology
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Teknologi adalah alat.
                  <span className="text-[#ff6f0f]">
                    {" "}
                    Hasil bisnis adalah tujuannya.
                  </span>
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Kami menggunakan teknologi yang sesuai dengan kebutuhan
                  produk, integrasi, performa, dan pengembangan jangka panjang.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="mt-10 overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#f7f7f5] px-4 py-6 sm:px-6">
                <TechMarquee items={coreTech} />
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            LEGAL
        ====================================================== */}

        <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="mb-9 max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Company
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Identitas perusahaan yang jelas.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Informasi perusahaan disediakan sebagai bagian dari
                  transparansi dan hubungan profesional dengan client.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <LegalCard />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black/45">
                  Work With RHG
                </p>

                <h2 className="mt-3 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Mari bangun sistem yang benar-benar dibutuhkan bisnis Anda.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                  Diskusikan kebutuhan website, aplikasi, backend, GIS,
                  integrasi, AI, atau sistem digital lainnya bersama RHG.
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