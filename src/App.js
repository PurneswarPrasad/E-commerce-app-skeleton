import "./App.css";
import Products from "./components/Products";
import { useState } from "react";
import CartContext from "./context/CartContext";
import FullCart from "./components/FullCart";

//we want to make a Context which will be available to all the children

function App() {
  const [cart, setCart] = useState({});

  function addToCart(product) {
    const newCart = { ...cart }; // copy of the state is done as a particular change in the key of the object.
    console.log(product, newCart);
    
    if (!newCart[product.id]) {
      // chekcing if a product is not there and adding it
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);

    console.log(product);
  }

  function removeFromCart(product) {
    console.log(product);
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    //provides the context, which wraps everything around, to everyone
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="App">
        <FullCart />
        <Products />
      </div>
    </CartContext.Provider>
  );
}

export default App;
