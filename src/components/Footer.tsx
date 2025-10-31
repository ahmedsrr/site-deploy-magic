import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h3>Newsletter</h3>
        <input type="email" placeholder="Votre email" />
        <button>S'abonner</button>
      </div>
      <div className="footer-center">
        <ul>
          <li><Link to="/about">Qui sommes-nous</Link></li>
          <li><a href="#">Service d'assistance</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
          <li><a href="#">Conditions générales</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <img src="/images/logo.png" alt="Logo" />
        <p>Adresse : Touba, Sénégal (à côté de Ndiaye Narr Pneu)</p>
        <p>Téléphone : +221 78 175 03 32</p>
        <p>WhatsApp : +221 70 937 83 24</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1B6HAcnsG1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://www.instagram.com/thioubene.multishop?igsh=dzdqbzMyMnc1YWE%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="#">LN</a>
        </div>
        <p>Paiements : Wave - Orange Money - Virement Bancaire - Carte Visa</p>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed/v1/view?center=https%3A%2F%2Fmaps.app.goo.gl%2FqHd3yh32QU1N8fe29&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="100%" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
