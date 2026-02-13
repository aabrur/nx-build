"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Marquee from '../../components/Marquee';
import { Ticket, Shield, ArrowRight } from 'lucide-react';

/**
 * Halaman Verifikasi 0xTanda.
 * Diperbarui dengan padding-top yang lebih besar agar tidak tertutup Navbar.
 * Jalur impor diperbaiki untuk struktur App Router.
 */
export default function VerifyPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform";

  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-brand-purple selection:text-black">
      <Marquee />
      <Navbar />

      {/* Kontainer Utama dengan pt-52 agar konten turun jauh dari Navbar */}
      <div className="min-h-screen flex flex-col pt-52 md:pt-60 items-center justify-start p-6 text-center relative z-10">
        <div className="w-full max-w-md animate-glitch-logo">
          
          {/* Ikon Portal */}
          <div className="w-24 h-24 border-2 border-white/5 rounded-xl flex items-center justify-center mx-auto mb-10 bg-white/5 shadow-[0_0_50px_rgba(131,110,249,0.15)]">
            <Ticket size={48} className="text-brand-purple" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tighter uppercase">
            Redemption Portal
          </h2>
          
          <p className="text-neutral-500 font-mono text-[10px] md:text-xs mb-10 uppercase tracking-[0.3em] leading-relaxed">
            Verifikasi keaslian produk fisik dan klaim aset digital Anda melalui formulir terenkripsi kami.
          </p>

          {/* Panduan Box */}
          <div className="bg-white/5 border border-brand-purple/20 p-8 mb-10 text-left rounded-sm">
            <h3 className="text-white font-bold mb-4 flex items-center gap-3 text-xs uppercase tracking-widest">
              <Shield size={16} className="text-brand-purple"/> PANDUAN VERIFIKASI:
            </h3>
            <ul className="text-[10px] md:text-xs text-neutral-400 space-y-3 list-none font-mono uppercase tracking-tight">
              <li className="flex gap-2">
                <span className="text-brand-purple">[01]</span> Siapkan Kartu Fisik "Genesis Access Card" Anda.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">[02]</span> Gosok area pelindung untuk melihat Kode Hash unik.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">[03]</span> Klik tombol di bawah untuk membuka Formulir Klaim.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">[04]</span> Isi data wallet dan upload bukti kepemilikan.
              </li>
            </ul>
          </div>

          {/* Tombol Aksi */}
          <button 
            onClick={openGoogleForm} 
            className="w-full bg-white text-black py-5 font-mono text-[10px] font-bold hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            BUKA FORMULIR VERIFIKASI 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
          </button>
          
          <p className="mt-6 text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
            Anda akan diarahkan ke Google Form eksternal yang aman.
          </p>
        </div>

        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-brand-purple/5 blur-[150px] pointer-events-none rounded-full -z-10" />
      </div>
    </main>
  );
}