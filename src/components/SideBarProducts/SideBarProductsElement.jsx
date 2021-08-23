import styled from "styled-components";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "200px" : "100px")};
  height: ${({ toggle }) => (toggle ? "200px" : "40px")};
  background-color: ${({ toggle }) =>
    toggle ? "rgba(239,104,180, 0.7)" : "rgb(239,104,180)"};
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  z-index: 99;
`;

export const Icon = styled.div`
  position: ${({ toggle }) => (toggle ? "absolute" : "static")};
  left: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  span {
    text-align: center;
    transition: all 0.5s ease-in-out;
    width: ${({ toggle }) => (toggle ? "0" : "50px")};
    overflow: hidden;
  }
`;

export const CloseIcon = styled.img`
  transform: ${({ toggle }) => (toggle ? "rotate(-90deg);" : "rotate(90deg);")};
  width: 25px;
  height: 25px;
  transition: all 0.2s ease-in-out;
  @media all and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
export const SideBarMenuWrapper = styled.div`
  height: 100%;
  width: 150px;
`;

export const SideBarMenu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ toggle }) => (toggle ? "100%" : "0")};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: width 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  overflow: hidden;

  input {
    margin-right: 5px;
  }
  label {
    font-weight: 300;
  }
`;

export const SelectionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;

  select {
    border: none;
    outline: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 300;
    width: 80%;
    text-align: center;
  }
`;
export const SideBarLink = styled.span`
  padding: 1rem 2rem;
  cursor: pointer;
  border: 1px solid brown;
  text-decoration: none;
  list-style: none;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  @media all and (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;
