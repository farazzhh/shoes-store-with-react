<<<<<<< HEAD
// import React, { createContext, useEffect, useState } from "react";

// export const UserDataContext = createContext();

// export const UserDataProvider = (props) => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//  const setUserDataHandler = ( signUpValue ) => {
//        setUserData({
//         username: signUpValue.username,
//         email: signUpValue.email,
//         password: signUpValue.password,
//        });

//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         username: signUpValue.username,
//         email: signUpValue.email,
//         password: signUpValue.password,
//       })
//     );

//   };

//   return (
//     <UserDataContext.Provider
//       value={[userData, setUserDataHandler]}
//     >
//       {props.children}
//     </UserDataContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";

import netlifyIdentity from "netlify-identity-widget";

export const UserDataContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });
    // init netlify identity connection
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
=======
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

>>>>>>> reverse-befor-netlify
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = [];

  return (
    <UserDataContext.Provider value={{user, login, logout}}>
      {children}
    </UserDataContext.Provider>
  );
};
