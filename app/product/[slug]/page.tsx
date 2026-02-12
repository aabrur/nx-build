"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// Import komponen dari folder components (naik 3 level folder)
import Navbar from '../../../components/Navbar';
import CustomCursor from '../../../components/CustomCursor';
import Marquee from '../../../components/Marquee';

// Import data produk dari folder lib
import { PRODUCTS_DATA } from '../../../lib/data';

import { 
  ArrowLeft, 
  ShieldCheck, 
  ShoppingCart, 
  ExternalLink, 
  Zap 
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [view, setView] = useState<'physical' | 'digital'>('physical');

  // Cari produk berdasarkan slug dari URL
  const product = useMemo(() => 
    PRODUCTS_DATA.find(p => p.slug === params.slug), 
    [params.slug]
  );

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center font-mono text-white p-6">
        <div className="text-center">
          <p className="text-[#836EF9] mb-4 tracking-widest">[ ERROR: ARCHIVE_NOT_FOUND ]</p>
          <button 
            onClick={() => router.push('/shop')} 
            className="text-xs uppercase underline hover:text-[#836EF9] transition-colors"
          >
            Kembali ke Koleksi
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="pt-40 px-6 max-w-7xl mx-auto">
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.push('/shop')} 
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors"
        >
          <ArrowLeft size={14} /> BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* MEDIA SECTION */}
          <div className="relative aspect-square bg-[#121212] border border-white/5 overflow-hidden group rounded-sm shadow-2xl">
            <Image 
              src={view === 'physical' ? product.imgPhysical : product.imgDigital} 
              alt={product.name} 
              fill 
              className="object-cover transition-opacity duration-700" 
              priority
            />
            
            {/* Toggle View Fisik/Digital */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl z-10">
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
                DIGITAL CARD <Zap size={10} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#836EF9] font-mono text-[10px] mb-6 uppercase tracking-[0.4em]">
              <ShieldCheck size={16} /> VERIFIED PHYGITAL ENTITY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold uppercase mb-4 tracking-tighter leading-none">
              {product.name}
            </h1>
            
            <p className="text-2xl font-mono text-white mb-10 tracking-tighter">
              IDR {product.price.toLocaleString('id-ID')}
            </p>
            
            <div className="p-6 bg-white/5 border-l-2 border-[#836EF9] font-mono mb-12">
              <p className="text-[10px] text-neutral-500 uppercase mb-3 tracking-[0.2em]">Collector Benefit:</p>
              <p className="text-xs text-neutral-300 tracking-wider leading-relaxed uppercase">
                {product.benefit}
              </p>
            </div>

            {/* SHOPPING CHANNELS - Menggunakan optional chaining (?.) agar aman saat build */}
            <div className="space-y-4">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.5em] mb-4">PILIH CHANNEL PEMBELIAN:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* SHOPEE */}
                <a 
                  href={product.links?.shopee || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#EE4D2D] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  SHOPEE <ShoppingCart size={16}/>
                </a>

                {/* TOKOPEDIA */}
                <a 
                  href={product.links?.tokopedia || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#03AC0E] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  TOKOPEDIA <ShoppingCart size={16}/>
                </a>

                {/* TIKTOK SHOP */}
                <a 
                  href={product.links?.tiktokshop || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-black border border-white/10 text-white font-mono text-[11px] font-bold uppercase transition-all hover:bg-white hover:text-black active:scale-95 shadow-xl"
                >
                  TIKTOK SHOP <ExternalLink size={16}/>
                </a>

                {/* SHOPIFY */}
                <a 
                  href={product.links?.shopify || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#95BF47] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  SHOPIFY <ShoppingCart size={16}/>
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
              <p className="font-mono text-[10px] text-neutral-600 leading-relaxed uppercase tracking-widest leading-relaxed">
                DETAIL MATERIAL: {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}