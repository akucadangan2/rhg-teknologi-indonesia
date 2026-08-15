"use client";

import { useTransition } from "react";

export function ConfirmDeleteButton({
  onDelete,
  label = "Hapus",
  confirmText = "Yakin mau menghapus ini?",
}: {
  onDelete: () => Promise<void>;
  label?: string;
  confirmText?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        if (confirm(confirmText)) startTransition(() => onDelete());
      }}
      className="font-medium text-red-600 hover:underline disabled:opacity-50"
    >
      {isPending ? "Menghapus..." : label}
    </button>
  );
}