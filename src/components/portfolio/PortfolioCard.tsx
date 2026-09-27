"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

  const Icon = theme?.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="h-full"
    >
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all ${
          theme?.ring ?? ""
        }`}
      >
        {project.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image_url}
            alt={project.title}
            className="h-40 w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-40 w-full items-center justify-center bg-gradient-to-br ${
              theme?.gradient ?? "from-brand to-circuit"
            }`}
          >
            {Icon && (
              <Icon
                size={32}
                className="text-white/80"
              />
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {service && (
            <span
              className={`font-mono text-xs font-medium ${
                theme?.chip ?? "text-brand"
              }`}
            >
              {service.code}
            </span>
          )}

          <h3 className="mt-2 font-display text-lg font-bold text-ink">
            {project.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-6 text-ink/60">
            {project.description}
          </p>

          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Kunjungi Website
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}