import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? `${base} bg-gradient-to-r from-brand to-brand-dark text-white shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5`
      : `${base} border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/5`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}