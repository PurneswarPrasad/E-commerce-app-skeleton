// create a context
// use the context value
// update the context value
// provide the context value

import { createContext } from "react";

// context to be having the 3 things
const CartContext = createContext({
  //creating context
  cart: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
