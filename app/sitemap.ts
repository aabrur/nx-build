import { MetadataRoute } from 'next';

/**
 * Konfigurasi Sitemap 0xTanda.
 * Digunakan oleh mesin pencari (Google, Bing) untuk memetakan seluruh halaman website.
 * Domain utama diset ke: https://www.0xtanda.xyz
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.0xtanda.xyz';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Halaman utama memiliki prioritas tertinggi
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Katalog produk sangat penting untuk SEO
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terminal-log`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, // Terminal Log (Blog/Artikel) bagus untuk menjaring trafik organik
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      // Detail produk utama (Genesis Boxy Tee)
      url: `${baseUrl}/product/genesis-boxy-tee`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}