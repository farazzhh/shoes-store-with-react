import React, { useContext } from "react";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import {
  SideBarContainer,
  SideBarWrapper,
  Icon,
  CloseIcon,
  SideBarMenuWrapper,
  SideBarMenu,
  SideBarLink,
} from "./MobileMenuSideBarElement";
const SideBar = () => {
  const [navMobileMenu, toggleMobileMenu] = useContext(MobileMenuContext);
  return (
    <>
      <SideBarContainer toggle={navMobileMenu}>
        <SideBarWrapper>
          <Icon onClick={toggleMobileMenu}>
            <CloseIcon />
          </Icon>
          <SideBarMenuWrapper>
            <SideBarMenu>
              <SideBarLink to="/" onClick={toggleMobileMenu}>
                Home
              </SideBarLink>
              <SideBarLink to="/aboutus" onClick={toggleMobileMenu}>
                About us
              </SideBarLink>
              <SideBarLink to="/Products" onClick={toggleMobileMenu}>
                Products
              </SideBarLink>
              <SideBarLink to="/contactus" onClick={toggleMobileMenu}>
                Contact us
              </SideBarLink>
              <SideBarLink to="/signin" onClick={toggleMobileMenu}>
                Sign in
              </SideBarLink>
            </SideBarMenu>
          </SideBarMenuWrapper>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
