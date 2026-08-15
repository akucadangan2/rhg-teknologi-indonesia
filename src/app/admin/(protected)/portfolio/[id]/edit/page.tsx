import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { services } from "@/lib/data/services";
import { updateProject } from "../../actions";

const inputClass =
  "mt-1 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-brand";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase.from("portfolio_projects").select("*").eq("id", id).single();

  if (!project) return notFound();

  const updateWithId = updateProject.bind(null, id);

  return (
    <div>
      <h1 className="font-display text-xl font-bold text-ink">Edit Project</h1>
      <form action={updateWithId} className="mt-6 max-w-lg space-y-4 rounded-xl border border-ink/10 bg-white p-6">
        <div>
          <label className="block text-sm font-medium text-ink/70">Judul</label>
          <input name="title" defaultValue={project.title} required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Deskripsi</label>
          <textarea name="description" defaultValue={project.description} required rows={3} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Kategori</label>
          <select name="category" defaultValue={project.category ?? ""} className={inputClass}>
            <option value="">Tanpa kategori</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">URL Gambar (opsional)</label>
          <input name="image_url" defaultValue={project.image_url ?? ""} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Urutan</label>
          <input type="number" name="sort_order" defaultValue={project.sort_order} className={inputClass} />
        </div>
        <label className="flex items-center gap-2 text-sm text-ink/70">
          <input type="checkbox" name="is_published" defaultChecked={project.is_published} /> Publikasikan
        </label>
        <button
          type="submit"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}