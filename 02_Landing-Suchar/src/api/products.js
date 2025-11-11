import newImage from '../assets/img/img.png';

const productsData = [
  {
    id: '1',
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    stock: 10,
    imageUrl: newImage,
  },
  {
    id: '2',
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 200,
    stock: 10,
    imageUrl: newImage,
  },
  {
    id: '3',
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 300,
    stock: 10,
    imageUrl: newImage,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData.find(prod => prod.id === productId));
    }, 500);
  });
};