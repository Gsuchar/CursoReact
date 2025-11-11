import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Tiendita Reactiva
      </Link>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Inicio
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Productos
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Conctacto
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;