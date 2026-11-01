import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Globe2,
  MapPin,
  Network,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata = {
  title: "Klien & Kolaborasi — RHG Teknologi Indonesia",
  description:
    "Klien dan proyek yang dikerjakan RHG Teknologi Indonesia di bidang website, aplikasi mobile, backend, pembayaran, GIS, dan integrasi sistem.",
};

/* =========================================================
   GAMBAR (semua di folder /public)
========================================================= */
const IMG = {
  hero: "/portofolio-hero.jpg",
};

type Platform = "Website" | "Android" | "iOS";

type Client = {
  name: string;
  category: string;
  location: string;
  link: string;
  image: string;
  description: string;
  platforms: Platform[];
};

const COLLABORATION_POINTS = [
  {
    icon: BriefcaseBusiness,
    title: "Proyek Bisnis",
    description:
      "Pengembangan sistem digital untuk operasional, pelanggan, tim internal, dan layanan bisnis.",
  },
  {
    icon: Network,
    title: "Integrasi Teknologi",
    description:
      "Kolaborasi yang melibatkan aplikasi, backend, database, pembayaran, infrastruktur, API, dan sistem yang sudah ada.",
  },
  {
    icon: Sparkles,
    title: "Pengembangan Custom",
    description:
      "Setiap proyek disesuaikan dengan kebutuhan, alur kerja, pengguna, dan kondisi teknologi klien.",
  },
];

/* Isi `platforms` sesuai produk yang sebenarnya dibuat untuk tiap klien. */
const CLIENTS: Client[] = [
  {
    name: "Buana",
    category: "Retail, Equipment & Service",
    location: "Australia",
    link: "https://www.buana.com.au/",
    image: "/klien-buana.jpg",
    description:
      "Website dan aplikasi Android untuk retail supply, commercial equipment, pemesanan, pelacakan, dan layanan servis.",
    platforms: ["Website", "Android"],
  },
  {
    name: "KitasHub",
    category: "Layanan KITAS & Visa",
    location: "DKI Jakarta",
    link: "https://halokitas.co.id",
    image: "/klien-kitashub.jpg",
    description:
      "Website company profile untuk layanan pengurusan KITAS dan visa di Indonesia.",
    platforms: ["Website"],
  },
  {
    name: "Profita Agro Sarana",
    category: "Gudang & Distribusi",
    location: "Pontianak, Kalimantan Barat",
    link: "https://profitaagrosarana.my.id/",
    image: "/klien-profita-agro.jpg",
    description:
      "Sistem operasional gudang dan distribusi untuk stok, picking, permintaan barang, dan koordinasi cabang.",
    platforms: ["Website", "Android"],
  },
  {
    name: "IONET+",
    category: "ISP & Operasional Jaringan",
    location: "Sulawesi Utara",
    link: "https://www.ionet.my.id/",
    image: "/klien-ionet.jpg",
    description:
      "Platform billing, monitoring pelanggan, pembayaran, dan operasional jaringan ISP.",
    platforms: ["Website"],
  },
  {
    name: "Kelapa Tangguh Jaya",
    category: "Kopra & Arang Tempurung",
    location: "Minahasa, Sulawesi Utara",
    link: "https://www.kelapatangguhjaya.com",
    image: "/klien-kelapa-tangguh-jaya.jpg",
    description:
      "Website dan aplikasi untuk pembelian kopra, tempurung, dan arang tempurung langsung dari petani.",
    platforms: ["Website", "Android"],
  },
  {
    name: "Madani Berdaya",
    category: "Marketplace Kecamatan",
    location: "Palembang, Sumatera Selatan",
    link: "https://www.madaniberdaya.com",
    image: "/klien-madani-berdaya.jpg",
    description:
      "Aplikasi untuk warga satu kecamatan: mencari kerja, memasang lowongan, membuka toko, dan berbelanja dari tetangga.",
    platforms: ["Website", "Android"],
  },
  {
    name: "KADAI ZIO / Fast & Go",
    category: "Retail & Delivery",
    location: "Padang, Sumatera Barat",
    link: "https://www.kadaizio.com/",
    image: "/klien-kadai-zio.jpg",
    description:
      "Sistem retail digital untuk katalog produk, pemesanan, pickup, dan pengantaran.",
    platforms: ["Website"],
  },
];

const WEBSITE_COUNT = CLIENTS.filter((c) =>
  c.platforms.includes("Website")
).length;

const APP_COUNT = CLIENTS.filter(
  (c) => c.platforms.includes("Android") || c.platforms.includes("iOS")
).length;

/* =========================================================
   KOMPONEN KECIL
========================================================= */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
      <span className="h-px w-6 bg-[#ff6f0f] sm:w-7" />
      {children}
    </div>
  );
}

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

function PlatformBadge({ platform }: { platform: Platform }) {
  const Icon = platform === "Website" ? Globe2 : Smartphone;

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] bg-white px-2 py-0.5 text-[9px] font-bold text-slate-500">
      <Icon className="h-3 w-3 text-[#ff6f0f]" />
      {platform}
    </span>
  );
}

export default function PortofolioPage() {
  return (
    <>
      <style>{`
        @keyframes collaborationHeroUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes collaborationGrid {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes collaborationGlow {
          0%, 100% { opacity: .25; transform: translate3d(-5%,0,0); }
          50% { opacity: .48; transform: translate3d(10%,-5%,0); }
        }

        .collaboration-grid {
          background-image:
            linear-gradient(rgba(15,23,42,.038) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.038) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: collaborationGrid 18s linear infinite;
        }

        .collaboration-hero-1,
        .collaboration-hero-2,
        .collaboration-hero-3,
        .collaboration-hero-4 {
          opacity: 0;
          animation: collaborationHeroUp .65s cubic-bezier(.22,1,.36,1) forwards;
        }
        .collaboration-hero-1 { animation-delay: .05s; }
        .collaboration-hero-2 { animation-delay: .12s; }
        .collaboration-hero-3 { animation-delay: .20s; }
        .collaboration-hero-4 { animation-delay: .28s; }

        .collaboration-glow {
          animation: collaborationGlow 10s ease-in-out infinite;
        }

        .collaboration-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }
        .collaboration-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6f0f, transparent);
          transition: width .4s ease;
        }
        .collaboration-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);
          box-shadow: 0 18px 45px rgba(15,23,42,.05);
        }
        .collaboration-card:hover::after { width: 100%; }

        .photo-zoom img { transition: transform .8s cubic-bezier(.22,1,.36,1); }
        .photo-zoom:hover img { transform: scale(1.04); }

        @media (max-width: 767px) {
          .collaboration-grid { animation: none; background-size: 28px 28px; }
          .collaboration-card:hover { transform: none; }
          .collaboration-card:hover::after { width: 0; }
          .photo-zoom:hover img { transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .collaboration-grid,
          .collaboration-glow,
          .collaboration-hero-1,
          .collaboration-hero-2,
          .collaboration-hero-3,
          .collaboration-hero-4 {
            animation: none !important;
          }
          .collaboration-hero-1,
          .collaboration-hero-2,
          .collaboration-hero-3,
          .collaboration-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            1. HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="collaboration-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
          <div className="pointer-events-none absolute -left-40 -top-32 h-[360px] w-[360px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 top-20 h-[360px] w-[360px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <div className="grid gap-7 sm:gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-12">
              <div>
                <div className="collaboration-hero-1">
                  <Eyebrow>Klien & Kolaborasi</Eyebrow>
                </div>

                <h1 className="collaboration-hero-2 mt-4 max-w-2xl text-[28px] font-black leading-[1.1] tracking-[-0.035em] sm:mt-5 sm:text-[36px] md:text-[40px] lg:text-[46px]">
                  Sistem digital yang dibangun melalui
                  <span className="text-[#ff6f0f]"> kolaborasi dengan klien.</span>
                </h1>

                <p className="collaboration-hero-3 mt-3.5 max-w-xl text-[13px] leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                  RHG Teknologi Indonesia bekerja bersama bisnis, organisasi,
                  dan mitra untuk mengembangkan website, aplikasi mobile,
                  backend, pembayaran, GIS, dan sistem digital custom.
                </p>

                <div className="collaboration-hero-4 mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:gap-2.5">
                  <Link
                    href="#klien"
                    className="group inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full bg-[#17191c] px-4 text-[13px] font-black text-white transition hover:bg-black sm:min-h-[44px] sm:gap-2 sm:px-5"
                  >
                    Lihat Klien
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/kontak"
                    className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-black/[0.09] bg-white px-4 text-[13px] font-bold transition hover:border-black/20 sm:min-h-[44px] sm:gap-2 sm:px-5"
                  >
                    Mulai Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="collaboration-hero-4 mx-auto w-full max-w-[460px]">
                <div className="overflow-hidden rounded-[18px] border border-black/[0.07] bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)] sm:rounded-[22px]">
                  <div className="relative">
                    <Photo
                      src={IMG.hero}
                      alt="Kolaborasi RHG Teknologi Indonesia dengan klien"
                      sizes="(min-width: 768px) 460px, 100vw"
                      priority
                      className="aspect-[16/10] w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17191c]/70 via-transparent to-transparent" />

                    <div className="absolute inset-x-4 bottom-3 sm:inset-x-5 sm:bottom-4">
                      <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#ff9852] sm:text-[9px]">
                        Ringkasan
                      </p>
                      <p className="mt-0.5 text-[13px] font-black text-white sm:text-sm">
                        Klien dan produk RHG
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-black/[0.06]">
                    <div className="p-3.5 sm:p-4">
                      <p className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
                        {CLIENTS.length}
                      </p>
                      <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[9px]">
                        Klien
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4">
                      <p className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
                        {WEBSITE_COUNT}
                      </p>
                      <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[9px]">
                        Website
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4">
                      <p className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
                        {APP_COUNT}
                      </p>
                      <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[9px]">
                        Aplikasi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 border-t border-black/[0.06] bg-[#fafaf8] px-4 py-3 sm:px-5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ff6f0f]" />
                    <p className="text-[10px] leading-4 text-slate-500">
                      Halaman ini menampilkan sebagian klien yang dipilih untuk
                      dipublikasikan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. KLIEN RHG
        ====================================================== */}
        <section id="klien" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <FadeInSection>
              <div className="max-w-2xl">
                <Eyebrow>Klien RHG</Eyebrow>

                <h2 className="mt-3 text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Klien RHG di Indonesia dan Australia.
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  Sistem yang dikembangkan RHG digunakan di bidang retail,
                  distribusi, jaringan internet, perdagangan hasil bumi,
                  layanan perizinan, dan marketplace lokal. Sebagian proyek
                  tidak ditampilkan karena alasan privasi atau NDA.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {CLIENTS.map((client, index) => (
                <FadeInSection key={client.name} delay={(index % 3) * 0.05}>
                  <div className="collaboration-card h-full overflow-hidden rounded-[16px] border border-black/[0.07] bg-[#fafaf8]">
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

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {client.platforms.map((platform) => (
                          <PlatformBadge key={platform} platform={platform} />
                        ))}
                      </div>

                      <p className="mt-2.5 text-[12px] leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            3. BENTUK KOLABORASI
        ====================================================== */}
        <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">
            <FadeInSection>
              <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr] md:items-end md:gap-8">
                <div>
                  <Eyebrow>Bentuk Kolaborasi</Eyebrow>

                  <h2 className="mt-3 text-[24px] font-black leading-[1.15] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                    Tidak terbatas pada satu jenis proyek.
                  </h2>
                </div>

                <p className="max-w-xl text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7 md:justify-self-end">
                  Kolaborasi dapat berupa pembuatan produk baru,
                  pengembangan sistem yang sudah ada, integrasi teknologi,
                  migrasi data, otomasi, atau dukungan teknis setelah sistem
                  berjalan.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3 md:grid-cols-3">
              {COLLABORATION_POINTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection key={item.title} delay={index * 0.05}>
                    <div className="collaboration-card h-full rounded-[16px] border border-black/[0.07] bg-white p-4 sm:p-5">
                      <div className="flex items-center justify-between sm:items-start">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#17191c]">
                          <Icon className="h-[17px] w-[17px] text-[#ff8a34]" />
                        </span>

                        <span className="font-mono text-[9px] font-black text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[15px] font-black sm:mt-4">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[12px] leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            4. REFERENSI TAMBAHAN
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="collaboration-glow pointer-events-none absolute -left-40 -top-44 h-[420px] w-[420px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[1fr_auto] md:gap-10 md:py-16 lg:px-8">
            <FadeInSection>
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.19em] text-[#ff8a34] sm:text-[9px]">
                  Referensi Tambahan
                </p>

                <h2 className="mt-3 max-w-2xl text-[22px] font-black leading-[1.18] tracking-[-0.03em] sm:text-[28px] md:text-[32px]">
                  Membutuhkan referensi proyek yang lebih spesifik?
                </h2>

                <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/55 sm:text-sm sm:leading-7">
                  Untuk kebutuhan proposal, penilaian vendor, kemitraan, atau
                  tender, informasi proyek yang relevan dapat dibahas sesuai
                  kebutuhan dan batasan kerahasiaan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-3 rounded-full bg-[#ff6f0f] px-6 text-[13px] font-black text-[#17191c] transition hover:bg-[#ff8a34] sm:min-h-[46px] md:w-auto"
              >
                Hubungi RHG
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            5. CTA
        ====================================================== */}
        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-6xl items-center gap-5 px-4 py-9 sm:px-6 sm:py-12 md:grid-cols-[1fr_auto] md:py-14 lg:px-8">
            <FadeInSection>
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.19em] text-black/50 sm:text-[9px]">
                  Mulai Kolaborasi
                </p>

                <h2 className="mt-2 max-w-3xl text-[22px] font-black leading-[1.18] tracking-[-0.03em] text-[#17191c] sm:text-[28px] md:text-[32px]">
                  Proyek berikutnya dapat dimulai dari sini.
                </h2>

                <p className="mt-3 max-w-xl text-[13px] leading-6 text-black/60 sm:text-sm sm:leading-7">
                  Ceritakan kebutuhan bisnis, sistem yang sudah berjalan,
                  masalah teknis, atau produk yang ingin dibangun. RHG dapat
                  membantu menyusun pendekatan dan ruang lingkup teknologi
                  yang sesuai.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-[13px] font-black text-white transition hover:bg-black sm:min-h-[46px] md:w-auto"
              >
                Mulai Kolaborasi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}