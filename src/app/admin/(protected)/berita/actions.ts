"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const title = formData.get("title") as string;
  const slugInput = (formData.get("slug") as string)?.trim();
  const slug = slugInput ? slugify(slugInput) : slugify(title);

  await supabase.from("blog_posts").insert({
    title,
    slug,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    category: (formData.get("category") as string) || null,
    cover_image_url: (formData.get("cover_image_url") as string) || null,
    author_name: (formData.get("author_name") as string) || "Tim RHG Teknologi",
    is_published: formData.get("is_published") === "on",
  });

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function updatePost(id: string, formData: FormData) {
  const supabase = await createClient();
  const title = formData.get("title") as string;
  const slugInput = (formData.get("slug") as string)?.trim();
  const slug = slugInput ? slugify(slugInput) : slugify(title);

  await supabase
    .from("blog_posts")
    .update({
      title,
      slug,
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      category: (formData.get("category") as string) || null,
      cover_image_url: (formData.get("cover_image_url") as string) || null,
      author_name: (formData.get("author_name") as string) || "Tim RHG Teknologi",
      is_published: formData.get("is_published") === "on",
    })
    .eq("id", id);

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function deletePost(id: string) {
  const supabase = await createClient();
  await supabase.from("blog_posts").delete().eq("id", id);
  revalidatePath("/admin/berita");
  revalidatePath("/berita");
}