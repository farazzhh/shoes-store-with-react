import styled from "styled-components";
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
  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;

export const NavWrapperLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  background-color: rgba(135, 10, 47, 0.8);
  padding: 5px;
  border-radius: 50%;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
  @media all and (max-width: 370px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 5px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  @media all and (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export const NavMobileWrapper = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: -webkit-flex;
    display: flex;
  }
  @media screen and (max-width: 370px) {
    gap: 10px;
  }
`;

export const MobileIcon = styled.div`
  width: 40px;
  height: 100%;
  cursor: pointer;
  display: flex;
  @media all and (max-width: 370px) {
    /* width: 20px; */
  }

  svg {
    font-size: 20px;
    margin: auto;
    width: 100%;
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
  width: 100px;
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
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;

  &:hover {
    overflow: visible;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
    border-bottom: #870a30 1px solid;
    transform: translateY(1px);

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
  width: 100px;
  text-align: center;
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
  -webkit-transition: all 0.1s ease-in-out;
  transform: scaleY(10px);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
    border-bottom: #870a30 1px solid;
    transform: translateY(1px);
  }
`;

export const NavCartMobile = styled(LinkR)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  position: relative;
  @media all and (max-width: 370px) {
    /* margin-right: 1rem; */
  }
`;

export const NavCart = styled(LinkR)`
  height: 30px;
  width: 70px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 2px;
  display: flex;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  text-transform: capitalize;
  transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
    border-bottom: #870a30 1px solid;
    transform: translateY(1px);
  }
`;

export const NavCartImageSpan = styled.span`
  padding: 0 2px;
  color: rgb(135, 10, 47);
  font-size: 14px;
  font-weight: 500;
  font-size: 16px;
  min-width: 18px;
  text-align: center;
  border-radius: 50%;
  z-index: -1;
  @media all and (max-width: 768px) {
    font-size: 14px;
    position: absolute;
    min-width: 20px;
    top: 18px;
    right: 7px;
  }
`;

export const NavCartImage = styled.img`
  height: 15px;
  object-fit: cover;
  @media all and (max-width: 768px) {
    position: absolute;
    height: 18px;
  }
`;
