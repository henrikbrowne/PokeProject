import { NavLink, useLocation } from "react-router";
import './Navbar.css';

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

      <NavLink to="/pokeomat" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Pokeomat
      </NavLink>
    </nav>
  );
}


