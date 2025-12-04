import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductById(itemId)
      .then((data) => {
        if (data) {
          setItem(data);
        } else {
          setError('El producto no fue encontrado.');
        }
      })
      .catch(() => {
        setError('Ocurrió un error al cargar el producto.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
      <h2>Detalle del Producto</h2>
      {loading && <p>Cargando detalles del producto...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
