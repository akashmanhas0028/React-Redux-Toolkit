import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <Link to="/cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">
          {cartSelector.items.length ? cartSelector.items.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default AddToCart;