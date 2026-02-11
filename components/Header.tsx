"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/branding/logo-0xtanda.png"
          alt="0xTanda Logo"
          width={120}
          height={40}
        />
        <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#activation" className="hover:text-white transition">
            Activation
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
