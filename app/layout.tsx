import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

// Load Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

// =================================================================
// PENGATURAN META TAGS & OPEN GRAPH (UNTUK PREVIEW WA/TELEGRAM)
// =================================================================
export const metadata: Metadata = {
  title: '0xTanda | Phygital Streetwear',
  description: 'Tangible craftsmanship you can feel, secured by digital ownership you can prove. Genesis Boxy Tee Batch #001.',
  metadataBase: new URL('https://0xtanda.xyz'), // URL utama website lu
  openGraph: {
    title: '0xTanda | Phygital Streetwear',
    description: 'Tangible craftsmanship you can feel, secured by digital ownership you can prove.',
    url: 'https://0xtanda.xyz',
    siteName: '0xTanda',
    images: [
      {
        // Gambar ini yang bakal muncul di WA/Telegram. 
        url: '/branding/og-banner.jpg', 
        width: 1200,
        height: 630,
        alt: '0xTanda Phygital Brand',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0xTanda | Phygital Streetwear',
    description: 'Tangible craftsmanship you can feel, secured by digital ownership you can prove.',
    images: ['/branding/logo-0xtanda.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <head>
        {/* Viewport Setting agar di HP pas (tidak perlu zoom out) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        
        {/* 🟢 PASTE KODE DARI GOOGLE SEARCH CONSOLE DI BAWAH SINI 🟢 */}
        <meta name="google-site-verification" content="AdsL5zatSrtTJ8kvkoh5wI1flrVIf0YXJ9-93uTbT8o" />

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