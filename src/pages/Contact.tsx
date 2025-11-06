import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <section className="contact">
        <h1>Contactez-nous</h1>
        <form 
          action="https://formsubmit.co/contact@thioubene-multishop.com" 
          method="POST"
        >
          {/* Configuration FormSubmit */}
          <input type="hidden" name="_subject" value="Nouveau message depuis le site web" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://thioubene-multishop.com/contact?success=true" />
          
          <input type="text" name="name" placeholder="Nom complet" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Téléphone" required />
          <textarea name="message" placeholder="Votre message..." required></textarea>
          <button type="submit">Envoyer le message</button>
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
