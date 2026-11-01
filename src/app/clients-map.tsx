"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapPoint = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  region: "indonesia" | "australia";
  clients: string[];
};

export type HqPoint = {
  label: string;
  lat: number;
  lng: number;
};

type Region = MapPoint["region"];
type LatLng = [number, number];

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Garis lengkung dari kantor pusat ke klien (kurva Bezier kuadratik) */
function arc(from: LatLng, to: LatLng, steps = 48): LatLng[] {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const len = Math.hypot(dLat, dLng) || 1;

  let nLat = -dLng / len;
  let nLng = dLat / len;
  if (nLat < 0) {
    nLat = -nLat;
    nLng = -nLng;
  }

  const cLat = (lat1 + lat2) / 2 + nLat * len * 0.18;
  const cLng = (lng1 + lng2) / 2 + nLng * len * 0.18;

  const result: LatLng[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = (1 - t) * (1 - t);
    const b = 2 * (1 - t) * t;
    const c = t * t;
    result.push([
      a * lat1 + b * cLat + c * lat2,
      a * lng1 + b * cLng + c * lng2,
    ]);
  }
  return result;
}

export default function ClientsMap({
  points,
  hq,
}: {
  points: MapPoint[];
  hq: HqPoint;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const showRef = useRef<((target: Region) => void) | null>(null);
  const [region, setRegion] = useState<Region>("indonesia");

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        minZoom: 3,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
      });

      const esriAttribution =
        "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ";

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        { attribution: esriAttribution, maxZoom: 16 },
      ).addTo(map);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 16, opacity: 0.8 },
      ).addTo(map);

      const hqLatLng: LatLng = [hq.lat, hq.lng];

      // Klien di sekitar kantor pusat tidak diberi garis
      const isNearHq = (p: MapPoint) =>
        Math.hypot(p.lat - hq.lat, p.lng - hq.lng) < 0.3;
      const nearClients = points.filter(isNearHq).flatMap((p) => p.clients);
      const farPoints = points.filter((p) => !isNearHq(p));

      // Garis: lapisan cahaya + garis putus-putus bergerak
      farPoints.forEach((p) => {
        const path = arc(hqLatLng, [p.lat, p.lng]);

        L.polyline(path, {
          color: "#ff6f0f",
          weight: 7,
          opacity: 0.14,
          interactive: false,
        }).addTo(map);

        L.polyline(path, {
          color: "#ff8a34",
          weight: 1.6,
          opacity: 0.95,
          dashArray: "5 7",
          className: "route-line",
          interactive: false,
        }).addTo(map);
      });

      // Pin klien
      farPoints.forEach((p) => {
        const icon = L.divIcon({
          className: "",
          html: `<span class="cl-core"></span>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
          popupAnchor: [0, -10],
        });

        const shortName = p.label.split(",")[0];
        const tooltipText =
          p.clients.length > 1
            ? `${shortName} · ${p.clients.length} klien`
            : shortName;

        L.marker([p.lat, p.lng], { icon, title: p.label })
          .addTo(map)
          .bindTooltip(escapeHtml(tooltipText), {
            permanent: true,
            direction: "top",
            offset: [0, -8],
            className: "map-label",
          })
          .bindPopup(
            `<strong>${escapeHtml(p.label)}</strong><br/>${p.clients
              .map(escapeHtml)
              .join("<br/>")}`,
          );
      });

      // Pin kantor pusat
      const hqIcon = L.divIcon({
        className: "",
        html: `<div class="hq-pin"><span class="hq-ring"></span><span class="hq-core">RHG</span></div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -20],
      });

      const hqPopup =
        `<strong>${escapeHtml(hq.label)}</strong>` +
        (nearClients.length > 0
          ? `<br/>Klien di Jakarta:<br/>${nearClients
              .map(escapeHtml)
              .join("<br/>")}`
          : "");

      L.marker(hqLatLng, { icon: hqIcon, title: hq.label, zIndexOffset: 1000 })
        .addTo(map)
        .bindTooltip("Kantor pusat", {
          permanent: true,
          direction: "bottom",
          offset: [0, 18],
          className: "map-label map-label-hq",
        })
        .bindPopup(hqPopup);

      const show = (target: Region) => {
        const list = points.filter((p) => p.region === target);
        const coords: LatLng[] = [
          hqLatLng,
          ...list.map((p) => [p.lat, p.lng] as LatLng),
        ];

        map.fitBounds(L.latLngBounds(coords), {
          padding: [56, 56],
          maxZoom: 7,
        });
      };

      mapRef.current = map;
      showRef.current = show;
      show("indonesia");
    }

    init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      showRef.current = null;
    };
  }, [points, hq]);

  useEffect(() => {
    showRef.current?.(region);
  }, [region]);

  return (
    <div className="clients-map relative isolate">
      <style>{`
        @keyframes routeDash {
          to { stroke-dashoffset: -24; }
        }
        @keyframes hqPulse {
          0% { transform: scale(.7); opacity: .9; }
          100% { transform: scale(2); opacity: 0; }
        }

        .clients-map .route-line { animation: routeDash 1.4s linear infinite; }

        .clients-map .leaflet-container {
          background: #1a1d21;
          font-family: inherit;
        }

        .clients-map .cl-core {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: #fff;
          border: 3px solid #ff6f0f;
          box-shadow: 0 0 0 4px rgba(255,111,15,.28);
        }

        .clients-map .hq-pin { position: relative; width: 38px; height: 38px; }
        .clients-map .hq-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(255,111,15,.5);
          animation: hqPulse 2.2s ease-out infinite;
        }
        .clients-map .hq-core {
          position: absolute;
          inset: 4px;
          border-radius: 9999px;
          background: #ff6f0f;
          border: 2px solid #fff;
          color: #fff;
          font: 800 9px/26px system-ui, sans-serif;
          letter-spacing: .04em;
          text-align: center;
          box-shadow: 0 4px 14px rgba(0,0,0,.4);
        }

        .clients-map .map-label {
          background: rgba(23,25,28,.88);
          color: #fff;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 9999px;
          padding: 2px 9px;
          font: 600 10px/16px system-ui, sans-serif;
          box-shadow: none;
          white-space: nowrap;
        }
        .clients-map .map-label::before { display: none; }
        .clients-map .map-label-hq {
          background: #ff6f0f;
          color: #17191c;
          border-color: transparent;
          font-weight: 800;
        }

        .clients-map .leaflet-popup-content-wrapper {
          background: #17191c;
          color: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,.4);
        }
        .clients-map .leaflet-popup-content {
          margin: 10px 14px;
          font: 500 12px/1.5 system-ui, sans-serif;
        }
        .clients-map .leaflet-popup-tip { background: #17191c; }
        .clients-map .leaflet-popup-close-button { color: rgba(255,255,255,.6) !important; }

        .clients-map .leaflet-bar {
          border: 1px solid rgba(255,255,255,.15) !important;
          box-shadow: none;
        }
        .clients-map .leaflet-bar a {
          background: rgba(23,25,28,.88);
          color: #fff;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .clients-map .leaflet-bar a:hover { background: #2a2e34; }

        .clients-map .leaflet-control-attribution {
          background: rgba(23,25,28,.7) !important;
          color: rgba(255,255,255,.45) !important;
          font-size: 9px;
        }
        .clients-map .leaflet-control-attribution a { color: rgba(255,255,255,.6) !important; }

        @media (max-width: 639px) {
          .clients-map .map-label { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-map .route-line,
          .clients-map .hq-ring { animation: none; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="h-[280px] w-full bg-[#1a1d21] sm:h-[400px]"
      />

      <div className="absolute right-3 top-3 z-[1000] flex gap-1 rounded-full border border-white/10 bg-black/55 p-1 backdrop-blur">
        {(["indonesia", "australia"] as Region[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRegion(item)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold capitalize transition ${
              region === item
                ? "bg-[#ff6f0f] text-[#17191c]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-7 left-3 z-[1000] flex flex-col gap-1.5 rounded-lg border border-white/10 bg-black/55 px-2.5 py-2 text-[10px] font-semibold text-white/80 backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f0f]" />
          Kantor pusat (Jakarta)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-[#ff6f0f] bg-white" />
          Lokasi klien
        </span>
      </div>
    </div>
  );
}