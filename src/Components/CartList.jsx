import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeItem, clearAllItems, updateQuantity } from "../Redux/slice";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartSelector.length} items</span>
        </div>
        {cartSelector.length > 0
          ? cartSelector.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt="" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <div className="item-actions">
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: parseInt(e.target.value) || 1,
                          }),
                        )
                      }
                    />
                  </div>

                  <span className="price">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : null}

        <div className="cart-footer">
          <div className="total">
            Total: $
            {cartSelector
              .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
              .toFixed(2)}
          </div>
          <div className="cart-buttons">
            <button
              onClick={() => {
                if (cartSelector.length > 0) {
                  alert("Order placed successfully!");
                  dispatch(clearAllItems());
                } else {
                  alert("Your cart is empty!");
                }
              }}
              className="btn place-order-btn"
            >
              Place Order
            </button>
            <button
              onClick={() => dispatch(clearAllItems())}
              className="btn clear-cart-btn"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
