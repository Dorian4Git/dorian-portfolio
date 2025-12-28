import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";


export const metadata: Metadata = {
  title: "Dorian Thomé — Applied AI Engineer",
  description: "Portfolio, CV, and services — LLMs, Computer Vision, Product Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="JQXPxbO7JAHn7kqImOG22cVorkOjfwJ3sQZV1GjiJeY" />
      <body>
        <div className="min-h-screen bg-grid">
          <SiteHeader />
          <main className="container-padded py-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
