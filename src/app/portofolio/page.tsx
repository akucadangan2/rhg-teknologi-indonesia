import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";

export const metadata = {
  title: "Clients & Collaborations — RHG Teknologi Indonesia",
  description:
    "Selected clients, collaborations, and technology projects delivered by RHG Teknologi Indonesia across software, mobile, backend, AI, GIS, payment, and system integration.",
};

const COLLABORATION_POINTS = [
  {
    icon: BriefcaseBusiness,
    title: "Business Projects",
    description:
      "Pengembangan sistem digital untuk kebutuhan operasional, customer, internal team, maupun layanan bisnis.",
  },
  {
    icon: Network,
    title: "Technology Integration",
    description:
      "Kolaborasi yang melibatkan aplikasi, backend, database, payment, infrastructure, API, dan sistem existing.",
  },
  {
    icon: Sparkles,
    title: "Custom Development",
    description:
      "Setiap project disesuaikan dengan kebutuhan, workflow, target pengguna, dan kondisi teknologi client.",
  },
];

export default async function PortofolioPage() {
  const supabase = await createClient();

  const { data: projects, error } = await supabase
    .from("portfolio_projects")
    .select(
      "id, title, description, category, image_url, website_url"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error);
  }

  const total = projects?.length ?? 0;

  const categoryCount = new Set(
    (projects ?? [])
      .map((project) => project.category)
      .filter(Boolean)
  ).size;

  return (
    <>
      <style>{`
        @keyframes collaborationHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes collaborationGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes collaborationGlow {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(-5%,0,0);
          }

          50% {
            opacity: .48;
            transform: translate3d(10%,-5%,0);
          }
        }

        .collaboration-grid {
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
            collaborationGrid
            18s
            linear
            infinite;
        }

        .collaboration-hero-1,
        .collaboration-hero-2,
        .collaboration-hero-3,
        .collaboration-hero-4 {
          opacity: 0;

          animation:
            collaborationHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .collaboration-hero-1 {
          animation-delay: .05s;
        }

        .collaboration-hero-2 {
          animation-delay: .13s;
        }

        .collaboration-hero-3 {
          animation-delay: .21s;
        }

        .collaboration-hero-4 {
          animation-delay: .29s;
        }

        .collaboration-glow {
          animation:
            collaborationGlow
            10s
            ease-in-out
            infinite;
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

          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              transparent
            );

          transition:
            width .4s ease;
        }

        .collaboration-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .collaboration-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .collaboration-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .collaboration-card:hover {
            transform: none;
          }

          .collaboration-card:hover::after {
            width: 0;
          }
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
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="collaboration-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="grid gap-12 md:grid-cols-[1.12fr_.88fr] md:items-end">
              <div>
                <div className="collaboration-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Clients & Collaborations
                </div>

                <h1 className="collaboration-hero-2 mt-5 max-w-4xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[60px]">
                  Teknologi yang dibangun
                  <span className="text-[#ff6f0f]">
                    {" "}
                    melalui kolaborasi nyata.
                  </span>
                </h1>

                <p className="collaboration-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                  RHG Teknologi Indonesia bekerja bersama bisnis,
                  organisasi, dan partner untuk mengembangkan
                  software, aplikasi mobile, backend, payment,
                  AI, GIS, dan berbagai sistem digital custom.
                </p>

                <div className="collaboration-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="#collaborations"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                  >
                    Lihat Collaborations

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/kontak"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-6 text-sm font-bold transition hover:border-black/20"
                  >
                    Mulai Project

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* SUMMARY */}

              <div className="collaboration-hero-4">
                <div className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_25px_70px_rgba(15,23,42,.07)]">
                  <div className="border-b border-black/[0.06] p-5 sm:p-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff6f0f]">
                      Collaboration Overview
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">
                      Selected work across multiple technology areas.
                    </h2>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="border-r border-black/[0.06] p-5 sm:p-6">
                      <p className="text-3xl font-black tracking-[-0.05em]">
                        {total}
                        <span className="text-[#ff6f0f]">+</span>
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Published Works
                      </p>
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="text-3xl font-black tracking-[-0.05em]">
                        {categoryCount}
                        <span className="text-[#ff6f0f]">+</span>
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Technology Areas
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.06] bg-[#fafaf8] p-4 sm:px-6">
                    <div className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff6f0f]" />

                      <p className="text-[10px] leading-5 text-slate-500">
                        Halaman ini menampilkan sebagian project
                        dan kolaborasi yang dipilih untuk
                        dipublikasikan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLABORATION MODEL
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    How We Collaborate
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Tidak hanya mengerjakan
                    <span className="text-[#ff6f0f]">
                      {" "}
                      satu jenis project.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Bentuk kolaborasi dapat berupa pembangunan produk
                  baru, pengembangan sistem existing, integrasi
                  teknologi, migration, automation, maupun technical
                  support setelah production.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 md:grid-cols-3 lg:mt-14">
              {COLLABORATION_POINTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.05}
                  >
                    <div className="collaboration-card h-full rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5 sm:p-6">
                      <div className="flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                          <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                        </span>

                        <span className="font-mono text-[9px] font-black text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-5 text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-500">
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
            PROJECT / COLLABORATION LIST
        ====================================================== */}

        <section
          id="collaborations"
          className="border-y border-black/[0.06] bg-[#f7f7f5]"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Selected Collaborations
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Project & collaboration
                    <span className="text-[#ff6f0f]">
                      {" "}
                      yang kami pilih.
                    </span>
                  </h2>
                </div>

                <div className="md:justify-self-end">
                  <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    Beberapa project tidak ditampilkan secara publik
                    karena kebutuhan privasi, NDA, atau alasan
                    operasional client.
                  </p>

                  {total > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[9px] font-bold text-slate-500">
                        {total} Selected Works
                      </span>

                      <span className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[9px] font-bold text-slate-500">
                        {categoryCount} Categories
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </FadeInSection>

            <div className="mt-10 lg:mt-14">
              {total === 0 ? (
                <FadeInSection>
                  <div className="rounded-[22px] border border-dashed border-black/[0.1] bg-white px-6 py-14 text-center">
                    <Layers3 className="mx-auto h-7 w-7 text-slate-300" />

                    <p className="mt-4 text-sm font-black">
                      Belum ada collaboration yang ditampilkan.
                    </p>

                    <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-400">
                      Selected client work dan collaboration akan
                      ditampilkan di halaman ini.
                    </p>
                  </div>
                </FadeInSection>
              ) : (
                <PortfolioFilter projects={projects!} />
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRIVATE / TENDER REFERENCE
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="collaboration-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_auto] md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-[#ff8a34]">
                  Additional References
                </p>

                <h2 className="mt-4 max-w-3xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Membutuhkan referensi project
                  <span className="text-[#ff8a34]">
                    {" "}
                    yang lebih spesifik?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                  Untuk kebutuhan proposal, vendor assessment,
                  partnership, atau tender, informasi project yang
                  relevan dapat dibahas lebih lanjut sesuai kebutuhan
                  dan batasan kerahasiaan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#ff6f0f] px-6 text-sm font-black text-[#17191c] transition hover:bg-[#ff7f25] md:w-auto"
              >
                Hubungi RHG

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-black/45">
                  Start a Collaboration
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Project berikutnya bisa dimulai dari sini.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan kebutuhan bisnis, sistem existing,
                  masalah teknis, atau produk yang ingin dibangun.
                  RHG dapat membantu menyusun pendekatan dan scope
                  teknologi yang sesuai.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Mulai Collaboration

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}