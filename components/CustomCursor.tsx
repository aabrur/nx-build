"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom Cursor Pro 0xTanda.
 * - 1:1 Tracking dengan hardware acceleration.
 * - Auto-hide pada perangkat touch (HP/Tablet).
 */
export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values untuk performa tinggi tanpa re-render React berlebih
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Konfigurasi Spring Ultra-Responsive (Hampir instan)
  const springConfig = { stiffness: 1500, damping: 60, mass: 0.1 };
  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Deteksi jika perangkat adalah touch device
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, .group, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  // Jangan render apapun jika di HP
  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="w-1.5 h-1.5 bg-brand-purple rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border border-brand-purple/40 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "#836EF9" : "rgba(131, 110, 249, 0.4)",
          backgroundColor: isHovering ? "rgba(131, 110, 249, 0.1)" : "transparent",
        }}
      />
    </div>
  );
}