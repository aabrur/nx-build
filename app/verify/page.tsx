import React from 'react';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import CustomCursor from '@/components/CustomCursor';
import { ShieldCheck } from 'lucide-react';

export default function VerifyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="max-w-md w-full bg-neutral-900 border border-white/10 p-12 relative overflow-hidden fade-in">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(131,110,249,0.3)]">
            <ShieldCheck size={40} className="text-black" />
          </div>
          
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter mb-6">Redemption Portal</h2>
          <p className="text-neutral-400 text-xs font-mono mb-10 leading-relaxed uppercase">
            Masukkan kode rahasia dari Kartu Akses kamu untuk mengklaim kepemilikan digital koleksi Genesis.
          </p>

          <div className="space-y-4 mb-10 text-left">
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg">
              <span className="font-mono text-brand-purple text-xs font-bold">01</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Siapkan Genesis Access Card</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg">
              <span className="font-mono text-brand-purple text-xs font-bold">02</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Gosok panel kode di belakang kartu</span>
            </div>
          </div>

          <a 
            href="https://forms.gle/your-google-form-link" 
            target="_blank" 
            className="block w-full py-5 bg-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-green transition-colors"
          >
            Open Claims Form
          </a>
          
          <p className="text-[8px] text-neutral-600 mt-6 font-mono tracking-widest uppercase">
            Status: System Ready // External Link Secured
          </p>
        </div>
      </div>
    </main>
  );
}