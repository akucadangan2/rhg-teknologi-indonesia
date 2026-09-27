import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CheckCircle2,
  Clock3,
  Headphones,
  HeartPulse,
  LifeBuoy,
  MonitorCheck,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { HeartbeatMonitor } from "@/components/maintenance/HeartbeatMonitor";
import { ResponseTimeline } from "@/components/maintenance/ResponseTimeline";
import { HealthChecklist } from "@/components/maintenance/HealthChecklist";
import { SupportChannels } from "@/components/maintenance/SupportChannels";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Maintenance & Technical Support — RHG Teknologi Indonesia",
  description:
    "Maintenance aplikasi, website, backend, database, monitoring, troubleshooting, bug fixing, preventive maintenance, dan technical support hingga 1 tahun dari RHG Teknologi Indonesia.",
};

const SUPPORT_PILLARS = [
  {
    icon: MonitorCheck,
    title: "System Monitoring",
    description:
      "Membantu memantau kondisi aplikasi, backend, database, integration, dan komponen penting sistem.",
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    description:
      "Analisis dan perbaikan bug pada fitur maupun sistem yang termasuk dalam cakupan maintenance.",
  },
  {
    icon: Activity,
    title: "Incident Handling",
    description:
      "Penelusuran issue melalui log, database, API, service, integration flow, dan environment terkait.",
  },
  {
    icon: RefreshCw,
    title: "Preventive Maintenance",
    description:
      "Pengecekan berkala untuk membantu menemukan potensi masalah sebelum berdampak lebih besar.",
  },
  {
    icon: Wrench,
    title: "Minor Adjustment",
    description:
      "Penyesuaian minor terhadap konfigurasi, dependency, maupun kebutuhan teknis rutin sesuai paket.",
  },
  {
    icon: Headphones,
    title: "Technical Assistance",
    description:
      "Dukungan teknis untuk membantu tim ketika terdapat kendala dalam penggunaan maupun operasional sistem.",
  },
];

const SUPPORT_COVERAGE = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Bug pada fitur yang termasuk scope development dapat ditangani selama periode garansi yang disepakati.",
  },
  {
    icon: HeartPulse,
    title: "System Health",
    description:
      "Pengecekan kondisi utama aplikasi, backend, API, database, dan integration flow yang relevan.",
  },
  {
    icon: Activity,
    title: "Production Issue",
    description:
      "Membantu investigasi issue production melalui log, request, database, dan komponen sistem terkait.",
  },
  {
    icon: RefreshCw,
    title: "Compatibility Support",
    description:
      "Pendampingan penyesuaian minor ketika dependency atau environment mengalami perubahan.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Review",
    description:
      "Review teknis ketika ditemukan kondisi yang dapat memengaruhi kestabilan atau keamanan sistem.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Maintenance, warranty, dan technical support dapat diberikan hingga 12 bulan sesuai paket dan kontrak.",
  },
];

export default function MaintenanceSupportPage() {
  const service = getServiceBySlug("maintenance-support");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes maintenanceHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes maintenanceGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes maintenanceFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes maintenanceGlow {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(-5%,0,0);
          }

          50% {
            opacity: .48;
            transform: translate3d(10%,-5%,0);
          }
        }

        .maintenance-grid {
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
            maintenanceGrid
            18s
            linear
            infinite;
        }

        .maintenance-hero-1,
        .maintenance-hero-2,
        .maintenance-hero-3,
        .maintenance-hero-4 {
          opacity: 0;

          animation:
            maintenanceHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .maintenance-hero-1 {
          animation-delay: .05s;
        }

        .maintenance-hero-2 {
          animation-delay: .13s;
        }

        .maintenance-hero-3 {
          animation-delay: .21s;
        }

        .maintenance-hero-4 {
          animation-delay: .29s;
        }

        .maintenance-monitor {
          animation:
            maintenanceFloat
            7s
            ease-in-out
            infinite;
        }

        .maintenance-glow {
          animation:
            maintenanceGlow
            10s
            ease-in-out
            infinite;
        }

        .maintenance-card,
        .support-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .maintenance-card::after,
        .support-card::after {
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

        .maintenance-card:hover,
        .support-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .maintenance-card:hover::after,
        .support-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .maintenance-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .maintenance-monitor {
            animation: none;
          }

          .maintenance-card:hover,
          .support-card:hover {
            transform: none;
          }

          .maintenance-card:hover::after,
          .support-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .maintenance-grid,
          .maintenance-monitor,
          .maintenance-glow,
          .maintenance-hero-1,
          .maintenance-hero-2,
          .maintenance-hero-3,
          .maintenance-hero-4 {
            animation: none !important;
          }

          .maintenance-hero-1,
          .maintenance-hero-2,
          .maintenance-hero-3,
          .maintenance-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* HERO */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="maintenance-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.9fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="maintenance-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Maintenance & Technical Support
              </div>

              <div className="maintenance-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="maintenance-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Sistem sudah live.
                <span className="text-[#ff6f0f]">
                  {" "}
                  Kami bantu menjaganya tetap berjalan.
                </span>
              </h1>

              <p className="maintenance-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                Maintenance untuk website, aplikasi mobile,
                backend, database, API, automation, dan integration.
                Dari monitoring dan troubleshooting hingga bug fixing
                serta preventive maintenance setelah production.
              </p>

              <div className="maintenance-hero-3 mt-6 flex flex-wrap gap-2">
                {[
                  "Monitoring",
                  "Bug Fix",
                  "Backend",
                  "Database",
                  "API",
                  "Incident",
                  "Security",
                  "Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[9px] font-bold text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="maintenance-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Konsultasi Maintenance

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/layanan"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Layanan Lain

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="maintenance-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Paket maintenance dan technical support dapat
                    berjalan hingga 12 bulan sesuai kebutuhan dan
                    kesepakatan project.
                  </p>
                </div>
              </div>
            </div>

            <div className="maintenance-monitor relative flex min-h-[390px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.05] blur-[90px]" />

              <div className="relative w-full">
                <HeartbeatMonitor />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}

        {service.stats && service.stats.length > 0 && (
          <section className="border-b border-black/[0.06] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="grid grid-cols-2 border-x border-black/[0.06] md:grid-cols-4">
                {service.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-r border-black/[0.06] px-4 py-6 last:border-r-0 md:border-b-0 sm:px-6"
                  >
                    <p className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
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

        {/* SUPPORT PILLARS */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Operational Support
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Bukan hanya memperbaiki
                    <span className="text-[#ff6f0f]">
                      {" "}
                      ketika sudah rusak.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Maintenance yang baik mencakup monitoring,
                  preventive check, incident handling, troubleshooting,
                  bug fixing, dan evaluasi teknis terhadap sistem yang
                  sudah berjalan.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {SUPPORT_PILLARS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="maintenance-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                        <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                      </span>

                      <h3 className="mt-5 text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY RHG */}

        {service.sellingPoints &&
          service.sellingPoints.length > 0 && (
            <section className="bg-white">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />

                      Why Maintenance
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Sistem production tetap
                      <span className="text-[#ff6f0f]">
                        {" "}
                        membutuhkan perhatian.
                      </span>
                    </h2>
                  </div>
                </FadeInSection>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                  {service.sellingPoints.map((point, index) => (
                    <FadeInSection
                      key={point.title}
                      delay={index * 0.05}
                    >
                      <div className="maintenance-card h-full rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5">
                        <div className="flex items-start justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                            <ShieldCheck className="h-[18px] w-[18px] text-[#ff8a34]" />
                          </span>

                          <span className="font-mono text-[9px] font-black text-slate-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="mt-5 text-base font-black">
                          {point.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-6 text-slate-500">
                          {point.description}
                        </p>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </section>
          )}

        {/* INCIDENT RESPONSE */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Incident Response
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Ketika ada masalah,
                  <span className="text-[#ff6f0f]">
                    {" "}
                    proses penanganannya jelas.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Dari laporan masuk, identifikasi penyebab,
                  troubleshooting, penerapan solusi hingga pengecekan
                  kembali setelah sistem dinyatakan normal.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-10 block"
            >
              <ResponseTimeline />
            </FadeInSection>
          </div>
        </section>

        {/* PREVENTIVE */}

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.7fr_1.3fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Preventive Maintenance
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Periksa sebelum
                  <span className="text-[#ff6f0f]">
                    {" "}
                    menjadi masalah.
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Pengecekan rutin membantu menemukan warning,
                  error, konfigurasi yang bermasalah, atau kondisi
                  sistem yang perlu ditangani sebelum menimbulkan
                  gangguan lebih besar.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="rounded-[24px] border border-black/[0.07] bg-[#fafaf8] p-4 sm:p-6">
                <HealthChecklist />
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* SUPPORT CHANNEL */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Support Channel
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Jalur komunikasi
                  <span className="text-[#ff6f0f]">
                    {" "}
                    saat Anda membutuhkan bantuan.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Support dapat dikelola melalui kanal yang telah
                  disepakati sehingga laporan lebih mudah dicatat
                  dan ditindaklanjuti.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <SupportChannels />
            </FadeInSection>
          </div>
        </section>

        {/* INCLUDED */}

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.72fr_1.28fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Maintenance Scope
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Apa yang termasuk.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Cakupan maintenance dapat disesuaikan dengan
                  ukuran aplikasi, jumlah service, infrastructure,
                  tingkat kompleksitas, dan kebutuhan operasional.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {service.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-[76px] items-start gap-3 rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0e5]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6f0f]" />
                    </span>

                    <div>
                      <p className="font-mono text-[8px] font-black text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-1 text-[12px] leading-6 text-slate-600 sm:text-[13px]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ONE YEAR SUPPORT */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="maintenance-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34]">
                    <span className="h-px w-7 bg-[#ff8a34]" />

                    Long-Term Support
                  </div>

                  <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                    Garansi & support
                    <span className="text-[#ff8a34]">
                      {" "}
                      hingga 1 tahun.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8 md:justify-self-end">
                  Untuk project tertentu, RHG dapat menyediakan
                  periode warranty dan technical support hingga
                  12 bulan setelah launch atau melalui paket
                  maintenance berkelanjutan.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {SUPPORT_COVERAGE.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="support-card h-full rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6f0f]">
                        <Icon className="h-[18px] w-[18px] text-white" />
                      </span>

                      <h3 className="mt-5 text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>

            <FadeInSection delay={0.15}>
              <div className="mt-8 rounded-[20px] border border-[#ff8a34]/20 bg-[#ff6f0f]/[0.07] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8a34]" />

                  <div>
                    <p className="text-sm font-black">
                      Cakupan support
                    </p>

                    <p className="mt-2 max-w-4xl text-[11px] leading-6 text-white/40 sm:text-xs">
                      Garansi mencakup bug atau kendala pada fungsi
                      yang termasuk dalam scope project. Penambahan
                      fitur, redesign, perubahan business logic,
                      upgrade besar, biaya infrastructure atau
                      layanan pihak ketiga, maupun perubahan sistem
                      oleh pihak lain berada di luar garansi kecuali
                      tercantum dalam paket maintenance atau
                      disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* USE CASES */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Use Cases
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Cocok untuk sistem yang
                  <span className="text-[#ff6f0f]">
                    {" "}
                    sudah berjalan.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.06}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-full border border-black/[0.08] bg-[#fafaf8] px-4 py-2.5 text-[11px] font-semibold text-slate-500 sm:text-xs"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* PRICING */}

        {service.pricingTiers &&
          service.pricingTiers.length > 0 && (
            <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />

                      Maintenance Plan
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Paket maintenance.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      Maintenance dapat menggunakan skema retainer
                      atau periode support tertentu. Estimasi final
                      menyesuaikan jumlah aplikasi, service, traffic,
                      infrastructure, scope, dan tingkat kebutuhan
                      support.
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

        {/* FAQ */}

        {service.faqs &&
          service.faqs.length > 0 && (
            <section className="border-t border-black/[0.06] bg-white">
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
                      Beberapa hal yang biasanya perlu dibahas
                      sebelum maintenance atau technical support
                      dimulai.
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

        {/* CTA */}

        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-black/45">
                  Keep It Running
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Sistem sudah live dan mulai digunakan?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan stack, infrastructure, sistem existing,
                  dan kendala yang sering muncul. RHG dapat membantu
                  menyusun maintenance dan technical support yang
                  sesuai.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi Maintenance

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}