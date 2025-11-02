import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo THIOUBENE MULTI SHOP" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</Link></li>
          <li><Link to="/catalogue" className={location.pathname === "/catalogue" ? "active" : ""}>Catalogue</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        </ul>
      </nav>
      {location.pathname === "/" && (
        <div className="header-right">
          <input type="text" placeholder="Rechercher..." className="search-bar" />
          <button className="btn-contact">Nous contacter</button>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1B6HAcnsG1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/thioubene.multishop?igsh=dzdqbzMyMnc1YWE%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
