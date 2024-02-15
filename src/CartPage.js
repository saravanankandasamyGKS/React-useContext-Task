// CartPage.js
import React from 'react';
import CartItem from './CartItem';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <span>Total Quantity: {getTotalQuantity()}</span>
        <span>Total Amount: {getTotalAmount()}</span>
      </div>
    </div>
  );
};

export default CartPage;
