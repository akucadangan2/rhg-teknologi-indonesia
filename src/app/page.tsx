import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  CloudSun,
  Code2,
  CreditCard,
  Database,
  Droplets,
  ExternalLink,
  Globe2,
  Layers3,
  Leaf,
  MapPin,
  MapPinned,
  Network,
  Satellite,
  ShieldCheck,
  Smartphone,
  Sprout,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "RHG Teknologi Indonesia",
  description:
    "Pengembangan software, aplikasi, AI Agent, automasi AI, backend, payment gateway, GIS, GeoAI, IoT, dan integrasi sistem untuk bisnis dan industri.",
};

const SERVICES = [
  {
    number: "01",
    title: "Web & Digital Platform",
    description:
      "Website perusahaan, portal, dashboard, marketplace, dan sistem berbasis web yang dibangun mengikuti proses bisnis.",
    icon: Globe2,
    href: "/layanan/website",
  },
  {
    number: "02",
    title: "Mobile Application",
    description:
      "Aplikasi Android dan iOS untuk pelanggan, operasional internal, retail, layanan, marketplace, dan produk digital.",
    icon: Smartphone,
    href: "/layanan/aplikasi-mobile",
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "API, database, authentication, migrasi, sinkronisasi data, automasi, dan backend untuk sistem yang terus berkembang.",
    icon: Database,
    href: "/layanan/jasa-it-backend",
  },
  {
    number: "04",
    title: "AI Agent & AI Development",
    description:
      "AI Agent, RAG, knowledge system, computer vision, document AI, workflow automation, dan integrasi AI custom.",
    icon: BrainCircuit,
    href: "/layanan/ai-agent-development",
    featured: true,
  },
  {
    number: "05",
    title: "Payment Integration",
    description:
      "QRIS, virtual account, e-wallet, kartu, webhook, billing, rekonsiliasi, dan payment gateway.",
    icon: CreditCard,
    href: "/layanan/payment-gateway",
  },
  {
    number: "06",
    title: "GIS & GeoAI",
    description:
      "WebGIS, tracking, analisis spasial, pemetaan, remote sensing, drone analytics, dan sistem berbasis lokasi.",
    icon: MapPinned,
    href: "/layanan/maps-gis",
  },
  {
    number: "07",
    title: "System & IoT Integration",
    description:
      "Integrasi API, database, jaringan, hardware, IoT, sensor, perangkat lapangan, dan sistem operasional.",
    icon: Workflow,
    href: "/layanan/integrasi-sistem",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    description:
      "Monitoring, bug fixing, security update, backup, review arsitektur, dan pengembangan sistem lanjutan.",
    icon: ShieldCheck,
    href: "/layanan/maintenance-support",
  },
];

const AI_SOLUTIONS = [
  {
    number: "AI / 01",
    title: "AI Agent",
    description:
      "Agent yang dapat memahami konteks, menggunakan knowledge perusahaan, mengakses API, dan membantu menjalankan workflow.",
    icon: Bot,
  },
  {
    number: "AI / 02",
    title: "Knowledge & RAG",
    description:
      "AI yang menggunakan dokumen, database, knowledge base, dan informasi internal sebagai sumber jawaban.",
    icon: Database,
  },
  {
    number: "AI / 03",
    title: "Workflow Automation",
    description:
      "Automasi proses seperti classification, extraction, summarization, routing, approval, dan pekerjaan berulang.",
    icon: Workflow,
  },
  {
    number: "AI / 04",
    title: "Vision & Document AI",
    description:
      "Pemrosesan gambar dan dokumen untuk deteksi, klasifikasi, extraction, inspection, dan analisis visual.",
    icon: Activity,
  },
  {
    number: "AI / 05",
    title: "Agriculture & Field AI",
    description:
      "Eksperimen AI untuk tanaman, perkebunan, monitoring lapangan, sensor, drone, dan data lingkungan.",
    icon: Sprout,
  },
  {
    number: "AI / 06",
    title: "Custom AI Integration",
    description:
      "Menghubungkan AI dengan website, mobile app, backend, database, dashboard, ERP, maupun sistem existing.",
    icon: Blocks,
  },
];

const AI_SECTORS = [
  "Business Operations",
  "Customer Service",
  "Retail & Commerce",
  "Agriculture & Plantation",
  "Warehouse & Logistics",
  "GIS & Field Operations",
  "Network & Infrastructure",
  "Document Processing",
];

const LAB_CAPABILITIES = [
  {
    icon: Sprout,
    title: "Agriculture Intelligence",
    description:
      "Monitoring tanaman, kondisi perkebunan, data produksi, kesehatan tanaman, dan decision support berbasis AI.",
  },
  {
    icon: Activity,
    title: "Computer Vision",
    description:
      "Pengujian deteksi visual untuk daun, buah, tanaman, objek, kondisi lapangan, dan inspeksi otomatis.",
  },
  {
    icon: Droplets,
    title: "IoT & Microclimate",
    description:
      "Eksperimen sensor kelembapan tanah, temperatur, humidity, curah hujan, dan kondisi lingkungan.",
  },
  {
    icon: Satellite,
    title: "Drone & Remote Sensing",
    description:
      "Aerial imagery, orthomosaic, monitoring vegetasi, canopy analysis, dan pengamatan area berkala.",
  },
  {
    icon: MapPinned,
    title: "GeoAI & Terrain",
    description:
      "Analisis elevasi, slope, drainage, zonasi, perubahan lahan, dan intelligence berbasis lokasi.",
  },
  {
    icon: Bot,
    title: "AI Agent & Automation",
    description:
      "Agent yang menggunakan data lapangan, sensor, GIS, database, dan knowledge untuk menghasilkan insight.",
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
  },
  {
    name: "KADAI ZIO / Fast & Go",
    category: "Retail & Delivery Platform",
    location: "Sumatera Barat",
    link: "https://www.kadaizio.com/",
    description:
      "Ekosistem retail digital untuk katalog produk, pemesanan, pickup, delivery, dan pengalaman pelanggan.",
  },
  {
    name: "Profita Agro Sarana",
    category: "Warehouse & Distribution",
    location: "Pontianak",
    link: "https://profitaagrosarana.my.id/",
    description:
      "Sistem operasional gudang dan distribusi untuk stok, picking, permintaan barang, serta koordinasi cabang.",
  },
  {
    name: "IONET+",
    category: "ISP & Network Operations",
    location: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    description:
      "Platform untuk billing, monitoring pelanggan, pembayaran, jaringan, dan aktivitas operasional ISP.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Understand",
    description:
      "Memahami bisnis, pengguna, data, workflow, masalah, dan hasil akhir yang ingin dicapai.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Menyusun arsitektur, user flow, database, model AI, integrasi, keamanan, dan pendekatan teknis.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development dan integrasi dilakukan dengan fokus pada fungsi, reliability, maintainability, dan pengalaman pengguna.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Testing, production deployment, monitoring, evaluasi, support, dan pengembangan lanjutan.",
  },
];

const CAPABILITIES = [
  "Custom software development",
  "AI Agent & automation",
  "Applied AI",
  "Computer vision",
  "GIS & GeoAI",
  "Agriculture technology",
  "IoT & field integration",
  "API & system integration",
  "Production deployment",
  "Maintenance & support",
];

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "Flutter",
  "Kotlin",
  "Supabase",
  "PostgreSQL",
  "Python",
  "LLM APIs",
  "RAG",
  "Vector Search",
  "Computer Vision",
  "Mapbox",
  "PostGIS",
  "Remote Sensing",
  "REST API",
  "Cloud",
  "IoT",
  "MikroTik",
];

const TECH_LOOP = [...TECHNOLOGIES, ...TECHNOLOGIES];

const LAB_LOCATION = {
  latitude: -3.385315,
  longitude: 102.496982,
};

const LAB_MAP_EMBED = `https://www.google.com/maps?q=${LAB_LOCATION.latitude},${LAB_LOCATION.longitude}&z=17&t=k&output=embed`;
const LAB_MAP_LINK = `https://www.google.com/maps?q=${LAB_LOCATION.latitude},${LAB_LOCATION.longitude}`;

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px] ${
        dark ? "text-white/45" : "text-slate-400"
      }`}
    >
      <span
        className={`h-px w-7 ${
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

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes darkLight {
          0%, 100% {
            transform: translate3d(-7%,0,0);
            opacity: .28;
          }
          50% {
            transform: translate3d(12%,-5%,0);
            opacity: .48;
          }
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
            linear-gradient(90deg,rgba(15,23,42,.038) 1px,transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 18s linear infinite;
        }

        .dot-grid {
          background-image:
            radial-gradient(circle,rgba(255,111,15,.17) 1px,transparent 1px);
          background-size: 18px 18px;
        }

        .tech-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: marquee 34s linear infinite;
        }

        .tech-track:hover {
          animation-play-state: paused;
        }

        .service-card,
        .ai-card,
        .lab-card,
        .partner-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            background-color .35s ease,
            box-shadow .35s ease;
        }

        .service-card:hover,
        .lab-card:hover,
        .partner-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.17);
        }

        .service-card:hover {
          box-shadow: 0 18px 45px rgba(15,23,42,.05);
        }

        .ai-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,138,52,.2);
          background: #23262b;
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
            animation:
              fadeUp .65s cubic-bezier(.22,1,.36,1) .28s forwards;
          }

          .tech-track {
            animation-duration: 25s;
          }

          .service-card:hover,
          .ai-card:hover,
          .lab-card:hover,
          .partner-card:hover {
            transform: none;
          }

          .service-card:hover .service-icon {
            transform: none;
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
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="moving-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
          <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#ff6f0f]/[0.07] blur-[100px]" />
          <div className="pointer-events-none absolute -right-40 top-16 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl gap-11 px-4 pb-14 pt-12 sm:px-6 sm:py-16 md:min-h-[calc(100vh-70px)] md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-14 md:px-8 md:py-20 lg:px-10">
            <div>
              <div className="hero-a">
                <Eyebrow>PT RHG Teknologi Indonesia</Eyebrow>
              </div>

              <h1 className="hero-b mt-5 max-w-3xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-[#111315] min-[390px]:text-[41px] sm:text-5xl md:text-[60px] lg:text-[68px]">
                Engineering teknologi dan AI untuk
                <span className="text-[#ff6f0f]">
                  {" "}
                  kebutuhan dunia nyata.
                </span>
              </h1>

              <p className="hero-c mt-5 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG mengembangkan software, mobile application, backend,
                AI Agent, computer vision, automation, payment, GIS,
                GeoAI, IoT, dan sistem terintegrasi untuk bisnis maupun
                kebutuhan lapangan.
              </p>

              <div className="hero-d mt-7 grid gap-2.5 sm:flex sm:flex-wrap">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Diskusikan Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#ai"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Explore AI
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="hero-e mt-8 grid grid-cols-4 gap-2 border-t border-black/[0.07] pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
                {[
                  ["Software", "Web & Mobile"],
                  ["AI", "Applied AI"],
                  ["Data", "Backend & Automation"],
                  ["Field", "Geo · IoT · Agriculture"],
                ].map(([title, subtitle]) => (
                  <div key={title}>
                    <p className="text-base font-black tracking-[-0.04em] sm:text-xl">
                      {title}
                    </p>
                    <p className="mt-1 text-[8px] leading-4 text-slate-400 sm:text-[10px]">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual relative mx-auto w-full max-w-[570px]">
              <div className="absolute -right-4 top-4 hidden h-[88%] w-[90%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#17191c] p-4 text-white shadow-[0_25px_75px_rgba(15,23,42,.15)] sm:p-6">
                <div className="flex items-start justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-sm font-black">
                      RHG Technology Engineering
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
                      Software · AI · Data · Field Technology
                    </p>
                  </div>

                  <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white/40">
                    Indonesia
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {[
                    {
                      icon: Code2,
                      title: "Product",
                      text: "Web & Mobile",
                    },
                    {
                      icon: BrainCircuit,
                      title: "Applied AI",
                      text: "Agent · Vision · RAG",
                    },
                    {
                      icon: Database,
                      title: "Data",
                      text: "Backend · Automation",
                    },
                    {
                      icon: Satellite,
                      title: "Field Tech",
                      text: "Geo · IoT · Agriculture",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[18px] border border-white/[0.07] bg-white/[0.035] p-4"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6f0f]">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>

                        <p className="mt-4 text-sm font-black">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] text-white/35">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 rounded-[18px] bg-[#22252a] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#ff9852]">
                        Applied Technology R&D
                      </p>
                      <p className="mt-1 text-sm font-black">
                        Real-world field experimentation
                      </p>
                    </div>
                    <Sprout className="h-5 w-5 text-[#ff9852]" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["AI", "Agriculture", "Drone", "IoT", "GeoAI"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[8px] font-semibold text-white/40"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="relative flex h-14 items-center sm:h-16">
            <div className="pointer-events-none absolute left-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="tech-track">
              {TECH_LOOP.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span className="px-5 text-[11px] font-bold text-slate-400 sm:px-8 sm:text-xs">
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
            <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr]">
              <div className="reveal">
                <Eyebrow>Capabilities</Eyebrow>

                <h2 className="mt-4 max-w-lg text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Lebih dari sekadar software development.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  RHG menggabungkan software engineering, AI, data,
                  geospatial, IoT, dan integrasi untuk membangun solusi
                  yang benar-benar terhubung.
                </p>

                <Link
                  href="/layanan"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-black"
                >
                  Semua layanan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-0 sm:border-l sm:border-t sm:border-black/[0.07]">
                {SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.number}
                      href={service.href}
                      className={`service-card reveal group rounded-[20px] border p-5 sm:rounded-none sm:border-b sm:border-r sm:border-l-0 sm:border-t-0 sm:p-7 ${
                        service.featured
                          ? "border-[#ff6f0f]/20 bg-[#fff8f2]"
                          : "border-black/[0.07] bg-[#fafafa] sm:bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={`service-icon flex h-11 w-11 items-center justify-center rounded-xl ${
                            service.featured
                              ? "bg-[#ff6f0f] text-white"
                              : "bg-[#f0f0ed] text-[#25282b] group-hover:bg-[#fff0e5] group-hover:text-[#ff6f0f]"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>

                        <div className="flex items-center gap-2">
                          {service.featured && (
                            <span className="rounded-full bg-[#ff6f0f]/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff6f0f]">
                              AI
                            </span>
                          )}

                          <span className="font-mono text-[9px] font-bold text-slate-300">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-5 text-[17px] font-black tracking-[-0.025em] sm:text-lg">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                        {service.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black opacity-50 transition group-hover:opacity-100">
                        Detail layanan
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* AI */}
        <section
          id="ai"
          className="relative overflow-hidden bg-[#17191c] text-white"
        >
          <div className="dark-light pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="reveal max-w-4xl">
              <Eyebrow dark>Applied AI</Eyebrow>

              <h2 className="mt-5 text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                AI untuk berbagai bisnis,
                <span className="text-[#ff8a34]">
                  {" "}
                  industri, dan kondisi dunia nyata.
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                Fokus kami bukan hanya AI untuk geospatial. RHG
                mengembangkan AI untuk operasional bisnis, customer
                service, dokumen, retail, logistics, perkebunan,
                infrastruktur, computer vision, dan kebutuhan khusus
                lainnya.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {AI_SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-2 text-[10px] font-semibold text-white/45"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {AI_SOLUTIONS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="ai-card reveal rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6f0f]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="font-mono text-[9px] font-bold text-white/20">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-black tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-white/42 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="reveal mt-10 flex flex-col gap-5 rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black">
                  Punya use case AI yang belum ada di daftar?
                </p>

                <p className="mt-1.5 max-w-2xl text-xs leading-6 text-white/40">
                  Kami dapat mengevaluasi workflow, data, API, kebutuhan
                  model, serta feasibility sebelum implementasi.
                </p>
              </div>

              <Link
                href="/kontak"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c]"
              >
                Bahas AI Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FIELD LAB */}
        <section className="relative overflow-hidden bg-[#f7f7f5]">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
              <div className="reveal">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6f0f]/15 bg-[#fff0e5] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                    Applied Technology Field Lab
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  RHG Coffee
                  <span className="text-[#ff6f0f]">
                    {" "}
                    AI Living Lab.
                  </span>
                </h2>

                <div className="mt-4 flex items-center gap-2 text-[12px] font-bold text-slate-500">
                  <MapPin className="h-4 w-4 text-[#ff6f0f]" />
                  Kabupaten Rejang Lebong, Provinsi Bengkulu
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  RHG Teknologi Memiliki lahan perkebunan dengan Area perkebunan kopi nyata yang digunakan sebagai
                  lingkungan eksperimen dan pilot project untuk
                  agriculture technology, artificial intelligence,
                  computer vision, drone, IoT, environmental monitoring,
                  GeoAI, dan sistem berbasis data lapangan.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Kondisi lahan berupa perkebunan pada medan lereng
                  dengan variasi elevasi dan lingkungan alami,
                  memberikan kondisi uji yang lebih representatif
                  dibandingkan simulasi laboratorium semata.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-2xl font-black tracking-[-0.04em]">
                      2.02
                      <span className="ml-1 text-sm text-[#ff6f0f]">
                        ha
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Approx. field area
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-2xl font-black tracking-[-0.04em]">
                      843–910
                      <span className="ml-1 text-sm text-[#ff6f0f]">
                        m
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Elevation range
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-lg font-black tracking-[-0.03em]">
                      Coffee Plantation
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Real agricultural environment
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-lg font-black tracking-[-0.03em]">
                      Sloped Terrain
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Field & terrain testing
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/kontak"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-5 text-sm font-black text-white"
                  >
                    Ajukan Kolaborasi
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={LAB_MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-5 text-sm font-bold"
                  >
                    Buka Satellite Map
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* SATELLITE MAP */}
              <div className="reveal relative">
                <div className="absolute -right-5 top-5 hidden h-[92%] w-[92%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.035] sm:block" />

                <div className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#17191c] shadow-[0_28px_85px_rgba(15,23,42,.17)]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 text-white sm:px-6">
                    <div>
                      <p className="text-sm font-black">
                        RHG Coffee AI Living Lab
                      </p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-white/30">
                        Satellite Field View
                      </p>
                    </div>

                    <span className="rounded-full bg-[#ff6f0f]/15 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff9852]">
                      Rejang Lebong
                    </span>
                  </div>

                  <div className="relative h-[360px] w-full sm:h-[430px]">
                    <iframe
                      src={LAB_MAP_EMBED}
                      title="Lokasi RHG Coffee AI Living Lab di Rejang Lebong, Bengkulu"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />

                    <div className="pointer-events-none absolute left-4 top-4 rounded-[16px] border border-white/15 bg-black/65 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                      <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#ff9852]">
                        Field Test Site
                      </p>

                      <p className="mt-1 text-xs font-black">
                        Coffee Plantation
                      </p>

                      <p className="mt-1 text-[9px] text-white/55">
                        Rejang Lebong · Bengkulu
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-white/[0.08] text-white">
                    {[
                      ["Environment", "Agriculture"],
                      ["Terrain", "Slope"],
                      ["Purpose", "AI / R&D"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border-r border-white/[0.07] px-3 py-4 last:border-r-0 sm:px-5"
                      >
                        <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                          {label}
                        </p>

                        <p className="mt-1 text-[10px] font-black text-white/70 sm:text-xs">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB CAPABILITIES */}
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {LAB_CAPABILITIES.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="lab-card reveal rounded-[20px] border border-black/[0.07] bg-white p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e5]">
                      <Icon className="h-[18px] w-[18px] text-[#ff6f0f]" />
                    </span>

                    <h3 className="mt-4 text-[15px] font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ENVIRONMENTAL POSSIBILITIES */}
            <div className="reveal mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-[20px] border border-black/[0.07] bg-[#eef4ea] p-5">
                <Sprout className="h-5 w-5 text-[#496c3b]" />

                <p className="mt-4 text-sm font-black">
                  Precision Agriculture
                </p>

                <p className="mt-2 text-[12px] leading-6 text-slate-600">
                  Pengamatan kesehatan tanaman, produktivitas,
                  vegetasi, penyakit, dan decision support.
                </p>
              </div>

              <div className="rounded-[20px] border border-black/[0.07] bg-[#eef5f7] p-5">
                <CloudSun className="h-5 w-5 text-[#3e6e7c]" />

                <p className="mt-4 text-sm font-black">
                  Environmental Intelligence
                </p>

                <p className="mt-2 text-[12px] leading-6 text-slate-600">
                  Data microclimate, rainfall, temperatur, soil,
                  drainage, dan perubahan kondisi lingkungan.
                </p>
              </div>

              <div className="rounded-[20px] border border-black/[0.07] bg-[#fff1e7] p-5">
                <BrainCircuit className="h-5 w-5 text-[#ff6f0f]" />

                <p className="mt-4 text-sm font-black">
                  Applied AI Research
                </p>

                <p className="mt-2 text-[12px] leading-6 text-slate-600">
                  Dataset nyata untuk pengembangan model, AI Agent,
                  computer vision, prediction, dan automation.
                </p>
              </div>
            </div>

            {/* COLLABORATION */}
            <div className="reveal mt-5 overflow-hidden rounded-[24px] bg-[#17191c] p-5 text-white sm:p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff8a34]">
                    Open for Technology Collaboration
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                    Punya teknologi yang membutuhkan pengujian di
                    lingkungan nyata?
                  </h3>

                  <p className="mt-2 max-w-3xl text-[12px] leading-6 text-white/40 sm:text-sm">
                    RHG terbuka untuk pembahasan pilot project dan
                    kolaborasi terkait artificial intelligence,
                    agriculture technology, computer vision, drone,
                    IoT, sensor, environmental monitoring, GIS,
                    GeoAI, maupun pengembangan teknologi lapangan
                    lainnya.
                  </p>
                </div>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] md:w-auto"
                >
                  Bahas Kolaborasi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="dark-light pointer-events-none absolute -left-32 -top-24 h-[500px] w-[500px] rounded-full bg-[#ff6f0f]/[0.08] blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div className="reveal">
                <Eyebrow dark>Our Approach</Eyebrow>

                <h2 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Teknologi mengikuti masalah.
                  <span className="text-[#ff8a34]">
                    {" "}
                    Bukan sebaliknya.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  Kami memilih software, model AI, infrastruktur,
                  sensor, maupun metode analisis setelah memahami
                  kebutuhan dan kondisi pengguna.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    icon: Layers3,
                    title: "End-to-End",
                    text: "Dari discovery hingga production.",
                  },
                  {
                    icon: Code2,
                    title: "Custom Built",
                    text: "Mengikuti workflow dan kebutuhan.",
                  },
                  {
                    icon: Network,
                    title: "Integrated",
                    text: "Software, AI, API, data dan hardware.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Maintainable",
                    text: "Siap dirawat dan dikembangkan.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[18px] bg-[#1d2024] p-4 sm:p-6"
                    >
                      <Icon className="h-5 w-5 text-[#ff8a34]" />

                      <h3 className="mt-4 text-sm font-black sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-white/40 sm:text-sm sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-2 text-[10px] font-semibold text-white/45 sm:px-4 sm:text-xs"
                  >
                    <Check className="h-3 w-3 text-[#ff8a34]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="reveal">
                <Eyebrow>Selected Work</Eyebrow>

                <h2 className="mt-4 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Teknologi yang digunakan
                  <span className="text-[#ff6f0f]">
                    {" "}
                    dalam operasional nyata.
                  </span>
                </h2>
              </div>

              <Link
                href="/portofolio"
                className="group inline-flex items-center gap-2 text-sm font-black"
              >
                Semua portofolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="partner-card reveal rounded-[22px] border border-black/[0.07] bg-[#fafaf8] p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#ff6f0f]" />
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                          {partner.location}
                        </p>
                      </div>

                      <h3 className="mt-3 text-xl font-black tracking-[-0.03em]">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-slate-500 transition hover:bg-[#17191c] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-5 text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="reveal">
                <Eyebrow>How We Work</Eyebrow>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dari masalah hingga sistem yang siap digunakan.
                </h2>
              </div>

              <div className="grid gap-3">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="process-card reveal rounded-[18px] border border-black/[0.07] bg-white p-4 sm:grid sm:grid-cols-[70px_180px_1fr] sm:gap-4 sm:px-0 sm:py-6 sm:border-x-0 sm:border-t-0 sm:bg-transparent"
                  >
                    <span className="font-mono text-[10px] font-bold text-[#ff6f0f]">
                      {item.number}
                    </span>

                    <h3 className="mt-2 text-[17px] font-black sm:mt-0">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:mt-0 sm:text-sm">
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
            <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
              <div className="reveal">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-black/45">
                  Build · Integrate · Experiment
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Punya ide software, AI, automation, atau teknologi
                  yang ingin diwujudkan?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan kebutuhan Anda. RHG dapat membantu mulai
                  dari perencanaan, development, integrasi, pilot
                  project, hingga production.
                </p>
              </div>

              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
              >
                Mulai Diskusi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}