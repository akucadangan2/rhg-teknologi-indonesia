import { createClient } from "@/lib/supabase/server";
import { LeadRow, type Lead } from "./LeadRow";

export default async function AdminLeadsPage() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-xl font-bold text-ink">Leads</h1>
      <div className="mt-6 overflow-x-auto rounded-xl border border-ink/10 bg-white">
        <table className="min-w-full text-sm">
          <thead className="border-b border-ink/10 bg-ink/5 text-left text-ink/60">
            <tr>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Kontak</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Pesan</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {(leads as Lead[] | null)?.map((lead) => (
              <LeadRow key={lead.id} lead={lead} />
            ))}
          </tbody>
        </table>
        {!leads?.length && <p className="p-6 text-center text-sm text-ink/50">Belum ada leads masuk.</p>}
      </div>
    </div>
  );
}