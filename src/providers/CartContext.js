import React, { useState, createContext, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  
  const pushToCart = (newItem) => {
    let data = [...cartData, newItem]; 
    setCartData(data);
    localStorage.setItem("cartList", JSON.stringify(data));
  };

  const removeItemFromCart = (id) => {
    let data = [...cartData];
    data.splice(id, 1);
    setCartData(data);
    localStorage.removeItem("cartList");
    localStorage.setItem("cartList", JSON.stringify(data));
  };

  useEffect(() => {
    const loadDataFromLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem("cartList"));
      if (data) {
        if (cartData) {
          let [re] = [...cartData,data];
          setCartData(re);
        } else {
          let re = [...data];
          setCartData(re);
        }
      }
    };

    loadDataFromLocalStorage();
  }, []);

  return (
    <CartContext.Provider value={[cartData, pushToCart, removeItemFromCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
