import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  if (!item) {
    return null;
  }

  const handleOnAdd = (quantity) => {
    // console.log(`Agregados ${quantity} items`); 

  };

  return (
    <div>
      <img src={item.imageUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
    </div>
  );
}

export default ItemDetail;
