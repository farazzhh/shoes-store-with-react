import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

 const setUserDataHandler = ( signUpValue ) => {
       setUserData({
        username: signUpValue.username,
        email: signUpValue.email,
        password: signUpValue.password,
       });

    localStorage.setItem(
      "userData",
      JSON.stringify({
        username: signUpValue.username,
        email: signUpValue.email,
      })
    );

  };

  return (
    <UserDataContext.Provider
      value={[userData, setUserDataHandler]}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
