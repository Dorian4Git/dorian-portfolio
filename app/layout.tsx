import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Dorian Thomé — Web & IA/ML (Genève)",
  description: "Portfolio, CV et services — WordPress ou Next.js — Genève.",
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
        {/* IMPORTANT: plus de container ici */}
        <main className="py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
