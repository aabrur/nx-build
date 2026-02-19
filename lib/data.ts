/**
 * 0xTanda - Single Source of Truth
 * Data produk diperbarui dengan ekstensi .png dan penamaan file spesifik (_front/_back).
 * File ini mengelola konten untuk katalog Shop dan halaman Detail Produk.
 */

export interface Product {
  id: string | number;
  name: string;
  type: string;
  price: number;
  description: string;
  specs: string[];
  features: string[];
  includes: string[];
  stock: number;
  slug: string;
  imgPhysical: string; // Gambar utama untuk tampilan kartu di halaman Shop
  imgDigital: string;   // Gambar untuk tampilan Digital Card / NFT
  gallery: string[];    // Kumpulan gambar untuk slider (Mockup & Model)
  isPlaceholder?: boolean;
  links: {
    telegram: string;
    tokopedia?: string;
    shopee?: string;
    tiktokshop?: string;
    shopify?: string;
  };
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "G-001",
    slug: "genesis-boxy-tee",
    name: "GENESIS BOXY TEE",
    type: "0xTanda Batch #001",
    price: 170000,
    description: "Genesis Boxy Tee adalah rilisan perdana dari 0xTanda dengan pendekatan phygital: produk fisik berkualitas yang dilengkapi akses digital sebagai nilai tambah. Kaos ini menggunakan bahan cotton combed heavyweight dengan struktur tebal dan potongan boxy modern. Bagian depan menampilkan logo 0xTanda dalam ukuran minimal. Bagian belakang menampilkan ilustrasi karakter cyborg dengan sentuhan warna kontras sebagai representasi konsep “One Entity // Dual Existence”. Setiap pembelian akan mendapatkan Genesis Collection Card sebagai bonus kepemilikan fisik.",
    specs: [
      "Nama: Genesis Boxy Tee",
      "Batch: #001 (Limited Release)",
      "Material: 100% Cotton Combed 16s Heavyweight",
      "Gramasi: ±235–245 gsm",
      "Fit: Boxy Oversized / Modern Cut",
      "Sablon: DFT High-Density Print",
      "Warna: Hitam & Putih",
      "Ukuran: L & XL"
    ],
    features: [
      "Kain tebal dan berstruktur",
      "Tidak tipis dan tidak mudah melar",
      "Cocok untuk daily wear",
      "Detail cetak tajam dan solid"
    ],
    includes: [
      "1 Kaos Genesis Boxy Tee",
      "1 Genesis Collection Card (dengan kode akses)",
      "1 Akses digital resmi 0xTanda (diberikan setelah verifikasi)"
    ],
    stock: 14,
    // Menggunakan mockup belakang hitam sebagai gambar utama katalog
    imgPhysical: "/product/gen1/mockup/Gen_Batch_1_Black_Tshirt_back.png",
    imgDigital: "/product/gen1/nft/Genesis-Collcetion-Card-0xTanda.png",
    // Daftar gambar lengkap untuk fitur slider di halaman produk
    gallery: [
      "/product/gen1/mockup/Gen_Batch_1_Black_Tshirt_back.png",
      "/product/gen1/mockup/Gen_Batch_1_Black_Tshirt_front.png",
      "/product/gen1/mockup/Gen_Batch_1_White_Tshirt_back.png",
      "/product/gen1/mockup/Gen_Batch_1_White_Tshirt_front.png",
      "/product/gen1/model/Model-1-front-gen-1.png",
      "/product/gen1/model/Model-1-back-gen-1.png",
      "/product/gen1/model/Model-2-front-gen-1.png",
      "/product/gen1/model/Model-2-back-gen-1.png",
    ],
    links: {
      telegram: "https://t.me/rempeyek_0",
      tokopedia: "https://tokopedia.com/oxtanda",
      shopee: "https://shopee.co.id/oxtanda",
      tiktokshop: "https://tiktok.com/@oxtanda/shop",
      shopify: "https://oxtanda.myshopify.com"
    }
  },
  // Produk Placeholder (Coming Soon)
  {
    id: "PL-002",
    slug: "archive-02-placeholder",
    name: "ARCHIVE_02 // ???",
    type: "Upcoming Phygital Release",
    price: 0,
    description: "Dokumen terenkripsi. Detail produk akan tersedia pada fase pengembangan berikutnya.",
    specs: [],
    features: [],
    includes: [],
    stock: 0,
    imgPhysical: "", 
    imgDigital: "",
    gallery: [],
    isPlaceholder: true,
    links: { telegram: "" }
  },
  {
    id: "PL-003",
    slug: "archive-03-placeholder",
    name: "ARCHIVE_03 // ???",
    type: "Upcoming Phygital Release",
    price: 0,
    description: "Dokumen terenkripsi. Detail produk akan tersedia pada fase pengembangan berikutnya.",
    specs: [],
    features: [],
    includes: [],
    stock: 0,
    imgPhysical: "", 
    imgDigital: "",
    gallery: [],
    isPlaceholder: true,
    links: { telegram: "" }
  }
];

export const ROADMAP_DATA = [
  { phase: "PHASE 01", year: "2026", title: "THE GENESIS", desc: "Peluncuran batch pertama 14 unit eksklusif untuk pendiri awal." },
  { phase: "PHASE 02", year: "2026", title: "DIGITAL FUSION", desc: "Integrasi penuh aset digital ke dalam infrastruktur Monad." },
  { phase: "PHASE 03", year: "2026", title: "THE WAR ROOM", desc: "Pembukaan akses komunitas VIP bagi pemegang Royal Genesis." },
  { phase: "PHASE 04", year: "2026", title: "ARCHIVE 02", desc: "Ekspansi koleksi utilitas dengan material industrial baru." },
  { phase: "PHASE 05", year: "2027", title: "PHYGITAL HUB", desc: "Portal verifikasi terdesentralisasi untuk ekosistem fashion." },
  { phase: "PHASE 06", year: "2027", title: "GLOBAL SYNDICATE", desc: "Kolaborasi lintas batas antara kreator digital dan pengrajin fisik." },
];

// --- MASTER DATABASE SECRET CODES (Untuk Validasi) ---
// Format Baru: Tanpa '0XT-' di depan
export const SECRET_CODES_DB = [
  "K7XM-9Q2L-4RZT", "V8P3-LQ7N-X5DW", "Z4TK-8MPR-2Q9L", "N6RX-W3P9-K2ZM", 
  "Q9VL-7X2R-M4PT", "X3QK-8LZM-5R7N", "M7ZT-2W9L-X4QP", "R5XL-9P2K-V8QW", 
  "T8QM-4ZRL-7X2P", "L2WX-9Q7R-K5ZM", "P9ZR-3XLM-8Q2T", "W4QK-7Z2P-M9RL", 
  "X8LM-2R9Q-T5ZP", "Z7QP-4XLM-9R2W", "M3ZL-8QWP-2RX9", "Q2RX-7LZM-9P4K", 
  "V9ZM-3QXL-8R2P", "T5RL-9ZQ2-X7KM", "K8QX-4RZM-2P9L", "X7PM-9LQ2-Z4RW", 
  "R2ZL-8QXM-7P4K", "W9QT-3RZL-X8PM", "P4XM-7Q2R-9ZLK", "Z8RL-2QWP-4X9M", 
  "M9QX-7R2L-Z4KP", "L7ZM-9P4Q-X2RW", "Q4RL-8ZMX-7P2K", "X2QP-9LZR-4MW8",
  "BRND-3QZL-7P2W", "DEV1-4QXM-8R2P", "ARTS-7RZM-9P4L" // Special Codes
];