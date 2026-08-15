import { Router, Store } from "lucide-react";

const ISP = [
  "Monitoring perangkat jaringan dari jarak jauh",
  "Sistem voucher & billing hotspot/PPPoE otomatis",
  "Notifikasi otomatis saat perangkat down",
  "Manajemen bandwidth per pelanggan",
];

const RETAIL = [
  "Integrasi printer barcode/struk ke sistem kasir",
  "Setup jaringan internal toko/kantor",
  "Sistem IoT untuk monitoring alat/mesin",
  "Konfigurasi hotspot untuk pelanggan/tamu",
];

export function SectorSplit() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
          <Router size={20} className="text-emerald-600" />
        </div>
        <h3 className="mt-3 font-display font-semibold text-ink">ISP / Penyedia Hotspot</h3>
        <ul className="mt-3 space-y-2">
          {ISP.map((item) => (
            <li key={item} className="text-sm text-ink/60">— {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-ink/10 bg-white p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink/10">
          <Store size={20} className="text-ink/70" />
        </div>
        <h3 className="mt-3 font-display font-semibold text-ink">Retail & Bisnis</h3>
        <ul className="mt-3 space-y-2">
          {RETAIL.map((item) => (
            <li key={item} className="text-sm text-ink/60">— {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}