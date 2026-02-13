'use client';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

// Load Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <head>
        {/* Viewport Setting agar di HP pas (tidak perlu zoom out) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      
      {/* BODY BERSIH: Hapus class 'cursor-none' agar pakai kursor bawaan Windows/Mac */}
      <body className="bg-[#0a0a0a] text-[#f3f3f3] overflow-x-hidden antialiased">
        
        {/* Navbar Tetap Ada */}
        <Navbar />
        
        {/* Konten Halaman */}
        {children}
        
      </body>
    </html>
  );
}