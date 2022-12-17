import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  return useContext(ProductsContext);
};
