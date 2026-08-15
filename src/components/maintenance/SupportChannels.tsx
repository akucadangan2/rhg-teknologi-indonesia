import { MessageCircle, Mail, Ticket } from "lucide-react";

const CHANNELS = [
  { icon: MessageCircle, name: "WhatsApp", sla: "Respon < 2 jam kerja" },
  { icon: Ticket, name: "Dashboard Tiket", sla: "Respon < 4 jam kerja" },
  { icon: Mail, name: "Email", sla: "Respon < 1 hari kerja" },
];

export function SupportChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {CHANNELS.map((channel) => {
        const Icon = channel.icon;
        return (
          <div key={channel.name} className="rounded-xl border border-ink/10 bg-white p-5 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-emerald-500">
              <Icon size={20} className="text-white" />
            </span>
            <h3 className="mt-3 font-display font-semibold text-ink">{channel.name}</h3>
            <p className="mt-1 font-mono text-xs text-ink/50">{channel.sla}</p>
          </div>
        );
      })}
    </div>
  );
}