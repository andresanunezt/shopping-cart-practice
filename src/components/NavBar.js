import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper orange lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo deep-purple-text text-darken-4">
          GearHead Inc.
        </Link>

        <ul className="right">
          <li>
            <Link to="/">All Products</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
