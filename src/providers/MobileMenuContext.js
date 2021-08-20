import React, { createContext, useState } from "react";

export const MobileMenuContext = createContext();

export const MobileMenuProvider = (props) => {
  const [navMobileMenu, setNavMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setNavMobileMenu(!navMobileMenu);
  };

  return (
    <MobileMenuContext.Provider value={[ navMobileMenu, toggleMobileMenu]}>
      {props.children}
    </MobileMenuContext.Provider>
  );
};
