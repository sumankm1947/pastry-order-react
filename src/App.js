import React, { useState } from "react";

import CartContextProvider from "./context/CartContextProvider";
import Home from "./components/Home/Home";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Home onShowCart={showCartHandler}></Home>
      <Items></Items>
    </CartContextProvider>
  );
};

export default App;
