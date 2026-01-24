import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your REAL domain
  const baseUrl = 'https://dorianthome.ch';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
        url: `${baseUrl}/cv`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/en`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },
    {
        url: `${baseUrl}/en/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/en/cv`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
  ]
}