"use client";

import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

export function VoucherCard() {
  return (
    <motion.div
      className="relative w-full max-w-xs"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xl">
        <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-circuit px-5 py-3">
          <Wifi size={18} className="text-white" />
          <span className="font-mono text-xs font-semibold text-white">VOUCHER HOTSPOT</span>
        </div>
        <div className="relative px-5 py-5">
          <p className="font-mono text-2xl font-bold tracking-widest text-ink">8X3K-9ZQP</p>
          <div className="mt-3 flex justify-between text-sm text-ink/60">
            <span>Durasi: 24 Jam</span>
            <span>Rp 5.000</span>
          </div>
        </div>
        <div className="relative border-t border-dashed border-ink/20">
          <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-paper" />
          <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-paper" />
        </div>
        <div className="grid grid-cols-6 gap-1 p-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={`aspect-square rounded-sm ${Math.random() > 0.5 ? "bg-ink" : "bg-ink/10"}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}