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
      "Aplikasi Android dan iOS untuk pelanggan, operasional internal, retail, layanan, dan produk digital.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "API, database, authentication, automasi, sinkronisasi data, dan backend yang siap berkembang bersama bisnis.",
    icon: Database,
  },
  {
    number: "04",
    title: "Payment Integration",
    description:
      "Integrasi QRIS, virtual account, e-wallet, kartu, webhook, serta payment gateway untuk transaksi digital.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "GIS & Location System",
    description:
      "WebGIS, peta interaktif, tracking, monitoring lokasi, analisis spasial, dan visualisasi data geospasial.",
    icon: MapPinned,
  },
  {
    number: "06",
    title: "System Integration",
    description:
      "Menghubungkan aplikasi, database, API pihak ketiga, perangkat jaringan, dan sistem operasional perusahaan.",
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
      "Memahami kebutuhan bisnis, workflow, pengguna, permasalahan, dan hasil akhir yang ingin dicapai.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Menyusun struktur produk, user flow, database, integrasi, dan pendekatan teknis sebelum development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development dilakukan dengan fokus pada fungsi, pengalaman pengguna, maintainability, dan keamanan.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Testing, deployment ke production, monitoring awal, dan support setelah sistem mulai digunakan.",
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

const HQ = { x: 353, y: 267 };

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
      className={`inline-flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.19em] sm:text-[10px] sm:tracking-[0.22em] ${
        dark ? "text-white/45" : "text-slate-400"
      }`}
    >
      <span className={`h-px w-6 sm:w-8 ${dark ? "bg-[#ff8a34]" : "bg-[#ff6f0f]"}`} />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSide {
          from { opacity: 0; transform: translateX(28px) scale(.985); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        @keyframes routeMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }

        @keyframes nodePulse {
          0% { transform: scale(.78); opacity: .45; }
          75%, 100% { transform: scale(1.85); opacity: 0; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes darkLight {
          0%, 100% { transform: translate3d(-7%,0,0); opacity: .3; }
          50% { transform: translate3d(12%,-5%,0); opacity: .48; }
        }

        @keyframes ctaSweep {
          0% { transform: translateX(-180%) skewX(-20deg); }
          50%, 100% { transform: translateX(320%) skewX(-20deg); }
        }

        .hero-a,
        .hero-b,
        .hero-c,
        .hero-d,
        .hero-e {
          opacity: 0;
          animation: fadeUp .65s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-a { animation-delay: .04s; }
        .hero-b { animation-delay: .12s; }
        .hero-c { animation-delay: .2s; }
        .hero-d { animation-delay: .28s; }
        .hero-e { animation-delay: .36s; }

        .hero-visual {
          opacity: 0;
          animation:
            fadeSide .8s cubic-bezier(.22,1,.36,1) .2s forwards,
            softFloat 7s ease-in-out 1.2s infinite;
        }

        .moving-grid {
          background-image:
            linear-gradient(rgba(15,23,42,.038) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.038) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 18s linear infinite;
        }

        .dot-grid {
          background-image:
            radial-gradient(circle, rgba(255,111,15,.17) 1px, transparent 1px);
          background-size: 18px 18px;
        }

        .tech-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: marquee 30s linear infinite;
        }

        .tech-track:hover {
          animation-play-state: paused;
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: #ff6f0f;
          transition: width .4s cubic-bezier(.22,1,.36,1);
        }

        .service-card:hover::after {
          width: 100%;
        }

        .service-icon {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .3s ease;
        }

        .service-card:hover .service-icon {
          transform: translateY(-3px) rotate(-3deg);
        }

        .dark-light {
          animation: darkLight 11s ease-in-out infinite;
        }

        .approach-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease;
        }

        .approach-card:hover {
          transform: translateY(-3px);
          background: #23262b;
        }

        .map-route {
          stroke-dasharray: 7 8;
          animation: routeMove 7s linear infinite;
        }

        .map-pulse {
          animation: nodePulse 2.8s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .partner-card {
          transition:
            transform .3s cubic-bezier(.22,1,.36,1),
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .partner-card:hover {
          transform: translateY(-3px);
          border-color: rgba(15,23,42,.15);
          box-shadow: 0 16px 38px rgba(15,23,42,.06);
        }

        .process-card {
          position: relative;
          overflow: hidden;
        }

        .process-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg,#ff6f0f,transparent);
          transition: width .45s ease;
        }

        .process-card:hover::after {
          width: 100%;
        }

        .cta-section {
          position: relative;
          overflow: hidden;
        }

        .cta-section::after {
          content: "";
          position: absolute;
          top: -50%;
          bottom: -50%;
          left: 0;
          width: 100px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.18),
              transparent
            );
          animation: ctaSweep 6s ease-in-out infinite;
          pointer-events: none;
        }

        @supports (animation-timeline: view()) {
          .reveal {
            animation: fadeUp linear both;
            animation-timeline: view();
            animation-range: entry 0% cover 24%;
          }
        }

        @media (max-width: 767px) {
          .moving-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .hero-visual {
            animation: fadeUp .65s cubic-bezier(.22,1,.36,1) .28s forwards;
          }

          .tech-track {
            animation-duration: 23s;
          }

          .service-card:hover::after,
          .process-card:hover::after {
            width: 0;
          }

          .service-card:hover .service-icon,
          .approach-card:hover,
          .partner-card:hover {
            transform: none;
          }

          .dark-light {
            animation-duration: 15s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-a,
          .hero-b,
          .hero-c,
          .hero-d,
          .hero-e,
          .hero-visual,
          .moving-grid,
          .tech-track,
          .dark-light,
          .map-route,
          .map-pulse,
          .cta-section::after,
          .reveal {
            animation: none !important;
          }

          .hero-a,
          .hero-b,
          .hero-c,
          .hero-d,
          .hero-e,
          .hero-visual {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#151719]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f5]">
          <div className="moving-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[#ff7a1a]/[0.07] blur-[90px] sm:h-[420px] sm:w-[420px]" />
          <div className="pointer-events-none absolute -right-40 top-16 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[100px] sm:h-[420px] sm:w-[420px]" />

          <div className="relative mx-auto grid max-w-7xl gap-11 px-4 pb-14 pt-12 sm:px-6 sm:py-16 md:min-h-[calc(100vh-70px)] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:px-8 md:py-20 lg:px-10">
            {/* HERO TEXT */}
            <div className="min-w-0">
              <div className="hero-a">
                <Eyebrow>PT RHG Teknologi Indonesia</Eyebrow>
              </div>

              <h1 className="hero-b mt-5 max-w-3xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-[#111315] min-[390px]:text-[41px] sm:mt-7 sm:text-5xl md:text-[60px] lg:text-[70px]">
                Teknologi untuk bisnis yang
                <span className="text-[#ff6f0f]">
                  {" "}
                  ingin bergerak lebih jauh.
                </span>
              </h1>

              <p className="hero-c mt-5 max-w-xl text-[14px] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Website, aplikasi mobile, backend, payment integration, GIS,
                dan sistem digital yang dibangun mengikuti kebutuhan nyata
                bisnis Anda.
              </p>

              <div className="hero-d mt-7 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#16191d] px-5 text-sm font-bold text-white transition hover:bg-black sm:w-auto sm:px-6"
                >
                  Diskusikan Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portofolio"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-bold text-[#17191c] transition hover:border-black/20 sm:w-auto sm:px-6"
                >
                  Lihat Portofolio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="hero-e mt-8 grid grid-cols-3 gap-2 border-t border-black/[0.07] pt-5 sm:mt-10 sm:flex sm:gap-8 sm:pt-6">
                <div className="min-w-0">
                  <p className="text-lg font-black tracking-[-0.04em] sm:text-2xl">
                    Web
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-xs">
                    Platform
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-lg font-black tracking-[-0.04em] sm:text-2xl">
                    Mobile
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-xs">
                    Android & iOS
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="text-lg font-black tracking-[-0.04em] sm:text-2xl">
                    System
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-xs">
                    Integration
                  </p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="hero-visual relative mx-auto w-full max-w-[570px]">
              <div className="absolute -right-4 top-4 hidden h-[88%] w-[90%] rounded-[30px] border border-[#ff7a1a]/15 bg-[#ff7a1a]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#15181c] p-4 text-white shadow-[0_24px_70px_rgba(15,23,42,.15)] sm:rounded-[30px] sm:p-6">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ff7a1a]/10 blur-[55px]" />

                <div className="relative flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4 sm:pb-5">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold sm:text-sm">
                      RHG / Technology Partner
                    </p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/30 sm:text-[10px]">
                      Digital system development
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-white/[0.07] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/50 sm:px-3 sm:text-[9px]">
                    Indonesia
                  </span>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                  {[
                    {
                      icon: Code2,
                      title: "Product",
                      desktopTitle: "Product Engineering",
                      desc: "Web & platform",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile",
                      desktopTitle: "Mobile Development",
                      desc: "Android & iOS",
                    },
                    {
                      icon: ServerCog,
                      title: "Backend",
                      desktopTitle: "Backend System",
                      desc: "API & database",
                    },
                    {
                      icon: MapPinned,
                      title: "GIS",
                      desktopTitle: "GIS & Integration",
                      desc: "Maps & tracking",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.desktopTitle}
                        className="rounded-[16px] border border-white/[0.07] bg-white/[0.035] p-3 sm:rounded-[20px] sm:p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#ff7a1a] sm:h-10 sm:w-10 sm:rounded-xl">
                          <Icon className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" />
                        </div>

                        <p className="mt-3 text-xs font-bold sm:hidden">
                          {item.title}
                        </p>

                        <p className="mt-4 hidden text-sm font-bold sm:block">
                          {item.desktopTitle}
                        </p>

                        <p className="mt-1 truncate text-[9px] text-white/35 sm:text-[11px]">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-3 flex items-center justify-between rounded-[16px] bg-[#202328] px-4 py-3.5 sm:mt-5 sm:rounded-[20px] sm:px-5 sm:py-4">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#ff9852] sm:text-[9px]">
                      Project Coverage
                    </p>
                    <p className="mt-1 text-xs font-bold sm:text-sm">
                      Indonesia & Australia
                    </p>
                  </div>

                  <Network className="h-4 w-4 text-white/30 sm:h-5 sm:w-5" />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-[18px] border border-black/[0.07] bg-white px-4 py-3 shadow-xl md:block">
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

        {/* TECH MARQUEE */}
        <section className="overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="relative flex h-14 items-center sm:h-16">
            <div className="pointer-events-none absolute left-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
            <div className="pointer-events-none absolute right-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

            <div className="tech-track">
              {TECH_LOOP.map((item, index) => (
                <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                  <span className="px-4 text-[11px] font-bold text-slate-400 sm:px-8 sm:text-xs">
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
              <div className="reveal">
                <Eyebrow>Capabilities</Eyebrow>

                <h2 className="mt-4 max-w-lg text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:mt-5 sm:text-4xl md:text-5xl">
                  Teknologi tidak harus rumit untuk bisnis Anda.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
                  RHG menangani sisi teknis sehingga Anda dapat fokus pada
                  operasional, produk, dan pertumbuhan bisnis.
                </p>

                <Link
                  href="/layanan"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-black text-[#17191c] sm:mt-7"
                >
                  Semua layanan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-0 sm:border-l sm:border-t sm:border-black/[0.07]">
                {SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="service-card reveal group rounded-[20px] border border-black/[0.07] bg-[#fafafa] p-5 sm:rounded-none sm:border-b sm:border-r sm:border-l-0 sm:border-t-0 sm:bg-white sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <span className="service-icon flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f0ed] group-hover:bg-[#fff0e5] sm:h-11 sm:w-11">
                          <Icon className="h-[18px] w-[18px] text-[#25282b] transition group-hover:text-[#ff6f0f] sm:h-5 sm:w-5" />
                        </span>

                        <span className="font-mono text-[9px] font-bold text-slate-300 sm:text-[10px]">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[17px] font-black tracking-[-0.025em] sm:mt-6 sm:text-lg">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-[13px] leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
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
          <div className="dark-light pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#ff6f0f]/[0.08] blur-[100px] sm:h-[500px] sm:w-[500px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div className="reveal">
                <Eyebrow dark>Our Approach</Eyebrow>

                <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:mt-6 sm:text-4xl md:text-5xl">
                  Dibangun sebagai sistem.
                  <span className="text-[#ff8a34]">
                    {" "}
                    Bukan sekadar tampilan.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:mt-6 sm:text-base sm:leading-8">
                  Produk digital harus nyaman digunakan, mudah dirawat, dapat
                  diintegrasikan, dan tetap relevan ketika kebutuhan bisnis
                  berkembang.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-px sm:overflow-hidden sm:rounded-[24px] sm:bg-white/[0.08]">
                {[
                  {
                    icon: Layers3,
                    title: "End-to-End",
                    desc: "Dari perencanaan sampai production.",
                  },
                  {
                    icon: Code2,
                    title: "Custom Built",
                    desc: "Mengikuti workflow bisnis.",
                  },
                  {
                    icon: Network,
                    title: "Integrated",
                    desc: "Terhubung ke API dan sistem lain.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Maintainable",
                    desc: "Mudah dirawat dan dikembangkan.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="approach-card reveal rounded-[18px] bg-[#1d2024] p-4 sm:rounded-none sm:p-6"
                    >
                      <Icon className="h-[18px] w-[18px] text-[#ff8a34] sm:h-5 sm:w-5" />

                      <h3 className="mt-4 text-sm font-black sm:mt-5 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] leading-5 text-white/40 sm:mt-2 sm:text-sm sm:leading-6">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6 sm:mt-10 sm:pt-8">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {CAPABILITIES.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-2 text-[10px] font-semibold text-white/45 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    <Check className="h-3 w-3 text-[#ff8a34] sm:h-3.5 sm:w-3.5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT NETWORK */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="reveal max-w-3xl">
              <Eyebrow>Project Network</Eyebrow>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:mt-5 sm:text-4xl md:text-5xl">
                Dari Jakarta, bekerja dengan bisnis di berbagai wilayah.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
                Titik pada peta menunjukkan lokasi client atau kolaborasi
                project RHG, bukan kantor cabang.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 xl:grid-cols-[1.25fr_0.75fr]">
              {/* MAP */}
              <div className="reveal overflow-hidden rounded-[22px] border border-black/[0.07] bg-white shadow-[0_15px_45px_rgba(15,23,42,.04)] sm:rounded-[26px] sm:shadow-[0_20px_65px_rgba(15,23,42,.05)]">
                <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] px-4 py-3.5 sm:px-6 sm:py-4">
                  <div>
                    <p className="text-xs font-black sm:text-sm">
                      Project Coverage
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-xs">
                      Indonesia & Australia
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:gap-2 sm:text-[10px]">
                    <MapPin className="h-3 w-3 text-[#ff6f0f] sm:h-3.5 sm:w-3.5" />
                    Jakarta
                  </div>
                </div>

                <div className="dot-grid overflow-hidden px-1 py-3 sm:p-6">
                  <svg
                    viewBox="100 70 700 430"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Peta jaringan project RHG"
                  >
                    <defs>
                      <linearGradient
                        id="routeOrange"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ff6f0f" stopOpacity=".9" />
                        <stop offset="100%" stopColor="#315efb" stopOpacity=".7" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M149 102 C172 97 194 115 208 142 C224 172 239 204 245 230 C249 248 237 263 218 257 C198 251 181 230 168 208 C153 181 140 156 137 132 C135 116 141 105 149 102 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    <path
                      d="M234 276 C270 271 307 272 345 279 L391 285 C401 287 401 294 390 298 L334 299 C300 298 267 294 237 289 C228 287 226 280 234 276 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    <path
                      d="M325 120 C348 106 383 109 402 125 C419 141 424 166 416 192 C409 216 390 236 367 243 C346 249 327 239 317 221 C306 199 308 177 313 153 C316 138 318 127 325 120 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    <path
                      d="M466 145 C479 136 492 143 492 157 C491 171 484 181 493 189 C501 197 514 196 519 205 C524 215 515 224 505 230 C493 237 490 246 493 256 C495 266 485 272 476 265 C466 258 467 244 469 231 C471 220 464 215 455 221 C444 228 435 221 440 210 C445 198 458 195 460 184 C462 172 458 152 466 145 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    <path
                      d="M558 179 C589 164 635 165 668 178 C691 187 704 204 700 218 C696 232 678 239 659 234 C638 229 618 236 597 242 C578 247 558 238 551 222 C545 207 546 187 558 179 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    <path
                      d="M578 334 C610 311 660 305 705 319 C741 330 765 356 762 385 C760 414 735 438 701 450 C667 462 626 455 598 437 C572 420 551 399 548 378 C545 357 556 342 578 334 Z"
                      fill="#eeeee9"
                      stroke="#deded8"
                    />

                    {PARTNERS.map((partner, index) => (
                      <path
                        key={`route-${partner.name}`}
                        d={routeTo(partner.x, partner.y)}
                        fill="none"
                        stroke="url(#routeOrange)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="map-route"
                        style={{ animationDelay: `${index * 0.4}s` }}
                      />
                    ))}

                    <g>
                      <circle
                        cx={HQ.x}
                        cy={HQ.y}
                        r="18"
                        fill="none"
                        stroke="#ff7a1a"
                        strokeOpacity=".25"
                        className="map-pulse"
                      />

                      <circle cx={HQ.x} cy={HQ.y} r="8" fill="#ff6f0f" />
                      <circle cx={HQ.x} cy={HQ.y} r="2.5" fill="white" />

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
                    </g>

                    {PARTNERS.map((partner, index) => (
                      <g key={partner.name}>
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="15"
                          fill="none"
                          stroke="#315efb"
                          strokeOpacity=".18"
                          className="map-pulse"
                          style={{
                            animationDelay: `${0.5 + index * 0.45}s`,
                          }}
                        />

                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="6"
                          fill="#315efb"
                        />

                        <text
                          className="hidden sm:block"
                          x={partner.x}
                          y={partner.y - 16}
                          textAnchor="middle"
                          fill="#17191c"
                          fontSize="9"
                          fontWeight="700"
                        >
                          {partner.location}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="flex gap-4 border-t border-black/[0.06] px-4 py-3 text-[9px] text-slate-400 sm:px-6 sm:py-4 sm:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />
                    Kantor Pusat
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#315efb]" />
                    Client / Project
                  </div>
                </div>
              </div>

              {/* PARTNERS */}
              <div className="grid gap-2.5 sm:gap-3">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="partner-card reveal rounded-[18px] border border-black/[0.07] bg-white p-4 sm:rounded-[22px] sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#ff6f0f] sm:text-[9px] sm:tracking-[0.16em]">
                          {partner.location}
                        </p>

                        <h3 className="mt-1.5 text-[16px] font-black tracking-[-0.025em] sm:mt-2 sm:text-lg">
                          {partner.name}
                        </h3>

                        <p className="mt-1 text-[10px] font-semibold text-slate-400 sm:text-xs">
                          {partner.category}
                        </p>
                      </div>

                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kunjungi website ${partner.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-slate-500 transition hover:bg-[#17191c] hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    <p className="mt-3 text-[12px] leading-5.5 text-slate-500 sm:mt-4 sm:text-sm sm:leading-6">
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
              <div className="reveal">
                <Eyebrow>How We Work</Eyebrow>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:mt-5 sm:text-4xl md:text-5xl">
                  Proses yang jelas dari awal sampai launch.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:mt-5 sm:leading-8">
                  Kebutuhan, scope, progress, dan hasil akhir dibuat jelas agar
                  semua pihak memahami arah project.
                </p>
              </div>

              <div className="grid gap-3 sm:border-t sm:border-black/[0.08]">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="process-card reveal rounded-[18px] border border-black/[0.07] bg-[#fafafa] p-4 sm:grid sm:grid-cols-[70px_170px_1fr] sm:items-start sm:gap-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-white sm:px-0 sm:py-6"
                  >
                    <span className="font-mono text-[10px] font-bold text-[#ff6f0f] sm:text-xs">
                      {item.number}
                    </span>

                    <h3 className="mt-2 text-[17px] font-black tracking-[-0.02em] sm:mt-0 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5.5 text-slate-500 sm:mt-0 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section bg-[#ff6f0f]">
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
            <div className="grid items-center gap-7 md:grid-cols-[1fr_auto] md:gap-8">
              <div className="reveal">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-black/45 sm:text-[10px] sm:tracking-[0.2em]">
                  Start a Project
                </p>

                <h2 className="mt-3 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:mt-4 sm:text-4xl md:text-5xl">
                  Punya sistem yang ingin dibangun atau diperbaiki?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan kebutuhan bisnis Anda. Kami bantu menyusun
                  pendekatan teknis dan implementasi yang sesuai.
                </p>
              </div>

              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}