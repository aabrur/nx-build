"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Komponen Custom Cursor dengan perbaikan Type Safety untuk Vercel.
 */
export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
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
  }, []);

  // PENGATURAN KECEPATAN dengan 'as const' untuk memperbaiki Error TypeScript
  const dotSpring = {
    type: 'spring',
    stiffness: 800,
    damping: 50,
    mass: 0.1
  } as const;

  const ringSpring = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 0.5
  } as const;

  return (
    <>
      {/* Titik Utama */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-purple rounded-full z-[9999] pointer-events-none"
        animate={{ 
          x: mousePos.x - 3, 
          y: mousePos.y - 3,
          scale: isHovering ? 2 : 1 
        }}
        transition={dotSpring}
      />

      {/* Ring Luar */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-purple/50 rounded-full z-[9998] pointer-events-none"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isHovering ? 1.8 : 1,
          borderWidth: isHovering ? '2px' : '1px',
          backgroundColor: isHovering ? 'rgba(131, 110, 249, 0.1)' : 'transparent'
        }}
        transition={ringSpring}
      />
    </>
  );
}