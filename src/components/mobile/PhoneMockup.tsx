"use client";

import { motion } from "framer-motion";

type PhoneMockupProps = {
  variant: "android" | "ios";
  className?: string;
  floatDelay?: number;
};

export function PhoneMockup({ variant, className = "", floatDelay = 0 }: PhoneMockupProps) {
  const isIOS = variant === "ios";
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      <div
        className={`h-[380px] w-[190px] rounded-[2.2rem] border-[6px] border-ink bg-ink p-1.5 shadow-xl ${
          isIOS ? "rounded-[2.6rem]" : ""
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-paper">
          {isIOS ? (
            <div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-ink" />
          ) : (
            <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-ink/40" />
          )}
          <div className="flex h-full flex-col gap-2 px-3 pt-9">
            <div className="h-8 w-full rounded-lg bg-gradient-to-r from-brand to-circuit" />
            <div className="h-14 w-full rounded-lg bg-white shadow-sm" />
            <div className="h-14 w-full rounded-lg bg-white shadow-sm" />
            <div className="h-14 w-full rounded-lg bg-white shadow-sm" />
            <div className="mt-auto mb-3 flex justify-around rounded-full bg-white py-2 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-circuit" />
              <div className="h-2 w-2 rounded-full bg-ink/20" />
              <div className="h-2 w-2 rounded-full bg-ink/20" />
              <div className="h-2 w-2 rounded-full bg-ink/20" />
            </div>
          </div>
        </div>
      </div>
      <span className="mt-3 block text-center font-mono text-xs font-medium text-ink/50">
        {isIOS ? "iOS" : "Android"}
      </span>
    </motion.div>
  );
}