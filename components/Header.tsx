// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ASSETS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="0xTanda home">
          <Image src={ASSETS.logoIcon} alt="0xTanda" width={44} height={44} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#activation" className="text-neutral-300 hover:text-[#836EF9] transition-colors">Activation</a>
          <a href="#about" className="text-neutral-300 hover:text-[#836EF9] transition-colors">About</a>
          <a href="/shop" className="text-neutral-300 hover:text-[#836EF9] transition-colors">Shop</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Open menu"
            className="p-2 rounded-md text-neutral-300 hover:text-white"
          >
            {/* simple hamburger */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-neutral-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#activation" onClick={() => setOpen(false)} className="py-2">Activation</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="/shop" onClick={() => setOpen(false)} className="py-2">Shop</a>
          </div>
        </div>
      )}
    </header>
  );
}
