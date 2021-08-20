import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "100vw" : "0")};
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
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
  z-index: 99;
`;

export const SideBarWrapper = styled.div`
  max-width: 450px;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: #870a30;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`;
export const Icon = styled.div`
  position: absolute;
  padding: 0.3rem;
  top: 0;
  right: 0;
  margin: 40px;
  border: 1px solid hotpink;
  display: flex;
  border-radius: 50%;
  cursor: pointer;

`;

export const CloseIcon = styled(FaTimes)`
  width: 25px;
  height: 25px;
  color: #fff;
  @media all and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
export const SideBarMenuWrapper = styled.div`
  height: 70%;
  width: 80%;
`;

export const SideBarMenu = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SideBarLink = styled(Link)`
  padding: 1rem 2rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  border-top: rgb(255, 255, 255) 2px solid;
  border-bottom: rgb(255, 255, 255) 2px solid;
  border-radius: 10px;

  @media all and (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;
