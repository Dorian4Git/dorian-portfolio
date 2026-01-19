"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitchProps {
  className?: string;
}

export default function LanguageSwitch({ className = "" }: LanguageSwitchProps) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  let targetPath = "/";

  if (isEnglish) {
    // Switch to French: Remove leading /en
    // Ex: "/en/contact" -> "/contact"
    // Ex: "/en" -> "" (becomes "/" via the || operator)
    targetPath = pathname.replace(/^\/en/, "") || "/";
  } else {
    // Switch to English: Add /en prefix
    // Ex: "/contact" -> "/en/contact"
    targetPath = pathname === "/" ? "/en" : `/en${pathname}`;
  }

  return (
    <Link 
      href={targetPath} 
      className={className}
      aria-label={isEnglish ? "Passer en Français" : "Switch to English"}
    >
      {isEnglish ? "FR" : "EN"}
    </Link>
  );
}