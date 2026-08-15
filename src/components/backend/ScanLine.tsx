"use client";

import { motion } from "framer-motion";

export function ScanLine() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-circuit/20 to-transparent"
      animate={{ top: ["-10%", "110%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  );
}