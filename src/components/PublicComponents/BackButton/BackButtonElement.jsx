import styled from "styled-components";
import { BackButtonAnimate, ScaleAnimate } from "../keyframes";

export const BackButton = styled.button`
  position: sticky;
  left: 5px;
  top: 5px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 50%;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  animation: ${BackButtonAnimate} 1s linear;
  opacity: 0.7;
  z-index: 10;
  :hover {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    opacity: 1;
  }
  
  @media all and (max-width: 768px) {
    position: absolute;
    opacity: 1;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

export const BackButtonImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
