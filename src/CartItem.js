// CartItem.js
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { removeItemFromCart, updateItemQuantity } = useCart();

  const handleQuantityChange = (e) => {
    updateItemQuantity(item.id, parseInt(e.target.value));
  };

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <span>{item.price * item.quantity}</span>
      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
