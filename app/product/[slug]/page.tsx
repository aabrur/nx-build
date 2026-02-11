"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
// Menggunakan relative path untuk menghindari error alias di beberapa lingkungan
import Navbar from '../../../components/Navbar';
import CustomCursor from '../../../components/CustomCursor';
import Marquee from '../../../components/Marquee';
import { PRODUCTS_DATA } from '../../../lib/data';
import { ArrowLeft, ShieldCheck, ExternalLink } from 'lucide-react';

/**
 * Halaman Detail Produk Dinamis.
 * Versi ini menghapus efek glitch pada gambar produk dan kartu digital
 * agar tampilan lebih bersih dan profesional.
 */
export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [view, setView] = useState<'physical' | 'digital'>('physical');

  // Mencari data produk berdasarkan slug di URL
  const product = useMemo(() => 
    PRODUCTS_DATA.find(p => p.slug === params.slug), 
    [params.slug]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs text-neutral-500">
        [ ERROR: ARCHIVE_NOT_FOUND ]
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 bg-brand-black">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="pt-40 px-6 max-w-7xl mx-auto">
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 font-mono text-[10px] tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bagian Media: Gambar Produk & Digital Twin */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-neutral-900 border border-white/10 overflow-hidden rounded-sm">
              <Image 
                src={view === 'physical' ? product.imgPhysical : product.imgDigital} 
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-500" // Hanya transisi halus, tanpa glitch/getar
                priority
              />
              
              {/* Toggle Tampilan Fisik/Digital */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-xl p-1.5 rounded-full border border-white/10">
                <button 
                  onClick={() => setView('physical')}
                  className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all ${view === 'physical' ? 'bg-white text-black font-bold' : 'text-white/50 hover:text-white'}`}
                >
                  PHYSICAL
                </button>
                <button 
                  onClick={() => setView('digital')}
                  className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all ${view === 'digital' ? 'bg-brand-purple text-white font-bold' : 'text-white/50 hover:text-white'}`}
                >
                  DIGITAL
                </button>
              </div>
            </div>
          </div>

          {/* Bagian Informasi Produk */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-brand-purple font-mono text-[10px] mb-6 tracking-[0.3em]">
              <ShieldCheck size={14} /> VERIFIED PHYGITAL ENTITY
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4 tracking-tighter leading-none">
              {product.name}
            </h1>
            
            <p className="text-2xl font-mono text-white mb-10">IDR {product.price.toLocaleString('id-ID')}</p>
            
            <div className="space-y-6 mb-12">
              <div className="p-6 bg-white/5 border-l-2 border-white/20">
                <h4 className="text-[10px] font-mono text-neutral-500 mb-3 uppercase tracking-widest">Specifications</h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-mono">{product.description}</p>
              </div>
              
              <div className="p-6 bg-brand-purple/5 border-l-2 border-brand-purple">
                <h4 className="text-[10px] font-mono text-brand-purple mb-3 uppercase tracking-widest">Collector Benefits</h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-mono">{product.benefit}</p>
              </div>
            </div>

            {/* Link Pembelian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={product.links?.tokopedia || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-[#03AC0E] text-white font-bold rounded-sm hover:opacity-90 transition-opacity font-mono text-xs uppercase">
                Tokopedia <ExternalLink size={14} />
              </a>
              <a href={product.links?.shopee || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-[#EE4D2D] text-white font-bold rounded-sm hover:opacity-90 transition-opacity font-mono text-xs uppercase">
                Shopee <ExternalLink size={14} />
              </a>
              <a href={product.links?.whatsapp || "#"} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 flex items-center justify-center gap-2 py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-widest">
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}