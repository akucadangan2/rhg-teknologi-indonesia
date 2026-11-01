import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
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
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import ClientsMap, { type MapPoint, type HqPoint } from "./clients-map";
export const metadata = {
  title: "RHG Teknologi Indonesia",
  description:
    "Pengembangan website, aplikasi mobile, backend, integrasi pembayaran, GIS, otomasi, dan integrasi sistem untuk bisnis dan industri.",
};

/* =========================================================
   GAMBAR (semua di folder /public)
========================================================= */
const IMG = {
  hero: "/hero.jpg",
  ai: "/ai-vision.jpg",
  approach: "/approach.jpg",
};

const SERVICES = [
  {
    number: "01",
    title: "Website & Platform Digital",
    description:
      "Website perusahaan, portal, dashboard, dan marketplace yang disusun sesuai proses bisnis.",
    icon: Globe2,
    href: "/layanan/website",
  },
  {
    number: "02",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android dan iOS untuk pelanggan, operasional internal, retail, dan layanan.",
    icon: Smartphone,
    href: "/layanan/aplikasi-mobile",
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "API, database, autentikasi, migrasi, dan sinkronisasi data untuk sistem yang terus berkembang.",
    icon: Database,
    href: "/layanan/jasa-it-backend",
  },
  {
    number: "04",
    title: "Otomasi & AI",
    description:
      "Otomasi proses, pengolahan dokumen, dan integrasi layanan AI ke sistem yang sudah berjalan.",
    icon: BrainCircuit,
    href: "/layanan/ai-agent-development",
  },
  {
    number: "05",
    title: "Integrasi Pembayaran",
    description:
      "QRIS, virtual account, e-wallet, kartu, webhook, billing, dan rekonsiliasi pembayaran.",
    icon: CreditCard,
    href: "/layanan/payment-gateway",
  },
  {
    number: "06",
    title: "GIS & Pemetaan",
    description:
      "WebGIS, pelacakan, analisis spasial, pemetaan, dan sistem berbasis lokasi.",
    icon: MapPinned,
    href: "/layanan/maps-gis",
  },
  {
    number: "07",
    title: "Integrasi Sistem & IoT",
    description:
      "Integrasi API, database, jaringan, perangkat keras, sensor, dan perangkat lapangan.",
    icon: Workflow,
    href: "/layanan/integrasi-sistem",
  },
  {
    number: "08",
    title: "Maintenance & Support",
    description:
      "Monitoring, perbaikan bug, pembaruan keamanan, backup, dan pengembangan lanjutan.",
    icon: ShieldCheck,
    href: "/layanan/maintenance-support",
  },
];

const AUTOMATION_POINTS = [
  "Chatbot dan asisten layanan pelanggan",
  "Pengolahan dan ekstraksi data dari dokumen",
  "Otomasi alur kerja dan persetujuan",
  "Analisis gambar untuk inspeksi dan klasifikasi",
];

const CLIENTS = [
  {
    name: "Buana",
    category: "Retail, Equipment & Service",
    location: "Australia",
    link: "https://www.buana.com.au/",
    image: "/klien-buana.jpg",
    description:
      "Platform digital untuk retail supply, commercial equipment, pemesanan, pelacakan, dan layanan servis.",
  },
  {
    name: "KitasHub",
    category: "Layanan KITAS & Visa",
    location: "DKI Jakarta",
    link: "https://halokitas.co.id",
    image: "/klien-kitashub.jpg",
    description:
      "Website company profile untuk layanan pengurusan KITAS dan visa di Indonesia.",
  },
  {
    name: "Profita Agro Sarana",
    category: "Gudang & Distribusi",
    location: "Pontianak, Kalimantan Barat",
    link: "https://profitaagrosarana.my.id/",
    image: "/klien-profita-agro.jpg",
    description:
      "Sistem operasional gudang dan distribusi untuk stok, picking, permintaan barang, dan koordinasi cabang.",
  },
  {
    name: "IONET+",
    category: "ISP & Operasional Jaringan",
    location: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    image: "/klien-ionet.jpg",
    description:
      "Platform billing, monitoring pelanggan, pembayaran, dan operasional jaringan ISP.",
  },
  {
    name: "Kelapa Tangguh Jaya",
    category: "Kopra & Arang Tempurung",
    location: "Minahasa, Sulawesi Utara",
    link: "https://www.kelapatangguhjaya.com",
    image: "/klien-kelapa-tangguh-jaya.jpg",
    description:
      "Website dan aplikasi untuk pembelian kopra, tempurung, dan arang tempurung langsung dari petani.",
  },
  {
    name: "Madani Berdaya",
    category: "Marketplace Kecamatan",
    location: "Palembang, Sumatera Selatan",
    link: "https://www.madaniberdaya.com",
    image: "/klien-madani-berdaya.jpg",
    description:
      "Aplikasi untuk warga satu kecamatan: mencari kerja, memasang lowongan, membuka toko, dan berbelanja dari tetangga.",
  },
  {
    name: "KADAI ZIO / Fast & Go",
    category: "Retail & Delivery",
    location: "Padang, Sumatera Barat",
    link: "https://www.kadaizio.com/",
    image: "/klien-kadai-zio.jpg",
    description:
      "Sistem retail digital untuk katalog produk, pemesanan, pickup, dan pengantaran.",
  },
];

/* Titik klien. Koordinat Buana adalah perkiraan (Sydney), ganti dengan kota yang sebenarnya. */
const MAP_POINTS: MapPoint[] = [
  {
    id: "padang",
    label: "Padang, Sumatera Barat",
    lat: -0.9471,
    lng: 100.4172,
    region: "indonesia",
    clients: ["KADAI ZIO / Fast & Go"],
  },
  {
    id: "palembang",
    label: "Palembang, Sumatera Selatan",
    lat: -2.9761,
    lng: 104.7754,
    region: "indonesia",
    clients: ["Madani Berdaya"],
  },
  {
    id: "jakarta",
    label: "DKI Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    region: "indonesia",
    clients: ["KitasHub"],
  },
  {
    id: "pontianak",
    label: "Pontianak, Kalimantan Barat",
    lat: -0.0263,
    lng: 109.3425,
    region: "indonesia",
    clients: ["Profita Agro Sarana"],
  },
  {
    id: "sulut",
    label: "Sulawesi Utara",
    lat: 1.4748,
    lng: 124.8421,
    region: "indonesia",
    clients: ["IONET+", "Kelapa Tangguh Jaya"],
  },
  {
    id: "australia",
    label: "Australia",
    lat: -33.8688,
    lng: 151.2093,
    region: "australia",
    clients: ["Buana"],
  },
];

/* Kantor pusat RHG (Menara The Plaza, Jl. M.H. Thamrin). Koordinat adalah perkiraan. */
const HQ: HqPoint = {
  label: "Kantor pusat RHG · Jakarta Pusat",
  lat: -6.1936,
  lng: 106.8226,
};
const PROCESS = [
  {
    number: "01",
    title: "Memahami Kebutuhan",
    description:
      "Mempelajari bisnis, pengguna, data, alur kerja, dan hasil akhir yang diharapkan.",
  },
  {
    number: "02",
    title: "Perancangan",
    description:
      "Menyusun arsitektur, alur pengguna, database, integrasi, dan pendekatan teknis.",
  },
  {
    number: "03",
    title: "Pengembangan",
    description:
      "Membangun dan mengintegrasikan sistem dengan fokus pada fungsi, keandalan, dan kemudahan perawatan.",
  },
  {
    number: "04",
    title: "Peluncuran & Dukungan",
    description:
      "Pengujian, deployment, monitoring, evaluasi, dan pengembangan lanjutan.",
  },
];

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "Flutter",
  "Kotlin",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Mapbox",
  "PostGIS",
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

/* =========================================================
   KOMPONEN KECIL
========================================================= */
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
        dark ? "text-white/50" : "text-slate-400"
      }`}
    >
      <span
        className={`h-px w-6 sm:w-7 ${dark ? "bg-[#ff8a34]" : "bg-[#ff6f0f]"}`}
      />
      {children}
    </div>
  );
}

/* Wrapper gambar: parent wajib punya ukuran lewat aspect ratio / tinggi */
function Photo({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#22252a] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
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
          0%, 100% { transform: translate3d(-7%,0,0); opacity: .28; }
          50% { transform: translate3d(12%,-5%,0); opacity: .48; }
        }
        @keyframes ctaSweep {
          0% { transform: translateX(-180%) skewX(-20deg); }
          50%, 100% { transform: translateX(320%) skewX(-20deg); }
        }

        .hero-a, .hero-b, .hero-c, .hero-d, .hero-e {
          opacity: 0;
          animation: fadeUp .65s cubic-bezier(.22,1,.36,1) forwards;
        }
        .hero-a { animation-delay: .04s; }
        .hero-b { animation-delay: .12s; }
        .hero-c { animation-delay: .20s; }
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
          background-image: radial-gradient(circle, rgba(255,111,15,.17) 1px, transparent 1px);
          background-size: 18px 18px;
        }

        .tech-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: marquee 34s linear infinite;
        }
        .tech-track:hover { animation-play-state: paused; }

        .service-card, .partner-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            box-shadow .35s ease;
        }
        .service-card:hover, .partner-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);
        }
        .service-card:hover { box-shadow: 0 18px 45px rgba(15,23,42,.05); }

        .service-icon {
          transition: transform .35s cubic-bezier(.22,1,.36,1), background-color .3s ease;
        }
        .service-card:hover .service-icon { transform: translateY(-3px) rotate(-3deg); }

        .photo-zoom img { transition: transform .8s cubic-bezier(.22,1,.36,1); }
        .photo-zoom:hover img { transform: scale(1.04); }

        .dark-light { animation: darkLight 11s ease-in-out infinite; }

        .process-card { position: relative; overflow: hidden; }
        .process-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6f0f, transparent);
          transition: width .45s ease;
        }
        .process-card:hover::after { width: 100%; }

        .cta-section { position: relative; overflow: hidden; }
        .cta-section::after {
          content: "";
          position: absolute;
          top: -50%;
          bottom: -50%;
          left: 0;
          width: 100px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
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
          .moving-grid { animation: none; background-size: 28px 28px; }
          .hero-visual {
            animation: fadeUp .65s cubic-bezier(.22,1,.36,1) .28s forwards;
          }
          .tech-track { animation-duration: 25s; }
          .service-card:hover,
          .partner-card:hover { transform: none; }
          .service-card:hover .service-icon { transform: none; }
          .photo-zoom:hover img { transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-a, .hero-b, .hero-c, .hero-d, .hero-e,
          .hero-visual, .moving-grid, .tech-track, .dark-light,
          .cta-section::after, .reveal {
            animation: none !important;
          }
          .hero-a, .hero-b, .hero-c, .hero-d, .hero-e, .hero-visual {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#151719]">
        {/* =====================================================
            1. HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="moving-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
          <div className="pointer-events-none absolute -left-32 -top-24 h-[360px] w-[360px] rounded-full bg-[#ff6f0f]/[0.07] blur-[100px]" />
          <div className="pointer-events-none absolute -right-40 top-16 h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[110px]" />

          <div className="relative mx-auto grid max-w-6xl gap-7 px-4 pb-10 pt-8 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12 md:py-16 lg:px-8">
            <div>
              <div className="hero-a">
                <Eyebrow>PT RHG Teknologi Indonesia</Eyebrow>
              </div>

              <h1 className="hero-b mt-4 max-w-2xl text-[28px] font-black leading-[1.1] tracking-[-0.035em] text-[#111315] sm:mt-5 sm:text-[36px] md:text-[40px] lg:text-[46px]">
                Software dan sistem digital untuk
                <span className="text-[#ff6f0f]"> kebutuhan bisnis Anda.</span>
              </h1>

              <p className="hero-c mt-3.5 max-w-xl text-[13px] leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                RHG mengembangkan website, aplikasi mobile, backend, integrasi
                pembayaran, sistem berbasis peta, dan otomasi proses untuk
                perusahaan di berbagai sektor.
              </p>

              <div className="hero-d mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-2.5">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full bg-[#17191c] px-4 text-[13px] font-black text-white transition hover:bg-black sm:min-h-[44px] sm:gap-2 sm:px-5"
                >
                  Diskusikan Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#layanan"
                  className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white px-4 text-[13px] font-bold transition hover:border-black/20 sm:min-h-[44px] sm:gap-2 sm:px-5"
                >
                  Lihat Layanan
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="hero-e mt-6 grid grid-cols-4 gap-2 border-t border-black/[0.07] pt-4 sm:mt-8 sm:gap-5 sm:pt-5">
                {[
                  ["Web", "Platform & portal"],
                  ["Mobile", "Android & iOS"],
                  ["Backend", "API & integrasi"],
                  ["GIS", "Peta & lokasi"],
                ].map(([title, subtitle]) => (
                  <div key={title}>
                    <p className="text-[15px] font-black tracking-[-0.03em] sm:text-base">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[8px] leading-3 text-slate-400 sm:text-[10px] sm:leading-4">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual relative mx-auto w-full max-w-[460px]">
              <div className="absolute -right-3 top-3 hidden h-[88%] w-[90%] rounded-[24px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[18px] border border-black/[0.07] bg-[#17191c] text-white shadow-[0_20px_60px_rgba(15,23,42,.13)] sm:rounded-[22px]">
                <Photo
                  src={IMG.hero}
                  alt="Tim RHG Teknologi Indonesia mengerjakan sistem software"
                  sizes="(min-width: 768px) 460px, 100vw"
                  priority
                  className="aspect-[16/10] w-full sm:aspect-[4/3]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17191c]/85 via-transparent to-transparent" />

                <div className="absolute inset-x-4 bottom-3.5 sm:inset-x-5 sm:bottom-4">
                  <p className="text-[13px] font-black sm:text-sm">
                    PT RHG Teknologi Indonesia
                  </p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-white/55">
                    Software · Data · Integrasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. TICKER TEKNOLOGI
        ====================================================== */}
        <section className="overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="relative flex h-11 items-center sm:h-12">
            <div className="pointer-events-none absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
            <div className="pointer-events-none absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />

            <div className="tech-track">
              {TECH_LOOP.map((item, index) => (
                <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                  <span className="px-5 text-[11px] font-bold text-slate-400 sm:px-7 sm:text-xs">
                    {item}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#ff6f0f]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            3. LAYANAN
        ====================================================== */}
        <section id="layanan" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[.6fr_1.4fr]">
              <div className="reveal">
                <Eyebrow>Layanan</Eyebrow>

                <h2 className="mt-3 max-w-md text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Layanan pengembangan software dan integrasi sistem.
                </h2>

                <p className="mt-3 max-w-sm text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  Dari website dan aplikasi hingga backend, pembayaran, peta,
                  dan perangkat lapangan.
                </p>

                <Link
                  href="/layanan"
                  className="group mt-4 inline-flex items-center gap-2 text-[13px] font-black"
                >
                  Semua layanan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 sm:gap-0 sm:border-l sm:border-t sm:border-black/[0.07]">
                {SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.number}
                      href={service.href}
                      className="service-card reveal group rounded-[14px] border border-black/[0.07] bg-[#fafafa] p-4 sm:rounded-none sm:border-b sm:border-l-0 sm:border-r sm:border-t-0 sm:bg-white sm:p-5"
                    >
                      <div className="flex items-center justify-between sm:items-start">
                        <span className="service-icon flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f0ed] text-[#25282b] group-hover:bg-[#fff0e5] group-hover:text-[#ff6f0f]">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>

                        <span className="font-mono text-[9px] font-bold text-slate-300">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[15px] font-black tracking-[-0.02em] sm:mt-4">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 text-[12px] leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
                        {service.description}
                      </p>

                      <span className="mt-3 hidden items-center gap-1.5 text-[11px] font-black opacity-50 transition group-hover:opacity-100 sm:inline-flex">
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

        {/* =====================================================
            4. RHG COFFEE LAB
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#f7f7f5]">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />

          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
              <div className="reveal">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6f0f]/15 bg-[#fff0e5] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.14em] text-[#ff6f0f] sm:text-[9px]">
                    Lokasi Uji Teknologi
                  </span>
                </div>

                <h2 className="mt-4 text-[26px] font-black leading-[1.12] tracking-[-0.03em] sm:text-[30px] md:text-[34px]">
                  RHG Coffee Lab
                </h2>

                <div className="mt-2.5 flex items-center gap-2 text-[11px] font-bold text-slate-500 sm:text-[12px]">
                  <MapPin className="h-3.5 w-3.5 text-[#ff6f0f]" />
                  Kabupaten Rejang Lebong, Provinsi Bengkulu
                </div>

                <p className="mt-3.5 max-w-lg text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                  RHG memiliki area kebun kopi di Rejang Lebong yang digunakan
                  sebagai lokasi uji coba teknologi pertanian, meliputi
                  pemantauan lahan, pemetaan dengan drone, sensor IoT, dan
                  analisis data lapangan.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-[14px] border border-black/[0.07] bg-white p-3">
                    <p className="text-xl font-black tracking-[-0.03em]">
                      2.02
                      <span className="ml-1 text-xs text-[#ff6f0f]">ha</span>
                    </p>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                      Luas area (perkiraan)
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-black/[0.07] bg-white p-3">
                    <p className="text-xl font-black tracking-[-0.03em]">
                      843–910
                      <span className="ml-1 text-xs text-[#ff6f0f]">m</span>
                    </p>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                      Rentang elevasi
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-black/[0.07] bg-white p-3">
                    <p className="text-[14px] font-black tracking-[-0.02em] sm:text-[15px]">
                      Kebun kopi
                    </p>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                      Lingkungan pertanian
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-black/[0.07] bg-white p-3">
                    <p className="text-[14px] font-black tracking-[-0.02em] sm:text-[15px]">
                      Uji lapangan
                    </p>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                      Drone · IoT · Pemetaan
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:gap-2.5">
                  <Link
                    href="/lab"
                    className="group inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full bg-[#17191c] px-3 text-[13px] font-black text-white transition hover:bg-black sm:min-h-[44px] sm:gap-2 sm:px-5"
                  >
                    Lihat RHG Lab
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={LAB_MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-black/[0.09] bg-white px-3 text-[13px] font-bold transition hover:border-black/20 sm:min-h-[44px] sm:gap-2 sm:px-5"
                  >
                    Buka Peta
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="reveal relative">
                <div className="absolute -right-4 top-4 hidden h-[92%] w-[92%] rounded-[24px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.035] sm:block" />

                <div className="relative overflow-hidden rounded-[18px] border border-black/[0.08] bg-[#17191c] shadow-[0_20px_60px_rgba(15,23,42,.15)] sm:rounded-[22px]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-3 text-white sm:px-5">
                    <div>
                      <p className="text-[13px] font-black">RHG Coffee Lab</p>
                      <p className="mt-0.5 text-[8px] uppercase tracking-[0.13em] text-white/35 sm:text-[9px]">
                        Citra satelit
                      </p>
                    </div>

                    <span className="rounded-full bg-[#ff6f0f]/15 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff9852]">
                      Rejang Lebong
                    </span>
                  </div>

                  <div className="relative h-[230px] w-full sm:h-[340px]">
                    <iframe
                      src={LAB_MAP_EMBED}
                      title="Lokasi RHG Coffee Lab di Rejang Lebong, Bengkulu"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />

                    <div className="pointer-events-none absolute left-3 top-3 rounded-[12px] border border-white/15 bg-black/65 px-3 py-2 text-white shadow-lg backdrop-blur-md">
                      <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#ff9852]">
                        Lokasi uji
                      </p>
                      <p className="mt-0.5 text-[11px] font-black">Kebun kopi</p>
                      <p className="mt-0.5 text-[8px] text-white/60">
                        Rejang Lebong · Bengkulu
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-white/[0.08] text-white">
                    {[
                      ["Lingkungan", "Pertanian"],
                      ["Medan", "Lereng"],
                      ["Fungsi", "Uji lapangan"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border-r border-white/[0.07] px-3 py-2.5 last:border-r-0 sm:px-4 sm:py-3"
                      >
                        <p className="text-[8px] uppercase tracking-[0.13em] text-white/30">
                          {label}
                        </p>
                        <p className="mt-0.5 text-[10px] font-black text-white/75 sm:text-[11px]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            5. OTOMASI & AI (ringkas)
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="dark-light pointer-events-none absolute -left-40 -top-44 h-[420px] w-[420px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
              <div className="reveal">
                <Eyebrow dark>Otomasi</Eyebrow>

                <h2 className="mt-4 max-w-xl text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Otomasi proses dan integrasi AI untuk pekerjaan berulang.
                </h2>

                <p className="mt-3 max-w-lg text-[13px] leading-6 text-white/55 sm:text-sm sm:leading-7">
                  Untuk perusahaan yang ingin mengurangi pekerjaan manual, RHG
                  membangun otomasi dan menghubungkan layanan AI ke sistem yang
                  sudah digunakan.
                </p>

                <ul className="mt-5 grid gap-2">
                  {AUTOMATION_POINTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-white/75"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff8a34]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontak"
                  className="group mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-[13px] font-black text-[#17191c] transition hover:bg-[#ff8a34] sm:min-h-[44px]"
                >
                  Diskusikan Kebutuhan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="reveal relative">
                <div className="absolute -left-3 top-3 hidden h-[90%] w-[90%] rounded-[22px] border border-[#ff6f0f]/15 sm:block" />

                <div className="relative overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#1d2024] sm:rounded-[22px]">
                  <Photo
                    src={IMG.ai}
                    alt="Contoh dashboard dan analisis gambar"
                    sizes="(min-width: 1024px) 440px, 100vw"
                    className="aspect-[16/10] w-full sm:aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            6. PENDEKATAN
        ====================================================== */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid items-center gap-6 sm:gap-10 md:grid-cols-2 md:gap-12">
              <div className="reveal relative order-2 md:order-1">
                <div className="absolute -left-3 top-3 hidden h-[92%] w-[92%] rounded-[22px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

                <Photo
                  src={IMG.approach}
                  alt="Proses kerja tim RHG dari diskusi kebutuhan hingga implementasi"
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="relative aspect-[16/10] w-full rounded-[18px] border border-black/[0.07] shadow-[0_20px_60px_rgba(15,23,42,.1)] sm:aspect-[4/3] sm:rounded-[22px]"
                />
              </div>

              <div className="reveal order-1 md:order-2">
                <Eyebrow>Pendekatan Kerja</Eyebrow>

                <h2 className="mt-4 max-w-lg text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Teknologi dipilih setelah kebutuhan dipahami.
                </h2>

                <p className="mt-3 max-w-lg text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  RHG menentukan software, infrastruktur, dan metode kerja
                  berdasarkan kebutuhan serta kondisi pengguna.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {[
                    { icon: Layers3, title: "Menyeluruh", text: "Dari analisis kebutuhan hingga produksi." },
                    { icon: Code2, title: "Sesuai kebutuhan", text: "Mengikuti alur kerja yang ada." },
                    { icon: Network, title: "Terintegrasi", text: "Software, API, data, dan perangkat keras." },
                    { icon: ShieldCheck, title: "Mudah dirawat", text: "Dapat dipelihara dan dikembangkan." },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[14px] border border-black/[0.07] bg-white p-3 sm:p-4"
                      >
                        <Icon className="h-4 w-4 text-[#ff6f0f]" />
                        <h3 className="mt-2 text-[13px] font-black sm:text-sm">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[12px] sm:leading-5">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            7. KLIEN
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="reveal">
                <Eyebrow>Klien & Kolaborasi</Eyebrow>

                <h2 className="mt-3 max-w-2xl text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Klien RHG di Indonesia dan Australia.
                </h2>

                <p className="mt-3 max-w-xl text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  Sistem yang dibangun RHG digunakan oleh bisnis di bidang
                  retail, distribusi, jaringan internet, perdagangan hasil
                  bumi, layanan perizinan, dan marketplace lokal.
                </p>
              </div>

              <Link
                href="/portofolio"
                className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-black"
              >
                Semua klien
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Peta sebaran klien */}
            <div className="mt-6 overflow-hidden rounded-[18px] border border-black/[0.08] bg-white shadow-[0_16px_50px_rgba(15,23,42,.07)] sm:mt-8 sm:rounded-[22px]">
              <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-3 sm:px-5">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#ff6f0f] sm:text-[9px]">
                    Sebaran klien
                  </p>
                  <h3 className="mt-0.5 text-[14px] font-black tracking-[-0.02em] sm:text-base">
                    {CLIENTS.length} klien di {MAP_POINTS.length} lokasi
                  </h3>
                </div>

                <p className="hidden text-[11px] text-slate-400 sm:block">
                  Klik pin untuk melihat nama klien
                </p>
              </div>

              <ClientsMap points={MAP_POINTS} hq={HQ} />
            </div>

            {/* Kartu klien */}
            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="partner-card reveal overflow-hidden rounded-[16px] border border-black/[0.07] bg-[#fafaf8]"
                >
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kunjungi website ${client.name}`}
                    className="photo-zoom block"
                  >
                    <Photo
                      src={client.image}
                      alt={`Tampilan website ${client.name}`}
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/8] w-full border-b border-black/[0.06] sm:aspect-[16/9]"
                    />
                  </a>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 shrink-0 text-[#ff6f0f]" />
                          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#ff6f0f] sm:text-[9px]">
                            {client.location}
                          </p>
                        </div>

                        <h3 className="mt-2 text-[16px] font-black tracking-[-0.02em]">
                          {client.name}
                        </h3>

                        <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                          {client.category}
                        </p>
                      </div>

                      <a
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Kunjungi website ${client.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-slate-500 transition hover:bg-[#17191c] hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    <p className="mt-2.5 text-[12px] leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
                      {client.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            8. TAHAPAN KERJA
        ====================================================== */}
        <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[.65fr_1.35fr]">
              <div className="reveal">
                <Eyebrow>Tahapan Kerja</Eyebrow>

                <h2 className="mt-3 max-w-sm text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Dari analisis kebutuhan hingga sistem berjalan.
                </h2>
              </div>

              <div className="grid gap-2 sm:gap-0">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="process-card reveal rounded-[14px] border border-black/[0.07] bg-white px-4 py-3 sm:grid sm:grid-cols-[56px_190px_1fr] sm:gap-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-4"
                  >
                    <div className="flex items-center gap-2.5 sm:contents">
                      <span className="font-mono text-[10px] font-bold text-[#ff6f0f]">
                        {item.number}
                      </span>

                      <h3 className="text-[15px] font-black">{item.title}</h3>
                    </div>

                    <p className="mt-1.5 text-[12px] leading-5 text-slate-500 sm:mt-0 sm:text-[13px] sm:leading-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            9. CTA
        ====================================================== */}
        <section className="cta-section bg-[#ff6f0f]">
          <div className="relative mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-12 md:py-14 lg:px-8">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_auto]">
              <div className="reveal">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-black/50 sm:text-[9px]">
                  Hubungi Kami
                </p>

                <h2 className="mt-2 max-w-3xl text-[22px] font-black leading-[1.18] tracking-[-0.03em] text-[#17191c] sm:text-[28px] md:text-[32px]">
                  Punya kebutuhan software atau sistem digital?
                </h2>

                <p className="mt-3 max-w-xl text-[13px] leading-6 text-black/60 sm:text-sm sm:leading-7">
                  Ceritakan kebutuhan Anda. RHG dapat membantu dari
                  perencanaan, pengembangan, dan integrasi hingga operasional.
                </p>
              </div>

              <Link
                href="/kontak"
                className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-[13px] font-black text-white transition hover:bg-black sm:min-h-[46px]"
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