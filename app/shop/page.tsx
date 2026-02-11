// app/shop/page.tsx
"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import RoadmapSlider from "@/components/RoadmapSlider";
import Link from "next/link";

export default function ShopPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black pt-28 pb-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-[#333] pb-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-[#836EF9] rounded" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">GENESIS <span className="text-xs align-top ml-2">BATCH 001</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group relative bg-[#121212] border border-[#333] rounded-lg overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img src={p.imgPhysical} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src={p.imgNFT} alt={`${p.name} art`} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-black/80 border border-[#836EF9] text-[#836EF9] text-[10px] font-mono px-2 py-1 flex items-center gap-1">DIGITAL CARD</div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white text-lg">{p.name}</h3>
                  <div className="text-right text-sm font-mono">Rp {p.priceIDR.toLocaleString()}</div>
                </div>

                <div className="h-[1px] bg-[#333] my-3 group-hover:bg-[#836EF9] transition-colors"></div>

                <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-4">
                  <span>{p.type}</span>
                  <Link href={`/product/${p.id}`} className="flex items-center gap-1 text-neutral-300 hover:text-white">DETAIL →</Link>
                </div>

                <div className="grid grid-cols-4 gap-2 border-t border-[#333] pt-3">
                  <button onClick={(e) => { e.stopPropagation(); window.open(p.links.tokopedia, "_blank", "noopener"); }} className="p-2 border border-[#333] rounded-sm flex items-center justify-center text-neutral-400 hover:border-[#03AC0E]">T</button>
                  <button onClick={(e) => { e.stopPropagation(); window.open(p.links.shopee, "_blank", "noopener"); }} className="p-2 border border-[#333] rounded-sm text-neutral-400 hover:border-[#EE4D2D]">S</button>
                  <button onClick={(e) => { e.stopPropagation(); window.open(p.links.tiktok, "_blank", "noopener"); }} className="p-2 border border-[#333] rounded-sm text-neutral-400 hover:border-white">TT</button>
                  <button onClick={(e) => { e.stopPropagation(); window.open(p.links.whatsapp, "_blank", "noopener"); }} className="p-2 border border-[#333] rounded-sm text-neutral-400 hover:border-[#25D366]">WA</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
