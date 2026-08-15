import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: leadsCount }, { count: portfolioCount }, { count: blogCount }, { count: newLeadsCount }] =
    await Promise.all([
      supabase.from("leads").select("*", { count: "exact", head: true }),
      supabase.from("portfolio_projects").select("*", { count: "exact", head: true }),
      supabase.from("blog_posts").select("*", { count: "exact", head: true }),
      supabase.from("leads").select("*", { count: "exact", head: true }).eq("status", "baru"),
    ]);

  const cards = [
    { label: "Leads Baru", value: newLeadsCount ?? 0, href: "/admin/leads" },
    { label: "Total Leads", value: leadsCount ?? 0, href: "/admin/leads" },
    { label: "Project Portofolio", value: portfolioCount ?? 0, href: "/admin/portfolio" },
    { label: "Artikel Berita", value: blogCount ?? 0, href: "/admin/berita" },
  ];

  return (
    <div>
      <h1 className="font-display text-xl font-bold text-ink">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl border border-ink/10 bg-white p-5 hover:border-brand/40"
          >
            <p className="font-display text-2xl font-extrabold text-ink">{card.value}</p>
            <p className="mt-1 text-sm text-ink/60">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}