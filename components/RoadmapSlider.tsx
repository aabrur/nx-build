// components/RoadmapSlider.tsx
"use client";

import { useRef } from "react";
import { ROADMAP_DATA } from "@/lib/data";
import Image from "next/image";

export default function RoadmapSlider() {
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = 360;
    ref.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-8 px-6 md:px-0 max-w-5xl mx-auto">
        <div className="flex items-center gap-3"><div className="w-1.5 h-8 bg-[#836EF9] rounded-full" /><h2 className="text-2xl font-bold uppercase">Pencapaian & Peta Jalan</h2></div>
        <div className="text-xs text-neutral-400 flex items-center gap-2">GESER / SWIPE</div>
      </div>

      <div ref={ref} className="flex overflow-x-auto gap-6 px-6 md:px-20 pb-4 hide-scrollbar cursor-grab select-none">
        {ROADMAP_DATA.map((item, i) => (
          <article key={i} className={`min-w-[300px] md:min-w-[350px] border ${item.status === "active" ? "border-[#836EF9] bg-[#1a1a1a]" : "border-[#333] bg-[#121212]"} rounded-lg overflow-hidden`}>
            <div className="h-[200px] relative border-b border-[#333]">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4">
                <span className={`text-xs px-2 py-1 font-mono font-bold ${item.status === "active" ? "bg-[#836EF9] text-black" : "bg-black/80 text-neutral-400 border border-[#333]"}`}>{item.phase}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs text-neutral-400 block mb-2">{item.year}</span>
                <h3 className={`text-xl font-bold mb-2 ${item.status === "active" ? "text-white" : "text-neutral-400"}`}>{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
              {item.status === "active" && <div className="text-[#836EF9] text-xs font-bold mt-4 border-t border-[#333] pt-3">SEDANG BERJALAN</div>}
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 px-6">
        <button onClick={() => scroll("left")} aria-label="Scroll left" className="w-12 h-12 border border-[#333] rounded-full hover:border-[#836EF9]">‹</button>
        <button onClick={() => scroll("right")} aria-label="Scroll right" className="w-12 h-12 border border-[#333] rounded-full hover:border-[#836EF9]">›</button>
      </div>
    </div>
  );
}
