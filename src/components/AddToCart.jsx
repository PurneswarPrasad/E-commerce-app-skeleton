import React, { useContext } from "react";
import CartContext from "../context/CartContext";
// consume a context

function AddToCart({ item }) {
  //taken values out from the context
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  function increase() {
    // we can direcly use addToCart function instead of making another function
    addToCart(item);
  }

  function decrease() {
    removeFromCart(item);
  }

  console.log(cart);
  
  const quantity = item.id ? item.id.quantity : 0;

  //if quantity is more than 1
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add to cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <button onClick={increase}>+</button>
        </div>
        <span>{quantity}</span>
        <div>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
