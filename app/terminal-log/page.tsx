import { Metadata } from 'next';
import TerminalLogContent from './TerminalLogContent';

// ================================================================
// SEO METADATA — HALAMAN ARTIKEL PRIORITAS 1
// Target keyword utama: "phygital fashion Jakarta"
// ================================================================
export const metadata: Metadata = {
  title: 'Phygital Fashion Jakarta: Baju Fisik + NFT Digital dalam Satu Koleksi | 0xTanda',
  description:
    'Kenalan dengan phygital fashion: tren baru di Jakarta di mana setiap baju punya kembaran digital (NFT) yang bisa kamu klaim. 0xTanda adalah brand phygital pertama dari Jakarta.',
  metadataBase: new URL('https://0xtanda.xyz'),
  alternates: {
    canonical: 'https://0xtanda.xyz/terminal-log',
  },
  openGraph: {
    title: 'Phygital Fashion Jakarta: Baju Fisik + NFT Digital | 0xTanda',
    description:
      'Kenalan dengan phygital fashion: tren baru di Jakarta di mana setiap baju punya kembaran digital (NFT). 0xTanda — brand phygital streetwear pertama dari Jakarta.',
    url: 'https://0xtanda.xyz/terminal-log',
    siteName: '0xTanda',
    images: [
      {
        url: '/branding/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: '0xTanda Phygital Fashion Jakarta — Baju Fisik + NFT',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phygital Fashion Jakarta: Baju Fisik + NFT Digital | 0xTanda',
    description:
      'Brand phygital streetwear pertama Jakarta — setiap baju punya kembaran NFT yang bisa kamu klaim.',
    images: ['/branding/og-banner.jpg'],
  },
  keywords: [
    'phygital fashion Jakarta',
    'baju NFT Indonesia',
    'fashion blockchain Indonesia',
    'NFT wearable Jakarta',
    'streetwear NFT Indonesia',
    'pakaian digital twin Indonesia',
    'brand fashion Web3 Jakarta',
    '0xTanda',
    'phygital streetwear',
  ],
};

export default function TerminalLogPage() {
  return <TerminalLogContent />;
}
