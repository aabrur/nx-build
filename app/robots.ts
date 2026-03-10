import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Mengizinkan semua bot search engine (Google, Bing, Yahoo, dll)
      userAgent: '*',
      allow: '/',
      // Jika lo punya halaman rahasia, lo bisa memblokirnya dari Google:
      // disallow: '/war-room', 
    },
    // Ini memberi tahu Google di mana letak peta website (sitemap) lo
    sitemap: 'https://0xtanda.xyz/sitemap.xml',
  };
}