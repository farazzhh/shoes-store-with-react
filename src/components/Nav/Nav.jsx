import React, { useContext, useEffect, useState } from "react";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import { ProductsContext } from "../../providers/ProductsContext";
import {
  Nav,
  NavWrapper,
  NavWrapperLogo,
  Logo,
  Title,
  NavCart,
  NavCartMobile,
  NavCartImage,
  NavMenuWrapper,
  NavMenu,
  NavMenuItemWrapper,
  NavMenuItem,
  SignButton,
  NavMobileWrapper,
  MobileIcon,
} from "./NavElement";
import SubMenu from "./SubMenu";

const NavBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  
  const subMenuHeight = (subMenu) => {
    return (subMenu.length * 40).toString() + "px";
  }

  return (
    <Nav className="nav">
      <NavWrapper>
        <NavWrapperLogo href="/">
          <Logo
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt="logo"
          />
          <Title>ShoesStore</Title>
        </NavWrapperLogo>

        <NavMenuWrapper>
          <NavMenu>
            {data.navbarmenu &&
              data.navbarmenu.map((menuItems) => (
    <>
                  <NavMenuItem
                    to={`${menuItems.to}`}
                    subMenuHeight={
                      menuItems.submenu &&
                      (() => subMenuHeight(menuItems.submenu))
                    }
                  >
                    {menuItems.name}

                    {menuItems.submenu && (
                      <SubMenu
                        menu={menuItems.name}
                        subMenu={menuItems.submenu}
                        subMenuHeight={
                          menuItems.submenu &&
                          (() => subMenuHeight(menuItems.submenu))
                        }
                      />
                    )}
                  </NavMenuItem>
              </>
              ))}

            <SignButton to="/signin">Sign up/in</SignButton>
            <NavCart to="/cart">
              <NavCartImage
                src={`${process.env.PUBLIC_URL}/assets/images/png/cart.png`}
              />
            </NavCart>
          </NavMenu>
        </NavMenuWrapper>
        <NavMobileWrapper>
          <NavCartMobile to="/cart" mobileMenu={true}>
            <NavCartImage
              src={`${process.env.PUBLIC_URL}/assets/images/png/cart.png`}
            />
          </NavCartMobile>
          <MobileIcon onClick={toggleMobileMenu} />
        </NavMobileWrapper>
      </NavWrapper>
    </Nav>
  );
};

export default NavBar;
