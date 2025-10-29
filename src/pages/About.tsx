import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />

      <section className="about">
        <h1>Présentation de l'entreprise</h1>
        <p><strong>THIOUBENE MULTI SHOP</strong> est une entreprise spécialisée dans la vente de pièces détachées automobiles, neuves et d'occasion, provenant de l'Europe et de l'Asie, destinées aux particuliers et professionnels.</p>
        <p>Notre mission est de fournir à nos clients des produits de qualité, au meilleur prix, tout en garantissant un service professionnel et rapide.</p>
      </section>

      <Footer />
    </>
  );
};

export default About;
