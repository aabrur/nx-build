"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Menggunakan jalur relatif yang diperbaiki sesuai dengan struktur folder App Router
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
import CustomCursor from '../../components/CustomCursor';
import { PRODUCTS_DATA } from '../../lib/data';
import { ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * Halaman Galeri Produk 0xTanda.
 * Menampilkan koleksi archive dengan desain industrial dan sistem navigasi yang diperbaiki.
 */
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-brand-black pb-20">
      <CustomCursor />
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
          <Link 
            key={product.id} 
            href={`/product/${product.slug}`}
            className="group relative bg-neutral-900 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image 
                src={product.imgPhysical} 
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />
              
              {/* Hover Info Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 text-center bg-brand-black/60 backdrop-blur-sm">
                <p className="font-mono text-[10px] text-brand-purple mb-4 tracking-[0.3em]">VIEW SPECIFICATIONS</p>
                <p className="text-xs text-neutral-300 font-mono leading-relaxed uppercase tracking-tighter">
                  {product.description}
                </p>
              </div>

              {/* Tag Physical/Digital */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                <span className="font-mono text-[8px] tracking-widest text-white uppercase">In Stock: {product.stock}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 border-t border-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl font-bold tracking-tighter group-hover:text-brand-purple transition-colors">{product.name}</h3>
                <ShieldCheck size={16} className="text-brand-purple opacity-50" />
              </div>
              <p className="font-mono text-xs text-neutral-500 mb-6 tracking-widest uppercase">{product.type}</p>
              
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm font-bold tracking-tighter">IDR {product.price.toLocaleString('id-ID')}</p>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all">
                  <ArrowRight size={14} className="group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}