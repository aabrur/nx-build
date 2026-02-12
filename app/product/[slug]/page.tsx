"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  ShoppingCart, 
  ExternalLink, 
  Zap, 
  Menu, 
  X,
  Send
} from 'lucide-react';

// --- MOCK / FALLBACK DATA ---
const PRODUCTS_DATA = [
  {
    id: 1,
    slug: 'genesis-tee-16s',
    name: 'GENESIS TEE // 16S',
    price: 149000,
    type: 'Heavyweight T-Shirt',
    description: 'Cotton Combed 16s (235-250 gsm). Struktur kaku dan kokoh. Sablon presisi tinggi.',
    benefit: 'Sertifikat Keaslian Digital + Kartu Koleksi Fisik.',
    imgPhysical: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    imgDigital: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop',
    stock: 4,
    links: {
      shopee: "https://shopee.co.id",
      tokopedia: "https://tokopedia.com",
      tiktokshop: "https://tiktok.com",
      shopify: "https://shopify.com"
    }
  }
];

// --- MOCKED NEXT.JS COMPONENTS FOR PREVIEW ---
const Image = ({ src, alt, fill, className, priority, ...props }: any) => (
  <img 
    src={src} 
    alt={alt} 
    className={`${className} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`} 
    {...props} 
  />
);

// --- SHARED COMPONENTS ---

const Marquee = () => (
  <div className="fixed top-0 left-0 w-full bg-[#836EF9] text-black py-1 z-[60] overflow-hidden whitespace-nowrap border-b border-black/10 select-none font-mono font-bold text-[10px] tracking-widest">
    <div className="flex animate-marquee">
      <span className="mx-4 uppercase">// 0xTANDA // GENESIS BATCH: LIVE // ONE ENTITY // DUAL EXISTENCE // 0xTANDA // GENESIS BATCH: LIVE //</span>
      <span className="mx-4 uppercase">// 0xTANDA // GENESIS BATCH: LIVE // ONE ENTITY // DUAL EXISTENCE // 0xTANDA // GENESIS BATCH: LIVE //</span>
    </div>
    <style>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-marquee { display: inline-flex; animation: marquee 20s linear infinite; }
    `}</style>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'HOME', path: '#' },
    { name: 'SHOP', path: '#' },
    { name: 'VERIFY', path: '#' },
    { name: 'ABOUT', path: '#' },
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#836EF9] rounded-lg flex items-center justify-center font-bold text-black text-xs">0X</div>
        </div>

        <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest transition-all uppercase text-neutral-400 hover:text-white`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
};

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isMobile);
    if (isMobile) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (isTouch) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, left: '-8px', top: '-8px' }}
    >
      <div className="w-4 h-4 border border-[#836EF9] rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-[#836EF9] rounded-full" />
      </div>
    </div>
  );
};

// --- MAIN PRODUCT DETAIL COMPONENT ---

export default function App() {
  const [view, setView] = useState<'physical' | 'digital'>('physical');
  
  // Mock product data for preview
  const product = PRODUCTS_DATA[0];

  return (
    <main className="min-h-screen pb-20 bg-[#0E0E0E] text-white selection:bg-[#836EF9] selection:text-black font-sans overflow-x-hidden">
      <CustomCursor />
      <Marquee />
      <Navbar />

      <div className="pt-40 px-6 max-w-7xl mx-auto">
        {/* Navigasi Kembali */}
        <button 
          className="flex items-center gap-2 text-neutral-500 hover:text-white mb-10 font-mono text-[10px] tracking-[0.5em] uppercase transition-colors"
        >
          <ArrowLeft size={14} /> BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* MEDIA SECTION - SWITCHER FISIK/DIGITAL */}
          <div className="relative aspect-square bg-[#121212] border border-white/5 overflow-hidden group rounded-sm shadow-2xl">
            <Image 
              src={view === 'physical' ? product.imgPhysical : product.imgDigital} 
              alt={product.name} 
              fill 
              className="object-cover transition-opacity duration-700" 
            />
            
            {/* Toggles View */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl z-10">
              <button 
                onClick={() => setView('physical')} 
                className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all uppercase tracking-widest ${
                  view === 'physical' ? 'bg-white text-black font-bold' : 'text-white/40 hover:text-white'
                }`}
              >
                PHYSICAL
              </button>
              <button 
                onClick={() => setView('digital')} 
                className={`px-6 py-2 rounded-full text-[10px] font-mono transition-all flex items-center gap-2 uppercase tracking-widest ${
                  view === 'digital' ? 'bg-[#836EF9] text-white font-bold shadow-[0_0_20px_rgba(131,110,249,0.4)]' : 'text-white/40 hover:text-white'
                }`}
              >
                DIGITAL CARD <Zap size={10} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#836EF9] font-mono text-[10px] mb-6 uppercase tracking-[0.4em]">
              <ShieldCheck size={16} /> VERIFIED PHYGITAL ENTITY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold uppercase mb-4 tracking-tighter leading-none">
              {product.name}
            </h1>
            
            <p className="text-2xl font-mono text-white mb-10 tracking-tighter">
              IDR {product.price.toLocaleString('id-ID')}
            </p>
            
            {/* KOLEKTOR BENEFIT BOX */}
            <div className="p-6 bg-white/5 border-l-2 border-[#836EF9] font-mono mb-12">
              <p className="text-[10px] text-neutral-500 uppercase mb-3 tracking-[0.2em]">Collector Benefit:</p>
              <p className="text-xs text-neutral-300 tracking-wider leading-relaxed uppercase">
                {product.benefit}
              </p>
            </div>

            {/* SHOPPING CHANNELS */}
            <div className="space-y-4">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.5em] mb-4">PILIH CHANNEL PEMBELIAN:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={product.links?.shopee || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#EE4D2D] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  SHOPEE <ShoppingCart size={16}/>
                </a>

                <a 
                  href={product.links?.tokopedia || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#03AC0E] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  TOKOPEDIA <ShoppingCart size={16}/>
                </a>

                <a 
                  href={product.links?.tiktokshop || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-black border border-white/10 text-white font-mono text-[11px] font-bold uppercase transition-all hover:bg-white hover:text-black active:scale-95 shadow-xl"
                >
                  TIKTOK SHOP <ExternalLink size={16}/>
                </a>

                <a 
                  href={product.links?.shopify || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-[#95BF47] text-white font-mono text-[11px] font-bold uppercase transition-all hover:opacity-90 active:scale-95 shadow-xl"
                >
                  SHOPIFY <ShoppingCart size={16}/>
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
              <p className="font-mono text-[10px] text-neutral-600 leading-relaxed uppercase tracking-widest leading-relaxed">
                DETAIL MATERIAL: {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING TELEGRAM */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#836EF9] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(131,110,249,0.5)] hover:scale-110 active:scale-95 transition-all group"
      >
        <Send className="text-black -translate-x-0.5 translate-y-0.5 group-hover:rotate-12 transition-transform" size={24} />
      </a>
    </main>
  );
}