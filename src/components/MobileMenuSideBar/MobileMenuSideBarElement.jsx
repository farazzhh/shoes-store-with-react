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
  z-index: 99;
`;

export const SideBarWrapper = styled.div`
  min-width: 250px;
  width: 80%;
  padding: 40px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 10px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`;
export const Icon = styled.div`
  position: absolute;
  padding: 0.3rem;
  top: 0;
  right: 0;
  margin: 10px;
  border: 1px solid #870a30;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  width: 25px;
  height: 25px;
  color: #870a30;
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
  padding: 0.7rem 2rem;
  color: #870a30;
  cursor: pointer;
  margin: 15px 0;
  text-decoration: none;
  list-style: none;
  font-weight: 600;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  border-top: #870a30 2px solid;
  border-bottom: #870a30 2px solid;
  border-radius: 10px;

  @media all and (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;
