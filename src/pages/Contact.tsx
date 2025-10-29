import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage("Merci, nous vous répondrons sous 24h.");
  };

  return (
    <>
      <Header />

      <section className="contact">
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Votre message..." required></textarea>
          <button type="submit">Envoyer le message</button>
          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61960.68876342!2d-17.46833!3d14.69220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d0d7b18a3e5%3A0x54b7b8e0d6c0c8e7!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1234567890" width="100%" height="250"></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
