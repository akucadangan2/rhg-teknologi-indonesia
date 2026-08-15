import { Building2, Briefcase } from "lucide-react";

const GOV = [
  "Pemetaan aset daerah & infrastruktur publik",
  "Sistem informasi tata ruang wilayah",
  "Pemetaan jaringan irigasi pertanian",
  "Visualisasi data kadaster/pertanahan",
];

const PRIVATE = [
  "Tracking armada logistik real-time",
  "Peta cakupan layanan & ekspansi wilayah",
  "Estimasi rute pengiriman otomatis",
  "Visualisasi lokasi cabang/mitra bisnis",
];

export function SectorSplit() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="rounded-xl border border-ink/10 bg-white p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink/10">
          <Building2 size={20} className="text-ink/70" />
        </div>
        <h3 className="mt-3 font-display font-semibold text-ink">Instansi Pemerintah</h3>
        <ul className="mt-3 space-y-2">
          {GOV.map((item) => (
            <li key={item} className="text-sm text-ink/60">— {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-circuit/20 bg-circuit/5 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-circuit/10">
          <Briefcase size={20} className="text-circuit" />
        </div>
        <h3 className="mt-3 font-display font-semibold text-ink">Sektor Swasta</h3>
        <ul className="mt-3 space-y-2">
          {PRIVATE.map((item) => (
            <li key={item} className="text-sm text-ink/60">— {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}