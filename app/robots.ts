import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: hide private folders if needed
    },
    // This tells Google exactly where to find your sitemap
    sitemap: 'https://dorianthome.ch/sitemap.xml',
  }
}