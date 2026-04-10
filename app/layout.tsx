import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';

// Load Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

// =================================================================
// 🚀 MASTER SEO METADATA & LSI KEYWORDS ENGINE
// =================================================================
export const metadata: Metadata = {
  // Title Template bikin semua halaman otomatis punya akhiran " | 0xTanda"
  title: {
    default: '0xTanda | Pelopor Phygital Fashion & Web3 Streetwear Indonesia',
    template: '%s | 0xTanda Phygital Fashion'
  },
  
  // Deskripsi yang padat dengan kata kunci utama
  description: '0xTanda adalah brand Phygital Streetwear pertama di Indonesia. Kami menggabungkan pakaian fisik heavyweight cotton berkualitas premium dengan bukti kepemilikan aset digital (Digital Twin NFT) di jaringan blockchain Monad. Tangible craftsmanship secured by digital ownership.',
  
  // 💥 KOSA KATA SEO (KEYWORD STUFFING YANG NATURAL)
  keywords: [
    // Brand Keywords
    '0xTanda', '0x Tanda', '0xTanda Official', '0xTanda Shop', 'Oxtanda',
    // Niche & Industry
    'Phygital Fashion', 'Phygital Streetwear', 'Web3 Fashion Indonesia', 'Crypto Fashion', 'Fashion Blockchain', 
    'NFT Clothing', 'Digital Twin NFT', 'Brand Lokal Web3', 'Streetwear Jakarta',
    // Product Specific
    'Genesis Boxy Tee', 'Kaos Boxy Oversized', 'Heavyweight Cotton 16s', 'Kaos Premium Pria Wanita', 
    'Baju Kualitas Tinggi', 'Baju Anti Fast Fashion', 'Slow Fashion Indonesia',
    // Community & Philosophy
    'Royal Resistance', 'Stoikisme Fashion', 'Kolektor Seni', 'Aset Digital Monad', 'Concierge Airdrop'
  ],
  
  authors: [{ name: 'Abrur Alaina', url: 'https://www.0xtanda.xyz' }],
  creator: '0xTanda Research Lab',
  publisher: '0xTanda',
  
  // Konfigurasi Robot Google agar mengindeks seluruh isi website
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Konfigurasi Domain Utama
  metadataBase: new URL('https://www.0xtanda.xyz'),
  alternates: {
    canonical: '/',
  },
  
  // Ikon Website
 icons: {
    // Memberikan instruksi spesifik ke Google tentang ukuran logo
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  // =================================================================
  // 📱 OPEN GRAPH (UNTUK PREVIEW WHATSAPP, TELEGRAM, FACEBOOK)
  // =================================================================
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.0xtanda.xyz',
    siteName: '0xTanda | Phygital Streetwear',
    title: '0xTanda | Phygital Fashion & Web3 Streetwear Indonesia',
    description: 'Pakaian fisik premium yang terhubung dengan Digital Twin NFT. Miliki karya nyata, amankan secara digital.',
    images: [
      {
        url: '/branding/og-banner.jpg', 
        width: 1200,
        height: 630,
        alt: '0xTanda Phygital Brand Vision',
      },
    ],
  },

  // =================================================================
  // 🐦 TWITTER / X CARDS
  // =================================================================
  twitter: {
    card: 'summary_large_image',
    title: '0xTanda | Phygital Fashion Indonesia',
    description: 'Tangible craftsmanship you can feel, secured by digital ownership you can prove. Join the resistance.',
    creator: '@0xTanda',
    site: '@0xTanda',
    images: ['/branding/og-banner.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0E0E0E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  // =================================================================
  // 🧠 JSON-LD SCHEMA MARKUP (KODE RAHASIA UNTUK RANKING GOOGLE)
  // Membantu Google memahami bahwa 0xTanda adalah sebuah Entitas Organisasi/Brand Resmi
  // =================================================================
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "0xTanda",
    "alternateName": ["0xTanda Phygital", "0xTanda Streetwear", "Oxtanda"],
    "url": "https://www.0xtanda.xyz",
    "logo": "https://www.0xtanda.xyz/branding/logo-0xtanda-icon.png",
    "description": "Pionir Phygital Streetwear di Indonesia yang menggabungkan pakaian fisik heavyweight dengan aset digital NFT di blockchain Monad.",
    "foundingDate": "2026",
    "founders": [
      {
        "@type": "Person",
        "name": "Abrur Alaina"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.instagram.com/0xtanda/",
      "https://x.com/0xTanda",
      "https://www.tiktok.com/@0xtanda",
      "https://t.me/Official0xTanda"
    ]
  };

  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="AdsL5zatSrtTJ8kvkoh5wI1flrVIf0YXJ9-93uTbT8o" />
        
        {/* INJEKSI JSON-LD KE DALAM HEAD (TIDAK TERLIHAT OLEH USER, TAPI DIBACA OLEH ROBOT GOOGLE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      
      <body className="bg-[#0a0a0a] text-[#f3f3f3] overflow-x-hidden antialiased">
        <Marquee />
        <Navbar />
        {children}
      </body>
    </html>
  );
}