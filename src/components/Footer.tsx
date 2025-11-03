import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
        <p>Adresse : Touba, Route de Corniche Bélél, 22300</p>
        <p>Téléphone : +221 70 937 83 24</p>
        <p>WhatsApp : +221 78 175 03 32</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1B6HAcnsG1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/thioubene.multishop?igsh=dzdqbzMyMnc1YWE%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span>Paiements :</span>
          <img src="/images/wave.png" alt="Wave" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
          <img src="/images/orange-money.png" alt="Orange Money" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
          <span>- Virement Bancaire - Carte Visa</span>
        </div>
      </div>
      <div className="map">
        <iframe 
          title="Carte localisation - Touba"
          src="https://maps.google.com/maps?q=14.8819849,-15.8883171&z=17&output=embed"
          width="300" 
          height="200" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-center py-4 border-t border-border mt-4" style={{ gridColumn: '1 / -1' }}>
        <p className="text-sm text-muted-foreground">© 2025 THIOUBENE MULTI SHOP. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
