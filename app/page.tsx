import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import CustomCursor from '@/components/CustomCursor';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Marquee />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-brand-purple/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="relative z-10 text-center fade-in flex flex-col items-center">
          <p className="font-mono text-brand-purple text-[10px] tracking-[0.5em] mb-10 uppercase">
            Est. 2026 Jakarta // Digital Archive
          </p>
          
          {/* LOGO UTAMA - Menggantikan teks H1 dengan Image */}
          <div className="relative w-full max-w-[450px] h-[150px] md:max-w-[900px] md:h-[250px] mb-16 animate-glitch">
            <Image 
              src="/branding/logo-0xtanda.png"
              alt="0xTanda Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="max-w-lg mx-auto mb-12">
            <p className="font-mono text-neutral-400 text-xs leading-relaxed uppercase tracking-widest">
              Mendefinisikan ulang kepemilikan melalui integrasi fisik dan digital.
              <br />Satu Entitas // Dua Eksistensi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
            <Link href="/shop" className="group bg-brand-purple text-black px-10 py-4 font-mono text-xs font-bold rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-all">
              ENTER ARCHIVE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="px-10 py-4 border border-white/20 font-mono text-xs font-bold rounded-sm hover:bg-white/5 transition-all text-center">
              THE MANIFESTO
            </Link>
          </div>
        </div>
        
        {/* Bottom Specs */}
        <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
          <div className="hidden md:block">
            <p className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">System Status</p>
            <p className="font-mono text-[10px] text-brand-green animate-pulse uppercase">● Nodes Connected</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">Location</p>
            <p className="font-mono text-[10px] uppercase">JKT // 106.8456° E</p>
          </div>
        </div>
      </section>
    </main>
  );
}