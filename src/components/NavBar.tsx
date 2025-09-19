import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/details" end>Details</NavLink>
      <NavLink to="/game">Game</NavLink>
      <NavLink to="/PLACEHOLDER">PLACEHOLDER</NavLink>
    </nav>
  );
}