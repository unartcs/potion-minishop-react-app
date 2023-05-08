import React, { useEffect, useState } from "react";
import Products from "../data/Products";
import Product from "./Product";
import "../styles/Category.css";
import { Link, useParams} from "react-router-dom";

function Category({ activeCategory }) {
  const [activeProduct, setActiveProduct] = useState("");
  const { catName } = useParams();
  const categoryData = Products.find((product) => product.name === catName);
  const clickHandler = (item) => {
    setActiveProduct(item);
  };
  return (
    <div className="category-wrapper">
      {/* {activeProduct ? (
          <Product activeProduct={activeProduct} />
        ) : ( */}
      <div className="category-container">
        <h1 className="category-title">{categoryData.name}</h1>
        <div className="category-items-grid-container">
          {categoryData.items.map((item) => {
            return (
              <Link to={`${item.prod_id}`}>
                <div
                  className="items-grid-box"
                  onClick={() => clickHandler(item)}
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
                  }}
                >
                  <h2 className="items-grid-title">{item.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Category;
