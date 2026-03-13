"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Fingerprint,
  Layers,
  ShieldCheck,
  Package,
  Wallet,
  Scan,
  CheckCircle2,
  MoveRight,
  Menu,
  X,
  Send,
  ExternalLink,
} from "lucide-react";

// ================================================================
// KOMPONEN: MARQUEE
// ================================================================
function Marquee() {
  const text =
    "0XTANDA • PHYGITAL STREETWEAR • GENESIS BATCH 001 • JAKARTA EST. 2026 • ";
  return (
    <div className="fixed top-0 left-0 w-full bg-[#836EF9] text-black py-2 z-[60] overflow-hidden font-mono text-[10px] font-bold">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 italic tracking-widest">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// ================================================================
// KOMPONEN: NAVBAR (SUDAH DITAMBAHKAN ANIMATE-GLITCH DI MOBILE)
// ================================================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "VERIFY", path: "/verify" },
    { name: "ABOUT", path: "/about" },
    { name: "TERMINAL LOG", path: "/terminal-log" },
  ];
  return (
    <nav className="fixed top-10 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
        <Link href="/" className="flex items-center group">
          <div className="relative w-8 h-8">
            <Image
              src="/branding/logo-0xtanda-icon.png"
              alt="0xTanda Icon"
              width={32}
              height={32}
              className="object-contain group-hover:rotate-12 transition-transform duration-500"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest transition-all ${
                pathname === link.path
                  ? "bg-[#836EF9] text-black font-bold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* MOBILE MENU - SUDAH ADA ANIMATE-GLITCH */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 md:hidden animate-glitch shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-bold tracking-tighter transition-colors uppercase ${
                pathname === link.path ? "text-[#836EF9]" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// ================================================================
// FRAMER MOTION VARIANTS
// ================================================================
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ================================================================
// KOMPONEN PENDUKUNG: SECTION LABEL
// ================================================================
function SectionLabel({ color = "#836EF9", children }: { color?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <div className="w-16 h-[1px]" style={{ backgroundColor: color }} />
      <span
        className="text-xs font-bold tracking-[0.4em] uppercase"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}

// ================================================================
// KOMPONEN PENDUKUNG: CORNER BRACKET BOX
// ================================================================
function BracketBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative border border-white/5 p-8 bg-white/[0.02] ${className}`}>
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#836EF9]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#836EF9]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#836EF9]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#836EF9]" />
      {children}
    </div>
  );
}

// ================================================================
// DATA: LANGKAH CARA KERJA
// ================================================================
const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <Package size={20} />,
    title: "Beli Produk Fisik",
    desc: "Kamu memesan dan menerima garmen fisik 0xTanda — baju berkualitas tinggi dengan craftsmanship nyata yang dirancang untuk daily wear.",
  },
  {
    step: "02",
    icon: <Scan size={20} />,
    title: "Ambil Secret Code",
    desc: "Di dalam packaging, kamu menemukan Genesis Collection Card eksklusif berisi Secret Code terenkripsi yang terhubung langsung ke identitas digital produkmu.",
  },
  {
    step: "03",
    icon: <Wallet size={20} />,
    title: "Klaim Digital Twin NFT-mu",
    desc: "Input Secret Code di halaman Verify. Tim kami memvalidasi dan mengirimkan NFT resmi ke walletmu. Biaya gas (jaringan) ditanggung sepenuhnya oleh 0xTanda.",
  },
];

// ================================================================
// DATA: PERBANDINGAN 0xTANDA vs BRAND BIASA
// ================================================================
const COMPARISON = [
  {
    label: "Bukti Kepemilikan",
    tanda: "On-chain, permanen, tidak bisa dipalsukan",
    biasa: "Struk kertas yang bisa hilang atau dipalsu",
  },
  {
    label: "Anti-Pemalsuan",
    tanda: "Digital Twin + Smart Contract = keaslian absolut",
    biasa: "Hologram stiker yang mudah ditiru",
  },
  {
    label: "Sistem Rilis",
    tanda: "Supply terkunci di blockchain (Zero Deadstock)",
    biasa: "Klaim 'limited edition' tanpa transparansi",
  },
  {
    label: "Nilai Historis",
    tanda: "Riwayat kepemilikan tersimpan selamanya",
    biasa: "Tidak ada rekam jejak setelah dibeli",
  },
  {
    label: "Akses Komunitas",
    tanda: "Holder mendapat akses eksklusif & prioritas rilis",
    biasa: "Tidak ada interaksi pasca-pembelian",
  },
];

// ================================================================
// DATA: LANGKAH BELI & KLAIM
// ================================================================
const BUY_STEPS = [
  { num: "1", text: "Buka halaman Shop dan pilih koleksi yang tersedia." },
  { num: "2", text: "Lakukan pembelian — tidak perlu punya crypto wallet dulu." },
  { num: "3", text: "Terima paket fisik berikut Genesis Collection Card." },
  { num: "4", text: "Buka 0xtanda.xyz/verify, input Secret Code dari kartu." },
  { num: "5", text: "Isi form singkat dan submit. NFT masuk ke wallet dalam 1x24 jam." },
];

// ================================================================
// HALAMAN UTAMA
// ================================================================
export default function TerminalLogContent() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono overflow-x-hidden relative">
      {/* Schema.org JSON-LD — Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Phygital Fashion Jakarta: Baju Fisik + NFT Digital dalam Satu Koleksi",
            description:
              "Panduan lengkap phygital fashion di Jakarta — apa itu, cara kerja, dan mengapa 0xTanda adalah brand phygital streetwear pertama di Indonesia.",
            author: {
              "@type": "Organization",
              name: "0xTanda",
              url: "https://0xtanda.xyz",
            },
            publisher: {
              "@type": "Organization",
              name: "0xTanda",
              logo: {
                "@type": "ImageObject",
                url: "https://0xtanda.xyz/branding/logo-0xtanda.png",
              },
            },
            datePublished: "2026-03-01",
            dateModified: new Date().toISOString().split("T")[0],
            image: "https://0xtanda.xyz/branding/og-banner.jpg",
            url: "https://0xtanda.xyz/terminal-log",
            inLanguage: "id-ID",
            keywords:
              "phygital fashion Jakarta, baju NFT Indonesia, fashion blockchain Indonesia, 0xTanda",
          }),
        }}
      />

      <Marquee />
      <Navbar />

      {/* ============================================================
          HERO — H1 + META ARTIKEL
      ============================================================ */}
      <section className="pt-48 pb-24 px-6 border-b border-white/5 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#836EF9]/5 blur-[140px] pointer-events-none rounded-full" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-[10px] text-neutral-600 hover:text-neutral-400 tracking-widest uppercase transition-colors"
            >
              Home
            </Link>
            <span className="text-neutral-700 text-[10px]">/</span>
            <span className="text-[10px] text-[#836EF9] tracking-widest uppercase">
              Terminal Log
            </span>
          </motion.div>

          {/* Tag artikel */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <span className="text-[9px] font-bold text-black bg-[#836EF9] px-3 py-1 tracking-widest uppercase">
              PHYGITAL 101
            </span>
            <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
              // Jakarta, 2026
            </span>
            <span className="text-[10px] text-neutral-600 tracking-widest">
              8 MIN READ
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.05] mb-10 text-white"
          >
            0xTanda:{" "}
            <span className="text-[#836EF9]">Brand Phygital Fashion</span>{" "}
            Pertama Jakarta —{" "}
            <span className="text-neutral-400">
              Baju yang Bisa Kamu Pakai di Dunia Nyata dan Metaverse
            </span>
          </motion.h1>

          {/* Intro / Hook */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-neutral-400 leading-relaxed tracking-widest uppercase max-w-3xl"
          >
            Di ranah streetwear modern, koleksi baru bermunculan setiap saat. Tapi tidak ada
            satu pun yang bisa menjawab pertanyaan mendasar ini:{" "}
            <strong className="text-white">
              apakah pakaian fisik yang kamu kenakan benar-benar terverifikasi sebagai milikmu secara mutlak, tanpa celah pemalsuan?
            </strong>{" "}
            0xTanda dibangun untuk menjawab hal itu.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 1: APA ITU PHYGITAL FASHION
      ============================================================ */}
      <section className="py-32 px-6 max-w-4xl mx-auto" id="apa-itu-phygital">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>01 // Apa Itu Phygital Fashion</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-8"
          >
            Apa Itu Phygital Fashion dan Kenapa{" "}
            <span className="text-[#836EF9]">Inovasi Ini Penting</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="space-y-6 text-neutral-400 text-sm leading-relaxed tracking-widest uppercase"
          >
            <motion.p variants={fadeUp}>
              <strong className="text-white">Phygital</strong> adalah gabungan
              kata <em className="text-[#836EF9]">Physical</em> dan{" "}
              <em className="text-[#836EF9]">Digital</em>. Dalam ekosistem
              kami, phygital berarti setiap rilisan pakaian fisik didampingi oleh representasi digital otentik berupa{" "}
              <strong className="text-white">
                NFT (Non-Fungible Token)
              </strong>{" "}
              yang disegel secara permanen di dalam jaringan blockchain.
            </motion.p>

            <motion.p variants={fadeUp}>
              Ini bukan tentang tren spekulatif. Ini murni tentang{" "}
              <strong className="text-white">
                pembuktian orisinalitas dan kebanggaan mengoleksi
              </strong>
              . Setiap 0xTanda yang kamu pegang memiliki 'Digital Twin' yang mencatat secara akurat seri rilisannya dan membuktikan bahwa produk tersebut 100% otentik dari lab kami — tanpa bisa diedit atau dihapus oleh siapa pun.
            </motion.p>

            <motion.p variants={fadeUp}>
              Skena fashion hari ini dibanjiri oleh produk replika dan klaim kelangkaan palsu. 
              Membeli barang dengan sebutan "limited edition" tak jarang hanya strategi pemasaran tanpa transparansi. Phygital fashion datang untuk menata ulang standar tersebut: menciptakan batas yang absolut antara karya orisinal dan bajakan.
            </motion.p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div variants={fadeUp} className="mt-14">
            <BracketBox className="border-[#836EF9]/20">
              <p className="text-base md:text-xl text-white italic leading-relaxed tracking-wide normal-case font-sans">
                "Bukan sekadar pakaian fisik. Melainkan identitas dan bukti keaslian yang tidak bisa dibantah — terenkripsi secara permanen."
              </p>
              <p className="mt-4 text-[10px] text-[#836EF9] tracking-widest uppercase">
                — Filosofi 0xTanda
              </p>
            </BracketBox>
          </motion.div>

          {/* Tiga pilar phygital */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          >
            {[
              {
                icon: <Cpu size={20} />,
                title: "Physical",
                desc: "Garmen berkualitas tinggi dengan craftsmanship nyata yang dirancang elegan untuk melengkapi karaktermu.",
              },
              {
                icon: <Fingerprint size={20} />,
                title: "Digital",
                desc: "Sertifikat keaslian dalam bentuk token kriptografis yang tersimpan aman sebagai koleksi pribadimu.",
              },
              {
                icon: <Layers size={20} />,
                title: "Unified",
                desc: "Sinergi mutlak: pakaian fisik yang kamu kenakan selaras dengan aset digital yang membuktikan keasliannya.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "rgba(131,110,249,0.4)" }}
                className="border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 group"
              >
                <div className="text-[#836EF9] mb-4 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 2: CARA KERJA — 3 LANGKAH
      ============================================================ */}
      <section
        className="py-32 px-6 bg-white/[0.02] border-y border-white/5"
        id="cara-kerja"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>02 // Cara Kerja</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-4"
            >
              Cara Kerja:{" "}
              <span className="text-[#836EF9]">
                Dari Produk Fisik ke Aset Digital dalam 3 Langkah
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[11px] text-neutral-500 uppercase tracking-widest mb-16 max-w-2xl leading-relaxed"
            >
              Sistem 0xTanda dirancang agar siapapun — bahkan mereka yang belum familiar dengan ekosistem blockchain — bisa memvalidasi koleksinya dengan mudah.
            </motion.p>

            {/* 3 Steps */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {HOW_IT_WORKS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  whileHover={{ y: -6, borderColor: "rgba(131,110,249,0.5)" }}
                  className="border border-white/5 bg-[#0E0E0E] p-8 relative group transition-all duration-300"
                >
                  {/* Step number */}
                  <span className="text-[#836EF9] font-mono text-xs font-bold block mb-6">
                    STEP_{item.step}
                  </span>

                  {/* Icon */}
                  <div className="text-[#836EF9] mb-4 group-hover:scale-110 transition-transform origin-left">
                    {item.icon}
                  </div>

                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Arrow connector (bukan yang terakhir) */}
                  {idx < 2 && (
                    <MoveRight
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/10 hidden md:block group-hover:text-[#836EF9]/50 transition-colors duration-300"
                      size={18}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA internal link ke /verify */}
            <motion.div variants={fadeUp} className="mt-14 text-center">
              <Link
                href="/verify"
                className="group inline-flex items-center gap-3 border border-[#836EF9]/30 text-[#836EF9] px-8 py-4 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-[#836EF9]/10 transition-all"
              >
                <ShieldCheck size={14} />
                Lihat Panduan Aktivasi Kepemilikan
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: KOLEKSI 0xTANDA
      ============================================================ */}
      <section className="py-32 px-6 max-w-5xl mx-auto" id="koleksi">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>03 // Eksplorasi Arsip</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-8"
          >
            Koleksi 0xTanda yang Tersedia{" "}
            <span className="text-[#836EF9]">Sekarang</span>
          </motion.h2>

          {/* Genesis Collection Feature Card */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden mb-12"
          >
            {/* Visual side */}
            <div className="relative bg-[#836EF9]/5 min-h-[320px] flex items-center justify-center p-12 border-r border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#836EF9]/10 to-transparent pointer-events-none" />
              <div className="relative w-full max-w-[240px] aspect-square">
                <Image
                  src="/product/gen1/nft/Genesis-Collcetion-Card-0xTanda.png"
                  alt="Genesis Collection Card 0xTanda — NFT Phygital Fashion"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Info side */}
            <div className="p-10 flex flex-col justify-between bg-white/[0.01]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[8px] font-bold text-black bg-[#836EF9] px-2 py-1 tracking-widest uppercase">
                    LIVE NOW
                  </span>
                  <span className="text-[9px] text-neutral-600 tracking-widest uppercase">
                    Batch #001
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter mb-4">
                  Genesis Boxy Tee
                </h3>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed mb-8">
                  Koleksi perdana 0xTanda. Dirilis secara eksklusif dan terbatas. Setiap unit ditemani oleh Genesis Collection Card sebagai kunci utama untuk mengamankan Digital Twin milikmu. Sebuah standar baru untuk kolektor skena fashion modern.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Potongan boxy premium yang terstruktur",
                    "Material 16s Heavyweight yang solid",
                    "Produksi dikontrol ketat (Zero Deadstock)",
                    "Akses Digital Twin inklusif",
                    "Distribusi menjangkau seluruh Indonesia",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-3">
                      <CheckCircle2 size={12} className="text-[#00FF9D] shrink-0" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/shop"
                className="group flex items-center gap-3 bg-[#836EF9] text-black px-6 py-4 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all w-full justify-center"
              >
                Jelajahi Arsip Rilisan Terbaru
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Sistem Holder */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="border border-[#836EF9]/30 bg-[#836EF9]/5 p-8 relative overflow-hidden group hover:border-[#836EF9]/60 transition-all"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 border border-[#836EF9]/10 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
              <h4 className="text-base font-bold text-white uppercase tracking-tighter mb-2">
                Royal Resistance
              </h4>
              <p className="text-[10px] text-[#836EF9] uppercase tracking-widest mb-6 font-bold">
                200 Pembeli Pertama
              </p>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                Pionir awal ekosistem 0xTanda. Menikmati hak akses privat ke rilisan mendatang, diskon loyalitas 10% permanen, serta status terhormat sebagai pendiri pergerakan phygital.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden hover:border-white/20 transition-all"
            >
              <h4 className="text-base font-bold text-white uppercase tracking-tighter mb-2">
                Regular Holder
              </h4>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-6 font-bold">
                Verified Owners
              </p>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                Pemegang koleksi yang tervalidasi. Mendapat kepastian atas keaslian produk, diskon 5%, dan posisi di dalam jaringan komunitas 0xTanda.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 4: 0xTANDA VS BRAND FASHION BIASA
      ============================================================ */}
      <section
        className="py-32 px-6 bg-black border-y border-white/5 relative overflow-hidden"
        id="perbandingan"
      >
        {/* Green ambient glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FF9D]/3 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel color="#00FF9D">04 // Perbedaan Mendasar</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-4"
            >
              Mengapa 0xTanda Mendefinisikan Ulang{" "}
              <span className="text-[#00FF9D]">Standar Koleksi Fashion</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[11px] text-neutral-500 uppercase tracking-widest mb-14 max-w-2xl leading-relaxed"
            >
              Ini bukan sekadar bersaing tentang siapa yang paling eksis. Ini tentang menggeser paradigma dari sekadar membeli barang, menjadi benar-benar memiliki sebuah koleksi orisinal.
            </motion.p>

            {/* Comparison Table */}
            <motion.div variants={stagger} className="space-y-0">
              {/* Header */}
              <div className="grid grid-cols-3 gap-0 border border-white/10">
                <div className="p-4 bg-white/5">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">
                    Aspek
                  </span>
                </div>
                <div className="p-4 bg-[#836EF9]/10 border-x border-white/10">
                  <span className="text-[9px] text-[#836EF9] uppercase tracking-widest font-bold">
                    0xTanda
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-[9px] text-neutral-600 uppercase tracking-widest font-bold">
                    Fashion Konvensional
                  </span>
                </div>
              </div>

              {COMPARISON.map((row, idx) => (
                <motion.div
                  key={row.label}
                  variants={fadeUp}
                  className={`grid grid-cols-3 gap-0 border-x border-b border-white/10 transition-colors hover:bg-white/[0.02] ${
                    idx % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
                  }`}
                >
                  <div className="p-4 flex items-center">
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">
                      {row.label}
                    </span>
                  </div>
                  <div className="p-4 border-x border-white/10 flex items-center gap-2 bg-[#836EF9]/5">
                    <CheckCircle2 size={10} className="text-[#00FF9D] shrink-0" />
                    <span className="text-[9px] text-white uppercase tracking-widest leading-relaxed">
                      {row.tanda}
                    </span>
                  </div>
                  <div className="p-4 flex items-center">
                    <span className="text-[9px] text-neutral-600 uppercase tracking-widest leading-relaxed">
                      {row.biasa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Kesimpulan */}
            <motion.p
              variants={fadeUp}
              className="mt-12 text-xs text-neutral-400 uppercase tracking-widest leading-relaxed max-w-3xl"
            >
              Berbagai brand fashion konvensional mungkin memiliki pijakan solid di kategorinya masing-masing. Namun sebagian besar masih terperangkap dalam sistem lama:{" "}
              <strong className="text-white">
                melepas produk ke pasaran tanpa validasi identitas dan keaslian jangka panjang.
              </strong>{" "}
              0xTanda menolak norma tersebut dan mendirikan ekosistem di mana setiap koleksimu dilindungi, dihargai, dan divalidasi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FAQ & LANGKAH MUDAH
      ============================================================ */}
      <section className="py-32 px-6 max-w-4xl mx-auto" id="cara-beli">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>05 // Panduan Eksekusi</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-4"
          >
            Langkah Mudah Bergabung dengan{" "}
            <span className="text-[#836EF9]">
              Ekosistem 0xTanda
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[11px] text-neutral-500 uppercase tracking-widest mb-14 max-w-2xl leading-relaxed"
          >
            Semua hambatan teknis telah kami singkirkan. Yang perlu kamu lakukan hanyalah mengapresiasi karya kami.
          </motion.p>

          {/* Steps */}
          <motion.div variants={stagger} className="space-y-4 mb-16">
            {BUY_STEPS.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                whileHover={{ x: 6, borderColor: "rgba(131,110,249,0.4)" }}
                className="flex items-start gap-6 border border-white/5 p-6 bg-white/[0.02] transition-all duration-200 group"
              >
                <span className="text-3xl font-bold text-[#836EF9]/30 group-hover:text-[#836EF9]/60 transition-colors font-mono shrink-0 leading-none">
                  {step.num}
                </span>
                <p className="text-xs text-neutral-400 uppercase tracking-widest leading-relaxed pt-1">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Cepat */}
          <motion.div variants={fadeUp}>
            <BracketBox>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
                Pertanyaan Yang Sering Ditanya
              </h3>
              <div className="space-y-6">
                {[
                  {
                    q: "Apakah saya harus mengerti soal crypto untuk membeli koleksi ini?",
                    a: "Sama sekali tidak. Pembelian dilakukan seperti biasa. Tim kami telah menyiapkan panduan paling sederhana jika kamu baru pertama kali membuat dompet digital untuk menyimpan bukti otentikasinya.",
                  },
                  {
                    q: "Apakah NFT ini merupakan produk investasi atau aset kripto?",
                    a: "Bukan. Sertifikat digital ini murni berfungsi sebagai teknologi verifikasi anti-palsu dan 'kunci akses' eksklusif ke dalam ekosistem dan fasilitas loyalitas 0xTanda, bukan sebagai instrumen finansial.",
                  },
                  {
                    q: "Siapa yang menanggung biaya pembuatan aset digital (Gas Fee)?",
                    a: "100% ditanggung oleh pihak 0xTanda. Kamu tidak akan dikenakan biaya tambahan sepeser pun saat proses aktivasi keaslian koleksimu.",
                  },
                  {
                    q: "Apa fungsi bergabung dengan The War Room?",
                    a: "The War Room adalah lingkaran privat bagi kolektor sejati. Tempat di mana kami membagikan bocoran rilisan sebelum publik tahu, serta mengaktifkan benefit potongan harga permanen.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <p className="text-[11px] font-bold text-white uppercase tracking-widest mb-2">
                      {faq.q}
                    </p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </BracketBox>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          CTA GANDA — INTERNAL LINKS STRATEGIS
      ============================================================ */}
      <section className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] text-[#836EF9] uppercase tracking-widest mb-6 font-bold"
          >
            // Langkah Selanjutnya
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white mb-12"
          >
            Siap Menjadi Bagian dari{" "}
            <span className="text-[#836EF9]">Resistance?</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch"
          >
            {/* CTA 1: Shop */}
            <motion.div variants={fadeUp}>
              <Link
                href="/shop"
                className="group flex items-center justify-center gap-3 bg-[#836EF9] text-black px-10 py-5 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_40px_rgba(131,110,249,0.3)] hover:shadow-[0_0_60px_rgba(131,110,249,0.5)]"
              >
                <Package size={14} />
                Jelajahi Koleksi Terbatas
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* CTA 2: Verify */}
            <motion.div variants={fadeUp}>
              <Link
                href="/verify"
                className="group flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-5 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 hover:border-[#836EF9]/50 transition-all"
              >
                <ShieldCheck size={14} />
                Aktivasi Kepemilikan Resmi
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Social proof line */}
          <motion.p
            variants={fadeUp}
            className="mt-12 text-[9px] text-neutral-700 uppercase tracking-widest"
          >
            Est. 2026 // Jakarta, Indonesia // Secured by Authenticity
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================
          ARTIKEL TERKAIT — INTERNAL LINKING TAMBAHAN
      ============================================================ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Terminal Log Lainnya</SectionLabel>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                {
                  tag: "PANDUAN",
                  title: "Aktivasi Koleksimu dalam 5 Menit",
                  desc: "Instruksi dari awal gosok kartu hingga verifikasi keaslian selesai. Dirancang tanpa bahasa teknis yang rumit.",
                  href: "/verify",
                  color: "#836EF9",
                },
                {
                  tag: "KOLEKSI",
                  title: "Genesis Drop: Standar Baru Kolektor",
                  desc: "Bongkar arsip Batch #001 kami. Pelajari spesifikasi material, dan rasakan kualitas nyata dari koleksi perdana 0xTanda.",
                  href: "/shop",
                  color: "#00FF9D",
                },
              ].map((article) => (
                <motion.div key={article.title} variants={fadeUp}>
                  <Link
                    href={article.href}
                    className="group block border border-white/5 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all"
                  >
                    <span
                      className="text-[8px] font-bold tracking-widest uppercase mb-4 block"
                      style={{ color: article.color }}
                    >
                      {article.tag}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tighter mb-3 group-hover:text-[#836EF9] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed mb-6">
                      {article.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#836EF9] text-[10px] tracking-widest uppercase">
                      Baca Selengkapnya
                      <ExternalLink size={10} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FLOATING CS BUTTON
      ============================================================ */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <a
          href="https://t.me/Bob_Node88"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#836EF9] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group relative border border-white/10"
          title="Contact Customer Service"
        >
          <div className="absolute -left-32 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-[8px] text-white uppercase tracking-widest font-bold">
              Contact_Support
            </span>
          </div>
          <Send className="text-black -translate-x-0.5 translate-y-0.5" size={22} />
        </a>
      </div>

      {/* Footer */}
      <footer className="py-20 text-center opacity-10">
        <p className="font-mono text-[7px] uppercase tracking-[1em]">
          0XTANDA_TERMINAL_LOG_V1.1_JKT_ARCHIVE
        </p>
      </footer>
    </main>
  );
}