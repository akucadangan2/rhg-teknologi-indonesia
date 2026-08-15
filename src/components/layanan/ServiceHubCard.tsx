"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceCategory } from "@/types/service";
import { serviceThemes } from "@/lib/data/service-theme";

export function ServiceHubCard({ service }: { service: ServiceCategory }) {
  const theme = serviceThemes[service.slug];
  const Icon = theme?.icon;
  const firstStat = service.stats?.[0];

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: "easeOut" }} className="h-full">
      <Link
        href={`/layanan/${service.slug}`}
        className={`group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all ${theme?.ring ?? ""}`}
      >
        <div className="flex items-start justify-between">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
              theme?.gradient ?? "from-brand to-circuit"
            }`}
          >
            {Icon && <Icon size={22} className="text-white" />}
          </span>
          <span className={`font-mono text-xs font-medium ${theme?.chip ?? "text-brand"}`}>
            {service.code}
          </span>
        </div>

        <h3 className="mt-4 font-display text-lg font-bold text-ink">{service.title}</h3>
        <p className="mt-1.5 text-sm text-ink/60">{service.tagline}</p>

        {firstStat && (
          <p className="mt-3 font-mono text-xs text-ink/40">
            {firstStat.value}{firstStat.suffix} — {firstStat.label}
          </p>
        )}

        <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
          Lihat detail
          <ArrowRight size={15} />
        </span>
      </Link>
    </motion.div>
  );
}