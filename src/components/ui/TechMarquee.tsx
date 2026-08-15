"use client";

import { motion } from "framer-motion";

export function TechMarquee({ items }: { items: string[] }) {
  const looped = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((item, i) => (
          <span
            key={i}
            className="rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-xs text-ink/70"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}