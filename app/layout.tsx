import React from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, Cinzel_Decorative } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });
const cinzel = Cinzel_Decorative({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-cinzel' });

export const metadata: Metadata = {
  title: '0xTanda // Phygital Fashion Store',
  description: 'One Entity // Dual Existence. Est 2026 Jakarta.',
  // INI UNTUK MEMASANG ICON DI TAB BROWSER
  icons: {
    icon: '/branding/logo-0xtanda-icon.png',
    shortcut: '/branding/logo-0xtanda-icon.png',
    apple: '/branding/logo-0xtanda-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${cinzel.variable} bg-[#0E0E0E] text-[#FFFFFF] antialiased`}>
        {children}
      </body>
    </html>
  );
}