// app/about/page.tsx
import RoadmapSlider from "@/components/RoadmapSlider";
import { ASSETS } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="bg-black text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 text-center mb-20">
        <img src={ASSETS.logoMain} alt="0xTanda" className="h-40 md:h-64 mx-auto mb-6 object-contain" />
        <div className="inline-block border border-[#836EF9] bg-[#836EF9]/8 px-4 py-1 mb-4">
          <span className="font-mono text-xs text-[#836EF9] uppercase">BRAND MANIFESTO // V1.0</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">Mendefinisikan Ulang<br/><span className="text-neutral-400">Kepemilikan.</span></h1>
        <p className="text-neutral-400 font-mono max-w-2xl mx-auto">Kami tidak hanya menjual pakaian. Kami membangun arsip. Di era di mana karya seni mudah disalin, 0xTanda menghadirkan keaslian yang terverifikasi.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-3 hidden md:block">
          <nav className="sticky top-32 border-l border-[#333] pl-6 space-y-4 text-left">
            <a href="#intro" className="block text-sm font-mono text-[#836EF9]">01. PENDAHULUAN</a>
            <a href="#problem" className="block text-sm font-mono text-neutral-400">02. MASALAH</a>
            <a href="#solution" className="block text-sm font-mono text-neutral-400">03. TIGA PILAR</a>
            <a href="#roadmap-section" className="block text-sm font-mono text-neutral-400">04. PETA JALAN</a>
          </nav>
        </div>

        <div className="md:col-span-9 space-y-20">
          <section id="intro">
            <div className="flex items-center gap-3 mb-6"><div className="w-1.5 h-8 bg-[#836EF9] rounded" /><h2 className="text-2xl font-bold uppercase">Latar Belakang</h2></div>
            <p className="text-neutral-400 font-mono">Industri mode Indonesia sedang berada di persimpangan jalan... <strong>0xTanda</strong> lahir dari kegelisahan ini.</p>
          </section>

          <section id="problem">
            <div className="flex items-center gap-3 mb-6"><div className="w-1.5 h-8 bg-[#836EF9] rounded" /><h2 className="text-2xl font-bold uppercase">Masalah Utama</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121212] p-6 border border-[#333]"><h3 className="text-white font-bold mb-2">Penurunan Kualitas</h3><p className="text-neutral-400 text-sm">Dominasi bahan murah ...</p></div>
              <div className="bg-[#121212] p-6 border border-[#333]"><h3 className="text-white font-bold mb-2">Kepemilikan Semu</h3><p className="text-neutral-400 text-sm">Saat Anda membeli pakaian biasa ...</p></div>
            </div>
          </section>

          <section id="solution">
            <div className="flex items-center gap-3 mb-6"><div className="w-1.5 h-8 bg-[#836EF9] rounded" /><h2 className="text-2xl font-bold uppercase">Tiga Pilar 0xTanda</h2></div>
            <div className="space-y-8 text-neutral-400">
              <div><h3 className="text-xl font-bold text-white">The Canvas: Eksplorasi Material</h3><p className="text-sm">Fokus kami adalah kualitas sandang...</p></div>
              <div><h3 className="text-xl font-bold text-white">The Artifact: Kartu Koleksi Fisik</h3><p className="text-sm">Setiap produk disertai kartu fisik eksklusif...</p></div>
              <div><h3 className="text-xl font-bold text-white">The Rights: Sertifikat Digital</h3><p className="text-sm">Kami memanfaatkan teknologi Blockchain...</p></div>
            </div>
          </section>
        </div>
      </div>

      <section id="roadmap-section" className="border-t border-[#333] pt-12 mb-20">
        <RoadmapSlider />
      </section>

      <div className="text-center pt-12 pb-8 border-t border-[#333]">
        <p className="text-3xl md:text-4xl font-bold mb-2">"ONE ENTITY // DUAL EXISTENCE"</p>
        <p className="text-xs text-neutral-400">JAKARTA, INDONESIA // EST. 2026</p>
      </div>
    </main>
  );
}
