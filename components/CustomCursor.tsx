"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Komponen Custom Cursor yang ditingkatkan kecepatannya.
 * Menggunakan useSpring hooks untuk performa yang lebih lancar dan responsif.
 */
export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Menggunakan MotionValue untuk performa optimal (menghindari re-render berlebih)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Konfigurasi Spring yang sangat cepat/agresif
  // Stiffness tinggi = tarikan sangat kuat/cepat
  // Damping tinggi = meminimalisir getaran (oscillation)
  const springConfigDot = { stiffness: 2000, damping: 90, mass: 0.1 };
  const springConfigRing = { stiffness: 800, damping: 50, mass: 0.2 };

  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);
  
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Deteksi elemen interaktif
      if ((e.target as HTMLElement).closest('button, a, .group, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Titik Utama (Hampir Instan) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-purple rounded-full z-[9999] pointer-events-none"
        style={{ 
          x: dotX, 
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1 
        }}
      />

      {/* Ring Luar (Mengikuti dengan halus tapi tetap cepat) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-purple/40 rounded-full z-[9998] pointer-events-none"
        style={{ 
          x: ringX, 
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(131, 110, 249, 1)" : "rgba(131, 110, 249, 0.4)",
          backgroundColor: isHovering ? "rgba(131, 110, 249, 0.05)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}