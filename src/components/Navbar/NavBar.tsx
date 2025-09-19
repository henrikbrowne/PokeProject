import { NavLink } from "react-router";
import './Navbar.css';
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";
import whatsappIcon from "../../assets/whatsapp.png";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/overview">Pokédex</NavLink>
      <NavLink to="/game">Game</NavLink>
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


