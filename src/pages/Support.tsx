import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MessageCircle, Wrench, Package } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground">
            Service d'Assistance
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos achats.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Phone className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Assistance Téléphonique</CardTitle>
              <CardDescription>Appelez-nous directement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg">+221 70 147 67 35</p>
              <p className="text-sm text-muted-foreground mt-2">
                Disponible du lundi au samedi
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Support par Email</CardTitle>
              <CardDescription>Envoyez-nous un message</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg break-all">contact@thioubene-multishop.com</p>
              <p className="text-sm text-muted-foreground mt-2">
                Réponse sous 24-48h
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Horaires d'Ouverture</CardTitle>
              <CardDescription>Quand nous trouver</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Lundi - Samedi</p>
              <p className="text-muted-foreground">8h00 - 18h00</p>
              <p className="font-semibold mt-2">Dimanche</p>
              <p className="text-muted-foreground">Fermé</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Comment pouvons-nous vous aider ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <MessageCircle className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Conseil & Orientation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Besoin de conseils pour choisir la bonne pièce ? Notre équipe d'experts est là pour vous guider dans votre sélection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Support Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Questions techniques sur l'installation ou la compatibilité ? Nous vous apportons l'assistance nécessaire.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Suivi de Commande</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Suivez l'état de votre commande et obtenez des informations sur la livraison de vos pièces.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Questions Fréquentes
          </h2>
          <div className="max-w-3xl mx-auto text-left space-y-4">
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Comment passer une commande ?</h3>
              <p className="text-muted-foreground">
                Contactez-nous par téléphone ou email avec la référence des pièces souhaitées. Notre équipe vous guidera dans le processus.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Quels modes de paiement acceptez-vous ?</h3>
              <p className="text-muted-foreground">
                Nous acceptons les paiements en espèces, par virement bancaire et mobile money (Orange Money, Wave).
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Proposez-vous la livraison ?</h3>
              <p className="text-muted-foreground">
                Oui, nous proposons la livraison sur Dakar et ses environs. Contactez-nous pour plus d'informations sur les délais et tarifs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
