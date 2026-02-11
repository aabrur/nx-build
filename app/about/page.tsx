import React from 'react';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import CustomCursor from '@/components/CustomCursor';
import { ROADMAP_DATA } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-20">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="pt-44 px-6 max-w-4xl mx-auto">
        <section className="text-center mb-32">
          <h2 className="text-[10px] font-mono text-brand-purple tracking-[0.5em] mb-6 uppercase">The Manifesto</h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 leading-none uppercase">
            Mendefinisikan <br/><span className="text-neutral-600 italic">Masa Depan.</span>
          </h1>
          <p className="text-lg text-neutral-400 font-mono leading-relaxed italic max-w-2xl mx-auto">
            "0xTanda adalah jembatan antara identitas fisik yang nyata dengan kepemilikan digital yang abadi."
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-brand-purple" />
            <h4 className="text-2xl font-display font-bold uppercase tracking-tighter">Phygital Concept</h4>
            <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
              Setiap produk kami memiliki 'Digital Twin' di blockchain. Kami menggabungkan material garmen industrial dengan teknologi NFC untuk memastikan keaslian yang tidak bisa dipalsukan.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-1 bg-white" />
            <h4 className="text-2xl font-display font-bold uppercase tracking-tighter">Limited Archival</h4>
            <p className="text-neutral-400 font-mono text-xs leading-relaxed uppercase">
              Kami tidak melakukan mass-production. Setiap rilis adalah arsip terbatas (Limited Batch) yang didesain untuk bertahan lama, baik secara fisik maupun nilai koleksinya.
            </p>
          </div>
        </div>

        {/* Roadmap */}
        <section className="border-t border-white/10 pt-20">
          <h4 className="text-center font-display text-3xl font-bold uppercase mb-20 italic tracking-tighter">PROJECT ROADMAP</h4>
          <div className="space-y-16">
            {ROADMAP_DATA.map((item, idx) => (
              <div key={idx} className="flex gap-10 group">
                <div className="text-5xl font-display font-bold text-neutral-800 group-hover:text-brand-purple transition-colors duration-500">{item.phase}</div>
                <div>
                  <h5 className="font-display font-bold text-2xl uppercase flex items-center gap-4 italic">
                    {item.title} 
                    <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-mono font-normal tracking-widest">{item.year}</span>
                  </h5>
                  <p className="text-neutral-500 font-mono text-xs mt-4 uppercase leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}