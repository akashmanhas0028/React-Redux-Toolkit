import React from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./Redux/slice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Redux and Redux Toolkit
      </h1>
      <Product />
      <button onClick={() => dispatch(clearAllItems())} className="clear-cart">
        Clear Cart
      </button>
    </div>
  );
};

export default App;