"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { serviceThemes } from "@/lib/data/service-theme";

export function ServiceOrbit() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {services.map((service, i) => {
        const theme = serviceThemes[service.slug];
        const Icon = theme?.icon;
        return (
          <motion.div
            key={service.slug}
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br shadow-md ${
              theme?.gradient ?? "from-brand to-circuit"
            }`}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          >
            {Icon && <Icon size={18} className="text-white" />}
          </motion.div>
        );
      })}
    </div>
  );
}