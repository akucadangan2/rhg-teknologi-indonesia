import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CheckCircle2,
  Clock,
  Database,
  HardDrive,
  Headphones,
  LifeBuoy,
  Lock,
  RefreshCw,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Webhook,
  Workflow,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TerminalWindow } from "@/components/backend/TerminalWindow";
import { ScanLine } from "@/components/backend/ScanLine";
import { MigrationFlow } from "@/components/backend/MigrationFlow";
import { SecurityChecklist } from "@/components/backend/SecurityChecklist";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Backend, Database & IT Development — RHG Teknologi Indonesia",
  description:
    "Pengembangan backend, API, database, migrasi data, automasi, integrasi sistem, security, monitoring, dan infrastructure backend oleh RHG Teknologi Indonesia.",
};

const FEATURES = [
  {
    icon: Webhook,
    title: "API & Webhook",
    description:
      "REST API, webhook, authentication, dan endpoint terstruktur untuk menghubungkan aplikasi maupun third-party service.",
  },
  {
    icon: RefreshCw,
    title: "Database Migration",
    description:
      "Migrasi database dilakukan bertahap dengan mapping, validation, reconciliation, dan verifikasi data.",
  },
  {
    icon: ArrowLeftRight,
    title: "Data Synchronization",
    description:
      "Menghubungkan dua atau lebih sistem agar pertukaran dan sinkronisasi data dapat berjalan otomatis.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Authentication, authorization, role-based access, Row Level Security, dan pembatasan akses data.",
  },
  {
    icon: HardDrive,
    title: "Backup Strategy",
    description:
      "Strategi backup database dan recovery disesuaikan dengan kebutuhan serta infrastructure project.",
  },
  {
    icon: ShieldAlert,
    title: "API Protection",
    description:
      "Validasi request, rate limiting, permission, security policy, dan protection terhadap penggunaan API yang tidak semestinya.",
  },
  {
    icon: Activity,
    title: "Monitoring & Logging",
    description:
      "Logging dan observability untuk membantu audit, troubleshooting, monitoring error, dan aktivitas sistem.",
  },
  {
    icon: Clock,
    title: "Business Automation",
    description:
      "Cron job, scheduler, queue, background process, webhook, dan workflow otomatis untuk proses bisnis berulang.",
  },
];

const BACKEND_AREAS = [
  {
    icon: ServerCog,
    title: "Backend Architecture",
    description:
      "Perancangan service, API, business logic, authentication, integration, dan arsitektur aplikasi.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Database design, normalization, indexing, query optimization, migration, dan access control.",
  },
  {
    icon: ArrowLeftRight,
    title: "System Integration",
    description:
      "Integrasi backend dengan aplikasi, payment gateway, ERP, CRM, IoT, hardware, maupun third-party API.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Workflow otomatis untuk processing, notification, synchronization, reconciliation, dan pekerjaan berulang.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Role-based access, RLS, authentication, validation, permission, logging, dan pengamanan endpoint.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Logging, monitoring, error tracking, audit trail, dan visibility terhadap aktivitas production.",
  },
];

const BACKEND_PROCESS = [
  {
    number: "01",
    title: "Audit & Discovery",
    description:
      "Memahami sistem existing, database, sumber data, workflow, API, dependency, dan masalah yang ingin diselesaikan.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "Menyusun database schema, service architecture, API contract, access control, dan integration flow.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Membangun backend, API, database function, automation, authentication, dan integrasi sesuai scope.",
  },
  {
    number: "04",
    title: "Migration & Integration",
    description:
      "Data maupun sistem existing dihubungkan dan dimigrasikan secara bertahap dengan validation.",
  },
  {
    number: "05",
    title: "Testing & Deployment",
    description:
      "Functional test, security check, data verification, deployment, dan pengecekan production.",
  },
  {
    number: "06",
    title: "Warranty & Support",
    description:
      "Bug fixing dan technical support pasca-deployment dapat diberikan hingga 12 bulan sesuai paket project.",
  },
];

const SUPPORT_ITEMS = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Perbaikan bug pada backend, API, database, automation, atau integrasi yang termasuk dalam scope development.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dukungan teknis ketika terdapat kendala pada backend, database, API, deployment, atau integration flow.",
  },
  {
    icon: Activity,
    title: "Production Issue Review",
    description:
      "Membantu menelusuri error production melalui log, request flow, database, dan komponen sistem terkait.",
  },
  {
    icon: Database,
    title: "Database Assistance",
    description:
      "Pendampingan pada issue data, query, migration, synchronization, maupun database operation terkait scope project.",
  },
  {
    icon: RefreshCw,
    title: "Minor Compatibility",
    description:
      "Penyesuaian minor apabila dependency atau environment membutuhkan perubahan selama periode support.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Periode garansi dan technical support dapat diberikan hingga 12 bulan sesuai paket dan kesepakatan project.",
  },
];

export default function BackendPage() {
  const service = getServiceBySlug("jasa-it-backend");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes backendHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backendGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes backendFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes backendGlow {
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

        .backend-grid {
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
            backendGrid
            18s
            linear
            infinite;
        }

        .backend-hero-1,
        .backend-hero-2,
        .backend-hero-3,
        .backend-hero-4 {
          opacity: 0;

          animation:
            backendHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .backend-hero-1 {
          animation-delay: .05s;
        }

        .backend-hero-2 {
          animation-delay: .13s;
        }

        .backend-hero-3 {
          animation-delay: .21s;
        }

        .backend-hero-4 {
          animation-delay: .29s;
        }

        .backend-terminal {
          animation:
            backendFloat
            7s
            ease-in-out
            infinite;
        }

        .backend-glow {
          animation:
            backendGlow
            10s
            ease-in-out
            infinite;
        }

        .backend-card,
        .support-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .backend-card::after,
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

        .backend-card:hover,
        .support-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .backend-card:hover::after,
        .support-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .backend-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .backend-terminal {
            animation: none;
          }

          .backend-card:hover,
          .support-card:hover {
            transform: none;
          }

          .backend-card:hover::after,
          .support-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .backend-grid,
          .backend-terminal,
          .backend-glow,
          .backend-hero-1,
          .backend-hero-2,
          .backend-hero-3,
          .backend-hero-4 {
            animation: none !important;
          }

          .backend-hero-1,
          .backend-hero-2,
          .backend-hero-3,
          .backend-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* HERO */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="backend-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.95fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="backend-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Backend & Data Engineering
              </div>

              <div className="backend-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="backend-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Backend, database, dan API
                <span className="text-[#ff6f0f]">
                  {" "}
                  yang siap production.
                </span>
              </h1>

              <p className="backend-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG membangun backend, API, database, automation,
                migration, authentication, security, dan system
                integration untuk aplikasi maupun operasional bisnis
                yang membutuhkan struktur data yang lebih terukur.
              </p>

              <div className="backend-hero-3 mt-6 flex flex-wrap gap-2">
                {[
                  "Backend API",
                  "PostgreSQL",
                  "Migration",
                  "Automation",
                  "Security",
                  "Webhook",
                  "Integration",
                  "Monitoring",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[9px] font-bold text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="backend-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
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

              <div className="backend-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Garansi & Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Bug fixing dan technical support pasca-deployment
                    dapat tersedia hingga 12 bulan sesuai paket dan
                    scope project.
                  </p>
                </div>
              </div>
            </div>

            <div className="backend-terminal relative flex min-h-[390px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.05] blur-[90px]" />

              <div className="relative w-full">
                <TerminalWindow />
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

        {/* BACKEND CAPABILITIES */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Backend Engineering
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Fondasi sistem yang
                    <span className="text-[#ff6f0f]">
                      {" "}
                      tidak terlihat pengguna.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Backend menjadi penghubung aplikasi, data,
                  payment, automation, third-party API, hingga
                  operasional internal. Karena itu architecture dan
                  struktur datanya harus dirancang sejak awal.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {BACKEND_AREAS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="backend-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
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

        {/* MIGRATION */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Data Migration
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Migrasi data
                  <span className="text-[#ff6f0f]">
                    {" "}
                    secara terkontrol.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Migrasi tidak hanya memindahkan record. Struktur,
                  mapping, relationship, data integrity, dan hasil
                  akhir perlu diverifikasi sebelum sistem lama
                  dihentikan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <MigrationFlow />
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Data mapping",
                  "Batch migration",
                  "Validation",
                  "Reconciliation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-black/[0.07] bg-[#fafaf8] p-4"
                  >
                    <span className="font-mono text-[9px] font-black text-[#ff6f0f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-2 text-xs font-black">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* FEATURES */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Backend Capabilities
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Yang bisa kami
                  <span className="text-[#ff6f0f]">
                    {" "}
                    bangun.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Backend dapat berdiri sendiri atau menjadi
                  fondasi untuk website, aplikasi mobile,
                  dashboard, IoT, payment system, dan AI.
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

        {/* SECURITY */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="absolute inset-0">
            <ScanLine />
          </div>

          <div className="backend-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.08] blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.7fr_1.3fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                  <span className="h-px w-7 bg-[#ff8a34]" />

                  Security
                </div>

                <h2 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Security bukan
                  <span className="text-[#ff8a34]">
                    {" "}
                    fitur tambahan.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  Authentication, authorization, database policy,
                  request validation, access control, dan logging
                  perlu dipertimbangkan sejak architecture dibuat.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Authentication",
                    "Authorization",
                    "RLS",
                    "Validation",
                    "Logging",
                    "Rate Limit",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-[9px] font-bold text-white/35"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="rounded-[24px] border border-white/[0.08] bg-[#1d2024] p-4 sm:p-6">
                <SecurityChecklist />
              </div>
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

                  Project Scope
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Apa yang termasuk.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Scope final menyesuaikan architecture, volume
                  data, integration, security requirement, dan
                  kondisi sistem existing.
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

        {/* PROCESS */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Development Process
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dari audit hingga
                  <span className="text-[#ff6f0f]">
                    {" "}
                    production.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {BACKEND_PROCESS.map((step, index) => (
                <FadeInSection
                  key={step.number}
                  delay={index * 0.04}
                >
                  <div className="backend-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
                    <div className="flex items-start justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                        {index === BACKEND_PROCESS.length - 1 ? (
                          <ShieldCheck className="h-[18px] w-[18px] text-[#ff8a34]" />
                        ) : (
                          <ServerCog className="h-[18px] w-[18px] text-[#ff8a34]" />
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

        {/* WARRANTY */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="backend-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34]">
                    <span className="h-px w-7 bg-[#ff8a34]" />

                    Post-Deployment Support
                  </div>

                  <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                    Garansi & technical support
                    <span className="text-[#ff8a34]">
                      {" "}
                      hingga 1 tahun.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8 md:justify-self-end">
                  Backend adalah bagian yang terus digunakan setelah
                  deployment. RHG dapat memberikan bug fixing dan
                  technical support hingga 12 bulan agar sistem tetap
                  dapat digunakan dengan baik setelah production.
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
                      Garansi berlaku untuk bug pada fungsi,
                      backend, API, database, automation, dan
                      integration yang termasuk dalam scope project.
                      Penambahan fitur, perubahan business logic,
                      perubahan database besar, biaya cloud,
                      layanan pihak ketiga, atau perubahan sistem
                      oleh pihak lain berada di luar garansi kecuali
                      disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* PRICING */}

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
                      Estimasi awal. Harga final menyesuaikan volume
                      data, jumlah integration, business logic,
                      security requirement, migration complexity,
                      infrastructure, dan timeline.
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
                      Beberapa hal yang biasanya perlu diketahui
                      sebelum backend, database, integration, atau
                      migration project dimulai.
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
                  Build the Foundation
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Backend mulai sulit dikembangkan atau data
                  semakin kompleks?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan architecture, database, integration,
                  atau sistem yang Anda gunakan sekarang. RHG
                  dapat membantu merancang backend baru, melakukan
                  migration, maupun menghubungkan sistem existing.
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