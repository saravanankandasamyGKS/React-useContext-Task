// Cart.js
import React from "react";
import { useCart } from "./CartContext";
import "./App.css";

const Cart = () => {
  const {
    cartItems,
    removeItemFromCart,
    updateItemQuantity,
    getTotalQuantity,
    getTotalAmount,
  } = useCart();

  return (
    <div className="container cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <span>${item.price}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateItemQuantity(item.id, parseInt(e.target.value))
              }
            />
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total Quantity: {getTotalQuantity()}</span>
        <br />
        <span>Total Amount: ${getTotalAmount()}</span>
      </div>
    </div>
  );
};

export default Cart;
