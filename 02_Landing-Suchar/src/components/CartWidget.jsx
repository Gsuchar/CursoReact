import React from 'react';

const CartWidget = () => {
  const cartItems = 3; 
  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span>{cartItems}</span>
    </div>
  );
};

export default CartWidget;
