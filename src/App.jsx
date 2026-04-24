import React from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./Redux/slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./Components/CartList";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
