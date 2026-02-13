export interface Product {
  id: string | number;
  name: string;
  type: string;
  price: number;
  description: string;
  specs: string[];
  features: string[];
  includes: string[];
  imgPhysical: string;
  imgDigital: string;
  stock: number;
  slug: string;
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
    type: "Batch #001 (Limited Release)",
    price: 149000,
    description: "Genesis Boxy Tee adalah rilisan perdana dari 0xTanda dengan pendekatan phygital: produk fisik berkualitas yang dilengkapi akses digital sebagai nilai tambah. Kaos ini menggunakan bahan cotton combed heavyweight dengan struktur tebal dan potongan boxy modern. Dirancang untuk memberikan siluet yang tegas dan nyaman dipakai sehari-hari.",
    specs: [
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
    imgPhysical: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    imgDigital: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
    stock: 14,
    links: {
      telegram: "https://t.me/oxtanda_order",
      tokopedia: "https://tokopedia.com/oxtanda",
      shopee: "https://shopee.co.id/oxtanda",
      tiktokshop: "https://tiktok.com/@oxtanda/shop",
      shopify: "https://oxtanda.myshopify.com"
    }
  }
];