import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bug,
  Check,
  CheckCircle2,
  CloudOff,
  Code2,
  Fingerprint,
  Headphones,
  Layers3,
  LifeBuoy,
  Link as LinkIcon,
  MapPin,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Wallet,
  X,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PhoneMockup } from "@/components/mobile/PhoneMockup";
import { PlatformCompare } from "@/components/mobile/PlatformCompare";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Pembuatan Aplikasi Mobile — RHG Teknologi Indonesia",
  description:
    "Jasa pengembangan aplikasi Android dan iOS custom dengan Kotlin dan Flutter, integrasi backend, payment, GPS, notification, deployment store, serta garansi dan technical support hingga 1 tahun.",
};

const FEATURES = [
  {
    icon: CloudOff,
    title: "Offline-First Support",
    description:
      "Data tertentu dapat tetap digunakan saat koneksi terbatas dan disinkronkan kembali saat perangkat online.",
  },
  {
    icon: Bell,
    title: "Push Notification",
    description:
      "Notifikasi real-time untuk transaksi, order, reminder, status proses, maupun aktivitas penting lainnya.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description:
      "Integrasi fingerprint atau Face ID sesuai dukungan perangkat untuk pengalaman login yang lebih praktis.",
  },
  {
    icon: LinkIcon,
    title: "Deep Linking",
    description:
      "Pengguna dapat diarahkan dari WhatsApp, email, campaign, atau website langsung ke halaman tertentu di aplikasi.",
  },
  {
    icon: Users,
    title: "Multi-Role Access",
    description:
      "Mendukung beberapa jenis pengguna seperti customer, staff, mitra, driver, supervisor, dan administrator.",
  },
  {
    icon: Wallet,
    title: "Payment Integration",
    description:
      "Integrasi payment gateway, QRIS, virtual account, e-wallet, dan sistem pembayaran sesuai kebutuhan bisnis.",
  },
  {
    icon: MapPin,
    title: "Location & GPS",
    description:
      "Tracking lokasi untuk delivery, driver, kunjungan lapangan, cabang, armada, atau kebutuhan berbasis lokasi.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Development",
    description:
      "Struktur aplikasi disiapkan agar lebih mudah dirawat, di-update, dan dikembangkan setelah launch.",
  },
];

const MOBILE_PROCESS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Membahas tujuan aplikasi, user, platform, workflow, fitur, database, dan integrasi yang diperlukan.",
  },
  {
    number: "02",
    title: "Architecture & UI/UX",
    description:
      "Menyusun struktur aplikasi, user flow, database, API, serta tampilan sebelum development utama.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Pengembangan menggunakan Kotlin atau Flutter dengan backend dan integrasi sesuai scope project.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Testing fungsi, API, autentikasi, transaksi, notification, UI, dan pengujian pada perangkat nyata.",
  },
  {
    number: "05",
    title: "Store & Production",
    description:
      "Persiapan release build serta pendampingan proses Google Play Console dan Apple App Store Connect.",
  },
  {
    number: "06",
    title: "Warranty & Support",
    description:
      "Garansi bug fixing dan technical support pasca-launch hingga 1 tahun sesuai paket dan scope yang disepakati.",
  },
];

const SUPPORT_ITEMS = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Perbaikan bug pada fitur yang termasuk dalam scope development tanpa biaya tambahan selama periode garansi.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dukungan teknis untuk membantu pengecekan kendala aplikasi, backend, maupun integrasi terkait project.",
  },
  {
    icon: Store,
    title: "Store Assistance",
    description:
      "Pendampingan untuk kebutuhan update release dan kendala teknis terkait distribusi aplikasi ke store.",
  },
  {
    icon: RefreshCw,
    title: "Compatibility Support",
    description:
      "Pendampingan apabila terdapat penyesuaian minor akibat update platform atau dependency selama periode support.",
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    description:
      "Evaluasi issue production yang berkaitan dengan fungsi aplikasi dan integrasi yang sudah dibangun.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Periode support dapat diberikan hingga 12 bulan sesuai paket, nilai project, dan kesepakatan pada penawaran.",
  },
];

const MOBILE_ADVANTAGES = [
  {
    icon: Smartphone,
    title: "Designed for Mobile",
    description:
      "Interaksi, navigation, input, loading, dan layout dirancang khusus untuk pola penggunaan smartphone.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tidak bergantung pada template aplikasi generik. Fitur mengikuti kebutuhan dan workflow bisnis.",
  },
  {
    icon: Layers3,
    title: "Connected Backend",
    description:
      "Aplikasi dapat dihubungkan dengan database, API, dashboard admin, payment, AI, maupun sistem existing.",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description:
      "Development mencakup testing, release preparation, dan deployment hingga aplikasi siap digunakan.",
  },
];

export default function AplikasiMobilePage() {
  const service = getServiceBySlug("aplikasi-mobile");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes mobileHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mobileGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes mobileFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes mobileGlow {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(-5%,0,0);
          }

          50% {
            opacity: .5;
            transform: translate3d(10%,-5%,0);
          }
        }

        .mobile-grid {
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
          animation: mobileGrid 18s linear infinite;
        }

        .mobile-hero-1,
        .mobile-hero-2,
        .mobile-hero-3,
        .mobile-hero-4 {
          opacity: 0;
          animation:
            mobileHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .mobile-hero-1 {
          animation-delay: .05s;
        }

        .mobile-hero-2 {
          animation-delay: .13s;
        }

        .mobile-hero-3 {
          animation-delay: .21s;
        }

        .mobile-hero-4 {
          animation-delay: .29s;
        }

        .mobile-phones {
          animation:
            mobileFloat
            7s
            ease-in-out
            infinite;
        }

        .mobile-glow {
          animation:
            mobileGlow
            10s
            ease-in-out
            infinite;
        }

        .mobile-card,
        .support-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .mobile-card::after,
        .support-card::after {
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

          transition: width .4s ease;
        }

        .mobile-card:hover,
        .support-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .mobile-card:hover::after,
        .support-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .mobile-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .mobile-phones {
            animation: none;
          }

          .mobile-card:hover,
          .support-card:hover {
            transform: none;
          }

          .mobile-card:hover::after,
          .support-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-grid,
          .mobile-hero-1,
          .mobile-hero-2,
          .mobile-hero-3,
          .mobile-hero-4,
          .mobile-phones,
          .mobile-glow {
            animation: none !important;
          }

          .mobile-hero-1,
          .mobile-hero-2,
          .mobile-hero-3,
          .mobile-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="mobile-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.9fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="mobile-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Mobile Application Development
              </div>

              <div className="mobile-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="mobile-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Aplikasi Android & iOS
                <span className="text-[#ff6f0f]">
                  {" "}
                  yang siap digunakan.
                </span>
              </h1>

              <p className="mobile-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                Pengembangan aplikasi mobile custom untuk customer,
                operasional internal, retail, marketplace, logistics,
                service, field operation, dan berbagai kebutuhan bisnis
                lainnya.
              </p>

              <div className="mobile-hero-3 mt-6 flex flex-wrap gap-2">
                {[
                  "Kotlin",
                  "Flutter",
                  "Android",
                  "iOS",
                  "API Integration",
                  "Production Deployment",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[9px] font-bold text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mobile-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
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
                  Layanan Lain

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mobile-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Garansi & Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Tersedia garansi bug fixing dan technical support
                    pasca-launch hingga 12 bulan sesuai paket dan scope
                    project.
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE VISUAL */}

            <div className="mobile-phones relative flex min-h-[430px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.06] blur-[85px]" />

              <div className="relative flex items-center justify-center gap-3 sm:gap-6">
                <PhoneMockup
                  variant="android"
                  className="rotate-[-6deg]"
                  floatDelay={0}
                />

                <PhoneMockup
                  variant="ios"
                  className="mt-10 rotate-[6deg]"
                  floatDelay={0.6}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK VALUE
        ====================================================== */}

        <section className="border-b border-black/[0.06] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 md:px-8 lg:px-10">
            {[
              ["Android", "Native Kotlin"],
              ["iOS", "Flutter / Cross-platform"],
              ["Store", "Play Store & App Store"],
              ["Support", "Up to 12 Months"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="border-b border-r border-black/[0.06] px-4 py-6 last:border-r-0 md:border-b-0 sm:px-6"
              >
                <p className="text-lg font-black tracking-[-0.03em] sm:text-xl">
                  {title}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            MOBILE APPROACH
        ====================================================== */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Mobile Engineering
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Dibangun sebagai aplikasi,
                    <span className="text-[#ff6f0f]">
                      {" "}
                      bukan website yang dibungkus.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Pemilihan Kotlin, Flutter, backend, database,
                  notification, payment, dan integrasi disesuaikan
                  dengan kebutuhan project — bukan dipaksakan menggunakan
                  satu teknologi untuk semua kasus.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {MOBILE_ADVANTAGES.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.05}
                  >
                    <div className="mobile-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
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

        {/* =====================================================
            WEBVIEW COMPARISON
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Technology Approach
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Native atau cross-platform,
                  <span className="text-[#ff6f0f]">
                    {" "}
                    bukan sekadar WebView.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <FadeInSection>
                <div className="h-full rounded-[22px] border border-black/[0.07] bg-[#fafaf8] p-5 sm:p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Basic Web Wrapper
                  </p>

                  <h3 className="mt-2 text-lg font-black">
                    Pendekatan WebView sederhana
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Pengalaman pengguna sangat bergantung pada halaman web",
                      "Integrasi hardware perangkat lebih terbatas",
                      "Interaksi mobile dapat terasa kurang natural",
                      "Optimasi background process lebih terbatas",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[12px] leading-6 text-slate-500 sm:text-[13px]"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50">
                          <X className="h-3 w-3 text-red-400" />
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.06}>
                <div className="h-full rounded-[22px] border border-[#ff6f0f]/20 bg-[#fff8f3] p-5 sm:p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                    RHG Mobile Development
                  </p>

                  <h3 className="mt-2 text-lg font-black">
                    Kotlin & Flutter
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {[
                      "UI dan interaction dirancang khusus untuk mobile",
                      "Integrasi kamera, GPS, biometric dan notification",
                      "Dapat terhubung dengan backend dan API custom",
                      "Release build disiapkan untuk distribusi store",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[12px] leading-6 text-slate-600 sm:text-[13px]"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6f0f]">
                          <Check className="h-3 w-3 text-white" />
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Mobile Capabilities
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Fitur yang dapat
                  <span className="text-[#ff6f0f]">
                    {" "}
                    kami bangun.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Tidak hanya UI. Aplikasi dapat terhubung dengan
                  backend, database, notification, payment, maps,
                  hardware, maupun sistem lain.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-10 block lg:mt-14"
            >
              <FeatureGrid features={FEATURES} />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            PLATFORM
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Platforms
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Android vs iOS.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Pemilihan platform menyesuaikan target pengguna,
                  fitur, kebutuhan hardware, budget, dan strategi
                  distribusi aplikasi.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <PlatformCompare />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            INCLUDED
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.72fr_1.28fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Project Scope
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Apa yang termasuk.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Scope final tetap menyesuaikan kebutuhan project,
                  platform, fitur, backend, dan integrasi yang
                  diperlukan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {service.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-[76px] items-start gap-3 rounded-[18px] border border-black/[0.07] bg-white p-4"
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

        {/* =====================================================
            SUPPORT & WARRANTY
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="mobile-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34]">
                    <span className="h-px w-7 bg-[#ff8a34]" />

                    Post-Launch Support
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
                  Launch bukan akhir project. RHG dapat memberikan
                  technical support dan garansi bug fixing hingga
                  12 bulan agar aplikasi tetap dapat digunakan
                  dengan baik setelah production.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {SUPPORT_ITEMS.map((item, index) => {
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
                      Ketentuan garansi
                    </p>

                    <p className="mt-2 max-w-4xl text-[11px] leading-6 text-white/40 sm:text-xs">
                      Periode garansi dan support disesuaikan dengan
                      paket serta scope yang tertulis pada penawaran
                      atau kontrak project. Garansi mencakup perbaikan
                      bug pada fungsi yang telah disepakati. Penambahan
                      fitur baru, perubahan scope, biaya layanan pihak
                      ketiga, atau perubahan besar akibat kebijakan
                      platform berada di luar garansi kecuali
                      disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Use Cases
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Cocok untuk berbagai kebutuhan.
                </h2>
              </div>
            </FadeInSection>

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
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Development Process
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dari konsep hingga
                  <span className="text-[#ff6f0f]">
                    {" "}
                    production.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {MOBILE_PROCESS.map((step, index) => (
                <FadeInSection
                  key={step.number}
                  delay={index * 0.04}
                >
                  <div className="mobile-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
                    <div className="flex items-start justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                        {index === MOBILE_PROCESS.length - 1 ? (
                          <ShieldCheck className="h-[18px] w-[18px] text-[#ff8a34]" />
                        ) : (
                          <Rocket className="h-[18px] w-[18px] text-[#ff8a34]" />
                        )}
                      </span>

                      <span className="font-mono text-[9px] font-black text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRICING
        ====================================================== */}

        {service.pricingTiers &&
          service.pricingTiers.length > 0 && (
            <section className="bg-white">
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
                      Estimasi awal. Harga final menyesuaikan fitur,
                      jumlah role, backend, integrasi, target platform,
                      complexity, dan timeline project.
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
            <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
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
                      Beberapa hal yang sering ditanyakan sebelum
                      development aplikasi dimulai.
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
                  Build Your Mobile Product
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Siap membangun aplikasi Anda?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan fitur, target pengguna, sistem existing,
                  dan tujuan bisnisnya. Kami bantu menentukan platform,
                  arsitektur, scope, dan estimasi development.
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