import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
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
    title: "Website & Company Profile",
    description:
      "Landing page, company profile, dashboard internal, hingga web app custom dengan tampilan modern dan performa stabil.",
    icon: Globe2,
  },
  {
    title: "Aplikasi Mobile",
    description:
      "Pengembangan aplikasi Android & iOS untuk kebutuhan retail, operasional, layanan pelanggan, dan sistem internal perusahaan.",
    icon: Smartphone,
  },
  {
    title: "Backend & Integrasi Sistem",
    description:
      "API, database, automasi operasional, ERP ringan, hingga sinkronisasi antar sistem agar bisnis berjalan lebih efisien.",
    icon: Database,
  },
  {
    title: "Payment Gateway",
    description:
      "Integrasi pembayaran digital seperti VA, QRIS, e-wallet, hingga kartu untuk proses transaksi yang aman dan mudah.",
    icon: CreditCard,
  },
  {
    title: "GIS, Maps & Tracking",
    description:
      "Solusi berbasis lokasi, dashboard monitoring, peta interaktif, asset tracking, dan visualisasi data spasial.",
    icon: MapPinned,
  },
  {
    title: "Custom Digital Solution",
    description:
      "Setiap bisnis punya alur yang berbeda. RHG membangun solusi yang benar-benar menyesuaikan kebutuhan operasional Anda.",
    icon: Workflow,
  },
];

const VALUES = [
  "Source code 100% milik client",
  "Pengembangan end-to-end dari ide sampai produksi",
  "Custom system, bukan template generik",
  "Support pasca launch dan maintenance",
  "Cocok untuk swasta, UMKM, hingga institusi",
  "Kolaborasi proyek lintas wilayah & negara",
];

const PARTNERS = [
  {
    name: "Buana",
    subtitle: "Retail Supply, Equipment & Service Platform",
    region: "Australia",
    city: "Australia",
    link: "https://www.buana.com.au/",
    summary:
      "Platform yang menghubungkan retail supply, commercial equipment, dan service booking dalam satu ekosistem digital.",
    x: 700,
    y: 360,
    accent: "from-[#2EE6A6] to-[#4F8CFF]",
  },
  {
    name: "KADAI ZIO / Fast & Go",
    subtitle: "Platform Belanja Harian & Delivery",
    region: "Sumatera Barat",
    city: "Sumatera Barat",
    link: "https://www.kadaizio.com/",
    summary:
      "Platform retail berbasis aplikasi untuk belanja kebutuhan harian, pickup toko, dan pengiriman digital.",
    x: 235,
    y: 210,
    accent: "from-[#FF9E2C] to-[#2EE6A6]",
  },
  {
    name: "Profita Agro Sarana",
    subtitle: "Warehouse & Distribution System",
    region: "Pontianak",
    city: "Pontianak, Kalimantan Barat",
    link: "https://profitaagrosarana.my.id/",
    summary:
      "Solusi sistem operasional dan distribusi untuk mendukung workflow gudang, stok, dan proses bisnis cabang.",
    x: 405,
    y: 170,
    accent: "from-[#6B8CFF] to-[#2EE6A6]",
  },
  {
    name: "IONET+",
    subtitle: "RT/RW Net & Billing Platform",
    region: "Sulawesi Utara",
    city: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    summary:
      "Platform manajemen operasional jaringan untuk billing, monitoring pelanggan, dan kebutuhan ISP/RT-RW Net.",
    x: 530,
    y: 190,
    accent: "from-[#2EE6A6] to-[#00C2FF]",
  },
];

const STEPS = [
  {
    title: "Discovery",
    desc: "Memahami kebutuhan bisnis, alur operasional, target pengguna, dan prioritas fitur.",
  },
  {
    title: "System Design",
    desc: "Menyusun struktur solusi, flow aplikasi, database, dan pengalaman pengguna yang tepat.",
  },
  {
    title: "Development",
    desc: "Implementasi frontend, backend, integrasi, serta penyesuaian fitur sesuai kebutuhan proyek.",
  },
  {
    title: "Testing & Launch",
    desc: "Uji fungsi, penyempurnaan, deployment, dan pendampingan agar sistem siap digunakan.",
  },
];

const JAKARTA = {
  name: "Jakarta",
  label: "Head Office RHG",
  x: 360,
  y: 255,
};

function routePath(toX: number, toY: number) {
  const midX = (JAKARTA.x + toX) / 2;
  const curveY = Math.min(JAKARTA.y, toY) - 60;
  return `M ${JAKARTA.x} ${JAKARTA.y} Q ${midX} ${curveY} ${toX} ${toY}`;
}

function SectionTitle({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
          dark
            ? "border-white/15 bg-white/5 text-[#7EE7FF]"
            : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base ${
          dark ? "text-white/65" : "text-slate-600"
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
      <style jsx global>{`
        @keyframes rhgGridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(32px);
          }
        }

        @keyframes rhgFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rhgPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
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

        @keyframes rhgDash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -180;
          }
        }

        @keyframes rhgGlow {
          0%,
          100% {
            box-shadow:
              0 0 0 rgba(46, 230, 166, 0),
              0 0 40px rgba(79, 140, 255, 0.12);
          }
          50% {
            box-shadow:
              0 0 28px rgba(46, 230, 166, 0.2),
              0 0 60px rgba(79, 140, 255, 0.18);
          }
        }

        .rhg-grid-bg::before {
          content: "";
          position: absolute;
          inset: -20%;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: radial-gradient(circle at center, black 38%, transparent 88%);
          animation: rhgGridMove 8s linear infinite;
          opacity: 0.3;
        }

        .rhg-float {
          animation: rhgFloat 6s ease-in-out infinite;
        }

        .rhg-glow-card {
          animation: rhgGlow 6s ease-in-out infinite;
        }

        .rhg-route {
          stroke-dasharray: 10 10;
          animation: rhgDash 10s linear infinite;
        }

        .rhg-node-ring {
          animation: rhgPulse 2.6s ease-out infinite;
          transform-origin: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .rhg-grid-bg::before,
          .rhg-float,
          .rhg-glow-card,
          .rhg-route,
          .rhg-node-ring {
            animation: none !important;
          }
        }
      `}</style>

      <main className="bg-[#050816] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,140,255,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(46,230,166,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,158,44,0.14),transparent_30%)]" />
          <div className="rhg-grid-bg absolute inset-0" />

          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#4F8CFF]/15 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#2EE6A6]/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-20 md:grid-cols-2 md:px-8 md:pb-28 md:pt-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EE7FF]">
                <Network className="h-3.5 w-3.5" />
                PT RHG Teknologi Indonesia
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl">
                Membangun
                <span className="bg-[linear-gradient(90deg,#ffffff,#7EE7FF,#2EE6A6)] bg-clip-text text-transparent">
                  {" "}
                  sistem digital{" "}
                </span>
                yang siap dipakai, siap tumbuh, dan siap produksi.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                RHG membantu bisnis membangun website, aplikasi mobile, backend,
                payment gateway, GIS, dan integrasi sistem dengan pendekatan
                custom, modern, dan berorientasi hasil.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#2EE6A6,#4F8CFF)] px-6 py-3.5 text-sm font-semibold text-[#04111F] transition hover:scale-[1.02]"
                >
                  Konsultasi Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/layanan"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Lihat Layanan
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Website & aplikasi custom",
                  "Sistem operasional & backend",
                  "Integrasi payment gateway",
                  "GIS, maps & tracking dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#2EE6A6]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rhg-float rhg-glow-card relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_0_60px_rgba(79,140,255,0.10)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      RHG Digital Ecosystem
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Connected solutions for modern business
                    </p>
                  </div>
                  <span className="rounded-full border border-[#2EE6A6]/25 bg-[#2EE6A6]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8BF2C7]">
                    Active
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Website",
                      desc: "Company profile, portal, dashboard",
                      icon: Globe2,
                    },
                    {
                      title: "Mobile Apps",
                      desc: "Android & iOS app development",
                      icon: Smartphone,
                    },
                    {
                      title: "Backend",
                      desc: "API, database & automation",
                      icon: Database,
                    },
                    {
                      title: "Payment",
                      desc: "Gateway integration & checkout",
                      icon: CreditCard,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(46,230,166,0.22),rgba(79,140,255,0.22))]">
                          <Icon className="h-5 w-5 text-[#CFFAFE]" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/55">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-[#4F8CFF]/20 bg-[#4F8CFF]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8DB7FF]">
                    Coverage
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Kolaborasi proyek RHG menjangkau Indonesia hingga Australia
                    dengan pendekatan pengembangan yang fleksibel dan terukur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#F8FAFC] text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
            <SectionTitle
              eyebrow="Services"
              title="Layanan utama RHG"
              description="Kami membangun solusi yang tidak hanya terlihat bagus, tetapi juga benar-benar bekerja untuk operasional dan pertumbuhan bisnis."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-slate-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0F172A,#1E293B)] shadow-[0_0_0_1px_rgba(15,23,42,0.06)]">
                      <Icon className="h-6 w-6 text-[#7EE7FF]" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY RHG */}
        <section className="bg-white text-slate-900">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why RHG
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 md:text-5xl">
                Kami tidak sekadar membuat tampilan.
                <span className="text-[#2563EB]"> Kami membangun sistem.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                Fokus RHG adalah membangun solusi yang relevan dengan kebutuhan
                nyata bisnis: alur operasional, transaksi, data, monitoring,
                serta pengalaman pengguna yang nyaman dan efisien.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {VALUES.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5A4]" />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[linear-gradient(180deg,#081223,#0D1B35)] p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    value: "End-to-End",
                    label: "Dari ide, desain, development sampai launch",
                  },
                  {
                    value: "Custom",
                    label: "Menyesuaikan kebutuhan bisnis dan operasional",
                  },
                  {
                    value: "Scalable",
                    label: "Siap dikembangkan seiring pertumbuhan bisnis",
                  },
                  {
                    value: "Supported",
                    label: "Support, maintenance, dan update lanjutan",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <p className="text-lg font-bold tracking-[-0.03em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[#2EE6A6]/20 bg-[#2EE6A6]/10 p-5">
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-[#8BF2C7]" />
                  <p className="text-sm font-semibold text-white">
                    Cocok untuk project internal, operasional, maupun produk
                    digital publik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP + PARTNERS */}
        <section className="relative overflow-hidden bg-[#07101F]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(46,230,166,0.10),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
            <SectionTitle
              eyebrow="Client Network"
              title="Jaringan kerja sama RHG"
              description="RHG berkolaborasi dengan berbagai client dan project di beberapa wilayah Indonesia hingga Australia."
              dark
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(79,140,255,0.08)] backdrop-blur-xl md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      RHG Collaboration Map
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Head office di Jakarta dengan jaringan kerja sama lintas
                      wilayah
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8DB7FF]">
                    Live View
                  </span>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-3 md:p-5">
                  <svg
                    viewBox="0 0 860 520"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Peta jaringan kerja sama RHG"
                  >
                    <defs>
                      <linearGradient
                        id="routeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2EE6A6" stopOpacity="0.95" />
                        <stop offset="55%" stopColor="#7EE7FF" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.95" />
                      </linearGradient>

                      <filter id="glow">
                        <feDropShadow
                          dx="0"
                          dy="0"
                          stdDeviation="8"
                          floodColor="#4F8CFF"
                          floodOpacity="0.4"
                        />
                      </filter>
                    </defs>

                    {/* Simplified map silhouettes */}
                    <path
                      d="M160 105 C183 103 201 121 215 151 C226 177 240 210 244 236 C247 254 233 267 214 259 C194 250 179 228 166 205 C152 181 138 154 139 130 C140 115 146 107 160 105 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />
                    <path
                      d="M242 280 C278 273 315 275 350 281 L386 287 C395 289 395 296 388 298 L334 299 C300 298 268 294 241 289 C232 287 233 282 242 280 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />
                    <path
                      d="M332 128 C357 110 393 113 410 129 C425 143 430 168 421 193 C413 217 394 236 371 242 C351 248 332 239 322 220 C310 197 312 173 317 151 C320 140 324 133 332 128 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />
                    <path
                      d="M470 147 C482 140 493 146 492 159 C491 171 487 182 495 188 C503 194 515 194 518 203 C521 212 513 221 504 226 C493 232 490 242 492 252 C493 261 485 265 477 260 C468 254 468 242 468 232 C468 222 462 217 455 221 C448 226 439 224 438 214 C437 203 450 196 456 187 C461 180 461 154 470 147 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />
                    <path
                      d="M555 182 C587 166 635 168 663 180 C685 190 699 207 696 220 C692 232 674 240 656 238 C634 235 615 241 592 246 C573 250 555 242 548 229 C541 214 543 191 555 182 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />
                    <path
                      d="M585 331 C617 309 664 307 707 322 C739 333 762 357 760 384 C757 410 735 434 702 446 C666 458 626 453 600 435 C576 418 556 399 551 378 C546 357 558 341 585 331 Z"
                      fill="rgba(79,140,255,0.14)"
                      stroke="rgba(126,231,255,0.22)"
                    />

                    {/* routes */}
                    {PARTNERS.map((partner) => (
                      <path
                        key={`route-${partner.name}`}
                        d={routePath(partner.x, partner.y)}
                        fill="none"
                        stroke="url(#routeGradient)"
                        strokeWidth="2.2"
                        className="rhg-route"
                        opacity="0.95"
                      />
                    ))}

                    {/* HQ */}
                    <g filter="url(#glow)">
                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="24"
                        fill="rgba(46,230,166,0.08)"
                      />
                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="10"
                        fill="#2EE6A6"
                      />
                      <circle
                        cx={JAKARTA.x}
                        cy={JAKARTA.y}
                        r="19"
                        fill="none"
                        stroke="rgba(46,230,166,0.35)"
                        className="rhg-node-ring"
                      />
                      <text
                        x={JAKARTA.x}
                        y={JAKARTA.y - 18}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="700"
                      >
                        Jakarta
                      </text>
                      <text
                        x={JAKARTA.x}
                        y={JAKARTA.y + 28}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.65)"
                        fontSize="10"
                      >
                        Head Office RHG
                      </text>
                    </g>

                    {/* partner nodes */}
                    {PARTNERS.map((partner) => (
                      <g key={partner.name} filter="url(#glow)">
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="18"
                          fill="rgba(79,140,255,0.08)"
                        />
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="8"
                          fill="#7EE7FF"
                        />
                        <circle
                          cx={partner.x}
                          cy={partner.y}
                          r="16"
                          fill="none"
                          stroke="rgba(126,231,255,0.28)"
                          className="rhg-node-ring"
                        />
                        <text
                          x={partner.x}
                          y={partner.y - 16}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="11"
                          fontWeight="700"
                        >
                          {partner.region}
                        </text>
                        <text
                          x={partner.x}
                          y={partner.y + 25}
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.62)"
                          fontSize="9"
                        >
                          {partner.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/55">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2EE6A6]" />
                    Kantor Pusat RHG
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7EE7FF]" />
                    Lokasi kerja sama / client
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className={`inline-flex rounded-full bg-gradient-to-r ${partner.accent} px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#04111F]`}
                        >
                          {partner.region}
                        </span>

                        <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-white">
                          {partner.name}
                        </h3>
                        <p className="mt-1 text-sm text-[#8DB7FF]">
                          {partner.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {partner.summary}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                          Lokasi
                        </p>
                        <p className="mt-1 text-sm text-white/80">
                          {partner.city}
                        </p>
                      </div>

                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#F8FAFC] text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
            <SectionTitle
              eyebrow="Workflow"
              title="Cara RHG bekerja"
              description="Kami menjaga proses tetap jelas, efisien, dan terukur agar setiap project berjalan lebih rapi dari awal hingga launch."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.05)]"
                >
                  <span className="absolute right-5 top-5 text-4xl font-extrabold tracking-[-0.08em] text-slate-100">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0F172A,#2563EB)] text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(46,230,166,0.18),transparent_30%)]" />
          <div className="rhg-grid-bg absolute inset-0" />

          <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:px-8 md:py-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EE7FF]">
              <Sparkles className="h-3.5 w-3.5" />
              Ready to Build
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
              Kalau kamu ingin sistem yang
              <span className="bg-[linear-gradient(90deg,#2EE6A6,#7EE7FF,#ffffff)] bg-clip-text text-transparent">
                {" "}
                benar-benar sesuai kebutuhan bisnis
              </span>
              , RHG siap bantu.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
              Diskusikan kebutuhan project kamu, mulai dari website, mobile app,
              backend, GIS, payment gateway, sampai sistem operasional custom.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#2EE6A6,#4F8CFF)] px-6 py-3.5 text-sm font-semibold text-[#04111F] transition hover:scale-[1.02]"
              >
                Mulai Konsultasi
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/portofolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}