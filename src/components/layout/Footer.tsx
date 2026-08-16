"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin } from "lucide-react";
import { contactInfo, legalInfo } from "@/lib/data/company";

const NAV_LINKS = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/berita", label: "Berita" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <div className="relative h-8 w-36">
            <Image
              src="/logo-full.png"
              alt="RHG Teknologi Indonesia"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 text-sm text-ink/50">
            Jasa pengembangan website, aplikasi, dan sistem IT dari ide sampai produksi.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/40">
            Navigasi
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/60 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/40">
            Kontak
          </p>
          <div className="mt-4 space-y-3">
            
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink"
            >
              <Mail size={15} className="text-brand" />
              {contactInfo.email}
            </a>
            <div className="flex items-start gap-2 text-sm text-ink/60">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand" />
              {legalInfo.domicile}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-ink/10 px-6 pt-6 text-sm text-ink/50">
        <p>{legalInfo.companyName}</p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} RHG Teknologi Indonesia. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}