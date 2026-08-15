export function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-ink/15 px-3 py-1 font-mono text-xs text-ink/70">
      {label}
    </span>
  );
}