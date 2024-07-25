import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/get`);
      //   console.log("connect with backend ", api);
      setProducts(api.data.products);
      console.log("products from backend", products);
    };

    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
