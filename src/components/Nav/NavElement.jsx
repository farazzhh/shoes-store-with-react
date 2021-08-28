import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link, Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const NavWrapperLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  background-color: rgb(255, 105, 180);
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 480px) {
    width: 45px;
    height: 45px;
    /* width: 95%; */
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin-left: 5px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    /* width: 95%; */
  }
`;

export const NavMobileWrapper = styled.div`
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileIcon = styled(FaBars)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media all and (max-width: 370px) {
    width: 20px;
    height: 20px;
  }
`;

export const NavMenuWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuItem = styled(LinkR)`
  height: 30px;
  width: 110px;
  text-align: center;
  position: relative;
  overflow: hidden;
  list-style: none;
  margin-left: 0.5rem;
  color: #000;
  padding: 6px 0px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    overflow: visible;
    background: linear-gradient(
      to top,
      rgba(255, 105, 180, 0.2),
      rgb(255, 255, 255),
      rgba(255, 105, 180, 0.2)
    );
    box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
    border-bottom: rgba(255, 105, 180, 1) 2px solid;
    transform: translateY(2px);
    /* ul is submenu */
    @media screen and (min-width: 769px) {
      ul {
        opacity: 1;
        height: ${({ submenuheight }) => submenuheight};
      }
    }
  }
`;

export const SignButton = styled(LinkR)`
  height: 30px;
  list-style: none;
  margin-left: 0.5rem;
  color: #000;
  padding: 6px 15px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.1s ease-in-out;
  transform: scaleY(10px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    background: linear-gradient(
      to top,
      rgba(255, 105, 180, 0.2),
      rgb(255, 255, 255),
      rgba(255, 105, 180, 0.2)
    );
    box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
    border-bottom: rgba(255, 105, 180, 1) 2px solid;
    transform: translateY(2px);
  }
`;

export const NavCart = styled(LinkR)`
  height: 35px;
  width: 60px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 0.5rem;
  box-shadow: 0 1px 5px rgba(107, 78, 78, 0.6);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;
  border-bottom: rgba(255, 105, 180, 1) 1px solid;
  &:hover {
    background: linear-gradient(
      to top,
      rgb(255, 255, 255) 20%,
      rgb(255, 105, 180)
    );
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    border-bottom: rgba(255, 105, 180, 1) 2px solid;
    transform: translateY(2px);
  }
`;
export const NavCartImageSpan = styled.span`
  color: #fff;
  font-size: 14px;
  min-width: 20px;
  text-align: center;
  border-radius: 50%;
  font-weight: 500;
  background-color: #870a30;
`;

export const NavCartMobile = styled(LinkR)`
  height: 100%;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.4rem;

  @media all and (max-width: 370px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`;
export const NavCartImage = styled.img`
  margin-right: 2px;
  height: 17px;
  object-fit: contain;
`;
