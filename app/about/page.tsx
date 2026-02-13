'use client';
import { useRef, useState, useEffect } from 'react';
import { Send, ArrowRight, MousePointer2 } from 'lucide-react';

// DATA ROADMAP (6 FASE)
const ROADMAP_PHASES = [
    {
        id: 1,
        phase: "FASE 1",
        title: "ZERO TO ONE",
        desc: "Genesis Batch #001 Production. Web Launch. Community Setup.",
        status: "COMPLETED",
        active: true
    },
    {
        id: 2,
        phase: "FASE 2",
        title: "THE TRANSMISSION",
        desc: "Public Launch. Marketing Campaign. 14 Units Sold Out.",
        status: "ACTIVE",
        active: true
    },
    {
        id: 3,
        phase: "FASE 3",
        title: "DUAL EXISTENCE",
        desc: "Physical Fulfillment. Concierge NFT Airdrop. VIP Onboarding.",
        status: "UPCOMING",
        active: false
    },
    {
        id: 4,
        phase: "FASE 4",
        title: "ECOSYSTEM EXPANSION",
        desc: "Batch #002 R&D. Guest Designer Collab. Wallet Connect Integration.",
        status: "LOCKED",
        active: false
    },
    {
        id: 5,
        phase: "FASE 5",
        title: "OFFLINE INVASION",
        desc: "Jakarta Pop-Up Store. Community Gathering. Exclusive Merch.",
        status: "LOCKED",
        active: false
    },
    {
        id: 6,
        phase: "FASE 6",
        title: "THE METAVERSE",
        desc: "Digital Wearables. Full DAO Governance. Global Shipping.",
        status: "LOCKED",
        active: false
    }
];

export default function AboutPage() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // MOUSE DRAG LOGIC
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan scroll
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#f3f3f3] pt-28 pb-20 relative overflow-hidden">
            
            {/* --- HEADER SECTION --- */}
            <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tighter mb-6 uppercase">
                    ABOUT <span className="text-[#8b5cf6]">0xTanda</span>
                </h1>
                <p className="text-[#888] font-mono max-w-2xl mx-auto text-sm leading-relaxed">
                    "One Entity // Dual Existence"<br/>
                    Kami menggabungkan Streetwear Fisik dengan Kepemilikan Digital.<br/>
                    Based in East Jakarta. Built on Monad.
                </p>
            </div>

            {/* --- ROADMAP SLIDER SECTION --- */}
            <div className="border-t border-[#333] pt-12 pb-12 mb-16 relative">
                <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight">STRATEGIC ROADMAP</h3>
                        <p className="text-xs text-[#888] font-mono mt-1">Geser untuk melihat masa depan.</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-[#8b5cf6] text-xs font-mono animate-pulse">
                        <MousePointer2 size={14} /> DRAG TO SCROLL
                    </div>
                </div>

                {/* SLIDER CONTAINER */}
                <div 
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto px-6 pb-8 cursor-grab active:cursor-grabbing no-scrollbar"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {ROADMAP_PHASES.map((item) => (
                        <div 
                            key={item.id} 
                            className={`min-w-[300px] md:min-w-[350px] p-6 border ${item.active ? 'border-[#8b5cf6] bg-[#8b5cf6]/5' : 'border-[#333] bg-[#121212]'} rounded-lg select-none transition-all hover:scale-[1.02]`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${item.active ? 'bg-[#8b5cf6] text-black' : 'bg-[#333] text-[#888]'}`}>
                                    {item.phase}
                                </span>
                                <span className={`text-[10px] font-mono ${item.status === 'COMPLETED' ? 'text-[#00FF9D]' : 'text-[#888]'}`}>
                                    {item.status}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold font-sans tracking-tight mb-2">{item.title}</h4>
                            <p className="text-xs text-[#888] font-mono leading-relaxed">{item.desc}</p>
                            
                            {/* Visual Progress Bar */}
                            <div className="w-full h-1 bg-[#222] mt-6 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${item.status === 'COMPLETED' ? 'bg-[#00FF9D] w-full' : item.status === 'ACTIVE' ? 'bg-[#8b5cf6] w-1/2' : 'bg-[#333] w-0'}`}
                                ></div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Spacer di ujung kanan biar card terakhir nggak kepotong */}
                    <div className="min-w-[20px]"></div>
                </div>
            </div>

            {/* --- CONNECT SIGNAL (SOCIALS) --- */}
            <div className="max-w-5xl mx-auto px-6 border-t border-[#333] pt-12">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse"></span>
                    CONNECT_SIGNAL
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Social Links */}
                    <div className="space-y-4">
                        <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Social Frequency</p>
                        <div className="flex flex-col gap-3">
                            <a href="https://tiktok.com/@0xtanda" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-[#8b5cf6] hover:pl-2 transition-all font-mono text-sm group">
                                <span>TIKTOK</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100"/>
                            </a>
                            <a href="https://instagram.com/0xtanda" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-[#8b5cf6] hover:pl-2 transition-all font-mono text-sm group">
                                <span>INSTAGRAM</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100"/>
                            </a>
                            <a href="https://x.com/0xtanda" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-[#8b5cf6] hover:pl-2 transition-all font-mono text-sm group">
                                <span>X (TWITTER)</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100"/>
                            </a>
                        </div>
                    </div>

                    {/* Telegram Box */}
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-4">Join The Resistance</p>
                        <a href="https://t.me/0xtanda" target="_blank" className="block group">
                            <div className="border border-[#333] bg-[#121212] p-6 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all relative overflow-hidden group">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#8b5cf6]">TELEGRAM COMMUNITY</h4>
                                <p className="text-xs text-[#888] font-mono">
                                    Get early access, alpha drops, and exclusive updates.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- STICKY TELEGRAM BUTTON --- */}
            <a 
                href="https://t.me/0xtanda" 
                target="_blank"
                className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
            >
                <span className="absolute right-16 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block font-mono">
                    JOIN COMMUNITY
                </span>
                <div className="w-14 h-14 bg-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 transition-transform duration-300">
                   <Send size={24} className="text-white ml-[-2px] mt-[2px]" /> 
                </div>
                <div className="absolute inset-0 border border-[#8b5cf6] rounded-full animate-ping opacity-50 pointer-events-none"></div>
            </a>

            {/* --- CSS UTILITY (Hide Scrollbar) --- */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>

        </div>
    );
}