import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ItemDetail({ item }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  if (!item) {
    return null;
  }

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
  };

  return (
    <div>
      <img src={item.imageUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      {
        quantityAdded > 0 ? (
          <Link to='/cart' className='btn btn-success'>Terminar mi compra</Link>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
        )
      }
    </div>
  );
}

export default ItemDetail;
