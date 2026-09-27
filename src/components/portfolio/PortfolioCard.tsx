"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
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
  const service = project.category
    ? getServiceBySlug(project.category)
    : undefined;

  const theme = project.category
    ? serviceThemes[project.category]
    : undefined;

  const Icon = theme?.icon ?? Layers3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        {/* =========================================
            PROJECT PREVIEW
        ========================================= */}

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17191c]">
          {project.image_url ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image_url}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/[0.04]" />
            </>
          ) : (
            <>
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-[#181b20]" />

              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[#ff6f0f]/15 blur-[60px]" />

              <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[70px]" />

              {/* PLACEHOLDER CONTENT */}
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
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full border border-white/[0.12] bg-black/45 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                {service.code}
              </span>
            </div>
          )}

          {/* EXTERNAL ICON */}
          {project.website_url && (
            <div className="absolute right-4 top-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#ff6f0f]">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

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

            <h3 className="line-clamp-2 text-[20px] font-black leading-[1.25] tracking-[-0.035em] text-[#17191c] sm:text-[21px]">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-6">
              {project.description}
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-auto pt-6">
            <div className="border-t border-black/[0.06] pt-4">
              {project.website_url ? (
                <a
                  href={project.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex min-h-[42px] w-full items-center justify-between rounded-full bg-[#f5f5f2] px-4 text-sm font-bold text-[#17191c] transition-all duration-300 hover:bg-[#17191c] hover:text-white"
                >
                  <span>Kunjungi Website</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#17191c] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </a>
              ) : (
                <div className="flex min-h-[42px] items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    Case Study
                  </span>

                  <span className="text-[10px] font-semibold text-slate-400">
                    RHG Teknologi Indonesia
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}