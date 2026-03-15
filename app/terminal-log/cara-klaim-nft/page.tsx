"use client";

import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { ShieldCheck, Scan, Wallet, User, Calendar, Clock, ArrowLeft, CheckCircle2, MessageSquareWarning, AlertTriangle, Send, ChevronRight } from "lucide-react";

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

export default function CaraKlaimNFTPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] selection:bg-[#00FF9D] selection:text-black font-sans relative">
      {/* READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#836EF9] to-[#00FF9D] z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER ARTIKEL JURNAL */}
      <header className="relative pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/terminal-log" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#00FF9D] mb-10 font-mono text-[10px] tracking-[0.4em] uppercase transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            {/* Tag Kategori Jurnal */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#00FF9D] uppercase font-bold">
              <span className="bg-[#00FF9D]/10 border border-[#00FF9D]/30 px-3 py-1 rounded-full">Tutorial & Guide</span>
              <span className="text-neutral-500">// Archive_02</span>
            </motion.div>

            {/* Judul Artikel */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white uppercase">
              Cara Klaim NFT Fashion 0xTanda: Panduan Lengkap Step-by-Step | 0xTanda Jakarta
            </motion.h1>

            {/* Sub-judul / Deck */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#00FF9D] font-medium leading-relaxed">
              Cara Klaim NFT Baju 0xTanda-mu dalam 5 Menit — Tanpa Ribet, Tanpa Harus Jago Crypto.
            </motion.p>

            {/* Metadata Penulis */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] text-neutral-500 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#00FF9D]/20 flex items-center justify-center border border-[#00FF9D]/50">
                  <User size={12} className="text-[#00FF9D]" />
                </div>
                <span className="font-bold text-white">0xTanda Concierge Team</span>
              </div>
              <div className="flex items-center gap-2"><Calendar size={14} /> 15 Maret 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 4 Min Read</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* BODY ARTIKEL */}
      <article className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="space-y-10 text-[17px] md:text-[19px] text-neutral-300 leading-[1.8] font-light">
            
            {/* PENDAHULUAN DENGAN DROP CAP */}
            <motion.div variants={fadeUp}>
              <p>
                <span className="float-left text-6xl md:text-7xl font-bold text-[#00FF9D] mr-4 mt-2 leading-none font-serif">K</span>
                ami memahami bahwa memasuki dunia Web3 bisa terasa menakutkan bagi pemula. Istilah seperti <i>gas fee</i>, <i>smart contract</i>, atau <i>crypto wallet</i> seringkali menjadi tembok pembatas. Namun di 0xTanda, kami telah meruntuhkan tembok itu. Protokol <b>Concierge Airdrop</b> kami dirancang agar siapapun dapat mengklaim Digital Twin NFT dari pakaian fisik mereka semudah mengisi formulir pendaftaran daring biasa.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div variants={fadeUp} className="py-6">
              <figure className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 group bg-white/5">
                <Image src="/branding/og-banner.jpg" alt="Panduan Klaim NFT 0xTanda" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                <figcaption className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-[#00FF9D] border border-[#00FF9D]/30 uppercase tracking-widest">
                  System_Log // Concierge Tutorial
                </figcaption>
              </figure>
            </motion.div>

            {/* SEKSI 1 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-4 uppercase">
                <span className="text-[#00FF9D] font-mono mr-3">1.</span> Yang Kamu Butuhkan Sebelum Mulai
              </h2>
              <p>Sebelum mengakses portal aktivasi, pastikan tiga artefak utama ini sudah ada di tangan Anda:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#836EF9]"><Scan size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Genesis Card (Secret Code)</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Kartu fisik yang ada di dalam paket pembelian. Gosok panel pelindung perak untuk melihat 12 digit kode rahasiamu.</p>
                </div>
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#00FF9D]"><Wallet size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Phantom Wallet (EVM)</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Dompet digital pribadimu. Kami sangat merekomendasikan aplikasi Phantom karena UI-nya paling ramah untuk pemula.</p>
                </div>
                <div className="bg-[#121212] border border-white/10 p-6 rounded-sm space-y-4">
                  <div className="text-[#836EF9]"><CheckCircle2 size={24} /></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Bukti Pembelian</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Screenshot atau foto bukti transfer/struk saat kamu memesan koleksi fisik 0xTanda.</p>
                </div>
              </div>
            </motion.div>

            {/* SEKSI 2 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8 uppercase">
                <span className="text-[#00FF9D] font-mono mr-3">2.</span> Langkah 1–5: Dari Scan Barcode Hingga NFT Masuk ke Walletmu
              </h2>
              <p>Sudah menyiapkan ketiganya? Mari kita mulai proses inisiasi identitas digitalmu:</p>
              <ul className="space-y-8 mt-8 border-l border-white/10 pl-6 md:pl-8 ml-2">
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">1</span>
                  <strong className="text-white block mb-2 text-lg">Siapkan Phantom Wallet</strong>
                  Unduh aplikasi <b>Phantom</b> di App Store/Play Store (atau ekstensi Chrome). Buat dompet baru, dan ingat: <b>Simpan Recovery Phrase (kata sandi) Anda di tempat yang sangat aman dan jangan berikan ke siapapun!</b> Klik ikon rantai di atas, pastikan jaringannya mencakup "Ethereum/EVM".
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">2</span>
                  <strong className="text-white block mb-2 text-lg">Akses Portal Aktivasi 0xTanda</strong>
                  Kunjungi halaman <Link href="/verify" className="text-[#00FF9D] hover:underline font-mono">0xtanda.xyz/verify</Link> (atau scan QR yang ada di kartu Anda). Baca instruksi awal, lalu klik "INITIALIZE VERIFICATION".
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">3</span>
                  <strong className="text-white block mb-2 text-lg">Input Secret Code</strong>
                  Masukkan 12 digit kode rahasia dari hasil gosok panel Genesis Card Anda ke kolom pertama. Sistem akan memformatnya secara otomatis.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">4</span>
                  <strong className="text-white block mb-2 text-lg">Salin Wallet Address</strong>
                  Buka aplikasi Phantom Anda, klik nama dompet di bagian atas untuk menyalin "Alamat Wallet" (Address). Pastikan alamatnya dimulai dengan huruf <code className="bg-white/10 px-2 py-0.5 text-[#00FF9D]">0x...</code>. Paste (tempel) alamat tersebut di kolom kedua pada formulir.
                </li>
                <li className="relative">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-[#00FF9D] text-black font-bold font-mono text-xs flex items-center justify-center rounded-full">5</span>
                  <strong className="text-white block mb-2 text-lg">Lengkapi Profil & Submit</strong>
                  Isi data dirimu (Email, ID Telegram dengan awalan @), dan unggah bukti pembelian. Centang kotak persetujuan, dan klik <b>SUBMIT</b>. Selesai! Tim 0xTanda akan menanggung biaya gas fee dan melakukan Airdrop NFT Anda dalam waktu maksimal 1x24 jam.
                </li>
              </ul>
            </motion.div>

            {/* SEKSI 3 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8 uppercase">
                <span className="text-[#00FF9D] font-mono mr-3">3.</span> Apa yang Bisa Kamu Lakukan dengan NFT Setelah Diklaim?
              </h2>
              <div className="bg-[#00FF9D]/5 border border-[#00FF9D]/30 p-6 md:p-8 rounded-sm space-y-4">
                <p>Begitu Aset Digital 0xTanda (NFT) mendarat di dompet Phantom Anda, status Anda resmi ditingkatkan menjadi <b>Verified Holder</b>. Aset ini bertindak sebagai:</p>
                <ul className="space-y-3 mt-4 text-sm">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-[#00FF9D] shrink-0 mt-0.5" size={18} />
                    <span><b>Sertifikat Keaslian Abadi:</b> Bukti mutlak bahwa garmen yang Anda pakai adalah 100% original.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-[#00FF9D] shrink-0 mt-0.5" size={18} />
                    <span><b>Akses Diskon:</b> Menikmati potongan harga permanen untuk drop fisik berikutnya.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <User className="text-[#00FF9D] shrink-0 mt-0.5" size={18} />
                    <span><b>Kunci Komunitas:</b> Menjadi paspor masuk ke Telegram eksklusif (The War Room) untuk pembeli Royal Resistance.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* SEKSI 4 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8 uppercase">
                <span className="text-[#00FF9D] font-mono mr-3">4.</span> Masalah Umum Saat Klaim & Cara Mengatasinya
              </h2>
              <p>Kendala teknis kadang terjadi. Berikut adalah solusi cepat untuk beberapa skenario yang paling sering dialami:</p>
              <div className="grid gap-4 mt-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-sm">
                  <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-2">
                    <MessageSquareWarning size={16} /> Notifikasi: "Kode Sudah Digunakan"
                  </h4>
                  <p className="text-sm text-neutral-400">Kode pada Genesis Card hanya berlaku satu kali. Jika Anda merasa belum pernah mengklaimnya, segera ambil foto kartu fisik Anda dan hubungi tim *Support* kami.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-sm">
                  <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-2">
                    <AlertTriangle size={16} /> Notifikasi: "Alamat Wallet Tidak Valid"
                  </h4>
                  <p className="text-sm text-neutral-400">Sistem 0xTanda mendeteksi format dompet Anda salah. Pastikan Anda menyalin alamat lengkap dari aplikasi Phantom, yang selalu diawali dengan <code>0x...</code>.</p>
                </div>
              </div>
            </motion.div>

            {/* SEKSI 5 */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-8 border-t border-white/5 mt-8 uppercase">
                <span className="text-[#00FF9D] font-mono mr-3">5.</span> Tanya Komunitas: Bergabung ke Telegram 0xTanda Official
              </h2>
              <p>Masih merasa bingung? Anda tidak dibiarkan berjuang sendiri. Revolusi Web3 adalah tentang kebersamaan dan komunitas.</p>
              <p>Jika Anda memiliki pertanyaan seputar instalasi wallet, cara memverifikasi email, atau sekadar ingin berbincang tentang masa depan Phygital Fashion di Jakarta, pintu komunitas kami selalu terbuka lebar.</p>
              <div className="mt-8">
                <a href="https://t.me/Official0xTanda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#00FF9D] hover:text-black hover:border-[#00FF9D] transition-all rounded-sm">
                  <Send size={16} /> JOIN OFFICIAL TELEGRAM
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </article>

      {/* INTERNAL LINKS (Recommended Next Steps) */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h4 className="font-mono text-[#00FF9D] text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Lanjutkan Membaca:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/shop" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-[#00FF9D]/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Katalog 0xTanda</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#00FF9D] transition-colors flex items-start gap-2 justify-between">
                  Kembali ke Halaman Produk Koleksi Aktif <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
            <Link href="/terminal-log" className="group bg-[#121212] border border-white/10 p-5 flex flex-col gap-4 hover:border-white/50 transition-all rounded-sm">
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Social Proof</p>
                <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors flex items-start gap-2 justify-between">
                  Lihat Studi Kasus Pembeli Jakarta yang Sudah Klaim <ChevronRight size={16} className="shrink-0 mt-1" />
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER SOSIAL */}
      <footer className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-[0.5em]">0XTANDA_DIGITAL_ARCHIVE_ISSUE_002_LOCKED</p>
        </div>
      </footer>
    </main>
  );
}