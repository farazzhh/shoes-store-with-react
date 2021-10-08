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
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  const { user } = useAuth0();
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
              {!user && (
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
