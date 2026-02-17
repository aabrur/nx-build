"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
import { 
  Send, 
  MoveRight,
  ShieldCheck,
  Cpu,
  Fingerprint,
  Layers,
  Hexagon,
  CreditCard,
  Smartphone,
  CheckCircle2,
  Instagram,
  Twitter,
  ArrowDown
} from 'lucide-react';

/**
 * Komponen Ikon TikTok (Custom SVG)
 */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/**
 * Komponen Ikon X / Twitter (Custom SVG)
 */
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.486h2.039L6.448 3.288H4.26L17.607 20.64z" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono overflow-x-hidden relative">
      <Marquee />
      <Navbar />

      {/* SECTION 01: HEADER - LOGO DIPERBESAR SECARA MASIF */}
      <section className="pt-48 px-6 pb-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <div className="max-w-3xl border-y border-white/10 py-10 px-4">
            <p className="text-lg md:text-2xl text-white italic font-display leading-relaxed">
              “Tangible craftsmanship you can feel, secured by digital ownership you can prove.”
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: TENTANG 0xTANDA */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Tentang 0xTanda</span>
        </div>
        
        <div className="space-y-8 text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest">
          <p>
            <strong className="text-white">0xTanda</strong> adalah brand fashion dengan pendekatan <span className="text-[#836EF9]">phygital</span> — menggabungkan produk fisik dan akses digital dalam satu kepemilikan. Setiap produk dirancang untuk digunakan sehari-hari, sekaligus terhubung dengan identitas digital yang dapat diverifikasi.
          </p>
          <p>
            Kami tidak menjual NFT sebagai produk utama. Produk utama kami adalah pakaian. Aset digital diberikan sebagai lapisan tambahan yang memperkuat keaslian, akses, dan pengalaman pemiliknya.
          </p>
          <p>
            Konsep ini lahir dari kebutuhan akan transparansi dan otentisitas di era digital, tanpa membuat prosesnya rumit bagi pengguna.
          </p>
        </div>
      </section>

      {/* SECTION 03: FILOSOFI */}
      <section className="py-32 bg-white/[0.02] px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Filosofi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#836EF9]"><Cpu size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">0x</h3></div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Nol dan Huruf X ditulis dengan gaya huruf modern yang merepresentasikan kode heksadesimal dan teknologi digital.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#836EF9]"><Fingerprint size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">Tanda</h3></div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Kata “Tanda” memaknai identitas, bukti, dan kepemilikan. Melambangkan bukti fisik yang terverifikasi secara absolut.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#836EF9]"><Layers size={24}/> <h3 className="text-xl font-bold uppercase tracking-tighter">//</h3></div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
                Garis miring ganda mencerminkan dua sisi yang berjalan bersamaan: fisik dan digital secara terstruktur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: PRODUK & PENDEKATAN */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Produk & Pendekatan</span>
        </div>
        
        <div className="space-y-8 text-neutral-400 text-sm md:text-base leading-relaxed uppercase tracking-widest">
          <p>
            Setiap koleksi 0xTanda dirilis dalam jumlah terbatas dan memiliki identitas unik. Fokus kami adalah kualitas yang konsisten, desain yang terukur, dan sistem yang jelas.
          </p>
          <p>
            Setiap pembelian disertai <span className="text-white">Genesis Collection Card</span> untuk mengklaim akses digital resmi melalui sistem terenkripsi.
          </p>
        </div>
      </section>

      {/* SECTION 05: CARA KERJA */}
      <section className="py-32 px-6 bg-black border-y border-white/5 text-center md:text-left">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16 justify-center md:justify-start">
            <div className="w-16 h-[1px] bg-[#836EF9]" />
            <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase text-center">Concierge Airdrop System</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Pembeli membeli produk fisik.",
              "Mendapatkan Secret Code dari Genesis Card.",
              "Mengisi formulir verifikasi di 0xtanda.xyz.",
              "Tim memvalidasi & mengirim aset digital.",
              "Biaya jaringan ditanggung oleh 0xTanda."
            ].map((step, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/5 p-6 relative group hover:border-[#836EF9]/50 transition-all">
                <span className="text-[#836EF9] font-mono text-xs font-bold block mb-4">STEP_0{idx + 1}</span>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">{step}</p>
                {idx < 4 && <MoveRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/10 hidden md:block" size={16} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: SISTEM KEANGGOTAAN */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-[#836EF9]" />
          <span className="text-[#836EF9] text-xs font-bold tracking-[0.4em] uppercase">Sistem Keanggotaan</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#836EF9] bg-[#836EF9]/5 p-12 rounded-sm relative group overflow-hidden">
            <Hexagon className="absolute -right-4 -top-4 text-[#836EF9]/10 w-32 h-32 group-hover:rotate-90 transition-transform duration-1000" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">ROYAL GENESIS</h3>
            <p className="text-[10px] text-[#836EF9] uppercase tracking-widest mb-8 font-bold">100 Pembeli Pertama</p>
            <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              Mendapatkan akses prioritas, grup eksklusif, dan benefit tambahan sebagai pendiri awal ekosistem.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 p-12 rounded-sm">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">REGULAR HOLDER</h3>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-8 font-bold">Verified Owners</p>
            <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed">
              Pemilik selanjutnya yang tetap mendapatkan verifikasi keaslian dan akses komunitas penuh.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07: PENUTUP & TANDA TANGAN */}
      <section className="pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-24">
            <div className="space-y-6 text-neutral-400 text-base md:text-lg uppercase tracking-widest leading-relaxed">
              <p>0xTanda berjalan di dua dunia sekaligus — fisik dan digital.</p>
              <p className="text-white font-bold">
                Fokus kami sederhana: membangun sistem kepemilikan yang jelas, akses yang nyata, dan pengalaman yang konsisten.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 pt-16">
            <div className="space-y-4">
              <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter">Abrur Alaina</p>
              <div className="space-y-1">
                <p className="text-[#836EF9] text-xs font-bold uppercase tracking-widest">Founder, 0xTanda</p>
                <p className="text-neutral-600 text-[10px] uppercase tracking-widest">Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-mono text-[10px] text-neutral-700 uppercase tracking-[0.5em] mb-4">Archive Est. 2026</p>
              <div className="flex gap-4 justify-end opacity-20">
                <Hexagon size={20} />
                <Cpu size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: KONEKSI 0xTANDA - SOSIAL MEDIA DI PALING BAWAH (IKON DIPERKECIL) */}
      <section className="pb-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto pt-16">
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-xl md:text-3xl font-sans font-bold uppercase tracking-tighter mb-4 text-neutral-400">Connect With Archive</h3>
            <div className="w-12 h-0.5 bg-[#836EF9]" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/0xtanda/" 
              target="_blank" 
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <Instagram size={18} className="text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">Instagram</span>
            </a>
            
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@0xtanda?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <TikTokIcon className="w-4 h-4 text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">TikTok</span>
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/0xTanda" 
              target="_blank" 
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <XIcon className="w-4 h-4 text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">X_Archive</span>
            </a>
            
            {/* Telegram Community */}
            <a 
              href="https://t.me/Official0xTanda" 
              target="_blank" 
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center bg-black group-hover:border-[#836EF9]/50 group-hover:bg-[#836EF9]/5 transition-all">
                <Send size={18} className="text-neutral-500 group-hover:text-[#836EF9] transition-all" />
              </div>
              <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-600 group-hover:text-white transition-colors">Community</span>
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING TELEGRAM CS - Pojok Kanan Bawah & Fixed mengikuti scroll */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        <a 
          href="https://t.me/Bob_Node88" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#836EF9] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group relative border border-white/10"
          title="Contact Customer Service"
        >
          {/* Label Tooltip */}
          <div className="absolute -left-32 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-[8px] text-white uppercase tracking-widest font-bold">Contact_Support</span>
          </div>
          <Send className="text-black -translate-x-0.5 translate-y-0.5" size={24} />
        </a>
      </div>

      <footer className="py-20 text-center opacity-10">
        <p className="font-mono text-[7px] uppercase tracking-[1em]">0XTANDA_LITEPAPER_V1.0_SYSTEM_SECURED</p>
      </footer>
    </main>
  );
}