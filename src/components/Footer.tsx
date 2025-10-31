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
        <p>Adresse : Dakar, Sénégal</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0!2d-17.4473!3d14.7451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ0JzQyLjQiTiAxN8KwMjYnNTAuMyJX!5e0!3m2!1sfr!2ssn!4v1234567890!5m2!1sfr!2ssn"
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
