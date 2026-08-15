const ROWS = [
  { label: "Bahasa & Framework", android: "Kotlin + Jetpack Compose", ios: "Flutter (Dart)" },
  { label: "Distribusi", android: "Google Play Store", ios: "Apple App Store" },
  { label: "Desain Mengikuti", android: "Material Design 3", ios: "Human Interface Guidelines" },
  { label: "Push Notification", android: "Firebase Cloud Messaging", ios: "Firebase Cloud Messaging (APNs)" },
  { label: "Biometric Auth", android: "Fingerprint / Face Unlock", ios: "Face ID / Touch ID" },
  { label: "Waktu Review Store", android: "1-3 hari", ios: "1-7 hari (lebih ketat)" },
];

export function PlatformCompare() {
  return (
    <div className="overflow-x-auto rounded-xl border border-ink/10 bg-white">
      <div className="grid min-w-[500px] grid-cols-3 border-b border-ink/10 bg-ink/5 px-5 py-3 text-sm font-semibold text-ink">
        <span>Aspek</span>
        <span>Android</span>
        <span>iOS</span>
      </div>
      {ROWS.map((row) => (
        <div
          key={row.label}
          className="grid min-w-[500px] grid-cols-3 border-b border-ink/5 px-5 py-3 text-sm last:border-0"
        >
          <span className="font-medium text-ink/70">{row.label}</span>
          <span className="text-ink/60">{row.android}</span>
          <span className="text-ink/60">{row.ios}</span>
        </div>
      ))}
    </div>
  );
}