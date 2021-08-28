import React, { useContext } from "react";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import { ProductsContext } from "../../providers/ProductsContext";
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

const NavBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  const [cartData, pushToCart, removeItemFromCart] = useContext(CartContext);
  const [data] = useContext(ProductsContext);

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

            <SignButton to="/signin">Sign up/in</SignButton>
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
    </Nav>
  );
};

export default NavBar;
