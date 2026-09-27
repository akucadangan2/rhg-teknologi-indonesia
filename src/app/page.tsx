import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Database,
  ExternalLink,
  Globe2,
  MapPinned,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "RHG Teknologi Indonesia",
  description:
    "Website, aplikasi mobile, backend, payment gateway, GIS, dan integrasi sistem untuk kebutuhan bisnis Anda.",
};

const SERVICES = [
  {
    title: "Website & Web App",
    description:
      "Company profile, landing page, dashboard internal, portal bisnis, hingga aplikasi web custom dengan arsitektur modern.",
    icon: Globe2,
  },
  {
    title: "Aplikasi Mobile",
    description:
      "Pengembangan aplikasi Android & iOS untuk retail, operasional, layanan pelanggan, marketplace, dan sistem internal.",
    icon: Smartphone,
  },
  {
    title: "Backend & Database",
    description:
      "API, database, authentication, automasi operasional, integrasi data, dan sistem backend yang scalable.",
    icon: Database,
  },
  {
    title: "Payment Gateway",
    description:
      "Integrasi QRIS, virtual account, e-wallet, kartu, webhook pembayaran, dan proses transaksi digital.",
    icon: CreditCard,
  },
  {
    title: "GIS, Maps & Tracking",
    description:
      "WebGIS, peta interaktif, asset tracking, monitoring lokasi, data spasial, dan dashboard berbasis geospasial.",
    icon: MapPinned,
  },
  {
    title: "Custom Digital System",
    description:
      "Solusi teknologi yang dibangun mengikuti workflow bisnis Anda, bukan memaksakan bisnis mengikuti template.",
    icon: Workflow,
  },
];

const BENEFITS = [
  "Source code menjadi milik client",
  "Pengembangan end-to-end dari ide sampai production",
  "Sistem custom sesuai workflow bisnis",
  "Integrasi API, database, payment, dan third-party",
  "Maintenance dan support setelah launch",
  "Mendukung project Indonesia hingga internasional",
];

const PARTNERS = [
  {
    name: "Buana",
    subtitle: "Retail Supply, Equipment & Service Platform",
    region: "Australia",
    location: "Australia",
    link: "https://www.buana.com.au/",
    description:
      "Platform digital terintegrasi untuk retail supply, commercial equipment, pemesanan, tracking, dan layanan teknisi.",
    x: 700,
    y: 365,
    accent: "from-cyan-300 to-blue-500",
  },
  {
    name: "KADAI ZIO / Fast & Go",
    subtitle: "Retail & Delivery Platform",
    region: "Sumatera Barat",
    location: "Sumatera Barat",
    link: "https://www.kadaizio.com/",
    description:
      "Ekosistem retail digital untuk katalog produk, pemesanan kebutuhan harian, pickup, delivery, dan loyalty.",
    x: 225,
    y: 205,
    accent: "from-orange-300 to-emerald-400",
  },
  {
    name: "Profita Agro Sarana",
    subtitle: "Warehouse & Distribution System",
    region: "Pontianak",
    location: "Pontianak, Kalimantan Barat",
    link: "https://profitaagrosarana.my.id/",
    description:
      "Sistem operasional gudang dan distribusi untuk permintaan barang, picking, stok, dan koordinasi antar cabang.",
    x: 402,
    y: 164,
    accent: "from-blue-400 to-cyan-300",
  },
  {
    name: "IONET+",
    subtitle: "ISP Billing & Network Platform",
    region: "Sulawesi Utara",
    location: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    description:
      "Platform billing, monitoring pelanggan, jaringan, pembayaran, dan operasional ISP / RT-RW Net.",
    x: 526,
    y: 190,
    accent: "from-emerald-300 to-cyan-400",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Memahami kebutuhan bisnis, masalah operasional, target pengguna, dan prioritas fitur.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Menyusun flow, arsitektur sistem, database, pengalaman pengguna, serta integrasi yang diperlukan.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Implementasi frontend, backend, mobile app, database, API, dan integrasi layanan eksternal.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "Pengujian, penyempurnaan, deployment, monitoring awal, dan pendampingan setelah sistem digunakan.",
  },
];

const TECHNOLOGIES = [
  "Next.js",
  "Flutter",
  "Kotlin",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Mapbox",
  "MikroTik",
  "REST API",
  "Cloud",
];

const JAKARTA = {
  x: 355,
  y: 258,
};

function getRoutePath(x: number, y: number) {
  const middleX = (JAKARTA.x + x) / 2;
  const middleY = Math.min(JAKARTA.y, y) - 60;

  return `M ${JAKARTA.x} ${JAKARTA.y} Q ${middleX} ${middleY} ${x} ${y}`;
}

function SectionHeading({
  badge,
  title,
  description,
  dark = false,
}: {
  badge: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${
          dark
            ? "border-white/10 bg-white/[0.04] text-cyan-300"
            : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {badge}
      </span>

      <h2
        className={`mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-white/55" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes rhg-grid {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(38px, 38px, 0);
          }
        }

        @keyframes rhg-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rhg-float-reverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes rhg-glow {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        @keyframes rhg-route {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes rhg-pulse {
          0% {
            transform: scale(0.75);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes rhg-shimmer {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(180%);
          }
        }

        @keyframes rhg-fade-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rhg-grid {
          position: absolute;
          inset: -80px;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );
          background-size: 38px 38px;
          mask-image: radial-gradient(
            circle at center,
            #000 25%,
            transparent 78%
          );
          animation: rhg-grid 14s linear infinite;
          pointer-events: none;
        }

        .rhg-float {
          animation: rhg-float 6s ease-in-out infinite;
        }

        .rhg-float-reverse {
          animation: rhg-float-reverse 7s ease-in-out infinite;
        }

        .rhg-glow {
          animation: rhg-glow 5s ease-in-out infinite;
        }

        .rhg-route {
          stroke-dasharray: 10 10;
          animation: rhg-route 10s linear infinite;
        }

        .rhg-node-pulse {
          animation: rhg-pulse 2.6s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .rhg-shimmer {
          animation: rhg-shimmer 5s linear infinite;
        }

        .rhg-card {
          position: relative;
          isolation: isolate;
        }

        .rhg-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.06) 45%,
            transparent 60%
          );
          transform: translateX(-130%);
          pointer-events: none;
          transition: transform 700ms ease;
        }

        .rhg-card:hover::after {
          transform: translateX(130%);
        }

        .rhg-noise {
          background-image:
            radial-gradient(
              circle at 20% 20%,
              rgba(126, 231, 255, 0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(46, 230, 166, 0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 50% 90%,
              rgba(79, 140, 255, 0.12),
              transparent 30%
            );
        }

        @supports (animation-timeline: view()) {
          .rhg-reveal {
            animation: rhg-fade-up linear both;
            animation-timeline: view();
            animation-range: entry 5% cover 25%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rhg-grid,
          .rhg-float,
          .rhg-float-reverse,
          .rhg-glow,
          .rhg-route,
          .rhg-node-pulse,
          .rhg-shimmer,
          .rhg-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <main className="overflow-hidden bg-[#050816]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#050816] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_72%_85%,rgba(16,185,129,0.12),transparent_30%)]" />

          <div className="rhg-grid" />

          <div className="rhg-glow pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="rhg-glow pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan-400/15 blur-[110px]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-20 lg:px-10">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>

                PT RHG Teknologi Indonesia
              </div>

              <h1 className="mt-7 max-w-3xl text-[42px] font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-5xl md:text-[58px] lg:text-[68px]">
                Teknologi yang
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
                  {" "}
                  benar-benar bekerja{" "}
                </span>
                untuk bisnis Anda.
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/60 sm:text-base md:text-lg">
                Website, aplikasi mobile, backend, payment gateway, GIS,
                database, dan integrasi sistem. Dirancang custom dari kebutuhan
                bisnis hingga siap digunakan di production.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-cyan-300 to-blue-400 px-6 py-3.5 text-sm font-bold text-[#04101c] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                >
                  Konsultasi Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portofolio"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  Lihat Portofolio
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-3">
                {[
                  "Web & Backend",
                  "Android & iOS",
                  "GIS & Mapping",
                  "System Integration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 text-xs font-medium text-white/60 backdrop-blur"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative mx-auto w-full max-w-[590px]">
              <div className="rhg-glow pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

              <div className="rhg-float rhg-card relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <p className="text-sm font-bold text-white">
                      RHG Digital Ecosystem
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                      Connected Infrastructure
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                      Online
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    {
                      title: "Web",
                      text: "Portal & Dashboard",
                      icon: Globe2,
                    },
                    {
                      title: "Mobile",
                      text: "Android & iOS",
                      icon: Smartphone,
                    },
                    {
                      title: "Backend",
                      text: "API & Database",
                      icon: Database,
                    },
                    {
                      title: "Payment",
                      text: "Digital Checkout",
                      icon: CreditCard,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className={`rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 ${
                          index === 1 || index === 2
                            ? "rhg-float-reverse"
                            : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/15 to-blue-500/15">
                          <Icon className="h-4.5 w-4.5 text-cyan-200" />
                        </div>

                        <p className="mt-4 text-sm font-bold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] text-white/35">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
                  <div className="flex items-center gap-3">
                    <Network className="h-5 w-5 text-cyan-300" />

                    <div>
                      <p className="text-xs font-bold text-white">
                        Indonesia → Australia
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        Cross-region project collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rhg-float-reverse absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#0b1428]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10">
                    <Rocket className="h-4 w-4 text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                      Development
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white">
                      End-to-End Solution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY STRIP
        ====================================================== */}

        <section className="border-y border-white/[0.06] bg-[#07101f]">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 md:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Technology Stack
              </span>

              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-semibold text-white/45 transition hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="relative bg-[#f7f9fc] text-slate-950">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
            <SectionHeading
              badge="Digital Solutions"
              title="Satu partner untuk berbagai kebutuhan teknologi."
              description="Dari interface yang dilihat pengguna sampai sistem backend yang bekerja di belakang layar, RHG membantu menghubungkan semuanya."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`rhg-reveal group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_25px_65px_rgba(15,23,42,0.08)] ${
                      index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-[55px] transition group-hover:bg-cyan-400/[0.08]" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.15)]">
                          <Icon className="h-5 w-5 text-cyan-300" />
                        </div>

                        <span className="font-mono text-[10px] font-bold text-slate-300">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <Link
                        href="/layanan"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-600"
                      >
                        Pelajari layanan
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY RHG
        ====================================================== */}

        <section className="relative bg-white text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24 lg:px-10">
            <div className="rhg-reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why RHG
              </span>

              <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-[-0.045em] sm:text-4xl md:text-5xl">
                Bukan sekadar membuat aplikasi.
                <span className="text-blue-600">
                  {" "}
                  Kami membangun sistem bisnis.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Kami melihat teknologi sebagai bagian dari operasional bisnis.
                Karena itu, desain, database, integrasi, security, deployment,
                dan maintenance dipikirkan sebagai satu kesatuan.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {BENEFITS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rhg-reveal relative">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] bg-[#07101f] p-6 text-white shadow-[0_35px_90px_rgba(15,23,42,0.2)]">
                <div className="rhg-grid opacity-50" />

                <div className="relative grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "End-to-End",
                      description:
                        "Discovery, UI, development, deployment, hingga maintenance.",
                    },
                    {
                      title: "Custom",
                      description:
                        "Dibangun mengikuti kebutuhan dan workflow bisnis.",
                    },
                    {
                      title: "Scalable",
                      description:
                        "Arsitektur dapat dikembangkan seiring pertumbuhan bisnis.",
                    },
                    {
                      title: "Integrated",
                      description:
                        "API, database, payment, maps, cloud, dan sistem eksternal.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5 backdrop-blur"
                    >
                      <p className="text-lg font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-4 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.07] p-5">
                  <div className="flex items-start gap-3">
                    <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Built for real operation.
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/45">
                        Cocok untuk sistem internal perusahaan, marketplace,
                        retail, warehouse, ISP, GIS, distribusi, hingga platform
                        customer-facing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENT NETWORK MAP
        ====================================================== */}

        <section className="rhg-noise relative overflow-hidden bg-[#050b17] py-20 text-white md:py-24">
          <div className="rhg-grid opacity-30" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10">
            <SectionHeading
              badge="Client Network"
              title="Jaringan kerja sama RHG"
              description="Kolaborasi RHG telah menjangkau berbagai wilayah di Indonesia hingga Australia, dengan Jakarta sebagai pusat koordinasi proyek."
              dark
            />

            <div className="mt-14 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              {/* MAP */}

              <div className="rhg-reveal overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.035] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">
                      RHG Collaboration Map
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                      Indonesia & Australia
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5">
                    <Network className="h-3 w-3 text-cyan-300" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">
                      Connected
                    </span>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#07111f]/80 p-2 sm:p-4">
                  <svg
                    viewBox="0 0 860 520"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Peta jaringan kerja sama RHG dari Jakarta ke Sumatera Barat, Pontianak, Sulawesi Utara, dan Australia"
                  >
                    <defs>
                      <linearGradient
                        id="rhgRouteGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6EE7B7"
                          stopOpacity="0.95"
                        />
                        <stop
                          offset="50%"
                          stopColor="#67E8F9"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset="100%"
                          stopColor="#60A5FA"
                          stopOpacity="0.95"
                        />
                      </linearGradient>

                      <filter id="rhgMapGlow">
                        <feDropShadow
                          dx="0"
                          dy="0"
                          stdDeviation="7"
                          floodColor="#22D3EE"
                          floodOpacity="0.45"
                        />
                      </filter>
                    </defs>

                    {/* SUMATRA */}
                    <path
                      d="M154 98 C175 95 197 113 210 139 C225 168 239 199 245 226 C250 247 236 263 217 257 C198 251 182 231 169 209 C154 184 141 158 138 133 C136 116 141 102 154 98 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* JAVA */}
                    <path
                      d="M235 276 C272 270 310 272 347 278 L391 285 C401 287 402 294 391 298 L336 298 C301 297 268 294 238 289 C227 287 225 279 235 276 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* BALI / NUSA TENGGARA */}
                    <path
                      d="M405 292 C420 288 430 292 437 297 C441 302 436 307 427 306 C417 305 408 302 403 298 C400 296 401 293 405 292 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    <path
                      d="M447 301 C470 298 497 301 522 305 C531 307 532 313 522 316 C497 317 472 314 449 311 C440 309 439 303 447 301 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* KALIMANTAN */}
                    <path
                      d="M325 121 C348 106 383 109 402 125 C419 140 423 166 416 191 C408 217 390 236 367 243 C346 249 327 239 317 220 C306 199 308 177 313 153 C316 137 318 127 325 121 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* SULAWESI */}
                    <path
                      d="M467 144 C479 136 492 143 492 157 C491 171 484 180 493 189 C501 197 514 196 519 205 C524 215 515 224 505 230 C493 237 490 246 493 256 C495 266 485 272 476 265 C466 258 467 244 469 231 C471 220 464 215 455 221 C444 228 435 221 440 210 C445 198 458 195 460 184 C462 172 458 151 467 144 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* PAPUA */}
                    <path
                      d="M559 179 C590 164 635 165 668 178 C691 187 704 204 700 218 C696 232 678 239 659 234 C638 229 618 236 597 242 C578 247 558 238 551 222 C545 207 546 187 559 179 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* AUSTRALIA */}
                    <path
                      d="M578 334 C610 311 660 305 705 319 C741 330 765 356 762 385 C760 414 735 438 701 450 C667 462 626 455 598 437 C572 420 551 399 548 378 C545 357 556 342 578 334 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* TASMANIA */}
                    <path
                      d="M690 468 C699 464 709 468 710 477 C710 486 702 493 693 490 C685 487 683 474 690 468 Z"
                      fill="rgba(59,130,246,0.13)"
                      stroke="rgba(103,232,249,0.22)"
                    />

                    {/* ROUTES */}

                    {PARTNERS.map((partner) => (
                      <g key={`route-${partner.name}`}>
                        <path
                          d={getRoutePath(partner.x, partner.y)}
                          fill="none"
                          stroke="rgba(34,211,238,0.08)"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />

                        <path
                          d={getRoutePath(partner.x, partner.y)}
                          fill="none"
                          stroke="url(#rhgRouteGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="rhg-route"
                        />
                      </g>
                    ))}

                    {/* JAKARTA HQ */}

                    <g filter="url(#rhgMapGlow)">
                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="26"
                        fill="rgba(110,231,183,0.08)"
                      />

                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="20"
                        fill="none"
                        stroke="rgba(110,231,183,0.35)"
                        className="rhg-node-pulse"
                      />

                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="9"
                        fill="#6EE7B7"
                      />

                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="3"
                        fill="#ffffff"
                      />

                      <text
                        x={JAKARTA.x}
                        y={JAKARTA.y - 20}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="700"
                      >
                        Jakarta
                      </text>

                      <text
                        x={JAKARTA.x}
                        y={JAKARTA.y + 30}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.55)"
                        fontSize="9"
                      >
                        Head Office RHG
                      </text>
                    </g>

                    {/* PARTNERS */}

                    {PARTNERS.map((partner) => (
                      <g
                        key={partner.name}
                        filter="url(#rhgMapGlow)"
                      >
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="20"
                          fill="rgba(103,232,249,0.06)"
                        />

                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="16"
                          fill="none"
                          stroke="rgba(103,232,249,0.3)"
                          className="rhg-node-pulse"
                        />

                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="7"
                          fill="#67E8F9"
                        />

                        <text
                          x={partner.x}
                          y={partner.y - 18}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {partner.region}
                        </text>

                        <text
                          x={partner.x}
                          y={partner.y + 25}
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.5)"
                          fontSize="8"
                        >
                          {partner.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] text-white/35">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.7)]" />
                    Kantor pusat RHG
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
                    Jaringan client / kolaborasi
                  </div>
                </div>
              </div>

              {/* CLIENT LIST */}

              <div className="grid gap-4">
                {PARTNERS.map((partner, index) => (
                  <div
                    key={partner.name}
                    className="rhg-reveal rhg-card group rounded-[24px] border border-white/[0.08] bg-white/[0.045] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.065]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className={`inline-flex rounded-full bg-gradient-to-r ${partner.accent} px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#04101c]`}
                        >
                          {partner.region}
                        </span>

                        <h3 className="mt-4 text-xl font-extrabold tracking-[-0.025em] text-white">
                          {partner.name}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-cyan-300/75">
                          {partner.subtitle}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] font-bold text-white/15">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      {partner.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                          Lokasi
                        </p>

                        <p className="mt-1 text-xs font-medium text-white/65">
                          {partner.location}
                        </p>
                      </div>

                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-xs font-bold text-white transition hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-cyan-200"
                      >
                        Visit Site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="bg-[#f7f9fc] text-slate-950">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
            <SectionHeading
              badge="Workflow"
              title="Proses yang sederhana. Hasil yang terukur."
              description="Setiap project memiliki workflow yang jelas agar scope, development, testing, dan implementasi tetap terkontrol."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {PROCESS.map((step, index) => (
                <div
                  key={step.title}
                  className="rhg-reveal group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.05)]"
                >
                  <span className="absolute right-4 top-2 text-[64px] font-black leading-none tracking-[-0.08em] text-slate-100 transition group-hover:text-blue-50">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 shadow-lg">
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    </div>

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Step {step.number}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {index < PROCESS.length - 1 && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#050816] py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_20%_100%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_90%_90%,rgba(34,211,238,0.13),transparent_30%)]" />

          <div className="rhg-grid opacity-30" />

          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 md:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Build With RHG
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl md:text-6xl">
              Punya ide atau sistem yang ingin
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                dibangun lebih serius?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
              Ceritakan kebutuhan bisnis Anda. Kami bantu menyusun pendekatan,
              teknologi, scope, serta implementasi yang sesuai.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 px-6 py-3.5 text-sm font-black text-[#04101c] shadow-[0_0_40px_rgba(34,211,238,0.18)] transition hover:-translate-y-0.5"
              >
                Mulai Konsultasi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portofolio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
              >
                Lihat Portofolio
              </Link>
            </div>

            <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6">
              <span className="text-[10px] font-semibold text-white/30">
                Web Development
              </span>
              <span className="text-white/10">•</span>
              <span className="text-[10px] font-semibold text-white/30">
                Mobile Apps
              </span>
              <span className="text-white/10">•</span>
              <span className="text-[10px] font-semibold text-white/30">
                Backend
              </span>
              <span className="text-white/10">•</span>
              <span className="text-[10px] font-semibold text-white/30">
                GIS
              </span>
              <span className="text-white/10">•</span>
              <span className="text-[10px] font-semibold text-white/30">
                System Integration
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}