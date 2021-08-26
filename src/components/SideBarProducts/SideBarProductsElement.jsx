import styled from "styled-components";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "250px" : "100px")};
  height: ${({ toggle }) => (toggle ? "230px" : "40px")};
  background-color: ${({ toggle }) =>
    toggle && "rgba(239,104,180, 1)" };
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  z-index: 99;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

export const Icon = styled.div`
  left: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  background: rgb(239, 104, 180);
  border-radius: 1px;
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
  width: 200px;
`;

export const SideBarMenu = styled.div`
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
  button {
    font-weight: 600;
    border: none;
    width: 80px;
    margin-top: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    :hover {
      background: rgb(216, 216, 216);
    }
  }
`;

export const SelectionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  select {
    border: none;
    outline: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    width: 70%;
    padding: 2px;
    text-align: center;
  }
`;

