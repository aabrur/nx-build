// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/data";

export default function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-28 pb-24 text-center px-6 overflow-hidden">
      {/* ambient glow (behind) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[900px] h-[900px] bg-[#836EF9] opacity-20 blur-[220px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-fit"
        aria-hidden={false}
      >
        <div className="relative w-[420px] md:w-[700px]">
          <Image
            src={ASSETS.logoMain}
            alt="0xTanda"
            width={700}
            height={700}
            className="object-contain"
            priority
          />

          {/* glitch layers (simple duplicated images with CSS filters) */}
          <div className={`absolute inset-0 pointer-events-none mix-blend-screen ${glitch ? "opacity-70" : "opacity-0"} transition-opacity duration-75`} aria-hidden>
            <Image src={ASSETS.logoMain} alt="" width={700} height={700} />
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-[#836EF9]"
        style={{ fontFamily: "Space Grotesk, system-ui, sans-serif" }}
      >
        Tangible craftsmanship you can feel,
        secured by digital ownership you can prove.
      </motion.p>

      <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
        <a href="#shop" className="px-6 py-3 border border-neutral-700 rounded-md hover:bg-[#836EF9] hover:text-black transition">Explore Collection</a>
        <a href="#activation" className="px-6 py-3 border border-neutral-700 rounded-md hover:bg-neutral-800 transition">Digital Activation</a>
      </div>
    </section>
  );
}
