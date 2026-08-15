"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const ROWS = [
  { label: "Produk A x2", value: "Rp 150.000" },
  { label: "Ongkos Kirim", value: "Rp 15.000" },
  { label: "Biaya Admin", value: "Rp 2.500" },
  { label: "Total", value: "Rp 167.500" },
];

export function ReceiptCard() {
  const [visibleRows, setVisibleRows] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (visibleRows < ROWS.length) {
      const t = setTimeout(() => setVisibleRows((v) => v + 1), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowSuccess(true), 400);
    return () => clearTimeout(t);
  }, [visibleRows]);

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => {
      setShowSuccess(false);
      setVisibleRows(0);
    }, 2200);
    return () => clearTimeout(t);
  }, [showSuccess]);

  return (
    <div className="w-full max-w-xs rounded-xl border border-ink/10 bg-white p-6 shadow-xl">
      <p className="text-center font-mono text-xs uppercase tracking-wide text-ink/40">
        Struk Pembayaran
      </p>
      <div className="my-4 border-t border-dashed border-ink/20" />
      <div className="space-y-2">
        {ROWS.slice(0, visibleRows).map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex justify-between text-sm ${
              i === ROWS.length - 1
                ? "mt-2 border-t border-dashed border-ink/20 pt-2 font-semibold text-ink"
                : "text-ink/60"
            }`}
          >
            <span>{row.label}</span>
            <span>{row.value}</span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex flex-col items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
              <Check size={20} className="text-white" />
            </span>
            <span className="text-sm font-medium text-ink">Pembayaran Berhasil</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}