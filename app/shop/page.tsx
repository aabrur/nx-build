"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import CustomCursor from '@/components/CustomCursor';
import { PRODUCTS_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

export default function ShopPage() {
  return (
    <main className="min-h-screen pb-20">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="pt-44 px-6 max-w-7xl mx-auto">
        <header className="mb-16 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-xs font-mono text-brand-purple mb-2 uppercase tracking-widest">The Catalog</h2>
            <h1 className="text-5xl font-display font-bold tracking-tighter uppercase">Genesis Batch</h1>
          </div>
          <div className="text-right font-mono text-[10px] text-neutral-500">
            SHOWING {PRODUCTS_DATA.length} ARCHIVAL ITEMS
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS_DATA.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-white/5 mb-6">
                  {/* Physical Image */}
                  <Image 
                    src={product.imgPhysical} 
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                  />
                  {/* Digital/NFT Image (Appears on Hover) */}
                  <Image 
                    src={product.imgDigital} 
                    alt={`${product.name} Digital`}
                    fill
                    className="object-cover scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                  />
                  
                  {/* Label */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-brand-purple/50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-brand-purple font-mono text-[8px] tracking-widest">DIGITAL TWIN</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase group-hover:text-brand-purple transition-colors">{product.name}</h3>
                    <p className="font-mono text-neutral-500 text-[10px] mt-1 uppercase tracking-widest">{product.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-sm">IDR {product.price.toLocaleString()}</p>
                    <p className="font-mono text-[8px] text-brand-green mt-1 uppercase">Sisa Stok: {product.stock}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}