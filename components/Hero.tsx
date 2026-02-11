"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 120);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-32 text-center px-6 border-b border-neutral-800 overflow-hidden cinematic-noise">
      
      {/* Ambient Purple Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[900px] h-[900px] bg-[#836EF9] opacity-20 blur-[220px] rounded-full" />
      </div>

      {/* Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity },
        }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 mx-auto w-fit"
      >
        {/* Base Logo */}
        <Image
          src="/branding/logo-0xtanda.png"
          alt="0xTanda Logo"
          width={700}
          height={250}
          priority
        />

        {/* Red Glitch */}
        <div
          className={`absolute inset-0 glitch-red transition-opacity duration-75 ${
            glitchActive ? "opacity-70" : "opacity-0"
          }`}
          aria-hidden
        >
          <Image
            src="/branding/logo-0xtanda.png"
            alt=""
            width={700}
            height={250}
          />
        </div>

        {/* Cyan Glitch */}
        <div
          className={`absolute inset-0 glitch-cyan transition-opacity duration-75 ${
            glitchActive ? "opacity-70" : "opacity-0"
          }`}
          aria-hidden
        >
          <Image
            src="/branding/logo-0xtanda.png"
            alt=""
            width={700}
            height={250}
          />
        </div>
      </motion.div>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 mt-10 max-w-3xl mx-auto text-lg leading-relaxed text-[#836EF9]"
        style={{ fontFamily: "Vox, sans-serif" }}
      >
        Tangible craftsmanship you can feel,
        secured by digital ownership you can prove.
      </motion.p>
    </section>
  );
}
