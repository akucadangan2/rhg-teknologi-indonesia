import Image from "next/image";
import { login } from "./actions";

export const metadata = { title: "Admin Login — RHG Teknologi Indonesia" };

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="RHG Teknologi Indonesia" width={48} height={48} className="rounded-lg" />
        </div>
        <h1 className="mt-4 text-center font-display text-lg font-bold text-ink">Admin Login</h1>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            Email atau password salah.
          </p>
        )}

        <form action={login} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink/70">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/70">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink/90"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}