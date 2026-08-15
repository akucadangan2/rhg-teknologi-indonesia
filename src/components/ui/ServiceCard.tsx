"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceCategory } from "@/types/service";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <Link
        href={`/layanan/${service.slug}`}
        className="group block rounded-lg border border-ink/10 p-6 transition-colors hover:border-circuit/40 hover:bg-circuit/5"
      >
        <span className="font-mono text-xs font-medium text-circuit">
          {service.code}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-ink/60">{service.tagline}</p>
        <span className="mt-4 inline-block text-sm font-medium text-brand group-hover:underline">
          Lihat detail &rarr;
        </span>
      </Link>
    </motion.div>
  );
}