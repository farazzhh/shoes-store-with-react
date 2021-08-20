import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  let [data,setData] = useState({})
  let [requestData, setRequestData] = useState({});
  
  const dataHandler = (data) => {
    setData(data)
  }
  const requestDataHandler = (data) => {
    setRequestData(data);
  };


  // const [cart, setCart] = useState[null];
  return (
    <ProductsContext.Provider
      value={[data, dataHandler , requestData, requestDataHandler]}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
