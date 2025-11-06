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
          <div className="product-card">
            <img src="/images/filtres.jpg" alt="Filtres"/>
            <p>Filtres</p>
          </div>
          <div className="product-card">
            <img src="/images/parechocs.jpg" alt="Pare-chocs"/>
            <p>Pare-chocs</p>
          </div>
          <div className="product-card">
            <img src="/images/jantes.jpg" alt="Jantes"/>
            <p>Jantes</p>
          </div>
          <div className="product-card">
            <img src="/images/feux-avant.jpg" alt="Feux avant"/>
            <p>Feux avant</p>
          </div>
          <div className="product-card">
            <img src="/images/feux-arriere.jpg" alt="Feux arrière"/>
            <p>Feux arrière</p>
          </div>
          <div className="product-card">
            <img src="/images/cylindre-emetteur.jpg" alt="Cylindre émetteur d'embrayage"/>
            <p>Cylindre émetteur d'embrayage</p>
          </div>
          <div className="product-card">
            <img src="/images/cylindre-recepteur.jpg" alt="Cylindre récepteur d'embrayage"/>
            <p>Cylindre récepteur d'embrayage</p>
          </div>
          <div className="product-card">
            <img src="/images/huile-moteur.jpg" alt="Huile à moteur"/>
            <p>Huile à moteur</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Catalogue;
