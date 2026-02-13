"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Pastikan komponen Navbar dan Marquee tersedia di folder components
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
// Mengambil data produk dari Single Source of Truth di lib/data.ts
import { PRODUCTS_DATA } from '../../lib/data';
import { ArrowRight, Zap } from 'lucide-react';

/**
 * Halaman Galeri Produk 0xTanda.
 * Mengembalikan desain asli yang industrial dan minimalis.
 * Fokus pada eksplorasi detail produk dengan menghapus tombol pembelian langsung di katalog.
 */
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-brand-black pb-20 selection:bg-brand-purple selection:text-black font-sans overflow-x-hidden">
      <Marquee />
      <Navbar />

      <header className="pt-44 px-6 mb-20 text-center">
        <h2 className="font-mono text-brand-purple text-[10px] tracking-[0.5em] mb-4 uppercase">Archive Collection</h2>
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-none">
          Genesis // <span className="text-neutral-700 italic">01</span>
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-neutral-900 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden flex flex-col rounded-sm shadow-xl"
          >
            {/* Wadah Gambar Produk */}
            <div className="relative aspect-[4/5] overflow-hidden bg-black block">
              <Image 
                src={product.imgPhysical} 
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Informasi saat Hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 text-center bg-brand-black/60 backdrop-blur-sm">
                <p className="font-mono text-[9px] text-brand-purple mb-4 tracking-[0.4em]">VIEW PRODUCT LOG</p>
                <p className="text-[10px] text-neutral-400 font-mono leading-relaxed uppercase tracking-widest">
                  One Entity // Dual Existence. Includes Genesis Collection Card & Digital Twin.
                </p>
              </div>

              {/* Indikator Stok */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                <span className="font-mono text-[8px] tracking-widest text-white uppercase">STOCK_LVL: {product.stock}</span>
              </div>
            </div>

            {/* Informasi Produk dan Navigasi Detail */}
            <div className="p-8 border-t border-white/5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-2xl font-bold tracking-tighter text-white group-hover:text-brand-purple transition-colors uppercase leading-tight">
                  {product.name}
                </h3>
                <Zap size={16} className="text-brand-purple opacity-50" />
              </div>
              <p className="font-mono text-[10px] text-neutral-500 mb-6 tracking-widest uppercase">
                {product.type}
              </p>
              
              <div className="mb-8">
                <p className="font-mono text-lg font-bold tracking-tighter text-white">
                  IDR {product.price.toLocaleString('id-ID')}
                </p>
              </div>

              {/* Tombol VIEW DETAILS - Mengarahkan ke halaman spesifikasi lengkap */}
              <div className="mt-auto">
                <Link 
                  href={`/product/${product.slug}`}
                  className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 text-white font-mono text-[11px] font-bold uppercase transition-all hover:bg-white hover:text-black group/btn shadow-sm"
                >
                  VIEW DETAILS <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}