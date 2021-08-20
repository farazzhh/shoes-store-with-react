import React, { useState, createContext, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [result, setResult] = useState();

  const pushToCart = (newitem) => {
    setResult(newitem);
  };

  const removeItemFromCart = (id) => {
    const data = [...cartData];
    data.splice(id, 1);
    setCartData(data);
    localStorage.removeItem("cartList");
    localStorage.setItem("cartList", JSON.stringify(data));
  };

  useEffect(() => {
    if (result) {
      const data = [...cartData];
      data.push(result);
      setCartData(data);
      localStorage.setItem("cartList", JSON.stringify(data));
    }
  }, [result]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartList"));
    setCartData(data);
  }, []);

  return (
    <CartContext.Provider value={[cartData, pushToCart, removeItemFromCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
