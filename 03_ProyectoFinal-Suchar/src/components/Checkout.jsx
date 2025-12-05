import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase/config'; 

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null); // Nuevo estado para guardar la orden confirmada

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: { name, phone, email },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: totalPrice,
      date: serverTimestamp(), // Timestamp del servidor de Firestore, menos kilombo
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id); // ID de la orden
      setConfirmedOrder(order); // Guarda los detalles de la orden confirmada
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden: ", error);
     
    } finally {
      setLoading(false);
    }
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

  if (orderId && confirmedOrder) { // Asegúrate de que confirmedOrder también exista
    return (
      <div className="container mt-5 text-center">
        <h1>¡Gracias por tu compra, {confirmedOrder.buyer.name}!</h1>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Email: {confirmedOrder.buyer.email}</p>
        <p>Teléfono: {confirmedOrder.buyer.phone}</p>
        <p>Total de la compra: <strong>${confirmedOrder.total}</strong></p>
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
