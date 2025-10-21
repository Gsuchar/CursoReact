import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Tiendita</div>
      <div className="links">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;