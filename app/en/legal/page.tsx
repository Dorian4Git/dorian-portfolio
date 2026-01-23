import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice | Dorian Thomé",
  robots: "noindex", // Keep this to avoid indexing legal text
};

export default function LegalPageEn() {
  return (
    <div className="container-padded py-20 text-zinc-300">
      <h1 className="text-3xl font-bold text-white mb-8">Legal Notice & Privacy</h1>
      
      <div className="space-y-8 max-w-3xl">
        
        {/* 1. IMPRESSUM (Mandatory) */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. Site Publisher</h2>
          <p>
            <strong>Owner:</strong> Dorian Thomé<br />
            <strong>Address:</strong> [Your Full Address Here], Geneva, Switzerland<br />
            <strong>Contact:</strong> contact@dorianthome.ch<br />
            <strong>Hosting:</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
        </section>

        {/* 2. COOKIES */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. Cookies & Tracking</h2>
          <p>
            This site is designed to respect your privacy by default ("Privacy by Design").
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>No advertising trackers:</strong> We do not use any marketing cookies (Facebook Pixel, Google Ads, etc.).
            </li>
            <li>
              <strong>No intrusive analytics:</strong> We do not collect your navigation data for commercial purposes.
            </li>
            <li>
              <strong>Technical cookies:</strong> Only cookies strictly necessary for technical operation (image optimization, security) may be stored. These are exempt from consent under the Swiss nLPD and European GDPR.
            </li>
          </ul>
        </section>

        {/* 3. DATA PROTECTION */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Form Data</h2>
          <p>
            Information entered in the contact form (Name, Message) is not stored on a server or database. It is transmitted directly and solely via email to Dorian Thomé to process your request. No data is sold to third parties.
          </p>
        </section>

      </div>
    </div>
  );
}