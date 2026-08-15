"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-ink/50">
        <div className="relative h-8 w-36">
          <Image
            src="/logo-full.png"
            alt="RHG Teknologi Indonesia"
            fill
            className="object-contain object-left"
          />
        </div>
        <p>PT RHG Teknologi Indonesia</p>
        <p>&copy; {new Date().getFullYear()} RHG Teknologi Indonesia. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}