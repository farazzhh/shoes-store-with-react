import styled from "styled-components";



export const BackgroundPng = styled.img`
  position: absolute;
  max-width: 90vw;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")};
  ${({ top }) => (top ? "top: 1%;" : "bottom: 1%;")};
  transform : ${({ flipH }) => (flipH ? `-webkit-scaleX(-1)` : null)};
  transform: ${({ flipH }) => (flipH ? `scaleX(-1)` : "")};
  opacity: ${({ opacity }) => (opacity ? `${Number(opacity)}` : null)};
  object-fit: contain;
  max-height: 100%;
  @media all and (max-width: 480px){
    width: 50%;
  }
`;
