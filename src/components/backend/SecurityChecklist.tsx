import { Lock } from "lucide-react";

const STANDARDS = [
  "Row Level Security (RLS) di setiap tabel database",
  "Environment variable terisolasi, credential tidak pernah hardcode",
  "Koneksi HTTPS/SSL end-to-end",
  "Rate limiting untuk mencegah abuse API",
  "Automated backup terjadwal",
  "Access logging untuk audit trail",
];

export function SecurityChecklist() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {STANDARDS.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white p-4">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-circuit/10">
            <Lock size={14} className="text-circuit" />
          </span>
          <span className="text-sm text-ink/70">{item}</span>
        </div>
      ))}
    </div>
  );
}