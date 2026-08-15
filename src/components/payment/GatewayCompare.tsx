const ROWS = [
  { label: "Metode Didukung", midtrans: "Kartu, VA, E-wallet, QRIS", doku: "Kartu, VA, E-wallet, QRIS", xendit: "Kartu, VA, E-wallet, QRIS, Retail" },
  { label: "Settlement Dana", midtrans: "1-2 hari kerja", doku: "1-3 hari kerja", xendit: "1-2 hari kerja" },
  { label: "Cocok Untuk", midtrans: "E-commerce & startup", doku: "Enterprise & institusi", xendit: "Startup & bisnis digital" },
  { label: "Dokumen Merchant", midtrans: "NPWP/KTP + rekening", doku: "NPWP/KTP + rekening, verifikasi lebih ketat", xendit: "NPWP/KTP + rekening" },
];

export function GatewayCompare() {
  return (
    <div className="overflow-x-auto rounded-xl border border-ink/10 bg-white">
      <div className="grid min-w-[600px] grid-cols-4 border-b border-ink/10 bg-ink/5 px-5 py-3 text-sm font-semibold text-ink">
        <span>Aspek</span>
        <span>Midtrans</span>
        <span>DOKU</span>
        <span>Xendit</span>
      </div>
      {ROWS.map((row) => (
        <div key={row.label} className="grid min-w-[600px] grid-cols-4 border-b border-ink/5 px-5 py-3 text-sm last:border-0">
          <span className="font-medium text-ink/70">{row.label}</span>
          <span className="text-ink/60">{row.midtrans}</span>
          <span className="text-ink/60">{row.doku}</span>
          <span className="text-ink/60">{row.xendit}</span>
        </div>
      ))}
    </div>
  );
}