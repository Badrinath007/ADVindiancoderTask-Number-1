
import React, { createContext, useState, useEffect } from 'react';


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/product.json');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (<ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>);
};

export default ProductProvider;
