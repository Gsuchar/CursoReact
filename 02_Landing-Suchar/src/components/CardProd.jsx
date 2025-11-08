import React from 'react';

const CardProd = ({ product }) => {
  return (
    <div className="card-prod">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Precio: </strong>$ {product.price}</p>
      <button>Comprar</button>
      <button>Detalles</button>
    </div>
  );
};

export default CardProd;
