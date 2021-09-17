import React, { useContext } from "react";
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
  WelComeUser,
  WelComeUserMobile,
} from "./NavElement";
import SubMenuComponents from "./SubMenu";
import { UserDataContext } from "../../providers/UserDataContext";

const NavBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  const [cartData, pushToCart, removeItemFromCart] = useContext(CartContext);
  const [data] = useContext(DataContext);
  const [userData, setUserDataHandler, errors, setErrorsHandler] =
    useContext(UserDataContext);

  const subMenuHeight = (subMenu) => {
    return (subMenu.length * 40).toString() + "px";
  };
  const computSubMenuHeight = (menuItems) => {
    if (menuItems.subMenu) {
      return subMenuHeight(menuItems.subMenu);
    }
  };
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
                  submenuheight={() => computSubMenuHeight(menuItems)}
                >
                  {menuItems.name}
                  {menuItems.subMenu && (
                    <SubMenuComponents
                      menu={menuItems.name}
                      subMenu={menuItems.subMenu}
                    />
                  )}
                </NavMenuItem>
              ))}
            {!userData.username && (
              <SignButton to="/signin">Sign up/in</SignButton>
            )}
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
          {userData.username && (
            <WelComeUserMobile>
              <span>{userData.username[0]}</span>
            </WelComeUserMobile>
          )}
          <NavCartMobile to="/cart">
            <NavCartImage
              src={`${process.env.PUBLIC_URL}/assets/images/png/cart.png`}
            />
            {cartData.length === 0 ? null : (
              <NavCartImageSpan>{cartData.length}</NavCartImageSpan>
            )}
          </NavCartMobile>

          <MobileIcon onClick={toggleMobileMenu} />
        </NavMobileWrapper>
      </NavWrapper>
      {userData.username && (
        <WelComeUser bool={userData.username}>
          <span>{userData.username}</span>
        </WelComeUser>
      )}
    </Nav>
  );
};

export default NavBar;
