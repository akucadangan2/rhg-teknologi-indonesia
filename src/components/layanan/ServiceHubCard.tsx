"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ServiceCategory } from "@/types/service";
import { serviceThemes } from "@/lib/data/service-theme";

export function ServiceHubCard({
  service,
}: {
  service: ServiceCategory;
}) {
  const theme = serviceThemes[service.slug];
  const Icon = theme?.icon;
  const firstStat = service.stats?.[0];

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <Link
        href={`/layanan/${service.slug}`}
        className={`
          group relative flex h-full min-h-[290px] flex-col overflow-hidden
          rounded-[24px] border border-ink/[0.07] bg-white p-6
          shadow-[0_12px_40px_rgba(17,22,43,0.035)]
          transition-all duration-300
          hover:border-brand/20
          hover:shadow-[0_24px_65px_rgba(17,22,43,0.075)]
          ${theme?.ring ?? ""}
        `}
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none absolute -right-16 -top-16
            h-44 w-44 rounded-full bg-brand/[0.055]
            opacity-0 blur-[50px]
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {/* Decorative number */}
        <span
          className="
            pointer-events-none absolute bottom-2 right-4
            font-mono text-[68px] font-bold leading-none
            tracking-[-0.08em] text-ink/[0.025]
            transition-colors duration-300
            group-hover:text-brand/[0.045]
          "
        >
          {service.code}
        </span>

        <div className="relative flex h-full flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div
              className={`
                flex h-13 w-13 h-[52px] w-[52px]
                items-center justify-center rounded-2xl
                bg-gradient-to-br
                shadow-[0_10px_25px_rgba(49,94,251,0.15)]
                ${theme?.gradient ?? "from-brand to-circuit"}
              `}
            >
              {Icon && <Icon size={22} className="text-white" />}
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`
                  rounded-full border border-ink/[0.06]
                  bg-ink/[0.025] px-2.5 py-1
                  font-mono text-[9px] font-semibold
                  uppercase tracking-[0.14em]
                  ${theme?.chip ?? "text-brand"}
                `}
              >
                {service.code}
              </span>

              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full border border-ink/[0.06]
                  bg-white text-ink/35
                  transition-all duration-300
                  group-hover:border-brand/20
                  group-hover:bg-brand
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3
              className="
                max-w-[90%] font-display text-lg font-bold
                leading-snug tracking-[-0.015em] text-ink
                transition-colors duration-300
                group-hover:text-brand
              "
            >
              {service.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-ink/55">
              {service.tagline}
            </p>
          </div>

          {/* Statistic */}
          {firstStat && (
            <div className="mt-5">
              <div
                className="
                  inline-flex items-center gap-2 rounded-xl
                  border border-ink/[0.05] bg-ink/[0.018]
                  px-3 py-2
                "
              >
                <span className="font-display text-sm font-bold text-ink">
                  {firstStat.value}
                  {firstStat.suffix}
                </span>

                <span className="h-3 w-px bg-ink/10" />

                <span className="text-[10px] text-ink/40">
                  {firstStat.label}
                </span>
              </div>
            </div>
          )}

          {/* Footer */}
          <div
            className="
              mt-auto flex items-center justify-between
              border-t border-ink/[0.05] pt-5
            "
          >
            <span className="text-xs font-semibold text-ink/50 transition-colors group-hover:text-brand">
              Lihat detail layanan
            </span>

            <span
              className="
                h-px w-8 bg-ink/10
                transition-all duration-300
                group-hover:w-12 group-hover:bg-brand/40
              "
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}