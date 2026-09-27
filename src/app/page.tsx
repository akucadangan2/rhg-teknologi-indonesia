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
  Sparkles,
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

const HQ = {
  x: 353,
  y: 267,
};

function routeTo(x: number, y: number) {
  const middleX = (HQ.x + x) / 2;
  const middleY = Math.min(HQ.y, y) - 52;
  return `M ${HQ.x} ${HQ.y} Q ${middleX} ${middleY} ${x} ${y}`;
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] ${
        dark ? "text-white/50" : "text-slate-400"
      }`}
    >
      <span
        className={`h-px w-8 ${dark ? "bg-[#ff8a34]" : "bg-[#ff7a1a]"}`}
      />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes softFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes softFloatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        @keyframes routeMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
        }
        @keyframes mapPulse {
          0% { transform: scale(0.7); opacity: 0.55; }
          70%, 100% { transform: scale(2.1); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(-2.5deg); }
          50% { transform: rotate(2.5deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 111, 15, 0.25); }
          50% { box-shadow: 0 0 0 12px rgba(255, 111, 15, 0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .home-float { animation: softFloat 6.5s ease-in-out infinite; }
        .home-float-delay { animation: softFloatReverse 7.5s ease-in-out infinite; }
        .home-route {
          stroke-dasharray: 6 10;
          animation: routeMove 7s linear infinite;
        }
        .home-pulse {
          animation: mapPulse 2.6s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .home-rotate { animation: gentleRotate 11s ease-in-out infinite; }
        .home-glow { animation: glowPulse 3s ease-in-out infinite; }

        .home-grid {
          background-image:
            linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .home-dot-grid {
          background-image: radial-gradient(circle, rgba(255, 122, 26, 0.18) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @supports (animation-timeline: view()) {
          .home-reveal {
            animation: fadeUp linear both;
            animation-timeline: view();
            animation-range: entry 0% cover 22%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-float,
          .home-float-delay,
          .home-route,
          .home-pulse,
          .home-rotate,
          .home-glow,
          .home-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <main className="overflow-hidden bg-[#f6f6f4] text-[#141618]">
        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="home-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className="pointer-events-none absolute -left-48 -top-48 h-[480px] w-[480px] rounded-full bg-[#ff7a1a]/[0.08] blur-[120px]" />
          <div className="pointer-events-none absolute right-[-200px] top-20 h-[460px] w-[460px] rounded-full bg-blue-500/[0.07] blur-[120px]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20 lg:gap-20 lg:px-10">
            {/* LEFT */}
            <div className="home-reveal">
              <Eyebrow>PT RHG Teknologi Indonesia</Eyebrow>

              <h1 className="mt-7 max-w-3xl text-[42px] font-black leading-[0.96] tracking-[-0.055em] text-[#0f1113] sm:text-5xl md:text-[58px] lg:text-[68px]">
                Teknologi untuk bisnis yang
                <span className="text-[#ff6f0f]"> ingin bergerak lebih jauh.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base md:text-lg">
                Kami membangun website, aplikasi mobile, backend, payment
                integration, GIS, dan sistem digital yang dirancang mengikuti
                kebutuhan nyata bisnis Anda.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#15181c] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-black/20"
                >
                  Diskusikan Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portofolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-bold text-[#17191c] transition hover:border-black/20 hover:bg-slate-50"
                >
                  Lihat Portofolio
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-black/[0.07] pt-7">
                {[
                  { label: "Web", sub: "Platform & dashboard" },
                  { label: "Mobile", sub: "Android & iOS" },
                  { label: "System", sub: "Backend & integration" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-black tracking-[-0.04em] text-[#15181c]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="home-rotate absolute -right-8 top-6 h-[86%] w-[88%] rounded-[34px] border border-[#ff7a1a]/25 bg-[#ff7a1a]/[0.06]" />

              <div className="home-float relative overflow-hidden rounded-[32px] border border-black/[0.07] bg-[#14171b] p-5 text-white shadow-[0_40px_100px_rgba(15,23,42,0.22)] sm:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-sm font-bold">RHG / Technology Partner</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Digital system development
                    </p>
                  </div>
                  <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                    Indonesia
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Code2, title: "Product Engineering", desc: "Web & digital product" },
                    { icon: Smartphone, title: "Mobile Development", desc: "Android & iOS" },
                    { icon: ServerCog, title: "Backend System", desc: "API, database & cloud" },
                    { icon: MapPinned, title: "GIS & Integration", desc: "Maps, tracking & API" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-[20px] border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 hover:bg-white/[0.06]"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff7a1a]">
                          <Icon className="h-4.5 w-4.5 text-white" />
                        </div>
                        <p className="mt-4 text-sm font-bold">{item.title}</p>
                        <p className="mt-1 text-[11px] text-white/35">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-[20px] bg-[#1e2227] px-5 py-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff9852]">
                      Project Coverage
                    </p>
                    <p className="mt-1.5 text-sm font-bold">Indonesia & Australia</p>
                  </div>
                  <Network className="h-5 w-5 text-white/30" />
                </div>
              </div>

              <div className="home-float-delay absolute -bottom-5 -left-3 hidden rounded-[18px] border border-black/[0.07] bg-white px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e5]">
                    <Blocks className="h-4 w-4 text-[#ff6f0f]" />
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                      Approach
                    </p>
                    <p className="mt-0.5 text-xs font-bold">Built around your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            TECH STRIP
        ====================================================== */}
        <section className="border-b border-black/[0.06] bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-5 sm:px-6 md:px-8 lg:px-10">
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-300">
              Technology
            </span>
            {TECHNOLOGIES.map((item) => (
              <span
                key={item}
                className="text-xs font-bold text-slate-400 transition hover:text-[#ff6f0f]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ======================================================
            SERVICES
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
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
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#17191c] transition hover:text-[#ff6f0f]"
                >
                  Semua layanan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid border-l border-t border-black/[0.07] sm:grid-cols-2">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="home-reveal group border-b border-r border-black/[0.07] p-6 transition duration-300 hover:bg-[#faf9f7] sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2f2f0] transition group-hover:bg-[#fff0e5]">
                          <Icon className="h-5 w-5 text-[#25282b] transition group-hover:text-[#ff6f0f]" />
                        </span>
                        <span className="font-mono text-[10px] font-bold text-slate-300">
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

        {/* ======================================================
            PHILOSOPHY / WHY
        ====================================================== */}
        <section className="bg-[#15181c] text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 md:grid-cols-2 md:px-8 md:py-28 lg:px-10">
            <div className="home-reveal">
              <Eyebrow dark>Our Approach</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
                Dibangun sebagai sistem.
                <span className="text-[#ff8a34]"> Bukan sekadar tampilan.</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-white/45 sm:text-base">
                Produk digital yang baik harus nyaman digunakan, mudah dirawat,
                dapat diintegrasikan, dan tetap relevan ketika kebutuhan bisnis
                berkembang.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[26px] bg-white/[0.08] sm:grid-cols-2">
              {[
                { icon: Layers3, title: "End-to-End", desc: "Dari perencanaan sampai production." },
                { icon: Code2, title: "Custom Built", desc: "Mengikuti kebutuhan dan workflow Anda." },
                { icon: Network, title: "Integrated", desc: "Terhubung ke API dan sistem lain." },
                { icon: ShieldCheck, title: "Maintainable", desc: "Dibangun agar mudah dikembangkan." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="home-reveal bg-[#1c2025] p-6">
                    <Icon className="h-5 w-5 text-[#ff8a34]" />
                    <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/40">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3 border-t border-white/[0.08] pt-8">
                {CAPABILITIES.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs font-semibold text-white/45"
                  >
                    <Check className="h-3.5 w-3.5 text-[#ff8a34]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            COLLABORATION MAP
        ====================================================== */}
        <section className="bg-[#f6f6f4]">
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

            <div className="mt-12 grid gap-6 xl:grid-cols-[1.28fr_0.72fr]">
              {/* MAP */}
              <div className="home-reveal overflow-hidden rounded-[28px] border border-black/[0.07] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-sm font-black">Project Coverage</p>
                    <p className="mt-1 text-xs text-slate-400">Indonesia & Australia</p>
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
                      <linearGradient id="routeOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff6f0f" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#315efb" stopOpacity="0.75" />
                      </linearGradient>
                      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Islands */}
                    <path d="M149 102 C172 97 194 115 208 142 C224 172 239 204 245 230 C249 248 237 263 218 257 C198 251 181 230 168 208 C153 181 140 156 137 132 C135 116 141 105 149 102 Z" fill="#ecece7" stroke="#d9d9d3" />
                    <path d="M234 276 C270 271 307 272 345 279 L391 285 C401 287 401 294 390 298 L334 299 C300 298 267 294 237 289 C228 287 226 280 234 276 Z" fill="#ecece7" stroke="#d9d9d3" />
                    <path d="M325 120 C348 106 383 109 402 125 C419 141 424 166 416 192 C409 216 390 236 367 243 C346 249 327 239 317 221 C306 199 308 177 313 153 C316 138 318 127 325 120 Z" fill="#ecece7" stroke="#d9d9d3" />
                    <path d="M466 145 C479 136 492 143 492 157 C491 171 484 181 493 189 C501 197 514 196 519 205 C524 215 515 224 505 230 C493 237 490 246 493 256 C495 266 485 272 476 265 C466 258 467 244 469 231 C471 220 464 215 455 221 C444 228 435 221 440 210 C445 198 458 195 460 184 C462 172 458 152 466 145 Z" fill="#ecece7" stroke="#d9d9d3" />
                    <path d="M558 179 C589 164 635 165 668 178 C691 187 704 204 700 218 C696 232 678 239 659 234 C638 229 618 236 597 242 C578 247 558 238 551 222 C545 207 546 187 558 179 Z" fill="#ecece7" stroke="#d9d9d3" />
                    <path d="M578 334 C610 311 660 305 705 319 C741 330 765 356 762 385 C760 414 735 438 701 450 C667 462 626 455 598 437 C572 420 551 399 548 378 C545 357 556 342 578 334 Z" fill="#ecece7" stroke="#d9d9d3" />

                    {/* Routes */}
                    {PARTNERS.map((partner) => (
                      <path
                        key={`route-${partner.name}`}
                        d={routeTo(partner.x, partner.y)}
                        fill="none"
                        stroke="url(#routeOrange)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="home-route"
                        filter="url(#glow)"
                      />
                    ))}

                    {/* HQ */}
                    <g>
                      <circle cx={HQ.x} cy={HQ.y} r="20" fill="none" stroke="#ff7a1a" strokeOpacity="0.3" className="home-pulse" />
                      <circle cx={HQ.x} cy={HQ.y} r="9" fill="#ff6f0f" filter="url(#glow)" />
                      <circle cx={HQ.x} cy={HQ.y} r="3" fill="white" />
                      <text x={HQ.x} y={HQ.y - 20} textAnchor="middle" fill="#17191c" fontSize="11" fontWeight="700">
                        Jakarta
                      </text>
                      <text x={HQ.x} y={HQ.y + 28} textAnchor="middle" fill="#8a8f96" fontSize="8">
                        Kantor Pusat
                      </text>
                    </g>

                    {/* Client markers */}
                    {PARTNERS.map((partner) => (
                      <g key={partner.name}>
                        <circle cx={partner.x} cy={partner.y} r="16" fill="none" stroke="#315efb" strokeOpacity="0.22" className="home-pulse" />
                        <circle cx={partner.x} cy={partner.y} r="6.5" fill="#315efb" />
                        <text x={partner.x} y={partner.y - 17} textAnchor="middle" fill="#17191c" fontSize="9" fontWeight="700">
                          {partner.location}
                        </text>
                        <text x={partner.x} y={partner.y + 24} textAnchor="middle" fill="#8a8f96" fontSize="7.5">
                          {partner.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="flex flex-wrap gap-6 border-t border-black/[0.06] px-5 py-4 text-[10px] font-medium text-slate-400 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f0f]" />
                    Kantor Pusat
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#315efb]" />
                    Client / Project
                  </div>
                </div>
              </div>

              {/* PARTNER CARDS */}
              <div className="grid gap-3">
                {PARTNERS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-reveal group block rounded-[22px] border border-black/[0.07] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-lg hover:shadow-black/5"
                  >
                    <div className="flex items-start justify-between gap-4">
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-slate-500 transition group-hover:bg-[#15181c] group-hover:text-white">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {partner.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            PROCESS
        ====================================================== */}
        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
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
                {PROCESS.map((item, index) => (
                  <div
                    key={item.number}
                    className="home-reveal grid gap-4 border-b border-black/[0.08] py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                  >
                    <span className="font-mono text-xs font-bold text-[#ff6f0f]">
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

        {/* ======================================================
            CTA
        ====================================================== */}
        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/45">
                Start a Project
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-[#15181c] sm:text-4xl md:text-5xl">
                Punya sistem yang ingin dibangun atau diperbaiki?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                Ceritakan kebutuhan bisnis Anda. Kami bantu menyusun pendekatan
                teknis dan implementasi yang sesuai.
              </p>
            </div>

            <Link
              href="/kontak"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#15181c] px-7 py-4 text-sm font-black text-white transition hover:bg-black hover:shadow-xl"
            >
              Konsultasi Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}