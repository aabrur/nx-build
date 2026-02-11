// components/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-40 pb-32 text-center px-6 border-b border-neutral-800 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto w-fit relative"
      >
        {/* Base Logo */}
        <Image
          src="/branding/logo-0xtanda.png"
          alt="0xTanda Logo"
          width={700}
          height={250}
          priority
        />

        {/* Red Glitch Layer */}
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
            priority={false}
          />
        </div>

        {/* Cyan Glitch Layer */}
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
            priority={false}
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 max-w-3xl mx-auto text-lg leading-relaxed"
        style={{ fontFamily: "Vox, sans-serif", color: "#00FF9D" }}
      >
        Tangible craftsmanship you can feel,
        secured by digital ownership you can prove.
      </motion.p>
    </section>
  );
}
