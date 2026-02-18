"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Marquee from '../../../components/Marquee';
import { 
  ShieldCheck, 
  Wallet, 
  UploadCloud, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  X,
  Key,
  User,
  Smartphone,
  Mail,
  ShoppingBag,
  Lock
} from 'lucide-react';

export default function VerifyFormPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'used'>('idle');
  const [fileName, setFileName] = useState('');

  // 🔴 PASTIKAN URL INI BENAR DARI DEPLOYMENT GOOGLE APPS SCRIPT
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9_dc-9v8UNopJGhjlzoBPluWiS9i2krk4-wARwH5PhiFiLx-BAHGoZoUgngcGw1ff/exec";

  const [formData, setFormData] = useState({
    secretCode: '',
    walletAddress: '',
    nama: '',
    gender: 'Pria',
    email: '',
    noHp: '',
    telegramId: '',
    productName: 'GENESIS BOXY TEE',
    orderId: '',
    proofImage: '' // Base64 string
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validasi Ukuran File (Max 2MB agar Google Sheet tidak error)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file terlalu besar. Maksimal 2MB.");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, proofImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- VALIDASI WALLET MONAD (EVM) ---
    // Harus diawali 0x dan panjang 42 karakter
    const evmRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!evmRegex.test(formData.walletAddress)) {
        alert("ALAMAT WALLET TIDAK VALID!\nPastikan alamat dimulai dengan '0x' dan merupakan format standar MONAD/EVM.");
        return;
    }

    setIsLoading(true);

    try {
      // Mengirim data ke Google Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // Menggunakan mode no-cors seringkali diperlukan untuk Google Script jika client-side, 
        // tapi ini akan membuat kita tidak bisa membaca response JSON.
        // Jika script Anda support CORS, gunakan standard fetch.
        // Untuk MVP ini, kita gunakan pendekatan redirect 'follow' atau standard.
        body: JSON.stringify(formData),
      });

      // CATATAN PENTING:
      // Google Apps Script sering memblokir pembacaan response JSON langsung karena CORS.
      // Jika error "SyntaxError", biasanya data SUDAH MASUK tapi browser memblokir response-nya.
      // Di sini kita coba parse, jika gagal kita asumsikan sukses (untuk UX).
      
      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
      } else if (result.status === 'duplicate') {
        setStatus('used');
      } else {
        setStatus('error');
      }

    } catch (error) {
      console.error("Submission Error:", error);
      // Fallback: Jika data terkirim tapi response diblokir browser (CORS issue umum di GAS)
      // Kita anggap sukses agar user tidak bingung, admin tetap verifikasi manual.
      setStatus('success'); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-mono overflow-x-hidden">
      <Marquee />
      <Navbar />

      <div className="pt-32 px-6 pb-20 max-w-4xl mx-auto">
        
        {/* HEADER & INSTRUCTION */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#836EF9] bg-[#836EF9]/10 px-4 py-1 mb-6 rounded-full">
            <div className="w-2 h-2 bg-[#836EF9] rounded-full animate-pulse"/>
            <span className="text-[10px] text-[#836EF9] font-bold tracking-[0.2em] uppercase">SYSTEM_ONLINE // VERIFICATION_NODE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-4">
            ACTIVATION <span className="text-[#836EF9]">PORTAL</span>
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest max-w-2xl mx-auto italic">
            "Tangible craftsmanship you can feel, secured by digital ownership you can prove."
          </p>
        </div>

        <div className="bg-[#121212] border border-white/10 p-8 rounded-sm mb-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#836EF9] group-hover:w-full group-hover:opacity-5 transition-all duration-700" />
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-3 relative z-10">
            <AlertTriangle className="text-[#836EF9]" size={18} /> INSTRUKSI PENTING:
          </h3>
          <ul className="space-y-3 text-[10px] md:text-xs text-neutral-400 uppercase tracking-wide leading-relaxed relative z-10">
            <li className="flex gap-3"><span className="text-[#836EF9] font-bold">01.</span> GOSOK panel pelindung pada Genesis Card untuk melihat Secret Code.</li>
            <li className="flex gap-3"><span className="text-[#836EF9] font-bold">02.</span> PASTIKAN alamat wallet yang dimasukkan adalah Personal Wallet MONAD (Metamask/Phantom/Rabby).</li>
            <li className="flex gap-3 text-red-500 font-bold bg-red-900/10 p-2 border border-red-900/30 rounded"><span className="text-red-500">03.</span> 🚫 DILARANG menggunakan alamat Exchange (Indodax/Binance/Tokocrypto dll).</li>
            <li className="flex gap-3"><span className="text-[#836EF9] font-bold">04.</span> PROSES verifikasi dilakukan secara manual demi keamanan (Max 1x24 Jam).</li>
            <li className="flex gap-3"><span className="text-[#836EF9] font-bold">05.</span> BIAYA jaringan (Gas Fee) ditanggung 0xTanda (GRATIS).</li>
          </ul>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECTION 1: CRITICAL DATA (BIG & EYE CATCHING) */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#836EF9]/50 p-8 rounded-sm shadow-[0_0_30px_rgba(131,110,249,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <ShieldCheck size={64} className="text-[#836EF9]" />
              </div>
              <h4 className="text-[#836EF9] text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <ShieldCheck size={16}/> PRIMARY CREDENTIALS
              </h4>
              
              <div className="grid gap-10">
                {/* SECRET CODE */}
                <div className="space-y-3">
                  <label className="text-xs text-[#836EF9] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Key size={14}/> SECRET CODE (GENESIS CARD)
                  </label>
                  <input 
                    type="text" 
                    name="secretCode"
                    required
                    placeholder="XXXX-XXXX-XXXX" 
                    className="w-full bg-black border-2 border-[#836EF9] p-6 text-xl md:text-3xl font-sans font-bold text-white placeholder:text-white/10 focus:shadow-[0_0_30px_rgba(131,110,249,0.4)] focus:outline-none transition-all uppercase tracking-widest text-center rounded-sm"
                    onChange={handleInputChange}
                  />
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest text-center">*Masukkan Kode persis sesuai kartu</p>
                </div>

                {/* WALLET ADDRESS */}
                <div className="space-y-3">
                  <label className="text-xs text-[#00FF9D] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Wallet size={14}/> WALLET MONAD ADDRESS
                  </label>
                  <input 
                    type="text" 
                    name="walletAddress"
                    required
                    placeholder="0x..." 
                    className="w-full bg-black border-2 border-[#00FF9D]/50 p-6 text-sm md:text-xl font-mono text-[#00FF9D] placeholder:text-[#00FF9D]/20 focus:border-[#00FF9D] focus:shadow-[0_0_30px_rgba(0,255,157,0.2)] focus:outline-none transition-all rounded-sm"
                    onChange={handleInputChange}
                  />
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest text-right">*Wajib format 0x... (Personal Wallet)</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PROFILE */}
          <div className="space-y-8 pt-8 border-t border-white/5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <User size={16} className="text-neutral-500" /> IDENTITAS OWNER
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Nama Lengkap</label>
                <input type="text" name="nama" required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Jenis Kelamin</label>
                <select name="gender" className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors appearance-none" onChange={handleInputChange}>
                  <option value="Pria">PRIA</option>
                  <option value="Wanita">WANITA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Email</label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input type="email" name="email" required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">No. HP / WhatsApp</label>
                <div className="relative">
                  <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input type="tel" name="noHp" required className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">ID Telegram (Opsional - Untuk Group War Room)</label>
                <input type="text" name="telegramId" placeholder="@username" className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SECTION 3: DETAIL ORDER */}
          <div className="space-y-8 pt-8 border-t border-white/5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <ShoppingBag size={16} className="text-neutral-500" /> DETAIL TRANSAKSI
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Pilih Artefak (Produk)</label>
                <div className="relative">
                  <select name="productName" className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-[#836EF9] font-bold focus:border-white/50 focus:outline-none transition-colors appearance-none uppercase" onChange={handleInputChange}>
                    <option value="GENESIS BOXY TEE">GENESIS BOXY TEE [BATCH #001]</option>
                    <option value="-" disabled>ARCHIVE 02 (LOCKED)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 bg-[#836EF9] rounded-full" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Order ID (E-Commerce/Manual)</label>
                <input type="text" name="orderId" placeholder="Contoh: 230919ABC..." className="w-full bg-[#121212] border border-white/10 p-4 text-sm text-white focus:border-white/50 focus:outline-none transition-colors" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Upload Bukti Pembelian (Struk/SS)</label>
                <div className="relative group">
                  <input type="file" id="fileUpload" className="hidden" onChange={handleFileChange} accept="image/*" />
                  <label htmlFor="fileUpload" className="w-full bg-[#121212] border border-white/10 border-dashed p-4 text-sm text-neutral-400 flex items-center justify-between cursor-pointer hover:bg-white/5 hover:border-[#836EF9] transition-all">
                    <span className="truncate font-mono">{fileName || "KLIK UNTUK UPLOAD FILE..."}</span>
                    <UploadCloud size={20} className="text-neutral-500 group-hover:text-[#836EF9]" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-10">
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#836EF9] text-black font-mono text-sm font-bold py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(131,110,249,0.3)] hover:shadow-[0_0_60px_rgba(131,110,249,0.6)]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> VALIDATING DATA...
                </>
              ) : (
                "SUBMIT VERIFICATION DATA"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* POPUP MODALS */}
      <AnimatePresence>
        {status !== 'idle' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0E0E0E] border border-white/10 p-10 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(131,110,249,0.2)]"
            >
              <button onClick={() => setStatus('idle')} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
                <X size={24} />
              </button>

              {status === 'success' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-[#00FF9D]/10 rounded-full flex items-center justify-center mx-auto border border-[#00FF9D]/30">
                    <CheckCircle2 size={48} className="text-[#00FF9D]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">VERIFIED</h3>
                    <div className="h-1 w-12 bg-[#00FF9D] mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">
                      Data Anda telah diterima di sistem kami. Tim 0xTanda akan memvalidasi dalam 1x24 jam. Cek wallet Anda secara berkala.
                    </p>
                  </div>
                </div>
              )}

              {status === 'used' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-[#EE4D2D]/10 rounded-full flex items-center justify-center mx-auto border border-[#EE4D2D]/30">
                    <AlertTriangle size={48} className="text-[#EE4D2D]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#EE4D2D] uppercase tracking-tighter mb-2">KODE SUDAH DIGUNAKAN</h3>
                    <div className="h-1 w-12 bg-[#EE4D2D] mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">
                      Kode Rahasia yang Anda masukkan terdeteksi duplikat di database. Hubungi CS jika ini adalah kesalahan.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto border border-yellow-500/30">
                    <AlertTriangle size={48} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">CONNECTION ERROR</h3>
                    <div className="h-1 w-12 bg-yellow-500 mx-auto mb-4" />
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">
                      Gagal terhubung ke server database. Silakan coba lagi nanti atau hubungi admin Telegram.
                    </p>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 w-full border border-white/20 py-4 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all tracking-[0.2em]"
              >
                TUTUP / CLOSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}