"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  X,
} from "lucide-react";

import { serviceThemes } from "@/lib/data/service-theme";
import { getServiceBySlug } from "@/lib/data/services";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  image_url: string | null;
  website_url: string | null;
};

export function PortfolioCard({
  project,
}: {
  project: Project;
}) {
  const [detailOpen, setDetailOpen] = useState(false);

  const service = project.category
    ? getServiceBySlug(project.category)
    : undefined;

  const theme = project.category
    ? serviceThemes[project.category]
    : undefined;

  const Icon = theme?.icon ?? Layers3;

  useEffect(() => {
    if (!detailOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [detailOpen]);

  return (
    <>
      {/* =====================================================
          CARD
      ====================================================== */}

      <motion.article
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        whileHover={{
          y: -5,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group h-full"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-all duration-300 group-hover:border-black/[0.12] group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.075)]">
          {/* IMAGE / PREVIEW */}

          <button
            type="button"
            onClick={() => setDetailOpen(true)}
            className="relative block aspect-[16/10] w-full overflow-hidden bg-[#17191c] text-left"
            aria-label={`Lihat detail ${project.title}`}
          >
            {project.image_url ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image_url}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/[0.04]" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[#181b20]" />

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#ff6f0f]/15 blur-[60px]" />

                <div className="absolute -bottom-20 -left-14 h-52 w-52 rounded-full bg-blue-500/[0.08] blur-[70px]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/[0.09] bg-white/[0.06] backdrop-blur">
                      <Icon className="h-6 w-6 text-[#ff8a34]" />
                    </div>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                      RHG Project
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* CATEGORY */}

            {service && (
              <span className="absolute left-4 top-4 rounded-full border border-white/[0.12] bg-black/45 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                {service.code}
              </span>
            )}

            {/* HOVER DETAIL */}

            <span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[10px] font-black text-[#17191c] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Lihat Detail
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </button>

          {/* CONTENT */}

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div>
              {service && (
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#ff6f0f]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#ff6f0f]">
                    {service.title}
                  </span>
                </div>
              )}

              <h3 className="text-[20px] font-black leading-[1.25] tracking-[-0.035em] text-[#17191c] sm:text-[21px]">
                {project.title}
              </h3>

              {/* PREVIEW DESCRIPTION */}

              <p className="mt-3 line-clamp-4 text-[13px] leading-6 text-slate-500 sm:text-sm">
                {project.description}
              </p>
            </div>

            {/* ACTIONS */}

            <div className="mt-auto pt-6">
              <div className="flex flex-col gap-2 border-t border-black/[0.06] pt-4">
                <button
                  type="button"
                  onClick={() => setDetailOpen(true)}
                  className="group/detail flex min-h-[44px] w-full items-center justify-between rounded-full bg-[#17191c] px-4 text-sm font-bold text-white transition-all duration-300 hover:bg-black"
                >
                  <span>Lihat Detail Project</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.08]">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/detail:translate-x-1" />
                  </span>
                </button>

                {project.website_url && (
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/site flex min-h-[44px] w-full items-center justify-between rounded-full bg-[#f5f5f2] px-4 text-sm font-bold text-[#17191c] transition hover:bg-[#ecece8]"
                  >
                    <span>Kunjungi Website</span>

                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}

      <AnimatePresence>
        {detailOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setDetailOpen(false);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[28px] bg-[#f7f7f5] shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:max-h-[88vh] sm:rounded-[30px]"
            >
              {/* MODAL HEADER */}

              <div className="flex shrink-0 items-center justify-between border-b border-black/[0.07] bg-white px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff6f0f]">
                    Project Detail
                  </p>

                  {service && (
                    <p className="mt-1 truncate text-xs font-semibold text-slate-400">
                      {service.title}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setDetailOpen(false)}
                  aria-label="Tutup detail"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#f7f7f5] text-[#17191c] transition hover:bg-[#17191c] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}

              <div className="overflow-y-auto">
                {/* HERO IMAGE */}

                <div className="relative aspect-[16/8] min-h-[190px] w-full overflow-hidden bg-[#17191c] sm:min-h-[280px]">
                  {project.image_url ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                          backgroundSize: "36px 36px",
                        }}
                      />

                      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#ff6f0f]/20 blur-[90px]" />

                      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/[0.1] bg-white/[0.06]">
                          <Icon className="h-8 w-8 text-[#ff8a34]" />
                        </div>
                      </div>
                    </>
                  )}

                  {service && (
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                      <span className="inline-flex rounded-full border border-white/[0.12] bg-black/45 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                        {service.code}
                      </span>
                    </div>
                  )}
                </div>

                {/* DETAIL */}

                <div className="px-4 py-6 sm:px-8 sm:py-8">
                  <h2 className="max-w-3xl text-[26px] font-black leading-[1.13] tracking-[-0.045em] text-[#17191c] sm:text-3xl md:text-4xl">
                    {project.title}
                  </h2>

                  <div className="mt-6 grid gap-7 md:grid-cols-[1fr_220px] md:gap-10">
                    {/* DESCRIPTION */}

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Tentang Project
                      </p>

                      <p className="mt-3 whitespace-pre-line text-[14px] leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                        {project.description}
                      </p>
                    </div>

                    {/* INFO */}

                    <aside className="h-fit rounded-[20px] border border-black/[0.07] bg-white p-4 sm:p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
                        Project Information
                      </p>

                      <div className="mt-4 border-b border-black/[0.06] pb-4">
                        <p className="text-[10px] text-slate-400">
                          Kategori
                        </p>

                        <p className="mt-1 text-sm font-black text-[#17191c]">
                          {service?.title ?? "Custom Project"}
                        </p>
                      </div>

                      <div className="py-4">
                        <p className="text-[10px] text-slate-400">
                          Developed by
                        </p>

                        <p className="mt-1 text-sm font-black text-[#17191c]">
                          RHG Teknologi Indonesia
                        </p>
                      </div>

                      {project.website_url && (
                        <a
                          href={project.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#17191c] px-4 text-xs font-black text-white transition hover:bg-black"
                        >
                          Kunjungi Website

                          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </aside>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}