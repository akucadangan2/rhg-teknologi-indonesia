"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function submitLead(formData: FormData) {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const service_interest = formData.get("service_interest") as string;
  const message = formData.get("message") as string;

  const supabase = await createClient();

  const { error } = await supabase.from("leads").insert({
    name,
    contact,
    service_interest: service_interest || null,
    message,
  });

  if (error) {
    console.error(error);
    redirect("/kontak?error=1");
  }

  redirect("/kontak/terima-kasih");
}