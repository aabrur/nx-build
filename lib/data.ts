/**
 * Data Produk 0xTanda
 * File ini adalah Single Source of Truth untuk seluruh informasi produk.
 * Struktur data diperbarui untuk mendukung fitur galeri geser (slider).
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
  // Gambar utama untuk katalog di halaman Shop
  imgPhysical: string; 
  // Gambar untuk tampilan Digital Card/NFT
  imgDigital: string;   
  // Array gambar untuk slider (Mockup + Model)
  images: string[];
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
    price: 149000,
    description: "Genesis Boxy Tee adalah rilisan perdana dari 0xTanda dengan pendekatan phygital: produk fisik berkualitas yang dilengkapi akses digital sebagai nilai tambah. Kaos ini menggunakan bahan cotton combed heavyweight dengan struktur tebal dan potongan boxy modern. Dirancang untuk memberikan siluet yang tegas dan nyaman dipakai sehari-hari. Bagian depan menampilkan logo 0xTanda dalam ukuran minimal. Bagian belakang menampilkan ilustrasi karakter cyborg dengan sentuhan warna kontras sebagai representasi konsep “One Entity // Dual Existence”.",
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
    // Gambar utama katalog (Mockup Hitam)
    imgPhysical: "/product/gen1/mockup/Gen_Batch_1_Black_Tshirt.png",
    // Gambar Digital/NFT
    imgDigital: "/product/gen1/nft/Genesis-Collcetion-Card-0xTanda_Page_1.png",
    // Daftar gambar untuk slider di halaman detail produk
    images: [
      "/product/gen1/mockup/Gen_Batch_1_Black_Tshirt.png",
      "/product/gen1/mockup/Gen_Batch_1_White_Tshirt.png",
      "/product/gen1/model/Model-1-front-gen-1.jpg",
      "/product/gen1/model/Model-1-back-gen-1.jpg",
      "/product/gen1/model/Model-2-front-gen-1.jpg",
      "/product/gen1/model/Model-2-back-gen-1.jpg",
    ],
    links: {
      telegram: "https://t.me/oxtanda_order",
      tokopedia: "https://tokopedia.com/oxtanda",
      shopee: "https://shopee.co.id/oxtanda",
      tiktokshop: "https://tiktok.com/@oxtanda/shop",
      shopify: "https://oxtanda.myshopify.com"
    }
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