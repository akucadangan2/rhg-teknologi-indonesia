import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { deletePost } from "./actions";

export default async function AdminBeritaPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-ink">Berita & Artikel</h1>
        <Link
          href="/admin/berita/new"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          + Tulis Artikel
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {posts?.map((post) => (
          <div key={post.id} className="flex items-center justify-between rounded-xl border border-ink/10 bg-white p-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-semibold text-ink">{post.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    post.is_published ? "bg-emerald-100 text-emerald-700" : "bg-ink/10 text-ink/50"
                  }`}
                >
                  {post.is_published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-ink/40">/{post.slug}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={`/admin/berita/${post.id}/edit`} className="font-medium text-brand hover:underline">
                Edit
              </Link>
              <ConfirmDeleteButton onDelete={deletePost.bind(null, post.id)} />
            </div>
          </div>
        ))}
        {!posts?.length && <p className="text-sm text-ink/50">Belum ada artikel.</p>}
      </div>
    </div>
  );
}