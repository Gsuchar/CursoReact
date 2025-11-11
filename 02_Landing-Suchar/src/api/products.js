const productsData = [
  {
    id: '1',
    name: 'Producto 1',
    category: 'categoriaA',
    description: 'Descripción del producto 1',
    price: 100,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Producto 2',
    category: 'categoriaA',
    description: 'Descripción del producto 2',
    price: 200,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Producto 3',
    category: 'categoriaB',
    description: 'Descripción del producto 3',
    price: 300,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(productsData.filter(prod => prod.category === categoryId));
      } else {
        resolve(productsData);
      }
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
