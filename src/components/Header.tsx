import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo THIOUBENE MULTI SHOP" />
      </div>
      <nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-background">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 bg-background z-50">
            <DropdownMenuItem asChild>
              <Link to="/" className={`w-full ${location.pathname === "/" ? "font-semibold text-primary" : ""}`}>
                Accueil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/about" className={`w-full ${location.pathname === "/about" ? "font-semibold text-primary" : ""}`}>
                À propos
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/catalogue" className={`w-full ${location.pathname === "/catalogue" ? "font-semibold text-primary" : ""}`}>
                Catalogue
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/contact" className={`w-full ${location.pathname === "/contact" ? "font-semibold text-primary" : ""}`}>
                Contact
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
