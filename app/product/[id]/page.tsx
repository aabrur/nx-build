// app/product/[id]/page.tsx
"use client";

import { useRouter, useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { useState } from "react";
import { Zap } from "lucide-react"; // if lucide installed; fallback to svg if not.

export default function ProductPage() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : null;
  const product = PRODUCTS.find((p) => p.id === id) || null;
  const [activeImg, setActiveImg] = useState<"physical" | "nft">("physical");

  if (!product) {
    return (
      <main className="min-h-screen pt-28 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>Produk tidak ditemukan.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-12 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => window.history.back()} className="text-neutral-400 mb-6">← Kembali</button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-square border border-[#333] bg-[#121212]">
            <img src={activeImg === "physical" ? product.imgPhysical : product.imgNFT} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-black border border-[#333] p-1 rounded-full">
              <button onClick={() => setActiveImg("physical")} className={`px-4 py-2 text-xs ${activeImg === "physical" ? "bg-white text-black" : "text-neutral-400"}`}>FISIK</button>
              <button onClick={() => setActiveImg("nft")} className={`px-4 py-2 text-xs ${activeImg === "nft" ? "bg-[#836EF9] text-black" : "text-neutral-400"}`}>DIGITAL CARD</button>
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4 uppercase">{product.name}</h1>
            <div className="flex gap-4 font-mono text-sm text-[#836EF9] mb-6">
              <span className="border border-[#836EF9] px-2 py-1">GENESIS BATCH</span>
              <span className="border border-[#836EF9] px-2 py-1">SISA STOK: 4</span>
            </div>

            <div className="text-neutral-400 space-y-6 mb-8">
              <div>
                <strong className="text-white block mb-1">DESKRIPSI FISIK</strong>
                {product.desc}
              </div>
              <div className="border-l-2 border-[#836EF9] pl-4">
                <strong className="text-[#836EF9] block mb-1">MANFAAT KOLEKTOR</strong>
                {product.nftBenefit}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={product.links.tokopedia} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-[#333] bg-[#121212] hover:border-[#03AC0E]">
                <span className="font-bold">TOKOPEDIA</span>
              </a>
              <a href={product.links.shopee} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-[#333] bg-[#121212] hover:border-[#EE4D2D]">
                <span className="font-bold">SHOPEE</span>
              </a>
              <a href={product.links.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-[#333] bg-[#121212] hover:border-white">
                <span className="font-bold">TIKTOK SHOP</span>
              </a>
              <a href={product.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border border-[#333] bg-[#121212] hover:border-[#25D366]">
                <span className="font-bold">WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
