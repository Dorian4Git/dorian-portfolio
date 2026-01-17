import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  // Le titre doit contenir votre métier principal + la ville
  title: "Dorian Thomé | Développeur Web & Expert IA à Genève (Freelance)",
  
  // La description doit donner envie de cliquer (CTR) et contenir les variantes de mots-clés
  description: "Création de sites web sur mesure (Next.js, WordPress) et solutions d'Intelligence Artificielle pour entreprises. Basé à Genève. Devis rapide et code performant.",
  
  // Ajoutez les keywords (Google les ignore souvent, mais Bing/autres les lisent encore un peu)
  keywords: ["Développeur web Genève", "Freelance Next.js", "Site WordPress Suisse", "Expert IA", "Consultant Machine Learning", "Création site internet"],
  
  // Important pour le partage sur LinkedIn/Twitter (OpenGraph)
  openGraph: {
    title: "Dorian Thomé — Web & IA/ML",
    description: "Votre site web moderne et rapide, livré par un expert technique à Genève.",
    url: "https://votre-site.com", // Mettez votre vraie URL ici
    siteName: "Dorian Thomé",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="JQXPxbO7JAHn7kqImOG22cVorkOjfwJ3sQZV1GjiJeY"
        />
      </head>
      <body className="min-h-screen bg-grid">
        <SiteHeader />
        {/* CHANGE: Removed "py-10". The page itself controls its own vertical spacing now. */}
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}