import { Globe, Smartphone, Server, CreditCard, Map, Network, HeartPulse, LucideIcon } from "lucide-react";

export type ServiceTheme = {
  icon: LucideIcon;
  gradient: string;
  ring: string;
  chip: string;
};

export const serviceThemes: Record<string, ServiceTheme> = {
  website: {
    icon: Globe,
    gradient: "from-brand to-brand-dark",
    ring: "hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10",
    chip: "text-brand",
  },
  "aplikasi-mobile": {
    icon: Smartphone,
    gradient: "from-circuit to-indigo-700",
    ring: "hover:border-circuit/40 hover:shadow-lg hover:shadow-circuit/10",
    chip: "text-circuit",
  },
  "jasa-it-backend": {
    icon: Server,
    gradient: "from-ink to-circuit",
    ring: "hover:border-circuit/40 hover:shadow-lg hover:shadow-circuit/10",
    chip: "text-circuit",
  },
  "payment-gateway": {
    icon: CreditCard,
    gradient: "from-brand to-circuit",
    ring: "hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10",
    chip: "text-brand",
  },
  "maps-gis": {
    icon: Map,
    gradient: "from-emerald-500 to-circuit",
    ring: "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10",
    chip: "text-emerald-600",
  },
  "integrasi-sistem": {
    icon: Network,
    gradient: "from-emerald-500 to-emerald-700",
    ring: "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10",
    chip: "text-emerald-600",
  },
  "maintenance-support": {
    icon: HeartPulse,
    gradient: "from-emerald-500 to-brand",
    ring: "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10",
    chip: "text-emerald-600",
  },
};