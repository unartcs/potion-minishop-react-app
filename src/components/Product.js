import React from 'react'
import "../styles/Product.css";
import {useParams} from 'react-router'
import Products from "../data/Products";

function Product({activeProduct}) {
  const {prodID, catName} = useParams()
  const categoryIndex = Products.findIndex((cat)=> cat.name === catName)
  const product = Products[categoryIndex].items.find((item) => item.prod_id === prodID)
  return (
    <div className='product-wrapper'>
        {product.name}
    </div>
  )
}

export default Product