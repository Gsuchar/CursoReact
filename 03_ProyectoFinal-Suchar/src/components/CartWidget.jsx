import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="cart-widget">
      <span>🛒</span>
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;
