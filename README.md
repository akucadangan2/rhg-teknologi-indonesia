# RHG Teknologi Indonesia — Website

Struktur awal (scaffold) website perusahaan, Next.js 15 (App Router) + TypeScript + Tailwind CSS + Supabase client. Ini kerangka struktur & halaman dasar untuk dilanjutkan development-nya, bukan produk jadi.

## Struktur folder

```
src/
├── app/
│   ├── layout.tsx            # root layout (Navbar + Footer)
│   ├── page.tsx               # homepage (Hero, ServiceGrid, ContactCTA)
│   ├── globals.css
│   ├── layanan/
│   │   ├── page.tsx           # listing semua layanan
│   │   └── [slug]/page.tsx    # detail per kategori layanan (dynamic route)
│   ├── portofolio/page.tsx
│   ├── tentang/page.tsx
│   └── kontak/page.tsx        # form konsultasi (belum terhubung ke backend)
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/               # Hero, ServiceGrid, ContactCTA
│   └── ui/                     # Button, ServiceCard
├── lib/
│   ├── supabase/               # client.ts (browser), server.ts (server component)
│   └── data/services.ts        # sumber data 7 kategori jasa
└── types/service.ts
```

## Cara pakai

```bash
npm install
cp .env.example .env.local   # isi kredensial Supabase & payment gateway
npm run dev
```

## Yang masih perlu dikerjakan (TODO)

- Halaman `/kontak`: hubungkan form ke API route / Supabase table / WhatsApp API
- Halaman `/portofolio`: ganti data placeholder dengan project riil
- Halaman `/tentang`: lengkapi visi/misi & info legalitas PT
- Setup project Supabase (buat `.env.local`, jalankan migrasi tabel sesuai kebutuhan)
- Refine visual design (warna, tipografi, komponen) — struktur token warna ada di `tailwind.config.ts` (`ink`, `paper`, `brand`) tinggal disesuaikan
- Tambah SEO metadata per halaman, sitemap, robots.txt
- Tambah halaman blog/artikel kalau diperlukan untuk SEO

## Catatan

Data 7 kategori layanan di `lib/data/services.ts` sinkron dengan katalog jasa (lihat file terpisah `katalog-jasa-rhg-teknologi.md` dari sesi sebelumnya). Kalau kategori berubah, cukup edit array di file itu — halaman listing dan detail otomatis mengikuti.
