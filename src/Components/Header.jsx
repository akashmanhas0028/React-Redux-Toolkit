import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">✨</span> MyStore
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#products">Products</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      <AddToCart />
    </header>
  );
};

export default Header;
