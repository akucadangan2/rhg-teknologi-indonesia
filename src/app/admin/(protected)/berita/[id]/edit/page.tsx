import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { services } from "@/lib/data/services";
import { updatePost } from "../../actions";

const inputClass =
  "mt-1 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-brand";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from("blog_posts").select("*").eq("id", id).single();

  if (!post) return notFound();

  const updateWithId = updatePost.bind(null, id);

  return (
    <div>
      <h1 className="font-display text-xl font-bold text-ink">Edit Artikel</h1>
      <form action={updateWithId} className="mt-6 max-w-2xl space-y-4 rounded-xl border border-ink/10 bg-white p-6">
        <div>
          <label className="block text-sm font-medium text-ink/70">Judul</label>
          <input name="title" defaultValue={post.title} required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Slug</label>
          <input name="slug" defaultValue={post.slug} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Ringkasan (excerpt)</label>
          <textarea name="excerpt" defaultValue={post.excerpt} required rows={2} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Isi Artikel</label>
          <textarea name="content" defaultValue={post.content} required rows={10} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Kategori</label>
          <select name="category" defaultValue={post.category ?? ""} className={inputClass}>
            <option value="">Tanpa kategori</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">URL Gambar Cover (opsional)</label>
          <input name="cover_image_url" defaultValue={post.cover_image_url ?? ""} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink/70">Nama Penulis</label>
          <input name="author_name" defaultValue={post.author_name} className={inputClass} />
        </div>
        <label className="flex items-center gap-2 text-sm text-ink/70">
          <input type="checkbox" name="is_published" defaultChecked={post.is_published} /> Publikasikan
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