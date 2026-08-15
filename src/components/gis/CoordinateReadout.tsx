"use client";

import { useEffect, useState } from "react";

export function CoordinateReadout() {
  const [lat, setLat] = useState("5.42920");
  const [lon, setLon] = useState("105.26100");

  useEffect(() => {
    const interval = setInterval(() => {
      setLat((5.4292 + (Math.random() - 0.5) * 0.0008).toFixed(5));
      setLon((105.261 + (Math.random() - 0.5) * 0.0008).toFixed(5));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 font-mono text-xs text-ink/60">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
      LAT -{lat}° &nbsp;LON {lon}°
    </div>
  );
}