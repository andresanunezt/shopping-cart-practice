import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper orange lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo black-text">
          GearHead Inc.
        </Link>

        <ul className="right black-text">
          <li>
            <Link to="/" className="black-text ">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="black-text ">
              My Cart
            </Link>
          </li>
          <li>
            <i class="material-icons">add_shopping_cart</i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
