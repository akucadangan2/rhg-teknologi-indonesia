"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { StatItem } from "@/types/service";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-extrabold text-ink md:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-xl border border-ink/10 bg-white p-6 shadow-sm sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}