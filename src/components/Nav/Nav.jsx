import React, { useContext, useMemo,useState } from "react";
import { FaBars } from "react-icons/fa";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import { DataContext } from "../../providers/DataContext";
import { CartContext } from "../../providers/CartContext";
import {
  Nav,
  NavWrapper,
  NavWrapperLogo,
  Logo,
  Title,
  NavCart,
  NavCartMobile,
  NavCartImage,
  NavCartImageSpan,
  NavMenuWrapper,
  NavMenu,
  NavMenuItem,
  SignButton,
  NavMobileWrapper,
  MobileIcon,
} from "./NavElement";
import SubMenuComponents from "./SubMenu";
import { UserDataContext } from "../../providers/UserDataContext";
import UserProfile from "../../pages/Sign/UserProfile";

const NavBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  const [cartData, pushToCart, removeItemFromCart] = useContext(CartContext);
  const [data] = useContext(DataContext);
  
  // const [userData, setUserDataHandler, errors, setErrorsHandler] =
  //   useContext(UserDataContext);
  
  const { user, login, logout } = useContext(UserDataContext);

  const computSubMenuHeight = (menuItems) => {
    if (menuItems.subMenu) {
        return (menuItems.subMenu.length * 40).toString() + "px";
    }
  }
 
  return (
    <Nav className="nav">
      <NavWrapper>
        <NavWrapperLogo to="/">
          <Logo
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt="logo"
          />
          <Title>ShoesStore</Title>
        </NavWrapperLogo>

        <NavMenuWrapper>
          <NavMenu>
            {data.navBarMenu &&
              data.navBarMenu.map((menuItems, index) => (
                <NavMenuItem
                  key={index}
                  to={`${menuItems.to}`}
                  // for computing height of sub menu
                  submenuheight={() => computSubMenuHeight(menuItems)}
                >
                  {/* checking for submenu,if it has, it's rendring submenu */}
                  {menuItems.name}
                  {menuItems.subMenu && (
                    <SubMenuComponents
                      menu={menuItems.name}
                      subMenu={menuItems.subMenu}
                    />
                  )}
                </NavMenuItem>
              ))}
            {/* {!user ? ( */}
            <SignButton onClick={login}>Sign Up/In</SignButton>
            {/* ) : ( */}
            {/* <UserProfile bool={user.username} /> */}
            {/* "" */}
            {/* )} */}

            <NavCart to="/cart">
              <NavCartImage
                src={`${process.env.PUBLIC_URL}/assets/images/png/cart.png`}
              />
              {cartData.length === 0 ? null : (
                <NavCartImageSpan>{cartData.length}</NavCartImageSpan>
              )}
            </NavCart>
          </NavMenu>
        </NavMenuWrapper>

        <NavMobileWrapper>
          {/* username disapear after sign Up or In */}
          {user && <UserProfile bool={user} />}

          <NavCartMobile to="/cart">
            <NavCartImage
              src={`${process.env.PUBLIC_URL}/assets/images/png/cart.png`}
            />
            {!cartData.length ? null : (
              <NavCartImageSpan>{cartData.length}</NavCartImageSpan>
            )}
          </NavCartMobile>

          <MobileIcon onClick={toggleMobileMenu}>
            <FaBars />
          </MobileIcon>
        </NavMobileWrapper>
        {/* {userData.username && (
          <UserProfile bool={userData.username} mobile={false} />
        )} */}
      </NavWrapper>
    </Nav>
  );
};

export default NavBar
