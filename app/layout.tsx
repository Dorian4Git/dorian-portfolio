import type { Metadata } from "next";
import "./globals.css";
import LanguageWrapper from "@/components/LanguageWrapper";

// Primary canonical production domain
const siteUrl = "https://dorianthome.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dorian Thomé | Développeur Web Freelance & IA • Genève",
    template: "%s | Dorian Thomé",
  },
  description:
    "Développeur web basé à Genève. Création de landing pages haute conversion, sites vitrines WordPress & Next.js sur-mesure et solutions IA pratiques. Rigueur suisse et code performant.",

  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-CH": `${siteUrl}`,
      "en-US": `${siteUrl}/en`,
      "x-default": siteUrl,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_CH",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Dorian Thomé — Développeur Web",
    title: "Dorian Thomé | Développeur Web Freelance & IA • Genève",
    description:
      "Création de landing pages de conversion, sites vitrines sur-mesure et intégrations IA pour indépendants et PME.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dorian Thomé - Développeur Web à Genève",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dorian Thomé | Développeur Web Freelance • Genève",
    description:
      "Landing pages de conversion, sites vitrines sur-mesure et solutions IA pratiques.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "qG-0GTBgXcKH5WpT3wvtvXup06m0DpElbRLB7PPow2Q",
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Rich Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dorian Thomé",
        jobTitle: "Développeur Web Freelance & Ingénieur en Sciences de l'Information",
        url: siteUrl,
        image: `${siteUrl}/media/dorian-hero-portrait.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Genève",
          addressRegion: "GE",
          addressCountry: "CH",
        },
        sameAs: [
          "https://www.linkedin.com/in/dorian-t-0b1168150/",
          "https://github.com/Dorian4Git",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Dorian Thomé - Création de Sites Web & IA",
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        telephone: "",
        email: "contact@dorianthome.ch",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Genève",
          addressRegion: "GE",
          addressCountry: "CH",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Genève" },
          { "@type": "AdministrativeArea", name: "Vaud" },
          { "@type": "Country", name: "Suisse" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Digitaux",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Page Haute Conversion",
                description: "Conception de page de vente et de capture pour convertir les visiteurs en clients.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Site Vitrine & Autonomie",
                description: "Création de sites WordPress ou Next.js faciles à administrer pour PME et indépendants.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Développement Web & IA Pratique",
                description: "Applications sur-mesure et automatisation intelligente de processus métiers.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#090a0d] text-zinc-100 bg-grid">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}