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
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProductById(itemId);
        if (data) {
          setItem(data);
        } else {
          setError('El producto no fue encontrado.');
        }
      } catch {
        setError('Ocurrió un error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="item-detail-container-wrapper">
      <h2>Detalle del Producto</h2>
      {loading && <p>Cargando detalles del producto...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
