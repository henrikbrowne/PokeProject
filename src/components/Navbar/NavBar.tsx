import { NavLink } from "react-router";
import './Navbar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/overview">Pokédex</NavLink>
      <NavLink to="/game">Game</NavLink>
    </nav>
  );
}


