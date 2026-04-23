import React from "react";
import { useDispatch } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem } from "../Redux/Slice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.ZQA3TK2YJZvGA0jFtAmHFgHaLH?cb=thfc1&w=640&h=960&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Wireless Headphones"
        />
      </div>

      <div className="product-info">
        <h2>Wireless Headphones</h2>
        <p className="price">$120.20</p>
        <p className="description">
          High-quality wireless headphones with noise cancellation and long
          battery life.
        </p>
        <button onClick={() => dispatch(addItem(1))} className="btn">
          Add to Cart
        </button>
        <button onClick={() => dispatch(removeItem(1))} className="remove-btn">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
