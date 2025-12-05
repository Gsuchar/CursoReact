import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

export const getProductById = async (productId) => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("Fallo al buscar producto.");
    return null;
  }
};