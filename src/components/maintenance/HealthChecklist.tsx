import { HeartPulse, RotateCcw, KeyRound, Gauge, Calendar, RefreshCw } from "lucide-react";

const CHECKUP_ITEMS = [
  { icon: HeartPulse, label: "Cek uptime & ketersediaan sistem" },
  { icon: RotateCcw, label: "Verifikasi backup otomatis berjalan" },
  { icon: KeyRound, label: "Update patch keamanan" },
  { icon: Gauge, label: "Pemeriksaan performa & kecepatan" },
  { icon: Calendar, label: "Pengecekan masa berlaku SSL" },
  { icon: RefreshCw, label: "Update dependency & library" },
];

export function HealthChecklist() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {CHECKUP_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <Icon size={16} className="text-emerald-600" />
            </span>
            <span className="text-sm text-ink/70">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}