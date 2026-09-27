import type { ReactNode } from "react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";

import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  CreditCard,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  Leaf,
  MapPin,
  MapPinned,
  Network,
  Satellite,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "RHG Teknologi Indonesia",
  description:
    "Pengembangan website, aplikasi mobile, backend, AI Agent, automasi AI, payment gateway, GIS, GeoAI, integrasi sistem, dan solusi digital untuk bisnis.",
};

const SERVICES = [
  {
    number: "01",
    title: "Web & Digital Platform",
    description:
      "Website perusahaan, customer portal, dashboard, marketplace, dan sistem web custom yang dibangun mengikuti proses bisnis.",
    icon: Globe2,
    href: "/layanan/website",
  },
  {
    number: "02",
    title: "Mobile Application",
    description:
      "Aplikasi Android dan iOS untuk pelanggan, operasional, retail, layanan, marketplace, dan produk digital.",
    icon: Smartphone,
    href: "/layanan/aplikasi-mobile",
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "API, database, authentication, migrasi data, sinkronisasi, automasi, dan backend yang siap berkembang.",
    icon: Database,
    href: "/layanan/jasa-it-backend",
  },
  {
    number: "04",
    title: "AI Agent & AI Development",
    description:
      "AI Agent, knowledge-based AI, RAG, automasi workflow, document processing, dan integrasi AI ke sistem bisnis.",
    icon: BrainCircuit,
    href: "/layanan/ai-agent-development",
    featured: true,
  },
  {
    number: "05",
    title: "Payment Integration",
    description:
      "Integrasi QRIS, virtual account, e-wallet, kartu, webhook, billing, serta payment gateway untuk transaksi digital.",
    icon: CreditCard,
    href: "/layanan/payment-gateway",
  },
  {
    number: "06",
    title: "GIS & GeoAI",
    description:
      "WebGIS, analisis spasial, tracking, pemetaan, drone analytics, visualisasi geospasial, dan integrasi GeoAI.",
    icon: MapPinned,
    href: "/layanan/maps-gis",
  },
  {
    number: "07",
    title: "System Integration",
    description:
      "Menghubungkan aplikasi, database, API pihak ketiga, jaringan, hardware, IoT, dan sistem operasional.",
    icon: Workflow,
    href: "/layanan/integrasi-sistem",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    description:
      "Monitoring, bug fixing, security update, backup, review arsitektur, dan pengembangan sistem berkelanjutan.",
    icon: ShieldCheck,
    href: "/layanan/maintenance-support",
  },
];

const AI_SOLUTIONS = [
  {
    number: "AI / 01",
    title: "AI Agent",
    description:
      "Agent yang dapat memahami konteks, membaca knowledge base, mengakses API, dan membantu menjalankan workflow bisnis.",
    icon: Bot,
  },
  {
    number: "AI / 02",
    title: "Knowledge & RAG",
    description:
      "AI yang menggunakan dokumen, database, dan pengetahuan internal perusahaan sebagai sumber informasi.",
    icon: Database,
  },
  {
    number: "AI / 03",
    title: "AI Automation",
    description:
      "Automasi pekerjaan berulang seperti klasifikasi, extraction, summarization, routing, dan pemrosesan data.",
    icon: Workflow,
  },
  {
    number: "AI / 04",
    title: "Custom AI Integration",
    description:
      "Integrasi AI ke website, mobile app, dashboard, backend, database, maupun sistem perusahaan yang sudah berjalan.",
    icon: BrainCircuit,
  },
];

const LAB_CAPABILITIES = [
  {
    icon: MapPinned,
    title: "GeoAI & Terrain",
    description:
      "Slope, elevasi, zonasi, drainage, perubahan kondisi lahan, dan analisis berbasis lokasi.",
  },
  {
    icon: Satellite,
    title: "Drone Analytics",
    description:
      "Orthomosaic, canopy monitoring, identifikasi tanaman, dan pengamatan kondisi area.",
  },
  {
    icon: Activity,
    title: "Computer Vision",
    description:
      "Eksperimen deteksi kesehatan tanaman, penyakit, buah, dan kondisi visual di lapangan.",
  },
  {
    icon: Leaf,
    title: "Smart Agriculture",
    description:
      "Integrasi sensor, data lingkungan, GIS, AI Agent, dan sistem monitoring perkebunan.",
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
      "Memahami bisnis, workflow, pengguna, data, masalah, dan hasil yang ingin dicapai.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Menyusun user flow, database, arsitektur, integrasi, keamanan, dan pendekatan teknis.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development dilakukan dengan fokus pada fungsi, pengalaman pengguna, maintainability, dan reliability.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Testing, production deployment, monitoring, support, dan pengembangan lanjutan mengikuti kebutuhan.",
  },
];

const CAPABILITIES = [
  "Custom development",
  "AI Agent & automation",
  "GIS & GeoAI",
  "API & system integration",
  "Source code ownership",
  "Production deployment",
  "Maintenance & support",
  "Indonesia & international project",
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
  "Mapbox",
  "PostGIS",
  "REST API",
  "Cloud",
  "MikroTik",
];

const TECH_LOOP = [...TECHNOLOGIES, ...TECHNOLOGIES];

type Coordinate = {
  lon: number;
  lat: number;
};

type LabBoundary = {
  points: string;
  areaHa: number;
  perimeterM: number;
};

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getCoffeeLabBoundary(): LabBoundary {
  const fallback: LabBoundary = {
    points:
      "164,80 292,55 465,86 540,170 512,270 410,344 250,360 120,286 82,178",
    areaHa: 2.02,
    perimeterM: 572,
  };

  try {
    const filePath = join(
      process.cwd(),
      "public",
      "data",
      "RHG.kml"
    );

    const kml = readFileSync(filePath, "utf8");

    const match = kml.match(
      /<coordinates>\s*([\s\S]*?)\s*<\/coordinates>/i
    );

    if (!match) {
      return fallback;
    }

    const coordinates: Coordinate[] = match[1]
      .trim()
      .split(/\s+/)
      .map((entry) => {
        const [lon, lat] = entry
          .split(",")
          .map(Number);

        return {
          lon,
          lat,
        };
      })
      .filter(
        (coordinate) =>
          Number.isFinite(coordinate.lon) &&
          Number.isFinite(coordinate.lat)
      );

    if (coordinates.length < 3) {
      return fallback;
    }

    const first = coordinates[0];
    const last = coordinates[coordinates.length - 1];

    const closedCoordinates =
      first.lon === last.lon &&
      first.lat === last.lat
        ? coordinates
        : [...coordinates, first];

    const uniqueCoordinates =
      closedCoordinates.slice(0, -1);

    const averageLon =
      uniqueCoordinates.reduce(
        (sum, coordinate) => sum + coordinate.lon,
        0
      ) / uniqueCoordinates.length;

    const averageLat =
      uniqueCoordinates.reduce(
        (sum, coordinate) => sum + coordinate.lat,
        0
      ) / uniqueCoordinates.length;

    const earthRadius = 6371000;

    const local = closedCoordinates.map(
      (coordinate) => {
        const x =
          toRadians(coordinate.lon - averageLon) *
          earthRadius *
          Math.cos(toRadians(averageLat));

        const y =
          toRadians(coordinate.lat - averageLat) *
          earthRadius;

        return {
          x,
          y,
        };
      }
    );

    let twiceArea = 0;
    let perimeter = 0;

    for (let i = 0; i < local.length - 1; i++) {
      const current = local[i];
      const next = local[i + 1];

      twiceArea +=
        current.x * next.y -
        next.x * current.y;

      perimeter += Math.hypot(
        next.x - current.x,
        next.y - current.y
      );
    }

    const areaHa =
      Math.abs(twiceArea) / 2 / 10000;

    const drawable = local.slice(0, -1);

    const xs = drawable.map((point) => point.x);
    const ys = drawable.map((point) => point.y);

    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const width = 620;
    const height = 360;
    const padding = 34;

    const scaleX =
      (width - padding * 2) /
      Math.max(maxX - minX, 1);

    const scaleY =
      (height - padding * 2) /
      Math.max(maxY - minY, 1);

    const scale = Math.min(scaleX, scaleY);

    const polygonWidth =
      (maxX - minX) * scale;

    const polygonHeight =
      (maxY - minY) * scale;

    const offsetX =
      (width - polygonWidth) / 2;

    const offsetY =
      (height - polygonHeight) / 2;

    const points = drawable
      .map((point) => {
        const x =
          offsetX +
          (point.x - minX) * scale;

        const y =
          height -
          offsetY -
          (point.y - minY) * scale;

        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

    return {
      points,
      areaHa,
      perimeterM: perimeter,
    };
  } catch {
    return fallback;
  }
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
      className={`inline-flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px] ${
        dark
          ? "text-white/45"
          : "text-slate-400"
      }`}
    >
      <span
        className={`h-px w-7 ${
          dark
            ? "bg-[#ff8a34]"
            : "bg-[#ff6f0f]"
        }`}
      />

      {children}
    </div>
  );
}

export default function HomePage() {
  const lab = getCoffeeLabBoundary();

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSide {
          from {
            opacity: 0;
            transform: translateX(28px) scale(.985);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
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

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes darkLight {
          0%,
          100% {
            transform: translate3d(-7%,0,0);
            opacity: .28;
          }

          50% {
            transform: translate3d(12%,-5%,0);
            opacity: .48;
          }
        }

        @keyframes labPulse {
          0%,
          100% {
            opacity: .35;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(-20%);
            opacity: 0;
          }

          15% {
            opacity: .65;
          }

          85% {
            opacity: .65;
          }

          100% {
            transform: translateY(380px);
            opacity: 0;
          }
        }

        @keyframes dataFlow {
          to {
            stroke-dashoffset: -50;
          }
        }

        @keyframes ctaSweep {
          0% {
            transform: translateX(-180%) skewX(-20deg);
          }

          50%,
          100% {
            transform: translateX(320%) skewX(-20deg);
          }
        }

        .hero-a,
        .hero-b,
        .hero-c,
        .hero-d,
        .hero-e {
          opacity: 0;
          animation:
            fadeUp
            .65s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .hero-a {
          animation-delay: .04s;
        }

        .hero-b {
          animation-delay: .12s;
        }

        .hero-c {
          animation-delay: .2s;
        }

        .hero-d {
          animation-delay: .28s;
        }

        .hero-e {
          animation-delay: .36s;
        }

        .hero-visual {
          opacity: 0;
          animation:
            fadeSide
            .8s
            cubic-bezier(.22,1,.36,1)
            .2s
            forwards,
            softFloat
            7s
            ease-in-out
            1.2s
            infinite;
        }

        .moving-grid {
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
            gridMove
            18s
            linear
            infinite;
        }

        .dot-grid {
          background-image:
            radial-gradient(
              circle,
              rgba(255,111,15,.17) 1px,
              transparent 1px
            );

          background-size: 18px 18px;
        }

        .tech-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation:
            marquee
            34s
            linear
            infinite;
        }

        .tech-track:hover {
          animation-play-state: paused;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            border-color .35s ease;
        }

        .service-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: #ff6f0f;
          transition:
            width .4s
            cubic-bezier(.22,1,.36,1);
        }

        .service-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.18);
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
          transform:
            translateY(-3px)
            rotate(-3deg);
        }

        .dark-light {
          animation:
            darkLight
            11s
            ease-in-out
            infinite;
        }

        .ai-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            border-color .35s ease;
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
              #ffad73
            );

          transition:
            width .45s ease;
        }

        .ai-card:hover {
          transform: translateY(-4px);
          background: #23262b;
          border-color: rgba(255,138,52,.2);
        }

        .ai-card:hover::after {
          width: 100%;
        }

        .lab-node {
          animation:
            labPulse
            2.6s
            ease-in-out
            infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .lab-flow {
          stroke-dasharray: 7 8;
          animation:
            dataFlow
            6s
            linear
            infinite;
        }

        .lab-scan {
          animation:
            scanLine
            5.5s
            ease-in-out
            infinite;
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
          box-shadow:
            0 16px 38px
            rgba(15,23,42,.06);
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

          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              transparent
            );

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

          animation:
            ctaSweep
            6s
            ease-in-out
            infinite;

          pointer-events: none;
        }

        @supports (animation-timeline: view()) {
          .reveal {
            animation:
              fadeUp
              linear
              both;

            animation-timeline: view();
            animation-range:
              entry 0%
              cover 24%;
          }
        }

        @media (max-width: 767px) {
          .moving-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .hero-visual {
            animation:
              fadeUp
              .65s
              cubic-bezier(.22,1,.36,1)
              .28s
              forwards;
          }

          .tech-track {
            animation-duration: 25s;
          }

          .service-card:hover,
          .ai-card:hover,
          .partner-card:hover {
            transform: none;
          }

          .service-card:hover::after,
          .ai-card:hover::after,
          .process-card:hover::after {
            width: 0;
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
          .lab-node,
          .lab-flow,
          .lab-scan,
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
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f5]">
          <div className="moving-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[#ff7a1a]/[0.07] blur-[90px] sm:h-[420px] sm:w-[420px]" />

          <div className="pointer-events-none absolute -right-40 top-16 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[100px] sm:h-[420px] sm:w-[420px]" />

          <div className="relative mx-auto grid max-w-7xl gap-11 px-4 pb-14 pt-12 sm:px-6 sm:py-16 md:min-h-[calc(100vh-70px)] md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-14 md:px-8 md:py-20 lg:px-10">
            {/* HERO TEXT */}

            <div className="min-w-0">
              <div className="hero-a">
                <Eyebrow>
                  PT RHG Teknologi Indonesia
                </Eyebrow>
              </div>

              <h1 className="hero-b mt-5 max-w-3xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-[#111315] min-[390px]:text-[41px] sm:mt-7 sm:text-5xl md:text-[60px] lg:text-[68px]">
                Sistem digital dan AI untuk bisnis yang
                <span className="text-[#ff6f0f]">
                  {" "}
                  ingin bergerak lebih jauh.
                </span>
              </h1>

              <p className="hero-c mt-5 max-w-2xl text-[14px] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                RHG mengembangkan website, aplikasi mobile,
                backend, AI Agent, automation, payment,
                GIS, GeoAI, dan integrasi sistem yang
                dibangun mengikuti kebutuhan nyata bisnis.
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
                  href="#ai"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-bold text-[#17191c] transition hover:border-black/20 sm:w-auto sm:px-6"
                >
                  Explore AI & R&D

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="hero-e mt-8 grid grid-cols-4 gap-2 border-t border-black/[0.07] pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
                {[
                  ["Web", "Platform"],
                  ["Mobile", "Android & iOS"],
                  ["AI", "Agent & Automation"],
                  ["Geo", "GIS & GeoAI"],
                ].map(([title, subtitle]) => (
                  <div
                    key={title}
                    className="min-w-0"
                  >
                    <p className="text-lg font-black tracking-[-0.04em] sm:text-2xl">
                      {title}
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-slate-400 sm:text-[11px]">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="hero-visual relative mx-auto w-full max-w-[570px]">
              <div className="absolute -right-4 top-4 hidden h-[88%] w-[90%] rounded-[30px] border border-[#ff7a1a]/15 bg-[#ff7a1a]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#15181c] p-4 text-white shadow-[0_24px_70px_rgba(15,23,42,.15)] sm:rounded-[30px] sm:p-6">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ff7a1a]/10 blur-[55px]" />

                <div className="relative flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4 sm:pb-5">
                  <div>
                    <p className="text-xs font-bold sm:text-sm">
                      RHG / Technology Partner
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/30 sm:text-[10px]">
                      Software · AI · Geo · Integration
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
                      desc: "Web & platform",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile",
                      desc: "Android & iOS",
                    },
                    {
                      icon: BrainCircuit,
                      title: "AI",
                      desc: "Agent & automation",
                    },
                    {
                      icon: MapPinned,
                      title: "Geo",
                      desc: "GIS & field intelligence",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[16px] border border-white/[0.07] bg-white/[0.035] p-3 sm:rounded-[20px] sm:p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#ff7a1a] sm:h-10 sm:w-10 sm:rounded-xl">
                          <Icon className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" />
                        </div>

                        <p className="mt-3 text-xs font-bold sm:mt-4 sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[9px] text-white/35 sm:text-[11px]">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-3 rounded-[16px] bg-[#202328] p-4 sm:mt-5 sm:rounded-[20px] sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#ff9852] sm:text-[9px]">
                        New R&D Capability
                      </p>

                      <p className="mt-1 text-xs font-bold sm:text-sm">
                        RHG Coffee AI Living Lab
                      </p>
                    </div>

                    <Leaf className="h-5 w-5 text-[#ff9852]" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {[
                      "AI",
                      "GeoAI",
                      "Drone",
                      "IoT",
                      "Field Data",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[8px] font-semibold text-white/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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

        {/* =====================================================
            TECHNOLOGY MARQUEE
        ====================================================== */}

        <section className="overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="relative flex h-14 items-center sm:h-16">
            <div className="pointer-events-none absolute left-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />

            <div className="pointer-events-none absolute right-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

            <div className="tech-track">
              {TECH_LOOP.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span className="px-4 text-[11px] font-bold text-slate-400 sm:px-8 sm:text-xs">
                    {item}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#ff6f0f]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="reveal">
                <Eyebrow>
                  Capabilities
                </Eyebrow>

                <h2 className="mt-4 max-w-lg text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:mt-5 sm:text-4xl md:text-5xl">
                  Satu partner untuk membangun sistem dari ujung ke ujung.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
                  RHG menangani product, mobile, backend,
                  AI, data, pembayaran, GIS, hingga
                  integrasi supaya sistem tidak berdiri
                  sendiri-sendiri.
                </p>

                <Link
                  href="/layanan"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-black text-[#17191c]"
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
                          ? "border-[#ff6f0f]/20 bg-[#fff8f2] sm:bg-[#fffaf6]"
                          : "border-black/[0.07] bg-[#fafafa] sm:bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`service-icon flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${
                            service.featured
                              ? "bg-[#ff6f0f] text-white"
                              : "bg-[#f0f0ed] text-[#25282b] group-hover:bg-[#fff0e5] group-hover:text-[#ff6f0f]"
                          }`}
                        >
                          <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                        </span>

                        <div className="flex items-center gap-2">
                          {service.featured && (
                            <span className="rounded-full bg-[#ff6f0f]/10 px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff6f0f]">
                              New
                            </span>
                          )}

                          <span className="font-mono text-[9px] font-bold text-slate-300 sm:text-[10px]">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-5 text-[17px] font-black tracking-[-0.025em] sm:mt-6 sm:text-lg">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-[13px] leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
                        {service.description}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-black text-[#17191c] opacity-60 transition group-hover:opacity-100">
                        Detail layanan

                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            AI SOLUTIONS
        ====================================================== */}

        <section
          id="ai"
          className="relative overflow-hidden bg-[#17191c] text-white"
        >
          <div className="dark-light pointer-events-none absolute -left-36 -top-40 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="pointer-events-none absolute -bottom-52 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
              <div className="reveal">
                <Eyebrow dark>
                  AI Solutions
                </Eyebrow>

                <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.06] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  AI yang terhubung dengan
                  <span className="text-[#ff8a34]">
                    {" "}
                    proses bisnis nyata.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  Bukan sekadar chatbot. Kami membangun AI
                  yang dapat menggunakan knowledge perusahaan,
                  membaca data, berkomunikasi dengan API,
                  dan membantu menjalankan workflow.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "AI Agent",
                    "RAG",
                    "Knowledge Base",
                    "Automation",
                    "API Integration",
                    "Document AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-[10px] font-semibold text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="/layanan/ai-agent-development"
                  className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition hover:bg-[#ff8a34]"
                >
                  Lihat Layanan AI

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {AI_SOLUTIONS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="ai-card reveal rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5 sm:p-6"
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6f0f]">
                          <Icon className="h-5 w-5 text-white" />
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
            </div>

            {/* AI FLOW */}

            <div className="reveal mt-12 overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff8a34]">
                    Connected Intelligence
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                    Dari data menjadi tindakan.
                  </h3>
                </div>

                <div className="grid flex-1 gap-2 sm:grid-cols-5 lg:max-w-3xl">
                  {[
                    "Business Data",
                    "Knowledge",
                    "AI Agent",
                    "Tools & API",
                    "Action",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="relative flex min-h-[62px] items-center justify-center rounded-[15px] border border-white/[0.07] bg-white/[0.035] px-3 text-center"
                    >
                      <span className="text-[10px] font-bold text-white/60">
                        {item}
                      </span>

                      {index < 4 && (
                        <ArrowRight className="absolute -right-3 z-10 hidden h-3.5 w-3.5 text-[#ff8a34] sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COFFEE AI LIVING LAB
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#f7f7f5]">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-35" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
              {/* COPY */}

              <div className="reveal">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6f0f]/15 bg-[#fff0e5] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                    RHG Research & Field Lab
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  RHG Coffee
                  <span className="text-[#ff6f0f]">
                    {" "}
                    AI Living Lab.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Lingkungan perkebunan kopi nyata yang dapat
                  digunakan RHG untuk eksperimen dan kolaborasi
                  teknologi AI, GeoAI, drone, computer vision,
                  IoT, terrain intelligence, dan smart
                  agriculture.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Area berada pada medan lereng dengan variasi
                  elevasi dan kondisi lingkungan nyata, sehingga
                  memungkinkan pengembangan teknologi diuji
                  langsung di lapangan, bukan hanya menggunakan
                  data simulasi.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-2xl font-black tracking-[-0.04em]">
                      {lab.areaHa.toFixed(2)}
                      <span className="ml-1 text-sm text-[#ff6f0f]">
                        ha
                      </span>
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Field test area
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
                    <p className="text-2xl font-black tracking-[-0.04em]">
                      {Math.round(lab.perimeterM)}
                      <span className="ml-1 text-sm text-[#ff6f0f]">
                        m
                      </span>
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Boundary perimeter
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-black/[0.07] bg-white p-4">
                    <p className="text-lg font-black tracking-[-0.035em]">
                      Real Field
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-slate-400">
                      Slope + natural environment
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/kontak"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-5 text-sm font-black text-white transition hover:bg-black"
                  >
                    Ajukan Kolaborasi R&D

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/layanan/maps-gis"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-5 text-sm font-bold transition hover:border-black/20"
                  >
                    GIS & GeoAI

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* DIGITAL TWIN VISUAL */}

              <div className="reveal relative">
                <div className="absolute -right-5 top-5 hidden h-[92%] w-[92%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.035] sm:block" />

                <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#17191c] shadow-[0_26px_80px_rgba(15,23,42,.15)]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-6">
                    <div>
                      <p className="text-xs font-black text-white sm:text-sm">
                        Field Digital Twin
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/28">
                        Boundary · Terrain · Sensor · AI
                      </p>
                    </div>

                    <span className="rounded-full bg-[#ff6f0f]/15 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff9852]">
                      KML Linked
                    </span>
                  </div>

                  <div className="relative p-3 sm:p-5">
                    <svg
                      viewBox="0 0 620 360"
                      className="h-auto w-full"
                      role="img"
                      aria-label="Visualisasi batas RHG Coffee AI Living Lab berdasarkan data KML"
                    >
                      <defs>
                        <linearGradient
                          id="labGround"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#303b2e"
                          />

                          <stop
                            offset="45%"
                            stopColor="#26332a"
                          />

                          <stop
                            offset="100%"
                            stopColor="#20272a"
                          />
                        </linearGradient>

                        <linearGradient
                          id="labBorder"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ffb16f"
                          />

                          <stop
                            offset="100%"
                            stopColor="#ff6f0f"
                          />
                        </linearGradient>

                        <clipPath id="coffeeLabClip">
                          <polygon points={lab.points} />
                        </clipPath>
                      </defs>

                      {/* BACKGROUND GRID */}

                      {Array.from({ length: 13 }).map(
                        (_, index) => (
                          <line
                            key={`v-${index}`}
                            x1={index * 52}
                            y1="0"
                            x2={index * 52}
                            y2="360"
                            stroke="white"
                            strokeOpacity=".025"
                          />
                        )
                      )}

                      {Array.from({ length: 8 }).map(
                        (_, index) => (
                          <line
                            key={`h-${index}`}
                            x1="0"
                            y1={index * 52}
                            x2="620"
                            y2={index * 52}
                            stroke="white"
                            strokeOpacity=".025"
                          />
                        )
                      )}

                      {/* ACTUAL KML POLYGON */}

                      <polygon
                        points={lab.points}
                        fill="url(#labGround)"
                        stroke="url(#labBorder)"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />

                      {/* CONTOURS */}

                      <g
                        clipPath="url(#coffeeLabClip)"
                        opacity=".24"
                      >
                        {[
                          "M30 80 C150 40 240 115 350 65 C460 15 530 80 650 35",
                          "M-20 120 C120 75 205 150 350 105 C470 68 550 130 680 82",
                          "M-10 165 C105 125 230 200 345 150 C470 105 545 185 660 125",
                          "M-10 215 C125 160 210 240 355 195 C465 160 555 220 660 172",
                          "M-20 260 C120 215 230 290 350 245 C470 205 555 270 680 220",
                          "M-20 310 C115 260 230 335 370 292 C480 258 560 315 670 275",
                        ].map((path, index) => (
                          <path
                            key={path}
                            d={path}
                            fill="none"
                            stroke={
                              index % 2 === 0
                                ? "#ffffff"
                                : "#ff9b57"
                            }
                            strokeWidth="1.1"
                            strokeOpacity={
                              index % 2 === 0
                                ? ".22"
                                : ".16"
                            }
                          />
                        ))}

                        <rect
                          className="lab-scan"
                          x="0"
                          y="-50"
                          width="620"
                          height="50"
                          fill="url(#scanGradient)"
                          opacity=".1"
                        />
                      </g>

                      {/* SENSOR / AI NODES */}

                      {[
                        [205, 126],
                        [345, 105],
                        [422, 180],
                        [290, 246],
                      ].map(([x, y], index) => (
                        <g
                          key={`${x}-${y}`}
                          style={{
                            animationDelay:
                              `${index * 0.4}s`,
                          }}
                        >
                          <circle
                            cx={x}
                            cy={y}
                            r="13"
                            fill="none"
                            stroke="#ff8a34"
                            strokeOpacity=".22"
                            className="lab-node"
                          />

                          <circle
                            cx={x}
                            cy={y}
                            r="5"
                            fill="#ff7a1a"
                          />

                          <circle
                            cx={x}
                            cy={y}
                            r="1.8"
                            fill="white"
                          />
                        </g>
                      ))}

                      {/* DATA ROUTES */}

                      <path
                        d="M205 126 C255 100 300 95 345 105"
                        fill="none"
                        stroke="#ff8a34"
                        strokeWidth="1.4"
                        strokeOpacity=".65"
                        className="lab-flow"
                      />

                      <path
                        d="M345 105 C390 120 420 145 422 180"
                        fill="none"
                        stroke="#ff8a34"
                        strokeWidth="1.4"
                        strokeOpacity=".65"
                        className="lab-flow"
                      />

                      <path
                        d="M422 180 C380 225 338 245 290 246"
                        fill="none"
                        stroke="#ff8a34"
                        strokeWidth="1.4"
                        strokeOpacity=".65"
                        className="lab-flow"
                      />

                      {/* DRONE */}

                      <g transform="translate(470 72)">
                        <circle
                          cx="0"
                          cy="0"
                          r="22"
                          fill="#17191c"
                          stroke="white"
                          strokeOpacity=".12"
                        />

                        <Satellite
                          x="-9"
                          y="-9"
                          width="18"
                          height="18"
                          color="#ff8a34"
                        />
                      </g>

                      {/* LABEL */}

                      <g transform="translate(32 315)">
                        <rect
                          width="188"
                          height="30"
                          rx="15"
                          fill="#17191c"
                          stroke="white"
                          strokeOpacity=".08"
                        />

                        <text
                          x="15"
                          y="19"
                          fill="white"
                          fillOpacity=".5"
                          fontSize="9"
                          fontWeight="700"
                        >
                          REAL-WORLD TEST ENVIRONMENT
                        </text>
                      </g>
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 border-t border-white/[0.08]">
                    {[
                      ["Boundary", "KML"],
                      ["Terrain", "Slope"],
                      ["Mode", "R&D"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border-r border-white/[0.07] px-3 py-4 last:border-r-0 sm:px-5"
                      >
                        <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                          {label}
                        </p>

                        <p className="mt-1 text-[11px] font-black text-white/70 sm:text-xs">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB CAPABILITIES */}

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {LAB_CAPABILITIES.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="reveal rounded-[20px] border border-black/[0.07] bg-white p-5"
                      style={{
                        animationDelay:
                          `${index * 0.05}s`,
                      }}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e5]">
                        <Icon className="h-[18px] w-[18px] text-[#ff6f0f]" />
                      </span>

                      <h3 className="mt-4 text-sm font-black sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            {/* COLLABORATION STRIP */}

            <div className="reveal mt-5 overflow-hidden rounded-[22px] bg-[#17191c] p-5 text-white sm:p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff8a34]">
                    Open for Technology Collaboration
                  </p>

                  <h3 className="mt-2 text-lg font-black tracking-[-0.025em] sm:text-xl">
                    Perlu environment nyata untuk pengujian teknologi?
                  </h3>

                  <p className="mt-2 max-w-2xl text-[12px] leading-6 text-white/40 sm:text-sm">
                    RHG terbuka untuk pembahasan kolaborasi
                    pengembangan atau pilot project terkait AI,
                    drone, IoT, computer vision, geospatial,
                    environmental monitoring, dan smart
                    agriculture.
                  </p>
                </div>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition hover:bg-[#ff8a34] md:w-auto"
                >
                  Bahas Kolaborasi

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            APPROACH
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="dark-light pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#ff6f0f]/[0.08] blur-[100px] sm:h-[500px] sm:w-[500px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              <div className="reveal">
                <Eyebrow dark>
                  Our Approach
                </Eyebrow>

                <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dibangun sebagai sistem.
                  <span className="text-[#ff8a34]">
                    {" "}
                    Bukan sekadar tampilan.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:mt-6 sm:text-base sm:leading-8">
                  Produk digital yang baik harus nyaman
                  digunakan, aman, mudah dirawat, dapat
                  diintegrasikan, dan tetap relevan ketika
                  bisnis berkembang.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-px sm:overflow-hidden sm:rounded-[24px] sm:bg-white/[0.08]">
                {[
                  {
                    icon: Layers3,
                    title: "End-to-End",
                    desc: "Dari discovery sampai production.",
                  },
                  {
                    icon: Code2,
                    title: "Custom Built",
                    desc: "Mengikuti workflow bisnis.",
                  },
                  {
                    icon: Network,
                    title: "Integrated",
                    desc: "API, AI, data dan sistem lain.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Maintainable",
                    desc: "Siap dirawat dan dikembangkan.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="reveal rounded-[18px] bg-[#1d2024] p-4 transition hover:bg-[#23262b] sm:rounded-none sm:p-6"
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

        {/* =====================================================
            SELECTED WORK
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="reveal max-w-3xl">
                <Eyebrow>
                  Selected Work
                </Eyebrow>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Sistem yang digunakan
                  <span className="text-[#ff6f0f]">
                    {" "}
                    dalam operasional nyata.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Beberapa kolaborasi dan sistem yang telah
                  dikerjakan RHG untuk kebutuhan bisnis di
                  Indonesia dan Australia.
                </p>
              </div>

              <Link
                href="/portofolio"
                className="group inline-flex items-center gap-2 text-sm font-black"
              >
                Semua portofolio

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14">
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
                      aria-label={`Kunjungi website ${partner.name}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-slate-500 transition hover:bg-[#17191c] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
              <div className="reveal">
                <Eyebrow>
                  How We Work
                </Eyebrow>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Proses yang jelas dari masalah sampai production.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Scope, data, integrasi, progress, testing,
                  dan hasil akhir dibuat jelas sejak awal.
                </p>
              </div>

              <div className="grid gap-3 sm:border-t sm:border-black/[0.08]">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="process-card reveal rounded-[18px] border border-black/[0.07] bg-white p-4 sm:grid sm:grid-cols-[70px_180px_1fr] sm:items-start sm:gap-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-6"
                  >
                    <span className="font-mono text-[10px] font-bold text-[#ff6f0f] sm:text-xs">
                      {item.number}
                    </span>

                    <h3 className="mt-2 text-[17px] font-black tracking-[-0.02em] sm:mt-0 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:mt-0 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="cta-section bg-[#ff6f0f]">
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
            <div className="grid items-center gap-7 md:grid-cols-[1fr_auto] md:gap-8">
              <div className="reveal">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-black/45 sm:text-[10px]">
                  Build · Integrate · Experiment
                </p>

                <h2 className="mt-3 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Punya project, ide AI, atau teknologi yang ingin diuji?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Dari software production hingga eksperimen AI,
                  GeoAI, drone dan smart agriculture — ceritakan
                  kebutuhan Anda dan kami bantu merancang
                  pendekatan teknisnya.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row md:flex-col">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
                >
                  Mulai Diskusi

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portofolio"
                  className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-black/15 px-5 text-sm font-black text-[#17191c] transition hover:bg-black/5 md:w-auto"
                >
                  Lihat Portofolio

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}