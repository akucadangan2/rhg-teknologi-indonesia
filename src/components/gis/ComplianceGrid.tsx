import { BadgeCheck } from "lucide-react";

const STANDARDS = [
  { title: "Sistem Koordinat Nasional", detail: "WGS84 & TM-3 sesuai standar Indonesia" },
  { title: "Format Data Standar", detail: "SHP, KML, GeoJSON, WMS/WFS" },
  { title: "Kaidah Kartografi", detail: "Mengikuti pedoman penyajian peta BIG" },
  { title: "Siap Dokumen Tender", detail: "Laporan teknis, metadata, dan peta cetak" },
];

export function ComplianceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {STANDARDS.map((item) => (
        <div key={item.title} className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white p-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
            <BadgeCheck size={16} className="text-brand" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="mt-0.5 text-sm text-ink/60">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}