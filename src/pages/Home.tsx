import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage("Merci, nous vous répondrons sous 24h.");
  };

  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-left">
          <h1>THIOUBENE MULTI SHOP</h1>
          <p>Avec Nos Pièces, Votre Voiture retrouve son État d'Origine</p>
          <Link to="/catalogue" className="btn-main">Voir le catalogue</Link>
        </div>
        <div className="hero-right">
          <img src="/images/moteur.jpg" alt="Moteur automobile" />
        </div>
      </section>

      <section className="products">
        <h2>Nos produits</h2>
        <div className="filters">
          <button>Tous</button>
          <button>Moteur</button>
          <button>Transmission</button>
          <button>Freinage</button>
          <button>Refroidissement</button>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/moteur.jpg" alt="Moteur"/>
            <p>Moteur</p>
            <button>Demander un devis</button>
          </div>
          <div className="product-card">
            <img src="/images/cardan.jpg" alt="Cardan"/>
            <p>Cardan</p>
            <button>Demander un devis</button>
          </div>
          <div className="product-card">
            <img src="/images/radiateur.jpg" alt="Radiateur"/>
            <p>Radiateur</p>
            <button>Demander un devis</button>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Nos services</h2>
        <div className="service-grid">
          <div>
            <h3>Vente de pièces neuves et d'occasion</h3>
            <p>Pièces détachées de qualité pour tous véhicules.</p>
          </div>
          <div>
            <h3>Livraison rapide</h3>
            <p>Expédition sous 24h partout au Sénégal.</p>
          </div>
          <div>
            <h3>Conseils techniques</h3>
            <p>Assistance personnalisée par nos experts.</p>
          </div>
          <div>
            <h3>Service après-vente</h3>
            <p>Suivi client et garantie sur nos produits.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Ils nous font confiance</h2>
        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐ "Service impeccable et livraison rapide !"</p>
          <strong>– Client satisfait</strong>
        </div>
        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐ "Produits de qualité, je recommande."</p>
          <strong>– Client fidèle</strong>
        </div>
      </section>

      <section className="contact">
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Votre message..." required></textarea>
          <button type="submit">Envoyer le message</button>
          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Home;
