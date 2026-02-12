import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Space_Mono, Cinzel_Decorative } from 'next/font/google';
import './globals.css';

// Inisialisasi font Google
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});

const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-space-mono' 
});

const cinzel = Cinzel_Decorative({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-cinzel' 
});

// Metadata untuk SEO dan Branding
export const metadata: Metadata = {
  title: '0xTanda // Toko Fashion Phygital',
  description: 'ONE ENTITY // DUAL EXISTENCE. Est 2026 Jakarta.',
  icons: {
    icon: '/branding/logo-0xtanda-icon.png',
  }
};

/**
 * Konfigurasi Viewport untuk memperbaiki Masalah Zoom di HP.
 * Mengunci skala agar pas dengan lebar perangkat (device-width) 
 * dan mencegah pengguna melakukan zoom manual yang merusak tata letak.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${cinzel.variable} bg-[#0E0E0E] text-white antialiased overflow-x-hidden selection:bg-brand-purple selection:text-black`}>
        {children}
      </body>
    </html>
  );
}