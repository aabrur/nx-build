export interface Product {
  id: string | number;
  name: string;
  type: string;
  price: number;
  description: string;
  benefit: string;
  imgPhysical: string;
  imgDigital: string;
  stock: number;
  slug: string;
  // Struktur links diperbarui untuk mendukung 4 platform marketplace
  links?: {
    tokopedia?: string;
    shopee?: string;
    tiktokshop?: string; // Wajib menggunakan nama key 'tiktokshop' (lowercase, disambung)
    shopify?: string;
  };
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
    stock: 14,
    links: {
      tokopedia: "https://www.tokopedia.com/oxtanda",
      shopee: "https://shopee.co.id/oxtanda",
      tiktokshop: "https://www.tiktok.com/@oxtanda/shop",
      shopify: "https://oxtanda.myshopify.com"
    }
  },
  // Tambahkan produk lain di sini jika ada...
];

export const ROADMAP_DATA = [
  { 
    phase: "FASE 01", 
    year: "2026", 
    title: "GENESIS LAUNCH", 
    desc: "14 Unit Micro-Batch Launch." 
  },
  { 
    phase: "FASE 02", 
    year: "2026", 
    title: "COMMUNITY", 
    desc: "Discord Activation." 
  },
];