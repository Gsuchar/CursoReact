import React from 'react';

const ItemListContainer = ({ prods }) => {
  return (
    <div className="item-list-container">
      <h2>{prods}</h2>
      <p>Futuro listado de productos.</p>
    </div>
  );
};

export default ItemListContainer;
