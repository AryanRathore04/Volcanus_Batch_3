import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product_Detail from "./components/Product_Detail";
import Navbar from "./components/Navbar";
import Related_Product from "./components/Related_Product";
import Search_Product from "./components/Search_Product";
import { items } from "./data";
const App = () => {
  const [data, setData] = useState(items);

  return (
    <>
      {/* <Navbar /> */}
      <Products data={data} />
    </>
  );
};

export default App;
