import React, { useContext } from "react";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import {
  SideBarContainer,
  SideBarWrapper,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
} from "./MobileMenuSideBarElement";
import { NavWrapperLogo, Logo } from "../Nav/NavElement";
import { UserDataContext } from "../../providers/UserDataContext";
const SideBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  const [userData, setUserDataHandler, errors, setErrorsHandler] =
    useContext(UserDataContext);
  return (
    <>
      <SideBarContainer toggle={navMobileMenu}>
        <SideBarWrapper>
          <Icon onClick={toggleMobileMenu}>
            <CloseIcon />
          </Icon>
          <div>
            <SideBarMenu>
              <NavWrapperLogo to="/" onClick={toggleMobileMenu}>
                <Logo
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                  alt="logo"
                />
                <h1>ShoesStore</h1>
              </NavWrapperLogo>
              {/* <SideBarLink to="/" onClick={toggleMobileMenu}>
                Home
              </SideBarLink> */}
              <SideBarLink to="/aboutus" onClick={toggleMobileMenu}>
                About us
              </SideBarLink>
              <SideBarLink to="/Products" onClick={toggleMobileMenu}>
                Products
              </SideBarLink>
              <SideBarLink to="/contactus" onClick={toggleMobileMenu}>
                Contact us
              </SideBarLink>
              {!userData.username && (
                <SideBarLink to="/signin" onClick={toggleMobileMenu}>
                  Sign Up/In
                </SideBarLink>
              )}
            </SideBarMenu>
          </div>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
