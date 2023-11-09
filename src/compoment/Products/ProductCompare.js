import React from 'react'
import products from "../data.json";
import ProductComparison from "./ProductComparison/ProductComparison";

function ProductCompare() {
  return (
    <div><ProductComparison products={products}/></div>
  )
}

export default ProductCompare;
