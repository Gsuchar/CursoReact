import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; // Import the new Cart component
import Checkout from './components/Checkout'; // Import the new Checkout component
import { CartProvider } from './context/CartContext'; // Import the CartProvider

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider> {/* Wrap the entire application with CartProvider */}
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/products" element={<ItemListContainer greeting="Todos nuestros productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por Categoría" />} /> {/* Add route for categories */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
          <Route path="/checkout" element={<Checkout />} /> {/* Add route for Checkout */}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
