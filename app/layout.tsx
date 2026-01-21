import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

// 1. Define the Base URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` 
  : "https://dorian-portfolio.vercel.app";

export const metadata: Metadata = {
  // 2. CRITICAL: Set metadataBase so images resolve correctly
  metadataBase: new URL(baseUrl),

  // Title & Description
  title: {
    default: "Dorian Thomé | Développeur Web Freelance & IA • Genève",
    template: "%s | Dorian Thomé",
  },
  description: "Développeur Fullstack spécialisé en sites Next.js, WordPress et solutions IA. Basé à Genève, disponible en remote/international. Code suisse, propre et performant.",

  // 3. OPTIMIZED KEYWORDS (Mixed FR/EN for maximum reach)
  keywords: [
    // Core (FR)
    "Développeur web Genève", 
    "Freelance Next.js", 
    "Création site internet Suisse", 
    "Expert WordPress", 
    "Intégration IA", 
    
    // Core (EN) - For your international strategy
    "Web Developer Geneva", 
    "Next.js Freelance", 
    "React Developer", 
    "AI Solutions", 
    "Front-end Engineer",
    
    // Niche/Specific
    "Programmer", 
    "Consultant Tech",
  ],

  // OpenGraph (Social Media)
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: baseUrl,
    siteName: "Dorian Thomé Portfolio",
    title: "Dorian Thomé | Développeur Web Freelance & IA",
    description: "Votre vision, en ligne. Sites web performants et outils IA sur mesure.",
    images: [
      {
        url: "/og-image.png", // Ensure this file is in your /public folder!
        width: 1200,
        height: 630,
        alt: "Dorian Thomé - Portfolio",
      },
    ],
  },

  // 4. CLEANER VERIFICATION (Move it here instead of <head>)
  verification: {
    google: "qG-0GTBgXcKH5WpT3wvtvXup06m0DpElbRLB7PPow2Q",
  },

  // Icons are handled automatically by file presence, 
  // but you can be explicit if you want:
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* 5. Cleaned up body/head (verification moved up) */}
      <body className="min-h-screen bg-grid">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}