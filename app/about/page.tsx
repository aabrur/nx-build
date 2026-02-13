"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
import { 
  Send, 
  Instagram, 
  Twitter, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight,
  ShieldCheck,
  Cpu,
  Fingerprint,
  Layers,
  Hexagon,
  CreditCard,
  MessageCircle,
  Smartphone
} from 'lucide-react';

/**
 * Roadmap Data - 6 Placeholders
 */
const ROADMAP_DATA = [
  { phase: "PHASE 01", year: "2026", title: "THE GENESIS", desc: "Peluncuran batch pertama 14 unit eksklusif untuk pendiri awal." },
  { phase: "PHASE 02", year: "2026", title: "DIGITAL FUSION", desc: "Integrasi penuh aset digital ke dalam infrastruktur Monad." },
  { phase: "PHASE 03", year: "2026", title: "THE WAR ROOM", desc: "Pembukaan akses komunitas VIP bagi pemegang Royal Genesis." },
  { phase: "PHASE 04", year: "2026", title: "ARCHIVE 02", desc: "Ekspansi koleksi utilitas dengan material industrial baru." },
  { phase: "PHASE 05", year: "2027", title: "PHYGITAL HUB", desc: "Portal verifikasi terdesentralisasi untuk ekosistem fashion." },
  { phase: "PHASE 06", year: "2027", title: "GLOBAL SYNDICATE", desc: "Kolaborasi lintas batas antara kreator digital dan pengrajin fisik." },
];

/**
 * Komponen Slider Roadmap
 */
const RoadmapSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      direction === 'left' 
        ? sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' }) 
        : sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-24 border-t border-white/5">
      <div className="flex items-center justify-between mb-12 px-6 md:px-0 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-[#836EF9] rounded-full" />
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">Peta Jalan Eksperimen</h2>
        </div>
        <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2 uppercase tracking-widest">
          SWIPE TO ARCHIVE <MoveRight size={14} className="animate-pulse" />
        </div>
      </div>

      <div 
        ref={sliderRef} 
        className="flex overflow-x-auto gap-6 px-6 md:px-20 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        {ROADMAP_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className={`min-w-[300px] md:min-w-[380px] border ${idx === 0 ? 'border-[#836EF9] bg-[#836EF9]/5' : 'border-white/5 bg-neutral-900/50'} flex flex-col h-[420px] transition-all hover:border-white/20 group rounded-sm`}
          >
            <div className="h-[200px] bg-black border-b border-white/5 relative overflow-hidden flex items-center justify-center">
              <span className="font-mono text-[8px] text-white/5 absolute uppercase tracking-[1em]">visual_data_{idx + 1}</span>
              <div className="absolute top-4 left-4 z-10">
                <span className={`font-mono text-[10px] px-3 py-1 font-bold uppercase ${idx === 0 ? 'bg-[#836EF9] text-black' : 'bg-black/80 text-white/30 border border-white/10'}`}>
                  {item.phase}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 block mb-2 tracking-widest">{item.year}</span>
                <h3 className={`text-2xl font-sans font-bold mb-4 uppercase tracking-tighter ${idx === 0 ? 'text-white' : 'text-neutral-400'}`}>
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-widest">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button onClick={() => scroll('left')} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-[#836EF9] hover:text-[#836EF9] transition-all rounded-full bg-black shadow-xl">
          <ChevronLeft size={28} />
        </button>
        <button onClick={() => scroll('right')} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-[#836EF9] hover:text-[#836EF9] transition-all rounded-full bg-black shadow-xl">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono">
      <Marquee />
      <Navbar />

      {/* HERO SECTION - LITEPAPER HEADER */}
      <section className="pt-44 px-6 pb-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12 animate-glitch-logo">
            <Image src="/branding/logo-0xtanda.png" alt="0xTanda Logo" fill className="object-contain" />
          </div>
          
          <div className="inline-block border border-[#836EF9] bg-[#836EF9]/10 px-6 py-2 mb-8">
            <span className="text-[10px] text-[#836EF9] tracking-[0.6em] font-bold uppercase">BRAND LITEPAPER // V1.0</span>
          </div>

          <div className="space-y-2 text-[10px] text-neutral-600 uppercase tracking-[0.3em] font-mono mb-12">
            <p>Status: Authorized // Production Phase</p>
            <p>Ref: 0XT-DOC-G1</p>
            <p>Tanggal: Februari 2026</p>
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-4">
            ONE ENTITY <span className="text-neutral-700">//</span> DUAL EXISTENCE
          </h1>
        </div>
      </section>

      {/* ABSTRAK - MANIFESTO */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">ABSTRAK — MANIFESTO PHYGITAL</span>
        </div>
        
        <div className="space-y-8 text-lg text-neutral-400 leading-relaxed uppercase tracking-widest">
          <p>
            <strong className="text-white">0xTanda</strong> (dibaca: Zero-Ex Tanda) adalah eksperimen identitas yang berdiri di antara dua dunia: fisik dan digital.
          </p>
          <p>
            Setiap produk bukan hanya kain. Ia adalah entitas ganda — memiliki wujud nyata yang bisa disentuh dan bukti digital yang bisa diverifikasi secara on-chain.
          </p>
          <div className="bg-white/5 p-10 border-l-2 border-[#836EF9] my-12 italic">
            <p className="text-white text-2xl font-display mb-4">Kami tidak menjual NFT.</p>
            <p className="text-white text-2xl font-display">Kami membangun lapisan kepemilikan.</p>
          </div>
          <p className="text-white font-bold">
            "Tangible craftsmanship you can feel, secured by digital ownership you can prove."
          </p>
        </div>
      </section>

      {/* DEFINISI & FILOSOFI */}
      <section className="py-32 bg-white/[0.02] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">DEFINISI & FILOSOFI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#836EF9]"><Cpu size={24}/> <h3 className="text-2xl font-bold uppercase tracking-tighter font-sans">0x</h3></div>
              <p className="text-sm text-neutral-400 uppercase tracking-widest leading-relaxed">
                Prefiks standar dalam notasi heksadesimal dan alamat kontrak digital. Melambangkan mesin, kode, presisi, dan masa depan digital yang tak terelakkan.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#836EF9]"><Fingerprint size={24}/> <h3 className="text-2xl font-bold uppercase tracking-tighter font-sans">Tanda</h3></div>
              <p className="text-sm text-neutral-400 uppercase tracking-widest leading-relaxed">
                Jejak, bukti, ciri, identitas. Melambangkan sentuhan manusia, craftsmanship, dan akar budaya lokal yang memberikan jiwa pada setiap karya.
              </p>
            </div>
          </div>
          <div className="mt-20 text-center text-xl font-bold uppercase tracking-[0.3em] border-t border-white/5 pt-12">
            0xTanda adalah pertemuan antara sistem dan sentuhan tangan.
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">VISI & MISI</span>
        </div>

        <div className="mb-24">
          <h3 className="text-white text-4xl font-display font-bold uppercase mb-6 tracking-tighter">Visi</h3>
          <p className="text-neutral-400 text-lg uppercase tracking-widest leading-relaxed max-w-3xl">
            Menjadi pelopor ekosistem Phygital Fashion di Indonesia yang mengubah pakaian dari sekadar produk menjadi artefak identitas yang bernilai abadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Industrial Quality", desc: "Garmen heavyweight berstruktur kokoh dan anti fast-fashion." },
            { title: "Digital Permanence", desc: "Memberikan “nyawa digital” pada setiap produk melalui infrastruktur Monad." },
            { title: "The Resistance", desc: "Membangun komunitas yang menghargai seni, teknologi, dan privasi." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-8 border border-white/5 hover:border-[#836EF9]/30 transition-all">
              <h4 className="text-[#836EF9] font-bold text-xs uppercase tracking-widest mb-4">MISI_0{idx + 1}</h4>
              <h5 className="text-white font-bold text-xl uppercase tracking-tighter mb-4 font-sans">{item.title}</h5>
              <p className="text-neutral-500 text-xs uppercase tracking-wider leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK FISIK - GENESIS CARD */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">PRODUK FISIK // AKSES DIGITAL</span>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-12 md:p-20 rounded-sm relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 text-[#836EF9]">
                  <CreditCard size={32} />
                  <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">GENESIS COLLECTION CARD</h3>
                </div>
                <div className="space-y-4 text-neutral-400 uppercase tracking-widest text-sm leading-relaxed">
                  <p>Genesis Card adalah artefak akses. Bukan kartu diskon biasa, bukan merchandise murah.</p>
                  <p className="text-white font-bold">Ia adalah jembatan yang menyatukan eksistensi fisik Anda dengan aset digital di blockchain.</p>
                </div>
                <div className="pt-8 border-t border-white/10 font-mono text-[10px] text-neutral-500 space-y-2 uppercase tracking-[0.3em]">
                  <p>Infrastruktur: MONAD</p>
                  <p>Serial Format: 0XT-GEN1-ACC-#XXX</p>
                </div>
              </div>
              <div className="w-full md:w-80 h-48 bg-white/5 border border-brand-purple/20 rounded-lg flex items-center justify-center relative group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-brand-purple/5 animate-pulse" />
                <span className="text-[10px] text-brand-purple font-bold tracking-[0.5em]">ARTIFACT_ID</span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#836EF9]/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* TIERING SYSTEM */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">SISTEM TIER & UTILITAS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#836EF9] bg-[#836EF9]/5 p-12 rounded-sm relative group overflow-hidden">
            <ShieldCheck className="absolute -right-4 -top-4 text-[#836EF9]/20 w-32 h-32 group-hover:scale-110 transition-transform duration-1000" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">ROYAL GENESIS GEN 1</h3>
            <p className="text-[10px] text-[#836EF9] uppercase tracking-widest mb-8 font-bold">Status: Founding Member</p>
            <ul className="space-y-4 text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#836EF9]" /> Syarat: 100 pembeli pertama dalam sejarah brand</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#836EF9]" /> Diskon 10%++ seumur hidup</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#836EF9]" /> Priority Access koleksi terbatas</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#836EF9]" /> Akses War Room (Grup Eksklusif)</li>
            </ul>
          </div>

          <div className="border border-white/10 bg-white/5 p-12 rounded-sm relative">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">REGULAR HOLDER</h3>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-8 font-bold">Status: Verified Holder</p>
            <ul className="space-y-4 text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-neutral-600" /> Diskon 5% untuk setiap rilisan</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-neutral-600" /> Sertifikat Digital on-chain</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-neutral-600" /> Akses ke komunitas publik 0xTanda</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VISUAL IDENTITY */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">IDENTITAS VISUAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h4 className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-6">TIPOGRAFI</h4>
              <div className="space-y-8">
                <div className="border-b border-white/5 pb-4">
                  <span className="block text-white font-display text-4xl mb-2">Vox Regular</span>
                  <span className="text-[9px] text-neutral-600 uppercase tracking-widest">Elemen teknis “0x” & Sistem</span>
                </div>
                <div className="border-b border-white/5 pb-4">
                  <span className="block text-white font-serif italic text-4xl mb-2">HWT Arabesque</span>
                  <span className="text-[9px] text-neutral-600 uppercase tracking-widest">Elemen humanis “Tanda” & Craft</span>
                </div>
                <div className="border-b border-white/5 pb-4">
                  <span className="block text-white font-mono text-xl mb-2">Space Mono</span>
                  <span className="text-[9px] text-neutral-600 uppercase tracking-widest">Body text & Data teknis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-6">WARNA SISTEM</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { hex: "#0E0E0E", name: "OBSIDIAN BLACK" },
                  { hex: "#836EF9", name: "GENESIS PURPLE" },
                  { hex: "#F0F0F0", name: "INDUSTRIAL WHITE" },
                  { hex: "#00FF9D", name: "VERIFICATION GREEN" },
                ].map((color) => (
                  <div key={color.hex} className="flex flex-col gap-3 group">
                    <div className="h-24 w-full border border-white/10 flex flex-col justify-end p-3 transition-all group-hover:border-white/40" style={{ backgroundColor: color.hex }}>
                      <span className={`text-[9px] font-bold ${color.hex === "#F0F0F0" || color.hex === "#00FF9D" ? "text-black" : "text-white"}`}>{color.hex}</span>
                    </div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SLIDER */}
      <section>
        <RoadmapSlider />
      </section>

      {/* SOCIAL CONNECTIONS & COMMUNITY */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold uppercase tracking-tighter mb-12">KONEKSI & KOMUNITAS</h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
            <a href="https://instagram.com/oxtanda" target="_blank" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#836EF9] group-hover:text-[#836EF9] transition-all">
                <Instagram size={24} />
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">INSTAGRAM</span>
            </a>
            <a href="https://x.com/oxtanda" target="_blank" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#836EF9] group-hover:text-[#836EF9] transition-all">
                <Twitter size={24} />
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">X / TWITTER</span>
            </a>
            <a href="https://tiktok.com/@oxtanda" target="_blank" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#836EF9] group-hover:text-[#836EF9] transition-all">
                <Smartphone size={24} />
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">TIKTOK</span>
            </a>
            <a href="https://t.me/oxtanda_community" target="_blank" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#836EF9] group-hover:text-[#836EF9] transition-all">
                <Send size={24} />
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">TELEGRAM GROUP</span>
            </a>
          </div>

          <div className="bg-white/5 p-12 inline-block border border-white/10">
            <p className="text-[10px] text-neutral-500 uppercase tracking-[0.5em] mb-4">JOIN THE ECOSYSTEM</p>
            <p className="text-lg md:text-xl uppercase tracking-widest leading-relaxed">
              Jadilah bagian dari revolusi phygital fashion pertama di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING TELEGRAM CS - Pojok Kanan Bawah */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
        <a 
          href="https://t.me/oxtanda_cs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto w-16 h-16 bg-[#836EF9] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group relative"
        >
          <div className="absolute -left-32 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] text-white uppercase tracking-widest font-bold">Contact CS</span>
          </div>
          <Send className="text-black -translate-x-0.5 translate-y-0.5 group-hover:rotate-12 transition-transform" size={28} />
        </a>
      </div>

      <footer className="py-20 text-center border-t border-white/5 opacity-30 select-none">
        <p className="font-mono text-[8px] uppercase tracking-[1em]">0XTANDA_ALL_RIGHTS_RESERVED_2026</p>
      </footer>
    </main>
  );
}