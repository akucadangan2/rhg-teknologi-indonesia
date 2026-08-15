import Link from "next/link";
import { motion } from "framer-motion";
import { serviceThemes } from "@/lib/data/service-theme";
import { getServiceBySlug } from "@/lib/data/services";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string | null;
  cover_image_url: string | null;
  published_at: string;
};

export function BlogCard({ post }: { post: Post }) {
  const service = post.category ? getServiceBySlug(post.category) : undefined;
  const theme = post.category ? serviceThemes[post.category] : undefined;
  const Icon = theme?.icon;
  const date = new Date(post.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/berita/${post.slug}`} className="group block h-full">
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all group-hover:-translate-y-1 ${
          theme?.ring ?? ""
        }`}
      >
        {post.cover_image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image_url} alt={post.title} className="h-40 w-full object-cover" />
        ) : (
          <div
            className={`flex h-40 w-full items-center justify-center bg-gradient-to-br ${
              theme?.gradient ?? "from-brand to-circuit"
            }`}
          >
            {Icon && <Icon size={32} className="text-white/80" />}
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2">
            {service && (
              <span className={`font-mono text-xs font-medium ${theme?.chip ?? "text-brand"}`}>
                {service.code}
              </span>
            )}
            <span className="font-mono text-xs text-ink/40">{date}</span>
          </div>
          <h3 className="mt-2 font-display text-lg font-bold text-ink">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm text-ink/60">{post.excerpt}</p>
          <span className="mt-4 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
            Baca selengkapnya &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}