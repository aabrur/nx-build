"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * Navbar 0xTanda V2 - Perbaikan
 * Hanya menampilkan logo-0xtanda-icon.png di pojok kiri atas.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'ABOUT', path: '/about' },
    { name: 'VERIFY', path: '/verify' },
  ];

  return (
    <nav className="fixed top-12 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
        
        {/* LOGO SECTION - HANYA IKON */}
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
          {/* Logo tulisan dihapus dari sini agar tidak double */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`px-6 py-2 rounded-full text-[10px] font-mono tracking-widest transition-all ${
                pathname === link.path 
                ? 'bg-brand-purple text-black font-bold' 
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 md:hidden animate-glitch">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display font-bold tracking-tighter transition-colors ${
                pathname === link.path ? 'text-brand-purple' : 'text-white'
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