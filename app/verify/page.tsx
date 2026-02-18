"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { ShieldCheck, AlertTriangle, ArrowRight, Lock, ScanLine } from 'lucide-react';

export default function VerifyLandingPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f3f3f3] font-mono selection:bg-[#836EF9] selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- HERO SECTION --- */}
        <div className="mb-12 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-[#836EF9]/10 rounded-full flex items-center justify-center border border-[#836EF9]/30 mx-auto mb-6 shadow-[0_0_30px_rgba(131,110,249,0.2)]">
             <ScanLine size={40} className="text-[#836EF9]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter mb-4 uppercase">
            VERIFICATION <span className="text-[#836EF9]">PROTOCOL</span>
          </h1>
          <p className="text-sm md:text-base text-[#888] font-mono max-w-2xl mx-auto leading-relaxed">
            "Tangible craftsmanship you can feel, secured by digital ownership you can prove."
          </p>
        </div>

        {/* --- INSTRUCTIONS BOX --- */}
        <div className="bg-[#111] border border-[#333] p-8 md:p-10 mb-12 rounded-sm text-left max-w-2xl w-full relative overflow-hidden group hover:border-[#836EF9]/50 transition-colors">
          
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock size={120} />
          </div>

          <h3 className="text-[#00FF9D] font-bold text-xs tracking-[0.2em] mb-6 flex items-center gap-2">
            <AlertTriangle size={16} /> SYSTEM REQUIREMENTS
          </h3>
          
          <ul className="space-y-4 text-xs md:text-sm text-[#ccc] list-decimal list-inside leading-relaxed font-mono relative z-10">
            <li className="pl-2">
              <span className="text-white font-bold bg-[#836EF9]/20 px-1">GOSOK</span> panel pada Genesis Card untuk mendapatkan Secret Code.
            </li>
            <li className="pl-2">
              Siapkan <span className="text-[#836EF9] font-bold">Personal Wallet MONAD/EVM</span> (Metamask/Phantom/Rabby).
            </li>
            <li className="pl-2 text-red-400 font-bold">
              DILARANG menggunakan alamat Exchange (Indodax/Binance/dll). Aset akan hilang.
            </li>
            <li className="pl-2">
              Proses verifikasi manual (<span className="text-[#00FF9D]">Max 1x24 Jam</span>).
            </li>
            <li className="pl-2">
              Gas Fee ditanggung penuh oleh 0xTanda (GRATIS).
            </li>
          </ul>
        </div>

        {/* --- ACTION BUTTON --- */}
        <Link href="/verify/pageform" className="w-full max-w-md group">
            <div className="bg-white text-black font-sans font-black text-lg py-5 hover:bg-[#836EF9] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 tracking-widest clip-path-slant relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                    START VERIFICATION <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#836EF9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            </div>
        </Link>
        
        <p className="text-[10px] text-[#444] mt-6 font-mono">
            SECURE CONNECTION // 256-BIT ENCRYPTION
        </p>

      </main>
    </div>
  );
}