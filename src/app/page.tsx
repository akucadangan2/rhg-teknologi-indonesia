import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  CreditCard,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  MapPin,
  MapPinned,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "RHG Teknologi Indonesia",
  description:
    "Pengembangan website, aplikasi mobile, backend, payment gateway, GIS, dan sistem digital untuk kebutuhan bisnis.",
};

const SERVICES = [
  {
    number: "01",
    title: "Web & Digital Platform",
    description:
      "Website perusahaan, customer portal, dashboard, marketplace, dan sistem berbasis web yang dibangun sesuai proses bisnis.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Mobile Application",
    description:
      "Aplikasi Android dan iOS untuk kebutuhan pelanggan, operasional internal, retail, layanan, dan bisnis digital.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "API, database, authentication, sinkronisasi data, automasi, serta backend untuk mendukung sistem yang terus berkembang.",
    icon: Database,
  },
  {
    number: "04",
    title: "Payment Integration",
    description:
      "Integrasi payment gateway, QRIS, virtual account, e-wallet, kartu, webhook, dan kebutuhan pembayaran digital lainnya.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "GIS & Location System",
    description:
      "WebGIS, peta interaktif, tracking, monitoring lokasi, analisis spasial, dan sistem berbasis data geospasial.",
    icon: MapPinned,
  },
  {
    number: "06",
    title: "System Integration",
    description:
      "Menghubungkan aplikasi, database, API pihak ketiga, perangkat jaringan, dan berbagai sistem operasional perusahaan.",
    icon: Workflow,
  },
];

const PARTNERS = [
  {
    name: "Buana",
    category: "Retail, Equipment & Service",
    location: "Australia",
    link: "https://www.buana.com.au/",
    description:
      "Platform digital untuk retail supply, commercial equipment, pemesanan, tracking, dan service operation.",
    x: 708,
    y: 388,
  },
  {
    name: "KADAI ZIO / Fast & Go",
    category: "Retail & Delivery Platform",
    location: "Sumatera Barat",
    link: "https://www.kadaizio.com/",
    description:
      "Ekosistem retail digital untuk katalog produk, pemesanan, pickup, delivery, dan pengalaman pelanggan.",
    x: 206,
    y: 184,
  },
  {
    name: "Profita Agro Sarana",
    category: "Warehouse & Distribution",
    location: "Pontianak",
    link: "https://profitaagrosarana.my.id/",
    description:
      "Sistem operasional gudang dan distribusi untuk stok, picking, permintaan barang, serta koordinasi cabang.",
    x: 382,
    y: 163,
  },
  {
    name: "IONET+",
    category: "ISP & Network Operations",
    location: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    description:
      "Platform untuk billing, monitoring pelanggan, pembayaran, jaringan, dan aktivitas operasional ISP.",
    x: 522,
    y: 188,
  },
];

const CAPABILITIES = [
  "Custom development",
  "Source code ownership",
  "API & third-party integration",
  "Production deployment",
  "Maintenance & support",
  "Indonesia & international project",
];

const PROCESS = [
  {
    number: "01",
    title: "Understand",
    description:
      "Kami mulai dari kebutuhan bisnis, workflow, pengguna, masalah yang ingin diselesaikan, dan target akhir sistem.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Struktur produk, pengalaman pengguna, database, integrasi, serta pendekatan teknis dirancang sebelum development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development dilakukan secara terstruktur dengan fokus pada fungsi, maintainability, keamanan, dan pengalaman pengguna.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Sistem diuji, diterapkan ke production, dipantau pada tahap awal, lalu dilanjutkan dengan dukungan setelah peluncuran.",
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
  "REST API",
  "Cloud",
  "MikroTik",
];

const TECH_LOOP = [...TECHNOLOGIES, ...TECHNOLOGIES];

const HQ = {
  x: 353,
  y: 267,
};

function routeTo(x: number, y: number) {
  const middleX = (HQ.x + x) / 2;
  const middleY = Math.min(HQ.y, y) - 48;

  return `M ${HQ.x} ${HQ.y} Q ${middleX} ${middleY} ${x} ${y}`;
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] ${
        dark ? "text-white/45" : "text-slate-400"
      }`}
    >
      <span
        className={`eyebrow-line h-px w-8 ${
          dark ? "bg-[#ff8a34]" : "bg-[#ff6f0f]"
        }`}
      />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes pageFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes heroUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroRight {
          from {
            opacity: 0;
            transform: translate3d(34px, 12px, 0) scale(.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes floatSmall {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(.5deg);
          }
        }

        @keyframes softRotate {
          0%,
          100% {
            transform: rotate(-1.8deg);
          }
          50% {
            transform: rotate(1.2deg);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 40px 40px;
          }
        }

        @keyframes dotMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 18px 18px;
          }
        }

        @keyframes routeMove {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -105;
          }
        }

        @keyframes mapPulse {
          0% {
            transform: scale(.75);
            opacity: .5;
          }
          72%,
          100% {
            transform: scale(1.85);
            opacity: 0;
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes subtleSweep {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(220%);
          }
        }

        @keyframes darkLight {
          0%,
          100% {
            transform: translate3d(-5%, 0, 0);
            opacity: .32;
          }
          50% {
            transform: translate3d(14%, -6%, 0);
            opacity: .5;
          }
        }

        @keyframes orangeGlow {
          0%,
          100% {
            box-shadow: 0 12px 35px rgba(255, 111, 15, 0);
          }
          50% {
            box-shadow: 0 15px 50px rgba(255, 111, 15, .14);
          }
        }

        @keyframes buttonShine {
          0% {
            transform: translateX(-160%) skewX(-20deg);
          }
          45%,
          100% {
            transform: translateX(260%) skewX(-20deg);
          }
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes sectionUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-root {
          animation: pageFade .5s ease both;
        }

        .hero-1,
        .hero-2,
        .hero-3,
        .hero-4,
        .hero-5 {
          opacity: 0;
          animation: heroUp .72s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-1 {
          animation-delay: .06s;
        }

        .hero-2 {
          animation-delay: .14s;
        }

        .hero-3 {
          animation-delay: .23s;
        }

        .hero-4 {
          animation-delay: .31s;
        }

        .hero-5 {
          animation-delay: .4s;
        }

        .hero-panel {
          opacity: 0;
          animation:
            heroRight .9s cubic-bezier(.22,1,.36,1) .18s forwards,
            softFloat 7s ease-in-out 1.2s infinite;
        }

        .hero-panel-back {
          animation: softRotate 11s ease-in-out infinite;
        }

        .hero-mini-float {
          animation: floatSmall 6s ease-in-out infinite;
        }

        .home-grid {
          background-image:
            linear-gradient(rgba(15, 23, 42, .043) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, .043) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 16s linear infinite;
        }

        .home-dot-grid {
          background-image:
            radial-gradient(circle, rgba(255, 122, 26, .19) 1px, transparent 1px);
          background-size: 18px 18px;
          animation: dotMove 16s linear infinite;
        }

        .eyebrow-line {
          transform-origin: left center;
          animation: lineGrow .8s cubic-bezier(.22,1,.36,1) both;
        }

        .tech-marquee {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: marquee 30s linear infinite;
        }

        .tech-marquee:hover {
          animation-play-state: paused;
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #ff6f0f;
          transition: width .45s cubic-bezier(.22,1,.36,1);
        }

        .service-card:hover::before {
          width: 100%;
        }

        .service-card .service-icon {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease;
        }

        .service-card:hover .service-icon {
          transform: translateY(-4px) rotate(-3deg);
        }

        .service-card .service-number {
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .service-card:hover .service-number {
          color: #ff6f0f;
          transform: translateY(-2px);
        }

        .dark-light {
          animation: darkLight 11s ease-in-out infinite;
        }

        .approach-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease;
        }

        .approach-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              105deg,
              transparent 35%,
              rgba(255,255,255,.04) 48%,
              transparent 62%
            );
          transform: translateX(-120%);
        }

        .approach-card:hover {
          transform: translateY(-3px);
          background: #22252a;
        }

        .approach-card:hover::after {
          animation: subtleSweep .8s ease;
        }

        .home-route {
          stroke-dasharray: 7 8;
          animation: routeMove 7s linear infinite;
        }

        .home-pulse {
          animation: mapPulse 2.9s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .partner-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .partner-card:hover {
          transform: translateY(-4px);
          border-color: rgba(15, 23, 42, .16);
          box-shadow: 0 18px 40px rgba(15,23,42,.06);
        }

        .partner-arrow {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            color .35s ease;
        }

        .partner-card:hover .partner-arrow {
          transform: translate(2px, -2px);
          background: #17191c;
          color: white;
        }

        .process-row {
          position: relative;
        }

        .process-row::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 2px;
          width: 0;
          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              rgba(255,111,15,0)
            );
          transition: width .55s cubic-bezier(.22,1,.36,1);
        }

        .process-row:hover::after {
          width: 100%;
        }

        .process-number {
          transition:
            transform .35s ease,
            color .35s ease;
        }

        .process-row:hover .process-number {
          color: #ff6f0f;
          transform: translateX(4px);
        }

        .orange-cta {
          position: relative;
          overflow: hidden;
        }

        .orange-cta::before {
          content: "";
          position: absolute;
          top: -40%;
          bottom: -40%;
          width: 110px;
          left: 0;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.22),
              transparent
            );
          animation: buttonShine 6s ease-in-out infinite;
          pointer-events: none;
        }

        .cta-button {
          animation: orangeGlow 5s ease-in-out infinite;
        }

        @supports (animation-timeline: view()) {
          .home-reveal {
            animation: sectionUp linear both;
            animation-timeline: view();
            animation-range: entry 0% cover 24%;
          }

          .home-reveal-late {
            animation: sectionUp linear both;
            animation-timeline: view();
            animation-range: entry 5% cover 28%;
          }
        }

        @media (max-width: 640px) {
          .tech-marquee {
            animation-duration: 22s;
          }

          .home-grid {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-root,
          .hero-1,
          .hero-2,
          .hero-3,
          .hero-4,
          .hero-5,
          .hero-panel,
          .hero-panel-back,
          .hero-mini-float,
          .home-grid,
          .home-dot-grid,
          .eyebrow-line,
          .tech-marquee,
          .dark-light,
          .home-route,
          .home-pulse,
          .orange-cta::before,
          .cta-button,
          .home-reveal,
          .home-reveal-late {
            animation: none !important;
          }

          .hero-1,
          .hero-2,
          .hero-3,
          .hero-4,
          .hero-5,
          .hero-panel {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="page-root overflow-hidden bg-[#f7f7f5] text-[#151719]">
        {/* HERO */}

        <section className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f5]">
          <div className="home-grid pointer-events-none absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

          <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#ff7a1a]/[0.065] blur-[100px]" />

          <div className="pointer-events-none absolute right-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[110px]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-70px)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-6 md:grid-cols-[1.04fr_.96fr] md:px-8 md:py-20 lg:px-10">
            <div>
              <div className="hero-1">
                <Eyebrow>PT RHG Teknologi Indonesia</Eyebrow>
              </div>

              <h1 className="hero-2 mt-7 max-w-3xl text-[44px] font-black leading-[0.97] tracking-[-0.055em] text-[#111315] sm:text-5xl md:text-[62px] lg:text-[72px]">
                Teknologi untuk bisnis yang
                <span className="text-[#ff6f0f]">
                  {" "}
                  ingin bergerak lebih jauh.
                </span>
              </h1>

              <p className="hero-3 mt-7 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base md:text-lg">
                Kami membangun website, aplikasi mobile, backend, payment
                integration, GIS, dan sistem digital yang dirancang mengikuti
                kebutuhan nyata bisnis Anda.
              </p>

              <div className="hero-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16191d] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_16px_35px_rgba(15,23,42,.16)]"
                >
                  Diskusikan Project

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portofolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-[#17191c] transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_12px_30px_rgba(15,23,42,.05)]"
                >
                  Lihat Portofolio

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="hero-5 mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-black/[0.07] pt-6">
                <div className="group">
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#17191c] transition group-hover:text-[#ff6f0f]">
                    Web
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Platform & dashboard
                  </p>
                </div>

                <div className="group">
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#17191c] transition group-hover:text-[#ff6f0f]">
                    Mobile
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Android & iOS
                  </p>
                </div>

                <div className="group">
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#17191c] transition group-hover:text-[#ff6f0f]">
                    System
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Backend & integration
                  </p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="hero-panel-back absolute -right-10 top-4 h-[88%] w-[90%] rounded-[32px] border border-[#ff7a1a]/20 bg-[#ff7a1a]/[0.05]" />

              <div className="hero-panel relative overflow-hidden rounded-[30px] border border-black/[0.07] bg-[#15181c] p-5 text-white shadow-[0_35px_100px_rgba(15,23,42,0.18)] sm:p-6">
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#ff7a1a]/10 blur-[65px]" />

                <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-sm font-bold">
                      RHG / Technology Partner
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-white/30">
                      Digital system development
                    </p>
                  </div>

                  <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                    Indonesia
                  </span>
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: Code2,
                      title: "Product Engineering",
                      desc: "Web & digital product",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile Development",
                      desc: "Android & iOS",
                    },
                    {
                      icon: ServerCog,
                      title: "Backend System",
                      desc: "API, database & cloud",
                    },
                    {
                      icon: MapPinned,
                      title: "GIS & Integration",
                      desc: "Maps, tracking & API",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="hero-mini-float group rounded-[20px] border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                        style={{
                          animationDelay: `${index * 0.4}s`,
                        }}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff7a1a] transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                          <Icon className="h-[18px] w-[18px] text-white" />
                        </div>

                        <p className="mt-4 text-sm font-bold">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] text-white/35">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-5 flex items-center justify-between rounded-[20px] bg-[#202328] px-5 py-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff9852]">
                      Project Coverage
                    </p>

                    <p className="mt-1.5 text-sm font-bold">
                      Indonesia & Australia
                    </p>
                  </div>

                  <Network className="h-5 w-5 text-white/30" />
                </div>
              </div>

              <div className="hero-mini-float absolute -bottom-5 -left-4 hidden rounded-[18px] border border-black/[0.07] bg-white px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e5]">
                    <Blocks className="h-4 w-4 text-[#ff6f0f]" />
                  </span>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Approach
                    </p>

                    <p className="mt-0.5 text-xs font-bold">
                      Built around your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}

        <section className="overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="relative flex items-center py-5">
            <div className="pointer-events-none absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-32" />

            <div className="pointer-events-none absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-32" />

            <div className="tech-marquee">
              {TECH_LOOP.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span className="px-6 text-xs font-bold text-slate-400 transition hover:text-[#ff6f0f] sm:px-8">
                    {item}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#ff6f0f]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div className="home-reveal">
                <Eyebrow>Capabilities</Eyebrow>

                <h2 className="mt-5 max-w-lg text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Teknologi tidak harus rumit untuk bisnis Anda.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-8 text-slate-500 sm:text-base">
                  RHG menangani bagian teknis sehingga Anda dapat fokus pada
                  operasional, produk, dan pertumbuhan bisnis.
                </p>

                <Link
                  href="/layanan"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-black text-[#17191c]"
                >
                  Semua layanan

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid border-l border-t border-black/[0.07] sm:grid-cols-2">
                {SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="service-card home-reveal group border-b border-r border-black/[0.07] p-6 transition duration-300 hover:bg-[#faf9f7] sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <span className="service-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3f3f1] group-hover:bg-[#fff0e5]">
                          <Icon className="h-5 w-5 text-[#25282b] transition group-hover:text-[#ff6f0f]" />
                        </span>

                        <span className="service-number font-mono text-[10px] font-bold text-slate-300">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-black tracking-[-0.025em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="dark-light pointer-events-none absolute -left-28 -top-36 h-[500px] w-[500px] rounded-full bg-[#ff6f0f]/[0.075] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-220px] right-[-140px] h-[480px] w-[480px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 md:grid-cols-[1fr_1fr] md:px-8 md:py-28 lg:px-10">
            <div className="home-reveal">
              <Eyebrow dark>Our Approach</Eyebrow>

              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
                Dibangun sebagai sistem.
                <span className="text-[#ff8a34]">
                  {" "}
                  Bukan sekadar tampilan.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/45 sm:text-base">
                Produk digital yang baik harus nyaman digunakan, mudah dirawat,
                dapat diintegrasikan, dan tetap relevan ketika kebutuhan bisnis
                berkembang.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[24px] bg-white/[0.08] sm:grid-cols-2">
              {[
                {
                  icon: Layers3,
                  title: "End-to-End",
                  desc: "Dari perencanaan sampai production.",
                },
                {
                  icon: Code2,
                  title: "Custom Built",
                  desc: "Mengikuti kebutuhan dan workflow Anda.",
                },
                {
                  icon: Network,
                  title: "Integrated",
                  desc: "Terhubung ke API dan sistem lain.",
                },
                {
                  icon: ShieldCheck,
                  title: "Maintainable",
                  desc: "Dibangun agar mudah dikembangkan.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="approach-card home-reveal bg-[#1d2024] p-6"
                  >
                    <Icon className="h-5 w-5 text-[#ff8a34]" />

                    <h3 className="mt-5 text-lg font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3 border-t border-white/[0.08] pt-8">
                {CAPABILITIES.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs font-semibold text-white/45 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white/70"
                  >
                    <Check className="h-3.5 w-3.5 text-[#ff8a34]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT NETWORK */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
            <div className="home-reveal max-w-3xl">
              <Eyebrow>Project Network</Eyebrow>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl md:text-5xl">
                Dari Jakarta, bekerja dengan bisnis di berbagai wilayah.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
                Titik pada peta menunjukkan lokasi client atau kolaborasi
                project RHG, bukan kantor cabang.
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
              {/* MAP */}

              <div className="home-reveal overflow-hidden rounded-[26px] border border-black/[0.07] bg-white shadow-[0_20px_65px_rgba(15,23,42,0.05)] transition duration-500 hover:shadow-[0_28px_80px_rgba(15,23,42,.08)]">
                <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-sm font-black">
                      Project Coverage
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Indonesia & Australia
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-[#ff6f0f]" />
                    Jakarta HQ
                  </div>
                </div>

                <div className="home-dot-grid p-3 sm:p-6">
                  <svg
                    viewBox="0 0 860 520"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Peta jaringan project RHG dari Jakarta menuju Sumatera Barat, Pontianak, Sulawesi Utara, dan Australia"
                  >
                    <defs>
                      <linearGradient
                        id="routeOrange"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ff6f0f"
                          stopOpacity=".92"
                        />

                        <stop
                          offset="100%"
                          stopColor="#315efb"
                          stopOpacity=".72"
                        />
                      </linearGradient>
                    </defs>

                    {/* SUMATRA */}

                    <path
                      d="M149 102 C172 97 194 115 208 142 C224 172 239 204 245 230 C249 248 237 263 218 257 C198 251 181 230 168 208 C153 181 140 156 137 132 C135 116 141 105 149 102 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* JAVA */}

                    <path
                      d="M234 276 C270 271 307 272 345 279 L391 285 C401 287 401 294 390 298 L334 299 C300 298 267 294 237 289 C228 287 226 280 234 276 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* KALIMANTAN */}

                    <path
                      d="M325 120 C348 106 383 109 402 125 C419 141 424 166 416 192 C409 216 390 236 367 243 C346 249 327 239 317 221 C306 199 308 177 313 153 C316 138 318 127 325 120 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* SULAWESI */}

                    <path
                      d="M466 145 C479 136 492 143 492 157 C491 171 484 181 493 189 C501 197 514 196 519 205 C524 215 515 224 505 230 C493 237 490 246 493 256 C495 266 485 272 476 265 C466 258 467 244 469 231 C471 220 464 215 455 221 C444 228 435 221 440 210 C445 198 458 195 460 184 C462 172 458 152 466 145 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* PAPUA */}

                    <path
                      d="M558 179 C589 164 635 165 668 178 C691 187 704 204 700 218 C696 232 678 239 659 234 C638 229 618 236 597 242 C578 247 558 238 551 222 C545 207 546 187 558 179 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* AUSTRALIA */}

                    <path
                      d="M578 334 C610 311 660 305 705 319 C741 330 765 356 762 385 C760 414 735 438 701 450 C667 462 626 455 598 437 C572 420 551 399 548 378 C545 357 556 342 578 334 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {/* ROUTES */}

                    {PARTNERS.map((partner, index) => (
                      <path
                        key={`route-${partner.name}`}
                        d={routeTo(partner.x, partner.y)}
                        fill="none"
                        stroke="url(#routeOrange)"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        className="home-route"
                        style={{
                          animationDelay: `${index * 0.45}s`,
                        }}
                      />
                    ))}

                    {/* HQ */}

                    <g>
                      <circle
                        cx={HQ.x}
                        cy={HQ.y}
                        r="18"
                        fill="none"
                        stroke="#ff7a1a"
                        strokeOpacity=".25"
                        className="home-pulse"
                      />

                      <circle
                        cx={HQ.x}
                        cy={HQ.y}
                        r="8"
                        fill="#ff6f0f"
                      />

                      <circle
                        cx={HQ.x}
                        cy={HQ.y}
                        r="2.5"
                        fill="white"
                      />

                      <text
                        x={HQ.x}
                        y={HQ.y - 18}
                        textAnchor="middle"
                        fill="#17191c"
                        fontSize="11"
                        fontWeight="700"
                      >
                        Jakarta
                      </text>

                      <text
                        x={HQ.x}
                        y={HQ.y + 26}
                        textAnchor="middle"
                        fill="#8a8f96"
                        fontSize="8"
                      >
                        Kantor Pusat
                      </text>
                    </g>

                    {/* CLIENTS */}

                    {PARTNERS.map((partner, index) => (
                      <g key={partner.name}>
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="15"
                          fill="none"
                          stroke="#315efb"
                          strokeOpacity=".18"
                          className="home-pulse"
                          style={{
                            animationDelay: `${0.5 + index * 0.5}s`,
                          }}
                        />

                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="6"
                          fill="#315efb"
                        />

                        <text
                          x={partner.x}
                          y={partner.y - 16}
                          textAnchor="middle"
                          fill="#17191c"
                          fontSize="9"
                          fontWeight="700"
                        >
                          {partner.location}
                        </text>

                        <text
                          x={partner.x}
                          y={partner.y + 23}
                          textAnchor="middle"
                          fill="#8a8f96"
                          fontSize="7.5"
                        >
                          {partner.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="flex flex-wrap gap-5 border-t border-black/[0.06] px-5 py-4 text-[10px] font-medium text-slate-400 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />
                    Kantor Pusat
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#315efb]" />
                    Client / Project
                  </div>
                </div>
              </div>

              {/* PARTNER CARDS */}

              <div className="grid gap-3">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="partner-card home-reveal group rounded-[22px] border border-black/[0.07] bg-white p-5"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                          {partner.location}
                        </p>

                        <h3 className="mt-2 text-lg font-black tracking-[-0.025em]">
                          {partner.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-slate-400">
                          {partner.category}
                        </p>
                      </div>

                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kunjungi website ${partner.name}`}
                        className="partner-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-slate-500"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="home-reveal">
                <Eyebrow>How We Work</Eyebrow>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Proses yang jelas dari awal sampai launch.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-8 text-slate-500">
                  Tidak perlu proses yang dibuat rumit. Yang penting kebutuhan,
                  scope, progress, dan hasil akhir dapat dipahami oleh semua
                  pihak.
                </p>
              </div>

              <div className="border-t border-black/[0.08]">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="process-row home-reveal grid gap-4 border-b border-black/[0.08] py-6 sm:grid-cols-[70px_190px_1fr] sm:items-start"
                  >
                    <span className="process-number font-mono text-xs font-bold text-slate-300">
                      {item.number}
                    </span>

                    <h3 className="text-lg font-black tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="orange-cta bg-[#ff6f0f]">
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <div className="home-reveal">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/45">
                Start a Project
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-[#17191c] sm:text-4xl md:text-5xl">
                Punya sistem yang ingin dibangun atau diperbaiki?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                Ceritakan kebutuhan bisnis Anda. Kami bantu menyusun pendekatan
                teknis dan implementasi yang sesuai.
              </p>
            </div>

            <Link
              href="/kontak"
              className="cta-button group inline-flex w-fit items-center gap-3 rounded-full bg-[#17191c] px-6 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Konsultasi Project

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}