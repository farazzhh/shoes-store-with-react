import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({
    username: "Faraz",
    email: "F@f.com",
    password: "ffffff",
  });

  const setUserDataHandler = (data) => {
    setUserData({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <UserDataContext.Provider value={[userData, setUserDataHandler]}>
      {props.children}
    </UserDataContext.Provider>
  );
};
