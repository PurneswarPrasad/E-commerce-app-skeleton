import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     category: 1,
//     title: "Apple iPhone 14",
//     price: 100000,
//   },
//   {
//     id: 2,
//     category: 1,
//     title: "Apple iPhone 13",
//     price: 70000,
//   },
//   {
//     id: 3,
//     category: 1,
//     title: "Google Pixel 7",
//     price: 50000,
//   },
//   {
//     id: 4,
//     category: 1,
//     title: "Nokia 1100",
//     price: 2000,
//   },
//   {
//     id: 5,
//     title: "Samsung Galaxy S10",
//     price: 100000,
//   },
//   {
//     id: 6,
//     category: 1,
//     title: "Sony Xperia S10",
//     price: 100000,
//   },
//   {
//     id: 7,
//     category: 2,
//     title: "Apple Macbook Air M1",
//     price: 120000,
//   },
//   {
//     id: 8,
//     category: 2,
//     title: "HP Pavilion E5",
//     price: 70000,
//   },
//   {
//     id: 9,
//     category: 3,
//     title: "Tshirt",
//     price: 1000,
//   },
//   {
//     id: 10,
//     category: 3,
//     title: "Jeans",
//     price: 7000,
//   },
// ];

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //this API call happens only once
    fetch("https://run.mocky.io/v3/271ab467-1c5d-4fa9-a9fa-12a673c4cd5f") //fetch calls happens everytime and re-rendering happens again and again due to useState
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //products = res; //by the time this line is executed, the return is already done. when the product is set, the function needs to be called again(re-render) to bypass the asynchronity. that's why we use hooks.
        setProducts(res); //since this useState setter function renders the Products() function everytime, we wrap it inside a useEffect
        console.log(res);
      });
  }, [0]); //products dependency can be given so that the state is tracked  when products is changed

  return (
    <div>
      {products.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
}

export default Products;
