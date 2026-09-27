import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  Database,
  Eye,
  FlaskConical,
  MapPin,
  MessagesSquare,
  Network,
  Satellite,
  Sparkles,
  Sprout,
  Workflow,
  Zap,
} from "lucide-react";

import { services } from "@/lib/data/services";
import { ServiceHubCard } from "@/components/layanan/ServiceHubCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata = {
  title: "Layanan — RHG Teknologi Indonesia",
  description:
    "Software development, aplikasi mobile, backend, payment integration, AI Agent, computer vision, automation, GIS, IoT, system integration, dan Applied AI Field Lab oleh RHG Teknologi Indonesia.",
};

const AI_SERVICES = [
  {
    icon: Bot,
    number: "AI / 01",
    title: "AI Agent",
    description:
      "AI Agent yang dapat memahami konteks, menggunakan knowledge perusahaan, mengakses API, database, dan membantu menjalankan workflow bisnis.",
    features: [
      "Customer support AI",
      "Internal knowledge agent",
      "AI assistant untuk tim",
    ],
  },
  {
    icon: Workflow,
    number: "AI / 02",
    title: "AI Automation",
    description:
      "Automasi pekerjaan berulang menggunakan AI untuk membaca data, memproses informasi, membuat ringkasan, dan menjalankan workflow tertentu.",
    features: [
      "Workflow automation",
      "Document processing",
      "Operational assistance",
    ],
  },
  {
    icon: Eye,
    number: "AI / 03",
    title: "Computer Vision",
    description:
      "Pengembangan sistem AI untuk detection, classification, visual inspection, image analysis, dan kebutuhan vision lainnya.",
    features: [
      "Object detection",
      "Image classification",
      "Visual inspection",
    ],
  },
  {
    icon: BrainCircuit,
    number: "AI / 04",
    title: "Custom AI Development",
    description:
      "Pengembangan fitur AI custom untuk website, aplikasi, dashboard, database, atau sistem internal perusahaan.",
    features: [
      "Custom AI features",
      "RAG & knowledge system",
      "Business-specific AI",
    ],
  },
  {
    icon: Cpu,
    number: "AI / 05",
    title: "Edge & Applied AI",
    description:
      "Eksperimen dan implementasi model AI pada mobile, edge device, maupun lingkungan dengan konektivitas terbatas.",
    features: [
      "On-device AI",
      "Edge inference",
      "Offline AI",
    ],
  },
  {
    icon: Network,
    number: "AI / 06",
    title: "AI & System Integration",
    description:
      "Menghubungkan AI dengan API, database, CRM, dashboard, mobile application, IoT, dan sistem existing.",
    features: [
      "API integration",
      "Database connection",
      "Existing system integration",
    ],
  },
];

const AI_CAPABILITIES = [
  {
    icon: MessagesSquare,
    title: "Conversational AI",
    text: "AI assistant dan chatbot untuk customer maupun kebutuhan internal.",
  },
  {
    icon: Database,
    title: "AI + Business Data",
    text: "Menghubungkan AI dengan knowledge, database, dan data operasional.",
  },
  {
    icon: Zap,
    title: "Automation",
    text: "Mengurangi pekerjaan manual dengan workflow berbasis AI.",
  },
  {
    icon: Code2,
    title: "Custom Integration",
    text: "AI dapat ditambahkan ke aplikasi maupun sistem existing.",
  },
];

const LAB_AREAS = [
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Pengujian model visual pada kondisi lapangan nyata dengan variasi cahaya, objek, kamera, dan lingkungan.",
  },
  {
    icon: Bot,
    title: "AI Agent",
    description:
      "Eksperimen AI Agent yang menghubungkan observasi, knowledge base, database, dan workflow.",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description:
      "Pengujian inference pada smartphone maupun perangkat lokal untuk kondisi koneksi yang terbatas.",
  },
  {
    icon: Activity,
    title: "Prediction & Monitoring",
    description:
      "Eksplorasi prediction, anomaly detection, monitoring, dan intelligence dari data lapangan.",
  },
  {
    icon: Sprout,
    title: "Agriculture AI",
    description:
      "Eksperimen AI untuk kondisi tanaman, buah, visual inspection, dan data pertanian.",
  },
  {
    icon: Satellite,
    title: "Field Data",
    description:
      "Data image, observation, sensor, maupun data lokasi dapat digunakan sebagai sumber pengujian AI.",
  },
];

const DELIVERY_POINTS = [
  "Analisis kebutuhan bisnis sebelum development",
  "UI, backend, database, AI, dan integrasi dalam satu workflow",
  "Source code dan sistem diserahkan kepada client",
  "Deployment hingga production",
  "Maintenance dan pengembangan lanjutan",
  "Integrasi sistem existing tanpa harus membangun ulang semuanya",
];

export default function LayananPage() {
  return (
    <>
      <style>{`
        @keyframes serviceHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes serviceGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes aiGlow {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(-5%, 0, 0);
          }

          50% {
            opacity: .48;
            transform: translate3d(10%, -5%, 0);
          }
        }

        @keyframes aiPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(255,111,15,0);
          }

          50% {
            box-shadow: 0 18px 50px rgba(255,111,15,.12);
          }
        }

        .services-grid-bg {
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

          animation:
            serviceGrid
            18s
            linear
            infinite;
        }

        .service-hero-1,
        .service-hero-2,
        .service-hero-3,
        .service-hero-4 {
          opacity: 0;

          animation:
            serviceHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .service-hero-1 {
          animation-delay: .05s;
        }

        .service-hero-2 {
          animation-delay: .13s;
        }

        .service-hero-3 {
          animation-delay: .21s;
        }

        .service-hero-4 {
          animation-delay: .29s;
        }

        .service-hero-card {
          animation:
            serviceFloat
            7s
            ease-in-out
            infinite;
        }

        .ai-background-light {
          animation:
            aiGlow
            10s
            ease-in-out
            infinite;
        }

        .ai-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            background-color .35s ease;
        }

        .ai-card::after {
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
              #ffb179
            );

          transition:
            width .45s
            cubic-bezier(.22,1,.36,1);
        }

        .ai-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,138,52,.28);
          background: #22252a;
        }

        .ai-card:hover::after {
          width: 100%;
        }

        .ai-icon {
          transition:
            transform .35s
            cubic-bezier(.22,1,.36,1);
        }

        .ai-card:hover .ai-icon {
          transform:
            translateY(-3px)
            rotate(-4deg);
        }

        .ai-capability,
        .lab-card {
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .ai-capability:hover,
        .lab-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.18);

          box-shadow:
            0 15px 40px
            rgba(15,23,42,.05);
        }

        .orange-pulse {
          animation:
            aiPulse
            5s
            ease-in-out
            infinite;
        }

        @media (max-width: 767px) {
          .services-grid-bg {
            animation: none;
            background-size: 28px 28px;
          }

          .service-hero-card {
            animation: none;
          }

          .ai-card:hover,
          .ai-capability:hover,
          .lab-card:hover {
            transform: none;
          }

          .ai-card:hover .ai-icon {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-grid-bg,
          .service-hero-1,
          .service-hero-2,
          .service-hero-3,
          .service-hero-4,
          .service-hero-card,
          .ai-background-light,
          .orange-pulse {
            animation: none !important;
          }

          .service-hero-1,
          .service-hero-2,
          .service-hero-3,
          .service-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f5]">
          <div className="services-grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#ff6f0f]/[0.07] blur-[100px]" />

          <div className="pointer-events-none absolute -right-32 top-14 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.9fr] md:px-8 md:py-24 lg:px-10">
            {/* LEFT */}

            <div>
              <div className="service-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Technology Services
              </div>

              <h1 className="service-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] text-[#111315] sm:text-5xl md:text-[58px]">
                Teknologi yang
                <span className="text-[#ff6f0f]">
                  {" "}
                  mengikuti cara bisnis Anda bekerja.
                </span>
              </h1>

              <p className="service-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                Dari website, mobile application, backend, payment,
                AI, automation, GIS, IoT, hingga integrasi sistem —
                RHG membangun teknologi yang dapat bekerja sebagai
                satu ekosistem.
              </p>

              <div className="service-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Link
                  href="#layanan"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-bold text-white transition hover:bg-black"
                >
                  Jelajahi Layanan

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Konsultasi Project

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT */}

            <div className="service-hero-card relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-4 top-5 hidden h-[90%] w-[91%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,.09)] sm:p-6">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-5">
                  <div>
                    <p className="text-sm font-black">
                      RHG Technology Stack
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-400">
                      One connected ecosystem
                    </p>
                  </div>

                  <span className="rounded-full bg-[#fff0e5] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-[#ff6f0f]">
                    End-to-End
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {[
                    {
                      icon: Code2,
                      title: "Application",
                      value: "Web & Mobile",
                    },
                    {
                      icon: Database,
                      title: "Data",
                      value: "Backend & DB",
                    },
                    {
                      icon: Network,
                      title: "Integration",
                      value: "API · IoT · System",
                    },
                    {
                      icon: BrainCircuit,
                      title: "Intelligence",
                      value: "AI & Automation",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[18px] border border-black/[0.06] bg-[#fafaf8] p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#17191c]">
                          <Icon className="h-4 w-4 text-[#ff8a34]" />
                        </div>

                        <p className="mt-4 text-xs font-black text-[#17191c] sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 rounded-[18px] bg-[#17191c] p-4 text-white">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 shrink-0 text-[#ff8a34]" />

                    <div>
                      <p className="text-xs font-black sm:text-sm">
                        Software + AI + Integration
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-white/40 sm:text-[11px]">
                        Dari aplikasi production hingga AI Agent,
                        automation, computer vision, dan Applied AI
                        Field Lab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE SERVICES — SECTION KEDUA
        ====================================================== */}

        <section
          id="layanan"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Core Services
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Layanan teknologi RHG.
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Pilih layanan berdasarkan kebutuhan project Anda.
                  Setiap layanan dapat berdiri sendiri atau
                  dikombinasikan menjadi satu sistem yang saling
                  terhubung.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {services.map((service, index) => (
                <FadeInSection
                  key={service.slug}
                  delay={index * 0.05}
                >
                  <div className="h-full">
                    <ServiceHubCard service={service} />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            NEW CAPABILITY — AI
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="ai-background-light pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="pointer-events-none absolute -bottom-52 -right-40 h-[480px] w-[480px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34] sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff8a34]" />

                  New Capability
                </div>

                <h2 className="mt-5 max-w-3xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Applied AI yang bekerja bersama
                  <span className="text-[#ff8a34]">
                    {" "}
                    sistem bisnis Anda.
                  </span>
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  Bukan hanya chatbot. RHG mengembangkan AI Agent,
                  computer vision, RAG, automation, edge AI, dan
                  integrasi AI yang dapat terhubung dengan aplikasi,
                  database, API, knowledge base, maupun workflow
                  perusahaan.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {AI_SERVICES.map((service, index) => {
                const Icon = service.icon;

                return (
                  <FadeInSection
                    key={service.title}
                    delay={index * 0.05}
                  >
                    <div className="ai-card h-full rounded-[22px] border border-white/[0.08] bg-[#1d2024] p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="ai-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6f0f]">
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        <span className="font-mono text-[9px] font-bold text-white/20">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-[18px] font-black tracking-[-0.025em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-[13px] leading-6 text-white/45 sm:text-sm">
                        {service.description}
                      </p>

                      <div className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2.5 text-[11px] text-white/50"
                          >
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#ff8a34]" />

                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {AI_CAPABILITIES.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="ai-capability h-full rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4">
                      <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />

                      <h4 className="mt-3 text-sm font-black">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 text-[11px] leading-5 text-white/35">
                        {item.text}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>

            <FadeInSection delay={0.15}>
              <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:p-6">
                <div>
                  <p className="text-sm font-black">
                    Punya ide implementasi AI untuk bisnis?
                  </p>

                  <p className="mt-1.5 max-w-2xl text-xs leading-6 text-white/40">
                    Kita dapat mulai dari use case sederhana,
                    mengevaluasi data yang tersedia, lalu
                    mengembangkan sistem AI secara bertahap.
                  </p>
                </div>

                <Link
                  href="/kontak"
                  className="orange-pulse group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition hover:bg-[#ff7f25] sm:w-auto"
                >
                  Diskusikan AI Project

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            RHG APPLIED AI FIELD LAB
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#f7f7f5]">
          <div className="services-grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6f0f]/15 bg-[#fff0e5] px-3 py-1.5">
                    <FlaskConical className="h-3.5 w-3.5 text-[#ff6f0f]" />

                    <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                      RHG Applied AI Field Lab
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Dari model AI ke
                    <span className="text-[#ff6f0f]">
                      {" "}
                      pengujian dunia nyata.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    RHG memiliki Coffee AI Living Lab di Kabupaten
                    Rejang Lebong, Provinsi Bengkulu sebagai
                    environment untuk eksplorasi dan pilot project
                    Applied AI dalam kondisi lapangan nyata.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] font-bold text-slate-500">
                    <MapPin className="h-4 w-4 text-[#ff6f0f]" />

                    Rejang Lebong · Bengkulu
                  </div>

                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href="/lab"
                      className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-5 text-sm font-black text-white transition hover:bg-black"
                    >
                      Explore RHG Lab

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/kontak"
                      className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-5 text-sm font-bold transition hover:border-black/20"
                    >
                      Bahas Pilot AI

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {LAB_AREAS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="lab-card rounded-[20px] border border-black/[0.07] bg-white p-5"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                          <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                        </span>

                        <h3 className="mt-4 text-sm font-black">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-5.5 text-slate-500 sm:text-[12px]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            DELIVERY
        ====================================================== */}

        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.85fr_1.15fr] md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  How We Deliver
                </div>

                <h2 className="mt-4 max-w-xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Satu tim untuk membangun sistem secara menyeluruh.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Anda tidak perlu mengatur banyak vendor untuk
                  frontend, backend, database, integrasi, AI, IoT,
                  maupun deployment.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {DELIVERY_POINTS.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[72px] items-start gap-3 rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e5]">
                      <Check className="h-3.5 w-3.5 text-[#ff6f0f]" />
                    </span>

                    <p className="text-[12px] leading-6 text-slate-600 sm:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
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
                  Start a Project
                </p>

                <h2 className="mt-3 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Tidak yakin teknologi apa yang dibutuhkan?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan masalah, workflow, atau target yang ingin
                  dicapai. Kami bantu menentukan apakah kebutuhan
                  tersebut lebih cocok diselesaikan dengan software,
                  AI, automation, integration, atau kombinasi beberapa
                  teknologi.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi dengan RHG

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}