"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT KOMPONEN ASLI ---
import Navbar from '../../../components/Navbar';
import Marquee from '../../../components/Marquee';

// --- IMPORT DATA ---
import { PRODUCTS_DATA } from '../../../lib/data';

import { 
  ArrowLeft, 
  ShieldCheck, 
  Send, 
  ShoppingCart, 
  Zap,
  CheckCircle2,
  Info,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // State untuk kontrol Media (Fisik vs Digital)
  const [view, setView] = useState<'physical' | 'digital'>('physical');
  // State untuk index gambar yang sedang aktif di slider
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Cari produk berdasarkan slug dari URL
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

  // Gunakan array 'gallery' dari lib/data.ts
  const images = product.gallery || [];

  // Fungsi navigasi slider
  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <main className="min-h-screen pb-20 bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">
      <Marquee />
      <Navbar />

      <div className="pt-48 px-6 max-w-7xl mx-auto">
        {/* Tombol Kembali */}
        <Link 
          href="/shop"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* MEDIA SECTION - DENGAN SLIDER DAN ANTI-CROP */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-black border border-white/5 overflow-hidden rounded-sm shadow-2xl group flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view === 'physical' ? (images[currentImgIndex] || 'empty') : product.imgDigital}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={view === 'physical' ? (images[currentImgIndex] || product.imgPhysical) : product.imgDigital} 
                    alt={product.name} 
                    fill 
                    // FIX: object-contain agar baju tidak terpotong
                    className="object-contain p-4 md:p-8 transition-opacity duration-500" 
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Tombol Navigasi Slider (Hanya untuk Physical View) */}
              {view === 'physical' && images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#836EF9] hover:text-black transition-all z-20 shadow-2xl"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Indikator Titik Slider */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 transition-all duration-300 ${i === currentImgIndex ? 'w-6 bg-[#836EF9]' : 'w-2 bg-white/20'}`} 
                      />
                    ))}
                  </div>
                </>
              )}
              
              {/* Toggle View Fisik / Digital Card */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl z-30">
                <button 
                  onClick={() => setView('physical')} 
                  className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all uppercase tracking-widest ${
                    view === 'physical' ? 'bg-white text-black font-bold' : 'text-white/40 hover:text-white'
                  }`}
                >
                  PHYSICAL
                </button>
                <button 
                  onClick={() => setView('digital')} 
                  className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all flex items-center gap-2 uppercase tracking-widest ${
                    view === 'digital' ? 'bg-[#836EF9] text-white font-bold shadow-[0_0_20px_rgba(131,110,249,0.4)]' : 'text-white/40 hover:text-white'
                  }`}
                >
                  GENESIS CARD <Zap size={10} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation (Hanya untuk Physical) */}
            {view === 'physical' && images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar justify-center">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`relative w-20 h-24 flex-shrink-0 border transition-all rounded-sm overflow-hidden bg-neutral-900 ${currentImgIndex === idx ? 'border-[#836EF9] opacity-100' : 'border-white/10 opacity-40 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`thumb-${idx}`} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFO SECTION */}
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
            
            <p className="text-3xl font-mono text-white mb-10 tracking-tighter font-bold">
              IDR {product.price.toLocaleString('id-ID')}
            </p>

            {/* SISTEM PEMESANAN */}
            <div className="space-y-6 mb-16">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.5em]">PLACE YOUR ORDER:</p>
              
              <a 
                href={product.links.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-4 py-5 bg-[#836EF9] text-black font-mono text-xs font-bold uppercase transition-all hover:bg-white shadow-[0_0_40px_rgba(131,110,249,0.3)] active:scale-95"
              >
                <Send size={18} /> ORDER VIA TELEGRAM
              </a>

              <div className="flex items-center justify-center gap-10 pt-6 border-t border-white/5">
                <a href={product.links.shopee} target="_blank" title="Shopee" className="text-neutral-400 hover:text-[#EE4D2D] transition-all transform hover:scale-110">
                  <ShoppingCart size={24} />
                </a>
                <a href={product.links.tokopedia} target="_blank" title="Tokopedia" className="text-neutral-400 hover:text-[#03AC0E] transition-all transform hover:scale-110">
                  <ShoppingCart size={24} />
                </a>
                <a href={product.links.tiktokshop} target="_blank" title="TikTok Shop" className="text-neutral-400 hover:text-white transition-all transform hover:scale-110">
                  <Smartphone size={24} />
                </a>
                <a href={product.links.shopify} target="_blank" title="Shopify" className="text-neutral-400 hover:text-[#95BF47] transition-all transform hover:scale-110">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            {/* DETAIL & SPESIFIKASI */}
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
    </main>
  );
}