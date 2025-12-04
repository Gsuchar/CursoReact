import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <h2 className="text-center">El carrito está vacío</h2>
        <p className="text-center">
          <Link to="/" className="btn btn-primary">
            Ir a comprar
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end mt-4">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="btn btn-warning me-2" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
