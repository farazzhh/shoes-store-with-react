import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const val = {
    loading,
    setLoading,
  };
  return (
    <LoadingContext.Provider value={val}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
