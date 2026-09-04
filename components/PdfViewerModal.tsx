"use client";

import { useEffect, useState } from "react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  subtitle?: string;
  lang?: "fr" | "en";
}

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  subtitle,
  lang = "fr",
}: PdfViewerModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 flex flex-col w-full rounded-3xl border border-white/15 bg-zinc-950 shadow-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? "h-[96vh] max-w-[98vw]"
            : "h-[85vh] max-w-5xl"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-zinc-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 pr-4 overflow-hidden">
            <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <svg
                className="h-4 w-4 text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white truncate">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-zinc-400 truncate">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/10 hover:text-white transition no-underline"
              title={lang === "en" ? "Open in new tab" : "Ouvrir dans un nouvel onglet"}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="hidden sm:inline">
                {lang === "en" ? "New tab" : "Nouvel onglet"}
              </span>
            </a>

            {/* Download Link */}
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/10 hover:text-white transition no-underline"
              title={lang === "en" ? "Download PDF" : "Télécharger le PDF"}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="hidden sm:inline">
                {lang === "en" ? "Download" : "Télécharger"}
              </span>
            </a>

            {/* Toggle Fullscreen */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="rounded-xl border border-white/10 bg-white/5 p-1.5 text-zinc-300 hover:bg-white/10 hover:text-white transition"
              title={lang === "en" ? "Toggle size" : "Agrandir / Réduire"}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isFullscreen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9L4 4m0 0l5 0m-5 0l0 5m11 5l5 5m0 0l-5 0m5 0l0-5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                )}
              </svg>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 p-1.5 text-zinc-300 hover:bg-white/10 hover:text-white transition"
              title={lang === "en" ? "Close" : "Fermer"}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="relative flex-1 w-full bg-zinc-900 overflow-hidden">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            title={title}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
