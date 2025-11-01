import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      setFormMessage("Merci, nous vous répondrons sous 24h.");
      toast.success("Message envoyé avec succès!");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <section className="contact">
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom complet" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Téléphone" required />
          <textarea name="message" placeholder="Votre message..." required></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>

        <div className="map">
          <iframe 
            title="Carte localisation - Touba"
            src="https://maps.google.com/maps?q=14.8819849,-15.8883171&z=17&output=embed"
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
