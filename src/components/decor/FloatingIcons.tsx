"use client";

import { motion } from "framer-motion";
import { Code2, Zap, ShieldCheck } from "lucide-react";

const ICONS = [
  { Icon: Code2, className: "left-4 top-6", duration: 4, delay: 0 },
  { Icon: Zap, className: "right-8 top-16", duration: 5, delay: 0.5 },
  { Icon: ShieldCheck, className: "left-1/3 top-2", duration: 4.5, delay: 1 },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {ICONS.map(({ Icon, className, duration, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${className} rounded-full bg-white p-2 shadow-md`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon size={16} className="text-brand" />
        </motion.div>
      ))}
    </div>
  );
}