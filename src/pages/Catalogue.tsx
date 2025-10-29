import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Catalogue = () => {
  return (
    <>
      <Header />

      <section className="catalogue">
        <h1>Catalogue de nos produits</h1>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/moteur.jpg" alt="Moteur"/>
            <p>Moteur</p>
          </div>
          <div className="product-card">
            <img src="/images/cardan.jpg" alt="Cardan"/>
            <p>Cardan</p>
          </div>
          <div className="product-card">
            <img src="/images/radiateur.jpg" alt="Radiateur"/>
            <p>Radiateur</p>
          </div>
          <div className="product-card">
            <img src="/images/frein.jpg" alt="Freins"/>
            <p>Freins</p>
          </div>
          <div className="product-card">
            <img src="/images/amortisseur.jpg" alt="Amortisseurs"/>
            <p>Amortisseurs</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Catalogue;
