import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simula una creacion de orden/ticket, para ponerle darle un toque mas, no hice la coleccion en bd
    const order = {
      buyer: { name, phone, email },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: totalPrice,
      date: new Date(),
    };

    // Simula order ID pa mostrar algo
    setTimeout(() => {
      const generatedOrderId = 'ORD-' + Math.random().toString(36).substring(2, 11).toUpperCase();
      setOrderId(generatedOrderId);
      clearCart(); 
      setLoading(false);
    }, 2000); // una demoradita para pa que no sea instantaneo
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h1>Procesando tu compra...</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div className="container mt-5 text-center">
        <h1>Tu carrito está vacío</h1>
        <p>No tienes productos para finalizar la compra.</p>
        <Link to="/" className="btn btn-primary">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="card p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Confirmar Compra</button>
          <Link to="/cart" className="btn btn-secondary">Volver al Carrito</Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
