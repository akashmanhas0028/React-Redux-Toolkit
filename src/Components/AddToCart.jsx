import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart);
  console.log(cartSelector.items.length);
  return (
    <>
      <div className="cart">
        🛒
        <span className="cart-count">
          {cartSelector.items.length ? cartSelector.items.length : 0}
        </span>
      </div>
    </>
  );
};

export default AddToCart;
