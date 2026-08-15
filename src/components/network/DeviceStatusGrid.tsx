"use client";

import { motion } from "framer-motion";

const DEVICES = [
  { name: "Router Utama (Mikrotik)", uptime: "47 hari", signal: 5 },
  { name: "OLT Cabang A", uptime: "12 hari", signal: 4 },
  { name: "Access Point Lantai 2", uptime: "47 hari", signal: 5 },
  { name: "Server Hotspot", uptime: "30 hari", signal: 3 },
];

export function DeviceStatusGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {DEVICES.map((device, i) => (
        <div key={device.name} className="rounded-xl border border-ink/10 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink">{device.name}</span>
            <span className="flex items-center gap-1.5">
              <motion.span
                className="h-2 w-2 rounded-full bg-emerald-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
              />
              <span className="font-mono text-xs text-emerald-600">Online</span>
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-xs text-ink/50">Uptime: {device.uptime}</span>
            <div className="flex items-end gap-0.5">
              {[1, 2, 3, 4, 5].map((bar) => (
                <span
                  key={bar}
                  className={`w-1 rounded-sm ${bar <= device.signal ? "bg-emerald-500" : "bg-ink/10"}`}
                  style={{ height: `${bar * 3}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}