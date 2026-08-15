"use client";

import { motion } from "framer-motion";

const LAYERS = [
  { label: "Data Anda (Aset, Titik Survei)", color: "from-brand to-brand-dark" },
  { label: "Jaringan Jalan & Infrastruktur", color: "from-circuit to-circuit" },
  { label: "Batas Administrasi Wilayah", color: "from-ink/70 to-ink/70" },
  { label: "Citra Satelit / Dasar Peta", color: "from-ink/40 to-ink/40" },
];

export function LayerStack() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-sm">
      {LAYERS.map((layer, i) => (
        <motion.div
          key={layer.label}
          className={`absolute left-1/2 flex h-14 w-full -translate-x-1/2 items-center rounded-lg border border-white/20 bg-gradient-to-r px-4 shadow-lg ${layer.color}`}
          initial={{ top: 0, opacity: 0 }}
          whileInView={{ top: i * 42, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          style={{ zIndex: LAYERS.length - i }}
        >
          <span className="font-mono text-xs font-medium text-white">{layer.label}</span>
        </motion.div>
      ))}
    </div>
  );
}