"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Zap, Lock, Menu, X } from 'lucide-react';

// ==========================================
// DATA: PRODUCTS_DATA INLINE
// ==========================================
const PRODUCTS_DATA = [
  {
    id: "G-001",
    slug: "genesis-boxy-tee",
    name: "GENESIS BOXY TEE",
    type: "0xTanda Batch #001",
    price: 170000,
    originalPrice: 249000, // HARGA CORET DITAMBAHKAN DI SINI
    description: "Genesis Boxy Tee adalah rilisan perdana dari 0xTanda dengan pendekatan phygital: produk fisik berkualitas yang dilengkapi akses digital sebagai nilai tambah. Kaos ini menggunakan bahan cotton combed heavyweight dengan struktur tebal dan potongan boxy modern. Bagian depan menampilkan logo 0xTanda dalam ukuran minimal. Bagian belakang menampilkan ilustrasi karakter cyborg dengan sentuhan warna kontras sebagai representasi konsep “One Entity // Dual Existence”. Setiap pembelian akan mendapatkan Genesis Collection Card sebagai bonus kepemilikan fisik.",
    specs: [
      "Nama: Genesis Boxy Tee",
      "Batch: #001 (Limited Release)",
      "Material: 100% Cotton Combed 16s Heavyweight",
      "Gramasi: ±235–245 gsm",
      "Fit: Boxy Oversized / Modern Cut",
      "Sablon: DTF High-Density Print",
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
    stock: 12,
    imgPhysical: "/product/gen1/mockup/Batch_1_Gen_1_Black_Genesis_Boxy_Tee.png",
    imgDigital: "/product/gen1/nft/Genesis-Collcetion-Card-0xTanda.png",
    sizeChart: "/product/gen1/Size_Chart_Batch_1_Gen_1.jpg",
    gallery: [
      "/product/gen1/mockup/Batch_1_Gen_1_Black_Genesis_Boxy_Tee.png",
      "/product/gen1/mockup/Batch_1_Gen_1_White_Genesis_Boxy_Tee.png",
      "/product/gen1/model/Model-1-front-gen-1.png",
      "/product/gen1/model/Model-1-back-gen-1.png",
      "/product/gen1/model/Model-2-front-gen-1.png",
      "/product/gen1/model/Model-2-back-gen-1.png",
    ],
    links: {
      telegram: "https://t.me/rempeyek_0",
      whatsapp: "https://wa.me/6281398621530",
      tokopedia: "https://tokopedia.com/oxtanda",
      shopee: "https://shopee.co.id/oxtanda",
      tiktokshop: "https://tiktok.com/@oxtanda/shop",
      shopify: "https://oxtanda.myshopify.com"
    }
  },
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

// ==========================================
// KOMPONEN: MARQUEE
// ==========================================
function Marquee() {
  const text = "0XTANDA • PHYGITAL STREETWEAR • GENESIS BATCH 001 • JAKARTA EST. 2026 • ";
  
  return (
    <div className="fixed top-0 left-0 w-full bg-[#836EF9] text-black py-2 z-[60] overflow-hidden font-mono text-[10px] font-bold">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 italic tracking-widest">{text}</span>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// KOMPONEN: NAVBAR
// ==========================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'VERIFY', path: '/verify' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TERMINAL LOG', path: '/terminal-log' },
  ];

  return (
    <nav className="fixed top-10 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
        
        {/* LOGO ICON */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-8 h-8">
            <Image 
              src="/branding/logo-0xtanda-icon.png" 
              alt="0xTanda Icon"
              width={32}
              height={32}
              className="object-contain group-hover:rotate-12 transition-transform duration-500"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest transition-all ${
                pathname === link.path 
                ? 'bg-[#836EF9] text-black font-bold' 
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 md:hidden animate-glitch shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display font-bold tracking-tighter transition-colors uppercase ${
                pathname === link.path ? 'text-[#836EF9]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// ==========================================
// HALAMAN UTAMA: SHOP PAGE
// ==========================================
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] pb-20 selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">
      <Marquee />
      <Navbar />

      <header className="pt-44 px-6 mb-20 text-center">
        <h2 className="font-mono text-[#836EF9] text-[10px] tracking-[0.5em] mb-4 uppercase">Archive Collection</h2>
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-none text-white">
          Genesis // <span className="text-neutral-700 italic">01</span>
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => {
          const isPlaceholder = product.isPlaceholder;
          
          // Kalkulasi Diskon Otomatis (Jika ada harga coret)
          let discountPercentage = 0;
          if (product.originalPrice && product.originalPrice > product.price) {
            discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
          }

          return (
            <div 
              key={product.id} 
              className={`group relative border border-white/5 transition-all duration-500 overflow-hidden flex flex-col rounded-sm shadow-xl ${
                isPlaceholder 
                  ? 'bg-black/40 grayscale opacity-60 cursor-default' 
                  : 'bg-[#121212] hover:border-[#836EF9]/50'
              }`}
            >
              {/* Wadah Gambar Produk */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black flex items-center justify-center p-6">
                {isPlaceholder ? (
                  <div className="flex flex-col items-center gap-4 text-neutral-800">
                    <Lock size={64} strokeWidth={1} />
                    <p className="font-mono text-[9px] tracking-[1em] uppercase">Encrypted_File</p>
                  </div>
                ) : (
                  <Image 
                    src={product.imgPhysical} 
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                
                {/* Status Tag */}
                {!isPlaceholder && (
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full flex items-center gap-2 z-10">
                    <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] tracking-widest text-white uppercase">
                      Stock_Lvl: {product.stock}
                    </span>
                  </div>
                )}
              </div>

              {/* Bagian Informasi Produk */}
              <div className="p-8 border-t border-white/5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-display text-2xl font-bold tracking-tighter uppercase leading-tight transition-colors ${
                    isPlaceholder ? 'text-neutral-700' : 'text-white group-hover:text-[#836EF9]'
                  }`}>
                    {product.name}
                  </h3>
                  {!isPlaceholder && <Zap size={16} className="text-[#836EF9] opacity-50" />}
                </div>
                
                <p className="font-mono text-[10px] text-neutral-500 mb-6 tracking-widest uppercase">
                  {product.type}
                </p>
                
                {/* --- BAGIAN HARGA (DENGAN FITUR DISKON CORET) --- */}
                <div className="mb-8 flex flex-col gap-1">
                  {discountPercentage > 0 && !isPlaceholder && (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-neutral-500 line-through">
                        IDR {product.originalPrice?.toLocaleString('id-ID')}
                      </span>
                      <span className="font-mono text-[8px] bg-[#00FF9D] text-black px-2 py-0.5 rounded-sm font-bold tracking-wider">
                        {discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                  <p className={`font-mono text-xl font-bold tracking-tighter ${
                    isPlaceholder ? 'text-neutral-800' : 'text-white'
                  }`}>
                    {isPlaceholder ? 'TBA' : `IDR ${product.price.toLocaleString('id-ID')}`}
                  </p>
                </div>

                {/* Tombol Aksi */}
                <div className="mt-auto">
                  {isPlaceholder ? (
                    <div className="w-full py-4 border border-white/5 text-neutral-800 font-mono text-[10px] font-bold uppercase text-center tracking-[0.4em]">
                      [ Access_Denied ]
                    </div>
                  ) : (
                    <Link 
                      href={`/product/${product.slug}`}
                      className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-mono text-[11px] font-bold uppercase transition-all hover:bg-white hover:text-black group/btn shadow-sm"
                    >
                      View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}