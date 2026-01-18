import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-box">
      <div className="LL"><p>Little Lemon</p></div>
      <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reserve</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li>Contact</li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
