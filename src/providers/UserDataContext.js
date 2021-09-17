import React, { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  

  const setUserDataHandler = ( signUpValue ) => {
      console.log(signUpValue);
       setUserData({
        username: signUpValue.username,
        email: signUpValue.email,
        password: signUpValue.password,
      });
      localStorage.setItem("userData", JSON.stringify(signUpValue));
    
    console.log("userData in setUserDataHandler:", userData);
  };

  return (
    <UserDataContext.Provider
      value={[userData, setUserDataHandler]}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
