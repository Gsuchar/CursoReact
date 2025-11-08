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
        setNotification('error', 'Fallo');
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

export default ItemListContainer;



/*import React from 'react';

const ItemListContainer = ({  }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProds().then(products => {
      setProducts(products);
    }).catch(error => {
      setNotification('error', 'Fallo');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="item-list-container">
      <h1></h1>
      {loading ? (
        <h3>Cargando productos...</h3>
      ) : (
        <TaskList products={products} onCompleted={handleClick} />
      )}
    </div>
  );


};

export default ItemListContainer;*/
