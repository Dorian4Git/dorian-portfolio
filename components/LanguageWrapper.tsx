"use client"; // This must be a client component to read the URL

import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // If the URL starts with "/en", use English. Otherwise French.
  const lang = pathname?.startsWith("/en") ? "en" : "fr";

  return (
    <>
      {/* Pass the lang prop dynamically */}
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </>
  );
}