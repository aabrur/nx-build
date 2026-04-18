"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  ArrowLeft, 
  ShieldCheck, 
  Send, 
  Zap,
  CheckCircle2,
  Info,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Ruler,
  Lock
} from 'lucide-react';

// ==========================================
// DATA: PRODUCTS_DATA INLINE
// ==========================================
const PRODUCTS_DATA = [
  {
    id: "G-001",
    slug: "genesis-boxy-tee",
    name: "GENESIS BOXY TEE",
    type: "0xTanda Batch #001",
    price: 168000,
    originalPrice: 249000, 
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
    stock: 6, // UPDATE STOK TOTAL 7
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
      telegram: "https://t.me/GM0xTanda",
      whatsapp: "https://wa.me/6281398621530",
      tokopedia: "https://www.tokopedia.com/0xtanda/0xtanda-genesis-boxy-tee-pria-wanita-unisex-dengan-nft-kaos-cotton-combed-16s-100-fit-boxy-oversized-modern-cut-bonus-genesis-collection-card-1734427428785194157",
      tiktokshop: "https://vt.tokopedia.com/t/ZS9eT3ML7F2cK-6q8hd/"
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

// =================================================================
// DEFINISI CUSTOM ICONS
// =================================================================
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const TokopediaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.65 15.65c.67-2.14.34-4.22-1.1-6.12-1.28-1.69-3.32-2.58-5.32-2.31l.16-.9c.27-1.52-.72-2.98-2.22-3.26C12.65 2.8 11.2 3.8 10.92 5.31l-.18 1.02c-2.02.3-3.92 1.55-4.88 3.39-1.07 2.05-.98 4.25-.13 6.31l-3.3 1.9c-.8.46-1.08 1.48-.62 2.28.46.8 1.48 1.08 2.28.62l3.37-1.94c1.37 1.37 3.23 2.11 5.25 2.11 2.5 0 4.75-1.14 6.13-3.13l1.58 2.74c.46.8 1.48 1.08 2.28.62.8-.46 1.08-1.48.62-2.28l-1.58-2.74c.3-.17.58-.36.85-.56zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    <circle cx="10" cy="12" r="1.5"/>
    <circle cx="14" cy="12" r="1.5"/>
  </svg>
);

const TikTokShopIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
     <path d="M19 14h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/>
  </svg>
);

// =================================================================
// HALAMAN UTAMA: PRODUCT DETAIL
// =================================================================
export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [view, setView] = useState<'physical' | 'digital'>('physical');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  const product = useMemo(() => 
    PRODUCTS_DATA.find(p => p.slug === params.slug), 
    [params.slug]
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center font-mono text-white p-6">
        <div className="text-center">
          <p className="text-[#836EF9] mb-4 tracking-widest">[ ERROR: ARCHIVE_NOT_FOUND ]</p>
          <Link href="/shop" className="text-xs uppercase underline hover:text-[#836EF9] transition-colors">
            Kembali ke Koleksi
          </Link>
        </div>
      </div>
    );
  }

  // Kalkulasi Diskon Otomatis
  let discountPercentage = 0;
  if (product.originalPrice && product.originalPrice > product.price) {
    discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  const images = product.gallery || [];

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length > 0) setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length > 0) setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const lightboxNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxData && lightboxData.images.length > 1) {
      setLightboxData({ ...lightboxData, currentIndex: (lightboxData.currentIndex + 1) % lightboxData.images.length });
    }
  };

  const lightboxPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxData && lightboxData.images.length > 1) {
      setLightboxData({ ...lightboxData, currentIndex: (lightboxData.currentIndex - 1 + lightboxData.images.length) % lightboxData.images.length });
    }
  };

  const handleDragEnd = (e: any, { offset }: any) => {
    if (offset.x < -50) lightboxNext(); 
    else if (offset.x > 50) lightboxPrev();
  };

  const openLightbox = () => {
    if (view === 'physical') {
      setLightboxData({ images, currentIndex: currentImgIndex });
    } else {
      setLightboxData({ images: [product.imgDigital], currentIndex: 0 });
    }
  };

  return (
    <main className="min-h-screen pb-20 bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden relative">
      <div className="pt-48 px-6 max-w-7xl mx-auto">
        <Link 
          href="/shop"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* MEDIA SECTION */}
          <div className="space-y-6">
            <div 
              className="relative aspect-square bg-black border border-white/5 overflow-hidden rounded-sm shadow-2xl group flex items-center justify-center cursor-zoom-in"
              onClick={openLightbox}
            >
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Maximize2 size={16} className="text-white" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={view === 'physical' ? (images[currentImgIndex] || 'empty') : product.imgDigital}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={view === 'physical' ? (images[currentImgIndex] || product.imgPhysical) : product.imgDigital} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-4 md:p-8" 
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {view === 'physical' && images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl">
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                      <div key={i} className={`h-1 transition-all duration-300 ${i === currentImgIndex ? 'w-6 bg-[#836EF9]' : 'w-2 bg-white/20'}`} />
                    ))}
                  </div>
                </>
              )}
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl z-30" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setView('physical')} className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all uppercase tracking-widest ${view === 'physical' ? 'bg-white text-black font-bold' : 'text-white/40 hover:text-white'}`}>
                  PHYSICAL
                </button>
                <button onClick={() => setView('digital')} className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all flex items-center gap-2 uppercase tracking-widest ${view === 'digital' ? 'bg-[#836EF9] text-white font-bold shadow-[0_0_20px_rgba(131,110,249,0.4)]' : 'text-white/40 hover:text-white'}`}>
                  GENESIS CARD <Zap size={10} fill="currentColor" />
                </button>
              </div>
            </div>

            {view === 'physical' && images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar justify-center">
                {images.map((img, idx) => (
                  <button key={idx} onClick={() => setCurrentImgIndex(idx)} className={`relative w-20 h-24 flex-shrink-0 border transition-all rounded-sm overflow-hidden bg-neutral-900 ${currentImgIndex === idx ? 'border-[#836EF9] opacity-100' : 'border-white/10 opacity-40 hover:opacity-100'}`}>
                    <Image src={img} alt={`thumb-${idx}`} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}

            {/* ======================================================== */}
            {/* PANEL LIVE STOCK INVENTORY (KHUSUS GENESIS TEE) */}
            {/* ======================================================== */}
            {product.id === "G-001" && (
              <div className="mt-6 bg-[#121212] border border-white/5 rounded-sm p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <h3 className="text-[#00FF9D] text-[10px] font-mono font-bold tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Zap size={14} /> LIVE INVENTORY
                  </h3>
                  <span className="bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse"></span>
                    TOTAL SISA: {product.stock}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Varian Putih */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">WARNA: PUTIH</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-sm text-center transition-colors hover:border-white/30">
                        <p className="text-white font-bold text-sm">L</p>
                        <p className="text-[#00FF9D] text-[9px] font-mono mt-1 font-bold tracking-widest">SISA 3</p>
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-sm text-center transition-colors hover:border-white/30">
                        <p className="text-white font-bold text-sm">XL</p>
                        <p className="text-red-400 text-[9px] font-mono mt-1 font-bold tracking-widest">SISA 1</p>
                      </div>
                    </div>
                  </div>

                  {/* Varian Hitam */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">WARNA: HITAM</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-sm text-center transition-colors hover:border-white/30">
                        <p className="text-white font-bold text-sm">L</p>
                        <p className="text-red-400 text-[9px] font-mono mt-1 font-bold tracking-widest">SISA 0</p>
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-sm text-center transition-colors hover:border-white/30">
                        <p className="text-white font-bold text-sm">XL</p>
                        <p className="text-yellow-400 text-[9px] font-mono mt-1 font-bold tracking-widest">SISA 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ======================================================== */}

            {product.sizeChart && (
              <div className="mt-8 bg-[#121212] border border-white/5 rounded-sm p-6 relative group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#836EF9] text-[10px] font-mono font-bold tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Ruler size={16} /> PANDUAN UKURAN (SIZE CHART)
                  </h3>
                  <button onClick={() => setLightboxData({ images: [product.sizeChart as string], currentIndex: 0 })} className="text-neutral-500 hover:text-white transition-colors">
                    <Maximize2 size={16} />
                  </button>
                </div>
                <div className="relative w-full aspect-[4/3] bg-black rounded-sm overflow-hidden cursor-zoom-in border border-white/5" onClick={() => setLightboxData({ images: [product.sizeChart as string], currentIndex: 0 })}>
                  <Image src={product.sizeChart} alt="Size Chart 0xTanda" fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="font-mono text-xs font-bold tracking-widest uppercase bg-black/80 px-4 py-2 rounded-full border border-white/10">Klik untuk Zoom</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INFORMASI PRODUK */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[#836EF9] font-mono text-[10px] mb-6 uppercase tracking-[0.4em]">
              <ShieldCheck size={16} /> VERIFIED PHYGITAL ENTITY
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-2 tracking-tighter leading-none">
              {product.name}
            </h1>
            <p className="text-neutral-500 font-mono text-xs mb-8 tracking-widest uppercase">
              {product.type}
            </p>
            
            <div className="mb-10">
              {discountPercentage > 0 && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-lg md:text-xl text-neutral-500 line-through">
                    IDR {product.originalPrice?.toLocaleString('id-ID')}
                  </span>
                  <span className="font-mono text-[10px] bg-[#00FF9D] text-black px-2 py-1 rounded-sm font-bold tracking-wider shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                    LIMITED {discountPercentage}% OFF
                  </span>
                </div>
              )}
              <p className="text-3xl md:text-5xl font-mono text-white tracking-tighter font-bold">
                IDR {product.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="space-y-6 mb-16">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.5em]">PLACE YOUR ORDER:</p>
              
              <a href={product.links.telegram} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-4 py-5 bg-[#836EF9] text-black font-mono text-xs font-bold uppercase transition-all hover:bg-white shadow-[0_0_40px_rgba(131,110,249,0.3)] active:scale-95">
                <Send size={18} /> ORDER VIA TELEGRAM
              </a>

              <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/5 flex-wrap">
                {product.links.whatsapp && (
                  <a href={product.links.whatsapp} target="_blank" title="WhatsApp" className="text-neutral-400 hover:text-[#25D366] transition-all transform hover:scale-110">
                    <WhatsAppIcon className="w-8 h-8" />
                  </a>
                )}
                {product.links.tokopedia && (
                  <a href={product.links.tokopedia} target="_blank" title="Tokopedia" className="text-neutral-400 hover:text-[#03AC0E] transition-all transform hover:scale-110">
                    <TokopediaIcon className="w-8 h-8" />
                  </a>
                )}
                {product.links.tiktokshop && (
                  <a href={product.links.tiktokshop} target="_blank" title="TikTok Shop" className="text-neutral-400 hover:text-white transition-all transform hover:scale-110">
                    <TikTokShopIcon className="w-8 h-8" />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-12 font-mono text-[11px] uppercase tracking-wider leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">DESKRIPSI PRODUK</h3>
                <div className="space-y-4 text-neutral-400 normal-case tracking-normal leading-relaxed text-sm">
                  <p>{product.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-10">
                <div className="space-y-4">
                  <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">SPESIFIKASI</h3>
                  <ul className="space-y-2 text-neutral-300">
                    {product.specs?.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">KARAKTERISTIK</h3>
                  <ul className="space-y-2 text-neutral-300">
                    {product.features?.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/5 pt-10 space-y-4">
                <h3 className="text-[#836EF9] font-bold tracking-[0.3em]">YANG DIDAPATKAN</h3>
                <ul className="space-y-3 text-neutral-300">
                  {product.includes?.map((inc, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-[#00FF9D] shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 text-[#836EF9] mb-3">
                  <Info size={14} />
                  <span className="font-bold tracking-[0.2em]">PENTING</span>
                </div>
                <p className="text-[10px] text-neutral-500 normal-case tracking-normal leading-relaxed">
                  Akses digital hanya diberikan kepada pembeli resmi produk fisik. Tidak ada penjualan NFT secara terpisah. Produk ini bukan instrumen investasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxData(null)}
          >
            <button className="absolute top-6 right-6 z-[210] p-2 bg-white/10 rounded-full hover:bg-[#836EF9] hover:text-black transition-all" onClick={() => setLightboxData(null)}>
              <X size={24} />
            </button>

            <div className="relative w-full h-full max-w-5xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div key={lightboxData.currentIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }} className="relative w-full h-full cursor-grab active:cursor-grabbing" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1} onDragEnd={handleDragEnd}>
                <Image src={lightboxData.images[lightboxData.currentIndex]} alt="Zoomed" fill className="object-contain" priority draggable="false" />
              </motion.div>

              {lightboxData.images.length > 1 && (
                <>
                  <button onClick={lightboxPrev} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <ChevronLeft size={40} />
                  </button>
                  <button onClick={lightboxNext} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <ChevronRight size={40} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {lightboxData.images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === lightboxData.currentIndex ? 'w-8 bg-[#836EF9]' : 'w-2 bg-white/30'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}