import { ServiceCategory } from "@/types/service";

export const services: ServiceCategory[] = [
  {
    slug: "website",
    code: "WEB",
    title: "Pembuatan Website",
    tagline: "Company profile hingga sistem web custom",
    description:
      "Website company profile, e-commerce, sistem POS & order management, platform donasi, dashboard admin, dan web app custom sesuai kebutuhan bisnis.",
    items: [
      "Company profile & landing page",
      "Website e-commerce (storefront + admin panel)",
      "Sistem POS & manajemen order",
      "Platform donasi / crowdfunding, zakat & wakaf",
      "Dashboard admin & sistem manajemen internal",
      "Web app custom sesuai kebutuhan",
    ],
    useCases: [
      "Bisnis retail yang butuh company profile atau storefront online",
      "Toko yang mau migrasi dari sistem kasir manual/legacy ke sistem digital",
      "Organisasi yang butuh platform donasi/crowdfunding sendiri",
      "Perusahaan yang butuh dashboard admin custom untuk operasional internal",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "SSL/HTTPS",
      "Auth & Row Level Security",
      "SEO Optimization",
    ],
    sellingPoints: [
      {
        title: "Desain Custom, Bukan Template",
        description:
          "Setiap website dirancang sesuai identitas brand Anda, bukan asal pasang template generik.",
      },
      {
        title: "Performa Cepat & SEO-Friendly",
        description:
          "Dibangun dengan Next.js untuk loading cepat dan struktur yang ramah mesin pencari.",
      },
      {
        title: "Terhubung ke Sistem Bisnis",
        description:
          "Bisa diintegrasikan dengan pembayaran, inventori, atau sistem internal lain sejak awal.",
      },
      {
        title: "Bisa Dikelola Sendiri",
        description:
          "Dilengkapi dashboard admin sederhana supaya Anda bisa update konten tanpa bergantung developer.",
      },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Source Code Milik Anda" },
      { value: 7, suffix: "+", label: "Kategori Layanan Terintegrasi" },
      { value: 30, suffix: " Hari", label: "Garansi Bug Fix" },
      { value: 24, suffix: "/7", label: "Akses Monitoring Sistem" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 3jt", // TODO: ganti sesuai rate asli
        description: "Company profile atau landing page sederhana",
        features: ["Hingga 5 halaman", "Desain responsif", "Form kontak", "1x revisi desain"],
      },
      {
        name: "Business",
        price: "Mulai Rp 8jt", // TODO: ganti sesuai rate asli
        description: "Website dengan sistem custom (e-commerce, POS, dsb)",
        features: [
          "Halaman tidak terbatas",
          "Dashboard admin",
          "Integrasi payment gateway",
          "3x revisi desain",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Sistem kompleks: multi-role, integrasi banyak layanan",
        features: [
          "Arsitektur sistem custom",
          "Integrasi multi-layanan",
          "Migrasi data dari sistem lama",
          "Maintenance berkelanjutan",
        ],
      },
    ],
    faqs: [
      {
        question: "Berapa lama waktu pengerjaan website?",
        answer:
          "Tergantung kompleksitas — landing page sederhana sekitar 1-2 minggu, sistem custom seperti POS atau e-commerce bisa 3-6 minggu.",
      },
      {
        question: "Apakah source code jadi milik saya sepenuhnya?",
        answer:
          "Ya, 100% source code diserahkan ke Anda setelah project selesai, termasuk akses repository.",
      },
      {
        question: "Apakah bisa request revisi desain?",
        answer:
          "Bisa, jumlah revisi mengikuti paket yang dipilih. Revisi tambahan di luar paket dapat didiskusikan.",
      },
      {
        question: "Bagaimana proses pembayarannya?",
        answer:
          "Umumnya dibagi jadi 2 termin: DP di awal project, pelunasan setelah website selesai dan disetujui.",
      },
      {
        question: "Apakah website akan mobile-friendly dan SEO-friendly?",
        answer:
          "Ya, semua website dibangun responsif untuk mobile dan mengikuti best practice SEO dasar sejak awal development.",
      },
      {
        question: "Apakah ada garansi setelah website selesai?",
        answer:
          "Ada garansi bug fix 30 hari pasca-launch untuk memastikan sistem berjalan stabil.",
      },
    ],
  },
  {
    slug: "aplikasi-mobile",
    code: "MOBILE",
    title: "Pembuatan Aplikasi Mobile",
    tagline: "Android native maupun cross-platform",
    description:
      "Aplikasi Android native, iOS/cross-platform, aplikasi escrow, marketplace, hingga sistem multi-app (user, driver, mitra) lengkap sampai publikasi ke store.",
    items: [
      "Aplikasi Android native (Kotlin/Jetpack Compose)",
      "Aplikasi iOS & cross-platform (Flutter)",
      "Aplikasi escrow/rekber, marketplace, ride-hailing",
      "Push notification & deep-linking",
      "Publikasi ke Play Store & App Store",
    ],
    useCases: [
      "Bisnis yang butuh aplikasi Android/iOS untuk pelanggan",
      "Platform escrow/rekber atau marketplace dengan multi-role (user, mitra, admin)",
      "Layanan on-demand seperti ride-hailing atau delivery",
      "Brand yang butuh aplikasi resmi dipublish ke Play Store/App Store",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Flutter", "Firebase", "OneSignal"],
    sellingPoints: [
      {
        title: "Native Performance",
        description:
          "Dibangun dengan Kotlin/Jetpack Compose dan Flutter, bukan WebView terbungkus.",
      },
      {
        title: "Siap Publish ke Store",
        description:
          "Termasuk proses submission dan handling review policy Play Store & App Store.",
      },
      {
        title: "Arsitektur Multi-Role",
        description:
          "Mendukung banyak peran sekaligus — user, mitra, admin — dalam satu ekosistem.",
      },
{
        title: "Notifikasi Real-Time",
        description:
          "Push notification & deep-linking terintegrasi sejak awal pengembangan.",
      },
    ],
    stats: [
      { value: 2, suffix: "", label: "Platform Sekaligus: Android & iOS" },
      { value: 100, suffix: "%", label: "Native, Bukan WebView" },
      { value: 3, suffix: "+", label: "Role dalam Satu Ekosistem" },
      { value: 30, suffix: " Hari", label: "Garansi Bug Fix" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 8jt", // TODO: ganti sesuai rate asli
        description: "Aplikasi single-platform (Android atau iOS) dengan fitur dasar",
        features: [
          "1 platform (Android atau iOS)",
          "Hingga 5 halaman/fitur utama",
          "Desain UI custom",
          "1x revisi desain",
        ],
      },
      {
        name: "Business",
        price: "Mulai Rp 20jt", // TODO: ganti sesuai rate asli
        description: "Aplikasi cross-platform lengkap dengan backend",
        features: [
          "Android & iOS sekaligus",
          "Integrasi backend/API & database",
          "Push notification",
          "Publish ke Play Store & App Store",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Sistem multi-app (user, mitra, admin) untuk marketplace/on-demand",
        features: [
          "Multi-role app (user, mitra, admin)",
          "Integrasi payment gateway",
          "Real-time tracking/GPS & routing",
          "Maintenance berkelanjutan",
        ],
      },
    ],
    faqs: [
      {
        question: "Lebih baik native (Kotlin) atau Flutter?",
        answer:
          "Kotlin/Jetpack Compose dipilih kalau targetnya cuma Android dan butuh performa maksimal. Flutter cocok kalau butuh Android & iOS sekaligus dengan efisiensi waktu development lebih baik.",
      },
      {
        question: "Berapa lama waktu pengembangan aplikasi mobile?",
        answer:
          "Aplikasi single-platform dengan fitur standar sekitar 3-4 minggu. Sistem multi-app (user, mitra, admin) dengan integrasi payment/tracking bisa 1-2 bulan tergantung kompleksitas.",
      },
      {
        question: "Apakah termasuk proses publish ke Play Store/App Store?",
        answer:
          "Ya, termasuk proses submission dan handling review policy dari kedua platform sampai aplikasi live dan bisa diunduh publik.",
      },
      {
        question: "Apakah bisa diintegrasikan dengan backend yang sudah ada?",
        answer:
          "Bisa, aplikasi dapat dihubungkan ke API atau database yang sudah berjalan, atau dibangunkan backend baru sesuai kebutuhan.",
      },
      {
        question: "Apakah aplikasi bisa dipakai secara offline?",
        answer:
          "Tergantung kebutuhan fitur — bisa didesain dengan local caching/database supaya sebagian fitur tetap jalan tanpa koneksi internet.",
      },
      {
        question: "Bagaimana dengan maintenance setelah aplikasi live?",
        answer:
          "Ada garansi bug fix 30 hari pasca-launch, dan bisa dilanjutkan ke paket maintenance rutin untuk update fitur atau kompatibilitas OS terbaru.",
      },
    ],
  },
  {
    slug: "jasa-it-backend",
    code: "BACKEND",
    title: "Jasa IT & Backend Development",
    tagline: "API, migrasi data, dan infrastruktur",
    description:
      "Desain API, migrasi data dari sistem lama, sinkronisasi data real-time antar sistem, hingga setup server dan automasi proses bisnis.",
    items: [
      "Desain & pengembangan API",
      "Migrasi data dari sistem lama ke sistem baru",
      "Sinkronisasi data real-time antar sistem",
      "Setup & konfigurasi server/infra",
      "Automasi proses bisnis",
    ],
    useCases: [
      "Perusahaan dengan sistem lama yang perlu dimigrasi tanpa downtime",
      "Bisnis yang butuh dua sistem saling sinkron secara real-time",
      "Tim yang butuh API custom untuk menghubungkan aplikasi internal",
      "Operasional yang masih manual dan perlu diautomasi",
    ],
    techStack: ["Next.js API Routes", "PostgreSQL", "Supabase", "REST API", "Cron Jobs"],
    sellingPoints: [
      {
        title: "Migrasi Tanpa Downtime",
        description:
          "Perpindahan dari sistem lama direncanakan supaya operasional bisnis tidak terganggu.",
      },
      {
        title: "API Terdokumentasi",
        description: "Setiap endpoint didokumentasikan supaya mudah diintegrasikan tim lain.",
      },
      {
        title: "Automasi Proses Manual",
        description: "Proses berulang yang tadinya manual bisa dijadwalkan otomatis.",
      },
    ],
    stats: [
      { value: 0, suffix: " Menit", label: "Downtime Saat Migrasi" },
      { value: 24, suffix: "/7", label: "Uptime Monitoring" },
      { value: 100, suffix: "%", label: "Koneksi Terenkripsi SSL/TLS" },
      { value: 30, suffix: " Hari", label: "Garansi Pasca-Deploy" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 3jt", // TODO: ganti sesuai rate asli
        description: "Integrasi API sederhana atau satu sistem eksternal",
        features: ["1-2 endpoint API", "Dokumentasi dasar", "Setup server ringan"],
      },
      {
        name: "Business",
        price: "Mulai Rp 10jt", // TODO: ganti sesuai rate asli
        description: "Migrasi data + sinkronisasi antar sistem",
        features: [
          "Migrasi data dari sistem lama",
          "Sinkronisasi real-time",
          "Row Level Security",
          "Automated backup",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Infrastruktur backend kompleks, multi-sistem",
        features: [
          "Arsitektur backend custom",
          "Integrasi banyak sistem sekaligus",
          "Monitoring & access logging",
          "Maintenance berkelanjutan",
        ],
      },
    ],
    faqs: [
      {
        question: "Apakah migrasi data bisa dilakukan tanpa mematikan sistem lama?",
        answer:
          "Bisa. Migrasi direncanakan bertahap dengan verifikasi data di tiap tahap, sistem lama tetap jalan sampai sistem baru terbukti stabil.",
      },
      {
        question: "Bagaimana keamanan data selama proses migrasi?",
        answer:
          "Koneksi memakai SSL/TLS end-to-end, akses dibatasi lewat Row Level Security, dan setiap proses tercatat lewat access logging.",
      },
      {
        question: "Apa yang terjadi kalau ada error saat migrasi?",
        answer:
          "Setiap tahap migrasi diverifikasi sebelum lanjut, dan ada backup otomatis sehingga bisa rollback ke kondisi sebelumnya bila diperlukan.",
      },
      {
        question: "Apakah API yang dibuat bisa dipakai tim internal kami sendiri?",
        answer:
          "Bisa, setiap endpoint didokumentasikan supaya tim developer internal Anda juga bisa langsung menggunakannya.",
      },
    ],
  },
  {
    slug: "payment-gateway",
    code: "PAYMENT",
    title: "Integrasi Payment Gateway",
    tagline: "Pembayaran online yang terverifikasi otomatis",
    description:
      "Integrasi Midtrans, DOKU, Xendit, pembayaran QRIS, sistem billing berlangganan, dan rekonsiliasi transaksi otomatis.",
    items: [
      "Integrasi Midtrans, DOKU, Xendit",
      "Pembayaran QRIS (manual maupun webhook otomatis)",
      "Sistem billing berlangganan",
      "Rekonsiliasi transaksi & pencegahan double-counting",
    ],
    useCases: [
      "E-commerce yang butuh pembayaran online otomatis",
      "ISP/bisnis berlangganan yang butuh sistem billing",
      "Platform donasi yang butuh verifikasi pembayaran QRIS",
      "Bisnis yang masih rekonsiliasi transaksi secara manual",
    ],
    techStack: ["Midtrans", "DOKU", "Xendit", "QRIS", "Webhook"],
sellingPoints: [
      {
        title: "Rekonsiliasi Otomatis",
        description: "Transaksi tercatat otomatis lewat webhook, mengurangi risiko selisih pencatatan manual.",
      },
      {
        title: "Multi Metode Pembayaran",
        description: "Mendukung kartu, e-wallet, QRIS, hingga virtual account sesuai provider.",
      },
      {
        title: "Sesuai Standar Keamanan",
        description: "Integrasi mengikuti best practice keamanan dari provider payment gateway.",
      },
      {
        title: "Bantuan Setup Akun Gateway",
        description: "Bingung pilih atau daftar akun merchant? Kami bantu dari pemilihan provider sampai akun aktif.",
      },
    ],
    stats: [
      { value: 4, suffix: "+", label: "Provider Gateway Didukung" },
      { value: 100, suffix: "%", label: "Transaksi Terekonsiliasi Otomatis" },
      { value: 1, suffix: "-2 Hari", label: "Settlement Dana ke Rekening" },
      { value: 24, suffix: "/7", label: "Sistem Siap Terima Pembayaran" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 1.5jt", // TODO: ganti sesuai rate asli
        description: "Integrasi satu metode pembayaran (misal QRIS manual)",
        features: ["1 metode pembayaran", "Verifikasi manual", "Setup dasar"],
      },
      {
        name: "Business",
        price: "Mulai Rp 4jt", // TODO: ganti sesuai rate asli
        description: "Integrasi gateway lengkap dengan webhook otomatis",
        features: [
          "Midtrans/DOKU/Xendit",
          "Webhook otomatis & rekonsiliasi",
          "Multi metode (kartu, VA, e-wallet, QRIS)",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Billing berlangganan, multi-gateway, atau bantuan setup akun lengkap",
        features: [
          "Sistem billing berlangganan",
          "Multi-gateway sekaligus",
          "Pendampingan penuh setup akun merchant",
          "Maintenance berkelanjutan",
        ],
      },
    ],
    faqs: [
      {
        question: "Gateway mana yang paling cocok untuk bisnis saya?",
        answer:
          "Tergantung jenis bisnis — Midtrans cocok untuk e-commerce umum, DOKU untuk institusi/enterprise, Xendit untuk startup digital. Kami bantu tentukan saat konsultasi.",
      },
      {
        question: "Saya belum punya akun merchant sama sekali, bagaimana?",
        answer:
          "Tidak masalah, kami dampingi dari pendaftaran akun, penyiapan dokumen, sampai akun terverifikasi dan siap dipakai.",
      },
      {
        question: "Apakah harus punya PT, atau bisa pakai NPWP pribadi?",
        answer:
          "Kebanyakan provider mendukung merchant perorangan dengan NPWP pribadi, meski beberapa fitur lanjutan biasanya membutuhkan badan usaha. Detail dokumen dibahas saat konsultasi.",
      },
      {
        question: "Berapa lama dana masuk ke rekening setelah transaksi?",
        answer:
          "Umumnya 1-2 hari kerja tergantung provider dan metode pembayaran yang dipakai.",
      },
      {
        question: "Apakah ada biaya transaksi dari provider gateway?",
        answer:
          "Ya, setiap provider mengenakan biaya per transaksi sesuai skema mereka sendiri — ini di luar biaya development, langsung ke provider terkait.",
      },
      {
        question: "Bisa pakai lebih dari satu gateway sekaligus?",
        answer:
          "Bisa, sistem bisa dirancang mendukung beberapa provider sekaligus supaya pelanggan punya lebih banyak pilihan metode bayar.",
      },
    ],
  },
  {
    slug: "maps-gis",
    code: "GIS",
    title: "Maps & GIS / WebGIS",
    tagline: "Visualisasi & tracking berbasis lokasi",
    description:
      "WebGIS custom, visualisasi data spasial, sistem tracking real-time, dan integrasi routing untuk kebutuhan logistik maupun pemetaan wilayah.",
    items: [
      "WebGIS custom (PostGIS + MapLibre GL/Mapbox)",
      "Visualisasi data spasial & geotagging",
      "Tracking real-time (GPS, routing dengan OSRM)",
      "Integrasi delivery tracking",
    ],
    useCases: [
      "Instansi/perusahaan yang mengelola aset berbasis lokasi (irigasi, jaringan, dsb)",
      "Bisnis logistik yang butuh tracking armada secara real-time",
      "Layanan delivery yang butuh estimasi rute otomatis",
      "Proyek pemetaan wilayah atau kadaster",
    ],
    techStack: ["PostGIS", "MapLibre GL JS", "OSRM", "GeoJSON/KML"],
sellingPoints: [
      {
        title: "Data Spasial Real-Time",
        description: "Visualisasi lokasi dan pergerakan langsung dari data lapangan, bukan data statis.",
      },
      {
        title: "Routing Akurat",
        description: "Estimasi jarak dan rute dihitung otomatis menggunakan OSRM.",
      },
      {
        title: "Untuk Wilayah Kompleks",
        description: "Cocok untuk pemetaan aset, irigasi, hingga kadaster dengan banyak layer data.",
      },
      {
        title: "Sesuai Standar Tender",
        description: "Format data, sistem koordinat, dan dokumentasi teknis sesuai kebutuhan tender pemerintah maupun swasta.",
      },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Sesuai Standar BIG & Kartografi" },
      { value: 4, suffix: "+", label: "Format Data (SHP, KML, GeoJSON, WMS)" },
      { value: 2, suffix: "", label: "Sistem Koordinat: WGS84 & TM-3" },
      { value: 24, suffix: "/7", label: "Tracking Real-Time" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 5jt", // TODO: ganti sesuai rate asli
        description: "Visualisasi data spasial dasar (peta statis interaktif)",
        features: ["1-2 layer data", "Visualisasi web sederhana", "Export peta gambar"],
      },
      {
        name: "Business",
        price: "Mulai Rp 15jt", // TODO: ganti sesuai rate asli
        description: "WebGIS interaktif dengan tracking real-time",
        features: [
          "Multi-layer data spasial",
          "Tracking GPS real-time",
          "Routing dengan OSRM",
          "Export multi-format",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom / Tender",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Project skala besar untuk instansi pemerintah/swasta",
        features: [
          "Dokumentasi teknis lengkap untuk tender",
          "Sesuai standar BIG & kaidah kartografi",
          "Integrasi data eksisting instansi",
          "Maintenance & pelatihan penggunaan",
        ],
      },
    ],
    faqs: [
      {
        question: "Apakah bisa menyediakan dokumen teknis untuk keperluan tender?",
        answer:
          "Bisa, termasuk laporan metodologi, spesifikasi teknis sistem, dan dokumentasi data sesuai kebutuhan dokumen pengadaan.",
      },
      {
        question: "Format data apa saja yang didukung?",
        answer:
          "Mendukung SHP, KML, GeoJSON, serta layanan WMS/WFS untuk integrasi dengan sistem GIS lain yang sudah ada.",
      },
      {
        question: "Apakah sistem koordinat sesuai standar nasional?",
        answer:
          "Ya, mengikuti WGS84 dan sistem proyeksi TM-3 sesuai standar yang umum dipakai instansi pemetaan di Indonesia.",
      },
      {
        question: "Bisa integrasi dengan data shapefile yang sudah kami punya?",
        answer:
          "Bisa, data eksisting bisa diimpor dan digabungkan ke dalam sistem baru tanpa perlu digambar ulang dari awal.",
      },
      {
        question: "Apakah bisa dipakai untuk pengumpulan data di lapangan?",
        answer:
          "Bisa dirancang dengan dukungan input data lapangan (geotagging foto, koordinat GPS) yang tersinkron ke sistem pusat.",
      },
      {
        question: "Apakah mendukung banyak pengguna dengan hak akses berbeda?",
        answer:
          "Bisa, sistem dapat dirancang dengan role berbeda — misalnya petugas lapangan, admin, dan publik — dengan akses data yang disesuaikan.",
      },
    ],
  },
  {
    slug: "integrasi-sistem",
    code: "SISTEM",
    title: "Integrasi Sistem Khusus",
    tagline: "Jaringan, hardware, hingga IoT",
    description:
      "Integrasi jaringan Mikrotik/RouterOS, monitoring perangkat, billing hotspot/PPPoE, hingga integrasi hardware dan sistem monitoring custom.",
    items: [
      "Integrasi Mikrotik/RouterOS & monitoring OLT (SNMP)",
      "Voucher hotspot & billing PPPoE",
      "Integrasi hardware (printer barcode/struk, scanner)",
      "Sistem monitoring & IoT custom",
    ],
    useCases: [
      "ISP yang perlu monitoring perangkat jaringan dari jarak jauh",
      "Bisnis dengan hotspot/PPPoE yang perlu sistem voucher otomatis",
      "Toko yang butuh integrasi hardware seperti printer barcode",
      "Operasional yang butuh sistem monitoring custom",
    ],
    techStack: ["Mikrotik/RouterOS", "SNMP", "Cloudflare Tunnel"],
    sellingPoints: [
      {
        title: "Monitoring Jarak Jauh",
        description: "Pantau kondisi perangkat jaringan tanpa harus ke lokasi.",
      },
      {
        title: "Billing Otomatis",
        description: "Voucher dan tagihan pelanggan hotspot/PPPoE terkelola otomatis.",
      },
      {
        title: "Fleksibel untuk Hardware Custom",
        description: "Bisa diintegrasikan dengan printer, scanner, atau perangkat IoT lain.",
      },
      {
        title: "Notifikasi Real-Time",
        description: "Dapat notifikasi otomatis begitu ada perangkat down atau gangguan jaringan.",
      },
    ],
    stats: [
      { value: 24, suffix: "/7", label: "Monitoring Perangkat" },
      { value: 100, suffix: "%", label: "Voucher & Billing Otomatis" },
      { value: 0, suffix: " Manual", label: "Rekap Tagihan Pelanggan" },
      { value: 30, suffix: " Hari", label: "Garansi Setelah Setup" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Mulai Rp 2jt", // TODO: ganti sesuai rate asli
        description: "Setup jaringan dasar atau integrasi 1 perangkat",
        features: ["Konfigurasi Mikrotik/RouterOS dasar", "1 perangkat hardware", "Setup on-site"],
      },
      {
        name: "Business",
        price: "Mulai Rp 6jt", // TODO: ganti sesuai rate asli
        description: "Sistem voucher hotspot & monitoring jaringan",
        features: [
          "Sistem voucher & billing PPPoE",
          "Monitoring OLT via SNMP",
          "Notifikasi otomatis gangguan",
          "Support 30 hari",
        ],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Integrasi jaringan skala besar atau IoT custom",
        features: [
          "Multi-lokasi/multi-cabang",
          "Integrasi IoT & hardware custom",
          "Dashboard monitoring terpusat",
          "Maintenance berkelanjutan",
        ],
      },
    ],
    faqs: [
      {
        question: "Apakah bisa monitoring beberapa lokasi/cabang sekaligus?",
        answer:
          "Bisa, dashboard monitoring dapat dirancang untuk memantau banyak perangkat dari berbagai lokasi dalam satu tampilan terpusat.",
      },
      {
        question: "Apakah sistem voucher hotspot bisa terhubung ke pembayaran online?",
        answer:
          "Bisa, sistem voucher dapat diintegrasikan dengan payment gateway supaya pelanggan bisa beli akses langsung dan otomatis aktif.",
      },
      {
        question: "Perangkat merek apa saja yang didukung?",
        answer:
          "Fokus utama di ekosistem Mikrotik/RouterOS, namun integrasi hardware lain (printer, scanner, sensor IoT) disesuaikan dengan spesifikasi perangkat yang dipakai.",
      },
      {
        question: "Bagaimana kalau ada perangkat yang down di luar jam kerja?",
        answer:
          "Sistem dapat dikonfigurasi untuk mengirim notifikasi otomatis (misal lewat WhatsApp/Telegram) begitu perangkat terdeteksi offline.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    code: "SUPPORT",
    title: "Maintenance & Support",
    tagline: "Perawatan sistem berkelanjutan",
    description:
      "Perawatan rutin, bug fixing, konsultasi arsitektur teknis, serta peningkatan performa dan keamanan sistem yang sudah berjalan.",
    items: [
      "Perawatan rutin & bug fixing",
      "Konsultasi arsitektur teknis",
      "Peningkatan performa & keamanan sistem",
    ],
    useCases: [
      "Website/aplikasi yang sudah live dan butuh perawatan rutin",
      "Bisnis yang butuh respon cepat kalau ada bug atau gangguan",
      "Sistem yang perlu direview arsitekturnya sebelum scale up",
      "Tim internal yang butuh konsultasi teknis berkala",
    ],
    techStack: ["Monitoring & Logging", "Automated Backup", "Security Patching"],
    sellingPoints: [
      {
        title: "Respon Cepat",
        description: "Laporan bug atau gangguan ditindaklanjuti tanpa menunggu lama.",
      },
      {
        title: "Bukan Sekadar Perbaikan",
        description: "Termasuk rekomendasi peningkatan performa dan keamanan jangka panjang.",
      },
      {
        title: "Laporan Berkala",
        description: "Update kondisi sistem disampaikan rutin, bukan cuma waktu ada masalah.",
      },
      {
        title: "Pemeriksaan Rutin Terjadwal",
        description: "Sistem dicek berkala layaknya checkup kesehatan — bukan menunggu sampai rusak.",
      },
    ],
    stats: [
      { value: 99, suffix: ".9%", label: "Target Uptime Sistem" },
      { value: 2, suffix: " Jam", label: "Respon Awal Maksimal" },
      { value: 6, suffix: "+", label: "Poin Pemeriksaan Rutin" },
      { value: 24, suffix: "/7", label: "Monitoring Berjalan" },
    ],
    pricingTiers: [
      {
        name: "Basic",
        price: "Mulai Rp 500rb/bulan", // TODO: ganti sesuai rate asli
        description: "Monitoring dasar & bug fix ringan",
        features: ["Monitoring uptime", "Bug fix minor", "Laporan bulanan"],
      },
      {
        name: "Standard",
        price: "Mulai Rp 1.5jt/bulan", // TODO: ganti sesuai rate asli
        description: "Perawatan rutin lengkap dengan respon prioritas",
        features: [
          "Semua di paket Basic",
          "Backup otomatis terjadwal",
          "Update keamanan rutin",
          "Respon < 2 jam kerja",
        ],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Sesuai Kebutuhan", // TODO: ganti sesuai rate asli
        description: "Sistem kritikal dengan SLA khusus",
        features: [
          "SLA respon custom",
          "Dedicated monitoring dashboard",
          "Review arsitektur berkala",
          "Prioritas pengerjaan tertinggi",
        ],
      },
    ],
    faqs: [
      {
        question: "Apa bedanya paket maintenance dengan sekadar 'panggil kalau rusak'?",
        answer:
          "Maintenance rutin mencegah masalah sebelum terjadi — backup, patch keamanan, dan monitoring berjalan terus-menerus, bukan cuma reaktif setelah ada laporan.",
      },
      {
        question: "Bagaimana kalau sistem down di luar jam kerja?",
        answer:
          "Untuk paket Standard ke atas, ada jalur pelaporan darurat dengan SLA respon yang disepakati di awal, termasuk penanganan di luar jam kerja untuk kasus kritis.",
      },
      {
        question: "Apakah saya bisa upgrade/downgrade paket kapan saja?",
        answer:
          "Bisa, paket bisa disesuaikan tiap periode mengikuti kebutuhan sistem yang terus berkembang.",
      },
      {
        question: "Apakah laporan kondisi sistem diberikan rutin?",
        answer:
          "Ya, laporan kondisi sistem (uptime, backup, keamanan) disampaikan berkala sesuai paket, bukan hanya saat ada masalah.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}