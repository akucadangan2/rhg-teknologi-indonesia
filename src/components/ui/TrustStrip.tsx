import { ShieldCheck, Code2, Headphones, Clock } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "PT Resmi Terdaftar" },
  { icon: Code2, label: "Source Code 100% Milik Anda" },
  { icon: Headphones, label: "Support Pasca-Launch" },
  { icon: Clock, label: "Update Progress Berkala" },
];

export function TrustStrip() {
  return (
    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
      {TRUST_ITEMS.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2 text-sm font-medium text-ink/70">
          <Icon size={16} className="text-brand" />
          {label}
        </div>
      ))}
    </div>
  );
}