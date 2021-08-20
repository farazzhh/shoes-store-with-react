import React, { useState, createContext } from "react";

export const CartContext = createContext();



export const CartProvider = (props) => {
   const [cartData, setCartData] = useState([]);
   
  const pushToCart = (newitem) => {
    const data = cartData ;
    data.push({...newitem });
    return setCartData(data);
    }
   
  
  const removeItemFromCart = (id) => {
    const data = [...cartData];
    data.splice(id, 1);
    setCartData(data);
  }
  
  return (
    <CartContext.Provider value={[cartData, pushToCart, removeItemFromCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
