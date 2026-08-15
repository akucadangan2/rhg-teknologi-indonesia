import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./actions";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/portfolio", label: "Portofolio" },
  { href: "/admin/berita", label: "Berita" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-paper">
      <aside className="hidden h-screen w-56 shrink-0 flex-col border-r border-ink/10 bg-white md:flex">
        <div>
          <div className="flex items-center gap-2 border-b border-ink/10 px-5 py-4">
            <Image src="/logo.png" alt="RHG Teknologi Indonesia" width={28} height={28} className="rounded-md" />
            <span className="font-display text-sm font-semibold text-ink">Admin Panel</span>
          </div>
          <nav className="flex flex-col gap-1 p-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t border-ink/10 p-3">
          <p className="truncate px-3 py-1 text-xs text-ink/40">{user.email}</p>
          <form action={logout}>
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50">
              Keluar
            </button>
          </form>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-ink/10 bg-white px-6 py-3 md:hidden">
          <span className="font-display text-sm font-semibold text-ink">Admin Panel</span>
          <form action={logout}>
            <button className="text-sm font-medium text-red-600">Keluar</button>
          </form>
        </header>
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}