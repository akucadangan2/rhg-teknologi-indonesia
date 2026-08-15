"use client";

import { motion } from "framer-motion";
import { AlertCircle, Search, Wrench, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: AlertCircle, label: "Laporan Diterima", time: "0 menit" },
  { icon: Search, label: "Diagnosa Masalah", time: "±15 menit" },
  { icon: Wrench, label: "Perbaikan Dijalankan", time: "±45 menit" },
  { icon: CheckCircle2, label: "Terverifikasi Normal", time: "±60 menit" },
];

export function ResponseTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-6 h-0.5 bg-ink/10">
        <motion.div
          className="h-full bg-gradient-to-r from-brand to-emerald-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-paper bg-white shadow-md">
                <Icon size={20} className="text-brand" />
              </span>
              <span className="mt-3 text-sm font-semibold text-ink">{step.label}</span>
              <span className="mt-0.5 font-mono text-xs text-ink/50">{step.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}