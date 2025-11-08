import React, { useState, useEffect } from 'react';
import CardProd from './CardProd';



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProds()
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error obteniendo products:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="item-list-container">
      <h1>Lista de productos</h1>
      {loading ? (
        <h3>Cargando productos...</h3>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <CardProd key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const fetchProds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 2000);
  });
};

const productsData = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 200,
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default ItemListContainer;

