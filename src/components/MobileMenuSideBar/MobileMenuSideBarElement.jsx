import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "100vw" : "0")};
  height: 100vh;
  background-color: whitesmoke;
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
  padding: 30px 0;
  border-radius: 10px;
  position: relative;
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
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
  top: 0px;
  right: 0px;
  display: flex;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  width: 20px;
  height: 20px;
  color: gray;
`;

export const SideBarMenu = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & a:first-child {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 10px;
    width: 300px;
    margin: 10px 0 15px;
    /* border-radius: 5px; */
    background-color: #870a30;
    color: whitesmoke;
    padding: 10px 0;
    img:first-child {
      background-color: rgba(255, 255, 255, 0.5);
    }

    h1 {
      margin-left: 5px;
      font-weight: 500;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
      @media all and (max-width: 370px) {
        font-size: 1rem;
      }
    }
    @media all and (max-width: 370px) {
      width: 255px;
    }
    @media all and (max-width: 300px) {
      width: 230px;
    }
  }
`;

export const SideBarLink = styled(Link)`
  padding: 0.9rem 0;
  width: 80%;
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
  border-radius: 10px;
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
