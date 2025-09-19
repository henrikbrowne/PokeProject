import { NavLink, useLocation } from "react-router";
import './Navbar.css';
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";
import whatsappIcon from "../../assets/whatsapp.png";

export default function NavBar() {
  const location = useLocation();

    const isPokedexActive = location.pathname.startsWith("/overview") || location.pathname.startsWith("/details");

  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>

      <NavLink to="/overview" className={() => isPokedexActive ? "nav-link active" : "nav-link"}>
        Pokédex
      </NavLink>

      <NavLink to="/game" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Game
      </NavLink>
      
      <NavLink to="/" end>
        <img src={facebookIcon} alt="Home" className="nav-icon" />
      </NavLink>
      <NavLink to="/">
        <img src={instagramIcon} alt="Pokédex" className="nav-icon" />
      </NavLink>
      <NavLink to="/">
        <img src={linkedinIcon} alt="Game" className="nav-icon" />
      </NavLink>
      <NavLink to="/">
        <img src={youtubeIcon} alt="YouTube" className="nav-icon" />
      </NavLink>
      <NavLink to="/">
        <img src={whatsappIcon} alt="WhatsApp" className="nav-icon" />
      </NavLink>
    </nav>
  );
}


