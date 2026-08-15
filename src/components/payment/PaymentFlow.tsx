"use client";

import { motion } from "framer-motion";
import { User, Zap, Landmark } from "lucide-react";

export function PaymentFlow() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-white p-6 md:p-8">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/10">
          <User size={24} className="text-ink/60" />
        </div>
        <span className="font-mono text-xs text-ink/50">Pelanggan</span>
      </div>

      <div className="relative mx-3 h-px flex-1 bg-ink/10 md:mx-4">
        {[0, 0.6, 1.2].map((delay, i) => (
          <motion.span
            key={i}
            className="absolute -top-1 h-2 w-2 rounded-full bg-brand"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay }}
          />
        ))}
      </div>

      <motion.div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-circuit"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={26} className="text-white" />
      </motion.div>

      <div className="relative mx-3 h-px flex-1 bg-ink/10 md:mx-4">
        {[0.3, 0.9, 1.5].map((delay, i) => (
          <motion.span
            key={i}
            className="absolute -top-1 h-2 w-2 rounded-full bg-circuit"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-circuit/10">
          <Landmark size={24} className="text-circuit" />
        </div>
        <span className="font-mono text-xs text-ink/50">Rekening Anda</span>
      </div>
    </div>
  );
}