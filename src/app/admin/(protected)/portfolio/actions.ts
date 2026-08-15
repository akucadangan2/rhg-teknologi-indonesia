"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("portfolio_projects").insert({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: (formData.get("category") as string) || null,
    image_url: (formData.get("image_url") as string) || null,
    is_published: formData.get("is_published") === "on",
    sort_order: Number(formData.get("sort_order") || 0),
  });
  revalidatePath("/admin/portfolio");
  revalidatePath("/portofolio");
  redirect("/admin/portfolio");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();
  await supabase
    .from("portfolio_projects")
    .update({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: (formData.get("category") as string) || null,
      image_url: (formData.get("image_url") as string) || null,
      is_published: formData.get("is_published") === "on",
      sort_order: Number(formData.get("sort_order") || 0),
    })
    .eq("id", id);
  revalidatePath("/admin/portfolio");
  revalidatePath("/portofolio");
  redirect("/admin/portfolio");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  await supabase.from("portfolio_projects").delete().eq("id", id);
  revalidatePath("/admin/portfolio");
  revalidatePath("/portofolio");
}