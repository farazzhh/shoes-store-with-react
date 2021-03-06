import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  let [data, setData] = useState({});
  let [requestData, setRequestData] = useState({});

  const dataHandler = (data) => {
    setData(data);
  };
  const requestDataHandler = (data) => {
    setRequestData(data);
  };

  // const [cart, setCart] = useState[null];
  return (
    <DataContext.Provider
      value={[data, dataHandler, requestData, requestDataHandler]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
