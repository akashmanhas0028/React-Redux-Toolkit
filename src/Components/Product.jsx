import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { addItem, removeItem } from "../Redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const cartSelector = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "failed") {
    return <h2>Error: {error}</h2>;
  }

  console.log(cartSelector.length);

  return (
    <div className="products-container">
      {items.map((item) => (
        <div className="product-card" key={item.id}>
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="product-info">
            <h2>{item.title}</h2>
            <p className="price">₹ {Math.round(item.price * 80)}</p>
            <p className="description">{item.description.slice(0, 80)}...</p>
          </div>

          {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
            <button className="btn remove-btn" onClick={() => dispatch(removeItem(item))}>Remove from Cart</button>
          ) : (
            <button className="btn" onClick={() => dispatch(addItem(item))}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Product;
