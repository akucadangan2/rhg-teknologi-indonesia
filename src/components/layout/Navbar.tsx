"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  {
    href: "/layanan",
    label: "Layanan",
  },
  {
    href: "/portofolio",
    label: "Portofolio",
  },
  {
    href: "/berita",
    label: "Berita",
  },
  {
    href: "/tentang",
    label: "Tentang Kami",
  },
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

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname?.startsWith(`${href}/`)
    );
  };

  const contactActive = isActive("/kontak");

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-black/[0.06] bg-[#f7f7f5]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 md:px-8 lg:h-[80px] lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="RHG Teknologi Indonesia"
            className="group relative z-[70] flex shrink-0 items-center"
          >
            <div className="relative h-[46px] w-[180px] sm:h-[50px] sm:w-[195px] lg:h-[54px] lg:w-[215px]">
              <Image
                src="/logo-full.png"
                alt="RHG Teknologi Indonesia"
                fill
                priority
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 195px, 215px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.025]"
              />
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden items-center md:flex">
            <nav className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative flex h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200 lg:px-5 ${
                      active
                        ? "text-[#17191c]"
                        : "text-slate-500 hover:text-[#17191c]"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-[6px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#ff6f0f] transition-all duration-300 ${
                        active
                          ? "w-4"
                          : "w-0 group-hover:w-4"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mx-3 h-6 w-px bg-black/[0.08] lg:mx-4" />

            <Link
              href="/kontak"
              className={`group inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-bold transition-all duration-300 ${
                contactActive
                  ? "bg-[#ff6f0f] text-[#17191c]"
                  : "bg-[#17191c] text-white hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(15,23,42,0.15)]"
              }`}
            >
              Kontak

              <ArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  !contactActive
                    ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    : ""
                }`}
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className={`relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 md:hidden ${
              open
                ? "border-[#17191c] bg-[#17191c] text-white"
                : "border-black/[0.08] bg-white text-[#17191c]"
            }`}
          >
            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-75 opacity-0"
              }`}
            >
              <X className="h-[18px] w-[18px]" />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "-rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu className="h-[18px] w-[18px]" />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[70px] z-[55] bg-[#f7f7f5] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:top-[76px] md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex min-h-[66px] items-center justify-between border-b border-black/[0.07] transition-colors ${
                    active
                      ? "text-[#17191c]"
                      : "text-slate-500 active:text-[#17191c]"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-[9px] font-black ${
                        active
                          ? "text-[#ff6f0f]"
                          : "text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span className="text-[20px] font-black tracking-[-0.035em]">
                      {link.label}
                    </span>
                  </span>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                      active
                        ? "bg-[#fff0e5] text-[#ff6f0f]"
                        : "text-slate-300"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}

            <Link
              href="/kontak"
              className={`group flex min-h-[66px] items-center justify-between border-b border-black/[0.07] ${
                contactActive
                  ? "text-[#17191c]"
                  : "text-slate-500"
              }`}
            >
              <span className="flex items-center gap-3.5">
                <span
                  className={`font-mono text-[9px] font-black ${
                    contactActive
                      ? "text-[#ff6f0f]"
                      : "text-slate-300"
                  }`}
                >
                  05
                </span>

                <span className="text-[20px] font-black tracking-[-0.035em]">
                  Kontak
                </span>
              </span>

              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  contactActive
                    ? "bg-[#fff0e5] text-[#ff6f0f]"
                    : "text-slate-300"
                }`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </nav>

          {/* MOBILE CTA */}
          <div className="mt-auto pt-8">
            <div className="rounded-[22px] bg-[#17191c] p-5 text-white">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff8a34]">
                Start a Project
              </p>

              <h3 className="mt-2 text-[19px] font-black leading-snug tracking-[-0.03em]">
                Punya project yang ingin dibangun?
              </h3>

              <p className="mt-2 text-[12px] leading-5.5 text-white/45">
                Website, aplikasi mobile, backend, GIS, payment integration,
                atau sistem digital lainnya.
              </p>

              <Link
                href="/kontak"
                className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition active:scale-[0.98]"
              >
                Konsultasi Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-4 text-[9px] text-slate-400">
              <span>PT RHG Teknologi Indonesia</span>
              <span>Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}