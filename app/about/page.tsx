"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
import { ROADMAP_DATA } from '../../lib/data';
import { 
  Send, 
  Shield, 
  Cpu, 
  Zap, 
  Target, 
  Layers, 
  CreditCard, 
  Crown,
  ChevronLeft,
  ChevronRight,
  MoveRight
} from 'lucide-react';

/**
 * Komponen Slider Roadmap (Tetap dipertahankan sesuai permintaan)
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
    <div className="relative w-full py-20 border-t border-white/5">
      <div className="flex items-center justify-between mb-12 px-6 md:px-0 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
          <h2 className="text-2xl font-sans font-bold uppercase tracking-tighter">Pencapaian & Peta Jalan</h2>
        </div>
        <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2 uppercase tracking-widest">
          SWIPE TO EXPLORE <MoveRight size={14} className="animate-pulse" />
        </div>
      </div>

      <div 
        ref={sliderRef} 
        className="flex overflow-x-auto gap-6 px-6 md:px-20 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        {ROADMAP_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className={`min-w-[300px] md:min-w-[380px] border ${idx === 0 ? 'border-brand-purple bg-brand-purple/5' : 'border-white/5 bg-neutral-900/50'} flex flex-col h-[450px] transition-all hover:border-white/20 group rounded-sm`}
          >
            <div className="h-[220px] bg-black border-b border-white/5 relative overflow-hidden flex items-center justify-center">
              <span className="font-mono text-[8px] text-white/5 absolute uppercase tracking-[1em]">visual_archive_{idx + 1}</span>
              <div className="absolute top-4 left-4 z-10">
                <span className={`font-mono text-[10px] px-3 py-1 font-bold uppercase ${idx === 0 ? 'bg-brand-purple text-black' : 'bg-black/80 text-white/30 border border-white/10'}`}>
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
              {idx === 0 && (
                <div className="flex items-center gap-2 text-brand-purple text-[10px] font-bold animate-pulse mt-4 border-t border-white/5 pt-6 tracking-widest uppercase">
                  <div className="w-2 h-2 bg-brand-purple rounded-full" />
                  STATUS: ACTIVE_PHASE
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <button onClick={() => scroll('left')} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-brand-purple hover:text-brand-purple transition-all rounded-full bg-brand-black shadow-xl">
          <ChevronLeft size={28} />
        </button>
        <button onClick={() => scroll('right')} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-brand-purple hover:text-brand-purple transition-all rounded-full bg-brand-black shadow-xl">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-brand-purple selection:text-black font-mono">
      <Marquee />
      <Navbar />

      {/* HEADER: WHITEPAPER TITLE */}
      <section className="pt-44 pb-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="flex-1">
            <div className="inline-block border border-brand-purple bg-brand-purple/10 px-4 py-1 mb-6">
              <span className="text-[10px] text-brand-purple tracking-[0.5em] font-bold uppercase">BRAND WHITEPAPER // V1.0</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none mb-6">
              LITE<span className="text-neutral-700 italic">PAPER</span>
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] text-neutral-500 tracking-widest uppercase">
              <p>Status: Authorized // Production Phase</p>
              <p>Date: Feb 2026</p>
              <p>Ref: 0XT-DOC-G1</p>
            </div>
          </div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 opacity-20">
            <Image src="/branding/logo-0xtanda-icon.png" alt="0xTanda" fill className="object-contain" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 py-24">
        
        {/* SIDEBAR NAVIGATION (STICKY) */}
        <div className="md:col-span-3 hidden md:block">
          <div className="sticky top-40 space-y-8 border-l border-white/5 pl-8">
            <a href="#abstract" className="block text-[10px] text-brand-purple hover:text-white transition-colors tracking-[0.3em]">0. ABSTRACT</a>
            <a href="#philosophy" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">1. DEFINISI & FILOSOFI</a>
            <a href="#vision" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">2. VISI & MISI</a>
            <a href="#protocol" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">3. THE PROTOCOL</a>
            <a href="#product" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">4. THE GENESIS GEAR</a>
            <a href="#card" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">5. ACCESS KEY</a>
            <a href="#tiering" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">6. TIERING SYSTEM</a>
            <a href="#identity" className="block text-[10px] text-neutral-600 hover:text-white transition-colors tracking-[0.3em]">7. VISUAL IDENTITY</a>
          </div>
        </div>

        {/* MAIN LITE PAPER CONTENT */}
        <div className="md:col-span-9 space-y-32">
          
          {/* 0. ABSTRACT */}
          <section id="abstract" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">0. ABSTRACT: THE PHYGITAL MANIFESTO</h2>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 mb-8 rounded-sm">
              <p className="text-2xl font-display italic text-white mb-6 leading-tight">"One Entity // Dual Existence"</p>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest">
                0xTanda (dibaca: Zero-Ex Tanda) bukan sekadar merek pakaian. 0xTanda adalah sebuah Eksperimen Identitas yang berdiri di persimpangan antara kultur jalanan (Streetwear) dan teknologi desentralisasi (Blockchain).
                Kami mendefinisikan ulang konsep kepemilikan. Di era digital di mana segala sesuatu bisa disalin (copy-paste), 0xTanda menghadirkan otentisitas yang tidak bisa dipalsukan, baik di dunia nyata maupun dunia maya.
              </p>
            </div>
          </section>

          {/* 1. DEFINISI & FILOSOFI */}
          <section id="philosophy" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">1. DEFINISI & FILOSOFI</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-6">
                <h3 className="text-brand-purple text-xs font-bold tracking-[0.4em]">ETIMOLOGI NAMA</h3>
                <p className="text-sm leading-relaxed text-neutral-400 uppercase tracking-widest">
                  <span className="text-white font-bold block mb-2">"0x" (Zero Ex):</span>
                  Prefiks standar dalam ilmu komputer untuk notasi heksadesimal dan alamat Smart Contract. Melambangkan sisi teknologi, mesin, kode, presisi, dan masa depan digital.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400 uppercase tracking-widest">
                  <span className="text-white font-bold block mb-2">"Tanda" (Bahasa Indonesia):</span>
                  Jejak, ciri, bukti, atau tanda tangan. Melambangkan sisi humanis, sentuhan tangan (craftsmanship), identitas fisik, dan akar budaya lokal.
                </p>
              </div>
              <div className="bg-brand-purple/5 border border-brand-purple/20 p-8 flex flex-col justify-center text-center">
                <h3 className="text-brand-purple text-[10px] font-bold tracking-[0.5em] mb-4">SLOGAN RESMI</h3>
                <p className="text-xl font-display font-bold leading-tight uppercase mb-4">"Tangible craftsmanship you can feel, secured by digital ownership you can prove."</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest italic">(Kualitas fisik yang bisa dirasakan, diamankan oleh kepemilikan digital yang bisa dibuktikan.)</p>
              </div>
            </div>
          </section>

          {/* 2. VISI & MISI */}
          <section id="vision" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">2. VISI & MISI</h2>
            </div>
            <div className="space-y-12">
              <div className="border-l border-white/10 pl-8">
                <h3 className="text-white text-xs font-bold tracking-[0.4em] mb-4 flex items-center gap-3"><Target size={14} className="text-brand-purple"/> VISI</h3>
                <p className="text-neutral-400 text-sm leading-relaxed uppercase tracking-widest">
                  Menjadi pelopor ekosistem Phygital Fashion di Indonesia yang mendemokratisasi teknologi Web3, mengubah cara orang memandang pakaian dari sekadar "kain penutup tubuh" menjadi "aset identitas yang bernilai".
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <Cpu size={20}/>, title: "Industrial Quality", desc: "Standar garmen kelas berat (Heavyweight) yang kokoh, berstruktur, dan anti-fast fashion." },
                  { icon: <Layers size={20}/>, title: "Digital Permanence", desc: "Memberikan 'nyawa digital' pada setiap produk fisik melalui teknologi Blockchain Monad." },
                  { icon: <Shield size={20}/>, title: "The Resistance", desc: "Membangun komunitas eksklusif yang menghargai seni, teknologi, dan privasi." }
                ].map((misi, i) => (
                  <div key={i} className="bg-white/5 p-6 border border-white/5 hover:border-brand-purple/30 transition-all">
                    <div className="text-brand-purple mb-4">{misi.icon}</div>
                    <h4 className="text-white font-bold text-xs uppercase mb-3 tracking-widest">{misi.title}</h4>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider leading-relaxed">{misi.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. THE PROTOCOL */}
          <section id="protocol" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">3. MEKANISME EKOSISTEM (THE PROTOCOL)</h2>
            </div>
            <p className="text-neutral-400 text-sm uppercase tracking-widest mb-10 leading-relaxed">
              0xTanda beroperasi dengan protokol <strong className="text-brand-purple">"Concierge Airdrop"</strong>. Sistem ini dirancang untuk memberikan pengalaman VIP dan menghilangkan hambatan teknis (Zero Friction) bagi pengguna awam.
            </p>
            <div className="space-y-6 relative">
              {[
                { step: "01", title: "ACQUIRE (FISIK)", desc: "Konsumen membeli produk fisik (Baju + Genesis Card)." },
                { step: "02", title: "REVEAL (AKSES)", desc: "Konsumen menggosok panel pelindung pada Genesis Card untuk mendapatkan Secret Code." },
                { step: "03", title: "VERIFY (VALIDASI)", desc: "Konsumen memindai QR Code, masuk ke portal 0xtanda.xyz, dan mengisi data verifikasi." },
                { step: "04", title: "FUSION (PENYATUAN)", desc: "Tim 0xTanda memvalidasi kode. Jika valid, aset digital (NFT) dikirim secara manual (Airdrop)." },
                { step: "05", title: "DUAL EXISTENCE", desc: "Pengguna kini memiliki Baju dan Digital Twin untuk akses eksklusif." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <div className="w-12 h-12 shrink-0 bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center font-bold text-brand-purple font-mono group-hover:bg-brand-purple group-hover:text-black transition-all">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 border border-brand-purple/30 bg-brand-purple/5 text-center">
              <p className="text-[10px] text-brand-purple font-bold tracking-[0.3em] uppercase animate-pulse">NOTE: SELURUH BIAYA JARINGAN (GAS FEE) DITANGGUNG OLEH 0XTANDA.</p>
            </div>
          </section>

          {/* 4. THE GENESIS GEAR */}
          <section id="product" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">4. PRODUK FISIK: THE GENESIS GEAR</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-10 border border-white/5">
              <div className="space-y-8">
                <h3 className="text-brand-purple text-xs font-bold tracking-[0.4em] mb-6">SPESIFIKASI TEKNIS (BATCH #001)</h3>
                <ul className="space-y-4 font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  <li><span className="text-white">NAMA:</span> Genesis Boxy Tee.</li>
                  <li><span className="text-white">MATERIAL:</span> 100% Cotton Combed Heavyweight 16s.</li>
                  <li><span className="text-white">GRAMASI:</span> 235-245 gsm (Industrial Standard).</li>
                  <li><span className="text-white">FITTING:</span> Boxy Oversized / Cropped Modern.</li>
                  <li><span className="text-white">SABLON:</span> DFT High-Density (Calibrated).</li>
                </ul>
              </div>
              <div className="border border-white/10 p-6 bg-black">
                <h3 className="text-brand-purple text-[10px] font-bold tracking-[0.4em] mb-6 border-b border-white/10 pb-4">PHYGITAL CARE LABEL</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-[9px] mb-2 font-bold tracking-widest uppercase text-brand-purple/80">[ PHYSICAL CARE ]</p>
                    <p className="text-neutral-500 text-[9px] uppercase tracking-widest leading-loose">
                      {`> WASH COLD // DO NOT BLEACH`}<br/>{`> IRON INSIDE OUT`}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-[9px] mb-2 font-bold tracking-widest uppercase text-brand-purple/80">[ DIGITAL CARE ]</p>
                    <p className="text-neutral-500 text-[9px] uppercase tracking-widest leading-loose">
                      {`> SECURE YOUR WALLET`}<br/>{`> DO NOT SHARE SECRET CODE`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. ACCESS KEY */}
          <section id="card" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">5. KUNCI AKSES: GENESIS COLLECTION CARD</h2>
            </div>
            <div className="bg-gradient-to-br from-neutral-900 to-brand-black border border-white/10 p-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6"><CreditCard size={16} className="text-brand-purple"/><h3 className="text-white text-xs font-bold uppercase tracking-widest">VISUAL & LORE</h3></div>
                <p className="text-sm italic text-neutral-400 leading-relaxed mb-6 uppercase tracking-wider">"In the quiet of a dystopia, the purple-helmeted cyborg closes her eyes... optimism remains the only way forward."</p>
                <div className="space-y-3 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  <p>Artwork by: @yogienugr</p>
                  <p>Built on: MONAD (EVM High Throughput)</p>
                </div>
              </div>
              <div className="w-full md:w-64 h-40 bg-white/5 border border-brand-purple/30 rounded-lg flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                <p className="text-[8px] font-mono text-brand-purple font-bold tracking-[0.5em] z-10 uppercase">0XT-GEN1-ACC-#XXX</p>
              </div>
            </div>
          </section>

          {/* 6. TIERING SYSTEM */}
          <section id="tiering" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">6. SISTEM KASTA & UTILITAS (TIERING)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* TIER A */}
              <div className="border border-brand-purple/40 bg-brand-purple/5 p-8 rounded-sm">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white uppercase font-sans tracking-tighter">ROYAL GENESIS GEN 1</h3>
                  <Crown size={20} className="text-brand-purple" />
                </div>
                <p className="text-[10px] text-brand-purple font-bold mb-6 tracking-widest uppercase">Founding Member / OG Status</p>
                <ul className="space-y-4 text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                  <li><span className="text-white">SYARAT:</span> 100 pembeli pertama dalam sejarah brand.</li>
                  <li><span className="text-white">DISCOUNT:</span> 10%++ seumur hidup.</li>
                  <li><span className="text-white">ACCESS:</span> Hak Whitelist Priority koleksi baru.</li>
                  <li><span className="text-white">COMMUNITY:</span> Akses "The War Room" (Grup VIP).</li>
                </ul>
              </div>
              {/* TIER B */}
              <div className="border border-white/10 bg-white/5 p-8 rounded-sm">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white uppercase font-sans tracking-tighter">REGULAR HOLDER</h3>
                  <Zap size={20} className="text-neutral-500" />
                </div>
                <p className="text-[10px] text-neutral-500 font-bold mb-6 tracking-widest uppercase">Standard Holder Status</p>
                <ul className="space-y-4 text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                  <li><span className="text-white">SYARAT:</span> Pembeli urutan ke-101 dan seterusnya.</li>
                  <li><span className="text-white">DISCOUNT:</span> 5% Member discount.</li>
                  <li><span className="text-white">VERIFY:</span> Sertifikat Keaslian Digital resmi.</li>
                  <li><span className="text-white">ACCESS:</span> Akses komunitas publik 0xTanda.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. VISUAL IDENTITY */}
          <section id="identity" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-brand-purple rounded-full" />
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">7. IDENTITAS VISUAL (DESIGN SYSTEM)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "VOX REGULAR", desc: "Digunakan untuk notasi teknis '0x'. Kesan futuristik dan mesin." },
                { title: "HWT ARABESQUE", desc: "Digunakan untuk 'Tanda'. Kesan artistik dan humanis." },
                { title: "SPACE MONO", desc: "Digunakan untuk body text agar tetap teknis dan terbaca." }
              ].map((font, i) => (
                <div key={i} className="border border-white/5 p-8 bg-neutral-900/50">
                  <h4 className="text-brand-purple font-bold text-[10px] mb-4 tracking-[0.3em] uppercase">{font.title}</h4>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-loose">{font.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER: ROADMAP SLIDER */}
      <section id="roadmap-section" className="scroll-mt-20">
        <RoadmapSlider />
      </section>

      {/* FINAL MANIFESTO FOOTER */}
      <div className="text-center py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-display text-4xl md:text-7xl text-white mb-8 font-bold tracking-tighter uppercase leading-none">
            "Tangible craftsmanship you can feel, secured by digital ownership you can prove."
          </p>
          <p className="font-mono text-[10px] text-neutral-600 tracking-[0.7em] uppercase">
            JAKARTA_INDONESIA // ARCHIVE_EST_2026
          </p>
        </div>
      </div>

      {/* FLOATING TELEGRAM BUTTON */}
      <a 
        href="https://t.me/oxtanda" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-brand-purple rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group"
      >
        <Send className="text-black -translate-x-0.5 translate-y-0.5 group-hover:rotate-12 transition-transform" size={24} />
        <span className="absolute right-full mr-4 bg-brand-purple text-black font-mono text-[10px] font-bold px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-2xl uppercase tracking-widest">
          JOIN THE WAR ROOM
        </span>
      </a>
    </main>
  );
}