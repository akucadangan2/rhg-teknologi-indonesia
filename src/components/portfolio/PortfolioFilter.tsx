"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import { PortfolioCard } from "./PortfolioCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  image_url: string | null;
};

export function PortfolioFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("all");

  const usedSlugs = new Set(projects.map((p) => p.category).filter(Boolean) as string[]);
  const filterOptions = services.filter((s) => usedSlugs.has(s.slug));

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === "all" ? "bg-ink text-white" : "border border-ink/15 text-ink/60 hover:bg-ink/5"
          }`}
        >
          Semua
        </button>
        {filterOptions.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActive(s.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === s.slug ? "bg-ink text-white" : "border border-ink/15 text-ink/60 hover:bg-ink/5"
            }`}
          >
            {s.code}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <FadeInSection key={project.id} delay={i * 0.05}>
            <PortfolioCard project={project} />
          </FadeInSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink/50">
          Belum ada project untuk kategori ini.
        </p>
      )}
    </div>
  );
}