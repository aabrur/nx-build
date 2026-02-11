export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  benefit: string;
  imgPhysical: string;
  imgDigital: string;
  stock: number;
  slug: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "G-001",
    slug: "genesis-tee-16s",
    name: "GENESIS TEE // 16S",
    type: "HEAVYWEIGHT T-SHIRT",
    price: 149000,
    description: "Cotton Combed 16s (235-250 gsm). Industrial build. High-precision screen print.",
    benefit: "Sertifikat Keaslian Digital + Kartu Koleksi Fisik.",
    imgPhysical: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    imgDigital: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
    stock: 4
  },
  // Tambahkan produk lain di sini sesuai data di isi_untuk_ai.txt tadi
];

export const ROADMAP_DATA = [
  { phase: "01", year: "2026", title: "GENESIS LAUNCH", desc: "14 Unit Micro-Batch Launch." },
  { phase: "02", year: "2026", title: "COMMUNITY", desc: "Discord Activation." },
];