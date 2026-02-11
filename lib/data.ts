// lib/data.ts
export const ASSETS = {
  logoMain: "/branding/logo-0xtanda.png",
  logoIcon: "/branding/logo-0xtanda-icon.png",
};

export type Product = {
  id: number;
  name: string;
  priceIDR: number;
  type: string;
  desc: string;
  nftBenefit: string;
  imgPhysical: string;
  imgNFT: string;
  links: {
    tokopedia: string;
    shopee: string;
    tiktok: string;
    whatsapp: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "GENESIS TEE // 16S",
    priceIDR: 149000,
    type: "Heavyweight T-Shirt",
    desc:
      "Spesifikasi Industrial: Cotton Combed 16s (235-250 gsm). Struktur kain kaku dan kokoh. Sablon presisi tinggi. Diproduksi terbatas hanya 14 unit untuk menjaga eksklusivitas pemegang Genesis.",
    nftBenefit: "Sertifikat Keaslian Digital + Kartu Koleksi Fisik",
    imgPhysical: "https://placehold.co/600x800/1a1a1a/white?text=GENESIS+TEE+16s",
    imgNFT: "https://placehold.co/600x800/836EF9/white?text=ART+COLLECTION",
    links: {
      tokopedia: "https://tokopedia.com/0xtanda",
      shopee: "https://shopee.co.id/0xtanda",
      tiktok: "https://tiktok.com/@0xtanda",
      whatsapp:
        "https://wa.me/6281234567890?text=Halo%200xTanda,%20saya%20tertarik%20dengan%20Genesis%20Tee%2016s",
    },
  },
  {
    id: 2,
    name: "PROTOKOL HOODIE",
    priceIDR: 499000,
    type: "Heavyweight Hoodie",
    desc:
      "Fleece tebal anti-angin. Potongan oversized dengan drop-shoulder. Dilengkapi saku tersembunyi untuk menyimpan Kartu Akses.",
    nftBenefit: "Sertifikat Keaslian Digital + Akses Event",
    imgPhysical: "https://placehold.co/600x800/2a2a2a/white?text=PROTOKOL+HOODIE",
    imgNFT: "https://placehold.co/600x800/836EF9/white?text=ART+COLLECTION",
    links: {
      tokopedia: "https://tokopedia.com/0xtanda",
      shopee: "https://shopee.co.id/0xtanda",
      tiktok: "https://tiktok.com/@0xtanda",
      whatsapp:
        "https://wa.me/6281234567890?text=Halo%200xTanda,%20saya%20tertarik%20dengan%20Protokol%20Hoodie",
    },
  },
  {
    id: 3,
    name: "ENKRIPSI CAP",
    priceIDR: 189000,
    type: "Headwear",
    desc:
      "Profil Dad Hat klasik. Bordir logo ikon 'X' di panel depan. Material twill premium yang tahan lama.",
    nftBenefit: "Digital Membership Card",
    imgPhysical: "https://placehold.co/600x800/000000/white?text=ENKRIPSI+CAP",
    imgNFT: "https://placehold.co/600x800/836EF9/white?text=ART+COLLECTION",
    links: {
      tokopedia: "https://tokopedia.com/0xtanda",
      shopee: "https://shopee.co.id/0xtanda",
      tiktok: "https://tiktok.com/@0xtanda",
      whatsapp:
        "https://wa.me/6281234567890?text=Halo%200xTanda,%20saya%20tertarik%20dengan%20Enkripsi%20Cap",
    },
  },
];

export const ROADMAP_DATA = [
  {
    phase: "FASE 01",
    year: "Q1 2026",
    title: "GENESIS LAUNCH",
    status: "active",
    desc: "Peluncuran 14 Unit Micro-Batch.",
    img: "https://placehold.co/600x400/222/FFF?text=FOTO+PRODUKSI",
  },
  {
    phase: "FASE 02",
    year: "Q2 2026",
    title: "COMMUNITY BUILDING",
    status: "upcoming",
    desc: "Aktivasi Discord privat.",
    img: "https://placehold.co/600x400/222/FFF?text=KOMUNITAS",
  },
  {
    phase: "FASE 03",
    year: "Q3 2026",
    title: "EXPANSION BATCH",
    status: "upcoming",
    desc: "Restock varian best-seller.",
    img: "https://placehold.co/600x400/222/FFF?text=EKSPANSI+PRODUK",
  },
  {
    phase: "FASE 04",
    year: "Q4 2026",
    title: "DIGITAL UPGRADE",
    status: "upcoming",
    desc: "Integrasi fitur Connect Wallet.",
    img: "https://placehold.co/600x400/222/FFF?text=WEBSITE+V2",
  },
  {
    phase: "FASE 05",
    year: "2027",
    title: "WOMENSWEAR",
    status: "upcoming",
    desc: "Ekspansi ke segmen pakaian wanita.",
    img: "https://placehold.co/600x400/222/FFF?text=WOMENSWEAR",
  },
];
