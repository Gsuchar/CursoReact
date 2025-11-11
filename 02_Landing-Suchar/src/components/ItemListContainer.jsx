import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/products';
import CardProd from './CardProd';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
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
      <h1>{greeting}</h1>
      {loading ? (
        <h3>Cargando productos...</h3>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Link to={`/item/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardProd product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

