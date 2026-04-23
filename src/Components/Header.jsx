import React from "react";
import AddToCart from "./AddToCart";

const Header = () => {
  const navLinks = ["Home", "Products", "Contact"];

  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        {navLinks.map((link, index) => (
          <a key={index} href="#">
            {link}
          </a>
        ))}
      </nav>

      <AddToCart/>
    </header>
  );
};

export default Header;