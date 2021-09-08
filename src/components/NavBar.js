import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper deep-orange accent-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          GearHead Inc.
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
