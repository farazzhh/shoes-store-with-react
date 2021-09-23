import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "100vw" : "0")};
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: ${({ toggle }) => (toggle ? "0" : "-100%")};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: all ease-in-out 0.5s;
  -webkit-transition: all 0.5s ease-in-out;

  z-index: 99;
`;

export const SideBarWrapper = styled.div`
  width: 300px;
  margin-top: -10px;
  padding: 40px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 10px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  @media all and (max-width: 370px) {
    width: 255px;
  }
  @media all and (max-width: 300px) {
    width: 230px;
  }
`;
export const Icon = styled.div`
  position: absolute;
  padding: 0.3rem;
  top: 0;
  right: 0;
  background-color: whitesmoke;
  display: flex;
  border-bottom: 2px lightgray solid;
  border-left: 1px lightgray solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 4px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: #870a30;
`;

export const SideBarMenu = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & a:first-child {
    width: 360px;
    margin: 10px 0 15px;
    border-radius: 5px;
    background-color: #870a30;
    color: whitesmoke;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) -1px 2px 5px;
    img:first-child {
      background-color: rgba(255, 255, 255, 0.5);
    }

    h1 {
      margin-left: 5px;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
      @media all and (max-width: 370px) {
        font-size: 1rem;
      }
    }
    @media all and (max-width: 370px) {
      width: 290px;
    }
    @media all and (max-width: 300px) {
      width: 270px;
    }
  }
`;

export const SideBarLink = styled(Link)`
  padding: 0.9rem 0;
  width: 130px;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  list-style: none;
  font-weight: 400;
  font-size: 14px;
  border-left: #870a30 1px solid;
  border-bottom: #870a30 2px solid;
  box-shadow: rgba(0, 0, 0, 0.3) -1px 1px 4px;
  text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  letter-spacing: 0.5px;
  background-color: whitesmoke;

  @media all and (max-width: 480px) {
    padding: 0.7rem 0;
    font-weight: 500;
  }
  :active {
    background-color: #870a30;
    color: whitesmoke;
    font-weight: 600;
  }
`;
