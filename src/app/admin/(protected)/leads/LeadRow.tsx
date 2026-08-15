"use client";

import { useTransition } from "react";
import { updateLeadStatus } from "./actions";

export type Lead = {
  id: string;
  created_at: string;
  name: string;
  contact: string;
  service_interest: string | null;
  message: string;
  status: string;
};

const STATUS_OPTIONS = ["baru", "diproses", "selesai"];

export function LeadRow({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();
  const date = new Date(lead.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <tr className="border-b border-ink/5 last:border-0">
      <td className="whitespace-nowrap px-4 py-3 text-ink/60">{date}</td>
      <td className="px-4 py-3 font-medium text-ink">{lead.name}</td>
      <td className="px-4 py-3 text-ink/60">{lead.contact}</td>
      <td className="px-4 py-3 text-ink/60">{lead.service_interest ?? "-"}</td>
      <td className="max-w-xs truncate px-4 py-3 text-ink/60" title={lead.message}>
        {lead.message}
      </td>
      <td className="px-4 py-3">
        <select
          defaultValue={lead.status}
          disabled={isPending}
          onChange={(e) => startTransition(() => updateLeadStatus(lead.id, e.target.value))}
          className="rounded-lg border border-ink/15 px-2 py-1 text-xs"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}