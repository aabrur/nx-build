"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo (Clickable) */}
        <Link href="/" className="relative z-10">
          <Image
            src="/branding/logo-0xtanda.png"
            alt="0xTanda Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <a
            href="#activation"
            className="text-neutral-400 hover:text-[#836EF9] transition-colors duration-300"
          >
            Activation
          </a>
          <a
            href="#about"
            className="text-neutral-400 hover:text-[#836EF9] transition-colors duration-300"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
