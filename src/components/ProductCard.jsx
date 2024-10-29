// component is a function of JS, returns HTML, can be reused

import React from "react";
import "./ProductCard.css";
import AddToCart from "./AddToCart";
function ProductCard({ item }) {
  return (
    <div className="p-card">
      <div>{item.title}</div>
      <div>{item.price}</div>
      <AddToCart item={item}/>
    </div>
  );
}

export default ProductCard;
