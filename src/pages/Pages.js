import React, {useState} from "react";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

import { Route, Routes } from "react-router";
import Category from "../components/Category";
import Product from "../components/Product";
function Pages() {
  const [activeCategory, setActiveCategory] = useState();
  const [activeProduct, setActiveProduct] = useState();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Categories" element={<Categories/>} />
        <Route path='Categories/:catName' element={<Category />} />
        <Route path='Categories/:catName/:prodID' element={<Product />} />
        {/* <Route path={`/Categories/${activeCategory.id}`} element={<Category activeCategory={activeCategory}/>} /> */}
        {/* <Route path={`/Categories/${activeCategory.id}/${activeProduct.prod_id}`} element={<Product activeProduct={activeProduct} setActiveProduct={setActiveProduct}/>} /> */}
      </Routes>
    </div>
  );
}

export default Pages;

//Will include the current shown page
