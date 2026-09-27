"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/berita", label: "Berita" },
  { href: "/tentang", label: "Tentang Kami" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f7f7f5]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-[78px] sm:px-6 md:px-8 lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="RHG Teknologi Indonesia"
            className="group relative z-10 flex shrink-0 items-center"
          >
            <div className="relative h-[42px] w-[170px] sm:h-[46px] sm:w-[190px] lg:h-[50px] lg:w-[205px]">
              <Image
                src="/logo-full.png"
                alt="RHG Teknologi Indonesia"
                fill
                priority
                sizes="(max-width: 640px) 170px, (max-width: 1024px) 190px, 205px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-2 md:flex">
            <nav className="flex items-center">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? "text-[#17191c]"
                        : "text-slate-500 hover:text-[#17191c]"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#ff6f0f] transition-all duration-300 ${
                        active
                          ? "w-4"
                          : "w-0 group-hover:w-4"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="ml-3 h-6 w-px bg-black/[0.08]" />

            <Link
              href="/kontak"
              className="group ml-3 inline-flex items-center gap-2 rounded-full bg-[#17191c] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(15,23,42,0.15)]"
            >
              Kontak
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#17191c] transition active:scale-95 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#f7f7f5] transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex min-h-dvh flex-col px-5 pb-8 pt-[104px]">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center justify-between border-b border-black/[0.07] py-5 transition ${
                    active
                      ? "text-[#17191c]"
                      : "text-slate-500"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 40}ms`
                      : "0ms",
                  }}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[10px] font-bold text-[#ff6f0f]">
                      0{index + 1}
                    </span>

                    <span className="text-[22px] font-black tracking-[-0.03em]">
                      {link.label}
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-transform group-active:translate-x-0.5 group-active:-translate-y-0.5" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Punya project?
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Diskusikan kebutuhan website, aplikasi, backend, GIS, atau sistem
              digital bersama RHG.
            </p>

            <Link
              href="/kontak"
              className="mt-6 flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white"
            >
              Konsultasi Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex items-center justify-between border-t border-black/[0.07] pt-5 text-[10px] text-slate-400">
              <span>PT RHG Teknologi Indonesia</span>
              <span>Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}