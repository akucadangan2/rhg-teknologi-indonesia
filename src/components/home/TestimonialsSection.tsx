import { Star } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { FadeInSection } from "@/components/motion/FadeInSection";

export async function TestimonialsSection() {
  const supabase = await createClient();
  const { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("id, client_name, client_role, content, rating")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) console.error(error);
  if (!testimonials?.length) return null;

  return (
    <FadeInSection className="mx-auto block max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
        Apa Kata Klien Kami
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-xl border border-ink/10 bg-white p-6">
            {t.rating && (
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-brand text-brand" : "text-ink/15"}
                  />
                ))}
              </div>
            )}
            <p className="mt-3 text-sm text-ink/70">&ldquo;{t.content}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-ink">{t.client_name}</p>
            {t.client_role && <p className="text-xs text-ink/50">{t.client_role}</p>}
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}