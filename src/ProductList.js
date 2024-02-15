import React from 'react';
import { useCart } from './CartContext';
import './App.css';

const ProductList = ({ products }) => {
  const { addItemToCart } = useCart();

  return (
    <div className="container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.title}</span>
            <span>${product.price}</span>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
