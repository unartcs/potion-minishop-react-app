import React, { useState } from "react";
import Products from "../data/Products";
import "../styles/Categories.css";
import Category from "./Category";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";

function Categories() {
  const [activeCategory, setActiveCategory] = useState();
  const clickHandler = (item) => {
    setActiveCategory(item);
  };
  return (
      <div className="categories-wrapper">
        {/* {activeCategory ? (
          <Routes>
            <Route
              path={`${activeCategory.id}`}
              element={<Category activeCategory={activeCategory} />}
            />
          </Routes>
          
        ) : ( */}
          <div className="categories-grid-container">
            {Products.map((item) => {
              return (
                <Link to={`${item.name}`}>
                  <div
                    className="categories-grid-box"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
                    }}
                    onClick={() => clickHandler(item)}
                  >
                    <h2 className="categories-grid-title">{item.name}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        {/* )} */}
      </div>
  );
}

export default Categories;
