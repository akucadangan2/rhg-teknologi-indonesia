"use client";

import { motion } from "framer-motion";

const PULSE_PATH =
  "M0,60 L220,60 L245,15 L270,105 L295,60 L600,60";

export function HeartbeatMonitor() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#0A0E1F] p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          SYSTEM STATUS: HEALTHY
        </span>
        <span className="font-mono text-xs text-white/40">UPTIME 99.9%</span>
      </div>
      <div className="relative mt-3 h-24 overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 h-full w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <path d={PULSE_PATH} fill="none" stroke="#34D399" strokeWidth="2" />
          <path d={PULSE_PATH} transform="translate(600,0)" fill="none" stroke="#34D399" strokeWidth="2" />
        </motion.svg>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0E1F] via-transparent to-[#0A0E1F]" />
      </div>
      <div className="mt-1 grid grid-cols-3 gap-2 font-mono text-[10px] text-white/40">
        <span>RESPONSE: 42ms</span>
        <span className="text-center">BACKUP: OK</span>
        <span className="text-right">SSL: VALID</span>
      </div>
    </div>
  );
}