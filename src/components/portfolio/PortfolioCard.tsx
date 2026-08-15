"use client";

import { motion } from "framer-motion";
import { serviceThemes } from "@/lib/data/service-theme";
import { getServiceBySlug } from "@/lib/data/services";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  image_url: string | null;
};

export function PortfolioCard({ project }: { project: Project }) {
  const service = project.category ? getServiceBySlug(project.category) : undefined;
  const theme = project.category ? serviceThemes[project.category] : undefined;
  const Icon = theme?.icon;

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: "easeOut" }} className="h-full">
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all ${
          theme?.ring ?? ""
        }`}
      >
        {project.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image_url} alt={project.title} className="h-40 w-full object-cover" />
        ) : (
          <div
            className={`flex h-40 w-full items-center justify-center bg-gradient-to-br ${
              theme?.gradient ?? "from-brand to-circuit"
            }`}
          >
            {Icon && <Icon size={32} className="text-white/80" />}
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {service && (
            <span className={`font-mono text-xs font-medium ${theme?.chip ?? "text-brand"}`}>
              {service.code}
            </span>
          )}
          <h3 className="mt-2 font-display text-lg font-bold text-ink">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-ink/60">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
}