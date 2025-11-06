import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          Politique de Confidentialité
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section className="mb-8">
            <p className="text-muted-foreground mb-6">
              Le site www.thioubene-multishop.com est exploité par THIOUBENE MULTISHOP, entreprise 
              spécialisée dans la vente de pièces détachées automobiles au Sénégal.
            </p>
            <p className="text-muted-foreground">
              La présente politique de confidentialité a pour objectif d'informer les utilisateurs 
              sur la manière dont leurs données personnelles sont collectées, utilisées, protégées 
              et conservées.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Responsable du traitement</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="font-semibold text-lg mb-2">THIOUBENE MULTISHOP</p>
              <p className="text-muted-foreground mb-1">
                <strong>Email :</strong> contact@thioubene-multishop.com
              </p>
              <p className="text-muted-foreground">
                <strong>Pays :</strong> Sénégal
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Données personnelles collectées</h2>
            <p className="text-muted-foreground mb-4">
              Nous collectons uniquement les informations nécessaires à la gestion de notre relation 
              avec nos clients et visiteurs :
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
              <li>
                <strong>Données d'identification :</strong> nom, prénom, numéro de téléphone, 
                adresse e-mail, adresse postale.
              </li>
              <li>
                <strong>Données de commande et de livraison :</strong> produits commandés, mode 
                de paiement, adresse de livraison.
              </li>
              <li>
                <strong>Données techniques :</strong> adresse IP, type de navigateur, données de connexion.
              </li>
              <li>
                <strong>Données issues des cookies :</strong> préférences de navigation, statistiques 
                de fréquentation du site.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Finalités du traitement</h2>
            <p className="text-muted-foreground mb-4">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Traiter et gérer vos commandes</li>
              <li>Assurer le service client et répondre à vos demandes</li>
              <li>Améliorer l'expérience utilisateur sur notre site</li>
              <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Protection des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
              protéger vos données personnelles contre tout accès, modification, divulgation ou 
              destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Vos droits</h2>
            <p className="text-muted-foreground mb-4">
              Conformément à la réglementation en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : <strong>contact@thioubene-multishop.com</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous 
              contacter par email à <strong>contact@thioubene-multishop.com</strong> ou par téléphone 
              au <strong>+221 70 937 83 24</strong>.
            </p>
          </section>

          <div className="bg-muted/30 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
