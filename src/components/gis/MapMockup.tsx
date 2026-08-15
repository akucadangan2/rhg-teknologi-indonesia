"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const STYLES = {
  satelit: "bg-gradient-to-br from-[#2D3B2A] via-[#3F5138] to-[#5C6B45]",
  jalan: "bg-gradient-to-br from-[#EDEFF3] via-[#E2E6ED] to-[#D6DCE6]",
  terrain: "bg-gradient-to-br from-[#E8DFC8] via-[#D9CBA3] to-[#C4B58A]",
};

const PINS = [
  { top: "30%", left: "35%", delay: 0 },
  { top: "55%", left: "60%", delay: 0.2 },
  { top: "70%", left: "30%", delay: 0.4 },
];

export function MapMockup() {
  const [style, setStyle] = useState<keyof typeof STYLES>("satelit");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-ink/10 shadow-xl">
      <div className="flex gap-1.5 border-b border-ink/10 bg-white p-2">
        {(["satelit", "jalan", "terrain"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`rounded-md px-3 py-1.5 font-mono text-xs capitalize transition-colors ${
              style === s ? "bg-ink text-white" : "text-ink/50 hover:bg-ink/5"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className={`relative h-64 ${STYLES[style]} transition-colors duration-500`}>
        <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 300 200">
          {[40, 80, 120, 160].map((y) => (
            <path
              key={y}
              d={`M0 ${y} Q 75 ${y - 20} 150 ${y} T 300 ${y}`}
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>

        {PINS.map((pin, i) => (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ top: pin.top, left: pin.left }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: pin.delay + 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.span
                className="absolute -inset-2 rounded-full bg-brand/40"
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: pin.delay }}
              />
              <MapPin size={22} className="relative fill-brand text-ink" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}