export const metadata = {
  title: "Mentions Légales | Dorian Thomé",
  robots: "noindex", // Don't let Google rank this boring page
};

export default function LegalPage() {
  return (
    <div className="container-padded py-20 text-zinc-300">
      <h1 className="text-3xl font-bold text-white mb-8">Mentions Légales & Confidentialité</h1>
      
      <div className="space-y-8 max-w-3xl">
        
        {/* 1. IMPRESSUM (Obligatoire Suisse) */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. Éditeur du site</h2>
          <p>
            <strong>Responsable :</strong> Dorian Thomé<br />
            <strong>Adresse :</strong> Chemin Du-Villard 6, Genève, Suisse<br />
            <strong>Contact :</strong> dorian.thome@proton.me<br />
            <strong>Hébergement :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
        </section>

        {/* 2. COOKIES (The "No Banner" Justification) */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. Cookies & Traceurs</h2>
          <p>
            Ce site est conçu pour respecter votre vie privée par défaut ("Privacy by Design").
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>Pas de traceurs publicitaires :</strong> Nous n'utilisons aucun cookie marketing (Facebook Pixel, Google Ads, etc.).
            </li>
            <li>
              <strong>Pas d'analytics intrusifs :</strong> Nous ne collectons pas vos données de navigation à des fins commerciales.
            </li>
            <li>
              <strong>Cookies techniques :</strong> Seuls des cookies strictement nécessaires au fonctionnement technique (optimisation des images, sécurité) peuvent être déposés. Ils sont exemptés de consentement selon la nLPD (Suisse) et le RGPD (Europe).
            </li>
          </ul>
        </section>

        {/* 3. DONNÉES PERSONNELLES (Formulaire) */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Données du formulaire</h2>
          <p>
            Les informations saisies dans le formulaire de contact (Nom, Message) ne sont pas stockées sur un serveur ou une base de données. Elles sont transmises directement et uniquement par email à Dorian Thomé pour traiter votre demande. Aucune donnée n'est revendue à des tiers.
          </p>
        </section>

      </div>
    </div>
  );
}