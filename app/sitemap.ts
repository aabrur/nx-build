import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://0xtanda.xyz';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Prioritas tertinggi (Halaman Utama)
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Prioritas kedua (Katalog)
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Prioritas ketiga (Tentang)
    },
    {
      url: `${baseUrl}/terminal-log`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Sering diupdate untuk artikel baru
      priority: 0.8, // Prioritas SEO tinggi untuk menjaring trafik organik
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5, // Prioritas lebih rendah
    },
    {
      // Halaman detail produk spesifik (Genesis Boxy Tee)
      url: `${baseUrl}/product/genesis-boxy-tee`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}