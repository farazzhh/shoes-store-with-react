import styled from "styled-components";
import { BackButtonAnimate, ScaleAnimate } from "../keyframes";

export const BackButton = styled.button`
  position: fixed;
  left: 5px;
  top: 45%;
  background-color: rgba(255, 255, 255,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 50%;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  animation: ${BackButtonAnimate} 2s linear 1s forwards;
  opacity: 0;
  z-index: 10;
  :hover , :active {
    opacity: 1;
  }
`
export const BackButtonImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  @media all and (max-width: 768px) {
  width  : 40px;
  height: 40px;
  }
  `;
