"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { services } from "@/lib/data/services";
import { PortfolioCard } from "./PortfolioCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  image_url: string | null;
  website_url: string | null;
};

export function PortfolioFilter({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] = useState<string>("all");

  const usedSlugs = useMemo(
    () =>
      new Set(
        projects
          .map((p) => p.category)
          .filter(Boolean) as string[]
      ),
    [projects]
  );

  const filterOptions = useMemo(
    () => services.filter((s) => usedSlugs.has(s.slug)),
    [usedSlugs]
  );

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active, projects]
  );

  const activeLabel =
    active === "all"
      ? "Semua Project"
      : filterOptions.find((item) => item.slug === active)?.title ??
        "Kategori";

  return (
    <div className="space-y-8 md:space-y-10">
      {/* FILTER BAR */}
      <div className="rounded-[26px] border border-black/[0.07] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <Filter className="h-3.5 w-3.5 text-[#ff6f0f]" />
              Filter Portofolio
            </div>

            <h2 className="mt-3 text-[22px] font-black tracking-[-0.03em] text-[#17191c] md:text-[26px]">
              Jelajahi project berdasarkan kategori
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 md:text-[15px] md:leading-7">
              Pilih kategori layanan untuk melihat contoh project yang
              relevan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.06] bg-[#fafaf8] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Hasil
            </p>
            <p className="mt-1 text-sm font-semibold text-[#17191c]">
              {filtered.length} project · {activeLabel}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-black/[0.06] pt-5">
          <div className="-mx-1 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2 px-1">
              <button
                type="button"
                onClick={() => setActive("all")}
                className={`inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active === "all"
                    ? "bg-[#17191c] text-white shadow-sm"
                    : "border border-black/[0.08] bg-white text-slate-500 hover:border-black/[0.15] hover:text-[#17191c]"
                }`}
              >
                Semua
              </button>

              {filterOptions.map((s) => {
                const selected = active === s.slug;

                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setActive(s.slug)}
                    className={`inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      selected
                        ? "bg-[#fff0e5] text-[#ff6f0f] ring-1 ring-[#ff6f0f]/15"
                        : "border border-black/[0.08] bg-white text-slate-500 hover:border-black/[0.15] hover:text-[#17191c]"
                    }`}
                  >
                    {s.code}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <FadeInSection
              key={project.id}
              delay={i * 0.04}
            >
              <PortfolioCard project={project} />
            </FadeInSection>
          ))}
        </div>
      ) : (
        <div className="rounded-[26px] border border-dashed border-black/[0.10] bg-white px-6 py-14 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e5]">
            <ArrowUpRight className="h-5 w-5 text-[#ff6f0f]" />
          </div>

          <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-[#17191c]">
            Belum ada project di kategori ini
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Coba pilih kategori lain atau kembali ke filter “Semua”
            untuk melihat seluruh project yang tersedia.
          </p>

          <button
            type="button"
            onClick={() => setActive("all")}
            className="mt-5 inline-flex items-center rounded-full bg-[#17191c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Tampilkan Semua
          </button>
        </div>
      )}
    </div>
  );
}