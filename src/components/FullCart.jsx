import React, { useContext } from "react";
import CartContext from "../context/CartContext";

//we need to loop thru the the cards thru an object and use map

function FullCart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {Object.values(cart).map((c) => {
        return (
          <div className="card">
            <h2>{c.title}</h2>
            <button
              onClick={() => {
                addToCart(c);
              }}
            >
              +
            </button>
            <h2>{c.quantity}</h2>
            <button
              onClick={() => {
                removeFromCart(c);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FullCart;
