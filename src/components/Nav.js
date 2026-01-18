import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-box">
      <h2>Little Lemon</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Menu</li>
        <li><Link to="/booking">Reserve</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
