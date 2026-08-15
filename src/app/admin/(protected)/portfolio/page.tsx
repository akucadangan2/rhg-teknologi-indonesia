import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { deleteProject } from "./actions";

export default async function AdminPortfolioPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-ink">Portofolio</h1>
        <Link
          href="/admin/portfolio/new"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          + Tambah Project
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects?.map((p) => (
          <div key={p.id} className="rounded-xl border border-ink/10 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-ink/40">{p.category ?? "-"}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  p.is_published ? "bg-emerald-100 text-emerald-700" : "bg-ink/10 text-ink/50"
                }`}
              >
                {p.is_published ? "Published" : "Draft"}
              </span>
            </div>
            <h3 className="mt-2 font-display font-semibold text-ink">{p.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-ink/60">{p.description}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link href={`/admin/portfolio/${p.id}/edit`} className="font-medium text-brand hover:underline">
                Edit
              </Link>
              <ConfirmDeleteButton onDelete={deleteProject.bind(null, p.id)} />
            </div>
          </div>
        ))}
        {!projects?.length && <p className="text-sm text-ink/50">Belum ada project.</p>}
      </div>
    </div>
  );
}