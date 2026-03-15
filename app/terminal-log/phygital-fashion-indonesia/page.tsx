"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  ShieldCheck, Package, Scan, User, Calendar, Clock, ArrowLeft, ChevronRight
} from "lucide-react";

// ============================================================================
// MOCK NEXT.JS (Hanya untuk keperluan Preview di layar Canvas)
// CATATAN UNTUK COPAS: 
// Saat menyalin kode ini ke file project asli Anda (VSCode/Vercel), 
// HAPUS bagian mock ini dan gunakan import bawaan Next.js berikut:
//
// import Link from 'next/link';
// import Image from 'next/image';
// ============================================================================
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Image = ({ src, alt, className, fill }: any) => fill ? <div className={`relative ${className}`}><img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover"/></div> : <img src={src} alt={alt} className={className} />;
// ============================================================================

// --- VARIAN ANIMASI ---
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }};
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};

export default function Article1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#836EF9] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#836EF9] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#836EF9] uppercase font-bold">
              <span className="bg-[#836EF9]/10 border border-[#836EF9]/30 px-3 py-1 rounded-full">Editorial</span>
              <span className="text-neutral-500">// Archive_01</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">
              Phygital Fashion: Baju Fisik + NFT Digital dalam Satu Koleksi | 0xTanda
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#836EF9] font-light leading-relaxed">
              0xTanda: Brand Phygital Fashion Pertama — Baju yang mempunyai Digital Twin NFT.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#836EF9]/20 flex items-center justify-center border border-[#836EF9]/50">
                  <User size={12} className="text-[#836EF9]" />
                </div>
                <span className="font-bold text-white">0xTanda Research Lab</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 14 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 5 Min Read</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* BODY ARTIKEL */}
      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">
          
          <motion.div variants={fadeUp}>
            <p>
              <span className="float-left text-6xl md:text-7xl font-bold text-[#836EF9] mr-4 mt-2 leading-none font-serif">S</span>
              elamat datang di titik temu antara realitas bendawi dan kedaulatan digital. Di era di mana batas antara dunia fisik dan ruang siber semakin melebur, cara kita memiliki dan menghargai sebuah karya seni pun berevolusi. 0xTanda hadir sebagai pionir yang memperkenalkan infrastruktur identitas melalui <b>Phygital Streetwear</b>.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="py-6">
            <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 bg-white/5 group">
              <Image src="/branding/og-banner.jpg" alt="0xTanda Phygital Concept" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#836EF9] border border-[#836EF9]/30 uppercase tracking-widest">
                Visual_Data // 0xTanda Phygital Concept
              </figcaption>
            </figure>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">1. Apa Itu Phygital Fashion dan Kenapa Butuh Ini Sekarang</h2>
            <p>
              <b>Phygital</b> adalah portmanteau dari <i>Physical</i> (Fisik) dan <i>Digital</i>. Dalam industri fashion, konsep ini merujuk pada penggabungan produk pakaian nyata yang bisa Anda kenakan dengan aset digital unik yang terekam secara permanen di dalam blockchain.
            </p>
            <p className="font-bold text-white">Kenapa kita membutuhkannya sekarang?</p>
            <p>
              Selama puluhan tahun, industri fashion—terutama di pusat gaya seperti Jakarta—menghadapi <b>Krisis Otentisitas</b>. Barang tiruan (counterfeit) merajalela, dan pembuktian keaslian seringkali hanya bergantung pada nota kertas atau label kain yang mudah dipalsukan. Selain itu, kepemilikan fashion tradisional bersifat statis; tidak ada jejak sejarah (<i>provenance</i>) yang bisa dibuktikan secara publik mengenai siapa pemilik pertama sebuah unit koleksi langka.
            </p>
            <p>
              Phygital Fashion menyelesaikan masalah ini dengan menciptakan <b>Digital Twin</b> (Kembaran Digital). Setiap helai pakaian fisik memiliki identitas digitalnya sendiri yang mustahil diduplikasi, memberikan jaminan keaslian absolut dan nilai historis yang abadi.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5">2. Cara Kerja: Dari Produk Fisik ke NFT dalam 3 Langkah</h2>
            <p>
              0xTanda merancang protokol <b>Concierge Airdrop</b> untuk menghilangkan segala hambatan teknis Web3. Anda tidak perlu membayar biaya jaringan (gas fee) atau memahami bahasa pemrograman rumit untuk mengklaim hak Anda.
            </p>
            <ul className="space-y-6 mt-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#836EF9]/10 p-2 rounded-sm border border-[#836EF9]/30 text-[#836EF9]">
                  <Package size={20} />
                </div>
                <div>
                  <strong className="text-white block mb-1">Akuisisi Fisik (Acquire)</strong> 
                  Dapatkan koleksi fisik melalui kanal resmi. Setiap produk dikemas dengan standar kualitas tinggi yang mencerminkan nilai koleksinya.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#836EF9]/10 p-2 rounded-sm border border-[#836EF9]/30 text-[#836EF9]">
                  <Scan size={20} />
                </div>
                <div>
                  <strong className="text-white block mb-1">Temukan Kode Rahasia (Reveal)</strong> 
                  Di dalam paket, terdapat Genesis Collection Card. Gosok panel pelindung perak pada kartu untuk menemukan Secret Code unik milik Anda.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#836EF9]/10 p-2 rounded-sm border border-[#836EF9]/30 text-[#836EF9]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong className="text-white block mb-1">Klaim Identitas (Verify)</strong> 
                  Pindai QR Code pada kartu atau kunjungi <Link href="/verify" className="text-[#836EF9] hover:underline">0xtanda.xyz/verify</Link>. Masukkan kode tersebut beserta alamat dompet digital (wallet) Anda. Tim kami akan melakukan validasi manual dan mengirimkan NFT Digital Twin langsung ke identitas digital Anda dalam waktu 1x24 jam.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5">3. Koleksi 0xTanda yang Tersedia Sekarang di Websitenya</h2>
            <p>
              Saat ini, fokus utama rilis adalah <b>Genesis Boxy Tee (Batch 01 - Generation 01)</b>. Produk ini bukan sekadar pakaian jalanan, melainkan "Hardware" dari identitas digital Anda dengan spesifikasi industrial:
            </p>
            <div className="bg-[#121212] border border-white/10 p-6 md:p-8 rounded-sm space-y-4">
              <p>
                <span className="text-[#836EF9] font-bold">16s Heavyweight Cotton:</span> Menggunakan material kapas murni seberat ±245 GSM yang sangat tebal, memberikan struktur kaku yang konsisten dan daya tahan bertahun-tahun (Anti-Fast Fashion).
              </p>
              <div className="w-full h-[1px] bg-white/5" />
              <p>
                <span className="text-[#836EF9] font-bold">Boxy Oversized Silhouette:</span> Potongan arsitektural yang dirancang untuk memberikan volume dan pernyataan gaya yang kuat di jalanan.
              </p>
              <div className="w-full h-[1px] bg-white/5" />
              <p>
                <span className="text-[#836EF9] font-bold">High-Density Art Print:</span> Desain Cyborg Archetype yang melambangkan fusi manusia dan teknologi, dicetak dengan presisi tinggi untuk ketahanan cuci maksimal.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5">4. Kenapa Pembeli Memilih 0xTanda vs Brand Fashion Biasa</h2>
            <p>
              Berbeda dengan brand fashion konvensional di mana nilai produk menurun setelah Anda meninggalkan toko, 0xTanda memberikan utilitas dan manfaat nyata yang melekat pada kepemilikan aset digital Anda. Manfaat ini dibagi menjadi dua tingkatan strategis:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#836EF9]/5 border border-[#836EF9]/30 p-6 md:p-8 rounded-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#836EF9]/10 rounded-bl-full pointer-events-none" />
                <h3 className="text-[#836EF9] font-bold text-lg md:text-xl tracking-tight">A. ROYAL RESISTANCE</h3>
                <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest font-bold">(200 Pembeli Pertama)</p>
                <p className="text-sm text-neutral-300">Status tertinggi bagi pendukung awal ekosistem 0xTanda.</p>
                <ul className="text-sm space-y-3 pt-2">
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-[#836EF9] rounded-full mt-2" />
                    <span><b>Akses Prioritas:</b> Menjadi yang pertama mendapatkan intelijen dan slot perilisan Archive atau kolaborasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-[#836EF9] rounded-full mt-2" />
                    <span><b>Diskon 10%:</b> Potongan harga permanen untuk setiap pembelian koleksi fisik berikutnya.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-[#836EF9] rounded-full mt-2" />
                    <span><b>The War Room:</b> Masuk komunitas VIP Telegram, diskusi langsung dengan tim, dan hak suara desain mendatang.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm space-y-4">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">B. REGULAR HOLDER</h3>
                <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest font-bold">(Verified Owners)</p>
                <p className="text-sm text-neutral-400">Bagi setiap pemilik sah produk 0xTanda yang telah terverifikasi.</p>
                <ul className="text-sm space-y-3 pt-2">
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-white/40 rounded-full mt-2" />
                    <span><b>Bukti Keaslian Absolut:</b> NFT bertindak sebagai sertifikat digital 100% original.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-white/40 rounded-full mt-2" />
                    <span><b>Hak Kepemilikan Karya:</b> Status tervalidasi sebagai kolektor resmi ekosistem.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-white/40 rounded-full mt-2" />
                    <span><b>Diskon 5%:</b> Apresiasi potongan harga untuk setiap koleksi reguler.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 bg-white/40 rounded-full mt-2" />
                    <span><b>Akses Komunitas Penuh:</b> Jaringan individu peminat fashion, seni, dan Web3.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
             <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8">5. Cara Beli dan Klaim NFT-mu Hari Ini (Tanpa Harus Ahli Crypto)</h2>
             <p>Kami percaya bahwa teknologi seharusnya mempermudah, bukan mempersulit. Di 0xTanda, akses ke masa depan fashion dibuat semudah belanja daring biasa.</p>
             <ul className="space-y-4">
               <li><b className="text-white">Tanpa Biaya Gas (Zero Gas Fee):</b> 0xTanda menanggung seluruh biaya transaksi blockchain saat mengirimkan NFT ke dompet Anda.</li>
               <li><b className="text-white">Edukasi dan Utilitas:</b> Fokus kami adalah kegunaan nyata. NFT 0xTanda adalah kunci akses komunitas dan bukti sejarah, bukan instrumen keuangan untuk spekulasi. Kami mengedukasi kolektor bahwa nilai sejati terletak pada kelangkaan yang terverifikasi dan kualitas fisik yang dirasakan.</li>
               <li><b className="text-white">Kedaulatan Kepemilikan:</b> Setelah aset berpindah tangan ke dompet digital Anda, Anda memegang kendali penuh atas identitas digital tersebut.</li>
             </ul>
             <p className="pt-6 font-medium text-white italic">
               Amankan unit fisik Anda sekarang melalui halaman Shop, klaim Digital Twin Anda, dan jadilah bagian dari revolusi Phygital fashion di Jakarta sebelum Batch 01 ditutup selamanya.
             </p>
             <div className="bg-[#836EF9]/10 border-l-4 border-[#836EF9] p-6 mt-6">
                <p className="font-serif text-lg md:text-xl text-white italic">"Tangible craftsmanship you can feel, secured by digital ownership you can prove."</p>
             </div>
          </motion.div>
        </div>
      </article>
      
      {/* INTERNAL LINKS (Call To Action Box) */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <Link 
            href="/terminal-log/cara-klaim-nft" 
            className="flex-1 group bg-[#121212] border border-white/10 p-6 flex flex-col items-start gap-4 hover:border-[#836EF9]/50 transition-all rounded-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#836EF9]/10 flex items-center justify-center text-[#836EF9] group-hover:scale-110 transition-transform">
              <ShieldCheck size={18} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Aktivasi</p>
              <h4 className="text-white font-bold tracking-tight flex items-center gap-2 group-hover:text-[#836EF9] transition-colors">
                Lihat Panduan Klaim NFT Lengkap <ChevronRight size={16} />
              </h4>
            </div>
          </Link>

          <Link 
            href="/shop" 
            className="flex-1 group bg-[#121212] border border-white/10 p-6 flex flex-col items-start gap-4 hover:border-[#00FF9D]/50 transition-all rounded-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] group-hover:scale-110 transition-transform">
              <Package size={18} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Katalog</p>
              <h4 className="text-white font-bold tracking-tight flex items-center gap-2 group-hover:text-[#00FF9D] transition-colors">
                Jelajahi Koleksi Limited Drop Terbaru <ChevronRight size={16} />
              </h4>
            </div>
          </Link>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {['Instagram', 'Twitter', 'TikTok', 'Telegram'].map((soc) => (
              <a key={soc} href="#" className="text-[11px] font-mono text-neutral-600 hover:text-[#836EF9] transition-colors uppercase tracking-[0.3em]">{soc}</a>
            ))}
          </div>
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_001_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}