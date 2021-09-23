import styled from "styled-components";

export const SideBarContainer = styled.aside`
  width: ${({ toggle }) => (toggle ? "200px" : "90px")};
  height: ${({ toggle }) => (toggle ? "230px" : "40px")};
  border: ${({ toggle }) =>
    toggle ? "1px solid rgba(135, 10, 47, 1)" : "none"};
  background-color: ${({ toggle }) =>
    toggle ? "#dcdcdc" : "rgba(135, 10, 47, 1)"};
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  border-radius: 2px;
  border-bottom-right-radius: 10px;

  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  -webkit-transition: all 0.5s ease-in-out;
  z-index: 99;
`;

export const Icon = styled.div`
  left: 0px;
  top: 0;
  height: 40px;
  position: absolute;
  padding: 5px;
  display: flex;
  fill: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  z-index: 10;
  background: rgba(135, 10, 47, 1);
  border-radius: 1px;
  border-bottom-right-radius: 10px;

  span {
    color: #fff;
    text-align: center;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    width: ${({ toggle }) => (toggle ? "0" : "50px")};
    overflow: hidden;
  }
  svg {
    transform: ${({ toggle }) =>
      toggle ? "rotate(-180deg);" : "rotate(0deg);"};
    width: 25px;
    height: 25px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    color: #fff;
    @media all and (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
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
  -webkit-transition: width 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
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

    transition: all 0.2s;
    -webkit-transition: all 0.2s ease-in-out;
    :hover {
      color: whitesmoke;
      background-color: rgba(135, 10, 47, 0.9);
      box-shadow: 0 0px 15px rgba(255, 255, 255, 0.3);
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
